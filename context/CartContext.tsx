"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import { getDiscountedPrice, getProductPriceForSize } from "@/lib/utils";

export interface CartItem {
  id: string | number;
  name: string;
  slug: string;
  brandName?: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  size: string;
  color?: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string | number, size: string, color?: string) => void;
  updateQuantity: (id: string | number, size: string, quantity: number, color?: string) => void;
  clearCart: () => void;
  refreshCartPrices: () => Promise<void>;
  isSyncing: boolean;
  totalPrice: number;
  subtotal: number;
  deliveryFee: number;
  discountAmount: number;
  couponCode: string;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "lhc_cart_items_v1";

const isSameCartItem = (it: CartItem, id: string | number, size: string, color?: string) =>
  String(it.id) === String(id) && it.size === size && (it.color || "") === (color || "");

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [couponCode, setCouponCode] = useState<string>("");
  const lastSyncTimeRef = useRef<number>(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setItems(parsed);
      }
      const savedCoupon = localStorage.getItem("lhc_active_coupon");
      if (savedCoupon) setCouponCode(savedCoupon);
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage on state changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [items, isLoaded]);

  /**
   * Sync active cart items with latest database prices & discounts.
   * Runs when user opens cart, reopens site, or switches back to tab.
   */
  const refreshCartPrices = useCallback(async () => {
    if (items.length === 0) return;

    // Rate-limit sync calls to once every 15 seconds unless forced
    const now = Date.now();
    if (now - lastSyncTimeRef.current < 15000) return;
    lastSyncTimeRef.current = now;

    setIsSyncing(true);
    try {
      // Fetch latest catalog slice or individual product details
      const backendUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL ||
        (process.env.NODE_ENV === "production"
          ? "https://api.leatherhavencraft.com"
          : "http://localhost:5000");

      const res = await fetch(`${backendUrl}/api/products?limit=200&inStock=all`, {
        cache: "no-store",
      });

      if (!res.ok) return;
      const json = await res.json();
      if (!json.success || !Array.isArray(json.data)) return;

      const liveProducts = json.data as Array<{
        _id?: string;
        id?: string | number;
        slug?: string;
        name?: string;
        price: number;
        discountPercent?: number;
      }>;

      // Map by id and slug for instant lookup
      const productMap = new Map<string, { price: number; discountPercent: number; name?: string }>();
      for (const p of liveProducts) {
        const keyId = String(p._id || p.id || "");
        const keySlug = String(p.slug || "").toLowerCase();
        const info = {
          price: Number(p.price) || 0,
          discountPercent: Number(p.discountPercent) || 0,
          name: p.name,
        };
        if (keyId) productMap.set(keyId, info);
        if (keySlug) productMap.set(keySlug, info);
      }

      setItems((prevItems) => {
        let hasChanges = false;
        const updated = prevItems.map((cartItem) => {
          const liveInfo =
            productMap.get(String(cartItem.id)) ||
            productMap.get(String(cartItem.slug).toLowerCase());

          if (!liveInfo) return cartItem;

          // Recompute effective price with size surcharge and latest discount
          const basePrice = liveInfo.price;
          const discountPct = liveInfo.discountPercent;
          const discountedBase = getDiscountedPrice(basePrice, discountPct);
          const newEffectivePrice = getProductPriceForSize(discountedBase, cartItem.size);
          const newOriginalPrice = getProductPriceForSize(basePrice, cartItem.size);

          if (
            cartItem.price !== newEffectivePrice ||
            cartItem.discountPercent !== discountPct ||
            cartItem.originalPrice !== newOriginalPrice
          ) {
            hasChanges = true;
            return {
              ...cartItem,
              price: newEffectivePrice,
              originalPrice: newOriginalPrice,
              discountPercent: discountPct,
            };
          }
          return cartItem;
        });

        return hasChanges ? updated : prevItems;
      });
    } catch (err) {
      console.error("[CartContext] Error syncing live prices:", err);
    } finally {
      setIsSyncing(false);
    }
  }, [items.length]);

  // Sync on initial cart load once items are loaded
  useEffect(() => {
    if (isLoaded && items.length > 0) {
      refreshCartPrices();
    }
  }, [isLoaded, refreshCartPrices]);

  // Sync when window refocuses or user reopens page
  useEffect(() => {
    const handleFocus = () => {
      refreshCartPrices();
    };
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        refreshCartPrices();
      }
    });

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [refreshCartPrices]);

  const openCart = () => {
    setIsOpen(true);
    refreshCartPrices();
  };

  const closeCart = () => setIsOpen(false);
  const toggleCart = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) refreshCartPrices();
      return next;
    });
  };

  const addItem = (newItem: Omit<CartItem, "quantity">, qty: number = 1) => {
    setItems((prev) => {
      const existingIdx = prev.findIndex((it) =>
        isSameCartItem(it, newItem.id, newItem.size, newItem.color)
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + qty,
        };
        return updated;
      }
      return [...prev, { ...newItem, quantity: Math.max(1, qty) }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string | number, size: string, color?: string) => {
    setItems((prev) =>
      prev.filter((it) => !isSameCartItem(it, id, size, color))
    );
  };

  const updateQuantity = (id: string | number, size: string, quantity: number, color?: string) => {
    if (quantity <= 0) {
      removeItem(id, size, color);
      return;
    }
    setItems((prev) =>
      prev.map((it) =>
        isSameCartItem(it, id, size, color) ? { ...it, quantity } : it
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyCoupon = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === "FREEDELIVERY" || clean === "FREE50") {
      setCouponCode(clean);
      localStorage.setItem("lhc_active_coupon", clean);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCouponCode("");
    localStorage.removeItem("lhc_active_coupon");
  };

  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const totalItems = items.reduce((sum, it) => sum + it.quantity, 0);
  
  // Standard express delivery is $50 when items exist
  const baseDelivery = items.length > 0 ? 50 : 0;
  // If FREEDELIVERY coupon applied, discount $50
  const isFreeDelivery = couponCode === "FREEDELIVERY" || couponCode === "FREE50";
  const deliveryFee = baseDelivery;
  const discountAmount = isFreeDelivery ? baseDelivery : 0;
  const totalPrice = Math.max(0, subtotal + deliveryFee - discountAmount);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        refreshCartPrices,
        isSyncing,
        subtotal,
        deliveryFee,
        discountAmount,
        couponCode,
        applyCoupon,
        removeCoupon,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

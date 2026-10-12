"use client";

import React, { useEffect, useState } from "react";
import { formatPrice } from "@/lib/utils";

interface StickyMobileQuickBuyProps {
  productName: string;
  image: string;
  brandName?: string;
  price: number;
  selectedSize: string;
  onAddToCart: () => void;
  onWhatsAppOrder: () => void;
}

export function StickyMobileQuickBuy({
  productName,
  image,
  brandName,
  price,
  selectedSize,
  onAddToCart,
  onWhatsAppOrder,
}: StickyMobileQuickBuyProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down past 420px on mobile
      if (window.scrollY > 420) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Quick Order"
      className="fixed bottom-0 inset-x-0 z-30 lg:hidden border-t border-[#e2d7c8] bg-white/95 p-3.5 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all animate-in slide-in-from-bottom duration-300"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        {/* Left: Thumbnail, Name, Size & Price */}
        <div className="flex min-w-0 items-center gap-2.5">
          {image && (
            <img
              src={image}
              alt={productName}
              className="h-11 w-11 shrink-0 rounded-lg border border-[#e5dcce] object-cover bg-[#f5f2eb]"
            />
          )}
          <div className="min-w-0">
            <span className="block truncate text-xs font-bold text-[#1e1713]">
              {productName}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-[#7a6b5e]">
              <span className="font-semibold text-[#8a4d2b]">{formatPrice(price)}</span>
              <span>·</span>
              <span className="rounded bg-[#f5efe6] px-1.5 py-0.2 font-medium text-[#2a1810]">
                Size {selectedSize}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Lock User into Cart / Add to Bag */}
        <div className="flex shrink-0 items-center">
          <button
            type="button"
            onClick={onAddToCart}
            className="flex h-10 items-center justify-center rounded-lg bg-[#2a1810] px-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#3d2417] active:scale-95 transition-all cursor-pointer"
          >
            Add to Bag &amp; Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

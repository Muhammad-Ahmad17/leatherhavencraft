"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/contact";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
    subtotal,
    deliveryFee,
    discountAmount,
    couponCode,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [couponError, setCouponError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const success = applyCoupon(inputCode);
    if (!success) {
      setCouponError("Invalid promotional code.");
    } else {
      setCouponError("");
      setInputCode("");
    }
  };

  const orderSummaryText = items
    .map(
      (it, idx) =>
        `${idx + 1}. ${it.name}${it.brandName ? ` (${it.brandName})` : ""}\n   ${it.color ? `Color: ${it.color} | ` : ""}Size: ${it.size} | Qty: ${it.quantity} | ${formatPrice(it.price * it.quantity)}`
    )
    .join("\n\n");

  const fullOrderMessage = [
    "Hello Leather Haven Craft Atelier,",
    "",
    "I would like to place an order inquiry for the following bespoke pieces:",
    "",
    orderSummaryText,
    "",
    `Subtotal: ${formatPrice(subtotal)}`,
    discountAmount > 0 ? `Express Air Courier: $50.00 (Waived via code ${couponCode})` : `Express Air Courier: $50.00`,
    `Final Total Due: ${formatPrice(totalPrice)}`,
    "",
    "Please confirm tailoring lead time and delivery schedule.",
  ].join("\n");

  const whatsappHref = buildWhatsAppUrl(fullOrderMessage);

  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Order Inquiry: ${totalItems} ${totalItems === 1 ? "Piece" : "Pieces"} (${formatPrice(totalPrice)})`
  )}&body=${encodeURIComponent(fullOrderMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/50 transition-opacity backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Slide-over Panel (Minimalist Luxury Light Aesthetic) */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#faf8f5] text-[#1c1815] shadow-2xl border-l border-[#e5dcce] animate-slideInRight">
        {/* Editorial Atelier Header */}
        <div className="flex items-center justify-between border-b border-[#e5dcce] bg-white px-7 py-5">
          <div className="flex items-center gap-3">
            <span className="font-serif text-base font-bold tracking-tight text-[#1c1815]">
              Shopping Bag
            </span>
            <span className="rounded border border-[#ded5c7] bg-[#f5efe6] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#7a6b5e]">
              {totalItems} {totalItems === 1 ? "Piece" : "Pieces"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7a6b5e] hover:text-[#1c1815] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Selected Pieces List */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-24 text-center">
              <span className="font-serif text-sm italic text-[#7a6b5e]">Your bag is currently empty.</span>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={closeCart}
                  className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1c1815] underline underline-offset-8 hover:text-[#8a4d2b] transition-colors cursor-pointer"
                >
                  Discover Outerwear Archive
                </button>
              </div>
            </div>
          ) : (
            items.map((it) => (
              <div
                key={`${it.id}-${it.size}-${it.color || ""}`}
                className="flex gap-4 rounded-xl border border-[#e5dcce] bg-white p-4 shadow-2xs"
              >
                {/* Garment Image */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#f0ebe3] border border-[#e8e2d8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.image}
                    alt={it.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Garment Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${it.slug}`}
                      onClick={closeCart}
                      className="font-serif text-xs font-bold text-[#1c1815] hover:text-[#8a4d2b] transition-colors line-clamp-1"
                    >
                      {it.name}
                    </Link>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-[#7a6b5e]">
                      {it.color && (
                        <span>
                          Color: <span className="font-medium text-[#1c1815]">{it.color}</span>
                        </span>
                      )}
                      <span>
                        Size: <span className="font-medium text-[#1c1815]">{it.size}</span>
                      </span>
                    </div>

                    <div className="mt-1.5 flex items-baseline gap-2 text-xs">
                      {it.discountPercent && it.discountPercent > 0 ? (
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-bold text-[#8a4d2b]">{formatPrice(it.price)}</span>
                          {it.originalPrice ? (
                            <span className="text-[10px] text-[#9c8e82] line-through">
                              {formatPrice(it.originalPrice)}
                            </span>
                          ) : null}
                          <span className="rounded bg-[#9e2a2b]/10 text-[#9e2a2b] px-1.5 py-0.2 text-[9px] font-bold">
                            -{it.discountPercent}%
                          </span>
                        </div>
                      ) : (
                        <span className="font-bold text-[#1c1815]">{formatPrice(it.price)}</span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Stepper & Removal */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#f0ebe3] pt-2">
                    <div className="flex items-center rounded border border-[#ded5c7] bg-[#faf8f5]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(it.id, it.size, it.quantity - 1, it.color)}
                        className="flex h-6 w-6 items-center justify-center text-xs text-[#5a3828] hover:bg-white transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        –
                      </button>
                      <span className="w-6 text-center text-xs font-medium text-[#1c1815]">
                        {it.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(it.id, it.size, it.quantity + 1, it.color)}
                        className="flex h-6 w-6 items-center justify-center text-xs text-[#5a3828] hover:bg-white transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(it.id, it.size, it.color)}
                      className="text-[10px] font-bold uppercase tracking-wider text-[#994d38] hover:text-[#732918] transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Financial Breakdown & Checkout Panel */}
        {items.length > 0 && (
          <div className="border-t border-[#e5dcce] bg-white p-6 space-y-4">
            {/* Promotional Code Form */}
            <div className="rounded-xl border border-[#e5dcce] bg-[#faf8f5] p-3.5">
              {couponCode ? (
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a6b5e]">Code</span>
                    <span className="font-mono font-bold text-[#1c1815]">{couponCode}</span>
                    <span className="rounded bg-[#25D366]/15 text-[#128C7E] px-1.5 py-0.5 text-[10px] font-bold">
                      -$50.00 Applied
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-[10px] font-bold uppercase tracking-wider text-[#994d38] hover:underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="PROMOTIONAL CODE"
                      value={inputCode}
                      onChange={(e) => {
                        setInputCode(e.target.value);
                        if (couponError) setCouponError("");
                      }}
                      className="flex-1 rounded-lg border border-[#ded5c7] bg-white px-3 py-2 text-xs uppercase tracking-wider text-[#1c1815] placeholder:text-[#a89a8c] focus:border-[#8a4d2b] focus:outline-hidden"
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-[#1c1815] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-[#3d2417] transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-[10px] text-[#994d38] font-medium">{couponError}</p>
                  )}
                </form>
              )}
            </div>

            {/* Line Item Ledger */}
            <div className="space-y-2 text-xs text-[#706456]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-[#1c1815]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Express Worldwide Air Courier</span>
                {discountAmount > 0 ? (
                  <span className="flex items-center gap-1.5">
                    <span className="line-through text-[#a89a8c]">$50.00</span>
                    <span className="font-bold text-[#1c1815]">Complimentary</span>
                  </span>
                ) : (
                  <span className="font-medium text-[#1c1815]">$50.00</span>
                )}
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#8a4d2b] font-medium">
                  <span>Promotional Privilege ({couponCode})</span>
                  <span>-$50.00</span>
                </div>
              )}
              <div className="flex justify-between border-t border-[#e5dcce] pt-3 text-sm font-bold text-[#1c1815]">
                <span className="font-serif">Estimated Total</span>
                <span className="font-serif text-base text-[#1c1815]">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            {/* Checkout CTAs */}
            <div className="space-y-2.5 pt-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#2a1810] px-4 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#3d2417] transition-all shadow-sm cursor-pointer"
              >
                Proceed via WhatsApp Concierge
              </a>
              <a
                href={mailHref}
                className="flex h-12 w-full items-center justify-center rounded-xl border border-[#1c1815] bg-white px-4 text-xs font-bold uppercase tracking-[0.15em] text-[#1c1815] hover:bg-[#faf8f5] transition-all shadow-2xs cursor-pointer"
              >
                Inquire via Email Concierge
              </a>
            </div>

            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={clearCart}
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a7a6c] hover:text-[#1c1815] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice, isPlusSize } from "@/lib/utils";
import { buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/contact";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart();

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

  const orderSummaryText = items
    .map(
      (it, idx) =>
        `${idx + 1}. ${it.name}${it.brandName ? ` (${it.brandName})` : ""}\n   ${it.color ? `Color: ${it.color} | ` : ""}Size: ${it.size} | Qty: ${it.quantity} | ${formatPrice(it.price * it.quantity)}`
    )
    .join("\n\n");

  const fullOrderMessage = [
    "Hello Leather Haven Craft,",
    "",
    "I would like to place an order inquiry for the following selection:",
    "",
    orderSummaryText,
    "",
    `Total: ${formatPrice(totalPrice)}`,
    "",
    "Please confirm availability and dispatch timeline.",
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
        className="fixed inset-0 bg-black/40 transition-opacity backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Slide-over Panel (Warm Luxury Light Theme) */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#faf8f5] text-[#1e1713] shadow-2xl border-l border-[#e8e2d8] animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e8e2d8] bg-white px-6 py-5">
          <div className="flex items-center gap-2.5">
            <h2 className="text-base font-semibold uppercase tracking-wider text-[#2a1810]">
              Shopping Bag
            </h2>
            <span className="rounded-full bg-[#f0ebe3] px-2 py-0.5 text-[11px] font-semibold text-[#5a3828]">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-8 w-8 items-center justify-center rounded-md text-[#7a6b5e] hover:bg-[#f0ebe3] hover:text-[#1e1713] transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            ✕
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#ece6dd]">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-16">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0ebe3] text-[#5a3828] mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 7h12l-1 14H7L6 7z" />
                  <path d="M9 7V5a3 3 0 016 0v2" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-[#2a1810]">Your bag is empty</h3>
              <p className="mt-1 text-xs text-[#7a6b5e] max-w-xs">
                Explore our catalog to select an authentic heritage piece.
              </p>
              <Link
                href="/products"
                onClick={closeCart}
                className="mt-5 rounded-md bg-[#2a1810] text-white px-5 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#3d2417] transition-colors shadow-xs"
              >
                Browse Collection
              </Link>
            </div>
          ) : (
            items.map((it) => (
              <div key={`${it.id}-${it.size}-${it.color || ""}`} className="flex gap-4 py-4">
                {/* Thumbnail */}
                <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-md bg-white border border-[#e5ded3] shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.image || "/catalog/field-bomber.jpg"}
                    alt={it.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    {it.brandName && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a4d2b]">
                        {it.brandName}
                      </span>
                    )}
                    <h4 className="text-xs font-semibold text-[#1e1713] line-clamp-1">
                      <Link href={`/products/${it.slug}`} onClick={closeCart} className="hover:text-[#8a4d2b] transition-colors">
                        {it.name}
                      </Link>
                    </h4>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#7a6b5e]">
                      {it.color && (
                        <>
                          <span>Color: <strong className="text-[#1e1713] font-semibold">{it.color}</strong></span>
                          <span>·</span>
                        </>
                      )}
                      <span>Size: <strong className="text-[#1e1713] font-semibold">{it.size}</strong></span>
                      {isPlusSize(it.size) && (
                        <span className="rounded bg-[#8a4d2b]/10 px-1.5 py-0.5 text-[9px] font-semibold text-[#8a4d2b]">
                          +$20
                        </span>
                      )}
                      <span>·</span>
                      <span className="text-[#1e1713] font-bold">{formatPrice(it.price)}</span>
                    </div>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div className="mt-2.5 flex items-center justify-between">
                    <div className="flex items-center rounded-md border border-[#ded5c7] bg-white shadow-xs">
                      <button
                        type="button"
                        onClick={() => updateQuantity(it.id, it.size, it.quantity - 1, it.color)}
                        className="flex h-6 w-6 items-center justify-center text-xs text-[#5a3828] hover:bg-[#f5f1eb] transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        –
                      </button>
                      <span className="w-6 text-center text-xs font-semibold text-[#1e1713]">
                        {it.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(it.id, it.size, it.quantity + 1, it.color)}
                        className="flex h-6 w-6 items-center justify-center text-xs text-[#5a3828] hover:bg-[#f5f1eb] transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(it.id, it.size, it.color)}
                      className="text-[11px] font-medium text-[#994d38] hover:text-[#732918] transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Actions */}
        {items.length > 0 && (
          <div className="border-t border-[#e8e2d8] bg-white p-6 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#7a6b5e]">Estimated Total</span>
              <span className="text-lg font-bold text-[#1e1713]">{formatPrice(totalPrice)}</span>
            </div>

            <p className="text-[11px] text-[#7a6b5e]">
              Complimentary express courier to North America &amp; Europe included.
            </p>

            {/* Actions */}
            <div className="space-y-2 pt-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center rounded-md bg-[#25D366] px-4 text-xs font-semibold uppercase tracking-wider text-black hover:bg-[#20ba59] transition-colors shadow-xs"
              >
                Order via WhatsApp
              </a>
              <a
                href={mailHref}
                className="flex h-11 w-full items-center justify-center rounded-md bg-[#2a1810] px-4 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] transition-colors shadow-xs"
              >
                Order via Email Concierge
              </a>
            </div>

            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={clearCart}
                className="text-[11px] text-[#8a7a6c] hover:text-[#1e1713] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Clear Bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

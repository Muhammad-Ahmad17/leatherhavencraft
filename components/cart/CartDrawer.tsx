"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/contact";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, totalPrice, totalItems } =
    useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeCart();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  // Lock body scroll when cart is open
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

  // Build unified multi-item order message for WhatsApp
  const buildMultiOrderText = () => {
    let msg = "Hi Leather Haven Craft — I would like to order the following piece(s) from my selection:\n\n";
    items.forEach((it, idx) => {
      msg += `${idx + 1}. ${it.name}${it.brandName ? ` (${it.brandName})` : ""}\n`;
      msg += `   Size: ${it.size} | Qty: ${it.quantity} | ${formatPrice(it.price * it.quantity)}\n\n`;
    });
    msg += `Total: ${formatPrice(totalPrice)}\n`;
    msg += "Destination: Europe / USA\n\n";
    msg += "Please confirm availability and dispatch timeline.";
    return msg;
  };

  const whatsappHref = buildWhatsAppUrl(buildMultiOrderText());
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Order Inquiry: ${totalItems} Piece(s) (${formatPrice(totalPrice)})`
  )}&body=${encodeURIComponent(buildMultiOrderText())}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-[#16120e] text-[#f7f5f2] shadow-2xl flex flex-col border-l border-[#2e261f]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2e261f] px-6 py-5">
            <div className="flex items-center gap-2.5">
              <h2 className="font-serif text-lg tracking-wide text-white">Your Selection</h2>
              <span className="rounded-full bg-[#d4af37]/20 px-2 py-0.5 text-[11px] font-semibold text-[#d4af37]">
                {totalItems} {totalItems === 1 ? "piece" : "pieces"}
              </span>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#9c8e80] hover:bg-[#251f19] hover:text-white transition-colors"
              aria-label="Close bag"
            >
              ✕
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#241e18] text-[#d4af37] mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 7h12l-1 14H7L6 7z" />
                    <path d="M9 7V5a3 3 0 016 0v2" />
                  </svg>
                </div>
                <h3 className="font-serif text-base text-white">Your selection is empty</h3>
                <p className="mt-1.5 max-w-xs text-xs text-[#9c8e80] leading-relaxed">
                  Explore our curated houses and select a piece to begin your order inquiry.
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="mt-6 rounded-md bg-[#d4af37] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#16120e] hover:bg-[#e2bd44] transition-colors"
                >
                  Explore Jackets
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-[#2a221b]">
                {items.map((it) => (
                  <div key={`${it.id}-${it.size}`} className="flex gap-4 py-4">
                    {/* Thumbnail */}
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded bg-[#201a15] border border-[#332b23]">
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
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#d4af37]">
                            {it.brandName}
                          </span>
                        )}
                        <h4 className="text-xs font-medium text-white line-clamp-1">
                          <Link href={`/products/${it.slug}`} onClick={closeCart} className="hover:underline">
                            {it.name}
                          </Link>
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-[11px] text-[#9c8e80]">
                          <span>Size: <strong className="text-white">{it.size}</strong></span>
                          <span>·</span>
                          <span className="text-white font-medium">{formatPrice(it.price)}</span>
                        </div>
                      </div>

                      {/* Quantity Stepper & Remove */}
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center rounded border border-[#382f26] bg-[#1a1511]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(it.id, it.size, it.quantity - 1)}
                            className="flex h-6 w-6 items-center justify-center text-xs text-[#9c8e80] hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            –
                          </button>
                          <span className="w-7 text-center text-xs font-medium text-white">
                            {it.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(it.id, it.size, it.quantity + 1)}
                            className="flex h-6 w-6 items-center justify-center text-xs text-[#9c8e80] hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(it.id, it.size)}
                          className="text-[11px] text-[#8a7a6c] hover:text-rose-400 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Actions */}
          {items.length > 0 && (
            <div className="border-t border-[#2e261f] bg-[#130f0c] p-6 space-y-4">
              {/* Shipping Note */}
              <div className="flex items-center gap-2 rounded-lg bg-[#201a14] p-2.5 text-[11px] text-[#b3a392]">
                <span className="text-sm">✈️</span>
                <span>Complimentary insured express courier to Europe &amp; USA included.</span>
              </div>

              {/* Subtotal */}
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-wider text-[#9c8e80]">Estimated Total</span>
                <span className="font-serif text-lg font-semibold text-white">{formatPrice(totalPrice)}</span>
              </div>

              {/* Concierge Actions */}
              <div className="space-y-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded bg-[#25D366] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md hover:brightness-105 transition-all"
                >
                  <span>Complete Order on WhatsApp</span>
                </a>
                <a
                  href={mailHref}
                  className="flex h-10 w-full items-center justify-center rounded border border-white/20 bg-[#1e1712] px-4 text-xs font-medium uppercase tracking-[0.12em] text-white hover:bg-[#28201a] hover:border-white/40 transition-colors"
                >
                  Order via Email
                </a>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] text-[#7a6b5e] hover:text-white transition-colors"
                >
                  Clear Selection
                </button>
                <span className="text-[10px] text-[#7a6b5e]">🔒 Authorized Heritage Boutique</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

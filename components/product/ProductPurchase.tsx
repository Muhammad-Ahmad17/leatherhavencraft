"use client";

import { useMemo, useState } from "react";
import { buildOrderMessage, buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/contact";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

type ProductPurchaseProps = {
  productId?: string | number;
  productName: string;
  brandName?: string;
  price: number;
  sizes: string[];
  productPath: string;
  image?: string;
  color?: string;
  colorName?: string;
  meta?: string;
  description?: string;
};

export function ProductPurchase({
  productId,
  productName,
  brandName,
  price,
  sizes,
  productPath,
  image,
  color = "#1a1a1a",
  colorName = "Black",
  meta,
  description,
}: ProductPurchaseProps) {
  const [size, setSize] = useState(sizes[0] ?? "M");
  const [addedRecently, setAddedRecently] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "shipping" | null>(null);
  const { addItem } = useCart();

  const productUrl = useMemo(() => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}${productPath}`;
    }
    return productPath;
  }, [productPath]);

  const priceLabel = formatPrice(price);

  const whatsappHref = buildWhatsAppUrl(
    buildOrderMessage({
      productName,
      brandName,
      priceLabel,
      size,
      productUrl,
    }),
  );

  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Order Inquiry: ${productName} (${size})`)}&body=${encodeURIComponent(
    buildOrderMessage({
      productName,
      brandName,
      priceLabel,
      size,
      productUrl,
    }),
  )}`;

  const handleAddToBag = () => {
    const slug = productPath.replace(/^\/products\//, "");
    addItem({
      id: productId || slug,
      name: productName,
      slug,
      brandName,
      price,
      size: size || (sizes[0] ?? "One Size"),
      image: image || "/catalog/field-bomber.jpg",
    });
    setAddedRecently(true);
    setTimeout(() => setAddedRecently(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* ── Minimal Color & Material Line ── */}
      <div className="flex items-center justify-between text-xs text-[var(--ink)]">
        <div className="flex items-center gap-2">
          <span
            className="h-4 w-4 rounded-full border border-black/20 shadow-xs"
            style={{ backgroundColor: color }}
            title={colorName}
          />
          <span className="font-medium">{colorName}</span>
        </div>
        {meta && <span className="text-[var(--muted)] text-[11px] truncate max-w-[260px]">{meta}</span>}
      </div>

      {/* ── Clean Size Selection ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
            Size
          </span>
          <button
            type="button"
            onClick={() => setShowSizeGuide(true)}
            className="text-xs text-[var(--muted)] hover:text-black underline underline-offset-4 cursor-pointer"
          >
            Size Guide
          </button>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2" role="group" aria-label="Select size">
          {sizes.map((val) => {
            const isSelected = size === val;
            return (
              <button
                key={val}
                type="button"
                onClick={() => setSize(val)}
                className={`flex h-11 items-center justify-center rounded-md border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "border-black bg-black text-white shadow-xs"
                    : "border-black/15 bg-white text-black hover:border-black/50"
                }`}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── High-Impact Actions ── */}
      <div className="space-y-2.5 pt-2">
        <button
          type="button"
          onClick={handleAddToBag}
          className={`w-full h-12 rounded-lg font-semibold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
            addedRecently
              ? "bg-emerald-700 text-white"
              : "bg-black text-white hover:bg-neutral-800"
          }`}
        >
          {addedRecently ? (
            <>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Added to Bag</span>
            </>
          ) : (
            <span>Add to Bag · {priceLabel}</span>
          )}
        </button>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#25D366]/20 transition-colors"
          >
            <span>WhatsApp Order</span>
          </a>
          <a
            href={mailHref}
            className="h-11 rounded-lg border border-black/15 bg-white text-[var(--ink)] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-black/5 transition-colors"
          >
            <span>Email Concierge</span>
          </a>
        </div>
      </div>

      {/* ── Clean Collapsible Product Specifications ── */}
      <div className="border-t border-black/10 pt-4 divide-y divide-black/10 text-xs">
        <div>
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === "details" ? null : "details")}
            className="w-full py-3 flex items-center justify-between font-medium text-[var(--ink)] hover:text-black cursor-pointer"
          >
            <span>Product Details &amp; Specifications</span>
            <span className="text-base text-[var(--muted)]">{activeTab === "details" ? "−" : "+"}</span>
          </button>
          {activeTab === "details" && (
            <div className="pb-3 text-[var(--muted)] space-y-2 text-xs leading-relaxed">
              <p>{description}</p>
              {meta && <p className="text-[var(--ink)] font-medium">Material: {meta}</p>}
            </div>
          )}
        </div>

        <div>
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === "shipping" ? null : "shipping")}
            className="w-full py-3 flex items-center justify-between font-medium text-[var(--ink)] hover:text-black cursor-pointer"
          >
            <span>Shipping &amp; Authenticity</span>
            <span className="text-base text-[var(--muted)]">{activeTab === "shipping" ? "−" : "+"}</span>
          </button>
          {activeTab === "shipping" && (
            <div className="pb-3 text-[var(--muted)] space-y-1.5 text-xs leading-relaxed">
              <p>• 100% verified authentic with original heritage hardware &amp; tags.</p>
              <p>• Express air courier (DHL/FedEx 3–5 business days to US &amp; Europe).</p>
              <p>• 14-day exchange and return window on catalog pieces.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Size Guide Modal ── */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border border-black/10 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <h3 className="font-serif text-lg font-bold text-[var(--ink)]">
                {brandName || "Heritage"} Size Guide
              </h3>
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="text-base font-bold text-[var(--muted)] hover:text-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f7f5f2] text-[11px] font-semibold uppercase tracking-wider text-[var(--ink)]">
                  <tr>
                    <th className="p-2.5">Size</th>
                    <th className="p-2.5">Chest</th>
                    <th className="p-2.5">Shoulder</th>
                    <th className="p-2.5">Sleeve</th>
                    <th className="p-2.5">Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  <tr>
                    <td className="p-2.5 font-bold">S</td>
                    <td className="p-2.5">38 - 40&quot;</td>
                    <td className="p-2.5">18.5&quot;</td>
                    <td className="p-2.5">25.5&quot;</td>
                    <td className="p-2.5">25.0&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-2.5 font-bold">M</td>
                    <td className="p-2.5">41 - 43&quot;</td>
                    <td className="p-2.5">19.2&quot;</td>
                    <td className="p-2.5">26.0&quot;</td>
                    <td className="p-2.5">25.5&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">L</td>
                    <td className="p-2.5">44 - 46&quot;</td>
                    <td className="p-2.5">20.0&quot;</td>
                    <td className="p-2.5">26.5&quot;</td>
                    <td className="p-2.5">26.0&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-2.5 font-bold">XL</td>
                    <td className="p-2.5">47 - 49&quot;</td>
                    <td className="p-2.5">20.8&quot;</td>
                    <td className="p-2.5">27.0&quot;</td>
                    <td className="p-2.5">26.5&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="rounded bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

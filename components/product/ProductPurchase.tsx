"use client";

import { useEffect, useMemo, useState } from "react";
import { buildOrderMessage, buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/contact";
import { formatPrice, getProductPriceForSize, isPlusSize, PLUS_SIZE_SURCHARGE } from "@/lib/utils";
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
  colors?: Array<{ name: string; hex?: string }>;
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
  colors,
  meta,
  description,
}: ProductPurchaseProps) {
  const availableColors = useMemo(() => {
    if (Array.isArray(colors) && colors.length > 0) {
      return colors.map((c) => ({
        name: c.name || "Black",
        hex: c.hex || "#1a1a1a",
      }));
    }
    if (colorName) {
      return [{ name: colorName, hex: color || "#1a1a1a" }];
    }
    return [{ name: "Black", hex: "#1a1a1a" }];
  }, [colors, colorName, color]);

  const [selectedColor, setSelectedColor] = useState(availableColors[0]);
  const [size, setSize] = useState(sizes[0] ?? "M");
  const [addedRecently, setAddedRecently] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "shipping" | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (availableColors.length > 0 && !availableColors.some((c) => c.name === selectedColor?.name)) {
      setSelectedColor(availableColors[0]);
    }
  }, [availableColors, selectedColor]);

  const productUrl = useMemo(() => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}${productPath}`;
    }
    return productPath;
  }, [productPath]);

  // Dynamic price calculation: base price + $20 if size is 2XL or above
  const effectivePrice = useMemo(() => {
    return getProductPriceForSize(price, size);
  }, [price, size]);

  const effectivePriceLabel = useMemo(() => {
    return formatPrice(effectivePrice);
  }, [effectivePrice]);

  const hasPlusSurcharge = isPlusSize(size);

  const sizeAndColorLabel = `${size}${hasPlusSurcharge ? ` (+${PLUS_SIZE_SURCHARGE})` : ""}${selectedColor?.name ? ` · Color: ${selectedColor.name}` : ""}`;

  const whatsappHref = buildWhatsAppUrl(
    buildOrderMessage({
      productName,
      brandName,
      priceLabel: effectivePriceLabel,
      size: sizeAndColorLabel,
      productUrl,
    }),
  );

  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Order Inquiry: ${productName} (${sizeAndColorLabel}) - ${effectivePriceLabel}`
  )}&body=${encodeURIComponent(
    buildOrderMessage({
      productName,
      brandName,
      priceLabel: effectivePriceLabel,
      size: sizeAndColorLabel,
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
      price: effectivePrice,
      size: size || (sizes[0] ?? "One Size"),
      color: selectedColor?.name,
      image: image || "/catalog/field-bomber.jpg",
    });
    setAddedRecently(true);
    setTimeout(() => setAddedRecently(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* ── Dynamic Price with Surcharge Badge ── */}
      <div className="flex items-baseline justify-between border-b border-black/10 pb-4">
        <div className="flex flex-wrap items-baseline gap-2.5">
          <span className="font-serif text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
            {effectivePriceLabel}
          </span>
          {hasPlusSurcharge && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#8a4d2b]/30 bg-[#faf6f0] px-2.5 py-0.5 text-[11px] font-semibold text-[#8a4d2b]">
              <span>+${PLUS_SIZE_SURCHARGE}</span>
              <span className="font-normal">({size} hide surcharge)</span>
            </span>
          )}
        </div>
        {meta && <span className="text-[var(--muted)] text-[11px] truncate max-w-[200px] hidden sm:inline">{meta}</span>}
      </div>

      {/* ── Dedicated Colorway Section ── */}
      {availableColors.length > 1 ? (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
              Color: <span className="font-normal text-[var(--muted)]">{selectedColor?.name}</span>
            </span>
            {meta && <span className="text-[var(--muted)] text-[11px] truncate max-w-[200px]">{meta}</span>}
          </div>

          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Select color">
            {availableColors.map((c) => {
              const isSelected = selectedColor?.name === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedColor(c)}
                  className={`flex h-9 items-center gap-2 rounded-md border px-3 text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "border-black bg-black text-white shadow-xs"
                      : "border-black/15 bg-white text-[var(--ink)] hover:border-black/50"
                  }`}
                >
                  <span
                    className="h-3.5 w-3.5 rounded-full border border-black/20 shrink-0"
                    style={{ backgroundColor: c.hex || "#1a1a1a" }}
                    aria-hidden="true"
                  />
                  <span>{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between text-xs text-[var(--ink)]">
          <div className="flex items-center gap-2">
            <span
              className="h-4 w-4 rounded-full border border-black/20 shadow-xs"
              style={{ backgroundColor: selectedColor?.hex || color }}
              title={selectedColor?.name || colorName}
            />
            <span className="font-medium">{selectedColor?.name || colorName}</span>
          </div>
          {meta && <span className="text-[var(--muted)] text-[11px] truncate max-w-[260px]">{meta}</span>}
        </div>
      )}

      {/* ── Clean Size Selection (Supports XS to 6XL) ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
              Size
            </span>
            {hasPlusSurcharge && (
              <span className="text-[11px] font-medium text-[#8a4d2b]">
                (Includes +${PLUS_SIZE_SURCHARGE} 2XL–6XL surcharge)
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setShowSizeGuide(true)}
            className="text-xs text-[var(--muted)] hover:text-black underline underline-offset-4 cursor-pointer"
          >
            Size Guide
          </button>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2" role="group" aria-label="Select size">
          {sizes.map((val) => {
            const isSelected = size === val;
            const plus = isPlusSize(val);
            return (
              <button
                key={val}
                type="button"
                onClick={() => setSize(val)}
                className={`relative flex h-12 flex-col items-center justify-center rounded-md border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "border-black bg-black text-white shadow-xs"
                    : "border-black/15 bg-white text-black hover:border-black/50"
                }`}
              >
                <span>{val}</span>
                {plus && (
                  <span
                    className={`text-[9px] font-semibold leading-none tracking-normal transition-colors ${
                      isSelected ? "text-[#f0d4b8]" : "text-[#8a4d2b]"
                    }`}
                  >
                    +${PLUS_SIZE_SURCHARGE}
                  </span>
                )}
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
            <span>Add to Bag · {effectivePriceLabel}</span>
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

      {/* ── Comprehensive Size Guide Modal (XS to 6XL) ── */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border border-black/10 bg-white p-6 shadow-xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <h3 className="font-serif text-lg font-bold text-[var(--ink)]">
                {brandName || "Heritage"} Size Guide (XS – 6XL)
              </h3>
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="text-base font-bold text-[var(--muted)] hover:text-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 overflow-x-auto flex-1">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f7f5f2] text-[11px] font-semibold uppercase tracking-wider text-[var(--ink)] sticky top-0">
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
                    <td className="p-2.5 font-bold">XS</td>
                    <td className="p-2.5">35 - 37&quot;</td>
                    <td className="p-2.5">17.5&quot;</td>
                    <td className="p-2.5">25.0&quot;</td>
                    <td className="p-2.5">24.5&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-2.5 font-bold">S</td>
                    <td className="p-2.5">38 - 40&quot;</td>
                    <td className="p-2.5">18.5&quot;</td>
                    <td className="p-2.5">25.5&quot;</td>
                    <td className="p-2.5">25.0&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">M</td>
                    <td className="p-2.5">41 - 43&quot;</td>
                    <td className="p-2.5">19.2&quot;</td>
                    <td className="p-2.5">26.0&quot;</td>
                    <td className="p-2.5">25.5&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-2.5 font-bold">L</td>
                    <td className="p-2.5">44 - 46&quot;</td>
                    <td className="p-2.5">20.0&quot;</td>
                    <td className="p-2.5">26.5&quot;</td>
                    <td className="p-2.5">26.0&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">XL</td>
                    <td className="p-2.5">47 - 49&quot;</td>
                    <td className="p-2.5">20.8&quot;</td>
                    <td className="p-2.5">27.0&quot;</td>
                    <td className="p-2.5">26.5&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-2.5 font-bold">2XL</td>
                    <td className="p-2.5">50 - 52&quot;</td>
                    <td className="p-2.5">21.5&quot;</td>
                    <td className="p-2.5">27.5&quot;</td>
                    <td className="p-2.5">27.0&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">3XL</td>
                    <td className="p-2.5">53 - 55&quot;</td>
                    <td className="p-2.5">22.2&quot;</td>
                    <td className="p-2.5">28.0&quot;</td>
                    <td className="p-2.5">27.5&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-2.5 font-bold">4XL</td>
                    <td className="p-2.5">56 - 58&quot;</td>
                    <td className="p-2.5">23.0&quot;</td>
                    <td className="p-2.5">28.5&quot;</td>
                    <td className="p-2.5">28.0&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">5XL</td>
                    <td className="p-2.5">59 - 61&quot;</td>
                    <td className="p-2.5">23.8&quot;</td>
                    <td className="p-2.5">29.0&quot;</td>
                    <td className="p-2.5">28.5&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-2.5 font-bold">6XL</td>
                    <td className="p-2.5">62 - 64&quot;</td>
                    <td className="p-2.5">24.5&quot;</td>
                    <td className="p-2.5">29.5&quot;</td>
                    <td className="p-2.5">29.0&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-3 rounded-lg border border-[#e8ded3] bg-[#faf8f5] p-2.5 text-[11px] text-[#706456]">
              <span className="font-semibold text-[#8a4d2b]">Extended Sizing Note: </span>
              Sizes 2XL through 6XL are handcrafted with extra hide selection and artisanal pattern scaling, incurring a standard +${PLUS_SIZE_SURCHARGE} tailoring surcharge.
            </div>

            <div className="mt-4 flex justify-end border-t border-black/10 pt-3">
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

"use client";

import { useEffect, useMemo, useState } from "react";
import { buildOrderMessage, buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/contact";
import { formatPrice, getProductPriceForSize, isPlusSize, PLUS_SIZE_SURCHARGE } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { UniversalSizeChart } from "@/components/common/UniversalSizeChart";

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
      <div className="flex items-baseline justify-between border-b border-[#ded5c7] pb-4">
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

      {/* ── Color Selection: Clean Circles with Boundary on Click ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
            Color: <span className="font-normal text-[var(--muted)]">{selectedColor?.name || colorName}</span>
          </span>
          {meta && <span className="text-[var(--muted)] text-[11px] truncate max-w-[200px]">{meta}</span>}
        </div>

        <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Select color">
          {availableColors.map((c) => {
            const isSelected = selectedColor?.name === c.name;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c)}
                title={c.name}
                aria-label={`Select color ${c.name}`}
                aria-pressed={isSelected}
                className={`group relative flex items-center justify-center rounded-full p-[2.5px] transition-all cursor-pointer ${
                  isSelected
                    ? "border-2 border-[#2a1810]"
                    : "border-2 border-transparent hover:border-[#8a4d2b]"
                }`}
              >
                <span
                  className="block h-5 w-5 rounded-full border border-[#ded5c7] shadow-2xs transition-transform group-hover:scale-105"
                  style={{ backgroundColor: c.hex || "#1a1a1a" }}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Clean Size Selection (Supports XS to 6XL) ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
              Size
            </span>
            {hasPlusSurcharge && (
              <span className="text-[11px] font-medium text-[#8a4d2b]">
                (Includes +${PLUS_SIZE_SURCHARGE} 3XL–6XL surcharge)
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setShowSizeGuide(true)}
            className="text-xs text-[var(--muted)] hover:text-[#2a1810] underline underline-offset-4 cursor-pointer"
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
                    ? "border-[#2a1810] bg-[#2a1810] text-white shadow-xs"
                    : "border-[#ded5c7] bg-white text-[#2a1810] hover:border-[#8a4d2b] hover:bg-[#faf8f5]"
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
              : "bg-[#2a1810] text-white hover:bg-[#3d2417] active:bg-[#1a0e08]"
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
            className="h-11 rounded-lg border border-[#ded5c7] bg-white text-[#2a1810] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:border-[#8a4d2b] hover:bg-[#faf8f5] transition-colors"
          >
            <span>Email Concierge</span>
          </a>
        </div>

        {/* ── Wholesale & Bulk Dealing Notice ── */}
        <div className="flex items-center justify-between rounded-lg border border-[#ded5c7] bg-[#faf8f5] px-3.5 py-2.5 text-xs">
          <div className="space-y-0.5">
            <span className="font-semibold text-[#2a1810]">Wholesale &amp; Bulk Orders</span>
            <p className="text-[11px] text-[#706456]">Tiered volume pricing for clubs, teams &amp; boutiques (5+ units)</p>
          </div>
          <a
            href={buildWhatsAppUrl(`Hi Leather Haven Craft — I am inquiring about wholesale/bulk pricing for "${productName || "this jacket"}" (${brandName || "Heritage"}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-bold text-[#8a4d2b] hover:text-[#2a1810] underline underline-offset-2 transition-colors ml-3 whitespace-nowrap cursor-pointer"
          >
            Bulk Quote &rarr;
          </a>
        </div>
      </div>

      {/* ── Clean Collapsible Product Specifications ── */}
      <div className="border-t border-[#ded5c7] pt-4 divide-y divide-[#ded5c7] text-xs">
        <div>
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === "details" ? null : "details")}
            className="w-full py-3 flex items-center justify-between font-medium text-[var(--ink)] hover:text-[#2a1810] cursor-pointer"
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
            className="w-full py-3 flex items-center justify-between font-medium text-[var(--ink)] hover:text-[#2a1810] cursor-pointer"
          >
            <span>Shipping &amp; Workshop Guarantee</span>
            <span className="text-base text-[var(--muted)]">{activeTab === "shipping" ? "−" : "+"}</span>
          </button>
          {activeTab === "shipping" && (
            <div className="pb-3 text-[var(--muted)] space-y-1.5 text-xs leading-relaxed">
              <p>• 100% genuine full-grain leather bench-crafted with heavy heritage brass hardware.</p>
              <p>• Express air courier (DHL/FedEx 3–5 business days to US &amp; Europe).</p>
              <p>• 14-day exchange and fit guarantee on all bespoke and catalog pieces.</p>
              <p>• Wholesale &amp; bulk supply: Custom branding, club patches, and volume freight available on request.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Universal Gents Size Guide Modal (XS to 6XL) ── */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a110c]/70 p-3 sm:p-4 backdrop-blur-xs">
          <div className="w-full max-w-4xl rounded-2xl border border-[#ded5c7] bg-[#fbf9f6] p-5 sm:p-7 shadow-2xl max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-[#ded5c7] pb-3 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
                  {brandName || "Heritage"} Atelier
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2a1810]">
                  Universal Gents Size Guide
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-sm font-bold text-[#6b5c51] hover:text-[#2a1810] hover:border-[#8a4d2b] cursor-pointer shadow-2xs"
                aria-label="Close size guide"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-1 scrollbar-thin">
              <UniversalSizeChart
                selectedSize={size}
                onSelectSize={(newSize) => setSize(newSize)}
                brandName={brandName}
              />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#ded5c7] pt-3 text-xs text-[#706456]">
              <span>Selected size: <strong className="text-[#2a1810] font-bold">{size}</strong></span>
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="rounded-lg bg-[#2a1810] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] cursor-pointer shadow-xs"
              >
                Apply &amp; Return to Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
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
  const [activeAccordion, setActiveAccordion] = useState<"craft" | "fit" | "shipping" | null>("craft");
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
    setTimeout(() => setAddedRecently(false), 2200);
  };

  const toggleAccordion = (section: "craft" | "fit" | "shipping") => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="space-y-6">
      {/* ── Colorway Swatch Row ── */}
      <div className="rounded-xl border border-black/10 bg-white/70 p-3.5 shadow-2xs backdrop-blur-xs">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
            Colorway / Hide Shade
          </span>
          <span className="font-semibold text-[var(--ink)]">{colorName}</span>
        </div>
        <div className="mt-2.5 flex items-center gap-2.5">
          <span
            className="h-6 w-6 rounded-full border-2 border-white ring-2 ring-black/20 shadow-xs"
            style={{ backgroundColor: color }}
            title={colorName}
          />
          <span className="text-xs text-[var(--muted)]">
            {meta || "Drum-Dyed Top-Grade Leather · Antiqued Satin Finish"}
          </span>
        </div>
      </div>

      {/* ── Size Selection & Size Guide ── */}
      <div>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
            Select Size
          </label>
          <button
            type="button"
            onClick={() => setShowSizeGuide(true)}
            className="flex items-center gap-1 text-xs font-medium text-[#8a4d2b] underline-offset-4 hover:underline cursor-pointer"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.3 15.3l-6.6-6.6a1 1 0 00-1.4 0l-1.6 1.6 8 8 1.6-1.6a1 1 0 000-1.4zM10.3 8.9L3.7 15.5a1 1 0 000 1.4l3.4 3.4a1 1 0 001.4 0l6.6-6.6-4.8-4.8z" />
            </svg>
            <span>Size &amp; Fit Guide</span>
          </button>
        </div>

        <div className="mt-2.5 grid grid-cols-4 sm:grid-cols-5 gap-2" role="group" aria-label="Select size">
          {sizes.map((val) => {
            const isSelected = size === val;
            return (
              <button
                key={val}
                type="button"
                onClick={() => setSize(val)}
                aria-pressed={isSelected}
                className={`flex h-11 items-center justify-center rounded-lg border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "border-[var(--ink)] bg-[var(--ink)] text-white shadow-md scale-[1.02]"
                    : "border-black/15 bg-white text-[var(--ink)] hover:border-black/40 hover:bg-black/5"
                }`}
              >
                {val}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-[11px] text-[var(--muted)]">
          Fits true to authentic heritage flight/motorcycle cut.
        </p>
      </div>

      {/* ── Direct Purchase & Concierge CTA Group ── */}
      <div className="space-y-2.5 pt-1">
        {/* Add to Bag Button */}
        <button
          type="button"
          onClick={handleAddToBag}
          className="group relative flex h-13 w-full items-center justify-center gap-2.5 rounded-xl border border-[var(--ink)] bg-[var(--ink)] px-6 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:bg-black/90 active:scale-[0.99] cursor-pointer"
        >
          <svg className="h-4 w-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 7h12l-1 14H7L6 7z" />
            <path d="M9 7V5a3 3 0 016 0v2" />
          </svg>
          <span>{addedRecently ? "Added to Bag ✓" : "Add to Bag — Secure Order"}</span>
        </button>

        {/* Concierge Ordering: WhatsApp & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-md transition-all hover:brightness-105 active:scale-[0.99]"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.062-1.782-.416-1.465-.609-2.399-2.128-2.47-2.226-.073-.098-.598-.797-.598-1.521 0-.723.382-1.077.518-1.226.136-.149.296-.187.395-.187.098 0 .198.001.284.006.09.004.21-.035.328.25.12.288.409 1.002.446 1.076.036.075.061.163.012.261-.05.099-.074.161-.148.247-.074.086-.156.192-.222.257-.075.074-.153.155-.065.306.088.151.391.644.839 1.043.577.514 1.063.673 1.214.748.151.075.24.063.329-.04.09-.101.382-.446.484-.599.102-.153.205-.128.344-.077.14.051.887.418 1.04.494.153.076.255.114.292.177.037.064.037.371-.107.776z" />
            </svg>
            <span>Direct WhatsApp</span>
          </a>
          <a
            href={mailHref}
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--ink)] bg-white px-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--ink)] transition-colors hover:bg-black/5 active:scale-[0.99]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Atelier Email</span>
          </a>
        </div>
      </div>

      {/* ── Avirex-Grade Heritage Trust Pillars ── */}
      <div className="grid grid-cols-2 gap-3 border-y border-black/10 py-4 text-xs text-[var(--ink)]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0ebe3] text-[#8a4d2b]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[11px] uppercase tracking-wider">100% Certified Leather</div>
            <div className="text-[10px] text-[var(--muted)]">Top-tier artisan hides</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0ebe3] text-[#8a4d2b]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[11px] uppercase tracking-wider">Insured Air Courier</div>
            <div className="text-[10px] text-[var(--muted)]">US, UK &amp; EU Included</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0ebe3] text-[#8a4d2b]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 14 14" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[11px] uppercase tracking-wider">Hand-Inspected</div>
            <div className="text-[10px] text-[var(--muted)]">Individually tailored check</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0ebe3] text-[#8a4d2b]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[11px] uppercase tracking-wider">14-Day Exchange</div>
            <div className="text-[10px] text-[var(--muted)]">Guaranteed fit concierge</div>
          </div>
        </div>
      </div>

      {/* ── Signature Brand Accordions (Avirex / Schott Style) ── */}
      <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white/70 overflow-hidden text-xs">
        {/* Accordion 1: Craft & Materials */}
        <div>
          <button
            type="button"
            onClick={() => toggleAccordion("craft")}
            className="flex w-full items-center justify-between p-4 text-left font-semibold uppercase tracking-wider text-[var(--ink)] hover:bg-black/5 cursor-pointer"
          >
            <span>Artisanal Craft &amp; Hardware</span>
            <span className="text-base text-[var(--muted)]">{activeAccordion === "craft" ? "−" : "+"}</span>
          </button>
          {activeAccordion === "craft" && (
            <div className="px-4 pb-4 text-xs leading-relaxed text-[var(--muted)] space-y-2">
              <p>{description}</p>
              <ul className="list-disc pl-4 space-y-1 text-[11px] text-[var(--ink)]">
                <li>Heavy-gauge antiqued brass zip hardware &amp; snap storm-flap</li>
                <li>Bi-swing back paneling for maximum shoulder &amp; reach articulation</li>
                <li>Dual hand-warmer pockets with heavy-duty satin interior lining</li>
                <li>Reinforced double-stitch lock seams along stress pressure points</li>
              </ul>
            </div>
          )}
        </div>

        {/* Accordion 2: Fit & Proportions */}
        <div>
          <button
            type="button"
            onClick={() => toggleAccordion("fit")}
            className="flex w-full items-center justify-between p-4 text-left font-semibold uppercase tracking-wider text-[var(--ink)] hover:bg-black/5 cursor-pointer"
          >
            <span>Fit &amp; Silhouette Guidance</span>
            <span className="text-base text-[var(--muted)]">{activeAccordion === "fit" ? "−" : "+"}</span>
          </button>
          {activeAccordion === "fit" && (
            <div className="px-4 pb-4 text-xs leading-relaxed text-[var(--muted)] space-y-2">
              <p>
                Cut in the iconic heritage flight jacket silhouette. Fitted across the shoulders with a comfortable relaxed chest and tapered storm-ribbed hem.
              </p>
              <p className="text-[11px]">
                <strong>Fit Note:</strong> Order your true tailored jacket size. If you plan to layer thick winter wool knitwear beneath, consider sizing up one increment.
              </p>
            </div>
          )}
        </div>

        {/* Accordion 3: Courier & Care */}
        <div>
          <button
            type="button"
            onClick={() => toggleAccordion("shipping")}
            className="flex w-full items-center justify-between p-4 text-left font-semibold uppercase tracking-wider text-[var(--ink)] hover:bg-black/5 cursor-pointer"
          >
            <span>Complimentary Courier &amp; Leather Care</span>
            <span className="text-base text-[var(--muted)]">{activeAccordion === "shipping" ? "−" : "+"}</span>
          </button>
          {activeAccordion === "shipping" && (
            <div className="px-4 pb-4 text-xs leading-relaxed text-[var(--muted)] space-y-2">
              <p>
                Every piece is enclosed in a breathable bespoke dust garment bag with certificate of atelier inspection. Dispatched via insured express DHL/FedEx courier with signature required upon delivery.
              </p>
              <p className="text-[11px]">
                <strong>Leather Care:</strong> Store on wide-shoulder contoured wooden hanger. Treat with organic beeswax or natural leather conditioner once per season.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Size Guide Modal ── */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl border border-black/10 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-[var(--ink)]">
                  {brandName || "Heritage"} Jacket Size Matrix
                </h3>
                <p className="text-xs text-[var(--muted)]">All measurements given in inches (chest circumferences &amp; lengths)</p>
              </div>
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="text-sm font-bold text-[var(--muted)] hover:text-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f7f5f2] text-[11px] font-bold uppercase tracking-wider text-[var(--ink)]">
                  <tr>
                    <th className="p-3">Size</th>
                    <th className="p-3">Chest (in)</th>
                    <th className="p-3">Shoulder (in)</th>
                    <th className="p-3">Sleeve (in)</th>
                    <th className="p-3">Back Length (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  <tr>
                    <td className="p-3 font-bold">S (36-38)</td>
                    <td className="p-3">38 - 40&quot;</td>
                    <td className="p-3">18.5&quot;</td>
                    <td className="p-3">25.5&quot;</td>
                    <td className="p-3">25.0&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-3 font-bold">M (40)</td>
                    <td className="p-3">41 - 43&quot;</td>
                    <td className="p-3">19.2&quot;</td>
                    <td className="p-3">26.0&quot;</td>
                    <td className="p-3">25.5&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">L (42-44)</td>
                    <td className="p-3">44 - 46&quot;</td>
                    <td className="p-3">20.0&quot;</td>
                    <td className="p-3">26.5&quot;</td>
                    <td className="p-3">26.0&quot;</td>
                  </tr>
                  <tr className="bg-[#faf8f5]">
                    <td className="p-3 font-bold">XL (46)</td>
                    <td className="p-3">47 - 49&quot;</td>
                    <td className="p-3">20.8&quot;</td>
                    <td className="p-3">27.0&quot;</td>
                    <td className="p-3">26.5&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">XXL (48-50)</td>
                    <td className="p-3">50 - 52&quot;</td>
                    <td className="p-3">21.5&quot;</td>
                    <td className="p-3">27.5&quot;</td>
                    <td className="p-3">27.0&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-lg bg-[#f7f5f2] p-3 text-[11px] text-[var(--muted)]">
              <strong>Concierge Sizing Note:</strong> Need advice on your exact sleeve or chest fit? Contact our concierge via WhatsApp with your height &amp; weight for personalized tailoring advice.
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="rounded-lg bg-[var(--ink)] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white cursor-pointer"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

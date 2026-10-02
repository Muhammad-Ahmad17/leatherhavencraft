"use client";

import { useMemo, useState } from "react";
import { buildOrderMessage, buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/contact";
import { formatPrice } from "@/lib/utils";

type ProductPurchaseProps = {
  productName: string;
  brandName?: string;
  price: number;
  sizes: string[];
  productPath: string;
};

export function ProductPurchase({
  productName,
  brandName,
  price,
  sizes,
  productPath,
}: ProductPurchaseProps) {
  const [size, setSize] = useState(sizes[0] ?? "");

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

  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Order: ${productName}`)}&body=${encodeURIComponent(
    buildOrderMessage({
      productName,
      brandName,
      priceLabel,
      size,
      productUrl,
    }),
  )}`;

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Size</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Size">
        {sizes.map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={size === value}
            onClick={() => setSize(value)}
            className={`h-11 min-w-11 border px-4 text-sm ${
              size === value
                ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]"
                : "border-black/15"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      <p className="mt-8 text-sm leading-6 text-[var(--muted)]">
        No online checkout yet — place your order on WhatsApp or by email. We&apos;ll confirm size, shipping, and
        payment with you directly.
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 flex-1 items-center justify-center bg-[#25D366] px-6 text-[13px] font-medium tracking-[0.12em] uppercase text-white"
        >
          Order on WhatsApp
        </a>
        <a
          href={mailHref}
          className="inline-flex h-12 flex-1 items-center justify-center border border-[var(--ink)] px-6 text-[13px] tracking-[0.12em] uppercase text-[var(--ink)]"
        >
          Email order
        </a>
      </div>
    </div>
  );
}

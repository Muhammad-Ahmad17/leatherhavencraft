"use client";

import Link from "next/link";
import { getBrandLabel } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";

export function ProductCaption() {
  const { products, currentIndex } = useScrollAnimationContext();
  const product = products[currentIndex];
  if (!product) return null;

  return (
    <div className="caption" aria-live="polite">
      <p className="eyebrow">{getBrandLabel(product.brand)}</p>
      <h3 className="name text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a1810]">
        {product.name}
      </h3>
      <p className="meta mt-2 text-xs sm:text-sm text-[#706456]">
        {product.meta}
        <span aria-hidden="true"> · </span>
        <span className="font-semibold text-[#8a4d2b]">{formatPrice(product.price)}</span>
      </p>
      {product.slug && (
        <div className="mt-3 pointer-events-auto">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#8a4d2b]/30 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8a4d2b] backdrop-blur-xs transition-all hover:border-[#8a4d2b] hover:bg-[#8a4d2b] hover:text-white shadow-2xs"
          >
            <span>View Piece</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { getBrandLabel } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";

export function ProductCaption() {
  const { products, currentIndex } = useScrollAnimationContext();
  if (!products.length) return null;

  return (
    <div className="caption" aria-live="polite">
      <div className="relative min-h-[140px] sm:min-h-[160px]">
        {products.map((product, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={product.id}
              className={`transition-all duration-500 ease-out ${
                isActive
                  ? "opacity-100 translate-y-0 pointer-events-auto relative z-10"
                  : "opacity-0 -translate-y-2 pointer-events-none absolute inset-0 z-0"
              }`}
            >
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a4d2b]">
                  Archive Tribute
                </p>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2a1810]">
                  {getBrandLabel(product.brand)}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#8a4d2b]">
                  {product.name}
                </p>
                <p className="text-[11px] sm:text-xs leading-relaxed text-[#706456] max-w-sm">
                  {product.meta}
                  <span aria-hidden="true"> · </span>
                  <span className="font-bold text-[#2a1810]">{formatPrice(product.price)}</span>
                </p>
              </div>
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
        })}
      </div>
    </div>
  );
}

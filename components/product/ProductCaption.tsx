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
                <div className="mt-4 pointer-events-auto">
                  <Link
                    href={`/products/${product.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-[#1f110a] bg-[#2a1810] px-6 py-2.5 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#3e2216] hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    <svg
                      className="h-4 w-4 transition-transform group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <span>BUY NOW</span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
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

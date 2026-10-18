"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { getBrandLabel, cleanProductSlug } from "@/data/products";
import { formatPrice, getDiscountedPrice } from "@/lib/utils";
import { useNavigation } from "@/context/NavigationContext";

export function ProductCard({ product }: { product: Product }) {
  const { navigatingSlug, startNavigation } = useNavigation();
  const cleanSlug = cleanProductSlug(product.slug);

  // Spinner runs ONLY on the first selected product that was clicked
  const isOpening = navigatingSlug === cleanSlug;

  const hasHover = Boolean(
    product.imageHover &&
    product.imageHover !== product.image &&
    product.imageHover.trim().length > 0
  );

  const handleClick = (e: React.MouseEvent) => {
    // If another product is already opening, prevent opening multiple spinners
    if (navigatingSlug && navigatingSlug !== cleanSlug) {
      e.preventDefault();
      return;
    }
    startNavigation(cleanSlug);
  };

  return (
    <Link
      href={`/products/${cleanSlug}`}
      onClick={handleClick}
      className="group block relative"
    >
      <span className="relative block aspect-[3/4] overflow-hidden bg-[var(--bg2)] rounded-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            hasHover ? "group-hover:opacity-0" : ""
          }`}
        />
        {hasHover && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={product.imageHover}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        {product.featured && (
          <span className="absolute top-2.5 left-2.5 z-10 rounded-[3px] bg-[#c45500] px-2 py-0.5 text-[11px] font-semibold text-white shadow-xs tracking-tight">
            Best Seller
          </span>
        )}
        {Boolean(product.discountPercent && product.discountPercent > 0) && (
          <span className="absolute top-2.5 right-2.5 z-10 rounded-[3px] bg-[#9e2a2b] px-2 py-0.5 text-[10px] font-bold text-white shadow-xs tracking-wider uppercase">
            -{product.discountPercent}% OFF
          </span>
        )}
        {isOpening && (
          <span className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
            <svg className="animate-spin h-7 w-7 text-white mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white">Opening...</span>
          </span>
        )}
      </span>
      <span className="mt-3 block text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
        {getBrandLabel(product.brand)}
      </span>
      <span className="mt-1 block text-[15px] font-medium tracking-tight">{product.name}</span>
      {product.discountPercent && product.discountPercent > 0 ? (
        <span className="mt-1 flex items-baseline gap-2 text-sm">
          <span className="font-semibold text-[#8a4d2b]">
            {formatPrice(getDiscountedPrice(product.price, product.discountPercent))}
          </span>
          <span className="text-xs text-[var(--muted)] line-through">
            {formatPrice(product.price)}
          </span>
        </span>
      ) : (
        <span className="mt-1 block text-sm text-[var(--muted)]">{formatPrice(product.price)}</span>
      )}
    </Link>
  );
}

import Link from "next/link";
import type { Product } from "@/data/products";
import { getBrandLabel } from "@/data/products";
import { formatPrice, getDiscountedPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const hasHover = Boolean(
    product.imageHover &&
    product.imageHover !== product.image &&
    product.imageHover.trim().length > 0
  );

  return (
    <Link href={`/products/${product.slug}`} className="group block">
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

import Link from "next/link";
import type { Product } from "@/data/products";
import { getBrandLabel } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <span className="relative block aspect-[3/4] overflow-hidden bg-[var(--bg2)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageHover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </span>
      <span className="mt-3 block text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
        {getBrandLabel(product.brand)}
      </span>
      <span className="mt-1 block text-[15px] font-medium tracking-tight">{product.name}</span>
      <span className="mt-1 block text-sm text-[var(--muted)]">{formatPrice(product.price)}</span>
    </Link>
  );
}

import Link from "next/link";
import type { Product } from "@/data/products";
import { getBrandLabel } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <span className="relative block aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--bg2)]">
        <span
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
          style={{ background: product.color }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: product.darkColor }}
          aria-hidden="true"
        />
      </span>
      <span className="mt-3 block text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        {getBrandLabel(product.brand)}
      </span>
      <span className="mt-1 block text-base font-semibold tracking-tight">{product.name}</span>
      <span className="mt-1 block text-sm text-[var(--muted)]">{formatPrice(product.price)}</span>
    </Link>
  );
}

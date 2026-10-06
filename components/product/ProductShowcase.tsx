"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { getBrandLabel } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ScrollAnimationContainer } from "@/components/animations/ScrollAnimationContainer";
import { ProductCarousel } from "@/components/product/ProductCarousel";

export function ProductShowcase({
  products,
  title = "The collection",
  intro = "One mannequin. Scroll and the jacket changes.",
}: {
  products: Product[];
  title?: string;
  intro?: string;
}) {
  if (products.length === 0) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">Nothing in this edit yet</h1>
        <Link href="/products" className="mt-6 text-sm underline underline-offset-4">
          Back to the collection
        </Link>
      </section>
    );
  }

  return (
    <>
      <ScrollAnimationContainer products={products}>
        <ProductCarousel />
      </ScrollAnimationContainer>

      <section className="border-t border-[#ded5c7] bg-[var(--bg)] px-6 py-20 text-[var(--ink)]">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Mock edit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">{intro}</p>

          <ul className="mt-12 divide-y divide-[#ded5c7]">
            {products.map((product) => (
              <li key={product.id} className="flex flex-wrap items-end justify-between gap-4 py-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {getBrandLabel(product.brand)}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">{product.name}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
                    {product.description}
                  </p>
                </div>
                <p className="text-lg font-medium">{formatPrice(product.price)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

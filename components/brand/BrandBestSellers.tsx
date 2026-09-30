"use client";

import { useRef } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { prefersReducedMotion } from "@/lib/utils";

export function BrandBestSellers({ products }: { products: Product[] }) {
  const scroller = useRef<HTMLUListElement>(null);

  if (products.length === 0) return null;

  const move = (direction: number) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({
      left: direction * node.clientWidth * 0.8,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <section className="px-6 py-14" aria-labelledby="best-sellers">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-4">
        <h2 id="best-sellers" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Best sellers
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            className="h-10 w-10 rounded-full border border-black/15 text-lg"
            onClick={() => move(-1)}
            aria-label="Previous jackets"
          >
            ‹
          </button>
          <button
            type="button"
            className="h-10 w-10 rounded-full border border-black/15 text-lg"
            onClick={() => move(1)}
            aria-label="Next jackets"
          >
            ›
          </button>
        </div>
      </div>
      <ul
        ref={scroller}
        className="mx-auto mt-8 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {products.map((product) => (
          <li key={product.id} className="w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-[23%]">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

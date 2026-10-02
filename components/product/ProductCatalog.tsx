"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

type Sort = "featured" | "price-asc" | "price-desc";

const chip =
  "h-9 border border-[var(--line)] bg-white px-3 text-[13px] text-[var(--ink)] transition-colors hover:border-[var(--ink)]";
const chipOn = "border-[var(--ink)] bg-[var(--ink)] text-white hover:bg-[var(--ink)]";

export function ProductCatalog({ products }: { products: Product[] }) {
  const [size, setSize] = useState("all");
  const [color, setColor] = useState("all");
  const [sort, setSort] = useState<Sort>("featured");

  const sizes = useMemo(() => {
    const found = new Set<string>();
    for (const product of products) {
      for (const value of product.sizes) found.add(value);
    }
    return ["S", "M", "L", "XL"].filter((value) => found.has(value));
  }, [products]);

  const colors = useMemo(() => {
    return [...new Set(products.map((product) => product.colorName))].sort();
  }, [products]);

  const visible = useMemo(() => {
    const filtered = products.filter((product) => {
      if (size !== "all" && !product.sizes.includes(size)) return false;
      if (color !== "all" && product.colorName !== color) return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.id - b.id;
    });
  }, [products, size, color, sort]);

  return (
    <section className="px-6 pb-20">
      <div className="sticky top-[var(--site-header-h)] z-10 -mx-6 mb-8 border-b border-[var(--line)] bg-[var(--bg)]/95 px-6 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <button type="button" className={`${chip} ${size === "all" ? chipOn : ""}`} onClick={() => setSize("all")}>
            All sizes
          </button>
          {sizes.map((value) => (
            <button
              key={value}
              type="button"
              className={`${chip} ${size === value ? chipOn : ""}`}
              onClick={() => setSize(value)}
              aria-pressed={size === value}
            >
              {value}
            </button>
          ))}

          <span className="mx-1 hidden h-5 w-px bg-black/15 sm:block" aria-hidden="true" />

          <label className="sr-only" htmlFor="color-filter">
            Colour
          </label>
          <select
            id="color-filter"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            className={`${chip} bg-[var(--bg)]`}
          >
            <option value="all">All colours</option>
            {colors.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <label className="sr-only" htmlFor="sort">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as Sort)}
            className={`${chip} bg-[var(--bg)] sm:ml-auto`}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
          </select>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <ProductGrid products={visible} />
      </div>
    </section>
  );
}

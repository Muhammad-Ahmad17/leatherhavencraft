"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

type Sort = "featured" | "price-asc" | "price-desc";

function getChipClass(isActive: boolean) {
  return `h-9 px-3.5 text-[13px] font-semibold rounded-md border transition-all cursor-pointer ${
    isActive
      ? "border-[#2a1810] bg-[#2a1810] text-white shadow-xs"
      : "border-[#ded5c7] bg-white text-[#221b16] hover:border-[#8a4d2b] hover:bg-[#faf8f5]"
  }`;
}

const selectClass =
  "h-9 px-3 text-[13px] font-medium rounded-md border border-[#ded5c7] bg-white text-[#221b16] hover:border-[#8a4d2b] outline-hidden cursor-pointer shadow-2xs";

export function ProductCatalog({ products }: { products: Product[] }) {
  const [size, setSize] = useState("all");
  const [color, setColor] = useState("all");
  const [sort, setSort] = useState<Sort>("featured");

  const sizes = useMemo(() => {
    const found = new Set<string>();
    for (const product of products) {
      for (const value of product.sizes || []) found.add(value);
    }
    const STANDARD_ORDER = [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL",
      "One Size",
    ];
    const ordered = STANDARD_ORDER.filter((value) => found.has(value));
    const extra = Array.from(found).filter((v) => !STANDARD_ORDER.includes(v)).sort();
    return [...ordered, ...extra];
  }, [products]);

  const colors = useMemo(() => {
    const found = new Set<string>();
    for (const product of products) {
      if (Array.isArray(product.colors) && product.colors.length > 0) {
        for (const c of product.colors) {
          if (c && c.name) found.add(c.name);
        }
      } else if (product.colorName) {
        found.add(product.colorName);
      }
    }
    return Array.from(found).sort();
  }, [products]);

  const visible = useMemo(() => {
    const filtered = products.filter((product) => {
      if (size !== "all" && !(product.sizes || []).includes(size)) return false;
      if (color !== "all") {
        const prodColors = Array.isArray(product.colors) && product.colors.length > 0
          ? product.colors.map((c) => c.name.toLowerCase())
          : [product.colorName?.toLowerCase()].filter(Boolean);
        if (!prodColors.includes(color.toLowerCase())) return false;
      }
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return String(a.id || "").localeCompare(String(b.id || ""));
    });
  }, [products, size, color, sort]);

  return (
    <section className="px-6 pb-20">
      <div className="sticky top-[var(--site-header-h)] z-10 -mx-6 mb-8 border-b border-[var(--line)] bg-[var(--bg)]/95 px-6 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <button type="button" className={getChipClass(size === "all")} onClick={() => setSize("all")}>
            All sizes
          </button>
          {sizes.map((value) => (
            <button
              key={value}
              type="button"
              className={getChipClass(size === value)}
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
            className={selectClass}
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
            className={`${selectClass} sm:ml-auto`}
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

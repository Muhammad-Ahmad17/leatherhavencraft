"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { getBrandLabel } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

type Sort = "featured" | "price-asc" | "price-desc";

function getProductCategory(product: Product): string {
  if (
    product.category &&
    ![
      "avirex",
      "pelle-pelle",
      "schott-nyc",
      "harley-davidson",
      "supreme",
      "leather-haven-craft",
      "accessories",
      "others",
    ].includes(product.category.toLowerCase())
  ) {
    return product.category;
  }
  const name = (product.name || "").toLowerCase();
  if (name.includes("hoodie") || name.includes("hooded")) return "Hoodies";
  if (name.includes("jersey")) return "Jerseys";
  if (name.includes("t-shirt") || name.includes("tee")) return "T-Shirts";
  if (
    name.includes("bomber") ||
    name.includes("b-3") ||
    name.includes("flight") ||
    name.includes("pilot") ||
    name.includes("shearling")
  ) {
    return "Bomber Jackets";
  }
  if (
    name.includes("racing") ||
    name.includes("speedway") ||
    name.includes("moto") ||
    name.includes("biker") ||
    name.includes("rider")
  ) {
    return "Racing & Moto";
  }
  if (
    product.brand === "accessories" ||
    name.includes("belt") ||
    name.includes("wallet") ||
    name.includes("glove")
  ) {
    return "Accessories";
  }
  return "Coats & Jackets";
}

function getBaseColor(colorName?: string): string {
  if (!colorName) return "Black";
  const c = colorName.toLowerCase();
  if (c.includes("black")) return "Black";
  if (c.includes("brown") || c.includes("espresso") || c.includes("tan")) return "Brown";
  if (c.includes("navy") || c.includes("blue")) return "Navy";
  if (c.includes("yellow") || c.includes("mustard")) return "Yellow";
  if (c.includes("burgundy") || c.includes("crimson") || c.includes("red")) return "Burgundy & Red";
  if (c.includes("olive") || c.includes("green")) return "Olive Green";
  if (c.includes("grey") || c.includes("gray") || c.includes("ash")) return "Grey";
  if (c.includes("cream") || c.includes("white") || c.includes("ivory")) return "Cream & White";
  return colorName;
}

const STANDARD_SIZES = [
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

export function ProductCatalog({ products }: { products: Product[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [size, setSize] = useState("all");
  const [color, setColor] = useState("all");
  const [sort, setSort] = useState<Sort>("featured");

  // Lock body scroll and handle Escape key when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Available brands (shown only when multiple brands exist in products)
  const availableBrands = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of products) {
      if (p.brand) {
        map.set(p.brand, (map.get(p.brand) || 0) + 1);
      }
    }
    return Array.from(map.entries())
      .map(([slug, count]) => ({ slug, name: getBrandLabel(slug), count }))
      .sort((a, b) => b.count - a.count);
  }, [products]);

  const hasMultipleBrands = availableBrands.length > 1;

  // Categories list with counts
  const categoryCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of products) {
      // Filter by brand if selected
      if (brand !== "all" && p.brand !== brand) continue;
      const cat = getProductCategory(p);
      map.set(cat, (map.get(cat) || 0) + 1);
    }
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [products, brand]);

  // Sizes list with counts
  const sizeCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of products) {
      if (category !== "all" && getProductCategory(p) !== category) continue;
      if (brand !== "all" && p.brand !== brand) continue;
      for (const s of p.sizes || []) {
        map.set(s, (map.get(s) || 0) + 1);
      }
    }
    const standard = STANDARD_SIZES.filter((s) => map.has(s)).map((s) => ({
      name: s,
      count: map.get(s) || 0,
    }));
    const extra = Array.from(map.keys())
      .filter((s) => !STANDARD_SIZES.includes(s))
      .sort()
      .map((s) => ({ name: s, count: map.get(s) || 0 }));
    return [...standard, ...extra];
  }, [products, category, brand]);

  // Colors list with counts
  const colorCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of products) {
      if (category !== "all" && getProductCategory(p) !== category) continue;
      if (brand !== "all" && p.brand !== brand) continue;
      const base = getBaseColor(p.colorName);
      map.set(base, (map.get(base) || 0) + 1);
    }
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [products, category, brand]);

  // Filtered & sorted products
  const visible = useMemo(() => {
    const filtered = products.filter((p) => {
      if (category !== "all" && getProductCategory(p) !== category) return false;
      if (brand !== "all" && p.brand !== brand) return false;
      if (size !== "all" && !(p.sizes || []).includes(size)) return false;
      if (color !== "all" && getBaseColor(p.colorName) !== color) return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return String(a.id || "").localeCompare(String(b.id || ""));
    });
  }, [products, category, brand, size, color, sort]);

  const activeFiltersCount =
    (category !== "all" ? 1 : 0) +
    (brand !== "all" ? 1 : 0) +
    (size !== "all" ? 1 : 0) +
    (color !== "all" ? 1 : 0);

  const clearAllFilters = () => {
    setCategory("all");
    setBrand("all");
    setSize("all");
    setColor("all");
  };

  return (
    <section className="px-6 pb-20">
      {/* ── Slide-over Filter Panel (1:1 Reference Architecture) ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1a110c]/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Filters"
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-[320px] sm:max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-[#ece7de] px-6 py-5">
          <h2 className="text-2xl font-serif font-medium tracking-tight text-[#2a1810]">
            Filters
          </h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-[#706456] hover:bg-[#f5f1eb] hover:text-[#2a1810] transition-colors cursor-pointer"
            aria-label="Close filters"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Panel Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7">
          {/* Category Section */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-[#2a1810]">
              Category
            </h3>
            <ul className="mt-3.5 space-y-2">
              {categoryCounts.map((cat) => {
                const isActive = category === cat.name;
                return (
                  <li key={cat.name}>
                    <button
                      type="button"
                      onClick={() => setCategory(isActive ? "all" : cat.name)}
                      className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                        isActive
                          ? "font-bold text-[#8a4d2b]"
                          : "text-[#2a1810] hover:text-[#8a4d2b]"
                      }`}
                    >
                      <span className={isActive ? "font-bold" : "font-normal"}>
                        {cat.name}
                      </span>{" "}
                      <span className="text-[#8c7e72] font-normal text-xs">
                        (&nbsp;{cat.count}&nbsp;)
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Brand Section (shown only on multi-brand pages e.g. /products) */}
          {hasMultipleBrands && (
            <div>
              <h3 className="text-[15px] font-semibold tracking-tight text-[#2a1810]">
                Brand
              </h3>
              <ul className="mt-3.5 space-y-2">
                {availableBrands.map((b) => {
                  const isActive = brand === b.slug;
                  return (
                    <li key={b.slug}>
                      <button
                        type="button"
                        onClick={() => setBrand(isActive ? "all" : b.slug)}
                        className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                          isActive
                            ? "font-bold text-[#8a4d2b]"
                            : "text-[#2a1810] hover:text-[#8a4d2b]"
                        }`}
                      >
                        <span className={isActive ? "font-bold" : "font-normal"}>
                          {b.name}
                        </span>{" "}
                        <span className="text-[#8c7e72] font-normal text-xs">
                          (&nbsp;{b.count}&nbsp;)
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Size Section */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-[#2a1810]">
              Size
            </h3>
            <ul className="mt-3.5 space-y-2">
              {sizeCounts.map((sz) => {
                const isActive = size === sz.name;
                return (
                  <li key={sz.name}>
                    <button
                      type="button"
                      onClick={() => setSize(isActive ? "all" : sz.name)}
                      className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                        isActive
                          ? "font-bold text-[#8a4d2b]"
                          : "text-[#2a1810] hover:text-[#8a4d2b]"
                      }`}
                    >
                      <span className={isActive ? "font-bold" : "font-normal"}>
                        {sz.name}
                      </span>{" "}
                      <span className="text-[#8c7e72] font-normal text-xs">
                        (&nbsp;{sz.count}&nbsp;)
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Color Section */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-[#2a1810]">
              Color
            </h3>
            <ul className="mt-3.5 space-y-2">
              {colorCounts.map((col) => {
                const isActive = color === col.name;
                return (
                  <li key={col.name}>
                    <button
                      type="button"
                      onClick={() => setColor(isActive ? "all" : col.name)}
                      className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                        isActive
                          ? "font-bold text-[#8a4d2b]"
                          : "text-[#2a1810] hover:text-[#8a4d2b]"
                      }`}
                    >
                      <span className={isActive ? "font-bold" : "font-normal"}>
                        {col.name}
                      </span>{" "}
                      <span className="text-[#8c7e72] font-normal text-xs">
                        (&nbsp;{col.count}&nbsp;)
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Panel Footer */}
        <div className="border-t border-[#ece7de] bg-[#fbf9f6] p-4 flex gap-3">
          {activeFiltersCount > 0 && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#706456] bg-white border border-[#ded5c7] hover:bg-[#f5f1eb] rounded transition-colors cursor-pointer"
            >
              Clear All
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.1em] text-white bg-[#2a1810] hover:bg-[#8a4d2b] rounded transition-colors cursor-pointer"
          >
            View ({visible.length})
          </button>
        </div>
      </aside>

      {/* ── Top Catalog Action Bar ── */}
      <div className="sticky top-[var(--site-header-h)] z-20 -mx-6 mb-8 border-b border-[var(--line)] bg-[var(--bg)]/95 px-6 py-3.5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          {/* Left: Filter Trigger Button & Active Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 rounded-md border border-[#ded5c7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#2a1810] hover:border-[#8a4d2b] hover:bg-[#faf8f5] transition-all shadow-2xs cursor-pointer"
            >
              <svg className="h-4 w-4 text-[#8a4d2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8a4d2b] text-[10px] font-bold text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Active Filter Chips */}
            {category !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faf7f2] border border-[#ded5c7] px-3 py-1 text-xs text-[#2a1810]">
                <span>{category}</span>
                <button
                  type="button"
                  onClick={() => setCategory("all")}
                  className="text-[#8c7e72] hover:text-[#2a1810] cursor-pointer font-bold"
                  aria-label={`Remove ${category} filter`}
                >
                  ✕
                </button>
              </span>
            )}

            {hasMultipleBrands && brand !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faf7f2] border border-[#ded5c7] px-3 py-1 text-xs text-[#2a1810]">
                <span>{getBrandLabel(brand)}</span>
                <button
                  type="button"
                  onClick={() => setBrand("all")}
                  className="text-[#8c7e72] hover:text-[#2a1810] cursor-pointer font-bold"
                  aria-label="Remove brand filter"
                >
                  ✕
                </button>
              </span>
            )}

            {size !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faf7f2] border border-[#ded5c7] px-3 py-1 text-xs text-[#2a1810]">
                <span>Size: {size}</span>
                <button
                  type="button"
                  onClick={() => setSize("all")}
                  className="text-[#8c7e72] hover:text-[#2a1810] cursor-pointer font-bold"
                  aria-label="Remove size filter"
                >
                  ✕
                </button>
              </span>
            )}

            {color !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faf7f2] border border-[#ded5c7] px-3 py-1 text-xs text-[#2a1810]">
                <span>Color: {color}</span>
                <button
                  type="button"
                  onClick={() => setColor("all")}
                  className="text-[#8c7e72] hover:text-[#2a1810] cursor-pointer font-bold"
                  aria-label="Remove color filter"
                >
                  ✕
                </button>
              </span>
            )}

            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs font-semibold text-[#8a4d2b] underline hover:text-[#2a1810] ml-1 cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Right: Sort & Pieces Counter */}
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--muted)] hidden sm:inline">
              {visible.length} {visible.length === 1 ? "piece" : "pieces"}
            </span>

            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="sr-only">
                Sort by
              </label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="h-9 px-3 text-xs font-medium rounded-md border border-[#ded5c7] bg-white text-[#2a1810] hover:border-[#8a4d2b] outline-hidden cursor-pointer shadow-2xs"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price, low to high</option>
                <option value="price-desc">Price, high to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ── Product Grid or Empty State ── */}
      <div className="mx-auto max-w-6xl">
        {visible.length > 0 ? (
          <ProductGrid products={visible} />
        ) : (
          <div className="rounded-xl border border-dashed border-[#ded5c7] bg-[#fbf9f6] py-16 text-center">
            <h3 className="font-serif text-lg font-bold text-[#2a1810]">
              No matching pieces found
            </h3>
            <p className="mt-2 text-sm text-[#706456]">
              Try clearing one or more active filters to view available atelier garments.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-5 inline-flex items-center rounded-md bg-[#2a1810] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#8a4d2b] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

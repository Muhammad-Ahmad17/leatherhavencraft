"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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
];

const KNOWN_BRANDS = [
  { slug: "pelle-pelle", name: "Pelle Pelle" },
  { slug: "avirex", name: "Avirex" },
  { slug: "schott-nyc", name: "Schott NYC" },
  { slug: "harley-davidson", name: "Harley-Davidson" },
  { slug: "supreme", name: "Supreme" },
  { slug: "leather-haven-craft", name: "Leather Haven Craft" },
];

const PRIMARY_SILHOUETTES = [
  "Bomber Jackets",
  "Racing & Moto",
  "Coats & Jackets",
];

const KNOWN_COLORS = [
  "Black",
  "Brown",
  "Navy",
  "Yellow",
  "Burgundy & Red",
  "Olive Green",
  "Grey",
  "Cream & White",
];

export type ProductCatalogProps = {
  products?: Product[];
  initialProducts?: Product[];
  initialPagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  initialCategory?: string;
  initialBrand?: string;
  initialSize?: string;
  initialColor?: string;
  initialSort?: Sort;
  initialSearch?: string;
};

export function ProductCatalog({
  products,
  initialProducts,
  initialPagination,
  initialCategory = "all",
  initialBrand = "all",
  initialSize = "all",
  initialColor = "all",
  initialSort = "featured",
  initialSearch = "",
}: ProductCatalogProps) {
  // Brand locking: when on a brand page like /brands/pelle-pelle, brand is locked
  const isBrandLocked = Boolean(initialBrand && initialBrand !== "all");

  // Support direct products prop (e.g. from static fallback) and SSR paginated props
  const isDirectMode = Boolean(products && !initialProducts);

  const [items, setItems] = useState<Product[]>(() => {
    const initial = products || initialProducts || [];
    const seen = new Set<string>();
    return initial.filter((p) => {
      const pid = String(p.id);
      if (seen.has(pid)) return false;
      seen.add(pid);
      return true;
    });
  });

  const [pagination, setPagination] = useState({
    total: initialPagination?.total ?? (products ? products.length : (initialProducts?.length ?? 0)),
    page: initialPagination?.page ?? 1,
    limit: initialPagination?.limit ?? 16,
    totalPages: initialPagination?.totalPages ?? (products ? Math.ceil(products.length / 16) || 1 : 1),
  });

  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);
  const [size, setSize] = useState(initialSize);
  const [color, setColor] = useState(initialColor);
  const [sort, setSort] = useState<Sort>(initialSort);
  const [search, setSearch] = useState(initialSearch);

  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  // Keep items in sync if products prop updates
  useEffect(() => {
    if (products) {
      setItems(products);
      setPagination({
        total: products.length,
        page: 1,
        limit: 16,
        totalPages: Math.ceil(products.length / 16) || 1,
      });
    }
  }, [products]);

  // Update URL shallowly without triggering unwanted re-renders or page jumps
  const updateUrlQuery = useCallback(
    (paramsObj: Record<string, string | number>) => {
      if (typeof window === "undefined" || isDirectMode) return;
      const sp = new URLSearchParams();
      Object.entries(paramsObj).forEach(([k, v]) => {
        if (v && v !== "all" && v !== "featured") {
          sp.set(k, String(v));
        }
      });
      const queryStr = sp.toString() ? `?${sp.toString()}` : window.location.pathname;
      window.history.replaceState(null, "", queryStr);
    },
    [isDirectMode]
  );

  // Apply filters via backend API query
  const queryBackend = useCallback(
    async (
      targetPage: number,
      newCategory: string,
      newBrand: string,
      newSize: string,
      newColor: string,
      newSort: Sort,
      append = false,
      newSearch?: string
    ) => {
      const activeSearch = newSearch !== undefined ? newSearch : search;
      const sp = new URLSearchParams();
      sp.set("page", String(targetPage));
      sp.set("limit", "16");
      if (newCategory !== "all") sp.set("category", newCategory);
      if (newBrand !== "all") sp.set("brand", newBrand);
      if (newSize !== "all") sp.set("size", newSize);
      if (newColor !== "all") sp.set("color", newColor);
      if (newSort !== "featured") sp.set("sort", newSort);
      if (activeSearch && activeSearch.trim()) sp.set("search", activeSearch.trim());

      try {
        const res = await fetch(`/api/catalog/products?${sp.toString()}`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.products)) {
            if (append) {
              const incoming = (data.products as Product[]) || [];
              setItems((prev) => {
                const seen = new Set(prev.map((p) => String(p.id)));
                const uniqueIncoming = incoming.filter(
                  (p: Product) => !seen.has(String(p.id))
                );
                return [...prev, ...uniqueIncoming];
              });
              if (data.pagination) {
                setPagination({
                  ...data.pagination,
                  page: targetPage,
                  totalPages: incoming.length === 0 ? targetPage : data.pagination.totalPages,
                });
              }
            } else {
              const seen = new Set<string>();
              const deduped: Product[] = [];
              for (const p of data.products as Product[]) {
                const pid = String(p.id);
                if (!seen.has(pid)) {
                  seen.add(pid);
                  deduped.push(p);
                }
              }
              setItems(deduped);
              if (data.pagination) {
                setPagination(data.pagination);
              }
            }
            updateUrlQuery({
              page: targetPage,
              category: newCategory,
              brand: newBrand,
              size: newSize,
              color: newColor,
              sort: newSort,
              search: activeSearch,
            });
          }
        }
      } catch (err) {
        console.error("[Catalog Query Error]", err);
      }
    },
    [updateUrlQuery, search]
  );

  // Filter change handler
  const handleFilterChange = useCallback(
    async (
      newCat = category,
      newBrd = brand,
      newSz = size,
      newClr = color,
      newSrt = sort
    ) => {
      if (isDirectMode && products) {
        setCategory(newCat);
        setBrand(newBrd);
        setSize(newSz);
        setColor(newClr);
        setSort(newSrt);
        setPagination((prev) => ({ ...prev, page: 1 }));
        return;
      }
      setIsFiltering(true);
      await queryBackend(1, newCat, newBrd, newSz, newClr, newSrt, false);
      setIsFiltering(false);
    },
    [isDirectMode, products, category, brand, size, color, sort, queryBackend]
  );

  // Instant 1-click silhouette filter
  const handleCategoryClick = (catName: string) => {
    const nextCat = category === catName && catName !== "all" ? "all" : catName;
    setCategory(nextCat);
    handleFilterChange(nextCat, brand, size, color, sort);
  };

  // Clear all filters (maintains locked brand on brand pages)
  const clearAllFilters = () => {
    const targetBrand = isBrandLocked ? initialBrand : "all";
    setCategory("all");
    if (!isBrandLocked) setBrand("all");
    setSize("all");
    setColor("all");
    if (!isDirectMode) {
      handleFilterChange("all", targetBrand, "all", "all", sort);
    } else {
      setPagination((prev) => ({ ...prev, page: 1 }));
    }
  };

  // For direct mode fallback, filter products in memory
  const filteredDirectProducts = useMemo(() => {
    if (!isDirectMode || !products) return [];
    const filtered = products.filter((p) => {
      if (category !== "all" && getProductCategory(p) !== category) return false;
      if (brand !== "all" && p.brand !== brand) return false;
      if (size !== "all" && !(p.sizes || []).includes(size)) return false;
      if (color !== "all" && getBaseColor(p.colorName) !== color) return false;
      return true;
    });

    filtered.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return String(a.id || "").localeCompare(String(b.id || ""));
    });

    return filtered;
  }, [isDirectMode, products, category, brand, size, color, sort]);

  const displayedItems = useMemo(() => {
    if (isDirectMode && products) {
      return filteredDirectProducts.slice(0, pagination.page * 16);
    }
    return items;
  }, [isDirectMode, products, filteredDirectProducts, items, pagination.page]);

  const totalPieces = isDirectMode && products ? filteredDirectProducts.length : pagination.total;
  const loadedPieces = displayedItems.length;

  // Load More Handler (Progressive append)
  const handleLoadMore = async () => {
    if (isLoadingMore) return;

    if (isDirectMode && products) {
      if (displayedItems.length >= totalPieces) return;
      setPagination((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
      return;
    }

    if (items.length >= pagination.total || pagination.page >= pagination.totalPages) return;

    setIsLoadingMore(true);
    const nextPage = pagination.page + 1;
    await queryBackend(nextPage, category, brand, size, color, sort, true);
    setIsLoadingMore(false);
  };

  // View All Handler
  const handleViewAll = async () => {
    if (isLoadingMore) return;

    if (isDirectMode && products) {
      setPagination((prev) => ({
        ...prev,
        page: Math.ceil(totalPieces / 16) || 1,
      }));
      return;
    }

    if (items.length >= pagination.total) return;
    setIsLoadingMore(true);
    const sp = new URLSearchParams();
    sp.set("page", "1");
    sp.set("limit", String(pagination.total));
    if (category !== "all") sp.set("category", category);
    if (brand !== "all") sp.set("brand", brand);
    if (size !== "all") sp.set("size", size);
    if (color !== "all") sp.set("color", color);
    if (sort !== "featured") sp.set("sort", sort);

    try {
      const res = await fetch(`/api/catalog/products?${sp.toString()}`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.products)) {
          const seen = new Set<string>();
          const deduped: Product[] = [];
          for (const p of data.products as Product[]) {
            const pid = String(p.id);
            if (!seen.has(pid)) {
              seen.add(pid);
              deduped.push(p);
            }
          }
          setItems(deduped);
          setPagination({
            ...pagination,
            page: 1,
            totalPages: 1,
          });
        }
      }
    } catch (err) {
      console.error("[View All Error]", err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // Active filters count (excluding locked brand on brand pages)
  const activeFiltersCount =
    (category !== "all" ? 1 : 0) +
    (!isBrandLocked && brand !== "all" ? 1 : 0) +
    (size !== "all" ? 1 : 0) +
    (color !== "all" ? 1 : 0);

  return (
    <section className="px-6 pb-20">
      {/* ── Active Search Banner ── */}
      {search && (
        <div className="mx-auto max-w-6xl mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#ded5c7] bg-[#fbf9f6] px-5 py-3.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8a4d2b]">Search</span>
              <span className="text-sm font-semibold text-[#221b16]">
                &ldquo;{search}&rdquo;
              </span>
              <span className="text-xs text-[#706456]">
                ({totalPieces} matching {totalPieces === 1 ? "piece" : "pieces"})
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                queryBackend(1, category, brand, size, color, sort, false, "");
              }}
              className="text-xs font-semibold text-[#8a4d2b] underline hover:text-[#2a1810] cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        </div>
      )}

      {/* ── Direct, Intuitive Filter Toolbar ── */}
      <div className="sticky top-[var(--site-header-h)] z-20 -mx-6 mb-8 border-b border-[var(--line)] bg-[var(--bg)]/95 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto max-w-6xl space-y-3.5">
          {/* Row 1: Direct 1-Click Category / Silhouette Pills */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => handleCategoryClick("all")}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  category === "all"
                    ? "bg-[#2a1810] text-[#faf7f2] shadow-xs"
                    : "border border-[#ded5c7] bg-white text-[#524438] hover:border-[#8a4d2b] hover:text-[#2a1810]"
                }`}
              >
                {isBrandLocked ? `All ${getBrandLabel(initialBrand)}` : "All Outerwear"}
              </button>

              {PRIMARY_SILHOUETTES.map((sil) => {
                const isActive = category === sil;
                return (
                  <button
                    key={sil}
                    type="button"
                    onClick={() => handleCategoryClick(sil)}
                    className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#2a1810] text-[#faf7f2] shadow-xs"
                        : "border border-[#ded5c7] bg-white text-[#524438] hover:border-[#8a4d2b] hover:text-[#2a1810]"
                    }`}
                  >
                    {sil}
                  </button>
                );
              })}
            </div>

            {/* Total Pieces counter */}
            <span className="shrink-0 text-xs font-medium text-[#706456] hidden md:inline">
              <span className="font-bold text-[#2a1810]">{totalPieces}</span>{" "}
              {totalPieces === 1 ? "piece" : "pieces"}
            </span>
          </div>

          {/* Row 2: Clean Dropdown Refinement Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-[#ece7de]/70">
            <div className="flex flex-wrap items-center gap-2">
              {/* House/Brand Select: Only on /products, hidden if already on brand page */}
              {!isBrandLocked && (
                <div className="relative">
                  <select
                    value={brand}
                    onChange={(e) => {
                      const next = e.target.value;
                      setBrand(next);
                      handleFilterChange(category, next, size, color, sort);
                    }}
                    className="h-8.5 rounded-lg border border-[#ded5c7] bg-white pl-3 pr-8 text-xs font-medium text-[#2a1810] hover:border-[#8a4d2b] focus:border-[#8a4d2b] outline-hidden cursor-pointer shadow-2xs appearance-none"
                    aria-label="Filter by House"
                  >
                    <option value="all">House: All Houses</option>
                    {KNOWN_BRANDS.map((b) => (
                      <option key={b.slug} value={b.slug}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#706456]">
                    ▾
                  </span>
                </div>
              )}

              {/* Size Select */}
              <div className="relative">
                <select
                  value={size}
                  onChange={(e) => {
                    const next = e.target.value;
                    setSize(next);
                    handleFilterChange(category, brand, next, color, sort);
                  }}
                  className="h-8.5 rounded-lg border border-[#ded5c7] bg-white pl-3 pr-8 text-xs font-medium text-[#2a1810] hover:border-[#8a4d2b] focus:border-[#8a4d2b] outline-hidden cursor-pointer shadow-2xs appearance-none"
                  aria-label="Filter by Size"
                >
                  <option value="all">Size: All Sizes</option>
                  {STANDARD_SIZES.map((s) => (
                    <option key={s} value={s}>
                      Size: {s}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#706456]">
                  ▾
                </span>
              </div>

              {/* Color Select */}
              <div className="relative">
                <select
                  value={color}
                  onChange={(e) => {
                    const next = e.target.value;
                    setColor(next);
                    handleFilterChange(category, brand, size, next, sort);
                  }}
                  className="h-8.5 rounded-lg border border-[#ded5c7] bg-white pl-3 pr-8 text-xs font-medium text-[#2a1810] hover:border-[#8a4d2b] focus:border-[#8a4d2b] outline-hidden cursor-pointer shadow-2xs appearance-none"
                  aria-label="Filter by Color"
                >
                  <option value="all">Color: All Colors</option>
                  {KNOWN_COLORS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#706456]">
                  ▾
                </span>
              </div>

              {/* Reset link if filters applied */}
              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="ml-1 text-xs font-semibold text-[#8a4d2b] underline hover:text-[#2a1810] transition-colors cursor-pointer"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 ml-auto">
              <label htmlFor="sort-select" className="sr-only">
                Sort by
              </label>
              <div className="relative">
                <select
                  id="sort-select"
                  value={sort}
                  onChange={(e) => {
                    const nextSort = e.target.value as Sort;
                    setSort(nextSort);
                    handleFilterChange(category, brand, size, color, nextSort);
                  }}
                  className="h-8.5 rounded-lg border border-[#ded5c7] bg-white pl-3 pr-8 text-xs font-medium text-[#2a1810] hover:border-[#8a4d2b] focus:border-[#8a4d2b] outline-hidden cursor-pointer shadow-2xs appearance-none"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#706456]">
                  ▾
                </span>
              </div>
            </div>
          </div>

          {/* Row 3: Active Filter Badges (Shows only when filters are active) */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#706456] mr-1">
                Active:
              </span>

              {category !== "all" && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4eee6] border border-[#ded5c7] px-2.5 py-0.5 text-xs font-medium text-[#2a1810]">
                  <span>{category}</span>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick("all")}
                    className="text-[#706456] hover:text-[#2a1810] cursor-pointer font-bold"
                    aria-label={`Remove ${category} filter`}
                  >
                    ✕
                  </button>
                </span>
              )}

              {!isBrandLocked && brand !== "all" && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4eee6] border border-[#ded5c7] px-2.5 py-0.5 text-xs font-medium text-[#2a1810]">
                  <span>House: {getBrandLabel(brand)}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setBrand("all");
                      handleFilterChange(category, "all", size, color, sort);
                    }}
                    className="text-[#706456] hover:text-[#2a1810] cursor-pointer font-bold"
                    aria-label="Remove brand filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {size !== "all" && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4eee6] border border-[#ded5c7] px-2.5 py-0.5 text-xs font-medium text-[#2a1810]">
                  <span>Size: {size}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSize("all");
                      handleFilterChange(category, brand, "all", color, sort);
                    }}
                    className="text-[#706456] hover:text-[#2a1810] cursor-pointer font-bold"
                    aria-label="Remove size filter"
                  >
                    ✕
                  </button>
                </span>
              )}

              {color !== "all" && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4eee6] border border-[#ded5c7] px-2.5 py-0.5 text-xs font-medium text-[#2a1810]">
                  <span>Color: {color}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setColor("all");
                      handleFilterChange(category, brand, size, "all", sort);
                    }}
                    className="text-[#706456] hover:text-[#2a1810] cursor-pointer font-bold"
                    aria-label="Remove color filter"
                  >
                    ✕
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Product Grid or Empty State ── */}
      <div className={`mx-auto max-w-6xl transition-opacity duration-300 ${isFiltering ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
        {displayedItems.length > 0 ? (
          <>
            <ProductGrid products={displayedItems} />

            {/* Progressive Load More & Counter */}
            {totalPieces > 16 && (
              <div className="mt-14 flex flex-col items-center text-center">
                <p className="text-xs font-semibold tracking-wide text-[#706456]">
                  Showing <span className="font-bold text-[#2a1810]">{loadedPieces}</span> of{" "}
                  <span className="font-bold text-[#2a1810]">{totalPieces}</span> handcrafted pieces
                </p>

                {/* Progress bar */}
                <div className="mt-3 h-1.5 w-64 max-w-full rounded-full bg-[#ded5c7]/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#8a4d2b] transition-all duration-500 ease-out"
                    style={{
                      width: `${Math.min(100, Math.round((loadedPieces / totalPieces) * 100))}%`,
                    }}
                  />
                </div>

                {/* Buttons */}
                {loadedPieces < totalPieces && pagination.page < pagination.totalPages ? (
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="inline-flex items-center gap-2 rounded-md bg-[#2a1810] px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#8a4d2b] transition-all shadow-sm active:scale-98 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isLoadingMore ? (
                        <>
                          <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          <span>Loading Pieces...</span>
                        </>
                      ) : (
                        <>
                          <span>Load More Jackets</span>
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">
                            +{Math.min(16, totalPieces - loadedPieces)}
                          </span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleViewAll}
                      disabled={isLoadingMore}
                      className="text-xs font-semibold text-[#8a4d2b] underline underline-offset-4 hover:text-[#2a1810] transition-colors cursor-pointer py-2 px-1 disabled:opacity-50"
                    >
                      View All ({totalPieces})
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#706456]">
                    <svg className="h-4 w-4 text-[#8a4d2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You have viewed all {totalPieces} available pieces in this selection.</span>
                  </div>
                )}
              </div>
            )}
          </>
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

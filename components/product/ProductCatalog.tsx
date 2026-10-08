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
  "One Size",
];

const KNOWN_BRANDS = [
  { slug: "pelle-pelle", name: "Pelle Pelle" },
  { slug: "avirex", name: "Avirex" },
  { slug: "schott-nyc", name: "Schott NYC" },
  { slug: "harley-davidson", name: "Harley-Davidson" },
  { slug: "supreme", name: "Supreme" },
  { slug: "leather-haven-craft", name: "Leather Haven Craft" },
  { slug: "accessories", name: "Accessories" },
];

const KNOWN_CATEGORIES = [
  "Bomber Jackets",
  "Racing & Moto",
  "Coats & Jackets",
  "Hoodies",
  "Jerseys",
  "T-Shirts",
  "Accessories",
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
  // Support both direct products prop (e.g. from BrandPage) and SSR paginated props (from ProductsPage)
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

  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);
  const [size, setSize] = useState(initialSize);
  const [color, setColor] = useState(initialColor);
  const [sort, setSort] = useState<Sort>(initialSort);
  const [search, setSearch] = useState(initialSearch);

  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

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
              setItems((prev) => {
                const seen = new Set(prev.map((p) => String(p.id)));
                const uniqueIncoming = (data.products as Product[]).filter(
                  (p: Product) => !seen.has(String(p.id))
                );
                return [...prev, ...uniqueIncoming];
              });
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
            }
            if (data.pagination) {
              setPagination(data.pagination);
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
        // Direct in-memory filtering for pages like BrandPage
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

  const clearAllFilters = () => {
    setCategory("all");
    setBrand("all");
    setSize("all");
    setColor("all");
    if (!isDirectMode) {
      handleFilterChange("all", "all", "all", "all", sort);
    } else {
      setPagination((prev) => ({ ...prev, page: 1 }));
    }
  };

  // For direct mode (e.g. BrandPage fallback), filter products in memory
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
      // In-memory pagination for direct mode
      setPagination((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
      return;
    }

    if (items.length >= pagination.total) return;

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

  const activeFiltersCount =
    (category !== "all" ? 1 : 0) +
    (brand !== "all" ? 1 : 0) +
    (size !== "all" ? 1 : 0) +
    (color !== "all" ? 1 : 0);

  return (
    <section className="px-6 pb-20">
      {/* ── Slide-over Filter Panel ── */}
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
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-lg font-bold text-[#2a1810]">Filters</h2>
            {activeFiltersCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8a4d2b] text-[10px] font-bold text-white">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#706456] hover:bg-[#f5f1eb] hover:text-[#2a1810] transition-colors cursor-pointer"
            aria-label="Close filters"
          >
            ✕
          </button>
        </div>

        {/* Panel Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7">
          {/* Brand Section */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-[#2a1810]">
              Brand / Heritage House
            </h3>
            <ul className="mt-3.5 space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setBrand("all");
                    handleFilterChange(category, "all", size, color, sort);
                  }}
                  className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                    brand === "all"
                      ? "font-bold text-[#8a4d2b]"
                      : "text-[#2a1810] hover:text-[#8a4d2b]"
                  }`}
                >
                  All Houses
                </button>
              </li>
              {KNOWN_BRANDS.map((b) => {
                const isActive = brand === b.slug;
                return (
                  <li key={b.slug}>
                    <button
                      type="button"
                      onClick={() => {
                        const next = isActive ? "all" : b.slug;
                        setBrand(next);
                        handleFilterChange(category, next, size, color, sort);
                      }}
                      className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                        isActive
                          ? "font-bold text-[#8a4d2b]"
                          : "text-[#2a1810] hover:text-[#8a4d2b]"
                      }`}
                    >
                      {b.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Category Section */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-[#2a1810]">
              Silhouettes &amp; Cuts
            </h3>
            <ul className="mt-3.5 space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all");
                    handleFilterChange("all", brand, size, color, sort);
                  }}
                  className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                    category === "all"
                      ? "font-bold text-[#8a4d2b]"
                      : "text-[#2a1810] hover:text-[#8a4d2b]"
                  }`}
                >
                  All Silhouettes
                </button>
              </li>
              {KNOWN_CATEGORIES.map((catName) => {
                const isActive = category === catName;
                return (
                  <li key={catName}>
                    <button
                      type="button"
                      onClick={() => {
                        const next = isActive ? "all" : catName;
                        setCategory(next);
                        handleFilterChange(next, brand, size, color, sort);
                      }}
                      className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                        isActive
                          ? "font-bold text-[#8a4d2b]"
                          : "text-[#2a1810] hover:text-[#8a4d2b]"
                      }`}
                    >
                      {catName}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Size Section */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-[#2a1810]">
              Size (XS – 6XL)
            </h3>
            <div className="mt-3.5 grid grid-cols-3 gap-2">
              {STANDARD_SIZES.map((s) => {
                const isActive = size === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      const next = isActive ? "all" : s;
                      setSize(next);
                      handleFilterChange(category, brand, next, color, sort);
                    }}
                    className={`py-2 px-3 text-xs font-semibold rounded-md border transition-all cursor-pointer text-center ${
                      isActive
                        ? "border-[#8a4d2b] bg-[#8a4d2b] text-white shadow-2xs"
                        : "border-[#ded5c7] bg-white text-[#2a1810] hover:border-[#8a4d2b]"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Section */}
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight text-[#2a1810]">
              Color
            </h3>
            <ul className="mt-3.5 space-y-2">
              {KNOWN_COLORS.map((colName) => {
                const isActive = color === colName;
                return (
                  <li key={colName}>
                    <button
                      type="button"
                      onClick={() => {
                        const next = isActive ? "all" : colName;
                        setColor(next);
                        handleFilterChange(category, brand, size, next, sort);
                      }}
                      className={`block text-left text-sm py-1 transition-colors cursor-pointer ${
                        isActive
                          ? "font-bold text-[#8a4d2b]"
                          : "text-[#2a1810] hover:text-[#8a4d2b]"
                      }`}
                    >
                      {colName}
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
            View ({totalPieces})
          </button>
        </div>
      </aside>

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
                  onClick={() => {
                    setCategory("all");
                    handleFilterChange("all", brand, size, color, sort);
                  }}
                  className="text-[#8c7e72] hover:text-[#2a1810] cursor-pointer font-bold"
                  aria-label={`Remove ${category} filter`}
                >
                  ✕
                </button>
              </span>
            )}

            {brand !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faf7f2] border border-[#ded5c7] px-3 py-1 text-xs text-[#2a1810]">
                <span>{getBrandLabel(brand)}</span>
                <button
                  type="button"
                  onClick={() => {
                    setBrand("all");
                    handleFilterChange(category, "all", size, color, sort);
                  }}
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
                  onClick={() => {
                    setSize("all");
                    handleFilterChange(category, brand, "all", color, sort);
                  }}
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
                  onClick={() => {
                    setColor("all");
                    handleFilterChange(category, brand, size, "all", sort);
                  }}
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
              {totalPieces} {totalPieces === 1 ? "piece" : "pieces"}
            </span>

            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="sr-only">
                Sort by
              </label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => {
                  const nextSort = e.target.value as Sort;
                  setSort(nextSort);
                  handleFilterChange(category, brand, size, color, nextSort);
                }}
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
      <div className={`mx-auto max-w-6xl transition-opacity duration-300 ${isFiltering ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
        {displayedItems.length > 0 ? (
          <>
            <ProductGrid products={displayedItems} />

            {/* Progressive Load More & Counter (Shows when catalog exceeds 16 pieces) */}
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
                {loadedPieces < totalPieces ? (
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

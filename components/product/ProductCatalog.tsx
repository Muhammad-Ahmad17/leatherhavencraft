"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { getBrandLabel } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

type Sort = "featured" | "price-asc" | "price-desc";

const KNOWN_BRANDS = [
  { slug: "pelle-pelle", name: "Pelle Pelle" },
  { slug: "avirex", name: "Avirex" },
  { slug: "schott-nyc", name: "Schott NYC" },
  { slug: "harley-davidson", name: "Harley-Davidson" },
  { slug: "supreme", name: "Supreme" },
  { slug: "leather-haven-craft", name: "Leather Haven Craft" },
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
  initialBrand = "all",
  initialSort = "featured",
  initialSearch = "",
}: ProductCatalogProps) {
  // Brand locking: when on a brand page like /brands/pelle-pelle, brand is fixed
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

  const [brand, setBrand] = useState(initialBrand);
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
      newBrand: string,
      newSort: Sort,
      append = false,
      newSearch?: string
    ) => {
      const activeSearch = newSearch !== undefined ? newSearch : search;
      const sp = new URLSearchParams();
      sp.set("page", String(targetPage));
      sp.set("limit", "16");
      if (newBrand !== "all") sp.set("brand", newBrand);
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
              brand: newBrand,
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
      newBrd = brand,
      newSrt = sort
    ) => {
      if (isDirectMode && products) {
        setBrand(newBrd);
        setSort(newSrt);
        setPagination((prev) => ({ ...prev, page: 1 }));
        return;
      }
      setIsFiltering(true);
      await queryBackend(1, newBrd, newSrt, false);
      setIsFiltering(false);
    },
    [isDirectMode, products, brand, sort, queryBackend]
  );

  // Clear all filters (maintains locked brand on brand pages)
  const clearAllFilters = () => {
    const targetBrand = isBrandLocked ? initialBrand : "all";
    if (!isBrandLocked) setBrand("all");
    if (!isDirectMode) {
      handleFilterChange(targetBrand, sort);
    } else {
      setPagination((prev) => ({ ...prev, page: 1 }));
    }
  };

  // For direct mode fallback, filter products in memory
  const filteredDirectProducts = useMemo(() => {
    if (!isDirectMode || !products) return [];
    const filtered = products.filter((p) => {
      if (brand !== "all" && p.brand !== brand) return false;
      return true;
    });

    filtered.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return String(a.id || "").localeCompare(String(b.id || ""));
    });

    return filtered;
  }, [isDirectMode, products, brand, sort]);

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
    await queryBackend(nextPage, brand, sort, true);
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
    if (brand !== "all") sp.set("brand", brand);
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
                queryBackend(1, brand, sort, false, "");
              }}
              className="text-xs font-semibold text-[#8a4d2b] underline hover:text-[#2a1810] cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        </div>
      )}

      {/* ── Clean Catalog Action Bar ── */}
      <div className="sticky top-[var(--site-header-h)] z-20 -mx-6 mb-8 border-b border-[var(--line)] bg-[var(--bg)]/95 px-6 py-3.5 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          {/* Left: House Filter (if on /products) or Brand Header */}
          <div className="flex flex-wrap items-center gap-3">
            {!isBrandLocked ? (
              <div className="flex items-center gap-2">
                <div className="relative">
                  <select
                    value={brand}
                    onChange={(e) => {
                      const next = e.target.value;
                      setBrand(next);
                      handleFilterChange(next, sort);
                    }}
                    className="h-9 rounded-lg border border-[#ded5c7] bg-white pl-3 pr-8 text-xs font-medium text-[#2a1810] hover:border-[#8a4d2b] focus:border-[#8a4d2b] outline-hidden cursor-pointer shadow-2xs appearance-none"
                    aria-label="Filter by Heritage House"
                  >
                    <option value="all">All Heritage Houses</option>
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

                {brand !== "all" && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="text-xs font-semibold text-[#8a4d2b] underline hover:text-[#2a1810] transition-colors cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            ) : (
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a4d2b]">
                {getBrandLabel(initialBrand)} Collection
              </span>
            )}

            {/* Active Brand Chip if filtered on /products */}
            {!isBrandLocked && brand !== "all" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4eee6] border border-[#ded5c7] px-2.5 py-1 text-xs font-medium text-[#2a1810]">
                <span>{getBrandLabel(brand)}</span>
                <button
                  type="button"
                  onClick={() => {
                    setBrand("all");
                    handleFilterChange("all", sort);
                  }}
                  className="text-[#706456] hover:text-[#2a1810] cursor-pointer font-bold"
                  aria-label="Remove brand filter"
                >
                  ✕
                </button>
              </span>
            )}
          </div>

          {/* Right: Piece Count & Sort Dropdown */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-[#706456]">
              <span className="font-bold text-[#2a1810]">{totalPieces}</span>{" "}
              {totalPieces === 1 ? "piece" : "pieces"}
            </span>

            <div className="relative">
              <label htmlFor="sort-select" className="sr-only">
                Sort by
              </label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => {
                  const nextSort = e.target.value as Sort;
                  setSort(nextSort);
                  handleFilterChange(brand, nextSort);
                }}
                className="h-9 rounded-lg border border-[#ded5c7] bg-white pl-3 pr-8 text-xs font-medium text-[#2a1810] hover:border-[#8a4d2b] focus:border-[#8a4d2b] outline-hidden cursor-pointer shadow-2xs appearance-none"
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
              Try clearing the active filter to view available atelier garments.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-5 inline-flex items-center rounded-md bg-[#2a1810] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#8a4d2b] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

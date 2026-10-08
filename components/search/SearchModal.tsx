"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = [
  "Plush Leather",
  "Avirex Bomber",
  "Marc Buchanan",
  "Schott Perfecto",
  "Biker Cut",
  "Harley Heritage",
  "Flight Jacket",
  "Shearling",
];

const CATEGORIES = [
  { id: "all", label: "All Houses" },
  { id: "leather-haven-craft", label: "Leather Haven Craft" },
  { id: "avirex", label: "Avirex" },
  { id: "pelle-pelle", label: "Pelle Pelle" },
  { id: "harley-davidson", label: "Harley-Davidson" },
  { id: "schott-nyc", label: "Schott NYC" },
  { id: "supreme", label: "Supreme" },
  { id: "accessories", label: "Accessories" },
  { id: "others", label: "Others" },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [results, setResults] = useState<Product[]>([]);
  const [totalMatches, setTotalMatches] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Recent Searches stored in localStorage
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  // Quick preview curated pieces shown before search
  const [curatedPieces, setCuratedPieces] = useState<Product[]>([]);

  // Load recent searches and curated sample on modal open
  useEffect(() => {
    if (isOpen) {
      try {
        const stored = localStorage.getItem("lhc_recent_searches");
        if (stored) {
          setRecentSearches(JSON.parse(stored).slice(0, 5));
        }
      } catch {
        // Ignore localStorage parse errors
      }

      // Fetch 4 curated pieces if not loaded yet
      if (curatedPieces.length === 0) {
        fetch("/api/catalog/products?limit=4")
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data?.products && Array.isArray(data.products)) {
              setCuratedPieces(data.products);
            }
          })
          .catch(() => {});
      }

      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setQuery("");
      setResults([]);
      setTotalMatches(0);
      setSelectedIndex(-1);
      setSelectedCategory("all");
    }
  }, [isOpen, curatedPieces.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const saveRecentSearch = useCallback((term: string) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    try {
      setRecentSearches((prev) => {
        const updated = [trimmed, ...prev.filter((t) => t.toLowerCase() !== trimmed.toLowerCase())].slice(0, 5);
        localStorage.setItem("lhc_recent_searches", JSON.stringify(updated));
        return updated;
      });
    } catch {
      // Ignore
    }
  }, []);

  const clearRecentSearches = () => {
    try {
      localStorage.removeItem("lhc_recent_searches");
      setRecentSearches([]);
    } catch {
      // Ignore
    }
  };

  // Debounced server-side query to /api/catalog/products (optimized for 400+ products)
  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      setResults([]);
      setTotalMatches(0);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const timer = setTimeout(async () => {
      try {
        const sp = new URLSearchParams();
        sp.set("search", trimmed);
        sp.set("limit", "8");
        if (selectedCategory !== "all") {
          sp.set("category", selectedCategory);
        }

        const res = await fetch(`/api/catalog/products?${sp.toString()}`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.products)) {
            setResults(data.products);
            setTotalMatches(data.pagination?.total ?? data.products.length);
            setSelectedIndex(-1);
          }
        }
      } catch (err) {
        console.error("[SearchModal Error]", err);
      } finally {
        setIsLoading(false);
      }
    }, 250); // 250ms debounce

    return () => clearTimeout(timer);
  }, [query, selectedCategory]);

  const handleSelectProduct = (product: Product) => {
    if (query.trim()) saveRecentSearch(query.trim());
    onClose();
    router.push(`/products/${product.slug}`);
  };

  const handleViewAllResults = () => {
    const trimmed = query.trim();
    if (trimmed) saveRecentSearch(trimmed);
    onClose();
    const catQuery = selectedCategory !== "all" ? `&category=${selectedCategory}` : "";
    router.push(`/products?search=${encodeURIComponent(trimmed)}${catQuery}`);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        handleSelectProduct(results[selectedIndex]);
      } else if (query.trim()) {
        handleViewAllResults();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search catalog"
      className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#ded5c7] bg-[#fbf9f6] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[#e5ded3] bg-white px-5 py-4">
          {isLoading ? (
            <svg
              className="h-5 w-5 shrink-0 animate-spin text-[#8a4d2b]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 shrink-0 text-[#8a7a6c]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          )}

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search 400+ leather jackets, cuts, hides, or houses..."
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-[#221b16] placeholder-[#998b7e] outline-hidden"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear query"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0ebe3] text-xs text-[#5a4c40] hover:bg-[#e2dad0] transition-colors cursor-pointer"
            >
              ✕
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="rounded border border-[#ded5c8] bg-[#faf8f5] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#6e5e52] hover:border-[#2a1810] hover:text-[#2a1810] transition-colors cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex gap-1.5 overflow-x-auto border-b border-[#ece6dc] bg-[#f5f1ea] px-5 py-2.5 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#2a1810] text-white shadow-xs"
                    : "bg-white text-[#5c4f44] border border-[#ded7cc] hover:bg-[#ece6dc]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="max-h-[62vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === "" ? (
            <div className="space-y-6">
              {/* Recent Searches (if available) */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#7a6b5e]">
                      Recent Searches
                    </p>
                    <button
                      type="button"
                      onClick={clearRecentSearches}
                      className="text-[10px] font-medium text-[#8a4d2b] hover:text-[#2a1810] underline cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setQuery(term)}
                        className="rounded-lg border border-[#ded5c7] bg-white px-3 py-1.5 text-xs font-medium text-[#221b16] hover:border-[#8a4d2b] hover:text-[#8a4d2b] transition-colors cursor-pointer shadow-2xs"
                      >
                        ⏱️ {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#7a6b5e]">
                  Popular Atelier Inquiries
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="rounded-lg border border-[#ded5c7] bg-white px-3 py-1.5 text-xs font-medium text-[#3d2e24] hover:border-[#8a4d2b] hover:text-[#8a4d2b] transition-colors cursor-pointer shadow-2xs"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Curated Pieces (Instant Preview) */}
              {curatedPieces.length > 0 && (
                <div className="border-t border-[#ece6dc] pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#7a6b5e]">
                    Featured Archival Outerwear
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {curatedPieces.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        onClick={onClose}
                        className="group flex items-center gap-3 rounded-xl border border-[#e5dfd5] bg-white p-2.5 hover:border-[#8a4d2b] transition-all shadow-2xs"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.image || "/catalog/field-bomber.jpg"}
                          alt={p.name}
                          className="h-14 w-12 rounded-lg object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8a4d2b]">
                            {p.brand}
                          </span>
                          <span className="block truncate text-xs font-semibold text-[#1e1713] group-hover:text-[#8a4d2b] transition-colors">
                            {p.name}
                          </span>
                          <span className="block text-[11px] text-[#7a6b5e] font-medium">
                            {formatPrice(p.price)}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : isLoading && results.length === 0 ? (
            <div className="py-16 text-center">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[#7a6b5e]">
                <svg className="h-4 w-4 animate-spin text-[#8a4d2b]" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Searching atelier database...
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-14 text-center">
              <p className="font-serif text-lg font-bold text-[#2a1810]">
                No handcrafted pieces found matching &ldquo;{query}&rdquo;
              </p>
              <p className="mt-2 text-xs text-[#7a6b5e] max-w-sm mx-auto">
                Check your spelling, explore all houses, or browse our entire archive of jackets.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  router.push("/products");
                }}
                className="mt-5 inline-block rounded-lg bg-[#2a1810] px-4 py-2 text-xs font-semibold text-white hover:bg-[#8a4d2b] transition-colors cursor-pointer"
              >
                Explore Full Catalog
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between pb-3 text-[11px] text-[#7a6b5e]">
                <span>
                  Found <strong className="text-[#2a1810]">{totalMatches}</strong>{" "}
                  {totalMatches === 1 ? "piece" : "pieces"}
                </span>
                <span className="hidden sm:inline">Use ↑↓ keys to navigate, Enter to inspect</span>
              </div>

              <div className="divide-y divide-[#ece6dd]">
                {results.map((product, idx) => {
                  const isHighlighted = idx === selectedIndex;
                  return (
                    <button
                      key={product.slug}
                      type="button"
                      onClick={() => handleSelectProduct(product)}
                      className={`w-full text-left group flex items-center gap-4 py-3 px-3 rounded-xl transition-all cursor-pointer ${
                        isHighlighted ? "bg-white border border-[#8a4d2b]/40 shadow-xs" : "hover:bg-white"
                      }`}
                    >
                      <div className="relative h-16 w-13 shrink-0 overflow-hidden rounded-lg bg-[#f5f1eb] border border-[#e2dcd2]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image || "/catalog/field-bomber.jpg"}
                          alt={product.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8a4d2b]">
                          {product.brand}
                        </span>
                        <h4 className="truncate text-xs sm:text-sm font-semibold text-[#1e1713] group-hover:text-[#8a4d2b] transition-colors">
                          {product.name}
                        </h4>
                        <p className="truncate text-[11px] text-[#7a6b5e] mt-0.5">
                          {product.description || product.meta}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block text-xs sm:text-sm font-bold text-[#1e1713]">
                          {formatPrice(product.price)}
                        </span>
                        <span className="block text-[10px] font-semibold text-emerald-700">In Stock</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* View all results button */}
              {totalMatches > results.length && (
                <div className="mt-4 pt-3 border-t border-[#ece6dc] text-center">
                  <button
                    type="button"
                    onClick={handleViewAllResults}
                    className="w-full rounded-xl border border-[#ded5c7] bg-white py-2.5 text-xs font-bold text-[#2a1810] hover:border-[#8a4d2b] hover:text-[#8a4d2b] transition-colors shadow-2xs cursor-pointer"
                  >
                    View all {totalMatches} pieces matching &ldquo;{query}&rdquo; &rarr;
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

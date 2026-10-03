"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { products as localProducts, Product, fetchLiveProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = ["Schott Perfecto", "Field Bomber", "Biker Cut", "Avirex", "Harley Heritage"];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "schott-nyc", label: "Schott NYC" },
  { id: "harley-davidson", label: "Harley-Davidson" },
  { id: "avirex", label: "Avirex" },
  { id: "pelle-pelle", label: "Pelle Pelle" },
  { id: "supreme", label: "Supreme" },
  { id: "leather-haven-craft", label: "Leather Haven Craft" },
  { id: "accessories", label: "Accessories" },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [catalog, setCatalog] = useState<Product[]>(localProducts);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load latest live catalog on open
  useEffect(() => {
    if (isOpen) {
      fetchLiveProducts().then((res) => {
        if (res && res.length > 0) setCatalog(res);
      });
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setSelectedCategory("all");
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered search results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalog.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.brand.toLowerCase() === selectedCategory.toLowerCase();

      if (!q) return matchesCategory;

      const matchesText =
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        (product.meta && product.meta.toLowerCase().includes(q)) ||
        (product.colorName && product.colorName.toLowerCase().includes(q));

      return matchesCategory && matchesText;
    });
  }, [catalog, query, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      <div className="flex min-h-full items-start justify-center p-4 sm:p-6 lg:p-12">
        <div className="relative w-full max-w-2xl rounded-2xl border border-[#382e25] bg-[#16120e] text-[#f7f5f2] shadow-2xl overflow-hidden mt-6">
          {/* Search Header Bar */}
          <div className="flex items-center gap-3 border-b border-[#2e261f] px-5 py-4">
            <svg
              className="h-5 w-5 text-[#d4af37] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jackets, brands, cuts, leather types..."
              className="h-9 flex-1 bg-transparent text-sm text-white placeholder-[#8a7b6d] focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#261f18] text-xs text-[#9c8e80] hover:text-white"
              >
                ✕
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded border border-[#382f26] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#9c8e80] hover:border-[#d4af37] hover:text-white transition-colors"
            >
              Esc
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="flex gap-1.5 overflow-x-auto border-b border-[#2a221b] bg-[#130f0c] px-5 py-2.5 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#d4af37] text-[#14100c]"
                      : "bg-[#1f1914] text-[#9c8e80] hover:bg-[#2c231c] hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
            {query.trim() === "" && selectedCategory === "all" ? (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8a7b6d]">
                  Popular Searches
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="rounded-lg border border-[#332a22] bg-[#1d1712] px-3 py-1.5 text-xs text-[#d1c4b6] hover:border-[#d4af37] hover:text-white transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>

                <div className="mt-6 border-t border-[#261f18] pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8a7b6d]">
                    Featured Heritage Outerwear
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {catalog.slice(0, 4).map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        onClick={onClose}
                        className="group flex items-center gap-3 rounded-lg border border-[#2a221a] bg-[#1a140f] p-2.5 hover:border-[#d4af37]/60 transition-colors"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.image || "/catalog/field-bomber.jpg"}
                          alt={p.name}
                          className="h-14 w-12 rounded object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="block text-[10px] uppercase tracking-wider text-[#d4af37]">
                            {p.brand}
                          </span>
                          <span className="block truncate text-xs font-medium text-white group-hover:underline">
                            {p.name}
                          </span>
                          <span className="block text-[11px] text-[#9c8e80]">
                            {formatPrice(p.price)}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="py-12 text-center">
                <p className="font-serif text-base text-white">No jackets found matching &quot;{query}&quot;</p>
                <p className="mt-1 text-xs text-[#8a7b6d]">
                  Try searching for another cut, leather type, or select &quot;All&quot; categories.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-3 text-[11px] text-[#8a7b6d]">
                  <span>
                    Found <strong className="text-white">{results.length}</strong> {results.length === 1 ? "piece" : "pieces"}
                  </span>
                  <span>Click to view piece</span>
                </div>
                <div className="divide-y divide-[#261f18]">
                  {results.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-4 py-3 hover:bg-[#1a1510] -mx-2 px-2 rounded-lg transition-colors"
                    >
                      <div className="relative h-16 w-13 shrink-0 overflow-hidden rounded bg-[#100c09] border border-[#2b221a]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image || "/catalog/field-bomber.jpg"}
                          alt={product.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#d4af37]">
                          {product.brand}
                        </span>
                        <h4 className="truncate text-xs sm:text-sm font-medium text-white group-hover:text-[#d4af37] transition-colors">
                          {product.name}
                        </h4>
                        <p className="truncate text-[11px] text-[#8a7b6d] mt-0.5">
                          {product.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block font-serif text-sm font-semibold text-white">
                          {formatPrice(product.price)}
                        </span>
                        <span className="block text-[10px] text-[#22c55e]">Available</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

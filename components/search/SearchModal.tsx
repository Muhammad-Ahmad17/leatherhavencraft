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

  // Fuzzy filter
  const results = useMemo(() => {
    let pool = catalog;
    if (selectedCategory !== "all") {
      pool = pool.filter((p) => p.brand.toLowerCase() === selectedCategory);
    }
    if (!query.trim()) return pool;

    const q = query.toLowerCase().trim();
    return pool.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.colorName.toLowerCase().includes(q) ||
        p.meta.toLowerCase().includes(q)
    );
  }, [catalog, query, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 lg:p-10">
      {/* Soft Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/45 transition-opacity backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Modal Dialog (Warm Light Luxury Theme) */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-[#ded5c8] bg-[#faf8f5] text-[#1e1713] shadow-2xl animate-fadeIn">
        {/* Search Header Input */}
        <div className="flex items-center gap-3 border-b border-[#e5ded3] bg-white px-5 py-4">
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
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by jacket name, cut, leather, or heritage house..."
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-[#1e1713] placeholder-[#998b7e] outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
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

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === "" && selectedCategory === "all" ? (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7a6b5e]">
                Popular Inquiries
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

              <div className="mt-6 border-t border-[#ece6dc] pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7a6b5e]">
                  Featured Heritage Outerwear
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {catalog.slice(0, 4).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-lg border border-[#e5dfd5] bg-white p-2.5 hover:border-[#8a4d2b] transition-all shadow-2xs"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image || "/catalog/field-bomber.jpg"}
                        alt={p.name}
                        className="h-14 w-12 rounded object-cover"
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
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-base font-semibold text-[#2a1810]">No jackets found matching &quot;{query}&quot;</p>
              <p className="mt-1 text-xs text-[#7a6b5e]">
                Try searching for another cut, leather type, or select &quot;All&quot; categories.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between pb-3 text-[11px] text-[#7a6b5e]">
                <span>
                  Found <strong className="text-[#1e1713]">{results.length}</strong> {results.length === 1 ? "piece" : "pieces"}
                </span>
                <span>Select to inspect</span>
              </div>
              <div className="divide-y divide-[#ece6dd]">
                {results.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="group flex items-center gap-4 py-3 hover:bg-white -mx-2 px-2.5 rounded-lg transition-colors"
                  >
                    <div className="relative h-16 w-13 shrink-0 overflow-hidden rounded bg-[#f5f1eb] border border-[#e2dcd2]">
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
                        {product.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="block text-xs sm:text-sm font-bold text-[#1e1713]">
                        {formatPrice(product.price)}
                      </span>
                      <span className="block text-[10px] font-medium text-emerald-700">In Stock</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

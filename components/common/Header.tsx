"use client";
import { SocialChannels } from "@/components/common/SocialChannels";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBrandStrip } from "@/data/brands";
import { SiteLogo } from "@/components/common/SiteLogo";
import { useCart } from "@/context/CartContext";
import { SearchModal } from "@/components/search/SearchModal";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-[22px]" aria-hidden="true">
      <span
        className={`absolute left-0 block h-0.5 w-full bg-[var(--ink)] transition-transform duration-200 ${
          open ? "top-2 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-2 block h-0.5 w-full bg-[var(--ink)] transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-full bg-[var(--ink)] transition-transform duration-200 ${
          open ? "top-2 -rotate-45" : "top-4"
        }`}
      />
    </span>
  );
}



const navLink =
  "text-[13px] tracking-[0.08em] uppercase transition-colors hover:text-[var(--leather)] lg:text-[14px]";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const stripBrands = getBrandStrip();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const shopActive = pathname === "/products" || pathname.startsWith("/products/");
  const journalActive = pathname === "/blog" || pathname.startsWith("/blog/");

  return (
    <header id="site-header" className="sticky top-0 z-40">
      <div className="flex min-h-[var(--announcement-h)] items-center justify-center bg-[var(--leather-dark)] px-4 py-1 text-center text-[10px] tracking-[0.12em] text-white/90 uppercase sm:text-[11px]">
        Handcrafted Leather Outerwear · Ships to Europe &amp; the United States
      </div>

      <div className="border-b border-[var(--line)] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <div className="mx-auto grid h-[var(--header-main-h)] max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:px-8">
          <div className="flex min-w-0 items-center justify-start gap-2">
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <MenuIcon open={open} />
            </button>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              <Link
                href="/products"
                aria-current={shopActive ? "page" : undefined}
                className={`${navLink} ${shopActive ? "text-[var(--leather)]" : "text-[var(--ink)]"}`}
              >
                Shop
              </Link>
              <div className="group relative">
                <button
                  type="button"
                  className={`${navLink} flex items-center gap-1.5 text-[var(--ink)]`}
                  aria-haspopup="true"
                >
                  Brands &amp; Collections
                  <span aria-hidden="true" className="text-[10px]">
                    ▾
                  </span>
                </button>
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-[460px] rounded-xl border border-[var(--line)] bg-white p-3 shadow-2xl transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="px-2 py-1.5 mb-1.5 border-b border-[#ece7de] flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                      Brands &amp; Collections
                    </span>
                    <Link
                      href="/products"
                      className="text-[11px] font-medium text-[#706456] hover:text-[#2a1810] underline"
                    >
                      View All Pieces
                    </Link>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {stripBrands.map((brand) => (
                      <li key={brand.slug}>
                        <Link
                          href={`/brands/${brand.slug}`}
                          title={brand.name}
                          className="group/brand flex items-center gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-[#ded5c7] hover:bg-[#faf7f2]"
                        >
                          <span className="flex h-9 w-14 shrink-0 items-center justify-center rounded bg-white p-1 shadow-2xs border border-[#eee8df]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={brand.logo}
                              alt=""
                              className="max-h-6 w-auto max-w-full object-contain"
                            />
                          </span>
                          <span className="text-xs font-semibold text-[#2a1810] group-hover/brand:text-[#8a4d2b] transition-colors truncate">
                            {brand.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link
                href="/blog"
                aria-current={journalActive ? "page" : undefined}
                className={`${navLink} ${journalActive ? "text-[var(--leather)]" : "text-[var(--ink)]"}`}
              >
                Journal
              </Link>
            </nav>
          </div>

          <div className="flex justify-center px-1">
            <SiteLogo centered className="h-[38px] max-w-[min(52vw,260px)] sm:h-[42px] lg:h-[46px] lg:max-w-[300px]" />
          </div>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center text-[var(--ink)] transition-opacity hover:opacity-70"
              aria-label="Search jackets (Cmd+K)"
              title="Search (Cmd+K)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3-3" />
              </svg>
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative flex h-9 w-9 items-center justify-center text-[var(--ink)] transition-opacity hover:opacity-70"
              aria-label={`Shopping bag (${totalItems} pieces)`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 7h12l-1 14H7L6 7z" />
                <path d="M9 7V5a3 3 0 016 0v2" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[var(--leather)] px-1 text-[10px] font-bold text-white shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[var(--site-header-h)] z-40 bg-[#1a110c]/50 lg:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="fixed inset-x-0 top-[var(--site-header-h)] bottom-0 z-50 overflow-y-auto bg-[var(--bg)] px-6 pt-6 pb-16 lg:hidden"
          >
            <Link
              href="/products"
              className="block border-b border-[var(--line)] py-4 text-2xl font-medium tracking-tight"
            >
              Shop all jackets
            </Link>
            <Link
              href="/blog"
              className="block border-b border-[var(--line)] py-4 text-2xl font-medium tracking-tight"
            >
              The Journal &amp; Guides
            </Link>
            <Link
              href="/size-guide"
              className="block border-b border-[var(--line)] py-3 text-lg font-medium tracking-tight text-[var(--leather)]"
            >
              Universal Size Guide
            </Link>
            <p className="mt-8 text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase mb-2">Brands &amp; Collections</p>
            <ul className="mt-2 border-t border-[var(--line)]">
              {stripBrands.map((brand) => (
                <li key={brand.slug} className="border-b border-[var(--line)]">
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="flex items-center justify-between gap-4 py-3.5"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="flex h-10 w-16 shrink-0 items-center justify-center rounded-md bg-white p-1.5 shadow-2xs border border-[#eee8df]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={brand.logo}
                          alt=""
                          className="max-h-7 w-auto max-w-full object-contain"
                        />
                      </span>
                      <span className="text-base font-semibold text-[var(--ink)] truncate">
                        {brand.name}
                      </span>
                    </div>
                    <span aria-hidden="true" className="text-[var(--muted)] text-lg">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[var(--line)] pt-6">
              <p className="text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase mb-3">Social &amp; Connect</p>
              <SocialChannels />
            </div>
          </nav>
        </>
      ) : null}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}

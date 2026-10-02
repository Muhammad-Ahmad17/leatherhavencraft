"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBrandStrip } from "@/data/brands";
import { SiteLogo } from "@/components/common/SiteLogo";

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

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center text-[var(--ink)] transition-opacity hover:opacity-70"
      aria-label={label}
    >
      {children}
    </button>
  );
}

const navLink =
  "text-[13px] tracking-[0.08em] uppercase transition-colors hover:text-[var(--leather)] lg:text-[14px]";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const shopActive = pathname === "/products" || pathname.startsWith("/products/");

  return (
    <header id="site-header" className="sticky top-0 z-40">
      <div className="flex min-h-[var(--announcement-h)] items-center justify-center bg-[var(--leather-dark)] px-4 py-1 text-center text-[10px] tracking-[0.12em] text-white/90 uppercase sm:text-[11px]">
        Authorized jackets · Ships to Europe &amp; the United States
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
                  Brands
                  <span aria-hidden="true" className="text-[10px]">
                    ▾
                  </span>
                </button>
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-[min(440px,calc(100vw-2rem))] border border-[var(--line)] bg-white py-4 opacity-0 shadow-xl transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="grid grid-cols-2 gap-1">
                    {stripBrands.map((brand) => (
                      <li key={brand.slug}>
                        <Link
                          href={`/brands/${brand.slug}`}
                          className="flex min-h-[52px] items-center gap-3 px-4 py-2 hover:bg-[var(--bg2)]"
                        >
                          <span className="flex h-10 w-[108px] shrink-0 items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={brand.logo}
                              alt=""
                              className={`max-h-8 w-auto max-w-full object-contain ${brand.slug === "harley-davidson" ? "max-h-10" : ""}`}
                            />
                          </span>
                          <span className="text-sm text-[var(--ink)]">{brand.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div className="flex justify-center px-1">
            <SiteLogo centered className="h-[38px] max-w-[min(52vw,260px)] sm:h-[42px] lg:h-[46px] lg:max-w-[300px]" />
          </div>

          <div className="flex items-center justify-end gap-0">
            <IconButton label="Search (coming soon)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3-3" />
              </svg>
            </IconButton>
            <IconButton label="Bag (coming soon)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 7h12l-1 14H7L6 7z" />
                <path d="M9 7V5a3 3 0 016 0v2" />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[var(--site-header-h)] z-40 bg-black/40 lg:hidden"
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
            <p className="mt-8 text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">Brands</p>
            <ul className="mt-2 border-t border-[var(--line)]">
              {stripBrands.map((brand) => (
                <li key={brand.slug} className="border-b border-[var(--line)]">
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="flex h-11 w-[140px] items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-9 w-auto object-contain"
                      />
                    </span>
                    <span aria-hidden="true" className="text-[var(--muted)]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}

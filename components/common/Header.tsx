"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brands } from "@/data/brands";
import { SITE_NAME } from "@/lib/constants";

const links = [
  { href: "/products", label: "Jackets" },
  ...brands.map((brand) => ({ href: `/brands/${brand.slug}`, label: brand.name })),
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-white">
      <div className="flex h-14 items-center justify-between gap-8 px-5 sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-[13px] font-semibold tracking-[0.18em] uppercase text-[var(--ink)]"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden min-w-0 xl:block" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[13px] tracking-[0.02em] transition-colors hover:text-[var(--ink)] ${
                      active ? "text-[var(--ink)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="text-[13px] tracking-[0.16em] uppercase text-[var(--ink)] xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-x-0 top-14 bottom-0 z-30 overflow-y-auto bg-white px-6 pt-8 pb-16 xl:hidden"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Shop</p>
          <Link href="/products" className="mt-4 block text-3xl font-medium tracking-tight">
            All jackets
          </Link>

          <p className="mt-12 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Brands</p>
          <ul className="mt-2 border-t border-[var(--line)]">
            {brands.map((brand) => (
              <li key={brand.slug} className="border-b border-[var(--line)]">
                <Link
                  href={`/brands/${brand.slug}`}
                  className="flex items-center justify-between py-4 text-xl tracking-tight"
                >
                  {brand.name}
                  <span aria-hidden="true" className="text-[var(--muted)]">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

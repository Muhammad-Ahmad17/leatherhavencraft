import Link from "next/link";
import { brands } from "@/data/brands";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white text-[var(--ink)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase">{SITE_NAME}</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--muted)]">
            Authorized jackets, shipped across Europe and the United States.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Shop</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/products" className="hover:underline">
                All jackets
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Brands</p>
          <ul className="mt-4 space-y-3 text-sm">
            {brands.map((brand) => (
              <li key={brand.slug}>
                <Link href={`/brands/${brand.slug}`} className="hover:underline">
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Shipping</p>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            Orders ship to Europe and the United States. Checkout is not connected in this prototype.
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}

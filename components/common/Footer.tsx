import Link from "next/link";
import { getBrandStrip } from "@/data/brands";
import { SITE_NAME } from "@/lib/constants";
import { ContactLinks } from "@/components/common/ContactLinks";
import { SiteLogo } from "@/components/common/SiteLogo";

const helpLinks = [
  { href: "#", label: "Shipping" },
  { href: "#", label: "Returns" },
  { href: "#", label: "Size guide" },
  { href: "#", label: "Contact" },
];

const legalLinks = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
];

export function Footer() {
  const stripBrands = getBrandStrip();

  return (
    <footer className="bg-[var(--leather-dark)] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SiteLogo inverted />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
            {SITE_NAME} is an authorized multi-brand jacket retailer for Europe and the United States. We stock
            select lines from the houses below — we are not those brands.
          </p>
          <ContactLinks variant="footer" />
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase">Shop</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/products" className="text-white/90 hover:text-white">
                All jackets
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white/90 hover:text-white">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase">Brands we carry</p>
          <ul className="mt-4 space-y-3 text-sm">
            {stripBrands.map((brand) => (
              <li key={brand.slug}>
                <Link href={`/brands/${brand.slug}`} className="text-white/90 hover:text-white">
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] tracking-[0.18em] text-white/50 uppercase">Customer care</p>
          <ul className="mt-4 space-y-3 text-sm">
            {helpLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-white/90 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white/80">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

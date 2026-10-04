import Link from "next/link";
import { getBrandStrip } from "@/data/brands";
import { SITE_NAME } from "@/lib/constants";
import { SiteLogo } from "@/components/common/SiteLogo";
import { NewsletterForm } from "@/components/common/NewsletterForm";

export function Footer() {
  const stripBrands = getBrandStrip();

  return (
    <footer className="border-t border-[var(--line)] bg-[#14100d] text-white">
      {/* ══════════ 1. FEATURED NEWSLETTER & EDITORIAL SHOWCASE ══════════ */}
      <div className="border-b border-white/10 bg-[#1a1410]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 lg:grid-cols-12 lg:gap-12">
          {/* Left: Newsletter Dispatch Information & Form */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d4af37]">
                Private Dispatch &amp; Rare Releases
              </span>
            </div>
            <h2 className="mt-2 font-serif text-2xl tracking-wide text-white sm:text-3xl lg:text-4xl">
              The Leather Haven Gazette
            </h2>
            <p className="mt-2.5 max-w-xl text-xs leading-relaxed text-white/70 sm:text-sm">
              Receive confidential dispatches on limited archive restocks, seasonal drops, and rare collector editions from Schott NYC, Harley-Davidson, Avirex, and our house workshop.
            </p>

            {/* Newsletter Form */}
            <div className="mt-6 max-w-lg">
              <NewsletterForm />
            </div>

            {/* Reassurance Pillars */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-[11px] text-white/60">
              <div>
                <span className="block font-semibold text-white/80">Authorized Houses</span>
                <span className="text-[10px]">100% Genuine provenance</span>
              </div>
              <div>
                <span className="block font-semibold text-white/80">Europe &amp; USA</span>
                <span className="text-[10px]">Insured express transit</span>
              </div>
              <div>
                <span className="block font-semibold text-white/80">Direct Concierge</span>
                <span className="text-[10px]">WhatsApp &amp; Email support</span>
              </div>
            </div>
          </div>

          {/* Right: Clean, Natural, Unshaded Lifestyle Photo (Trimmed from bottom) */}
          <div className="flex justify-center lg:col-span-5">
            <div className="group relative w-full max-w-md overflow-hidden rounded-xl border border-white/15 bg-[#1f1814]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/newsletter-bg.png"
                alt="Gentleman wearing heritage brown suede jacket on California trail"
                className="h-64 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 sm:h-72"
              />
              {/* Minimal caption pill with no dark shade/tint on the photo */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-black/60 px-3 py-1.5 text-[11px] text-white/90 backdrop-blur-md">
                <span className="font-medium tracking-wide">Heritage Suede Field Jacket</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#d4af37]">House Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ 2. BRAND ARCHITECTURE & NAVIGATION ══════════ */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Column 1: Brand & Direct Concierge */}
        <div className="lg:col-span-4">
          <SiteLogo inverted />
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/70">
            {SITE_NAME} is an authorized multi-brand jacket retailer serving Europe and the United States. We curate authentic production runs from the world&apos;s greatest leather houses alongside limited bespoke workshop cuts.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href="https://wa.me/?text=Hi%20Leather%20Haven%20Craft%20%E2%80%94%20I'd%20like%20to%20inquire%20about%20jackets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded bg-[#25D366] px-4 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            >
              <span>WhatsApp Concierge</span>
            </a>
            <a
              href="mailto:support@leatherhavencraft.com?subject=Jacket%20Inquiry"
              className="inline-flex h-9 items-center justify-center rounded border border-white/20 px-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Email Orders
            </a>
          </div>
        </div>

        {/* Column 2: Houses & Brands */}
        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Authorized Houses
          </p>
          <ul className="mt-4 space-y-2.5 text-xs">
            {stripBrands.map((brand) => (
              <li key={brand.slug}>
                <Link
                  href={`/brands/${brand.slug}`}
                  className="text-white/75 transition-colors hover:text-white hover:underline underline-offset-4"
                >
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Client Services */}
        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Client Services
          </p>
          <ul className="mt-4 space-y-2.5 text-xs text-white/75">
            <li>
              <Link href="/products" className="transition-colors hover:text-white">
                All Leather Jackets
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition-colors hover:text-white">
                FAQ &amp; Sizing Guide
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="transition-colors hover:text-white">
                Shipping &amp; Returns
              </Link>
            </li>
            <li>
              <span className="text-white/90">Direct Concierge Ordering</span>
            </li>
            <li>
              <span className="text-white/60">Authenticity Guarantee</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours & Delivery */}
        <div className="lg:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Store Desk
          </p>
          <div className="mt-4 space-y-2.5 text-xs text-white/70">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-white/50">Hours</span>
              <span className="text-white/90">Mon – Sat · 09:00 – 20:00 CET</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-white/50">Transit</span>
              <span className="text-white/90">Europe &amp; USA Express</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-white/50">Response</span>
              <span className="text-[#d4af37]">Within 30 minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ 3. BOTTOM COPYRIGHT & REGIONAL BAR ══════════ */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Authorized stockist. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]">
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <span className="text-white/20">·</span>
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
            <span className="text-white/20">·</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-white/20">·</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

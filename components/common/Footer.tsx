import Link from "next/link";
import { getBrandStrip } from "@/data/brands";
import { SITE_NAME } from "@/lib/constants";
import { SiteLogo } from "@/components/common/SiteLogo";
import { NewsletterForm } from "@/components/common/NewsletterForm";

export function Footer() {
  const stripBrands = getBrandStrip();

  return (
    <footer className="border-t border-[#2e261f] bg-[#16120e] text-[#f2eee9]">
      {/* ══════════ 1. ATTRACTIVE EDITORIAL DISPATCH BANNER (NO IMAGES) ══════════ */}
      <div className="border-b border-white/10 bg-[#1c1713] px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d4af37]">
            Private Atelier Dispatch
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            The Leather Haven Gazette
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-white/70 sm:text-sm max-w-xl mx-auto">
            Receive confidential notifications on rare archive restocks, limited seasonal cuts, and custom bespoke commissions from Schott NYC, Avirex, and our London workshop.
          </p>

          {/* Form */}
          <div className="mt-6 max-w-md mx-auto">
            <NewsletterForm />
          </div>

          {/* 3 Value Pillars */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 text-left sm:text-center">
            <div className="space-y-1">
              <span className="block text-xs font-semibold text-white tracking-wide">
                Verified Provenance
              </span>
              <p className="text-[11px] text-white/60">
                100% authentic hardware, tags &amp; heavy hides.
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-semibold text-white tracking-wide">
                Express Transit
              </span>
              <p className="text-[11px] text-white/60">
                3–5 days DHL / FedEx air courier to US &amp; EU.
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-semibold text-white tracking-wide">
                Dedicated Concierge
              </span>
              <p className="text-[11px] text-white/60">
                Direct WhatsApp &amp; email fit consultations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ 2. BRAND ARCHITECTURE & NAVIGATION ══════════ */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Column 1: Brand & Direct Concierge */}
        <div className="lg:col-span-4">
          <SiteLogo inverted />
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/70">
            {SITE_NAME} is an authorized stockist and bespoke leather atelier. We curate authentic production runs from the world&apos;s most iconic leather houses alongside our in-house Horween pieces.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href="https://wa.me/?text=Hi%20Leather%20Haven%20Craft%20%E2%80%94%20I%20would%20like%20to%20inquire%20about%20a%20jacket"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded bg-[#25D366] px-4 text-xs font-semibold uppercase tracking-wider text-black transition-opacity hover:opacity-90"
            >
              WhatsApp Concierge
            </a>
            <a
              href="mailto:support@leatherhavencraft.com?subject=Jacket%20Inquiry"
              className="inline-flex h-9 items-center justify-center rounded border border-white/20 bg-white/5 px-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Email Desk
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
                All Leather Outerwear
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition-colors hover:text-white">
                FAQ &amp; Sizing Matrix
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="transition-colors hover:text-white">
                Shipping &amp; Returns
              </Link>
            </li>
            <li>
              <span className="text-white/90">Bespoke Fit Consultation</span>
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
              <span className="block text-[10px] uppercase tracking-wider text-white/50">Desk Hours</span>
              <span className="text-white/90">Mon – Sat · 09:00 – 20:00 CET</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-white/50">Transit</span>
              <span className="text-white/90">USA, UK &amp; Europe Express</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-white/50">Response Time</span>
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

import { SocialChannels } from "@/components/common/SocialChannels";
import Link from "next/link";
import { getBrandStrip } from "@/data/brands";
import { SITE_NAME } from "@/lib/constants";
import { SiteLogo } from "@/components/common/SiteLogo";
import { NewsletterForm } from "@/components/common/NewsletterForm";
import { buildWhatsAppUrl } from "@/lib/contact";

export function Footer() {
  const stripBrands = getBrandStrip();

  return (
    <footer className="border-t border-[#ded5c7] bg-[#f7f4ef] text-[#221b16]">
      {/* ══════════ 1. ATTRACTIVE EDITORIAL DISPATCH BANNER (WARM COHESIVE THEME) ══════════ */}
      <div className="border-b border-[#ded5c7] bg-[#f0ebe3] px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#8a4d2b]">
            Newsletter
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#221b16] sm:text-3xl lg:text-4xl">
            Stay Connected
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#6b5c51] sm:text-sm max-w-xl mx-auto">
            Subscribe to receive updates on new jacket arrivals, seasonal archive restocks, and exclusive releases from Schott NYC, Avirex, and our workshop.
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <NewsletterForm />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#ded5c7] pt-8 text-left sm:text-center">
            <div className="space-y-1">
              <span className="block text-xs font-bold text-[#221b16] uppercase tracking-wider">
                Verified Provenance
              </span>
              <p className="text-[11px] text-[#6b5c51]">
                Heavy 1.3–1.5mm full-grain hides &amp; solid brass hardware.
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-bold text-[#221b16] uppercase tracking-wider">
                Express Transit
              </span>
              <p className="text-[11px] text-[#6b5c51]">
                3–5 days DHL / FedEx air courier to US &amp; EU.
              </p>
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-bold text-[#221b16] uppercase tracking-wider">
                Dedicated Concierge
              </span>
              <p className="text-[11px] text-[#6b5c51]">
                WhatsApp &amp; email customer support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ 2. BRAND ARCHITECTURE & NAVIGATION ══════════ */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SiteLogo />
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#6b5c51]">
            {SITE_NAME} is an independent leather workshop, bespoke atelier, and direct manufacturer. We handcraft master tributes to iconic silhouettes alongside bespoke made-to-measure tailoring and wholesale bulk production for boutiques, clubs, and retailers worldwide.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={buildWhatsAppUrl("Hi Leather Haven Craft — I would like to inquire about a jacket.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded bg-[#25D366] px-4 text-xs font-semibold uppercase tracking-wider text-black transition-opacity hover:opacity-90 shadow-2xs"
            >
              WhatsApp
            </a>
            <a
              href="mailto:support@leatherhavencraft.com?subject=Jacket%20Inquiry"
              className="inline-flex h-9 items-center justify-center rounded border border-[#ded5c7] bg-white px-4 text-xs font-semibold uppercase tracking-wider text-[#221b16] transition-colors hover:border-[#8a4d2b] hover:bg-[#f0ebe3] shadow-2xs"
            >
              Email Us
            </a>
          </div>

          <div className="mt-5 border-t border-[#ded5c7] pt-4">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b] mb-2.5">
              Social &amp; Connect
            </span>
            <SocialChannels />
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
            Heritage Silhouettes
          </p>
          <ul className="mt-4 space-y-2.5 text-xs">
            {stripBrands.map((brand) => (
              <li key={brand.slug}>
                <Link
                  href={"/brands/" + brand.slug}
                  className="text-[#6b5c51] transition-colors hover:text-[#221b16] hover:underline underline-offset-4"
                >
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
            Client Services
          </p>
          <ul className="mt-4 space-y-2.5 text-xs text-[#6b5c51]">
            <li>
              <Link href="/products" className="transition-colors hover:text-[#221b16]">
                All Leather Outerwear
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-[#221b16] font-medium text-[#8a4d2b]">
                The Journal &amp; Guides
              </Link>
            </li>
            <li>
              <Link href="/size-guide" className="transition-colors hover:text-[#221b16] font-medium text-[#8a4d2b]">
                Universal Size Guide (XS–6XL)
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition-colors hover:text-[#221b16]">
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="transition-colors hover:text-[#221b16]">
                Shipping &amp; Returns
              </Link>
            </li>
            <li>
              <Link href="/#custom-manufacturing" className="transition-colors hover:text-[#221b16] font-medium text-[#8a4d2b]">
                Wholesale &amp; Bulk Dealing
              </Link>
            </li>
            <li>
              <span className="text-[#221b16] font-medium">Bespoke Fit Consultation</span>
            </li>
            <li>
              <span className="text-[#8a7b70]">Authenticity Guarantee</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
            Customer Support
          </p>
          <div className="mt-4 space-y-2.5 text-xs text-[#6b5c51]">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#8a7b70]">Support Hours</span>
              <span className="text-[#221b16] font-medium">Mon – Sat · 09:00 – 20:00 CET</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#8a7b70]">Transit</span>
              <span className="text-[#221b16] font-medium">USA, UK &amp; Europe Express</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#8a7b70]">Response Time</span>
              <span className="text-[#8a4d2b] font-semibold">Within 30 minutes</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#8a7b70]">Atelier &amp; Workshop</span>
              <a
                href="https://maps.app.goo.gl/JPg45EsFFu8Y5Qa69?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#221b16] font-medium hover:text-[#8a4d2b] transition-colors inline-flex items-center gap-1 group"
                title="View atelier on Google Maps"
              >
                <span>Kashmir Road, Sialkot</span>
                <span aria-hidden="true" className="text-[10px] text-[#8a4d2b] group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ 2.5 LEGAL NOTICE & NON-AFFILIATION DISCLAIMER ══════════ */}
      <div className="border-t border-[#ded5c7] bg-[#f4eee6]/60 px-6 py-4">
        <div className="mx-auto max-w-6xl text-[11px] leading-relaxed text-[#7a6b5e]">
          <p>
            <span className="font-semibold text-[#221b16]">Legal &amp; Trademark Notice: </span>
            {SITE_NAME} is an independent custom leathercraft workshop and bespoke outerwear atelier based in Sialkot, Pakistan. Outerwear pieces referencing historical or archival silhouettes (such as cuts popularized by Schott NYC, Avirex, Pelle Pelle, and Harley-Davidson) are handcrafted master tributes bench-built using genuine full-grain hides, authentic brass hardware, and custom anatomical tailoring. All third-party trademarks, brand names, and model designations belong strictly to their respective owners and are used under nominative fair use for descriptive silhouette and historical style identification. Leather Haven Craft is not affiliated with, endorsed by, sponsored by, or an authorized distributor of any referenced brand.
          </p>
        </div>
      </div>

      {/* ══════════ 3. BOTTOM COPYRIGHT & REGIONAL BAR ══════════ */}
      <div className="border-t border-[#ded5c7] bg-[#ede7de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 text-xs text-[#6b5c51] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p>
              © {new Date().getFullYear()} {SITE_NAME}. Artisan Leather Atelier. All rights reserved.
            </p>
            <div className="hidden sm:block text-[#ded5c7]">·</div>
            <SocialChannels variant="compact" />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]">
            <Link href="/blog" className="hover:text-[#221b16] transition-colors font-medium">Journal</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/size-guide" className="hover:text-[#221b16] transition-colors font-medium">Size Guide</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/faq" className="hover:text-[#221b16] transition-colors">FAQ</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/shipping" className="hover:text-[#221b16] transition-colors">Shipping</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/terms" className="hover:text-[#221b16] transition-colors">Terms of Service</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/privacy" className="hover:text-[#221b16] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

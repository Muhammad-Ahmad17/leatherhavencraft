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
    <footer className="border-t border-[#ded5c7] bg-[#faf7f2] text-[#221b16]">
      {/* ── TOP TIER: Atelier Identity & Newsletter / Social ── */}
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Atelier Brand & Contact */}
          <div className="lg:col-span-5 space-y-4">
            <SiteLogo />
            <p className="text-xs leading-relaxed text-[#706456] max-w-sm">
              Artisan leather workshop and bespoke outerwear atelier bench-crafting master archival tributes and made-to-measure commissions with worldwide express delivery.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={buildWhatsAppUrl("Hi Leather Haven Craft — I would like to inquire about a jacket.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center justify-center rounded-md bg-[#25D366] px-3.5 text-[11px] font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-90 shadow-2xs"
              >
                WhatsApp Concierge
              </a>
              <a
                href="mailto:support@leatherhavencraft.com?subject=Jacket%20Inquiry"
                className="inline-flex h-8 items-center justify-center rounded-md border border-[#ded5c7] bg-white px-3.5 text-[11px] font-bold uppercase tracking-wider text-[#221b16] transition-colors hover:border-[#8a4d2b] hover:bg-[#f4efe8] shadow-2xs"
              >
                Email Atelier
              </a>
            </div>
          </div>

          {/* Newsletter & Social Connect Card */}
          <div className="lg:col-span-7 rounded-xl border border-[#ded5c7] bg-[#f4efe8]/70 p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                  Private Atelier Access
                </p>
                <p className="text-xs text-[#706456] mt-0.5">
                  Early alerts on archive jacket releases, private bespoke drops and workshops.
                </p>
              </div>
              <SocialChannels variant="compact" className="shrink-0" />
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ── MIDDLE TIER: Compact Navigation Grid (2-cols on mobile to prevent endless scrolling) ── */}
      <div className="border-t border-[#ded5c7] px-6 py-10">
        <div className="mx-auto max-w-6xl grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 text-xs">
          {/* Col 1: Heritage Silhouettes */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Heritage Silhouettes
            </p>
            <ul className="mt-3.5 space-y-2">
              {stripBrands.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="text-[#706456] transition-colors hover:text-[#221b16] hover:underline underline-offset-4"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Client Services */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Client Services
            </p>
            <ul className="mt-3.5 space-y-2 text-[#706456]">
              <li>
                <Link href="/products" className="transition-colors hover:text-[#221b16]">
                  All Outerwear Catalog
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#221b16] font-medium text-[#8a4d2b]">
                  Journal &amp; Leather Guides
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="transition-colors hover:text-[#221b16] font-medium text-[#8a4d2b]">
                  Size Guide (XS to 6XL)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-[#221b16]">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="transition-colors hover:text-[#221b16]">
                  Shipping &amp; 7–8 Day Returns
                </Link>
              </li>
              <li>
                <Link href="/#custom-manufacturing" className="transition-colors hover:text-[#221b16] font-medium text-[#8a4d2b]">
                  Wholesale &amp; Bulk Dealing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Hours */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Concierge &amp; Delivery
            </p>
            <div className="mt-3.5 space-y-2.5 text-[#706456]">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#8a7b70]">Hours</span>
                <span className="text-[#221b16] font-medium">Mon to Sat · 09:00–20:00 CET</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#8a7b70]">Express Delivery</span>
                <span className="text-[#221b16] font-medium">USA, UK &amp; Europe · 7 to 9 Days</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#8a7b70]">Direct Response</span>
                <span className="text-[#8a4d2b] font-semibold">Under 30 Minutes</span>
              </div>
            </div>
          </div>

          {/* Col 4: Atelier Workshop */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Atelier Workshop
            </p>
            <div className="mt-3.5 space-y-2.5 text-[#706456]">
              <p className="text-xs text-[#706456] leading-relaxed">
                Direct manufacturing workshop and artisan tailoring studio.
              </p>
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

      {/* ── LEGAL & TRADEMARK NOTICE (CONCISE) ── */}
      <div className="border-t border-[#ded5c7] px-6 py-4">
        <div className="mx-auto max-w-6xl text-[11px] leading-relaxed text-[#7a6b5e]">
          <p>
            <strong className="text-[#221b16]">Trademark Notice: </strong>
            {SITE_NAME} is an independent bespoke leathercraft atelier. Archival silhouettes are handcrafted master tributes bench-built with genuine full-grain hides. All third-party trademarks, brand names, and model designations belong strictly to their respective owners and are cited under nominative fair use solely for descriptive historical style identification. {SITE_NAME} is not affiliated with, endorsed by, sponsored by, or an authorized distributor of any referenced brand.
          </p>
        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT & LEGAL LINKS BAR ── */}
      <div className="border-t border-[#ded5c7] bg-[#f4efe8]/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-[11px] text-[#706456] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Artisan Leather Atelier. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
            <Link href="/blog" className="hover:text-[#221b16] transition-colors font-medium">Journal</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/size-guide" className="hover:text-[#221b16] transition-colors font-medium">Size Guide</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/faq" className="hover:text-[#221b16] transition-colors">FAQ</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/shipping" className="hover:text-[#221b16] transition-colors">Shipping &amp; Returns</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/terms" className="hover:text-[#221b16] transition-colors">Terms</Link>
            <span className="text-[#ded5c7]">·</span>
            <Link href="/privacy" className="hover:text-[#221b16] transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

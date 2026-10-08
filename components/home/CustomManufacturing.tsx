import Link from "next/link";
import { buildWhatsAppUrl, CONTACT_EMAIL } from "@/lib/contact";

interface CustomManufacturingProps {
  showSizeGuideLink?: boolean;
}

export function CustomManufacturing({ showSizeGuideLink = true }: CustomManufacturingProps) {
  const whatsappHref = buildWhatsAppUrl(
    "Hi Leather Haven Craft — I am inquiring about wholesale pricing, bulk orders, and custom manufacturing. Please share your volume tiers and catalog."
  );

  const emailBody = [
    "Hello Leather Haven Craft Workshop,",
    "",
    "I would like to inquire about wholesale / bulk dealing and custom outerwear production.",
    "",
    "Inquiry Type: [Wholesale Boutique Order / Motorcycle Club / Private Label / Custom Run]",
    "Estimated Quantity: [e.g. 5 to 15 pieces / 20 to 50 pieces / 100+ wholesale units]",
    "Target Silhouettes: [e.g. Double Rider Perfecto, B-3 Bomber, Cafe Racer, Bespoke Pattern]",
    "Preferred Leather Type & Color: [e.g. Full grain steerhide, shearling, lambskin]",
    "Custom Details: [Custom embossed patches, private label branding, bespoke sizing]",
    "",
    "Looking forward to your volume pricing quotation and production timeline.",
  ].join("\n");

  const emailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Wholesale & Bulk Manufacturing Inquiry — Leather Haven Craft"
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section
      id="custom-manufacturing"
      className="border-t border-[#ded5c7] bg-[#faf7f2] px-6 py-16 sm:py-24"
      aria-labelledby="custom-manufacturing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-[#ded5c7] bg-white p-8 shadow-xs sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            {/* Left Column: Heading, Context & Size Guide Referral */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8a4d2b]/20 bg-[#faf6f0] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                <span>Atelier Bespoke &amp; Wholesale Production</span>
              </div>

              <h2
                id="custom-manufacturing-heading"
                className="font-serif text-3xl font-bold tracking-tight text-[#2a1810] sm:text-4xl lg:text-5xl leading-tight"
              >
                Custom Manufacturing, Wholesale &amp; Bulk Dealing
              </h2>

              <p className="text-xs leading-relaxed text-[#706456] sm:text-sm">
                Beyond our heritage archival drops, Leather Haven Craft operates a dedicated manufacturing atelier for individual made to measure tailoring, club outerwear, private label collections, and wholesale bulk orders. Every jacket is hand-patterned, grain-matched, and constructed by master leather artisans with tiered wholesale rates for boutiques, motorcycle clubs, and apparel brands worldwide.
              </p>

              {/* Referral Pill linking to the Size Guide */}
              {showSizeGuideLink && (
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-3 text-xs text-[#706456]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b]/15 text-[#8a4d2b]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 8h10M7 12h6M7 16h8" />
                    </svg>
                  </span>
                  <span>Need baseline dimensions for your custom or bulk run?</span>
                  <Link
                    href="/size-guide"
                    className="font-bold text-[#8a4d2b] underline decoration-[#8a4d2b]/40 underline-offset-2 hover:decoration-[#8a4d2b] transition-colors"
                  >
                    Explore Universal Size Guide (XS to 6XL) &rarr;
                  </Link>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#eee7de]">
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-[#2a1810]">Single &amp; Bulk Runs</span>
                  <p className="text-[11px] text-[#706456]">
                    From 1 made to measure piece to 100+ wholesale units with tiered volume pricing.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-[#2a1810]">Premium Tannery Hides</span>
                  <p className="text-[11px] text-[#706456]">
                    Full grain cowhide, heavyweight steerhide, lambskin &amp; genuine shearling pelts.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-[#2a1810]">Wholesale &amp; Branding</span>
                  <p className="text-[11px] text-[#706456]">
                    Custom embossed patches, private label tags, heavy brass hardware &amp; silk linings.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact & Action Box */}
            <div className="lg:col-span-5 rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-6 sm:p-8 space-y-6 text-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                  Wholesale &amp; Bespoke Consultations
                </span>
                <h3 className="mt-1 text-xl font-bold text-[#2a1810]">
                  Message or Mail Our Workshop
                </h3>
                <p className="mt-2 text-xs text-[#706456] leading-relaxed">
                  Have a design sketch, measurement chart, or bulk boutique/club inquiry? Contact our artisans directly for wholesale price tiers and fabrication timelines.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#20ba59] shadow-xs cursor-pointer"
                >
                  <span>Message for Wholesale &amp; Bulk (WhatsApp)</span>
                </a>

                <a
                  href={emailHref}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#ded5c7] bg-white px-5 text-xs font-bold uppercase tracking-wider text-[#2a1810] transition-all hover:border-[#8a4d2b] hover:bg-[#faf6f0] shadow-xs cursor-pointer"
                >
                  <span>Email Bulk Specifications</span>
                </a>

                {showSizeGuideLink && (
                  <Link
                    href="/size-guide"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#8a4d2b]/25 bg-[#faf6f0] px-4 text-xs font-bold uppercase tracking-wider text-[#8a4d2b] transition-all hover:bg-[#8a4d2b] hover:text-white shadow-2xs cursor-pointer"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.3 15.3l-4.6-4.6M14.5 12.5l2-2M11.5 15.5l2-2M8.5 18.5l2-2" />
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                    <span>View Universal Size Guide (XS to 6XL)</span>
                  </Link>
                )}
              </div>

              <p className="text-[11px] text-[#8a7b70]">
                Direct reply within 30 minutes during workshop hours (Mon to Sat).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

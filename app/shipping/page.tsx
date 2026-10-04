import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Express Shipping & 14-Day Return Guarantee | Leather Haven Craft",
  description:
    "Express DHL & FedEx air courier delivery timelines, full transit insurance, luxury dust bag packaging, and 14-day hassle-free returns for authentic leather jackets.",
  alternates: { canonical: "/shipping" },
  openGraph: {
    title: "Shipping, Transit & Returns | Leather Haven Craft",
    description: "Insured door-to-door courier transit to the United States, UK, and European Union.",
  },
};

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#221b16] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-[#8a7b70] mb-8">
          <Link href="/" className="hover:text-[#221b16] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#8a4d2b] font-medium">Shipping &amp; Returns</span>
        </nav>

        <header className="border-b border-[#ded5c7] pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Global Logistics &amp; Security
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-5xl text-[#221b16]">
            Shipping &amp; Returns Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#6b5c51] leading-relaxed">
            Express Air Courier · Fully Insured Door-to-Door Delivery · 14-Day Fit Guarantee
          </p>
        </header>

        <div className="mt-10 space-y-10 text-xs sm:text-sm leading-relaxed text-[#52453c]">
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#221b16]">
              1. Priority Air Transit Timelines &amp; Couriers
            </h2>
            <p>
              Every garment in our catalog is dispatched via expedited air freight with DHL Express or FedEx International Priority to ensure the shortest possible transit time, zero warehouse transfers, and strict chain-of-custody handling.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#ded5c7] bg-white p-5 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a4d2b]">
                  United States &amp; Canada
                </span>
                <p className="font-serif text-xl font-bold text-[#221b16] mt-1">3 – 5 Business Days</p>
                <p className="text-xs text-[#6b5c51] mt-1">Full door-to-door online tracking with signature release.</p>
              </div>
              <div className="rounded-xl border border-[#ded5c7] bg-white p-5 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a4d2b]">
                  United Kingdom &amp; European Union
                </span>
                <p className="font-serif text-xl font-bold text-[#221b16] mt-1">3 – 4 Business Days</p>
                <p className="text-xs text-[#6b5c51] mt-1">Direct air express customs clearance included.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#221b16]">
              2. Luxury Protective Packaging
            </h2>
            <p>
              Archival and bespoke leather garments are never tightly folded, vacuum-sealed, or compressed. Each jacket is shipped hanging inside a heavy-duty, breathable cotton dust bag on wide, contoured wooden shoulder hangers to maintain shoulder pad integrity and avoid creasing during flight transit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#221b16]">
              3. 14-Day Exchange &amp; Return Fit Guarantee
            </h2>
            <p>
              We stand unconditionally behind our sizing and authenticity. If your jacket does not fit as desired or your preferences shift:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-[#6b5c51]">
              <li>Contact our concierge desk at <a href="mailto:support@leatherhavencraft.com" className="text-[#8a4d2b] font-bold underline">support@leatherhavencraft.com</a> within 14 calendar days of signed delivery.</li>
              <li>Garments must be in pristine, unworn condition with brand tags, zipper guards, and original dust bags intact.</li>
              <li>We will immediately arrange a priority exchange for an alternate size or issue a prompt refund upon inspection.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

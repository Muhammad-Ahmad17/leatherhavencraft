import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping, Transit & Returns Policy",
  description: "Global express shipping timelines, tracked courier delivery, and 14-day return policy for Leather Haven Craft.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#11100f] text-[#f2eee9] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <nav className="text-xs text-white/50 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#d4af37]">Shipping &amp; Returns</span>
        </nav>

        <header className="border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Global Logistics
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
            Shipping &amp; Returns
          </h1>
          <p className="mt-2 text-xs text-white/50">
            Express Air Courier · Insured Door-to-Door Delivery
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/75 sm:text-base">
          <section>
            <h2 className="text-lg font-medium text-white">1. Transit Timelines &amp; Couriers</h2>
            <p className="mt-2">
              Every garment is dispatched via premium priority air freight (DHL Express or FedEx International Priority) to ensure minimal transit time and secure chain-of-custody handling.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="text-xs uppercase tracking-wider text-[#d4af37]">North America</span>
                <p className="text-lg font-medium text-white mt-1">3 – 5 Business Days</p>
                <p className="text-xs text-white/60 mt-1">Full door-to-door tracking included.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="text-xs uppercase tracking-wider text-[#d4af37]">United Kingdom &amp; EU</span>
                <p className="text-lg font-medium text-white mt-1">3 – 4 Business Days</p>
                <p className="text-xs text-white/60 mt-1">Direct air express clearance.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">2. Luxury Packaging &amp; Protection</h2>
            <p className="mt-2">
              Jackets are never folded tightly or compressed. Each piece is packed in a heavy-duty, breathable garment dust bag with wide wooden contoured hangers to preserve shoulder structure during transport.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">3. 14-Day Return &amp; Exchange Policy</h2>
            <p className="mt-2">
              We stand behind the craft and authenticity of our collection. If your jacket does not fit as expected:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1.5 text-white/70">
              <li>Notify our desk at <a href="mailto:support@leatherhavencraft.com" className="text-[#d4af37] underline">support@leatherhavencraft.com</a> within 14 days of delivery.</li>
              <li>Garments must be unworn, undamaged, with brand tags and hardware guards attached.</li>
              <li>We will arrange a swift exchange for an alternate size or issue a refund upon inspection.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

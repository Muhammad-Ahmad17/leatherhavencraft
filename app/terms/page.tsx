import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing orders, bespoke craftsmanship, and client services at Leather Haven Craft.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#221b16] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <nav className="text-xs text-[#8a7b70] mb-8">
          <Link href="/" className="hover:text-[#221b16]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#d4af37]">Terms of Service</span>
        </nav>

        <header className="border-b border-[#ded5c7] pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Legal Agreement
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-[#8a7b70]">
            Last Updated: October 2026 · {SITE_NAME}
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#52453c] sm:text-base">
          <section>
            <h2 className="text-lg font-medium text-[#221b16]">1. Agreement to Terms</h2>
            <p className="mt-2">
              By accessing or purchasing from {SITE_NAME} (leatherhavencraft.com), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please contact our support desk prior to placing an order.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">2. Independent Atelier &amp; Nominative Fair Use Trademark Notice</h2>
            <p className="mt-2">
              Leather Haven Craft operates exclusively as an independent bespoke leather workshop, custom tailoring atelier, and archival outerwear restoration house. All garments listed on this website referencing heritage silhouettes or vintage styles (including archival cuts inspired by Avirex, Pelle Pelle, Harley-Davidson, Schott NYC, Vanson, or Supreme) are independently bench-crafted artisan tributes, custom recreations, and made-to-measure interpretations created from genuine full-grain hides.
            </p>
            <p className="mt-2">
              <strong>Non-Affiliation Disclaimer:</strong> Leather Haven Craft is not an authorized distributor, official partner, affiliated entity, licensee, or sponsored partner of any referenced third-party brand or trademark holder. All third-party registered trademarks, service marks, trade names, model designations, and brand logos mentioned on this website belong strictly and exclusively to their respective owners. Any reference to these brand names is made solely under the doctrine of <em>Nominative Fair Use</em> to truthfully and accurately describe historical silhouette origin, vintage aesthetic styling, and archival cultural inspiration to collectors.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">3. Pricing &amp; Orders</h2>
            <p className="mt-2">
              All prices are listed in United States Dollars (USD). We reserve the right to correct pricing typographical errors prior to shipping confirmation. Inquiries through WhatsApp or email become binding orders once the customized payment invoice is settled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">4. Bespoke &amp; Custom Tailoring</h2>
            <p className="mt-2">
              For made-to-measure or personalized jackets, customers must provide accurate measurements. Once leather cutting commences, custom commissions cannot be refunded or cancelled, but our fit warranty guarantees adjustments if garment dimensions deviate from approved specifications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">5. Limitation of Liability</h2>
            <p className="mt-2">
              {SITE_NAME} shall not be liable for indirect, incidental, or consequential damages resulting from the use or inability to use our website or products. Full liability is capped at the total amount paid for the specific transaction in question.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">6. Inquiries &amp; Governance</h2>
            <p className="mt-2">
              For any legal notices or contractual inquiries, please reach out to our client care team at{" "}
              <a href="mailto:support@leatherhavencraft.com" className="text-[#d4af37] underline">
                support@leatherhavencraft.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

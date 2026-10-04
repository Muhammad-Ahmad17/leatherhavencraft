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
    <main className="min-h-screen bg-[#11100f] text-[#f2eee9] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <nav className="text-xs text-white/50 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#d4af37]">Terms of Service</span>
        </nav>

        <header className="border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Legal Agreement
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-white/50">
            Last Updated: October 2026 · {SITE_NAME}
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/75 sm:text-base">
          <section>
            <h2 className="text-lg font-medium text-white">1. Agreement to Terms</h2>
            <p className="mt-2">
              By accessing or purchasing from {SITE_NAME} (leatherhavencraft.com), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please contact our support desk prior to placing an order.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">2. Authenticity &amp; Sourcing</h2>
            <p className="mt-2">
              We operate as an independent luxury stockist and bespoke leather workshop. Heritage label items (including Schott NYC, Avirex, Pelle Pelle, Supreme, and Harley-Davidson) are 100% verified authentic, featuring original manufacturer hardware, leathers, and branding. Leather Haven Craft signature pieces are crafted in-house.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">3. Pricing &amp; Orders</h2>
            <p className="mt-2">
              All prices are listed in United States Dollars (USD). We reserve the right to correct pricing typographical errors prior to shipping confirmation. Inquiries through WhatsApp or email become binding orders once the customized payment invoice is settled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">4. Bespoke &amp; Custom Tailoring</h2>
            <p className="mt-2">
              For made-to-measure or personalized jackets, customers must provide accurate measurements. Once leather cutting commences, custom commissions cannot be refunded or cancelled, but our fit warranty guarantees adjustments if garment dimensions deviate from approved specifications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">5. Limitation of Liability</h2>
            <p className="mt-2">
              {SITE_NAME} shall not be liable for indirect, incidental, or consequential damages resulting from the use or inability to use our website or products. Full liability is capped at the total amount paid for the specific transaction in question.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">6. Inquiries &amp; Governance</h2>
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

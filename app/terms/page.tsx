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
            <h2 className="text-lg font-medium text-[#221b16]">2. Independent Atelier &amp; Trademark Notice</h2>
            <p className="mt-2">
              We operate as an independent artisan leather workshop and custom outerwear atelier. All garments inspired by archival cuts and heritage silhouettes (including designs referencing Schott NYC, Avirex, Pelle Pelle, and Harley-Davidson styles) are master handcrafted tributes bench-built using heavyweight full-grain hides, period-accurate brass hardware, and custom anatomical tailoring. Leather Haven Craft is an independent atelier and does not claim official affiliation, sponsorship, or licensing from these respective trademark holders; all brand names and model designations are utilized strictly for descriptive style and silhouette identification.
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

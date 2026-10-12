import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Refund & Return Policy",
  description: "Clear guidelines on returns, exchanges, fit guarantee, and order cancellations at Leather Haven Craft.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#221b16] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <nav className="text-xs text-[#8a7b70] mb-8">
          <Link href="/" className="hover:text-[#221b16]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#8a4d2b]">Refund Policy</span>
        </nav>

        <header className="border-b border-[#ded5c7] pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Client Protection &amp; Guarantees
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
            Refund &amp; Return Policy
          </h1>
          <p className="mt-2 text-xs text-[#8a7b70]">
            Last Updated: October 2026 · {SITE_NAME}
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#52453c] sm:text-base">
          <section>
            <h2 className="text-lg font-medium text-[#221b16]">1. 30-Day Return &amp; Exchange Window</h2>
            <p className="mt-2">
              We stand behind the bench-crafted quality of every leather garment. If you are not completely satisfied with your standard catalog order, you may request a return or size exchange within <strong>30 days of delivery receipt</strong>.
            </p>
            <p className="mt-2">
              To be eligible for a return, your piece must be in its original unworn condition, free from perfume, smoke, or creased elbow breaks, and packaged with all original protective covers and tags.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">2. Bespoke Made-to-Measure Fit Guarantee</h2>
            <p className="mt-2">
              For personalized made-to-measure jackets tailored to custom client measurements, our master pattern-makers build each jacket to within 0.5 inches of your approved specifications.
            </p>
            <p className="mt-2">
              If an artisanal piece arrives deviating from your confirmed measurements, {SITE_NAME} will adjust, alter, or rebuild the piece at zero additional cost to you, or provide a full replacement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">3. Damaged or Defective Items</h2>
            <p className="mt-2">
              Every shipment is fully insured against courier loss and damage. If your package arrives damaged or exhibits hardware or seam defects, please notify us within 48 hours at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#8a4d2b] underline">
                {CONTACT_EMAIL}
              </a>{" "}
              with photographs. We will issue an immediate replacement or full refund upon inspection.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">4. Refund Processing Time</h2>
            <p className="mt-2">
              Once your returned item is received and inspected at our workshop, your refund will be credited back to your original payment method (Credit Card, Debit Card, or Bank Transfer) within <strong>5 to 7 business days</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">5. Contact Our Concierge</h2>
            <p className="mt-2">
              To initiate a return or exchange, reach out to our client care desk at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#8a4d2b] underline">
                {CONTACT_EMAIL}
              </a>. Our artisans will provide an immediate return authorization number and courier instructions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

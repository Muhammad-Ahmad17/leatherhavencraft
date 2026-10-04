import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Leather Haven Craft collects, uses, and protects client data in compliance with GDPR and global privacy standards.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#221b16] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <nav className="text-xs text-[#8a7b70] mb-8">
          <Link href="/" className="hover:text-[#221b16]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#d4af37]">Privacy Policy</span>
        </nav>

        <header className="border-b border-[#ded5c7] pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Data Protection
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[#8a7b70]">
            Last Updated: October 2026 · {SITE_NAME}
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#52453c] sm:text-base">
          <section>
            <h2 className="text-lg font-medium text-[#221b16]">1. Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide directly to us when contacting our concierge desk, ordering a jacket, or subscribing to our editorial newsletter. This may include your name, email address, physical delivery address, phone number, and garment measurement specifications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">2. How We Use Information</h2>
            <p className="mt-2">
              Your data is exclusively used to:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-[#6b5c51]">
              <li>Process and fulfill orders and express international shipping.</li>
              <li>Provide personalized sizing and bespoke fit guidance.</li>
              <li>Deliver tracking updates and aftercare advice for leather garments.</li>
              <li>Protect against fraudulent transactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">3. Third-Party Infrastructure</h2>
            <p className="mt-2">
              We do not sell, rent, or trade your personal information. Data is shared strictly with essential logistical partners required for fulfillment (such as DHL, FedEx, Cloudflare, and secure payment processors).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#221b16]">4. Your Rights (GDPR &amp; CCPA)</h2>
            <p className="mt-2">
              Regardless of your geographical location, you have the right to request access to the personal data we hold about you, request corrections, or ask for complete deletion of your records. Contact{" "}
              <a href="mailto:support@leatherhavencraft.com" className="text-[#d4af37] underline">
                support@leatherhavencraft.com
              </a>{" "}
              for immediate data requests.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

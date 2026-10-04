import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Care Guide",
  description:
    "Everything you need to know regarding authentic Schott NYC, Avirex, Pelle Pelle outerwear, leather care, sizing guidance, and global delivery.",
  alternates: { canonical: "/faq" },
};

const faqSchemaData = [
  {
    q: "Are all jackets authentic Schott NYC, Avirex, Pelle Pelle, and Harley-Davidson?",
    a: "Yes, 100% authentic. Every piece sourced from heritage houses is verified for authentic hardware (RiRi, Talon, or YKK zippers), heavyweight hides, and official brand tags. For our in-house line, pieces are handcrafted by our master artisans using full-grain Horween leathers.",
  },
  {
    q: "What leather types and hides do you stock?",
    a: "We specialize in full-grain cowhide, steerhide, lambskin, and sheepskin shearling. Full-grain leather is the highest tier of hide, retaining the complete grain layer for lifetime durability and natural patina development.",
  },
  {
    q: "How should a genuine leather jacket fit?",
    a: "A new leather jacket should feel snug across the chest and shoulders without constricting circulation. High-grade cowhide and steerhide break in after 20 to 30 hours of wear, stretching up to half a size to mold precisely to your body contours. Please refer to our Universal Size Guide (XS–6XL) for exact flat garment measurements across pit-to-pit chest, waist, length, shoulder, and sleeve.",
  },
  {
    q: "How do I care for and clean my leather outerwear?",
    a: "Store your jacket on a wide-shoulder wooden hanger away from direct sunlight and heat radiators. Condition with a natural beeswax or mink oil balm once every 12 to 18 months. Never machine-wash leather; for heavy spots, consult a specialist leather dry cleaner.",
  },
  {
    q: "What is your return and exchange policy?",
    a: "We offer a 14-day return and exchange policy on all standard catalog pieces. Items must be unworn, in pristine condition, with all original tags attached. Custom bespoke pieces tailored to individual measurements are final sale.",
  },
  {
    q: "How long does shipping take to the United States and Europe?",
    a: "Express transit via DHL Express or FedEx Priority takes 3 to 5 business days with full door-to-door tracking. Orders are carefully packaged in custom luxury garment covers.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaData.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#221b16] px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#8a7b70] mb-8">
          <Link href="/" className="hover:text-[#221b16]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#d4af37]">FAQ &amp; Guidance</span>
        </nav>

        <header className="border-b border-[#ded5c7] pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Client Advisory
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm text-[#6b5c51] max-w-2xl">
            Detailed information on leather provenance, brand authenticity, size selection, and express shipping.
          </p>
        </header>

        <div className="mt-12 space-y-10">
          {faqSchemaData.map((item, idx) => (
            <div key={idx} className="border-b border-[#ded5c7] pb-8">
              <h2 className="text-lg font-medium text-[#221b16] sm:text-xl">
                {item.q}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#52453c] sm:text-base">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-[#ded5c7] bg-[#f2ede6] p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-medium text-[#221b16]">Still have a question?</h3>
            <p className="mt-1 text-xs text-[#6b5c51]">
              Our specialists respond within 30 minutes during business hours.
            </p>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-wrap gap-2.5 justify-center">
            <Link
              href="/size-guide"
              className="inline-flex h-10 items-center justify-center rounded bg-[#8a4d2b] px-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black shadow-xs"
            >
              Universal Size Guide
            </Link>
            <a
              href="mailto:support@leatherhavencraft.com"
              className="inline-flex h-10 items-center justify-center rounded bg-[#d4af37] px-5 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-white"
            >
              Email Support
            </a>
            <Link
              href="/shipping"
              className="inline-flex h-10 items-center justify-center rounded border border-[#ded5c7] px-5 text-xs font-semibold uppercase tracking-wider text-[#221b16] transition-colors hover:bg-[#ece6dc]"
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

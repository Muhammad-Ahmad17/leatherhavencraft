import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Leather Care Guide | Leather Haven Craft",
  description:
    "Client advisory on master leathercraft, archival heritage silhouettes, genuine hide care, conditioning balms, sizing guidance, and global express delivery.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ & Leather Care Guide | Leather Haven Craft",
    description: "Guidance on leather provenance, brand authenticity, size selection, and garment maintenance.",
  },
};

const faqSchemaData = [
  {
    q: "How are your jackets constructed and sourced?",
    a: "Our jackets are master artisan recreations and custom made-to-measure pieces handcrafted in our Sialkot workshop. Each piece is individually bench-crafted using heavy 1.3–1.5mm full-grain steerhide, genuine merino shearling pelts, or supple lambskin with heavy-gauge brass hardware (Talon, Ideal, YKK) mirroring the exact drape, cut, and weight of iconic archival silhouettes.",
  },
  {
    q: "What leather types and hide grades do you stock?",
    a: "We specialize in full-grain cowhide, steerhide, lambskin, and sheepskin shearling. Full-grain leather is the highest tier of hide, retaining the complete grain layer for lifetime durability and natural patina development.",
  },
  {
    q: "How should a genuine leather jacket fit?",
    a: "A new leather jacket should feel snug across the chest and shoulders without constricting circulation. High-grade cowhide and steerhide break in after 20 to 30 hours of wear, stretching up to half a size to mold precisely to your body contours. Please refer to our Universal Size Guide (XS–6XL) for exact flat garment measurements across pit-to-pit chest, waist, length, shoulder, and sleeve.",
  },
  {
    q: "How do I care for, condition, and clean my leather outerwear?",
    a: "Store your jacket on a wide-shoulder wooden hanger away from direct sunlight and heat radiators. Condition with a natural beeswax, lanolin, or pure neatsfoot oil balm once every 12 to 18 months. Never machine-wash leather; for heavy spots, consult a specialist leather dry cleaner.",
  },
  {
    q: "What is your return and exchange policy?",
    a: "We offer a 14-day return and exchange policy on all standard catalog pieces. Items must be unworn, in pristine condition, with all original tags attached. Custom bespoke pieces tailored to individual measurements are final sale.",
  },
  {
    q: "How long does shipping take to the United States, UK, and Europe?",
    a: "Express transit via DHL Express or FedEx Priority takes 3 to 5 business days with full door-to-door tracking. Orders are carefully packaged in custom luxury garment covers with wide wooden hangers.",
  },
  {
    q: "Do you offer custom made-to-measure sizing for extended sizes?",
    a: "Yes. Our atelier creates custom made-to-measure commissions and offers an inclusive Universal Size Matrix spanning XS through 6XL. Standard sizing spans XS to 2XL, while 3XL through 6XL are crafted with dedicated extra hide panels for a modest +$20 surcharge.",
  },
];

const CARE_STEPS = [
  {
    step: "01",
    title: "Storage & Contoured Hangers",
    text: "Never hang a heavyweight leather jacket on thin wire hangers, which dimple and deform shoulder padding. Use a wide, contoured wooden hanger inside a breathable garment dust bag in a cool, ventilated closet.",
  },
  {
    step: "02",
    title: "Annual Conditioning & Balms",
    text: "Leather breathes and loses natural oils over time. Apply a light coat of natural beeswax, lanolin, or carnauba leather balm once every 12 to 18 months using a soft microfiber cloth to replenish moisture and prevent micro-cracking.",
  },
  {
    step: "03",
    title: "Moisture & Rain Protection",
    text: "If caught in rain, gently wipe away excess droplets with a dry cotton towel and allow the jacket to dry naturally at room temperature. Never place genuine leather near radiators, hair dryers, or direct heat sources, which desiccate hide fibers.",
  },
  {
    step: "04",
    title: "Patina & Natural Creasing",
    text: "Embrace the journey: full-grain leather develops an individual patina unique to your body. Natural creases around the elbows, honey-colored edge highlights, and subtle grain shifts reflect genuine hide character.",
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
        <nav aria-label="Breadcrumb" className="text-xs text-[#8a7b70] mb-8">
          <Link href="/" className="hover:text-[#221b16] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#8a4d2b] font-medium">FAQ &amp; Guidance</span>
        </nav>

        <header className="border-b border-[#ded5c7] pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Client Advisory &amp; Care
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-5xl text-[#221b16]">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm text-[#6b5c51] max-w-2xl leading-relaxed">
            Detailed information on leather provenance, brand authenticity, size selection, and express shipping.
          </p>
        </header>

        {/* ── FAQ Accordion / List ── */}
        <div className="mt-12 space-y-10">
          {faqSchemaData.map((item, idx) => (
            <div key={idx} className="border-b border-[#ded5c7] pb-8">
              <h2 className="font-serif text-lg font-bold text-[#221b16] sm:text-xl">
                {item.q}
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#52453c] sm:text-sm sm:leading-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── Leather Care Masterclass ── */}
        <section aria-labelledby="leather-care-heading" className="mt-16 rounded-2xl border border-[#ded5c7] bg-white p-8 sm:p-10 shadow-xs">
          <div className="border-b border-[#ded5c7] pb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Atelier Preservation
            </span>
            <h2 id="leather-care-heading" className="mt-1 font-serif text-2xl font-bold text-[#221b16] sm:text-3xl">
              The Master Guide to Leather Longevity
            </h2>
            <p className="mt-2 text-xs text-[#706456]">
              Four fundamental principles practiced by our leatherworkers to ensure your jacket endures for half a century:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CARE_STEPS.map((step) => (
              <div key={step.step} className="rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-5 space-y-2">
                <span className="font-mono text-sm font-bold text-[#8a4d2b]">
                  {step.step}
                </span>
                <h3 className="font-serif text-base font-bold text-[#221b16]">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#5a4c41]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact Concierge Box ── */}
        <div className="mt-16 rounded-xl border border-[#ded5c7] bg-[#f2ede6] p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#221b16]">Still have a question?</h3>
            <p className="mt-1 text-xs text-[#6b5c51]">
              Our specialists respond within 30 minutes during business hours.
            </p>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-wrap gap-2.5 justify-center">
            <Link
              href="/size-guide"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#8a4d2b] px-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black shadow-xs cursor-pointer"
            >
              Universal Size Guide
            </Link>
            <a
              href="mailto:support@leatherhavencraft.com"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#ded5c7] bg-white px-5 text-xs font-semibold uppercase tracking-wider text-[#221b16] transition-colors hover:bg-[#faf6f0] shadow-xs cursor-pointer"
            >
              Email Support
            </a>
            <Link
              href="/shipping"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#ded5c7] bg-white px-5 text-xs font-semibold uppercase tracking-wider text-[#221b16] transition-colors hover:bg-[#faf6f0] shadow-xs cursor-pointer"
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

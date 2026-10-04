import type { Metadata } from "next";
import Link from "next/link";
import { fetchLiveProducts } from "@/data/products";
import { ProductCatalog } from "@/components/product/ProductCatalog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Leather Outerwear & Archive Jackets | Leather Haven Craft",
  description:
    "Explore our complete collection of authentic leather jackets across Schott NYC, Avirex, Pelle Pelle, Harley-Davidson, and bespoke atelier creations. Men's sizes XS to 6XL.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "All Leather Outerwear & Archive Jackets | Leather Haven Craft",
    description:
      "Curated authentic heritage leather jackets from iconic global makers. Worldwide express shipping.",
  },
};

export default async function ProductsPage() {
  const products = await fetchLiveProducts();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Leather Outerwear & Archive Jackets",
    description:
      "Complete collection of authentic heritage leather jackets across Schott NYC, Avirex, Pelle Pelle, Harley-Davidson, and bespoke atelier creations.",
    url: "https://www.leatherhavencraft.com/products",
  };

  return (
    <main className="pt-12 bg-[var(--bg)] text-[var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="mx-auto max-w-6xl px-6 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a4d2b]">
            Archival Stockist &amp; Atelier
          </span>
          <span className="rounded bg-[#8a4d2b]/10 px-2 py-0.5 text-[10px] font-semibold text-[#8a4d2b]">
            XS – 6XL Universal Sizing
          </span>
        </div>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Heritage Jackets &amp; Collections
        </h1>
        <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
          Every piece in our collection is bench-inspected for authentic hardware, heavyweight hide density, and structural integrity. Filter by size, colorway, or house below.
        </p>
      </div>

      <ProductCatalog products={products} />

      {/* ── Catalog Editorial Footer Guide ── */}
      <section className="border-t border-[#ded5c7] bg-[#fbf9f6] px-6 py-16 text-[#221b16]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-[#ded5c7] bg-white p-6 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Authenticity
              </span>
              <h3 className="mt-2 font-serif text-base font-bold text-[#221b16]">
                Verified Heritage Hardware
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6b5c51]">
                Every Schott NYC, Avirex, and Pelle Pelle piece is authenticated through heavy-gauge brass Talon, RiRi, and YKK zipper markings, authentic hide thickness, and provenance labels.
              </p>
            </div>

            <div className="rounded-xl border border-[#ded5c7] bg-white p-6 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Universal Fit
              </span>
              <h3 className="mt-2 font-serif text-base font-bold text-[#221b16]">
                Exact Flat Sizing (XS–6XL)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6b5c51]">
                Compare flat pit-to-pit chest, waist, back length, and sleeve measurements against your wardrobe using our{" "}
                <Link href="/size-guide" className="text-[#8a4d2b] font-bold underline hover:text-black">
                  Universal Size Guide
                </Link>.
              </p>
            </div>

            <div className="rounded-xl border border-[#ded5c7] bg-white p-6 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Bespoke Atelier
              </span>
              <h3 className="mt-2 font-serif text-base font-bold text-[#221b16]">
                Custom Made to Measure
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6b5c51]">
                Require personalized torso, sleeve, or shoulder grading? Our master pattern-makers construct custom commissions from Horween and Italian hides.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

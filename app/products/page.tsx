import type { Metadata } from "next";
import Link from "next/link";
import { fetchPaginatedProducts, getBrandLabel } from "@/data/products";
import { ProductCatalog } from "@/components/product/ProductCatalog";

export const dynamic = "force-dynamic";

type ProductsPageProps = {
  searchParams: Promise<{
    page?: string;
    brand?: string;
    sort?: string;
    search?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: ProductsPageProps): Promise<Metadata> {
  const sp = await searchParams;
  const pageNum = Number(sp.page) || 1;
  const brandName = sp.brand ? getBrandLabel(sp.brand) : "";

  const titlePrefix = brandName
    ? `${brandName} Leather Outerwear`
    : "All Leather Outerwear & Archive Jackets";

  const queryTerm = sp.search ? `"${sp.search}"` : "";
  const fullTitle = queryTerm
    ? `Search: ${queryTerm}${pageNum > 1 ? ` — Page ${pageNum}` : ""} | Leather Haven Craft`
    : pageNum > 1
    ? `${titlePrefix} — Page ${pageNum} | Leather Haven Craft`
    : `${titlePrefix} | Leather Haven Craft`;

  const canonicalUrl =
    pageNum > 1 ? `/products?page=${pageNum}` : "/products";

  return {
    title: fullTitle,
    description:
      "Explore our complete collection of handcrafted leather outerwear, master archival tributes to Schott NYC, Avirex, Pelle Pelle, and bespoke atelier creations. Men's sizes XS to 6XL.",
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: fullTitle,
      description:
        "Handcrafted heritage leather jackets and bespoke made to measure outerwear. Worldwide express shipping.",
    },
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const sp = await searchParams;
  const page = Number(sp.page) || 1;
  const brand = sp.brand || "all";
  const search = sp.search || undefined;
  const rawSort = sp.sort || "featured";
  const validSort: "featured" | "price-asc" | "price-desc" = rawSort === "price-asc" || rawSort === "price-desc" ? rawSort : "featured";

  // Initial SSR fetch of Page 1 (or requested page) for instant First Contentful Paint & 100% SEO indexability
  const { products, pagination } = await fetchPaginatedProducts({
    page,
    limit: 16,
    brand: brand !== "all" ? brand : undefined,
    sort: validSort !== "featured" ? validSort : undefined,
    search,
  });

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Leather Outerwear & Archive Jackets",
    description:
      "Complete collection of handcrafted leather outerwear, master archival tributes, and bespoke atelier creations.",
    url: "https://www.leatherhavencraft.com/products",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: pagination.total,
      itemListElement: products.map((p, idx) => ({
        "@type": "ListItem",
        position: (page - 1) * 16 + idx + 1,
        url: `https://www.leatherhavencraft.com/products/${p.slug}`,
        name: p.name,
        image: p.image,
      })),
    },
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
            Heritage Atelier &amp; Workshop
          </span>
          <span className="rounded bg-[#8a4d2b]/10 px-2 py-0.5 text-[10px] font-semibold text-[#8a4d2b]">
            XS to 6XL Universal Sizing
          </span>
        </div>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Heritage Jackets &amp; Collections
        </h1>
        <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
          Every piece in our collection is bench-inspected for authentic hardware, heavyweight hide density, and structural integrity. Filter by silhouette or heritage house below.
        </p>
      </div>

      <ProductCatalog
        initialProducts={products}
        initialPagination={pagination}
        initialBrand={brand}
        initialSort={validSort}
        initialSearch={search}
      />

      {/* ── Catalog Editorial Footer Guide ── */}
      <section className="border-t border-[#ded5c7] bg-[#fbf9f6] px-6 py-16 text-[#221b16]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-[#ded5c7] bg-white p-6 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Authenticity
              </span>
              <h3 className="mt-2 font-serif text-base font-bold text-[#221b16]">
                Artisan Hardware &amp; Heavy Hides
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6b5c51]">
                Every silhouette inspired by Schott NYC, Avirex, and Pelle Pelle is handcrafted with heavy gauge brass Talon and YKK zipper hardware, 1.3 to 1.5mm full grain hides, and reinforced stress seams.
              </p>
            </div>

            <div className="rounded-xl border border-[#ded5c7] bg-white p-6 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Universal Fit
              </span>
              <h3 className="mt-2 font-serif text-base font-bold text-[#221b16]">
                Exact Flat Sizing (XS to 6XL)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6b5c51]">
                Compare flat pit-to-pit chest, waist, back length, and sleeve measurements against your wardrobe using our{" "}
                <Link href="/size-guide" className="text-[#8a4d2b] font-bold underline hover:text-[#2a1810]">
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

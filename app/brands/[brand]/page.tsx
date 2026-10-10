import { CustomManufacturing } from "@/components/home/CustomManufacturing";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrand } from "@/data/brands";
import { fetchPaginatedProducts } from "@/data/products";
import { ProductCatalog } from "@/components/product/ProductCatalog";

export const dynamic = "force-dynamic";

type BrandPageProps = {
  params: Promise<{ brand: string }>;
};

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.slug }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return { title: "Not found" };

  return {
    title: `${brand.name} Leather Jackets & Outerwear Archive | Leather Haven Craft`,
    description: `Explore master handcrafted tributes and archival silhouettes inspired by ${brand.name}: ${brand.tagline} Heavy full-grain hides, period-accurate brass hardware, and made to measure tailoring. Express shipping to US, UK, and Europe.`,
    alternates: { canonical: `/brands/${brand.slug}` },
    openGraph: {
      title: `${brand.name} Leather Jackets | Leather Haven Craft`,
      description: brand.tagline,
    },
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const { products: items, pagination } = await fetchPaginatedProducts({
    page: 1,
    limit: 16,
    brand: brand.slug,
  });
  const others = brands.filter((entry) => entry.slug !== brand.slug);

  const brandSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": `https://www.leatherhavencraft.com/brands/${brand.slug}#brand`,
        name: brand.name,
        description: brand.tagline,
        logo: `https://www.leatherhavencraft.com${brand.logo}`,
      },
      {
        "@type": "CollectionPage",
        "@id": `https://www.leatherhavencraft.com/brands/${brand.slug}#collection`,
        name: `${brand.name} Leather Jackets & Outerwear Archive`,
        url: `https://www.leatherhavencraft.com/brands/${brand.slug}`,
        description: `Curated collection of authentic ${brand.name} outerwear.`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.leatherhavencraft.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Collections & Brands",
            item: "https://www.leatherhavencraft.com/products",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: brand.name,
            item: `https://www.leatherhavencraft.com/brands/${brand.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="pt-8 sm:pt-12 bg-[var(--bg)] text-[var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />

      {/* ── Breadcrumb Navigation ── */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 mb-5">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-[#706456]">
          <li>
            <Link href="/" className="hover:text-[#2a1810] transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="hover:text-[#2a1810] transition-colors">
              Collections
            </Link>
          </li>
          <li>/</li>
          <li className="font-semibold text-[#2a1810]">{brand.name}</li>
        </ol>
      </nav>

      {/* ── Brand Header (Clean atelier layout without banner) ── */}
      <div className="mx-auto max-w-6xl px-6 pb-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between border-b border-[#ded5c7] pb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a4d2b]">
                Archival Tributes &amp; Silhouettes
              </span>
              <span className="rounded-full bg-[#8a4d2b]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#8a4d2b] border border-[#8a4d2b]/20">
                {pagination.total} {pagination.total === 1 ? "piece" : "pieces"}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4">
              {brand.logo ? (
                <span className="inline-flex h-12 items-center rounded-md border border-[#ded5c7] bg-white px-3 shadow-2xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={brand.logo} alt="" className="h-7 w-auto max-w-[120px] object-contain" />
                </span>
              ) : null}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a1810]">
                {brand.name}
              </h1>
            </div>

            <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#706456]">
              {brand.tagline} Handcrafted from heavyweight 1.3 to 1.5mm full-grain hides, authentic period hardware, and bespoke sizing from XS to 6XL.
            </p>
          </div>
        </div>
      </div>

      {brand.slug !== "leather-haven-craft" && (
        <div className="mx-auto max-w-6xl px-6 pt-2 pb-4">
          <div className="rounded-lg border border-[#ded5c7] bg-[#fbf9f6] p-3.5 text-xs text-[#706456] leading-relaxed">
            <span className="font-semibold text-[#221b16]">Atelier Notice: </span>
            Pieces in this section are master handcrafted tributes and custom made to measure archival recreations inspired by historic {brand.name} silhouettes. All trademarks belong to their respective owners under nominative fair use.
          </div>
        </div>
      )}

      <ProductCatalog
        initialProducts={items}
        initialPagination={pagination}
        initialBrand={brand.slug}
      />

      {brand.slug === "leather-haven-craft" && (
        <CustomManufacturing />
      )}

      <section className="border-t border-[var(--line)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Other brands &amp; collections</h2>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {others.map((entry) => (
              <li key={entry.slug}>
                <Link href={`/brands/${entry.slug}`} className="text-lg font-semibold tracking-tight hover:underline">
                  {entry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

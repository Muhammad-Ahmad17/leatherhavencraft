import { CustomManufacturing } from "@/components/home/CustomManufacturing";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrand } from "@/data/brands";
import { fetchPaginatedProducts } from "@/data/products";
import { Banner } from "@/components/common/Banner";
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
    description: `Explore master handcrafted tributes and archival silhouettes inspired by ${brand.name}: ${brand.tagline} Heavy full-grain hides, period-accurate brass hardware, and made-to-measure tailoring. Express shipping to US, UK, and Europe.`,
    alternates: { canonical: `/brands/${brand.slug}` },
    openGraph: {
      title: `${brand.name} Leather Jackets | Leather Haven Craft`,
      description: brand.tagline,
      images: [{ url: brand.heroDesktop }],
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
            name: "Houses & Brands",
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <section
        className="relative flex min-h-[520px] items-end overflow-hidden px-6 pt-10 pb-10 text-white md:min-h-[45vh] md:pb-12"
        style={{ background: brand.accent }}
      >
        <Banner desktop={brand.heroDesktop} mobile={brand.heroMobile} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-5 inline-flex h-14 items-center bg-white px-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={brand.logo} alt="" className="h-8 w-auto max-w-[140px] object-contain" />
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">Archival Tributes &amp; Silhouettes</p>
            <h1 className="mt-1 text-4xl font-medium tracking-tight sm:text-5xl">{brand.name}</h1>
            <p className="mt-3 max-w-lg text-base leading-7 text-white/80">{brand.tagline}</p>
          </div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/75">
            {pagination.total} {pagination.total === 1 ? "piece" : "pieces"}
          </p>
        </div>
      </section>

      {brand.slug !== "leather-haven-craft" && (
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <div className="rounded-lg border border-[#ded5c7] bg-[#faf7f2] p-3 text-xs text-[#706456] leading-relaxed">
            <span className="font-semibold text-[#221b16]">Atelier Notice: </span>
            Pieces in this section are master handcrafted tributes and custom made-to-measure archival recreations inspired by historic {brand.name} silhouettes. All trademarks belong to their respective owners under nominative fair use.
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

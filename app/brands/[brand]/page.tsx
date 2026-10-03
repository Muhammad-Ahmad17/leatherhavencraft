import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrand } from "@/data/brands";
import { fetchLiveProductsByBrand } from "@/data/products";
import { Banner } from "@/components/common/Banner";
import { BrandBestSellers } from "@/components/brand/BrandBestSellers";
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
    title: brand.name,
    description: brand.tagline,
    alternates: { canonical: `/brands/${brand.slug}` },
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const items = await fetchLiveProductsByBrand(brand.slug);
  const others = brands.filter((entry) => entry.slug !== brand.slug);

  return (
    <main>
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
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">{brand.name}</h1>
            <p className="mt-3 max-w-lg text-base leading-7 text-white/80">{brand.tagline}</p>
          </div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/75">
            {items.length} {items.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
      </section>

      <BrandBestSellers products={items} />
      <ProductCatalog products={items} />

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

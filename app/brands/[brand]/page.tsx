import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrand } from "@/data/brands";
import { getProductsByBrand } from "@/data/products";
import { BrandBestSellers } from "@/components/brand/BrandBestSellers";
import { ProductCatalog } from "@/components/product/ProductCatalog";

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

  const items = getProductsByBrand(brand.slug);
  const others = brands.filter((entry) => entry.slug !== brand.slug);

  return (
    <main>
      <section
        className="flex min-h-[45vh] items-end px-6 pt-32 pb-12 text-white"
        style={{ background: brand.accent }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-6 inline-flex h-16 items-center rounded-xl bg-white px-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={brand.logo} alt="" className="h-10 w-auto max-w-[160px] object-contain" />
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{brand.name}</h1>
            <p className="mt-3 max-w-lg text-base leading-7 text-white/75">{brand.tagline}</p>
          </div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/70">
            {items.length} {items.length === 1 ? "jacket" : "jackets"}
          </p>
        </div>
      </section>

      <BrandBestSellers products={items} />
      <ProductCatalog products={items} />

      <section className="border-t border-black/10 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Other brands</h2>
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

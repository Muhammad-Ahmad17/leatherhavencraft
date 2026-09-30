import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrand } from "@/data/brands";
import { getProduct, products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ProductSVG } from "@/components/product/ProductSVG";
import { ProductPurchase } from "@/components/product/ProductPurchase";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const brand = getBrand(product.brand);

  return (
    <main className="px-6 pt-28 pb-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
        <div className="rounded-3xl bg-[radial-gradient(ellipse_at_50%_60%,var(--bg2),var(--bg)_70%)] p-6">
          <ProductSVG product={product} label={product.name} className="mx-auto h-[62vh] w-auto max-w-full" />
        </div>
        <div>
          {brand ? (
            <Link
              href={`/brands/${brand.slug}`}
              className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] hover:text-[var(--ink)]"
            >
              {brand.name}
            </Link>
          ) : null}
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg">{formatPrice(product.price)}</p>
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">{product.description}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{product.meta}</p>
          <div className="mt-10">
            <ProductPurchase sizes={product.sizes} />
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { fetchLiveProducts } from "@/data/products";
import { ProductCatalog } from "@/components/product/ProductCatalog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jackets & Leather Goods",
  description:
    "Every piece we carry, across Schott NYC, Harley-Davidson, Pelle Pelle, Supreme, Avirex, Leather Haven Craft, and Accessories.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const products = await fetchLiveProducts();

  return (
    <main className="pt-12">
      <div className="mx-auto max-w-6xl px-6 pb-6">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">All brands &amp; categories</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Jackets &amp; Collections</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          Seven houses and categories. Filter by size, colour, or price.
        </p>
      </div>
      <ProductCatalog products={products} />
    </main>
  );
}

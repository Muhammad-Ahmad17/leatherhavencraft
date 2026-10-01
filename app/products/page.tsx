import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCatalog } from "@/components/product/ProductCatalog";

export const metadata: Metadata = {
  title: "Jackets",
  description: "Every jacket we carry, across Avirex, Harley-Davidson, Pelle Pelle, Schott NYC, and Supreme.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main className="pt-12">
      <div className="mx-auto max-w-6xl px-6 pb-6">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">All brands</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Jackets</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          One category. Five houses. Filter by size, colour, or price.
        </p>
      </div>
      <ProductCatalog products={products} />
    </main>
  );
}

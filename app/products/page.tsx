import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductShowcase } from "@/components/product/ProductShowcase";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Scroll through leather jackets, coats, and outerwear. Each piece slides into place on the mannequin.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main>
      <ProductShowcase
        products={products}
        title="Six pieces, one scroll"
        intro="Prices and descriptions are mock data for the prototype. Scroll the stage above, or use the dots to jump."
      />
    </main>
  );
}

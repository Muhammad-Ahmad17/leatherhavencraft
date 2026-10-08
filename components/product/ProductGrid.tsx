import type { Product } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="py-16 text-sm text-[var(--muted)]">No jackets match these filters.</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, idx) => (
        <li key={`${product.id}-${idx}`}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

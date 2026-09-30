import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductShowcase } from "@/components/product/ProductShowcase";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not found" };

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/products/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <main>
      <ProductShowcase
        products={getProductsByCategory(category.slug)}
        title={category.name}
        intro={category.description}
      />
    </main>
  );
}

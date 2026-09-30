import type { Metadata } from "next";
import Link from "next/link";
import { products, getFeaturedProducts } from "@/data/products";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ProductSVG } from "@/components/product/ProductSVG";
import { BrandMarquee } from "@/components/brand/BrandMarquee";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ScrollAnimationContainer } from "@/components/animations/ScrollAnimationContainer";
import { ProductCarousel } from "@/components/product/ProductCarousel";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const heroPiece = products.find((product) => product.slug === "saddle-leather") ?? products[0];

  return (
    <main>
      <div className="flex h-[100dvh] flex-col">
        <section className="relative flex min-h-0 flex-1 items-end overflow-hidden bg-[radial-gradient(ellipse_at_70%_40%,var(--bg2),var(--bg)_68%)] px-6 pt-28 pb-8">
          <div className="mx-auto grid w-full max-w-6xl items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                Jackets · Europe and America
              </p>
              <h1 className="mt-4 max-w-xl text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl">
                The brands. The cut. In stock.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--muted)]">
                Authorized Avirex, Harley-Davidson, Pelle Pelle, Schott NYC, and Supreme
                jackets, shipped across Europe and America.
              </p>
              <div className="mt-8">
                <Button href="/products">Shop jackets</Button>
              </div>
            </div>
            <div className="mx-auto hidden w-full max-w-xs sm:block lg:max-w-sm">
              <ProductSVG product={heroPiece} label={heroPiece.name} className="h-[46vh] w-auto max-w-full" />
            </div>
          </div>
        </section>
        <BrandMarquee />
      </div>

      <section aria-labelledby="scroll-collection">
        <h2 id="scroll-collection" className="sr-only">
          Scroll the collection
        </h2>
        <ScrollAnimationContainer products={products}>
          <ProductCarousel />
        </ScrollAnimationContainer>
      </section>

      <section className="border-t border-black/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">The edit</h2>
            <Link href="/products" className="text-sm underline underline-offset-4">
              Shop all jackets
            </Link>
          </div>
          <div className="mt-10">
            <ProductGrid products={getFeaturedProducts()} />
          </div>
        </div>
      </section>
    </main>
  );
}

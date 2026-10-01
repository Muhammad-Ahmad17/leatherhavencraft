import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedProducts, products } from "@/data/products";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Banner } from "@/components/common/Banner";
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
  return (
    <main>
      <div className="flex h-[calc(100dvh-3.5rem)] flex-col">
        <section className="relative min-h-0 flex-1 overflow-hidden bg-[#1a1a1a] text-white">
          <Banner desktop="/banners/home-desktop.jpg" mobile="/banners/home-mobile.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10 md:bg-gradient-to-r md:from-black/70 md:via-black/25 md:to-transparent" />
          <div className="relative flex h-full items-end px-6 pb-8 sm:px-10 sm:pb-12">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/75">
                Jackets · Europe and America
              </p>
              <h1 className="mt-3 max-w-lg text-4xl font-medium tracking-tight sm:text-6xl">
                The brands. The cut. In stock.
              </h1>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Authorized Avirex, Harley-Davidson, Pelle Pelle, Schott NYC, and Supreme
                jackets, shipped across Europe and America.
              </p>
              <div className="mt-6">
                <Button href="/products" variant="light">
                  Shop jackets
                </Button>
              </div>
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

      <section className="border-t border-[var(--line)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-medium tracking-tight">The edit</h2>
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

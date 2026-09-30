import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { getCategoryLabel } from "@/data/products";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductSVG } from "@/components/product/ProductSVG";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = products[4];

  return (
    <main>
      <section className="relative grid min-h-screen items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_60%,var(--bg2),var(--bg)_70%)] px-6 pt-28 pb-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Hand-finished leather</p>
            <h1 className="mt-4 max-w-xl text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl">
              Scroll the piece. Keep the craft.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--muted)]">
              Leather Haven Craft is a coded storefront, not a theme. This prototype
              uses mock pieces and the same scroll motion as the jacket study: one
              mannequin, a new cut on every turn of the wheel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/products">Open the collection</Button>
              <Button href="/products/jackets" variant="ghost">
                Jackets
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <ProductSVG product={featured} label={featured.name} />
            <p className="mt-2 text-center text-sm text-[var(--muted)]">
              {featured.name} · {formatPrice(featured.price)}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">Shop by cut</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/products/${category.slug}`}
                  className="block rounded-2xl border border-black/10 bg-[var(--bg2)] p-6 transition-transform hover:-translate-y-0.5"
                >
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">The edit</h2>
            <Link href="/products" className="text-sm underline underline-offset-4">
              Scroll all six
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.category}`}
                  className="flex h-full flex-col justify-between rounded-2xl border border-black/10 p-5"
                >
                  <span
                    className="mb-6 block h-24 rounded-xl"
                    style={{ background: product.color }}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                      {getCategoryLabel(product.category)}
                    </span>
                    <span className="mt-1 block text-xl font-semibold">{product.name}</span>
                    <span className="mt-2 block text-sm text-[var(--muted)]">{product.meta}</span>
                    <span className="mt-4 block text-base font-medium">{formatPrice(product.price)}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

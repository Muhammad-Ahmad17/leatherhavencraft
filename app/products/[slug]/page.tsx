import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrand } from "@/data/brands";
import { fetchLiveProductBySlug, fetchLiveProductsByBrand, fetchLiveProducts, products } from "@/data/products";
import { formatPrice, getDiscountedPrice } from "@/lib/utils";
import { ProductPurchase } from "@/components/product/ProductPurchase";
import { ProductGallery } from "@/components/product/ProductGallery";

export const dynamic = "force-dynamic";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const live = await fetchLiveProducts();
  const list = live && live.length > 0 ? live : products;
  return list.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await fetchLiveProductBySlug(slug);
  if (!product) return { title: "Not found" };

  return {
    title: `${product.name} | Leather Haven Craft`,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await fetchLiveProductBySlug(slug);
  if (!product) notFound();

  const brand = getBrand(product.brand);

  // Fetch related pieces from the same heritage house
  const related = (await fetchLiveProductsByBrand(product.brand))
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image ? [product.image] : [],
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: brand ? brand.name : "Leather Haven Craft",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.leatherhavencraft.com/products/${product.slug}`,
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Leather Haven Craft",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* ── Breadcrumb Navigation ── */}
      <nav aria-label="Breadcrumb" className="border-b border-black/10 bg-white/40">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs sm:px-6 lg:px-8">
          <Link href="/" className="text-[var(--muted)] hover:text-[var(--ink)]">
            Home
          </Link>
          <span className="text-[var(--muted)]">/</span>
          {brand ? (
            <>
              <Link
                href={`/brands/${brand.slug}`}
                className="text-[var(--muted)] hover:text-[var(--ink)]"
              >
                {brand.name}
              </Link>
              <span className="text-[var(--muted)]">/</span>
            </>
          ) : null}
          <span className="font-semibold text-[var(--ink)] truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </div>
      </nav>

      {/* ── Main Editorial 2-Column Showcase ── */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Avirex-Grade Photography Stage */}
          <div className="lg:col-span-7">
            <ProductGallery
              productName={product.name}
              images={product.images || []}
              defaultImage={product.image}
              hoverImage={product.imageHover}
              brandName={brand?.name}
            />
          </div>

          {/* Right Column: Minimalist Luxury Purchasing Panel */}
          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-24">
            <div>
              {brand && (
                <Link
                  href={`/brands/${brand.slug}`}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[#2a1810] transition-colors"
                >
                  {brand.name}
                </Link>
              )}
              <h1 className="mt-1 font-serif text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
                {product.name}
              </h1>
            </div>

            <p className="text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              {product.description}
            </p>

            {/* Purchase & Options Component */}
            <ProductPurchase
              productId={product.id}
              productName={product.name}
              brandName={brand?.name}
              price={product.price}
              discountPercent={product.discountPercent}
              sizes={product.sizes}
              productPath={`/products/${product.slug}`}
              image={product.image}
              color={product.color}
              colorName={product.colorName}
              colors={product.colors}
              meta={product.meta}
              description={product.description}
            />
          </div>
        </div>
      </section>

      {/* ── Brand House Lookbook / Related Pieces ── */}
      {related.length > 0 && brand && (
        <section className="border-t border-black/10 bg-white/60 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
                  {brand.name} Collection
                </span>
                <h2 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-[var(--ink)]">
                  More Iconic Outerwear from this House
                </h2>
              </div>
              <Link
                href={`/brands/${brand.slug}`}
                className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--ink)] hover:text-[#8a4d2b] transition-colors"
              >
                View Full {brand.name} Catalog →
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="group block overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xs transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#ede9e2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded bg-[#2a1810]/85 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                      {rel.colorName || "Leather"}
                    </div>
                    {Boolean(rel.discountPercent && rel.discountPercent > 0) && (
                      <div className="absolute top-2.5 right-2.5 rounded bg-[#9e2a2b] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        -{rel.discountPercent}% OFF
                      </div>
                    )}
                  </div>
                  <div className="p-3.5">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                      {brand.name}
                    </div>
                    <div className="mt-1 font-serif text-sm font-bold text-[var(--ink)] group-hover:text-[#8a4d2b] transition-colors truncate">
                      {rel.name}
                    </div>
                    {rel.discountPercent && rel.discountPercent > 0 ? (
                      <div className="mt-1 flex items-baseline gap-1.5 text-xs">
                        <span className="font-bold text-[#8a4d2b]">
                          {formatPrice(getDiscountedPrice(rel.price, rel.discountPercent))}
                        </span>
                        <span className="text-[11px] text-[var(--muted)] line-through">
                          {formatPrice(rel.price)}
                        </span>
                      </div>
                    ) : (
                      <div className="mt-1 font-semibold text-xs text-[var(--ink)]">
                        {formatPrice(rel.price)}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

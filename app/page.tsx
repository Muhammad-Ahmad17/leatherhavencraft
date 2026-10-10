import { HomeFAQ } from "@/components/home/HomeFAQ";
import type { Metadata } from "next";
import Link from "next/link";
import { fetchLiveFeaturedProducts, fetchLiveScrollProducts } from "@/data/products";
import { SITE_DESCRIPTION } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Banner } from "@/components/common/Banner";
import { BrandStrip } from "@/components/brand/BrandStrip";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ScrollAnimationContainer } from "@/components/animations/ScrollAnimationContainer";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { CustomManufacturing } from "@/components/home/CustomManufacturing";
import { OurProcess } from "@/components/home/OurProcess";
import { StoreReviews } from "@/components/home/StoreReviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Leather Haven Craft | Handcrafted Heritage Leather Jackets & Bespoke Atelier",
  description:
    "Artisan handcrafted leather jackets, master archival tributes, and bespoke made-to-measure outerwear inspired by iconic heritage silhouettes. Free worldwide delivery across Europe and America.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Leather Haven Craft | Heritage Leather Outerwear",
    description:
      "Artisan handcrafted leather jackets, master archival tributes, and bespoke made-to-measure outerwear with free worldwide delivery.",
    images: [{ url: "/banners/home-desktop.jpg" }],
  },
};

const homeFaqSchema = [
  {
    q: "What leather do you use?",
    a: "We use 100% natural cowhide and sheepskin leather, selected for durability, comfort, and a premium feel.",
  },
  {
    q: "Are your jackets comfortable and easy to wear?",
    a: "Yes. Our jackets are designed for everyday comfort, easy wear, and a secure fit.",
  },
  {
    q: "How long does delivery take?",
    a: "We offer worldwide delivery, with orders typically arriving within 7 to 9 days.",
  },
  {
    q: "How do I choose my size?",
    a: "Check the size guide on the product page. If you are unsure, contact us for help choosing the right fit.",
  },
  {
    q: "How do I place an order?",
    a: "Click 'Order Now' and send us a message on WhatsApp. We will guide you through the order.",
  },
  {
    q: "Do you offer custom or bulk orders?",
    a: "Yes. We offer custom sizing, branding, and bulk orders. Contact us with your requirements.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 to 8 days of delivery. The customer must contact us within 7 to 8 days to request a return. Return shipping costs will be paid by the customer. The product must be returned in its original, unused, and undamaged condition. Once we receive and inspect the returned product, we will process the refund or re-payment. Refunds will only be issued after the returned product has been received and checked. Any item that is damaged, used, altered, or not in its original condition may not be eligible for a refund.",
  },
];

export default async function HomePage() {
  const featuredProducts = await fetchLiveFeaturedProducts();
  const scrollProducts = await fetchLiveScrollProducts(6);

  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.leatherhavencraft.com/#webpage",
        url: "https://www.leatherhavencraft.com",
        name: "Leather Haven Craft | Authentic Heritage Leather Jackets & Bespoke Outerwear",
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaqSchema.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <main>
      {/* High-priority preload links for the flagship interactive model animation assets */}
            <link rel="preload" href="/scroll-model/model.webp" as="image" type="image/webp" fetchPriority="high" />
      <link rel="preload" href="/scroll-model/jacket-6.webp" as="image" type="image/webp" fetchPriority="high" />
      <link rel="preload" href="/scroll-model/jacket-1.webp" as="image" type="image/webp" />
      <link rel="preload" href="/scroll-model/jacket-2.webp" as="image" type="image/webp" />
      <link rel="preload" href="/scroll-model/jacket-3.webp" as="image" type="image/webp" />
      <link rel="preload" href="/scroll-model/jacket-4.webp" as="image" type="image/webp" />
      <link rel="preload" href="/scroll-model/jacket-5.webp" as="image" type="image/webp" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* ── 1. Hero + brand logos moving marquee ── */}
      <div className="flex h-[calc(100dvh-var(--site-header-h))] flex-col">
        <section className="relative min-h-0 flex-1 overflow-hidden bg-[#1a110c] text-white">
          <Banner desktop="/banners/home-desktop.jpg" mobile="/banners/home-mobile.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10 md:bg-gradient-to-r md:from-black/70 md:via-black/25 md:to-transparent" />
          <div className="relative flex h-full items-end px-6 pb-8 sm:px-10 sm:pb-12">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs border border-white/20 mb-3 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                Free Worldwide Delivery · 7 to 9 Days
              </span>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/75">
                Bespoke Outerwear &amp; Wholesale Production · Europe &amp; America
              </p>
              <h1 className="mt-2 max-w-lg text-4xl font-medium tracking-tight sm:text-6xl">
                The brands. The cut. In stock.
              </h1>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Master handcrafted recreations and archival silhouettes inspired by Avirex, Harley-Davidson, Pelle Pelle, and Schott NYC, plus bespoke tailoring and wholesale bulk orders with free worldwide delivery.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/products" variant="light">
                  Shop jackets
                </Button>
                <Button href="/brands/accessories" variant="ghost" className="hidden sm:inline-flex">
                  Accessories →
                </Button>
              </div>
            </div>
          </div>
        </section>

        <BrandStrip />
      </div>

      {/* ── 2. Scroll the collection (Curated flagship archive pieces) ── */}
      <section aria-labelledby="scroll-collection" className="bg-[#faf7f2] relative">
        <h2 id="scroll-collection" className="sr-only">
          Scroll the collection
        </h2>
        <ScrollAnimationContainer products={scrollProducts}>
          <ProductCarousel />
        </ScrollAnimationContainer>
      </section>

      {/* ── 3. Featured Archival Collection ── */}
      <section aria-label="Featured jackets" className="border-t border-[#ded5c7] bg-white px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="sr-only">Featured jackets</h2>
          <div className="flex justify-end mb-6 sm:mb-8">
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-wider text-[#8a4d2b] hover:text-[#221b16] transition-colors underline underline-offset-4"
            >
              Shop all jackets &rarr;
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* ── 4. Shop by brand & category ── */}
      <BrandShowcase />

      {/* ── 5. Custom Manufacturing (Message or mail us) ── */}
      <CustomManufacturing />

      {/* ── 6. Our Process (Animated 4-step artisan journey) ── */}
      <OurProcess />

      {/* ── 7. Client Reviews & Workshop Acclaim ── */}
      <StoreReviews />

      {/* ── 8. Client FAQ & Care Guidance ── */}
      <HomeFAQ />
    </main>
  );
}

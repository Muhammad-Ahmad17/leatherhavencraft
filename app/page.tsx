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
    q: "How are your jackets constructed and sourced?",
    a: "Our jackets are master artisan recreations and custom made to measure pieces handcrafted in our Sialkot workshop. Each piece is individually bench-crafted using heavy 1.3 to 1.5mm full grain steerhide, genuine merino shearling pelts, or supple lambskin with heavy gauge brass hardware (Talon, Ideal, YKK) mirroring the exact drape, cut, and weight of iconic archival silhouettes.",
  },
  {
    q: "What leather types do you offer?",
    a: "We curate premium heavyweight steerhide and cowhide (Schott Perfecto & Cafe Racers), thick shearling sheepskin pelt (Avirex B-3 Bombers), supple lambskin (Pelle Pelle Plush Bombers), and competition-weight full-grain Horween Chromexcel for our bespoke creations.",
  },
  {
    q: "Do you offer wholesale pricing, bulk dealing, or private-label production?",
    a: "Yes. In addition to individual orders, Leather Haven Craft operates as a direct leathercraft manufacturer for retail boutiques, motorcycle clubs, streetwear labels, and corporate teams. We offer tiered wholesale volume discounts starting from 5+ units, custom embossing, private label branding, and international bulk shipping. Contact our atelier via WhatsApp or email with your quantity and design details for an immediate wholesale quote.",
  },
  {
    q: "How do I choose the correct size?",
    a: "Every jacket has exact pit to pit chest, sleeve, back length, and hem measurements listed on its product page and in our Universal Size Guide (XS to 6XL). If you are unsure between two sizes, message our concierge for personalized fit advice before ordering.",
  },
  {
    q: "How does the ordering and payment process work?",
    a: "Click 'Inquire / Order' on any jacket to reach our concierge via WhatsApp or email. We confirm exact measurements, live inventory, and shipping address, then issue a secure, encrypted payment link via Stripe or invoice.",
  },
  {
    q: "Where do you ship and what are the delivery times?",
    a: "We provide free worldwide delivery. We use reliable air delivery selected according to destination country with no fixed single carrier to ensure the fastest local transit. Delivery typically takes around 1 week to 9 days. We provide direct personal updates on your order throughout production until it is dispatched, after which the respective delivery service provides full online tracking to your doorstep.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 to 8 days of delivery. The customer must contact us within 7 to 8 days to request a return. Return shipping costs will be paid by the customer. The product must be returned in its original, unused, and undamaged condition. Once we receive and inspect the returned product, we will process the refund or re-payment. Refunds will only be issued after the returned product has been received and checked. Any item that is damaged, used, altered, or not in its original condition may not be eligible for a refund.",
  },
];

export default async function HomePage() {
  const featuredProducts = await fetchLiveFeaturedProducts();
  const scrollProducts = await fetchLiveScrollProducts(5);

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
                Free Worldwide Delivery · 1 Week to 9 Days
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
      <section aria-labelledby="scroll-collection" className="bg-[#faf7f2]">
        <h2 id="scroll-collection" className="sr-only">
          Scroll the collection
        </h2>
        <ScrollAnimationContainer products={scrollProducts}>
          <ProductCarousel />
        </ScrollAnimationContainer>
      </section>

      {/* ── 3. Best Sellers (Swapped before Brand Showcase) ── */}
      <section className="border-t border-[#ded5c7] bg-[#faf7f2] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                  Curated Selection
                </p>
                <span className="inline-flex items-center rounded-sm bg-[#22722b]/10 px-2 py-0.5 text-[10px] font-semibold text-[#22722b]">
                  Free Delivery
                </span>
              </div>
              <h2 className="mt-1 text-3xl font-medium tracking-tight text-[#221b16]">Best Sellers</h2>
            </div>
            <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-[#8a4d2b] hover:text-[#221b16] transition-colors underline underline-offset-4">
              Shop all jackets &rarr;
            </Link>
          </div>
          <div className="mt-10">
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </section>

      {/* ── 4. Shop by brand & category ── */}
      <BrandShowcase />

      {/* ── 5. Custom Manufacturing (Message or mail us) ── */}
      <CustomManufacturing />

      {/* ── 6. Our Process (Animated 4-step artisan journey) ── */}
      <OurProcess />

      {/* ── 7. Client FAQ & Care Guidance ── */}
      <HomeFAQ />
    </main>
  );
}

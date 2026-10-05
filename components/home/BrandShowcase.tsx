import Link from "next/link";
import { getBrandStrip } from "@/data/brands";

/**
 * Editorial "Shop by brand & category" showcase.
 * End-to-end panoramic long banners arranged in an expansive 2-per-row grid
 * on desktop, offering cinematic scale and instant brand recognition.
 */
function BrandBanner({
  slug,
  name,
  logo,
  tagline,
  heroDesktop,
  heroMobile,
  index,
  total,
}: {
  slug: string;
  name: string;
  logo: string;
  tagline: string;
  heroDesktop: string;
  heroMobile: string;
  index: number;
  total: number;
}) {
  const isHarley = slug === "harley-davidson";
  const isLHC = slug === "leather-haven-craft";

  return (
    <Link
      href={`/brands/${slug}`}
      className="group relative block w-full overflow-hidden rounded-2xl border border-[#ded5c7]/80 bg-[#1a1512] shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#8a4d2b]/60"
    >
      <div className="relative flex min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] xl:min-h-[390px] w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
        {/* Full-Bleed Panoramic Background Image */}
        <picture className="absolute inset-0">
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </picture>

        {/* Ambient Luxury Dark Overlays for High-Contrast Readability */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25 md:bg-gradient-to-r md:from-black/95 md:via-black/60 md:to-black/20"
        />

        {/* Top Bar: Brand Logo Inset + Index Counter */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="flex h-9 sm:h-10 items-center rounded-lg bg-white px-3 sm:px-3.5 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={name}
              className={`max-h-5 sm:max-h-6 w-auto object-contain ${
                isHarley
                  ? "max-w-[110px] sm:max-w-[125px]"
                  : isLHC
                  ? "max-w-[130px] sm:max-w-[145px]"
                  : "max-w-[95px] sm:max-w-[110px]"
              }`}
            />
          </span>
          <span className="rounded-full bg-black/50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md border border-white/15">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom Content: House Name, Tagline & Action CTA */}
        <div className="relative z-10 mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {name}
            </h3>
            <p className="mt-1.5 text-xs text-white/80 sm:text-sm leading-relaxed line-clamp-2">
              {tagline}
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black shadow-lg">
              Explore
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function BrandShowcase() {
  const brands = getBrandStrip();

  return (
    <section aria-label="Shop by brand and category" className="border-t border-[#ded5c7] bg-white px-4 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8a4d2b]">
              Heritage Collections &amp; Atelier
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-[#221b16] sm:text-4xl lg:text-5xl">
              Shop by brand &amp; category
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8a4d2b] hover:text-[#221b16] transition-colors underline underline-offset-4"
          >
            Explore All Jackets &rarr;
          </Link>
        </div>

        {/* Expansive Full-Screen 2-per-row Long Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
          {brands.map((brand, index) => (
            <div key={brand.slug} className="w-full">
              <BrandBanner
                slug={brand.slug}
                name={brand.name}
                logo={brand.logo}
                tagline={brand.tagline}
                heroDesktop={brand.heroDesktop}
                heroMobile={brand.heroMobile}
                index={index}
                total={brands.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

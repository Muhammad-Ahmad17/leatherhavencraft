import Link from "next/link";
import { getBrandStrip } from "@/data/brands";

/**
 * Editorial "Shop by brand & category" showcase.
 * End-to-end panoramic long banners arranged in an expansive 2-per-row grid
 * on desktop, offering cinematic scale and instant brand recognition.
 */
function BrandTile({
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
      className="group relative block w-full overflow-hidden bg-[#18120e] transition-all duration-500 hover:z-10 focus:outline-none"
    >
      <div className="relative flex h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full flex-col justify-between p-5 sm:p-6 lg:p-7">
        {/* Full-Bleed Edge-to-Edge High-Res Photography */}
        <picture className="absolute inset-0">
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </picture>

        {/* Cinematic Luxury Dark Gradient Overlays for High Contrast Readability */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/50"
        />

        {/* Top Header: Inset Logo Crest & Index Counter */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="flex h-8 sm:h-9 items-center rounded bg-white px-2.5 sm:px-3 shadow-md transition-transform duration-300 group-hover:scale-105">
            {logo ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={logo}
                alt={name}
                className={`max-h-4 sm:max-h-5 w-auto object-contain ${
                  isHarley
                    ? "max-w-[85px] sm:max-w-[100px]"
                    : isLHC
                    ? "max-w-[95px] sm:max-w-[115px]"
                    : "max-w-[75px] sm:max-w-[90px]"
                }`}
              />
            ) : (
              <span className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-[#2a1810] uppercase px-1">
                {name}
              </span>
            )}
          </span>
          <span className="rounded bg-black/60 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md border border-white/10">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom Content: House Name, Tagline & Micro Arrow Action */}
        <div className="relative z-10 flex flex-col justify-end">
          <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#f3e5d0]">
            {isLHC ? "Leather Haven Craft (Custom)" : name}
          </h3>
          <p className="mt-1 text-[11px] sm:text-xs text-white/80 line-clamp-2 leading-relaxed">
            {tagline}
          </p>

          <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 transition-colors duration-300 group-hover:text-white">
              Explore Collection
            </span>
            <span
              aria-hidden="true"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#2a1810] group-hover:translate-x-0.5"
            >
              &rarr;
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
    <section
      aria-label="Shop by brand and category"
      className="border-t border-b border-[#ded5c7] bg-[#faf7f2] pt-14 pb-0 sm:pt-18"
    >
      {/* Editorial Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8a4d2b]">
              Heritage Collections &amp; Atelier
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#2a1810] sm:text-4xl lg:text-5xl">
              Shop by brand &amp; category
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8a4d2b] hover:text-[#2a1810] transition-colors underline underline-offset-4"
          >
            Explore All Outerwear &rarr;
          </Link>
        </div>
      </div>

      {/* Edge-to-Edge Architectural Grid with Slim Segregation Lines */}
      <div className="w-full border-t border-[#ded5c7]">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-[#ded5c7]/60 bg-[#ded5c7]/40">
          {brands.map((brand, index) => (
            <div key={brand.slug} className="w-full">
              <BrandTile
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

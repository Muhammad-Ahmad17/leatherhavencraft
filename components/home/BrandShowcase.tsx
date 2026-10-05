import Link from "next/link";
import { getBrandStrip } from "@/data/brands";

/**
 * Editorial "Shop by brand & category" showcase.
 * Each authorized house and in-house collection has its own dedicated row (one per row)
 * on BOTH mobile and desktop, displaying the house logo, tagline,
 * and a direct link to explore that collection.
 */
function BrandRow({
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
      className="group relative block w-full overflow-hidden bg-[var(--bg2)] transition-all duration-300"
    >
      <div className="relative flex min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] w-full flex-col justify-end p-6 sm:p-8 md:p-10">
        {/* Responsive Background Banner */}
        <picture className="absolute inset-0">
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt=""
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </picture>

        {/* Ambient Dark Overlays for Readability */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-black/25"
        />

        {/* Content Container: 1 brand/category per row on all screen sizes */}
        <div className="relative flex w-full flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-fit items-center bg-white px-3 sm:h-10 sm:px-3.5 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt={name}
                  className={`max-h-5 w-auto object-contain sm:max-h-6 ${
                    isHarley
                      ? "max-h-6 sm:max-h-7 max-w-[115px]"
                      : isLHC
                      ? "max-h-6 sm:max-h-7 max-w-[130px] sm:max-w-[150px]"
                      : "max-w-[95px] sm:max-w-[115px]"
                  }`}
                />
              </span>
              <span className="text-[11px] font-medium tracking-[0.16em] text-white/60 uppercase">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
              {name}
            </h3>
            <p className="mt-1 text-xs text-white/80 sm:text-sm">
              {tagline}
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
              Shop {name}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
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
    <section aria-label="Shop by brand and category" className="border-t border-[#ded5c7] bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">
              Heritage collections &amp; atelier
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">Shop by brand &amp; category</h2>
          </div>
          <Link href="/products" className="shrink-0 text-sm underline underline-offset-4">
            All jackets
          </Link>
        </div>

        {/* Stacked list: exactly ONE brand/category per row on BOTH mobile and desktop */}
        <ul className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5">
          {brands.map((brand, index) => (
            <li key={brand.slug} className="w-full">
              <BrandRow
                slug={brand.slug}
                name={brand.name}
                logo={brand.logo}
                tagline={brand.tagline}
                heroDesktop={brand.heroDesktop}
                heroMobile={brand.heroMobile}
                index={index}
                total={brands.length}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

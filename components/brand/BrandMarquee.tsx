import Link from "next/link";
import { brands } from "@/data/brands";

export function BrandMarquee() {
  return (
    <section className="brand-marquee" aria-label="Brands we carry">
      <div className="brand-marquee-track">
        {brands.map((brand) => (
          <Link key={brand.slug} href={`/brands/${brand.slug}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={brand.logo} alt={brand.name} />
          </Link>
        ))}
        {brands.map((brand) => (
          <Link
            key={`${brand.slug}-clone`}
            href={`/brands/${brand.slug}`}
            tabIndex={-1}
            data-marquee-clone=""
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={brand.logo} alt="" />
          </Link>
        ))}
      </div>
    </section>
  );
}

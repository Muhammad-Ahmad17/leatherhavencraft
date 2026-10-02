import Link from "next/link";
import { getBrandStrip } from "@/data/brands";

function BrandLogo({ slug, logo, name }: { slug: string; logo: string; name: string }) {
  const enlarged = slug === "harley-davidson";
  return (
    <Link
      href={`/brands/${slug}`}
      className={`brand-strip-cell ${enlarged ? "brand-strip-cell-lg" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt={name} />
    </Link>
  );
}

export function BrandStrip() {
  const items = getBrandStrip();
  const rowOne = items.slice(0, 3);
  const rowTwo = items.slice(3, 5);

  return (
    <section className="brand-strip" aria-label="Brands we carry">
      <div className="brand-strip-inner">
        <ul className="brand-strip-list brand-strip-list-desktop">
          {items.map((brand) => (
            <li key={brand.slug}>
              <BrandLogo slug={brand.slug} logo={brand.logo} name={brand.name} />
            </li>
          ))}
        </ul>

        <div className="brand-strip-mobile">
          <ul className="brand-strip-row brand-strip-row-three">
            {rowOne.map((brand) => (
              <li key={brand.slug}>
                <BrandLogo slug={brand.slug} logo={brand.logo} name={brand.name} />
              </li>
            ))}
          </ul>
          <ul className="brand-strip-row">
            {rowTwo.map((brand) => (
              <li key={brand.slug}>
                <BrandLogo slug={brand.slug} logo={brand.logo} name={brand.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { getBrand, type Brand } from "@/data/brands";

export function BrandStrip() {
  const lhc = getBrand("leather-haven-craft");
  const otherSlugs = [
    "avirex",
    "pelle-pelle",
    "harley-davidson",
    "schott-nyc",
    "supreme",
    "accessories",
    "others",
  ];

  const others = otherSlugs
    .map((slug) => getBrand(slug))
    .filter((b): b is Brand => b !== undefined);

  // Interleave: Leather Haven Craft, then brand, then Leather Haven Craft, then another brand...
  const sequence: Brand[] = [];
  if (lhc) {
    for (const b of others) {
      sequence.push(lhc);
      sequence.push(b);
    }
  } else {
    sequence.push(...others);
  }

  // Duplicate for seamless 0% -> -50% CSS infinite marquee
  const loopItems = [...sequence, ...sequence];

  return (
    <section
      className="relative flex-shrink-0 overflow-hidden border-t border-b border-[#ded5c7] bg-white py-3.5 sm:py-4 shadow-2xs"
      aria-label="Heritage silhouettes and workshop marquee"
    >
      <div className="marquee-track gap-8 sm:gap-14 px-4">
        {loopItems.map((brand, idx) => {
          const isLHC = brand.slug === "leather-haven-craft";
          return (
            <Link
              key={`${brand.slug}-${idx}`}
              href={`/brands/${brand.slug}`}
              className={`inline-flex items-center justify-center shrink-0 transition-opacity hover:opacity-100 ${
                isLHC ? "opacity-90 scale-105" : "opacity-70"
              }`}
              title={brand.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={brand.name}
                className={`h-8 sm:h-10 w-auto max-w-[130px] sm:max-w-[155px] object-contain ${
                  isLHC ? "brightness-95" : ""
                }`}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

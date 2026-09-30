export interface Brand {
  slug: string;
  name: string;
  /** Served from public/brands. */
  logo: string;
  tagline: string;
  /** Stand-in for a hero photograph until real campaign images exist. */
  accent: string;
}

export const brands: Brand[] = [
  {
    slug: "avirex",
    name: "Avirex",
    logo: "/brands/avirex.png",
    tagline: "Flight jackets built for the street.",
    accent: "#1c2430",
  },
  {
    slug: "harley-davidson",
    name: "Harley-Davidson",
    logo: "/brands/harley_davidson.svg",
    tagline: "Leather cut for the road.",
    accent: "#1a120e",
  },
  {
    slug: "pelle-pelle",
    name: "Pelle Pelle",
    logo: "/brands/pelle_pelle.png",
    tagline: "Bold leather with a Detroit cut.",
    accent: "#2a1214",
  },
  {
    slug: "schott-nyc",
    name: "Schott NYC",
    logo: "/brands/schott_nyc.png",
    tagline: "The original American motorcycle jacket.",
    accent: "#141414",
  },
  {
    slug: "supreme",
    name: "Supreme",
    logo: "/brands/supreme.png",
    tagline: "Box-logo outerwear, season after season.",
    accent: "#3a1014",
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

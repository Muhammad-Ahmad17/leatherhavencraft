export interface Brand {
  slug: string;
  name: string;
  /** Served from public/brands. */
  logo: string;
  tagline: string;
  /** Stand-in colour behind the type if a photo fails to load. */
  accent: string;
  /** 3840×972. Replace with the designer's desktop file at this path. */
  heroDesktop: string;
  /** 1170×1560. Replace with the designer's mobile file at this path. */
  heroMobile: string;
}

export const brands: Brand[] = [
  {
    slug: "schott-nyc",
    name: "Schott NYC",
    logo: "/brands/schott_nyc.png",
    tagline: "The original American motorcycle jacket.",
    accent: "#141414",
    heroDesktop: "/banners/schott-nyc-desktop.jpg",
    heroMobile: "/banners/schott-nyc-mobile.jpg",
  },
  {
    slug: "harley-davidson",
    name: "Harley-Davidson",
    logo: "/brands/harley_davidson.png",
    tagline: "Leather cut for the road.",
    accent: "#1a120e",
    heroDesktop: "/banners/harley-davidson-desktop.jpg",
    heroMobile: "/banners/harley-davidson-mobile.jpg",
  },
  {
    slug: "pelle-pelle",
    name: "Pelle Pelle",
    logo: "/brands/pelle_pelle.png",
    tagline: "Bold leather with a Detroit cut.",
    accent: "#2a1214",
    heroDesktop: "/banners/pelle-pelle-desktop.jpg",
    heroMobile: "/banners/pelle-pelle-mobile.jpg",
  },
  {
    slug: "supreme",
    name: "Supreme",
    logo: "/brands/supreme.png",
    tagline: "Box-logo outerwear, season after season.",
    accent: "#3a1014",
    heroDesktop: "/banners/supreme-desktop.jpg",
    heroMobile: "/banners/supreme-mobile.jpg",
  },
  {
    slug: "avirex",
    name: "Avirex",
    logo: "/brands/avirex.png",
    tagline: "Flight jackets built for the street.",
    accent: "#1c2430",
    heroDesktop: "/banners/avirex-desktop.jpg",
    heroMobile: "/banners/avirex-mobile.jpg",
  },
  {
    slug: "leather-haven-craft",
    name: "Leather Haven Craft",
    logo: "/brands/leather-haven-craft.png",
    tagline: "Signature handcrafted leather outerwear and bespoke atelier goods.",
    accent: "#1f1610",
    heroDesktop: "/banners/leather-haven-craft-desktop.jpg",
    heroMobile: "/banners/leather-haven-craft-mobile.jpg",
  },
  {
    slug: "accessories",
    name: "Accessories",
    logo: "/brands/accessories.png",
    tagline: "Handcrafted full-grain leather belts, wallets, bags, and heritage goods.",
    accent: "#241914",
    heroDesktop: "/banners/accessories-desktop.jpg",
    heroMobile: "/banners/accessories-mobile.jpg",
  },
];

/** Static hero strip order (left → right). */
export const brandStripSlugs = [
  "schott-nyc",
  "harley-davidson",
  "pelle-pelle",
  "supreme",
  "avirex",
  "leather-haven-craft",
  "accessories",
] as const;

export function getBrand(slug: string): Brand | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === "leather-heaven-craft") {
    return brands.find((brand) => brand.slug === "leather-haven-craft");
  }
  if (normalized === "accessory") {
    return brands.find((brand) => brand.slug === "accessories");
  }
  return brands.find((brand) => brand.slug === normalized);
}

export function getBrandStrip(): Brand[] {
  return brandStripSlugs
    .map((slug) => getBrand(slug))
    .filter((brand): brand is Brand => brand !== undefined);
}

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
    slug: "avirex",
    name: "Avirex",
    logo: "/brands/avirex.png",
    tagline: "Flight jackets built for the street.",
    accent: "#1c2430",
    heroDesktop: "/banners/avirex-desktop.jpg",
    heroMobile: "/banners/avirex-mobile.jpg",
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
    slug: "schott-nyc",
    name: "Schott NYC",
    logo: "/brands/schott_nyc.png",
    tagline: "The original American motorcycle jacket.",
    accent: "#141414",
    heroDesktop: "/banners/schott-nyc-desktop.jpg",
    heroMobile: "/banners/schott-nyc-mobile.jpg",
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
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

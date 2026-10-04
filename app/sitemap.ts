import type { MetadataRoute } from "next";
import { brands } from "@/data/brands";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.leatherhavencraft.com";

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    ...brands.map((brand) => ({
      url: `${base}/brands/${brand.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}

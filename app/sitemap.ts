import type { MetadataRoute } from "next";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/size-guide`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/shipping`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.5 },
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

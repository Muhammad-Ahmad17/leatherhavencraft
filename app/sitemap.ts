import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    ...categories.map((category) => ({
      url: `${base}/products/${category.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}

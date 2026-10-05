import type { MetadataRoute } from "next";
import { brands } from "@/data/brands";
import { fetchLiveProducts, products } from "@/data/products";
import { BLOG_POSTS, fetchLiveBlogs } from "@/data/blogPosts";
import { getSiteUrl } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();

  let liveProducts = products;
  try {
    const fetched = await fetchLiveProducts();
    if (Array.isArray(fetched) && fetched.length > 0) {
      liveProducts = fetched;
    }
  } catch {
    // Fall back to static catalog if DB is unreachable during build
  }

  let liveBlogs = BLOG_POSTS;
  try {
    const fetchedBlogs = await fetchLiveBlogs();
    if (Array.isArray(fetchedBlogs) && fetchedBlogs.length > 0) {
      liveBlogs = fetchedBlogs;
    }
  } catch {
    // Fall back to static catalog
  }

  return [
    { url: base, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/size-guide`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/shipping`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.5 },
    ...liveBlogs.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...brands.map((brand) => ({
      url: `${base}/brands/${brand.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...liveProducts.map((product) => ({
      url: `${base}/products/${product.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}

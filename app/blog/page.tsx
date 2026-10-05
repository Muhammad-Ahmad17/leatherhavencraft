import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, fetchLiveBlogs } from "@/data/blogPosts";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Journal | Heritage Leather Outerwear, Tannages & Collector Guides",
  description:
    "Explore authoritative collector dossiers, authenticity guides, leather tannage matrices, and longevity masterclasses curated by the archivists at Leather Haven Craft.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Journal | Leather Haven Craft Editorial & Heritage Guides",
    description:
      "Authoritative guides on Schott NYC, Avirex, Pelle Pelle, hide tannages, and bespoke made-to-measure leathercraft.",
    images: [{ url: "/banners/home-desktop.jpg" }],
  },
};

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  const allBlogs = await fetchLiveBlogs();
  const categories = Array.from(new Set(allBlogs.map((p) => p.category)));
  const featuredPost = allBlogs.find((p) => p.featured) || allBlogs[0] || BLOG_POSTS[0];
  const regularPosts = allBlogs.filter((p) => p.slug !== featuredPost?.slug);

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://www.leatherhavencraft.com/blog#blog",
        name: "The Journal | Leather Haven Craft",
        description:
          "Authoritative guides on vintage leather outerwear, brand authentication, hide tannages, and bespoke leathercraft.",
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: "https://www.leatherhavencraft.com",
          logo: "https://www.leatherhavencraft.com/logo.png",
        },
        blogPost: allBlogs.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `https://www.leatherhavencraft.com/blog/${post.slug}`,
          datePublished: post.publishedAt,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
          image: `https://www.leatherhavencraft.com${post.coverImage}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.leatherhavencraft.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "The Journal",
            item: "https://www.leatherhavencraft.com/blog",
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-[#f7f4ef] text-[#221b16] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* ── 1. Editorial Magazine Hero Header ── */}
      <section className="border-b border-[#ded5c7] bg-[#f0ebe3] px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8a4d2b]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>The Journal</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-[#221b16]">
            The Journal &amp; Field Notes
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6b5c51] sm:text-base">
            Curated collector dossiers, material science, authenticity forensics, and bespoke tailoring insights from the master artisans and archivists at Leather Haven Craft.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[#8a7b70]">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#8a4d2b]" />
              <span>5 Field Guides</span>
            </div>
            <span>•</span>
            <span>Updated Weekly</span>
            <span>•</span>
            <span>Archival Research</span>
          </div>
        </div>
      </section>

      {/* ── 2. Featured Lead Article ── */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Spotlight Editorial
            </span>
          </div>

          <BlogCard post={featuredPost} variant="featured" />
        </div>
      </section>

      {/* ── 3. Categorized Archive & Full Article Matrix ── */}
      <section className="border-t border-[#ded5c7] px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                All Field Guides
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#221b16]">
                Explore By Category
              </h2>
            </div>
          </div>

          <BlogCategoryFilter posts={regularPosts} categories={categories} />
        </div>
      </section>

      {/* ── 4. Concierge & Bespoke Consultation Banner ── */}
      <section className="border-t border-[#ded5c7] bg-[#ede7de] px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#ded5c7] bg-white p-8 sm:p-12 text-center shadow-xs">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a4d2b]">
            Custom Leather Atelier
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#221b16]">
            Looking for a Specific Silhouette or Custom Hide?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6b5c51] max-w-xl mx-auto leading-relaxed">
            Our master patternmakers cut individual made-to-measure jackets from full-grain steerhide, washed lambskin, and sheepskin shearling. Contact our concierge for complimentary fitting advice.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/size-guide"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#8a4d2b] px-6 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 shadow-2xs"
            >
              Universal Size &amp; Bespoke Guide &rarr;
            </Link>
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#ded5c7] bg-white px-6 text-xs font-semibold uppercase tracking-wider text-[#221b16] transition-colors hover:border-[#8a4d2b] hover:bg-[#f0ebe3] shadow-2xs"
            >
              Shop All Outerwear
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

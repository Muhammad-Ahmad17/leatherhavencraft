import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/data/blogPosts";
import { getProduct } from "@/data/products";
import { BlogCard } from "@/components/blog/BlogCard";
import { ProductCard } from "@/components/product/ProductCard";
import { SITE_NAME } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found | Leather Haven Craft" };

  return {
    title: `${post.metaTitle} | Leather Haven Craft`,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const relatedProducts = (post.relatedProductSlugs || [])
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://www.leatherhavencraft.com/blog/${post.slug}#article`,
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.leatherhavencraft.com/blog#blog",
        },
        headline: post.title,
        description: post.excerpt,
        image: `https://www.leatherhavencraft.com${post.coverImage}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        mainEntityOfPage: `https://www.leatherhavencraft.com/blog/${post.slug}`,
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: "https://www.leatherhavencraft.com",
          logo: "https://www.leatherhavencraft.com/logo.png",
        },
        keywords: post.tags.join(", "),
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://www.leatherhavencraft.com/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-[#f7f4ef] text-[#221b16] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── 1. Breadcrumbs & Meta Header ── */}
      <div className="border-b border-[#ded5c7] bg-[#f0ebe3] px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:underline">
              Journal
            </Link>
            <span>/</span>
            <span className="text-[#6b5c51] truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
          </nav>

          <div className="mt-6 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-[#8a4d2b] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              {post.category}
            </span>
            <span className="text-xs text-[#8a7b70]">•</span>
            <span className="text-xs text-[#8a7b70]">{post.readingTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#221b16] leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#6b5c51]">
            {post.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#ded5c7] pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ede7de] border border-[#ded5c7] flex items-center justify-center text-sm font-bold text-[#8a4d2b]">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-[#221b16]">{post.author.name}</p>
                <p className="text-[11px] text-[#8a7b70]">{post.author.role}</p>
              </div>
            </div>

            <div className="text-xs text-[#8a7b70]">
              Published on{" "}
              <time dateTime={post.publishedAt} className="font-semibold text-[#221b16]">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Hero Cover Image ── */}
      <div className="mx-auto max-w-4xl px-6 pt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#ded5c7] bg-[#1f1a16] shadow-sm">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      </div>

      {/* ── 3. Article Content & Table of Contents ── */}
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Table of Contents Box */}
        {post.sections.length > 1 && (
          <div className="mb-12 rounded-xl border border-[#ded5c7] bg-[#f0ebe3] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Table of Contents
            </p>
            <ol className="mt-4 space-y-2 text-xs sm:text-sm">
              {post.sections.map((section, idx) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-baseline gap-2 text-[#6b5c51] hover:text-[#8a4d2b] hover:underline transition-colors"
                  >
                    <span className="font-mono text-[11px] text-[#8a7b70]">{String(idx + 1).padStart(2, "0")}.</span>
                    <span>{section.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Sections Stream */}
        <div className="space-y-12">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#221b16] border-b border-[#ded5c7]/60 pb-3">
                {section.heading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#443831]">
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Callouts */}
              {section.callout && (
                <aside
                  className={`rounded-xl border p-5 sm:p-6 ${
                    section.callout.type === "warning"
                      ? "border-amber-300 bg-amber-50 text-amber-950"
                      : section.callout.type === "quote"
                      ? "border-[#8a4d2b]/40 bg-[#ede7de] text-[#221b16] italic"
                      : "border-[#8a4d2b]/30 bg-[#f0ebe3] text-[#221b16]"
                  }`}
                >
                  {section.callout.title && (
                    <p className="text-xs font-bold uppercase tracking-wider not-italic text-[#8a4d2b] mb-2">
                      {section.callout.title}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm leading-relaxed">{section.callout.text}</p>
                </aside>
              )}

              {/* Checklists */}
              {section.checklist && (
                <ul className="rounded-xl border border-[#ded5c7] bg-white p-5 sm:p-6 space-y-3">
                  {section.checklist.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#443831]">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b]/15 text-[#8a4d2b] font-bold text-[10px]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Comparison Tables */}
              {section.table && (
                <div className="overflow-x-auto rounded-xl border border-[#ded5c7] bg-white shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#ede7de] text-[#221b16] uppercase tracking-wider text-[11px] font-bold border-b border-[#ded5c7]">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3 sm:px-6">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ded5c7]">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 sm:px-6 font-medium text-[#443831]">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-14 border-t border-[#ded5c7] pt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8a7b70]">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#ded5c7] bg-white px-3 py-1 text-xs text-[#6b5c51]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 rounded-2xl border border-[#ded5c7] bg-[#f0ebe3] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-[#8a4d2b] flex items-center justify-center text-lg font-bold text-white shrink-0 shadow-xs">
            {post.author.name.charAt(0)}
          </div>
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Curated by Author
            </span>
            <h3 className="mt-1 text-base sm:text-lg font-bold text-[#221b16]">
              {post.author.name}
            </h3>
            <p className="text-xs text-[#8a7b70] mb-2">{post.author.role}</p>
            <p className="text-xs sm:text-sm text-[#6b5c51] leading-relaxed">
              Specializing in vintage outerwear curation, leather tannage forensics, and made-to-measure outerwear construction at the Leather Haven Craft Atelier.
            </p>
          </div>
        </div>
      </article>

      {/* ── 4. Related Outerwear Jackets ── */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#ded5c7] bg-[#ede7de] px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                  Featured Outerwear
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#221b16]">
                  Jackets Discussed in This Guide
                </h2>
              </div>
              <Link href="/products" className="text-xs font-semibold text-[#8a4d2b] hover:underline">
                View all collection &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Related Articles ── */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-[#ded5c7] px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                  Further Reading
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#221b16]">
                  More from The Journal
                </h2>
              </div>
              <Link href="/blog" className="text-xs font-semibold text-[#8a4d2b] hover:underline">
                All guides &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

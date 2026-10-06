import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";
import { BlogCard } from "@/components/blog/BlogCard";

export function HomeJournalSection() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="border-t border-[#ded5c7] bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a4d2b]">
              The Journal
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#2a1810]">
              Stories &amp; Collector Guides
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#6b5c51] max-w-xl">
              Archival histories of Schott &amp; Pelle Pelle, hide tannage guides, and master leather care protocols from our workshop.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8a4d2b] hover:text-[#2a1810] transition-colors"
          >
            Explore All Guides
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} cardBg="bg-[#faf8f5]" />
          ))}
        </div>
      </div>
    </section>
  );
}

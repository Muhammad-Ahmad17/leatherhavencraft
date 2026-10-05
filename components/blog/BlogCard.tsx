import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  variant?: "standard" | "compact" | "featured";
}

export function BlogCard({ post, variant = "standard" }: BlogCardProps) {
  const isFeatured = variant === "featured";

  if (isFeatured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl border border-[#ded5c7] bg-white shadow-xs transition-all duration-300 hover:border-[#8a4d2b]/50 hover:shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:col-span-7 overflow-hidden bg-[#1f1a16]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center rounded-full bg-[#8a4d2b] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
                Featured Editorial
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#8a7b70] mb-3">
                <span className="font-semibold text-[#8a4d2b] uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#221b16] group-hover:text-[#8a4d2b] transition-colors line-clamp-3">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0 z-0 lg:hidden" />
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#6b5c51] line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#ded5c7]/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#ede7de] border border-[#ded5c7] flex items-center justify-center text-xs font-bold text-[#8a4d2b]">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#221b16]">{post.author.name}</p>
                  <p className="text-[10px] text-[#8a7b70]">{post.author.role}</p>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="hidden lg:inline-flex items-center gap-1 text-xs font-bold text-[#8a4d2b] hover:text-[#221b16] transition-colors"
              >
                Read Guide
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-[#ded5c7] bg-white transition-all duration-300 hover:border-[#8a4d2b]/50 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1f1a16]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-md bg-[#221b16]/85 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-[#8a7b70] mb-2.5">
            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#221b16] group-hover:text-[#8a4d2b] transition-colors line-clamp-2 leading-snug">
            <Link href={`/blog/${post.slug}`}>
              <span className="absolute inset-0 z-0" />
              {post.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#6b5c51] line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#ded5c7]/60 flex items-center justify-between text-xs">
          <span className="text-[11px] font-medium text-[#8a7b70]">
            By {post.author.name}
          </span>
          <span className="font-semibold text-[#8a4d2b] group-hover:underline flex items-center gap-1">
            Read Story &rarr;
          </span>
        </div>
      </div>
    </article>
  );
}

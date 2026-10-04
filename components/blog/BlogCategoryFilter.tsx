"use client";

import { useState } from "react";
import { BlogPost } from "@/data/blogPosts";
import { BlogCard } from "@/components/blog/BlogCard";

interface BlogCategoryFilterProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogCategoryFilter({ posts, categories }: BlogCategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar">
        <button
          type="button"
          onClick={() => setSelectedCategory("All")}
          className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all ${
            selectedCategory === "All"
              ? "bg-[#8a4d2b] text-white shadow-xs"
              : "border border-[#ded5c7] bg-white text-[#6b5c51] hover:border-[#8a4d2b] hover:text-[#221b16]"
          }`}
        >
          All Guides ({posts.length})
        </button>

        {categories.map((cat) => {
          const count = posts.filter((p) => p.category === cat).length;
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                isActive
                  ? "bg-[#8a4d2b] text-white shadow-xs"
                  : "border border-[#ded5c7] bg-white text-[#6b5c51] hover:border-[#8a4d2b] hover:text-[#221b16]"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Grid of Posts */}
      {filteredPosts.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-xl border border-dashed border-[#ded5c7] p-12 text-center">
          <p className="text-sm text-[#6b5c51]">No articles found in this category.</p>
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className="mt-3 text-xs font-bold text-[#8a4d2b] underline"
          >
            Show all guides
          </button>
        </div>
      )}
    </div>
  );
}

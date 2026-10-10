"use client";

import { useEffect, useState } from "react";

interface ReviewItem {
  _id?: string;
  clientName: string;
  clientLocation?: string;
  rating: number;
  title: string;
  content: string;
  piecePurchased?: string;
  verifiedPurchase?: boolean;
  createdAt?: string;
}

const FALLBACK_REVIEWS: ReviewItem[] = [
  {
    clientName: "Arthur Sterling",
    clientLocation: "Chicago, IL",
    rating: 5,
    title: "Uncompromising Steerhide Craftsmanship",
    content:
      "The heft of the leather and the precision of the brass zippers are second to none. This feels like an archival piece built to outlast decades.",
    piecePurchased: "1994 Avirex B-3 Sheepskin Bomber",
    verifiedPurchase: true,
    createdAt: "2026-09-18",
  },
  {
    clientName: "Dominic Vance",
    clientLocation: "London, UK",
    rating: 5,
    title: "Atelier-Grade Stitching & Fit",
    content:
      "Ordered the custom sizing and the shoulder drape is immaculate. Customer concierge answered all questions within minutes.",
    piecePurchased: "Pelle Pelle Heritage Soda Club",
    verifiedPurchase: true,
    createdAt: "2026-09-24",
  },
  {
    clientName: "Marcus Cole",
    clientLocation: "Austin, TX",
    rating: 5,
    title: "Rare Vintage Detail with Modern Comfort",
    content:
      "You cannot find this level of grain thickness anywhere off the rack. Truly authentic heavyweight craftsmanship.",
    piecePurchased: "Schott NYC Heavy Steerhide Rider",
    verifiedPurchase: true,
    createdAt: "2026-10-01",
  },
  {
    clientName: "Elena Rostova",
    clientLocation: "Berlin, DE",
    rating: 5,
    title: "Exquisite Leather Aroma & Patina",
    content:
      "From the moment the courier package was opened, the aroma of full-grain natural hide was unmistakable. Worth every penny.",
    piecePurchased: "Supreme Vanson Racing Leathers",
    verifiedPurchase: true,
    createdAt: "2026-10-04",
  },
];

export function StoreReviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(FALLBACK_REVIEWS);
  const [averageRating, setAverageRating] = useState(4.9);
  const [totalCount, setTotalCount] = useState(28);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [form, setForm] = useState({
    clientName: "",
    clientLocation: "",
    rating: 5,
    title: "",
    content: "",
    piecePurchased: "",
  });

  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://api.leatherhavencraft.com"
      : "http://localhost:5000");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch(`${backendUrl}/api/reviews`, { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setReviews(json.data);
            if (json.stats?.averageRating) setAverageRating(json.stats.averageRating);
            if (json.stats?.totalReviews) setTotalCount(json.stats.totalReviews);
          }
        }
      } catch {
        // Use fallback reviews silently
      }
    }
    fetchReviews();
  }, [backendUrl]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${backendUrl}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit review");
      }

      setReviews((prev) => [data.data, ...prev]);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowModal(false);
        setForm({
          clientName: "",
          clientLocation: "",
          rating: 5,
          title: "",
          content: "",
          piecePurchased: "",
        });
      }, 1800);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section aria-label="Client reviews" className="border-t border-[#ded5c7] bg-[#faf7f2] text-[#2a1810] px-4 py-10 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 pb-6 sm:pb-12 border-b border-[#ded5c7]">
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8a4d2b]">
              Verified Atelier Experiences
            </p>
            <h2 className="mt-1 sm:mt-2 text-2xl font-bold tracking-tight text-[#2a1810] sm:text-4xl">
              Client Impressions &amp; Workshop Acclaim
            </h2>
            <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-[#6b5c51] max-w-xl">
              Reflections from international collectors, motorcyclists, and bespoke outerwear enthusiasts.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard & Action */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-white border border-[#ded5c7] rounded-lg sm:rounded-xl px-3.5 py-2.5 sm:px-5 sm:py-3.5 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2a1810]">
                {averageRating.toFixed(1)}
              </span>
              <div>
                <div className="flex text-[#8a4d2b] text-xs sm:text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#706456] font-medium">
                  {totalCount}+ Verified Orders
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="rounded-md sm:rounded-lg bg-[#2a1810] px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] transition-colors cursor-pointer shadow-xs"
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Showcase Grid */}
        <div className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {reviews.slice(0, 6).map((rev, idx) => (
            <article
              key={rev._id || idx}
              className="flex flex-col justify-between rounded-lg sm:rounded-xl border border-[#ded5c7] bg-white p-4 sm:p-6 shadow-2xs transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Rating stars and verified badge */}
                <div className="flex items-center justify-between pb-2 sm:pb-3">
                  <div className="flex text-[#8a4d2b] text-[11px] sm:text-xs">
                    {Array.from({ length: Math.min(5, Math.max(1, rev.rating)) }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#1b4332]/10 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold text-[#1b4332]">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified Client
                    </span>
                  )}
                </div>

                {/* Review Title & Content */}
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#2a1810] tracking-tight">
                  &ldquo;{rev.title}&rdquo;
                </h3>
                <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-[#52443a] leading-normal sm:leading-relaxed italic">
                  {rev.content}
                </p>

                {/* Piece Purchased */}
                {rev.piecePurchased && (
                  <div className="mt-2.5 sm:mt-4">
                    <span className="inline-block rounded-md bg-[#faf8f5] border border-[#ded5c7] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-medium text-[#8a4d2b]">
                      Order: {rev.piecePurchased}
                    </span>
                  </div>
                )}
              </div>

              {/* Author Metadata */}
              <div className="mt-3.5 sm:mt-6 pt-2.5 sm:pt-4 border-t border-[#f0ebe3] flex items-center justify-between text-[11px] sm:text-xs">
                <div>
                  <span className="font-bold text-[#2a1810] block">{rev.clientName}</span>
                  {rev.clientLocation && (
                    <span className="text-[10px] sm:text-[11px] text-[#706456] block">{rev.clientLocation}</span>
                  )}
                </div>
                {rev.createdAt && (
                  <span className="text-[9px] sm:text-[10px] text-[#9c9183]">
                    {new Date(rev.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a110c]/70 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl border border-[#ded5c7] bg-[#fbf9f6] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#ded5c7] pb-3 mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
                  Atelier Feedback
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2a1810]">
                  Share Your Experience
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-xs font-bold text-[#6b5c51] hover:text-[#2a1810] cursor-pointer"
              >
                ✕
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xl font-bold">
                  ✓
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2a1810]">
                  Thank You for Your Feedback
                </h4>
                <p className="text-xs text-[#706456]">
                  Your review has been successfully submitted to the atelier showcase.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Cole"
                      value={form.clientName}
                      onChange={(e) => setForm({ ...form, clientName: e.target.value })}
                      className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                      Location (City, Country)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Austin, TX"
                      value={form.clientLocation}
                      onChange={(e) => setForm({ ...form, clientLocation: e.target.value })}
                      className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                      Overall Rating
                    </label>
                    <div className="mt-1 flex items-center gap-1 text-xl text-[#8a4d2b] cursor-pointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setForm({ ...form, rating: star })}
                          className="hover:scale-110 transition-transform"
                        >
                          {star <= form.rating ? "★" : "☆"}
                        </button>
                      ))}
                      <span className="ml-2 text-xs font-bold text-[#2a1810]">{form.rating}/5</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                      Piece Acquired
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Avirex B-3 Bomber"
                      value={form.piecePurchased}
                      onChange={(e) => setForm({ ...form, piecePurchased: e.target.value })}
                      className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Headline / Summary
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Exceptional grain texture and fit"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Detailed Review
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Share your thoughts on hide thickness, zipper hardware, sizing, and comfort..."
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-[#d6cdbf] bg-white p-2.5 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="rounded-lg border border-[#ded5c7] bg-white px-4 py-2 text-xs font-semibold text-[#6b5c51] hover:bg-[#faf7f2] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-lg bg-[#2a1810] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    {submitting ? "Publishing..." : "Submit Review"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";

export function ProductNavControls() {
  const {
    products,
    currentIndex,
    nextJacket,
    prevJacket,
    canNext,
    canPrev,
    scrollToIndex,
  } = useScrollAnimationContext();

  const total = products.length;
  if (total <= 1) return null;

  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(total).padStart(2, "0");

  return (
    <nav
      aria-label="Jacket collection navigation"
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-auto select-none"
    >
      <div className="flex items-center gap-3 sm:gap-4 rounded-full border border-[#2a1810]/15 bg-white/85 px-4 py-2 shadow-md backdrop-blur-md transition-all hover:border-[#8a4d2b]/40">
        {/* Previous Jacket Arrow */}
        <button
          type="button"
          onClick={prevJacket}
          disabled={!canPrev}
          aria-label="Previous jacket"
          className={`group flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
            canPrev
              ? "border-[#2a1810]/15 bg-white text-[#2a1810] hover:border-[#8a4d2b] hover:bg-[#8a4d2b] hover:text-white shadow-2xs active:scale-95"
              : "border-transparent bg-transparent text-[#2a1810]/25 cursor-not-allowed"
          }`}
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Counter Display (e.g. 02 / 05) */}
        <div className="flex items-center gap-1.5 px-1 font-mono text-xs sm:text-sm font-bold tracking-widest text-[#2a1810]">
          <span className="text-[#8a4d2b]">{currentFormatted}</span>
          <span className="text-[#2a1810]/30 font-normal">/</span>
          <span className="text-[#706456]">{totalFormatted}</span>
        </div>

        {/* Next Jacket Arrow */}
        <button
          type="button"
          onClick={nextJacket}
          disabled={!canNext}
          aria-label="Next jacket"
          className={`group flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
            canNext
              ? "border-[#2a1810]/15 bg-white text-[#2a1810] hover:border-[#8a4d2b] hover:bg-[#8a4d2b] hover:text-white shadow-2xs active:scale-95"
              : "border-transparent bg-transparent text-[#2a1810]/25 cursor-not-allowed"
          }`}
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Subtle indicator dots */}
      <div className="flex items-center gap-1.5" role="tablist" aria-label="Jacket selection dots">
        {products.map((p, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to ${p.name}`}
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-6 bg-[#8a4d2b]"
                  : "w-1.5 bg-[#2a1810]/20 hover:bg-[#2a1810]/40"
              }`}
            />
          );
        })}
      </div>
    </nav>
  );
}

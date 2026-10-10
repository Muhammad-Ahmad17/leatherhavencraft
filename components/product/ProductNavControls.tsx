"use client";

import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";

export function ProductNavControls() {
  const {
    products,
    currentIndex,
    scrollToIndex,
  } = useScrollAnimationContext();

  const total = products.length;
  if (total <= 1) return null;

  return (
    <nav
      aria-label="Jacket collection navigation"
      className="absolute bottom-2.5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-auto select-none"
    >
      {/* Minimal indicator dots: clean, naked, no bulky white container */}
      <div
        className="flex items-center gap-1.5 p-1"
        role="tablist"
        aria-label="Jacket selection dots"
      >
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
              className="group flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-4 sm:w-5 bg-[#8a4d2b] shadow-2xs"
                    : "w-1.5 bg-[#2a1810]/25 group-hover:bg-[#8a4d2b]/60"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}

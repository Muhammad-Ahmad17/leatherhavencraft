"use client";

import { useState } from "react";

export function ProductPurchase({ sizes }: { sizes: string[] }) {
  const [size, setSize] = useState(sizes[0] ?? "");

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Size</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Size">
        {sizes.map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={size === value}
            onClick={() => setSize(value)}
            className={`h-11 min-w-11 border px-4 text-sm ${
              size === value
                ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]"
                : "border-black/15"
            }`}
          >
            {value}
          </button>
        ))}
      </div>
      <button
        type="button"
        disabled
        className="mt-8 inline-flex h-12 items-center justify-center bg-[var(--ink)] px-6 text-[13px] font-medium tracking-[0.14em] uppercase text-white opacity-60"
      >
        Add to cart
      </button>
      <p className="mt-3 text-sm text-[var(--muted)]">Checkout is not connected in this prototype.</p>
    </div>
  );
}

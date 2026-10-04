"use client";

import { getInstagramUrl, getEtsyUrl, hasEtsyStore } from "@/lib/social";

interface SocialChannelsProps {
  className?: string;
  variant?: "buttons" | "pills" | "compact";
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function EtsyIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Stylized classic Etsy serif lettermark */}
      <path d="M6 4h12v3.5h-8v4.5h6.5v3.2H10v4.8h8V20H6V4z" />
    </svg>
  );
}

export function SocialChannels({ className = "", variant = "buttons" }: SocialChannelsProps) {
  const instagramUrl = getInstagramUrl();
  const etsyUrl = getEtsyUrl();
  const isEtsyLive = hasEtsyStore();

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Instagram */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-[#2a1810] transition-all hover:border-[#e1306c] hover:bg-[#faf5f6] hover:text-[#e1306c] shadow-2xs"
          aria-label="Follow Leather Haven Craft on Instagram"
          title="Instagram @leatherhavencraft"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>

        {/* Etsy */}
        {isEtsyLive ? (
          <a
            href={etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-[#2a1810] transition-all hover:border-[#f16521] hover:bg-[#fff7f2] hover:text-[#f16521] shadow-2xs"
            aria-label="Shop Leather Haven Craft on Etsy"
            title="Etsy Official Store"
          >
            <EtsyIcon className="h-4 w-4" />
          </a>
        ) : (
          <div
            className="group relative flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-[#ded5c7] bg-[#faf8f5] text-[#8a7b70] cursor-help"
            title="Etsy Store Opening Soon"
          >
            <EtsyIcon className="h-4 w-4 opacity-60" />
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#2a1810] px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-md">
              Etsy Store Opening Soon
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-9 items-center gap-2 rounded-lg border border-[#ded5c7] bg-white px-3 text-xs font-semibold text-[#2a1810] transition-all hover:border-[#e1306c] hover:bg-[#faf5f6] hover:text-[#e1306c] shadow-2xs cursor-pointer"
      >
        <InstagramIcon className="h-4 w-4 text-[#e1306c]" />
        <span>Instagram</span>
      </a>

      {/* Etsy Button */}
      {isEtsyLive ? (
        <a
          href={etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-[#ded5c7] bg-white px-3 text-xs font-semibold text-[#2a1810] transition-all hover:border-[#f16521] hover:bg-[#fff7f2] hover:text-[#f16521] shadow-2xs cursor-pointer"
        >
          <EtsyIcon className="h-3.5 w-3.5 text-[#f16521]" />
          <span>Etsy Store</span>
        </a>
      ) : (
        <div
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-dashed border-[#ded5c7] bg-[#faf8f5] px-3 text-xs font-medium text-[#706456] shadow-2xs cursor-help"
          title="Our Etsy Store is currently in preparation and launching soon!"
        >
          <EtsyIcon className="h-3.5 w-3.5 text-[#f16521]/60" />
          <span>Etsy Store</span>
          <span className="rounded bg-[#8a4d2b]/10 px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider text-[#8a4d2b]">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );
}

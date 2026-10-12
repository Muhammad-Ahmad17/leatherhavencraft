"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WHATSAPP_NUMBER } from "@/lib/contact";

export function AtelierConciergeWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isProductPage = pathname?.startsWith("/products/") && pathname !== "/products";

  useEffect(() => {
    const handleScroll = () => {
      // 1. On homepage: Do NOT show on hero section. Only show after user scrolls past 600px.
      // 2. On other pages: Show after minimal scroll (150px) to prevent instant clutter.
      const threshold = isHome ? 600 : 150;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello Leather Haven Craft Atelier, I have an inquiry about custom leather sizing and commissions."
  )}`;

  // Completely hidden on hero section or when scrolled up
  if (!isVisible) return null;

  return (
    <aside
      aria-label="Atelier Concierge Help"
      className={`fixed right-4 z-30 print:hidden transition-all duration-300 ${
        isProductPage
          ? "bottom-20 lg:bottom-6 right-4 sm:right-6" // Elevates above mobile sticky quick-buy bar!
          : "bottom-6 right-4 sm:right-6"
      }`}
    >
      {/* Expanded Quick-Access Card */}
      {isOpen && (
        <div className="mb-3 w-[290px] sm:w-[320px] overflow-hidden rounded-2xl border border-[#e2d7c8] bg-[#faf8f5] shadow-2xl backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Header */}
          <div className="bg-[#2a1810] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
                </span>
                <span className="font-serif text-sm font-bold tracking-wide">
                  Atelier Concierge
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white text-xs p-1 cursor-pointer"
                aria-label="Close Concierge"
              >
                ✕
              </button>
            </div>
            <p className="mt-1 text-[11px] text-[#c9b199] leading-snug">
              Master artisans online. Inquire about custom sizing, leather types, or orders.
            </p>
          </div>

          {/* Quick Action Options */}
          <div className="p-3.5 space-y-2">
            {/* WhatsApp Sizing Specialist */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[#e5dcce] bg-white p-3 transition-colors hover:border-[#25D366] hover:bg-[#f6fff9] group cursor-pointer"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#128C7E] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.01 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-bold text-[#2a1810]">
                  Chat with Sizing Specialist
                </span>
                <span className="block text-[10px] text-[#706456]">
                  Immediate fit &amp; leather consultation
                </span>
              </div>
            </a>

            {/* Direct Order Tracking Lookup */}
            <Link
              href="/track-order"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-xl border border-[#e5dcce] bg-white p-3 transition-colors hover:border-[#8a4d2b] hover:bg-[#faf6f0] group cursor-pointer"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#8a4d2b]/10 text-[#8a4d2b] group-hover:bg-[#8a4d2b] group-hover:text-white transition-colors">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-bold text-[#2a1810]">
                  Track My Piece
                </span>
                <span className="block text-[10px] text-[#706456]">
                  Live milestone &amp; courier AWB status
                </span>
              </div>
            </Link>

            {/* Universal Sizing Matrix */}
            <Link
              href="/size-guide"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-xl border border-[#e5dcce] bg-white p-3 transition-colors hover:border-[#8a4d2b] hover:bg-[#faf6f0] group cursor-pointer"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2a1810]/10 text-[#2a1810] group-hover:bg-[#2a1810] group-hover:text-white transition-colors">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-bold text-[#2a1810]">
                  Universal Size Guide
                </span>
                <span className="block text-[10px] text-[#706456]">
                  Chest, sleeve, and shoulder chart
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Floating Luxury Concierge Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-[#2a1810] px-3.5 py-2 text-white shadow-xl hover:bg-[#3d2417] transition-all hover:scale-105 active:scale-95 border border-[#c9b199]/40 cursor-pointer"
        aria-label="Toggle Atelier Concierge"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider">
          {isOpen ? "Close" : "Concierge"}
        </span>
        <svg className="w-3 h-3 text-[#c9b199]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          )}
        </svg>
      </button>
    </aside>
  );
}

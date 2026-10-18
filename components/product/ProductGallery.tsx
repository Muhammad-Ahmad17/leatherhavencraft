"use client";

import { useEffect, useState } from "react";

interface ProductGalleryProps {
  productName: string;
  images: string[];
  defaultImage: string;
  hoverImage?: string;
  brandName?: string;
}

export function ProductGallery({
  productName,
  images = [],
  defaultImage,
  hoverImage,
}: ProductGalleryProps) {
  const allPhotos = (() => {
    const list: string[] = [];
    if (images && images.length > 0) {
      for (const img of images) {
        if (img && typeof img === "string" && !list.includes(img)) list.push(img);
      }
    }
    if (defaultImage && !list.includes(defaultImage)) {
      list.unshift(defaultImage);
    }
    if (hoverImage && !list.includes(hoverImage)) {
      if (list.length >= 1) list.splice(1, 0, hoverImage);
      else list.push(hoverImage);
    }
    return list.length > 0 ? list : [defaultImage || "/catalog/field-bomber.jpg"];
  })();

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [mousePercent, setMousePercent] = useState({ x: 50, y: 50 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const activePhoto = allPhotos[selectedIdx] || allPhotos[0];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? allPhotos.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev === allPhotos.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Lens diameter is 160px, so radius is 80px
    const lensRadius = 80;
    const clampedX = Math.max(lensRadius, Math.min(rect.width - lensRadius, clientX));
    const clampedY = Math.max(lensRadius, Math.min(rect.height - lensRadius, clientY));

    setLensPos({ x: clampedX, y: clampedY });
    setMousePercent({
      x: (clientX / rect.width) * 100,
      y: (clientY / rect.height) * 100,
    });
  };

  const openLightboxAt = (idx: number) => {
    setLightboxIdx(idx);
    setIsLightboxOpen(true);
  };

  // Close lightbox on Escape key and lock body scroll
  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxIdx((prev) => (prev === 0 ? allPhotos.length - 1 : prev - 1));
      if (e.key === "ArrowRight") setLightboxIdx((prev) => (prev === allPhotos.length - 1 ? 0 : prev + 1));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen, allPhotos.length]);

  return (
    <>
      <div className="flex w-full flex-col-reverse gap-3 md:flex-row md:items-start lg:gap-4">
        {/* ── Left Vertical Thumbnails (Compact so whole image fits above fold without scrolling) ── */}
        {allPhotos.length > 1 && (
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[520px] lg:max-h-[580px] py-1 md:w-16 lg:w-20 shrink-0 scrollbar-none">
            {allPhotos.map((photo, index) => {
              const isActive = index === selectedIdx;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedIdx(index)}
                  aria-label={`Select view ${index + 1}`}
                  className={`relative aspect-[3/4] w-14 md:w-full shrink-0 overflow-hidden rounded-md border transition-all cursor-pointer ${
                    isActive
                      ? "border-[#2a1810] ring-1 ring-[#2a1810] shadow-xs"
                      : "border-[#ded5c7] opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={`${productName} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* ── Main Viewport Stage (Optimized for above-the-fold visibility without scrolling) ── */}
        <div className="relative flex-1 w-full overflow-hidden rounded-xl border border-[#ded5c7] bg-[#f5f2eb]">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={() => openLightboxAt(selectedIdx)}
            title="Click to view full screen gallery"
            className="group relative h-[380px] sm:h-[480px] md:h-[520px] lg:h-[580px] w-full cursor-zoom-in overflow-hidden select-none"
          >
            {/* Base Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={activePhoto}
              src={activePhoto}
              alt={productName}
              className="h-full w-full object-cover select-none"
            />

            {/* Circular / Box Local Lens Magnifier (Follows mouse, magnifies only inside circle without distorting base photo) */}
            {isHovered && (
              <div
                aria-hidden="true"
                style={{
                  left: `${lensPos.x}px`,
                  top: `${lensPos.y}px`,
                  transform: "translate(-50%, -50%)",
                  backgroundImage: `url(${activePhoto})`,
                  backgroundPosition: `${mousePercent.x}% ${mousePercent.y}%`,
                  backgroundSize: "280%",
                  backgroundRepeat: "no-repeat",
                }}
                className="pointer-events-none absolute hidden sm:block h-40 w-40 rounded-full border-2 border-white/90 shadow-2xl backdrop-blur-xs ring-4 ring-black/20"
              />
            )}

            {/* Fullscreen Expand Hint Badge */}
            <span className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
              <span>Click for Fullscreen</span>
            </span>

            {/* Navigation Chevrons */}
            {allPhotos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous view"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#2a1810] shadow-md transition-all hover:bg-white active:scale-95 cursor-pointer backdrop-blur-xs z-10"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next view"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#2a1810] shadow-md transition-all hover:bg-white active:scale-95 cursor-pointer backdrop-blur-xs z-10"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Fullscreen High-Resolution Lightbox Modal (Click to open full array on screen) ── */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md transition-opacity"
        >
          {/* Top Bar: Title, Count, Close Button */}
          <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-white/10 text-white">
            <div className="flex items-center gap-3">
              <span className="font-serif text-sm sm:text-base font-semibold truncate max-w-[240px] sm:max-w-md">
                {productName}
              </span>
              <span className="rounded bg-white/15 px-2.5 py-0.5 font-mono text-xs font-medium text-white/90">
                {lightboxIdx + 1} / {allPhotos.length}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 active:scale-95 transition-all cursor-pointer"
              aria-label="Close fullscreen gallery"
            >
              ✕
            </button>
          </div>

          {/* Main Stage Image */}
          <div className="relative flex flex-1 items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={allPhotos[lightboxIdx]}
              src={allPhotos[lightboxIdx]}
              alt={`${productName} view ${lightboxIdx + 1}`}
              className="max-h-[75vh] sm:max-h-[82vh] w-auto max-w-full object-contain rounded-md shadow-2xl transition-transform"
            />

            {/* Lightbox Nav Chevrons */}
            {allPhotos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx((prev) => (prev === 0 ? allPhotos.length - 1 : prev - 1))
                  }
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 active:scale-90 transition-all cursor-pointer backdrop-blur-md shadow-lg"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx((prev) => (prev === allPhotos.length - 1 ? 0 : prev + 1))
                  }
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 active:scale-90 transition-all cursor-pointer backdrop-blur-md shadow-lg"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnail Strip Array */}
          {allPhotos.length > 1 && (
            <div className="flex h-24 shrink-0 items-center justify-center gap-2.5 overflow-x-auto px-6 border-t border-white/10 bg-black/40">
              {allPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLightboxIdx(idx)}
                  className={`relative aspect-[3/4] h-16 shrink-0 overflow-hidden rounded-md border-2 transition-all cursor-pointer ${
                    idx === lightboxIdx
                      ? "border-[#c45500] scale-105 shadow-md"
                      : "border-white/20 opacity-50 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={`Thumb ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

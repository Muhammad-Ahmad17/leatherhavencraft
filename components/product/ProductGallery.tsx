"use client";

import { useState } from "react";

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
  brandName,
}: ProductGalleryProps) {
  // Construct gallery list: ensure defaultImage is first, hoverImage is second, then remaining photos
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
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const activePhoto = allPhotos[selectedIdx] || allPhotos[0];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? allPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev === allPhotos.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="flex w-full flex-col-reverse gap-4 md:flex-row md:items-start lg:gap-6">
      {/* ── Desktop Left-hand Vertical Thumbnail Column ── */}
      {allPhotos.length > 1 && (
        <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto md:max-h-[700px] py-1 md:w-20 shrink-0 scrollbar-none">
          {allPhotos.map((photo, index) => {
            const isActive = index === selectedIdx;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIdx(index)}
                aria-label={`Select angle ${index + 1}`}
                className={`group relative h-20 w-16 md:h-24 md:w-full shrink-0 overflow-hidden rounded border transition-all cursor-pointer ${
                  isActive
                    ? "border-[var(--ink)] ring-2 ring-[var(--ink)]/20 shadow-sm"
                    : "border-black/10 opacity-70 hover:opacity-100 hover:border-black/30"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-1 right-1 rounded bg-black/75 px-1 py-0.2 text-[8px] font-bold text-white tracking-widest">
                  0{index + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ── Main High-Impact Editorial Stage ── */}
      <div className="relative flex-1 w-full overflow-hidden rounded-xl border border-black/10 bg-[#ede9e2] shadow-sm">
        <div
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          className="relative h-[480px] sm:h-[580px] lg:h-[700px] w-full cursor-crosshair overflow-hidden"
        >
          {/* Main Photo with smooth magnification */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={activePhoto}
            src={activePhoto}
            alt={`${productName} view ${selectedIdx + 1}`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transform: "scale(1.7)",
                  }
                : {
                    transform: "scale(1)",
                  }
            }
            className="h-full w-full object-cover transition-transform duration-200 ease-out"
          />

          {/* Top Heritage Hallmark Tag */}
          <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2">
            <span className="rounded bg-black/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37] backdrop-blur-md shadow-sm">
              {brandName ? `${brandName.toUpperCase()} ARCHIVE` : "AUTHENTIC MIL-SPEC"}
            </span>
          </div>

          {/* Top Right Counter */}
          {allPhotos.length > 1 && (
            <div className="pointer-events-none absolute top-4 right-4 rounded bg-black/75 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-white backdrop-blur-md">
              {selectedIdx + 1} / {allPhotos.length}
            </div>
          )}

          {/* Bottom Left Angle Pill */}
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] shadow-md backdrop-blur-md">
            {selectedIdx === 0
              ? "Primary Exterior"
              : selectedIdx === 1
              ? "Rear / Flight Cut"
              : `Macro Detail 0${selectedIdx + 1}`}
          </div>

          {/* Bottom Right Zoom Tip */}
          <div className="pointer-events-none absolute bottom-4 right-4 hidden sm:flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-md">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <span>Hover to Inspect Hide</span>
          </div>

          {/* Prev / Next Floating Controls */}
          {allPhotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous view"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--ink)] shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next view"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--ink)] shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

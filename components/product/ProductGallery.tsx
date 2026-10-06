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
    <div className="flex w-full flex-col-reverse gap-4 md:flex-row md:items-start lg:gap-5">
      {/* ── Vertical Thumbnail Column (Clean, no text badges) ── */}
      {allPhotos.length > 1 && (
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[720px] py-1 md:w-20 shrink-0 scrollbar-none">
          {allPhotos.map((photo, index) => {
            const isActive = index === selectedIdx;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIdx(index)}
                aria-label={`Select view ${index + 1}`}
                className={`relative aspect-[3/4] w-16 md:w-full shrink-0 overflow-hidden rounded-md border transition-all cursor-pointer ${
                  isActive
                    ? "border-[#2a1810] ring-1 ring-[#2a1810]"
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

      {/* ── Main Pure Imagery Stage (Zero text overlays) ── */}
      <div className="relative flex-1 w-full overflow-hidden rounded-xl border border-[#ded5c7] bg-[#f5f2eb]">
        <div
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          className="relative h-[480px] sm:h-[600px] lg:h-[720px] w-full cursor-zoom-in overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={activePhoto}
            src={activePhoto}
            alt={productName}
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transform: "scale(1.8)",
                  }
                : {
                    transform: "scale(1)",
                  }
            }
            className="h-full w-full object-cover transition-transform duration-150 ease-out select-none"
          />

          {/* Minimal Floating Nav Chevrons */}
          {allPhotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous view"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#2a1810] shadow-md transition-all hover:bg-white active:scale-95 cursor-pointer backdrop-blur-xs"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next view"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#2a1810] shadow-md transition-all hover:bg-white active:scale-95 cursor-pointer backdrop-blur-xs"
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
  );
}

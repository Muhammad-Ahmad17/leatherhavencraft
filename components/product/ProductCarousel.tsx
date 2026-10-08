"use client";

import { useEffect } from "react";
import { SVG_VIEWBOX } from "@/lib/constants";
import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";
import { JacketShape } from "@/components/product/ProductSVG";
import { ProductCaption } from "@/components/product/ProductCaption";
import { ProductNavControls } from "@/components/product/ProductNavControls";

export function ProductCarousel() {
  const {
    products,
    svgRef,
    setGroupRef,
    hintVisible,
    nextJacket,
    prevJacket,
    canNext,
    canPrev,
  } = useScrollAnimationContext();

  // Background decode all 5 jackets and model into GPU memory on initial mount
  useEffect(() => {
    const urls = [
      "/scroll-model/model.webp",
      ...products.map((p) => p.scrollJacketImage).filter((u): u is string => Boolean(u)),
    ];
    urls.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (typeof img.decode === "function") {
        img.decode().catch(() => {});
      }
    });
  }, [products]);

  return (
    <div className="stage relative overflow-hidden">
      {/* Hidden image preloader to ensure instant zero-latency rendering of all 5 jackets and model */}
      <div className="sr-only" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/scroll-model/model.webp" alt="" loading="eager" fetchPriority="high" />
        {products.map((p) =>
          p.scrollJacketImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={p.id} src={p.scrollJacketImage} alt="" />
          ) : null
        )}
      </div>

      <p className="hint" style={{ opacity: hintVisible ? 1 : 0 }}>
        Scroll or use arrows &larr; &rarr; to explore
      </p>

      {/* ── Left Edge Floating Chevron Arrow (Desktop) ── */}
      {canPrev && (
        <button
          type="button"
          onClick={prevJacket}
          aria-label="Previous jacket"
          className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-[#2a1810]/15 bg-white/85 text-[#2a1810] shadow-md backdrop-blur-xs transition-all hover:border-[#8a4d2b] hover:bg-[#8a4d2b] hover:text-white hover:scale-110 active:scale-95"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* ── Center: Main Model & Interactive SVG Layer ── */}
      <svg
        ref={svgRef}
        className="scene"
        viewBox={`0 0 ${SVG_VIEWBOX.width} ${SVG_VIEWBOX.height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="An atelier model wearing iconic leather jackets that change as you scroll"
        style={{
          willChange: "transform",
          contain: "layout paint",
          touchAction: "pan-y",
        }}
      >
        {/* Soft floor ambient contact shadow */}
        <ellipse cx="350" cy="1185" rx="160" ry="16" fill="#000" opacity="0.16" />

        {/* Base Model (stationary real model) */}
        <image
          href="/scroll-model/model.webp"
          x="0"
          y="0"
          width="700"
          height="1200"
          preserveAspectRatio="xMidYMid meet"
          
        />

        {/* Dynamic Jacket Layers animated via useScrollAnimation */}
        <g>
          {products.map((product, index) => (
            <g
              key={product.id}
              ref={(node) => setGroupRef(index, node)}
              style={{ opacity: index === 0 ? 1 : 0, visibility: index === 0 ? "visible" : "hidden", willChange: "opacity", transform: "translateZ(0)" }}
            >
              {product.scrollJacketImage ? (
                <image
                  href={product.scrollJacketImage}
                  x="0"
                  y="0"
                  width="700"
                  height="1200"
                  preserveAspectRatio="xMidYMid meet"
                  
                />
              ) : (
                <JacketShape product={product} />
              )}
            </g>
          ))}
        </g>
      </svg>

      {/* ── Right Edge Floating Chevron Arrow (Desktop) ── */}
      {canNext && (
        <button
          type="button"
          onClick={nextJacket}
          aria-label="Next jacket"
          className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-[#2a1810]/15 bg-white/85 text-[#2a1810] shadow-md backdrop-blur-xs transition-all hover:border-[#8a4d2b] hover:bg-[#8a4d2b] hover:text-white hover:scale-110 active:scale-95"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* ── Active Jacket Details (Bottom Left) ── */}
      <ProductCaption />

      {/* ── Bottom Center Arrow Synchronization & Counter (02 / 05) ── */}
      <ProductNavControls />
    </div>
  );
}

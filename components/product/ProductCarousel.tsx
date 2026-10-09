"use client";

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

  return (
    <div className="stage relative overflow-hidden">
      {/* Hidden image preloader to ensure instant zero-latency rendering of all 5 jackets and model */}
      <div className="sr-only" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/scroll-model/model.webp" alt="" />
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
      <div className="relative flex flex-col items-center justify-center">
        <svg
          ref={svgRef}
          className="scene relative z-10"
          viewBox={`0 0 ${SVG_VIEWBOX.width} ${SVG_VIEWBOX.height}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="An atelier model wearing iconic leather jackets that change as you scroll"
        >
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
                style={{ display: index === 0 ? undefined : "none" }}
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

        {/* ── Real Photo Studio Soft Blurry Drop Shadow directly under feet ── */}
        <div
          className="pointer-events-none absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 z-0 flex flex-col items-center select-none"
          aria-hidden="true"
        >
          {/* Broad, soft, diffuse photo studio floor falloff shadow */}
          <div
            className="w-[280px] sm:w-[420px] lg:w-[480px] h-7 sm:h-10 rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(20, 10, 5, 0.35) 0%, rgba(35, 20, 12, 0.18) 45%, rgba(42, 24, 16, 0.04) 75%, transparent 100%)",
              filter: "blur(12px)",
            }}
          />
          {/* Tighter core contact occlusion shadow grounding the model */}
          <div
            className="w-[180px] sm:w-[270px] lg:w-[320px] h-3.5 sm:h-5 rounded-[50%] -mt-5 sm:-mt-7"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(15, 8, 4, 0.50) 0%, rgba(25, 15, 10, 0.25) 55%, transparent 100%)",
              filter: "blur(4px)",
            }}
          />
        </div>
      </div>

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

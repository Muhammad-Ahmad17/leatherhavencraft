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
  } = useScrollAnimationContext();

  return (
    <div className="stage relative overflow-hidden">
      {/* Hidden image preloader to ensure instant zero-latency rendering of all jackets and model */}
      <div className="sr-only" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/scroll-model/model.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {products.map((p) =>
          p.scrollJacketImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={p.id}
              src={p.scrollJacketImage}
              alt=""
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          ) : null
        )}
      </div>

      <p className="hint" style={{ opacity: hintVisible ? 1 : 0 }}>
        Scroll to explore collection
      </p>

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
            className="w-[360px] sm:w-[420px] lg:w-[480px] h-8 sm:h-10 rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(20, 10, 5, 0.35) 0%, rgba(35, 20, 12, 0.18) 45%, rgba(42, 24, 16, 0.04) 75%, transparent 100%)",
              filter: "blur(12px)",
            }}
          />
          {/* Tighter core contact occlusion shadow grounding the model */}
          <div
            className="w-[240px] sm:w-[270px] lg:w-[320px] h-4 sm:h-5 rounded-[50%] -mt-6 sm:-mt-7"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(15, 8, 4, 0.50) 0%, rgba(25, 15, 10, 0.25) 55%, transparent 100%)",
              filter: "blur(4px)",
            }}
          />
        </div>
      </div>

      {/* ── Active Jacket Details (Bottom Left) ── */}
      <ProductCaption />

      {/* ── Bottom Center Arrow Synchronization & Counter (02 / 05) ── */}
      <ProductNavControls />
    </div>
  );
}

"use client";

import { SVG_VIEWBOX } from "@/lib/constants";
import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";
import { JacketShape } from "@/components/product/ProductSVG";
import { ProductCaption } from "@/components/product/ProductCaption";
import { ProductDots } from "@/components/product/ProductDots";

export function ProductCarousel() {
  const { products, svgRef, setGroupRef, hintVisible } = useScrollAnimationContext();

  return (
    <div className="stage">
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
        Scroll the collection
      </p>

      <svg
        ref={svgRef}
        className="scene"
        viewBox={`0 0 ${SVG_VIEWBOX.width} ${SVG_VIEWBOX.height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="An atelier model wearing iconic leather jackets that change as you scroll"
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

      <ProductCaption />
      <ProductDots />
    </div>
  );
}

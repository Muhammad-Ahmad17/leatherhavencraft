"use client";

import { SVG_VIEWBOX } from "@/lib/constants";
import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";
import { JacketShape, Mannequin } from "@/components/product/ProductSVG";
import { ProductCaption } from "@/components/product/ProductCaption";
import { ProductDots } from "@/components/product/ProductDots";

export function ProductCarousel() {
  const { products, svgRef, setGroupRef, hintVisible } = useScrollAnimationContext();

  return (
    <div className="stage">
      <p className="hint" style={{ opacity: hintVisible ? 1 : 0 }}>
        Scroll to change the piece
      </p>

      <svg
        ref={svgRef}
        className="scene"
        viewBox={`0 0 ${SVG_VIEWBOX.width} ${SVG_VIEWBOX.height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="A mannequin wearing a jacket that changes as you scroll"
      >
        <ellipse cx="200" cy="676" rx="110" ry="12" fill="#000" opacity="0.14" />
        <Mannequin />
        <g>
          {products.map((product, index) => (
            <g
              key={product.id}
              ref={(node) => setGroupRef(index, node)}
              style={{ display: index === 0 ? undefined : "none" }}
            >
              <JacketShape product={product} />
            </g>
          ))}
        </g>
      </svg>

      <ProductCaption />
      <ProductDots />
    </div>
  );
}

"use client";

import { useRef } from "react";
import type { Product } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ScrollAnimationContext } from "@/components/animations/scroll-animation-context";

type ScrollAnimationContainerProps = {
  products: Product[];
  children: React.ReactNode;
};

export function ScrollAnimationContainer({
  products,
  children,
}: ScrollAnimationContainerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const animation = useScrollAnimation({
    trackRef,
    svgRef,
    count: products.length,
  });

  return (
    <ScrollAnimationContext.Provider value={{ products, ...animation }}>
      <div
        ref={trackRef}
        className={products.length > 1 ? "scroll-track" : "scroll-track scroll-track-single"}
      >
        {children}
      </div>
    </ScrollAnimationContext.Provider>
  );
}

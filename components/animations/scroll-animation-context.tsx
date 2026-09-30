"use client";

import { createContext, useContext } from "react";
import type { RefObject } from "react";
import type { Product } from "@/data/products";

export type ScrollAnimationContextValue = {
  products: Product[];
  currentIndex: number;
  hintVisible: boolean;
  svgRef: RefObject<SVGSVGElement | null>;
  setGroupRef: (index: number, node: SVGGElement | null) => void;
  scrollToIndex: (index: number) => void;
};

export const ScrollAnimationContext =
  createContext<ScrollAnimationContextValue | null>(null);

export function useScrollAnimationContext() {
  const value = useContext(ScrollAnimationContext);
  if (!value) {
    throw new Error("Scroll animation components must sit inside the scroll track.");
  }
  return value;
}

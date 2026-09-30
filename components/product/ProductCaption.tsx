"use client";

import { formatPrice } from "@/lib/utils";
import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";

export function ProductCaption() {
  const { products, currentIndex } = useScrollAnimationContext();
  const product = products[currentIndex];
  if (!product) return null;

  return (
    <div className="caption" aria-live="polite">
      <p className="eyebrow">{product.category}</p>
      <h1 className="name">{product.name}</h1>
      <p className="meta">
        {product.meta}
        <span aria-hidden="true"> · </span>
        <span>{formatPrice(product.price)}</span>
      </p>
    </div>
  );
}

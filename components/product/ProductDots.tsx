"use client";

import { useScrollAnimationContext } from "@/components/animations/scroll-animation-context";

export function ProductDots() {
  const { products, currentIndex, scrollToIndex } = useScrollAnimationContext();

  return (
    <div className="dots" aria-label="Pieces">
      {products.map((product, index) => (
        <button
          key={product.id}
          type="button"
          aria-label={product.name}
          aria-current={index === currentIndex}
          onClick={() => scrollToIndex(index)}
        />
      ))}
    </div>
  );
}

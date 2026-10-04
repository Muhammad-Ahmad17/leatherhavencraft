export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Surcharge for extended sizes (2XL and above) to cover additional premium hide consumption. */
export const PLUS_SIZE_SURCHARGE = 20;

/**
 * Returns true if the size is 2XL or higher (e.g. 2XL, 3XL, 4XL, 5XL, 6XL, XXL, XXXL).
 */
export function isPlusSize(size?: string): boolean {
  if (!size) return false;
  const s = size.trim().toUpperCase();
  const match = s.match(/^(\d+)XL$/);
  if (match) {
    const num = parseInt(match[1], 10);
    return num >= 2;
  }
  return s === "XXL" || s === "XXXL" || s.startsWith("XXXX");
}

/**
 * Computes product price with size surcharge (+ $20 for 2XL and above).
 */
export function getProductPriceForSize(basePrice: number, size?: string): number {
  return isPlusSize(size) ? basePrice + PLUS_SIZE_SURCHARGE : basePrice;
}

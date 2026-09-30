/** Smoothstep-style ease used by the jacket scroll demo. */
export function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

export function linear(t: number): number {
  return t;
}

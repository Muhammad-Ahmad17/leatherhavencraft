/**
 * Official social and marketplace channel configurations.
 * Controlled via environment variables in Vercel for zero-code future updates.
 */

export const DEFAULT_INSTAGRAM_URL = "https://www.instagram.com/leatherhavencraft";
export const DEFAULT_ETSY_URL = "";

export function getInstagramUrl(): string {
  return process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || DEFAULT_INSTAGRAM_URL;
}

export function getEtsyUrl(): string {
  return process.env.NEXT_PUBLIC_ETSY_URL?.trim() || DEFAULT_ETSY_URL;
}

export function hasEtsyStore(): boolean {
  const url = getEtsyUrl();
  return Boolean(url && url.length > 0 && !url.includes("coming-soon"));
}

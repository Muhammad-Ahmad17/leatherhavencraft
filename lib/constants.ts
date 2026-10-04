export const SVG_VIEWBOX = { width: 400, height: 700 } as const;

/** Desktop scroll track, in viewport heights. Shortened from the jacket demo. */
export const TRACK_HEIGHT_VH = 280;

/** Shorter track on small screens so the piece still changes without a long scroll. */
export const MOBILE_TRACK_HEIGHT_VH = 220;

export const ROTATION_DEGREES = 10;

/** Portion of the neighbor gap where the piece stays fully in view. */
export const EASE_START = 0.18;
export const EASE_SPAN = 0.82;

export const SITE_NAME = "Leather Haven Craft";

/** Full wordmark + mark; served from public/logo.png (source: favicon.ico). */
export const SITE_LOGO = "/logo.png";

export const SITE_DESCRIPTION =
  "Authorized jackets and bespoke leather goods from Schott NYC, Harley-Davidson, Pelle Pelle, Supreme, Avirex, and Leather Haven Craft, shipped to Europe and America.";

export const SITE_URL = "https://www.leatherhavencraft.com";

/**
 * Returns the production canonical site URL.
 * Automatically guards against localhost leakage in production sitemaps, robots, and metadata.
 */
export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (!env || env.includes("localhost") || process.env.NODE_ENV === "production") {
    return SITE_URL;
  }
  return env.replace(/\/+$/, "");
}

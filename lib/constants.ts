export const SVG_VIEWBOX = { width: 400, height: 700 } as const;

/** Desktop scroll track, in viewport heights. Matches the jacket demo. */
export const TRACK_HEIGHT_VH = 420;

/** Shorter track on small screens so the piece still changes without a long scroll. */
export const MOBILE_TRACK_HEIGHT_VH = 280;

export const ROTATION_DEGREES = 10;

/** Portion of the neighbor gap where the piece stays fully in view. */
export const EASE_START = 0.18;
export const EASE_SPAN = 0.82;

export const SITE_NAME = "Leather Haven Craft";

export const SITE_DESCRIPTION =
  "A coded storefront for hand-finished leather jackets, coats, and outerwear. Scroll to change the piece.";

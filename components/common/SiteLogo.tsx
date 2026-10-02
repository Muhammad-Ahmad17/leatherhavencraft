import Link from "next/link";
import { SITE_LOGO, SITE_NAME } from "@/lib/constants";

/** Base logo height ~36px; scaled 1.3× for wordmark legibility. */
const LOGO_CLASS =
  "h-[47px] w-auto max-w-[208px] sm:h-[52px] sm:max-w-[286px] lg:h-[62px] lg:max-w-[320px]";

export function SiteLogo({
  className = LOGO_CLASS,
  centered = false,
  inverted = false,
}: {
  className?: string;
  centered?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 ${centered ? "justify-center" : ""}`}
      aria-label={`${SITE_NAME} home`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SITE_LOGO}
        alt={SITE_NAME}
        className={`object-contain ${centered ? "object-center" : "object-left"} ${inverted ? "brightness-0 invert" : ""} ${className}`}
      />
    </Link>
  );
}

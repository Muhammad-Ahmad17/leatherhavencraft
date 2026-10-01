type BannerProps = {
  desktop: string;
  mobile: string;
  alt?: string;
  className?: string;
};

/** Full-bleed photo. Desktop and mobile files match the designer banner sizes. */
export function Banner({ desktop, mobile, alt = "", className = "" }: BannerProps) {
  return (
    <picture className="absolute inset-0">
      <source media="(min-width: 768px)" srcSet={desktop} />
      <img
        src={mobile}
        alt={alt}
        className={`h-full w-full object-cover object-[center_28%] md:object-[72%_center] ${className}`}
      />
    </picture>
  );
}

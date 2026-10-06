import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "light" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  const styles =
    variant === "light"
      ? "bg-white text-[var(--leather-dark)] hover:bg-[#faf7f2]"
      : variant === "ghost"
        ? "border border-[var(--leather-dark)] text-[var(--leather-dark)] hover:bg-[var(--leather-dark)]/5"
        : "bg-[var(--leather-dark)] text-white hover:bg-[#3d2417]";

  return (
    <Link
      href={href}
      className={`h-12 items-center justify-center px-6 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors ${styles} ${className || "inline-flex"}`}
    >
      {children}
    </Link>
  );
}

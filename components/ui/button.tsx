import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "light" | "ghost";
};

export function Button({ href, children, variant = "solid" }: ButtonProps) {
  const styles =
    variant === "light"
      ? "bg-white text-[var(--ink)] hover:bg-white/90"
      : variant === "ghost"
        ? "border border-[var(--ink)] text-[var(--ink)] hover:bg-black/5"
        : "bg-[var(--ink)] text-white hover:bg-black";

  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center px-6 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}

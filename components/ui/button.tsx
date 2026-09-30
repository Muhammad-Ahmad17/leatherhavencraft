import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
};

export function Button({ href, children, variant = "solid" }: ButtonProps) {
  const styles =
    variant === "solid"
      ? "bg-[var(--ink)] text-[var(--bg)] hover:opacity-90"
      : "border border-[var(--ink)] text-[var(--ink)] hover:bg-black/5";

  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-opacity ${styles}`}
    >
      {children}
    </Link>
  );
}

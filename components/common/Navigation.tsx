import Link from "next/link";
import { brands } from "@/data/brands";

const links = [
  { href: "/products", label: "Jackets" },
  ...brands.map((brand) => ({ href: `/brands/${brand.slug}`, label: brand.name })),
];

export function Navigation({ className = "" }: { className?: string }) {
  return (
    <nav className={className} aria-label="Primary">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

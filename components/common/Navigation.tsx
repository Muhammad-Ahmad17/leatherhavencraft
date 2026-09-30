import Link from "next/link";

const links = [
  { href: "/products", label: "Collection" },
  { href: "/products/jackets", label: "Jackets" },
  { href: "/products/coats", label: "Coats" },
  { href: "/products/outerwear", label: "Outerwear" },
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

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Navigation } from "@/components/common/Navigation";

export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-20 px-5 pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
      <div className="pointer-events-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.16em] uppercase text-[var(--ink)]">
          {SITE_NAME}
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Navigation } from "@/components/common/Navigation";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[var(--bg)] px-6 py-12 text-[var(--ink)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] uppercase">{SITE_NAME}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Frontend prototype with mock pieces. Nothing here is for sale yet.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Navigation />
          <Link href="/products" className="text-sm underline underline-offset-4">
            Scroll the collection
          </Link>
        </div>
      </div>
    </footer>
  );
}

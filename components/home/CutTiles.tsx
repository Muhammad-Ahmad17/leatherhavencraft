import Link from "next/link";
import { getProduct } from "@/data/products";

const cuts = [
  { slug: "field-bomber", label: "Bombers", line: "Flight and field cuts" },
  { slug: "black-bar-shield", label: "Riders", line: "Leather for the road" },
  { slug: "cream-varsity", label: "Varsity", line: "Wool body, leather sleeve" },
  { slug: "red-box-coach", label: "Coaches", line: "Light outer, street cut" },
] as const;

export function CutTiles() {
  const tiles = cuts
    .map((cut) => {
      const product = getProduct(cut.slug);
      return product ? { ...cut, product } : null;
    })
    .filter((tile): tile is NonNullable<typeof tile> => tile !== null);

  return (
    <section className="border-t border-[var(--line)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">Find a cut</p>
        <h2 className="mt-2 text-3xl font-medium tracking-tight">Shop by silhouette</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">
          Start with the shape, then pick the house. Each tile opens a jacket in that cut.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {tiles.map((tile) => (
            <li key={tile.slug}>
              <Link href={`/products/${tile.product.slug}`} className="group block">
                <span className="relative block aspect-[3/4] overflow-hidden bg-[var(--bg2)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tile.product.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <span className="block text-lg font-medium tracking-tight">{tile.label}</span>
                    <span className="mt-1 block text-xs text-white/75">{tile.line}</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

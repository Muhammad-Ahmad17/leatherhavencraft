import type { Product } from "@/data/products";

export function Mannequin() {
  return (
    <g>
      <path d="M148 430 L252 430 L244 660 L208 660 L200 470 L192 660 L156 660 Z" fill="#2a3440" />
      <rect x="150" y="656" width="52" height="12" rx="5" fill="#1b232c" />
      <rect x="198" y="656" width="52" height="12" rx="5" fill="#1b232c" />
      <path d="M132 170 Q200 152 268 170 L262 300 Q258 360 256 440 L144 440 Q142 360 138 300 Z" fill="#f1efea" />
      <path d="M132 172 Q100 180 96 260 L90 400 Q92 414 108 414 Q120 412 122 398 L134 260 Z" fill="#f1efea" />
      <path d="M268 172 Q300 180 304 260 L310 400 Q308 414 292 414 Q280 412 278 398 L266 260 Z" fill="#f1efea" />
      <circle cx="100" cy="430" r="14" fill="var(--mq)" />
      <circle cx="300" cy="430" r="14" fill="var(--mq)" />
      <rect x="185" y="132" width="30" height="40" rx="8" fill="var(--mq2)" />
      <ellipse cx="200" cy="92" rx="34" ry="44" fill="var(--mq)" />
    </g>
  );
}

export function JacketShape({ product }: { product: Product }) {
  const hem = product.hem;
  const cuff = product.cuff;

  return (
    <>
      <path
        d={`M140 168 Q200 156 260 168 L268 ${hem} Q200 ${hem + 12} 132 ${hem} Z`}
        fill={product.color}
      />
      <path
        d={`M140 168 L112 176 Q88 300 84 ${cuff} L118 ${cuff + 4} Q126 330 148 250 Z`}
        fill={product.color}
      />
      <path
        d={`M260 168 L288 176 Q312 300 316 ${cuff} L282 ${cuff + 4} Q274 330 252 250 Z`}
        fill={product.color}
      />
      <g dangerouslySetInnerHTML={{ __html: product.svgExtra }} />
    </>
  );
}

export function ProductSVG({
  product,
  className = "scene",
  label,
}: {
  product: Product;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 700"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label ?? `${product.name} on a mannequin`}
    >
      <ellipse cx="200" cy="676" rx="110" ry="12" fill="#000" opacity="0.14" />
      <Mannequin />
      <JacketShape product={product} />
    </svg>
  );
}

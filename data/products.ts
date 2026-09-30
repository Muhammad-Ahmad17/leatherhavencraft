import { getCategory } from "@/data/categories";

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  /** Short line shown under the name while scrolling. */
  meta: string;
  color: string;
  darkColor: string;
  /** Jacket hem, in SVG units. Longer coats sit lower. */
  hem: number;
  /** Sleeve cuff, in SVG units. */
  cuff: number;
  /** Extra marks: stitching, pockets, quilting. Trusted mock markup only. */
  svgExtra: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "field-bomber",
    name: "Field Bomber",
    category: "jackets",
    description:
      "Olive cotton twill with a ribbed hem and a collar that stands up to weather.",
    price: 248,
    meta: "Olive cotton twill",
    color: "#5f7040",
    darkColor: "#3f4d2a",
    hem: 400,
    cuff: 416,
    svgExtra: `<path d="M200 160 L200 400" stroke="#2c361c" stroke-width="3"/>
      <rect x="132" y="386" width="136" height="16" rx="3" fill="#3f4d2a"/>
      <path d="M168 160 Q200 190 232 160 L232 148 Q200 160 168 148 Z" fill="#3f4d2a"/>
      <rect x="150" y="300" width="34" height="5" rx="2" fill="#2c361c"/>
      <rect x="216" y="300" width="34" height="5" rx="2" fill="#2c361c"/>
      <rect x="84" y="404" width="34" height="14" rx="3" fill="#3f4d2a"/>
      <rect x="282" y="404" width="34" height="14" rx="3" fill="#3f4d2a"/>`,
  },
  {
    id: 2,
    slug: "camel-overcoat",
    name: "Camel Overcoat",
    category: "coats",
    description: "A long wool-blend coat with a notched lapel and horn buttons.",
    price: 420,
    meta: "Wool blend, long cut",
    color: "#b98d5c",
    darkColor: "#96703f",
    hem: 540,
    cuff: 424,
    svgExtra: `<path d="M172 158 L200 300 L228 158 L214 150 L200 200 L186 150 Z" fill="#a37a4b"/>
      <path d="M156 164 L200 330 L172 158 Z" fill="#c7a074"/>
      <path d="M244 164 L200 330 L228 158 Z" fill="#c7a074"/>
      <circle cx="205" cy="340" r="4" fill="#5b4326"/>
      <circle cx="205" cy="400" r="4" fill="#5b4326"/>
      <circle cx="205" cy="460" r="4" fill="#5b4326"/>
      <rect x="150" y="420" width="38" height="6" rx="3" fill="#96703f"/>
      <rect x="212" y="420" width="38" height="6" rx="3" fill="#96703f"/>`,
  },
  {
    id: 3,
    slug: "indigo-denim",
    name: "Indigo Denim",
    category: "jackets",
    description: "Washed denim with contrast stitching and two chest pockets.",
    price: 198,
    meta: "Washed, chest pockets",
    color: "#38597f",
    darkColor: "#28425f",
    hem: 392,
    cuff: 414,
    svgExtra: `<path d="M200 162 L200 392" stroke="#22374f" stroke-width="2"/>
      <path d="M168 160 L200 190 L232 160 L232 148 L200 158 L168 148 Z" fill="#28425f"/>
      <rect x="146" y="214" width="38" height="36" rx="3" fill="none" stroke="#e0b25a" stroke-width="1.6" stroke-dasharray="4 3"/>
      <rect x="216" y="214" width="38" height="36" rx="3" fill="none" stroke="#e0b25a" stroke-width="1.6" stroke-dasharray="4 3"/>
      <path d="M135 350 L265 350" stroke="#e0b25a" stroke-width="1.4" stroke-dasharray="4 3"/>
      <circle cx="200" cy="230" r="3" fill="#e0b25a"/>
      <circle cx="200" cy="290" r="3" fill="#e0b25a"/>
      <rect x="84" y="402" width="34" height="14" rx="3" fill="#28425f"/>
      <rect x="282" y="402" width="34" height="14" rx="3" fill="#28425f"/>`,
  },
  {
    id: 4,
    slug: "quilted-puffer",
    name: "Quilted Puffer",
    category: "outerwear",
    description: "Brick-red shell with a light fill and horizontal baffle lines.",
    price: 310,
    meta: "Brick red, light fill",
    color: "#a8433a",
    darkColor: "#7f2f28",
    hem: 420,
    cuff: 420,
    svgExtra: `<g stroke="#7f2f28" stroke-width="3" opacity=".8">
      <path d="M134 220 Q200 232 266 220"/><path d="M134 268 Q200 280 266 268"/>
      <path d="M134 316 Q200 328 266 316"/><path d="M134 364 Q200 376 266 364"/>
      <path d="M100 250 L128 254"/><path d="M96 310 L124 312"/><path d="M92 370 L120 370"/>
      <path d="M300 250 L272 254"/><path d="M304 310 L276 312"/><path d="M308 370 L280 370"/></g>
      <path d="M200 160 L200 420" stroke="#5c211c" stroke-width="3"/>
      <path d="M166 160 Q200 176 234 160 L234 138 Q200 150 166 138 Z" fill="#7f2f28"/>`,
  },
  {
    id: 5,
    slug: "saddle-leather",
    name: "Saddle Leather",
    category: "jackets",
    description:
      "Full-grain leather with brass snaps and a collar that breaks in with wear.",
    price: 560,
    meta: "Full-grain, brass hardware",
    color: "#6b3e2e",
    darkColor: "#4a291d",
    hem: 410,
    cuff: 418,
    svgExtra: `<path d="M200 162 L200 410" stroke="#3a2018" stroke-width="2.5"/>
      <path d="M168 160 Q200 188 232 160 L226 146 Q200 158 174 146 Z" fill="#4a291d"/>
      <circle cx="200" cy="250" r="4" fill="#c6a15b"/>
      <circle cx="200" cy="310" r="4" fill="#c6a15b"/>
      <circle cx="200" cy="370" r="4" fill="#c6a15b"/>
      <rect x="148" y="220" width="36" height="28" rx="2" fill="none" stroke="#c6a15b" stroke-width="1.4"/>
      <rect x="216" y="220" width="36" height="28" rx="2" fill="none" stroke="#c6a15b" stroke-width="1.4"/>
      <rect x="84" y="406" width="34" height="14" rx="3" fill="#4a291d"/>
      <rect x="282" y="406" width="34" height="14" rx="3" fill="#4a291d"/>`,
  },
  {
    id: 6,
    slug: "cognac-rider",
    name: "Cognac Rider",
    category: "coats",
    description: "Horsehide rider with an asymmetric brass zip and a belted waist.",
    price: 640,
    meta: "Horsehide, asymmetric zip",
    color: "#8c4a2f",
    darkColor: "#6a3420",
    hem: 430,
    cuff: 422,
    svgExtra: `<path d="M168 168 L232 210 L232 156 L200 168 L168 150 Z" fill="#6a3420"/>
      <path d="M156 200 L248 250" stroke="#2a1812" stroke-width="3"/>
      <rect x="210" y="248" width="22" height="10" rx="2" fill="#c6a15b"/>
      <path d="M140 300 Q200 312 260 300" stroke="#6a3420" stroke-width="6" fill="none"/>
      <rect x="84" y="410" width="34" height="14" rx="3" fill="#6a3420"/>
      <rect x="282" y="410" width="34" height="14" rx="3" fill="#6a3420"/>`,
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((product) => product.category === slug);
}

export function getCategoryLabel(slug: string): string {
  return getCategory(slug)?.name ?? slug;
}

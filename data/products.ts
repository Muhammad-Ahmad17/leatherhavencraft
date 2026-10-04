import { getBrand } from "@/data/brands";

export interface ProductColor {
  name: string;
  hex?: string;
}

export interface Product {
  id: number | string;
  slug: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  /** Short line shown under the name while scrolling. */
  meta: string;
  color: string;
  darkColor: string;
  /** Plain-language colour used by the filter bar. */
  colorName: string;
  /** Dedicated colorways available for this product. */
  colors?: ProductColor[];
  sizes: string[];
  /** Shown in the home edit and brand best-sellers strip. */
  featured: boolean;
  /** Card photo, 900×1200. */
  image: string;
  /** Second photo shown on hover. */
  imageHover: string;
  /** Multi-photo gallery images. */
  images?: string[];
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
    image: "/catalog/field-bomber.jpg",
    imageHover: "/catalog/field-bomber-alt.jpg",
    brand: "avirex",
    description:
      "Olive cotton twill with a ribbed hem and a collar that stands up to weather.",
    price: 248,
    meta: "Olive cotton twill",
    color: "#5f7040",
    darkColor: "#3f4d2a",
    colorName: "Olive",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
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
    image: "/catalog/camel-overcoat.jpg",
    imageHover: "/catalog/camel-overcoat-alt.jpg",
    brand: "schott-nyc",
    description: "A long wool-blend coat with a notched lapel and horn buttons.",
    price: 420,
    meta: "Wool blend, long cut",
    color: "#b98d5c",
    darkColor: "#96703f",
    colorName: "Camel",
    sizes: ["M", "L", "XL"],
    featured: true,
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
    image: "/catalog/indigo-denim.jpg",
    imageHover: "/catalog/indigo-denim-alt.jpg",
    brand: "supreme",
    description: "Washed denim with contrast stitching and two chest pockets.",
    price: 198,
    meta: "Washed, chest pockets",
    color: "#38597f",
    darkColor: "#28425f",
    colorName: "Indigo",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
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
    image: "/catalog/quilted-puffer.jpg",
    imageHover: "/catalog/quilted-puffer-alt.jpg",
    brand: "pelle-pelle",
    description: "Brick-red shell with a light fill and horizontal baffle lines.",
    price: 310,
    meta: "Brick red, light fill",
    color: "#a8433a",
    darkColor: "#7f2f28",
    colorName: "Brick",
    sizes: ["S", "M", "L"],
    featured: true,
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
    image: "/catalog/saddle-leather.jpg",
    imageHover: "/catalog/saddle-leather-alt.jpg",
    brand: "harley-davidson",
    description:
      "Full-grain leather with brass snaps and a collar that breaks in with wear.",
    price: 560,
    meta: "Full-grain, brass hardware",
    color: "#6b3e2e",
    darkColor: "#4a291d",
    colorName: "Brown",
    sizes: ["M", "L", "XL"],
    featured: true,
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
    image: "/catalog/cognac-rider.jpg",
    imageHover: "/catalog/cognac-rider-alt.jpg",
    brand: "schott-nyc",
    description: "Horsehide rider with an asymmetric brass zip and a belted waist.",
    price: 640,
    meta: "Horsehide, asymmetric zip",
    color: "#8c4a2f",
    darkColor: "#6a3420",
    colorName: "Cognac",
    sizes: ["S", "M", "L", "XL"],
    featured: false,
    hem: 430,
    cuff: 422,
    svgExtra: `<path d="M168 168 L232 210 L232 156 L200 168 L168 150 Z" fill="#6a3420"/>
      <path d="M156 200 L248 250" stroke="#2a1812" stroke-width="3"/>
      <rect x="210" y="248" width="22" height="10" rx="2" fill="#c6a15b"/>
      <path d="M140 300 Q200 312 260 300" stroke="#6a3420" stroke-width="6" fill="none"/>
      <rect x="84" y="410" width="34" height="14" rx="3" fill="#6a3420"/>
      <rect x="282" y="410" width="34" height="14" rx="3" fill="#6a3420"/>`,
  },
  {
    id: 7,
    slug: "navy-flight",
    name: "Navy Flight",
    image: "/catalog/navy-flight.jpg",
    imageHover: "/catalog/navy-flight-alt.jpg",
    brand: "avirex",
    description: "A nylon flight jacket with a knit collar, cuffs, and a flap pocket.",
    price: 275,
    meta: "Nylon flight, knit trim",
    color: "#243044",
    darkColor: "#17202e",
    colorName: "Navy",
    sizes: ["S", "M", "L", "XL"],
    featured: false,
    hem: 405,
    cuff: 416,
    svgExtra: `<path d="M168 158 Q200 186 232 158 L226 146 Q200 156 174 146 Z" fill="#17202e"/>
      <rect x="146" y="220" width="40" height="32" rx="2" fill="#17202e"/>
      <rect x="84" y="404" width="34" height="14" rx="3" fill="#17202e"/>
      <rect x="282" y="404" width="34" height="14" rx="3" fill="#17202e"/>
      <rect x="132" y="390" width="136" height="16" rx="3" fill="#17202e"/>`,
  },
  {
    id: 8,
    slug: "black-bar-shield",
    name: "Black Bar & Shield",
    image: "/catalog/black-bar-shield.jpg",
    imageHover: "/catalog/black-bar-shield-alt.jpg",
    brand: "harley-davidson",
    description: "Black leather rider with a tall collar and brass snaps down the front.",
    price: 590,
    meta: "Black leather rider",
    color: "#2a2e33",
    darkColor: "#16191c",
    colorName: "Black",
    sizes: ["M", "L", "XL"],
    featured: false,
    hem: 418,
    cuff: 420,
    svgExtra: `<path d="M200 162 L200 418" stroke="#111" stroke-width="2.5"/>
      <circle cx="206" cy="240" r="3.5" fill="#c6a15b"/>
      <circle cx="206" cy="300" r="3.5" fill="#c6a15b"/>
      <circle cx="206" cy="360" r="3.5" fill="#c6a15b"/>
      <path d="M166 160 Q200 178 234 160 L230 146 Q200 156 170 146 Z" fill="#16191c"/>
      <rect x="84" y="408" width="34" height="14" rx="3" fill="#16191c"/>
      <rect x="282" y="408" width="34" height="14" rx="3" fill="#16191c"/>`,
  },
  {
    id: 9,
    slug: "cream-varsity",
    name: "Cream Varsity",
    image: "/catalog/cream-varsity.jpg",
    imageHover: "/catalog/cream-varsity-alt.jpg",
    brand: "pelle-pelle",
    description: "Wool body, leather sleeves, and striped rib at the collar and hem.",
    price: 340,
    meta: "Wool body, leather sleeves",
    color: "#e6dcc8",
    darkColor: "#6b3e2e",
    colorName: "Cream",
    sizes: ["S", "M", "L", "XL"],
    featured: false,
    hem: 400,
    cuff: 414,
    svgExtra: `<path d="M140 168 L112 176 Q88 300 84 414 L118 418 Q126 330 148 250 Z" fill="#6b3e2e"/>
      <path d="M260 168 L288 176 Q312 300 316 414 L282 418 Q274 330 252 250 Z" fill="#6b3e2e"/>
      <rect x="132" y="386" width="136" height="16" rx="3" fill="#6b3e2e"/>
      <path d="M168 160 Q200 184 232 160 L232 148 Q200 158 168 148 Z" fill="#6b3e2e"/>
      <rect x="84" y="402" width="34" height="14" rx="3" fill="#c6a15b"/>
      <rect x="282" y="402" width="34" height="14" rx="3" fill="#c6a15b"/>`,
  },
  {
    id: 10,
    slug: "red-box-coach",
    name: "Red Box Coach",
    image: "/catalog/red-box-coach.jpg",
    imageHover: "/catalog/red-box-coach-alt.jpg",
    brand: "supreme",
    description: "A short coach jacket in red nylon with a snap placket and slash pockets.",
    price: 220,
    meta: "Red nylon coach",
    color: "#c4312e",
    darkColor: "#8d1e1c",
    colorName: "Red",
    sizes: ["S", "M", "L", "XL"],
    featured: false,
    hem: 388,
    cuff: 410,
    svgExtra: `<path d="M200 160 L200 388" stroke="#8d1e1c" stroke-width="3"/>
      <circle cx="206" cy="230" r="3" fill="#f4f1ea"/>
      <circle cx="206" cy="280" r="3" fill="#f4f1ea"/>
      <circle cx="206" cy="330" r="3" fill="#f4f1ea"/>
      <path d="M168 158 Q200 176 232 158 L232 146 Q200 156 168 146 Z" fill="#8d1e1c"/>
      <rect x="84" y="398" width="34" height="14" rx="3" fill="#8d1e1c"/>
      <rect x="282" y="398" width="34" height="14" rx="3" fill="#8d1e1c"/>`,
  },
  {
    id: 11,
    slug: "artisan-steerhide-rider",
    name: "Artisan Steerhide Rider",
    image: "/catalog/cognac-rider.jpg",
    imageHover: "/catalog/cognac-rider-alt.jpg",
    brand: "leather-haven-craft",
    description: "Hand-burnished steerhide double rider with brass hardware, crafted in our atelier.",
    price: 680,
    meta: "Handcrafted atelier steerhide",
    color: "#543022",
    darkColor: "#371c14",
    colorName: "Cognac",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    hem: 425,
    cuff: 420,
    svgExtra: `<path d="M168 168 L232 210 L232 156 L200 168 L168 150 Z" fill="#371c14"/>
      <path d="M156 200 L248 250" stroke="#1d0d08" stroke-width="3"/>
      <rect x="210" y="248" width="22" height="10" rx="2" fill="#c6a15b"/>
      <rect x="84" y="410" width="34" height="14" rx="3" fill="#371c14"/>
      <rect x="282" y="410" width="34" height="14" rx="3" fill="#371c14"/>`,
  },
  {
    id: 12,
    slug: "heritage-leather-duffle",
    name: "Heritage Duffle Bag",
    image: "/catalog/saddle-leather.jpg",
    imageHover: "/catalog/saddle-leather-alt.jpg",
    brand: "accessories",
    description: "Heavyweight pull-up leather weekender bag with solid brass fittings and reinforced handles.",
    price: 340,
    meta: "Full-grain leather luggage",
    color: "#6b3e2e",
    darkColor: "#4a291d",
    colorName: "Brown",
    sizes: ["One Size"],
    featured: true,
    hem: 410,
    cuff: 418,
    svgExtra: `<rect x="140" y="240" width="120" height="90" rx="6" fill="#4a291d"/>
      <path d="M160 240 Q200 200 240 240" stroke="#c6a15b" stroke-width="3" fill="none"/>`,
  },
];

export function getProductsByBrand(slug: string): Product[] {
  const normalized = slug.toLowerCase();
  if (normalized === "leather-heaven-craft") {
    return products.filter((product) => product.brand === "leather-haven-craft");
  }
  if (normalized === "accessory") {
    return products.filter((product) => product.brand === "accessories");
  }
  return products.filter((product) => product.brand === normalized);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getBrandLabel(slug: string): string {
  return getBrand(slug)?.name ?? slug;
}


export interface BackendProduct {
  _id?: string;
  id?: number | string;
  slug: string;
  name: string;
  category?: string;
  brand?: string;
  description?: string;
  price: number;
  meta?: string;
  color?: string;
  darkColor?: string;
  colorName?: string;
  colors?: Array<{ name: string; hex?: string } | string>;
  sizes?: string[];
  featured?: boolean;
  image?: string;
  imageHover?: string;
  images?: string[];
  hem?: number;
  cuff?: number;
  svgExtra?: string;
}

export function mapBackendProduct(p: BackendProduct): Product {
  const images = Array.isArray(p.images) && p.images.length > 0
    ? p.images
    : ([p.image, p.imageHover].filter(Boolean) as string[]);

  const parsedColors: ProductColor[] = Array.isArray(p.colors) && p.colors.length > 0
    ? p.colors.map((c) =>
        typeof c === "string"
          ? { name: c, hex: "#1a1a1a" }
          : { name: c.name || "Black", hex: c.hex || "#1a1a1a" }
      )
    : p.colorName
    ? [{ name: p.colorName, hex: p.color || "#1a1a1a" }]
    : [];

  return {
    id: p._id || p.id || p.slug,
    slug: p.slug,
    name: p.name,
    brand: p.category || p.brand || "accessories",
    description: p.description || "",
    price: Number(p.price) || 0,
    meta: p.meta || "",
    color: p.color || "#1a1a1a",
    darkColor: p.darkColor || "#0f0f0f",
    colorName: p.colorName || "Black",
    colors: parsedColors,
    sizes: Array.isArray(p.sizes) ? p.sizes : ["S", "M", "L", "XL"],
    featured: Boolean(p.featured),
    image: p.image || images[0] || "/catalog/field-bomber.jpg",
    imageHover: p.imageHover || images[1] || p.image || images[0] || "/catalog/field-bomber.jpg",
    images,
    hem: typeof p.hem === "number" ? p.hem : 410,
    cuff: typeof p.cuff === "number" ? p.cuff : 418,
    svgExtra: p.svgExtra || "",
  };
}

export async function fetchLiveProducts(): Promise<Product[]> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${backendUrl}/api/products?limit=100`, {
      cache: "no-store",
    });
    if (!res.ok) return products;
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map(mapBackendProduct);
    }
  } catch {
    // If backend is unreachable, smoothly use static catalog fallback
  }
  return products;
}

export async function fetchLiveProductBySlug(slug: string): Promise<Product | undefined> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${backendUrl}/api/products/${slug}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return mapBackendProduct(json.data);
      }
    }
  } catch {
    // Fall back to local search
  }
  return getProduct(slug);
}

export async function fetchLiveProductsByBrand(brandSlug: string): Promise<Product[]> {
  const all = await fetchLiveProducts();
  const normalized = brandSlug.toLowerCase();
  return all.filter((p) => {
    const b = (p.brand || "").toLowerCase();
    if (normalized === "leather-haven-craft" || normalized === "leather-heaven-craft") {
      return b === "leather-haven-craft" || b === "leather-heaven-craft";
    }
    if (normalized === "accessory" || normalized === "accessories") {
      return b === "accessories" || b === "accessory";
    }
    return b === normalized;
  });
}

export async function fetchLiveFeaturedProducts(): Promise<Product[]> {
  const all = await fetchLiveProducts();
  return all.filter((p) => p.featured);
}

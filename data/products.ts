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
  category?: string;
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
  inStock?: boolean;
  /** Card photo (Cloudinary WebP CDN URL). */
  image: string;
  imagePublicId?: string;
  /** Second photo shown on hover (Cloudinary WebP CDN URL). */
  imageHover: string;
  imageHoverPublicId?: string;
  /** Multi-photo gallery images (Cloudinary WebP CDN URLs). */
  images?: string[];
  imagesPublicIds?: string[];
  /** Jacket hem, in SVG units. Longer coats sit lower. */
  hem: number;
  /** Sleeve cuff, in SVG units. */
  cuff: number;
  /** Extra marks: stitching, pockets, quilting. */
  svgExtra: string;
  /** Dedicated interactive scroll-model jacket overlay (WebP asset). */
  scrollJacketImage?: string;
}

/**
 * Lightweight offline/build fallback (5 flagship items).
 * Public pages dynamically query all products live from the backend API.
 */
export const products: Product[] = [
  {
    "id": 1,
    "name": "WWII Military Spec Heavy B-3 Sheepskin Shearling Bomber",
    "slug": "avirex-avirex-b-3-sheepskin-shearling-bomber-300-1",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    "color": "#3e271a",
    "darkColor": "#0a0a0a",
    "colorName": "Dark Brown",
    "colors": [
      {
        "name": "Dark Brown",
        "hex": "#3e271a"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "featured": true,
    "inStock": true,
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791162829/leatherhavencraft/catalog/avirex/300/1/qc2pxvyf5nl34bevvmlc.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/1/qc2pxvyf5nl34bevvmlc",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791162938/leatherhavencraft/catalog/avirex/300/1/o0qyqr0hhpn01kpcx4ol.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/1/o0qyqr0hhpn01kpcx4ol",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162829/leatherhavencraft/catalog/avirex/300/1/qc2pxvyf5nl34bevvmlc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162938/leatherhavencraft/catalog/avirex/300/1/o0qyqr0hhpn01kpcx4ol.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162822/leatherhavencraft/catalog/avirex/300/1/kv4wja2a0cfkdu1h3hgt.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162944/leatherhavencraft/catalog/avirex/300/1/mhg1obja9cexvliumql9.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162944/leatherhavencraft/catalog/avirex/300/1/taumbkrdbocadl4n8rpt.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162945/leatherhavencraft/catalog/avirex/300/1/ewo7wbvu3wgpzld2pczo.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162945/leatherhavencraft/catalog/avirex/300/1/sif3g3chkt7i3zfiopz6.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162946/leatherhavencraft/catalog/avirex/300/1/gblogozfbd7yh0p6n5iz.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162947/leatherhavencraft/catalog/avirex/300/1/j8rxeh9bfnewrhffd8v3.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162947/leatherhavencraft/catalog/avirex/300/1/vue9xrvrvazjfoiivxbx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162963/leatherhavencraft/catalog/avirex/300/1/toijma77xuoisgc9l5fz.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/1/qc2pxvyf5nl34bevvmlc",
      "leatherhavencraft/catalog/avirex/300/1/o0qyqr0hhpn01kpcx4ol",
      "leatherhavencraft/catalog/avirex/300/1/kv4wja2a0cfkdu1h3hgt",
      "leatherhavencraft/catalog/avirex/300/1/mhg1obja9cexvliumql9",
      "leatherhavencraft/catalog/avirex/300/1/taumbkrdbocadl4n8rpt",
      "leatherhavencraft/catalog/avirex/300/1/ewo7wbvu3wgpzld2pczo",
      "leatherhavencraft/catalog/avirex/300/1/sif3g3chkt7i3zfiopz6",
      "leatherhavencraft/catalog/avirex/300/1/gblogozfbd7yh0p6n5iz",
      "leatherhavencraft/catalog/avirex/300/1/j8rxeh9bfnewrhffd8v3",
      "leatherhavencraft/catalog/avirex/300/1/vue9xrvrvazjfoiivxbx",
      "leatherhavencraft/catalog/avirex/300/1/toijma77xuoisgc9l5fz"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 4,
    "name": "Heritage Speedway Racing Leather Jacket",
    "slug": "avirex-avirex-heritage-racing-leather-jacket-300-5",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    "color": "#1e1e1e",
    "darkColor": "#0a0a0a",
    "colorName": "Black & White",
    "colors": [
      {
        "name": "Black & White",
        "hex": "#1e1e1e"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "featured": false,
    "inStock": true,
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163073/leatherhavencraft/catalog/avirex/300/5/c3bsfkq7jqwpxenvtyqu.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/5/c3bsfkq7jqwpxenvtyqu",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163044/leatherhavencraft/catalog/avirex/300/5/ptmx2el25hkqxwjvd7n9.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/5/ptmx2el25hkqxwjvd7n9",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163073/leatherhavencraft/catalog/avirex/300/5/c3bsfkq7jqwpxenvtyqu.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163044/leatherhavencraft/catalog/avirex/300/5/ptmx2el25hkqxwjvd7n9.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163073/leatherhavencraft/catalog/avirex/300/5/djnhyij5heeej6zfdoiv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163090/leatherhavencraft/catalog/avirex/300/5/pzu1skvbz9gmepuf9nad.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163094/leatherhavencraft/catalog/avirex/300/5/mthq3lg4vizr51h813ja.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163095/leatherhavencraft/catalog/avirex/300/5/bcrl0yswagasdv2a5u7w.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163100/leatherhavencraft/catalog/avirex/300/5/ugtzkwe7yxp3w2wiji0z.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/5/c3bsfkq7jqwpxenvtyqu",
      "leatherhavencraft/catalog/avirex/300/5/ptmx2el25hkqxwjvd7n9",
      "leatherhavencraft/catalog/avirex/300/5/djnhyij5heeej6zfdoiv",
      "leatherhavencraft/catalog/avirex/300/5/pzu1skvbz9gmepuf9nad",
      "leatherhavencraft/catalog/avirex/300/5/mthq3lg4vizr51h813ja",
      "leatherhavencraft/catalog/avirex/300/5/bcrl0yswagasdv2a5u7w",
      "leatherhavencraft/catalog/avirex/300/5/ugtzkwe7yxp3w2wiji0z"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 21,
    "name": "Soda Club Archival Plush Leather Jacket — Vibrant Yellow",
    "slug": "pelle-pelle-pelle-pelle-soda-club-yellow-edition-350-4",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 350,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#c99a2c",
    "darkColor": "#0a0a0a",
    "colorName": "Mustard Yellow",
    "colors": [
      {
        "name": "Mustard Yellow",
        "hex": "#c99a2c"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "featured": false,
    "inStock": true,
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163574/leatherhavencraft/catalog/pelle-pelle/350/4/hxn4iqvi9hewprsbtemc.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/350/4/hxn4iqvi9hewprsbtemc",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163573/leatherhavencraft/catalog/pelle-pelle/350/4/rldlgsovdxjwqqmtk83j.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/350/4/rldlgsovdxjwqqmtk83j",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163574/leatherhavencraft/catalog/pelle-pelle/350/4/hxn4iqvi9hewprsbtemc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163573/leatherhavencraft/catalog/pelle-pelle/350/4/rldlgsovdxjwqqmtk83j.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163575/leatherhavencraft/catalog/pelle-pelle/350/4/yw1ycjepniwropyzts6x.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163576/leatherhavencraft/catalog/pelle-pelle/350/4/zyk6fnvac0ejmth2wuzw.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163578/leatherhavencraft/catalog/pelle-pelle/350/4/os6yucqqwzklqg1tx3fx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163579/leatherhavencraft/catalog/pelle-pelle/350/4/finaanaqdc9ajikifnkt.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163580/leatherhavencraft/catalog/pelle-pelle/350/4/il8lrgmmb7ssbc63nxjp.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163582/leatherhavencraft/catalog/pelle-pelle/350/4/pqiyeonvpsy5o8fnptsk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163582/leatherhavencraft/catalog/pelle-pelle/350/4/n5ysoiv2nqottbotjwmi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163584/leatherhavencraft/catalog/pelle-pelle/350/4/oi6cp19mu0ofgzkifgsg.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163584/leatherhavencraft/catalog/pelle-pelle/350/4/j5sx6hn5hzbpotaxjljg.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/350/4/hxn4iqvi9hewprsbtemc",
      "leatherhavencraft/catalog/pelle-pelle/350/4/rldlgsovdxjwqqmtk83j",
      "leatherhavencraft/catalog/pelle-pelle/350/4/yw1ycjepniwropyzts6x",
      "leatherhavencraft/catalog/pelle-pelle/350/4/zyk6fnvac0ejmth2wuzw",
      "leatherhavencraft/catalog/pelle-pelle/350/4/os6yucqqwzklqg1tx3fx",
      "leatherhavencraft/catalog/pelle-pelle/350/4/finaanaqdc9ajikifnkt",
      "leatherhavencraft/catalog/pelle-pelle/350/4/il8lrgmmb7ssbc63nxjp",
      "leatherhavencraft/catalog/pelle-pelle/350/4/pqiyeonvpsy5o8fnptsk",
      "leatherhavencraft/catalog/pelle-pelle/350/4/n5ysoiv2nqottbotjwmi",
      "leatherhavencraft/catalog/pelle-pelle/350/4/oi6cp19mu0ofgzkifgsg",
      "leatherhavencraft/catalog/pelle-pelle/350/4/j5sx6hn5hzbpotaxjljg"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 22,
    "name": "Archival Plush Leather Bomber — Burgundy Edition",
    "slug": "pelle-pelle-pelle-pelle-burgundy-plush-edition-350-5",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 350,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#5c1324",
    "darkColor": "#0a0a0a",
    "colorName": "Burgundy Red",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#5c1324"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "featured": false,
    "inStock": true,
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163586/leatherhavencraft/catalog/pelle-pelle/350/5/ecuswk2altqqzppbqwsw.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/350/5/ecuswk2altqqzppbqwsw",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163587/leatherhavencraft/catalog/pelle-pelle/350/5/lxaga1hyw88yyrts3rom.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/350/5/lxaga1hyw88yyrts3rom",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163586/leatherhavencraft/catalog/pelle-pelle/350/5/ecuswk2altqqzppbqwsw.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163587/leatherhavencraft/catalog/pelle-pelle/350/5/lxaga1hyw88yyrts3rom.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163588/leatherhavencraft/catalog/pelle-pelle/350/5/f35czowqp1kpomagzq8a.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163588/leatherhavencraft/catalog/pelle-pelle/350/5/vnbb1guni1y5zsg3mh1e.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163590/leatherhavencraft/catalog/pelle-pelle/350/5/zpcqxjf24vhnbahn7j43.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/350/5/ecuswk2altqqzppbqwsw",
      "leatherhavencraft/catalog/pelle-pelle/350/5/lxaga1hyw88yyrts3rom",
      "leatherhavencraft/catalog/pelle-pelle/350/5/f35czowqp1kpomagzq8a",
      "leatherhavencraft/catalog/pelle-pelle/350/5/vnbb1guni1y5zsg3mh1e",
      "leatherhavencraft/catalog/pelle-pelle/350/5/zpcqxjf24vhnbahn7j43"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 46,
    "name": "Collector Heavyweight Plush Leather Jacket #2",
    "slug": "pelle-pelle-pelle-pelle-collector-heavyweight-plush-2-500-2",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 500,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#1a1a1a",
    "darkColor": "#0a0a0a",
    "colorName": "Classic Black",
    "colors": [
      {
        "name": "Classic Black",
        "hex": "#1a1a1a"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "featured": true,
    "inStock": true,
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163768/leatherhavencraft/catalog/pelle-pelle/500/2/bjfegthniso1srqwnkua.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/500/2/bjfegthniso1srqwnkua",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163767/leatherhavencraft/catalog/pelle-pelle/500/2/hgevhhcmr8oqebwyte38.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/500/2/hgevhhcmr8oqebwyte38",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163768/leatherhavencraft/catalog/pelle-pelle/500/2/bjfegthniso1srqwnkua.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163767/leatherhavencraft/catalog/pelle-pelle/500/2/hgevhhcmr8oqebwyte38.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163769/leatherhavencraft/catalog/pelle-pelle/500/2/ikp9hb33p427joetpcii.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163770/leatherhavencraft/catalog/pelle-pelle/500/2/zco2xfqeovfaz36mryfk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163771/leatherhavencraft/catalog/pelle-pelle/500/2/agzil8gxughezydlbfgz.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163771/leatherhavencraft/catalog/pelle-pelle/500/2/edyhcjqrr7nguethbm4u.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163773/leatherhavencraft/catalog/pelle-pelle/500/2/xugfi6avowvyazeucrnh.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163773/leatherhavencraft/catalog/pelle-pelle/500/2/d5ayhegbycmjexj3crvm.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/500/2/bjfegthniso1srqwnkua",
      "leatherhavencraft/catalog/pelle-pelle/500/2/hgevhhcmr8oqebwyte38",
      "leatherhavencraft/catalog/pelle-pelle/500/2/ikp9hb33p427joetpcii",
      "leatherhavencraft/catalog/pelle-pelle/500/2/zco2xfqeovfaz36mryfk",
      "leatherhavencraft/catalog/pelle-pelle/500/2/agzil8gxughezydlbfgz",
      "leatherhavencraft/catalog/pelle-pelle/500/2/edyhcjqrr7nguethbm4u",
      "leatherhavencraft/catalog/pelle-pelle/500/2/xugfi6avowvyazeucrnh",
      "leatherhavencraft/catalog/pelle-pelle/500/2/d5ayhegbycmjexj3crvm"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug) || scrollModelProducts.find((p) => p.slug === slug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brand === brandSlug);
}

export function getBrandLabel(slug: string): string {
  return getBrand(slug)?.name ?? slug;
}

export function getFeaturedProducts(): Product[] {
  const featured = products.filter((p) => p.featured);
  return featured.length > 0 ? featured : products.slice(0, 5);
}

export function getAllColors(): string[] {
  const set = new Set<string>();
  for (const p of products) {
    if (p.colorName) set.add(p.colorName);
  }
  return Array.from(set);
}

export type PaginatedResponse = {
  products: Product[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type ProductQueryParams = {
  page?: number;
  limit?: number;
  category?: string;
  brand?: string;
  cut?: string;
  size?: string;
  color?: string;
  sort?: string;
  search?: string;
};

export function getProductCategory(product: Product): string {
  if (
    product.category &&
    ![
      "avirex",
      "pelle-pelle",
      "schott-nyc",
      "harley-davidson",
      "supreme",
      "leather-haven-craft",
      "accessories",
      "others",
    ].includes(product.category.toLowerCase())
  ) {
    return product.category;
  }
  const name = (product.name || "").toLowerCase();
  if (name.includes("hoodie") || name.includes("hooded")) return "Hoodies";
  if (name.includes("jersey")) return "Jerseys";
  if (name.includes("t-shirt") || name.includes("tee")) return "T-Shirts";
  if (
    name.includes("bomber") ||
    name.includes("b-3") ||
    name.includes("flight") ||
    name.includes("pilot") ||
    name.includes("shearling")
  ) {
    return "Bomber Jackets";
  }
  if (
    name.includes("racing") ||
    name.includes("speedway") ||
    name.includes("moto") ||
    name.includes("biker") ||
    name.includes("rider")
  ) {
    return "Racing & Moto";
  }
  if (
    product.brand === "accessories" ||
    name.includes("belt") ||
    name.includes("wallet") ||
    name.includes("glove")
  ) {
    return "Accessories";
  }
  return "Coats & Jackets";
}

export function getBaseColor(colorName?: string): string {
  if (!colorName) return "Black";
  const c = colorName.toLowerCase();
  if (c.includes("black")) return "Black";
  if (c.includes("brown") || c.includes("espresso") || c.includes("tan")) return "Brown";
  if (c.includes("navy") || c.includes("blue")) return "Navy";
  if (c.includes("yellow") || c.includes("mustard")) return "Yellow";
  if (c.includes("burgundy") || c.includes("crimson") || c.includes("red")) return "Burgundy & Red";
  if (c.includes("olive") || c.includes("green")) return "Olive Green";
  if (c.includes("grey") || c.includes("gray") || c.includes("ash")) return "Grey";
  if (c.includes("cream") || c.includes("white") || c.includes("ivory")) return "Cream & White";
  return colorName;
}

export interface RawProductData {
  _id?: string;
  id?: string;
  slug?: string;
  name?: string;
  category?: string;
  description?: string;
  price?: number;
  meta?: string;
  color?: string;
  darkColor?: string;
  colorName?: string;
  colors?: { name: string; hex: string }[];
  sizes?: string[];
  featured?: boolean;
  image?: string;
  imagePublicId?: string;
  imageHover?: string;
  imageHoverPublicId?: string;
  images?: string[];
  imagesPublicIds?: string[];
  hem?: number;
  cuff?: number;
  svgExtra?: string;
}

export function mapRawProduct(raw: RawProductData): Product {
  return {
    id: raw._id || raw.id || "",
    slug: raw.slug || "",
    name: raw.name || "",
    brand: raw.category || "leather-haven-craft",
    description: raw.description || "",
    price: raw.price || 0,
    meta: raw.meta || "",
    color: raw.color || "#1a1a1a",
    darkColor: raw.darkColor || "#0f0f0f",
    colorName: raw.colorName || "Black",
    colors:
      Array.isArray(raw.colors) && raw.colors.length > 0
        ? raw.colors
        : [{ name: raw.colorName || "Black", hex: raw.color || "#1a1a1a" }],
    sizes:
      Array.isArray(raw.sizes) && raw.sizes.length > 0
        ? raw.sizes
        : ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: Boolean(raw.featured),
    image: raw.image || "",
    imagePublicId: raw.imagePublicId,
    imageHover: raw.imageHover || raw.image || "",
    imageHoverPublicId: raw.imageHoverPublicId,
    images:
      Array.isArray(raw.images) && raw.images.length > 0
        ? raw.images
        : ([raw.image, raw.imageHover].filter(Boolean) as string[]),
    imagesPublicIds: raw.imagesPublicIds || [],
    hem: raw.hem || 410,
    cuff: raw.cuff || 418,
    svgExtra: raw.svgExtra || "",
  };
}

export async function fetchPaginatedProducts(
  params: ProductQueryParams = {}
): Promise<PaginatedResponse> {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://api.leatherhavencraft.com"
      : "http://localhost:5000");
  const { page = 1, limit = 16, category, brand, cut, size, color, sort, search } = params;

  const sp = new URLSearchParams();
  sp.set("page", String(page));
  sp.set("limit", String(limit));

  const brandSlugs = [
    "leather-haven-craft",
    "avirex",
    "pelle-pelle",
    "harley-davidson",
    "schott-nyc",
    "supreme",
    "accessories",
    "others",
  ];

  if (brand && brand !== "all") {
    sp.set("brand", brand);
    sp.set("category", brand);
  }

  if (cut && cut !== "all") {
    sp.set("cut", cut);
  }

  if (category && category !== "all") {
    if (brandSlugs.includes(category.toLowerCase())) {
      sp.set("brand", category.toLowerCase());
      sp.set("category", category.toLowerCase());
    } else {
      sp.set("cut", category);
      if (!sp.has("category")) {
        sp.set("category", category);
      }
    }
  }

  if (size && size !== "all") sp.set("size", size);
  if (color && color !== "all") sp.set("color", color);
  if (sort && sort !== "featured") sp.set("sort", sort);
  if (search && search.trim()) sp.set("search", search.trim());

  try {
    let res = await fetch(`${backendUrl}/api/products?${sp.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok && !backendUrl.includes("localhost:5000")) {
      try {
        const localRes = await fetch(`http://localhost:5000/api/products?${sp.toString()}`, {
          cache: "no-store",
        });
        if (localRes.ok) res = localRes;
      } catch {
        // local backend not reachable
      }
    }

    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const mapped = json.data.map(mapRawProduct);
        const total = json.pagination?.total ?? mapped.length;
        return {
          products: mapped,
          pagination: {
            total,
            page: json.pagination?.page ?? page,
            limit: json.pagination?.limit ?? limit,
            totalPages: json.pagination?.totalPages ?? (Math.ceil(total / limit) || 1),
          },
        };
      }
    }
  } catch (err) {
    if (!backendUrl.includes("localhost:5000")) {
      try {
        const localRes = await fetch(`http://localhost:5000/api/products?${sp.toString()}`, {
          cache: "no-store",
        });
        if (localRes.ok) {
          const json = await localRes.json();
          if (json.success && Array.isArray(json.data)) {
            const mapped = json.data.map(mapRawProduct);
            const total = json.pagination?.total ?? mapped.length;
            return {
              products: mapped,
              pagination: {
                total,
                page: json.pagination?.page ?? page,
                limit: json.pagination?.limit ?? limit,
                totalPages: json.pagination?.totalPages ?? (Math.ceil(total / limit) || 1),
              },
            };
          }
        }
      } catch {
        // ignore
      }
    }
    console.error("[fetchPaginatedProducts error]", err);
  }

  // Fallback if backend is unreachable
  const brandFilter = sp.get("brand");
  const cutFilter = sp.get("cut");
  const filtered = products.filter((p) => {
    if (brandFilter && p.brand !== brandFilter) return false;
    if (cutFilter && getProductCategory(p) !== cutFilter) return false;
    if (size && size !== "all" && !(p.sizes || []).includes(size)) return false;
    if (color && color !== "all" && getBaseColor(p.colorName) !== color) return false;
    return true;
  });

  const start = (page - 1) * limit;
  const sliced = filtered.slice(start, start + limit);

  return {
    products: sliced,
    pagination: {
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit) || 1,
    },
  };
}

export async function fetchLiveProducts(category?: string): Promise<Product[]> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  try {
    const url =
      category && category !== "all"
        ? `${backendUrl}/api/products?category=${category}&limit=100`
        : `${backendUrl}/api/products?limit=100`;
    const res = await fetch(url, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        return json.data.map(mapRawProduct);
      }
    }
  } catch {
    // Fallback to static catalog
  }
  return category && category !== "all"
    ? products.filter((p) => p.brand === category)
    : products;
}

export async function fetchLiveProductBySlug(slug: string): Promise<Product | undefined> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${backendUrl}/api/products/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        const raw = json.data;
        return {
          id: raw._id || raw.id,
          slug: raw.slug,
          name: raw.name,
          brand: raw.category,
          description: raw.description,
          price: raw.price,
          meta: raw.meta || "",
          color: raw.color || "#1a1a1a",
          darkColor: raw.darkColor || "#0f0f0f",
          colorName: raw.colorName || "Black",
          colors: Array.isArray(raw.colors) && raw.colors.length > 0 ? raw.colors : [{ name: raw.colorName || "Black", hex: raw.color || "#1a1a1a" }],
          sizes: Array.isArray(raw.sizes) && raw.sizes.length > 0 ? raw.sizes : ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
          featured: Boolean(raw.featured),
          image: raw.image,
          imagePublicId: raw.imagePublicId,
          imageHover: raw.imageHover || raw.image,
          imageHoverPublicId: raw.imageHoverPublicId,
          images: Array.isArray(raw.images) && raw.images.length > 0 ? raw.images : [raw.image, raw.imageHover].filter(Boolean),
          imagesPublicIds: raw.imagesPublicIds || [],
          hem: raw.hem || 410,
          cuff: raw.cuff || 418,
          svgExtra: raw.svgExtra || "",
        };
      }
    }
  } catch {
    // Fallback
  }
  return getProduct(slug);
}

export async function fetchLiveProductsByBrand(brandSlug: string): Promise<Product[]> {
  return fetchLiveProducts(brandSlug);
}

export async function fetchLiveFeaturedProducts(): Promise<Product[]> {
  const live = await fetchLiveProducts();
  const featured = live.filter((p) => p.featured);
  return featured.length > 0 ? featured : live.slice(0, 8);
}


export const scrollModelProducts: Product[] = [
  {
    id: "scroll-1",
    name: "WWII Military Spec Heavy B-3 Sheepskin Shearling Bomber",
    slug: "avirex-avirex-b-3-sheepskin-shearling-bomber-300-1",
    brand: "avirex",
    category: "avirex",
    description: "Historical WWII flight jacket bench-crafted from 20mm genuine merino shearling pelts with antiqued steerhide welts, dual throat latch buckles, and heavy brass zippers.",
    price: 300,
    meta: "Heavy 20mm shearling sheepskin pelt, double buckle collar & brass hardware",
    color: "#4a3528",
    darkColor: "#d4a373",
    colorName: "Aged Brown / Cream Shearling",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "/scroll-model/jacket-1.png",
    imageHover: "/scroll-model/jacket-1.png",
    hem: 410,
    cuff: 418,
    svgExtra: "",
    scrollJacketImage: "/scroll-model/jacket-1.webp",
  },
  {
    id: "scroll-2",
    name: "Heritage Crocodile-Embossed Leather Bomber",
    slug: "avirex-crocodile-embossed-leather-bomber",
    brand: "avirex",
    category: "avirex",
    description: "Luxury archive tribute crafted from textured crocodile-embossed top-grain leather featuring the historic Avirex USA leather chest crest, antique brass hardware, and heavy rib-knit trim.",
    price: 300,
    meta: "Embossed crocodile calfskin, Avirex USA chest badge & ribbed wool hem",
    color: "#5c3a21",
    darkColor: "#2a1810",
    colorName: "Cognac Brown",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "/scroll-model/jacket-2.png",
    imageHover: "/scroll-model/jacket-2.png",
    hem: 410,
    cuff: 418,
    svgExtra: "",
    scrollJacketImage: "/scroll-model/jacket-2.webp",
  },
  {
    id: "scroll-3",
    name: "Soda Club 'New York' Archival Plush Leather Jacket",
    slug: "pelle-pelle-new-york-knicks-plush-leather-jacket",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Handcrafted master tribute in supple full-grain lambskin with iconic New York chenille lettering, basketball embroidery, and Marc Buchanan atelier crest patches.",
    price: 350,
    meta: "Supple full-grain lambskin, custom chenille & Marc Buchanan crest",
    color: "#e66012",
    darkColor: "#1d4486",
    colorName: "Orange / Royal Blue",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "/scroll-model/jacket-3.png",
    imageHover: "/scroll-model/jacket-3.png",
    hem: 410,
    cuff: 418,
    svgExtra: "",
    scrollJacketImage: "/scroll-model/jacket-3.webp",
  },
  {
    id: "scroll-4",
    name: "Bar & Shield Racing Leather Jacket",
    slug: "harley-davidson-racing-leather-jacket",
    brand: "harley-davidson",
    category: "harley-davidson",
    description: "Classic track-cut motorcycle jacket handcrafted in heavyweight 1.4mm steerhide featuring high-contrast orange and white racing chest stripes and mandarin snap collar.",
    price: 300,
    meta: "Heavyweight 1.4mm steerhide, twin racing stripes & cafe collar",
    color: "#1a1a1a",
    darkColor: "#ea580c",
    colorName: "Black / Orange",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "/scroll-model/jacket-4.png",
    imageHover: "/scroll-model/jacket-4.png",
    hem: 410,
    cuff: 418,
    svgExtra: "",
    scrollJacketImage: "/scroll-model/jacket-4.webp",
  },
  {
    id: "scroll-5",
    name: "Ghost Rider Flames & Chains Leather Jacket",
    slug: "supreme-vanson-ghost-rider-leather-jacket",
    brand: "supreme",
    category: "supreme",
    description: "Cult collaboration tribute built in heavy competition steerhide featuring intricate hand-cut flame appliqués, embroidered chains, Ghost Rider skull centerpiece, and Vanson/Supreme sleeve patches.",
    price: 350,
    meta: "Competition-weight steerhide, custom flame appliqués & Talon hardware",
    color: "#f59e0b",
    darkColor: "#1a1a1a",
    colorName: "Yellow / Black Flames",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "/scroll-model/jacket-5.png",
    imageHover: "/scroll-model/jacket-5.png",
    hem: 410,
    cuff: 418,
    svgExtra: "",
    scrollJacketImage: "/scroll-model/jacket-5.webp",
  },
];

export async function fetchLiveScrollProducts(limit = 5): Promise<Product[]> {
  return scrollModelProducts.slice(0, limit);
}


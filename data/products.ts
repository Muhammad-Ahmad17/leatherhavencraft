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
  /** Card photo. */
  image: string;
  /** Second photo shown on hover. */
  imageHover: string;
  /** Multi-photo gallery images. */
  images?: string[];
  /** Jacket hem, in SVG units. Longer coats sit lower. */
  hem: number;
  /** Sleeve cuff, in SVG units. */
  cuff: number;
  /** Extra marks: stitching, pockets, quilting. */
  svgExtra: string;
}

export const products: Product[] = [
  {
    "id": 1,
    "slug": "avirex-avirex-b-3-sheepskin-shearling-bomber-300-1",
    "name": "Avirex B-3 Sheepskin Shearling Bomber",
    "brand": "avirex",
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
    "image": "/catalog/items/avirex/300/1/01.jpg",
    "imageHover": "/catalog/items/avirex/300/1/02.jpg",
    "images": [
      "/catalog/items/avirex/300/1/01.jpg",
      "/catalog/items/avirex/300/1/02.jpg",
      "/catalog/items/avirex/300/1/03.jpg",
      "/catalog/items/avirex/300/1/04.jpg",
      "/catalog/items/avirex/300/1/05.jpg",
      "/catalog/items/avirex/300/1/06.jpg",
      "/catalog/items/avirex/300/1/07.jpg",
      "/catalog/items/avirex/300/1/08.jpg",
      "/catalog/items/avirex/300/1/09.webp",
      "/catalog/items/avirex/300/1/10.webp",
      "/catalog/items/avirex/300/1/11.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 2,
    "slug": "avirex-avirex-b-3-sheepskin-shearling-bomber-300-2",
    "name": "Avirex B-3 Sheepskin Shearling Bomber",
    "brand": "avirex",
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
    "image": "/catalog/items/avirex/300/2/01.jpg",
    "imageHover": "/catalog/items/avirex/300/2/02.jpg",
    "images": [
      "/catalog/items/avirex/300/2/01.jpg",
      "/catalog/items/avirex/300/2/02.jpg",
      "/catalog/items/avirex/300/2/03.jpg",
      "/catalog/items/avirex/300/2/04.jpg",
      "/catalog/items/avirex/300/2/05.jpg",
      "/catalog/items/avirex/300/2/06.jpg",
      "/catalog/items/avirex/300/2/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 3,
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-4-300-4",
    "name": "Avirex Icon Squadron Pilot Jacket #4",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/300/4/01.jpg",
    "imageHover": "/catalog/items/avirex/300/4/02.jpg",
    "images": [
      "/catalog/items/avirex/300/4/01.jpg",
      "/catalog/items/avirex/300/4/02.jpg",
      "/catalog/items/avirex/300/4/03.jpg",
      "/catalog/items/avirex/300/4/04.jpg",
      "/catalog/items/avirex/300/4/05.jpg",
      "/catalog/items/avirex/300/4/06.jpg",
      "/catalog/items/avirex/300/4/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 4,
    "slug": "avirex-avirex-heritage-racing-leather-jacket-300-5",
    "name": "Avirex Heritage Racing Leather Jacket",
    "brand": "avirex",
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
    "image": "/catalog/items/avirex/300/5/01.png",
    "imageHover": "/catalog/items/avirex/300/5/02.png",
    "images": [
      "/catalog/items/avirex/300/5/01.png",
      "/catalog/items/avirex/300/5/02.png",
      "/catalog/items/avirex/300/5/03.png",
      "/catalog/items/avirex/300/5/04.png",
      "/catalog/items/avirex/300/5/05.png",
      "/catalog/items/avirex/300/5/06.png",
      "/catalog/items/avirex/300/5/07.png"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 5,
    "slug": "avirex-avirex-icon-flight-leather-jacket-6-300-6",
    "name": "Avirex Icon Flight Leather Jacket #6",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/300/6/01.webp",
    "imageHover": "/catalog/items/avirex/300/6/02.webp",
    "images": [
      "/catalog/items/avirex/300/6/01.webp",
      "/catalog/items/avirex/300/6/02.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 6,
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-7-300-7",
    "name": "Avirex Icon Squadron Pilot Jacket #7",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/300/7/01.jpg",
    "imageHover": "/catalog/items/avirex/300/7/02.jpg",
    "images": [
      "/catalog/items/avirex/300/7/01.jpg",
      "/catalog/items/avirex/300/7/02.jpg",
      "/catalog/items/avirex/300/7/03.jpg",
      "/catalog/items/avirex/300/7/04.jpg",
      "/catalog/items/avirex/300/7/05.jpg",
      "/catalog/items/avirex/300/7/06.jpg",
      "/catalog/items/avirex/300/7/07.jpg",
      "/catalog/items/avirex/300/7/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 7,
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-8-300-8",
    "name": "Avirex Icon Squadron Pilot Jacket #8",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/300/8/01.jpg",
    "imageHover": "/catalog/items/avirex/300/8/02.jpg",
    "images": [
      "/catalog/items/avirex/300/8/01.jpg",
      "/catalog/items/avirex/300/8/02.jpg",
      "/catalog/items/avirex/300/8/03.jpg",
      "/catalog/items/avirex/300/8/04.jpg",
      "/catalog/items/avirex/300/8/05.jpg",
      "/catalog/items/avirex/300/8/06.jpg",
      "/catalog/items/avirex/300/8/07.jpg",
      "/catalog/items/avirex/300/8/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 8,
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-9-300-9",
    "name": "Avirex Icon Squadron Pilot Jacket #9",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/300/9/01.jpg",
    "imageHover": "/catalog/items/avirex/300/9/02.jpg",
    "images": [
      "/catalog/items/avirex/300/9/01.jpg",
      "/catalog/items/avirex/300/9/02.jpg",
      "/catalog/items/avirex/300/9/03.jpg",
      "/catalog/items/avirex/300/9/04.jpg",
      "/catalog/items/avirex/300/9/05.jpg",
      "/catalog/items/avirex/300/9/06.jpg",
      "/catalog/items/avirex/300/9/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 9,
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-10-300-10",
    "name": "Avirex Icon Squadron Pilot Jacket #10",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/300/10/01.jpg",
    "imageHover": "/catalog/items/avirex/300/10/02.jpg",
    "images": [
      "/catalog/items/avirex/300/10/01.jpg",
      "/catalog/items/avirex/300/10/02.jpg",
      "/catalog/items/avirex/300/10/03.jpg",
      "/catalog/items/avirex/300/10/04.jpg",
      "/catalog/items/avirex/300/10/05.jpg",
      "/catalog/items/avirex/300/10/06.jpg",
      "/catalog/items/avirex/300/10/07.jpg",
      "/catalog/items/avirex/300/10/08.webp",
      "/catalog/items/avirex/300/10/09.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 10,
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-11-300-11",
    "name": "Avirex Icon Squadron Pilot Jacket #11",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 300,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/300/11/01.jpg",
    "imageHover": "/catalog/items/avirex/300/11/02.jpg",
    "images": [
      "/catalog/items/avirex/300/11/01.jpg",
      "/catalog/items/avirex/300/11/02.jpg",
      "/catalog/items/avirex/300/11/03.jpg",
      "/catalog/items/avirex/300/11/04.jpg",
      "/catalog/items/avirex/300/11/05.jpg",
      "/catalog/items/avirex/300/11/06.jpg",
      "/catalog/items/avirex/300/11/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 11,
    "slug": "avirex-avirex-limited-edition-flight-jacket-1-450-1",
    "name": "Avirex Limited Edition Flight Jacket #1",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 450,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "image": "/catalog/items/avirex/450/1/01.png",
    "imageHover": "/catalog/items/avirex/450/1/02.png",
    "images": [
      "/catalog/items/avirex/450/1/01.png",
      "/catalog/items/avirex/450/1/02.png",
      "/catalog/items/avirex/450/1/03.png",
      "/catalog/items/avirex/450/1/04.png",
      "/catalog/items/avirex/450/1/05.png",
      "/catalog/items/avirex/450/1/06.png"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 12,
    "slug": "avirex-avirex-limited-tactical-bomber-2-450-2",
    "name": "Avirex Limited Tactical Bomber #2",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 450,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "image": "/catalog/items/avirex/450/2/01.jpg",
    "imageHover": "/catalog/items/avirex/450/2/02.jpg",
    "images": [
      "/catalog/items/avirex/450/2/01.jpg",
      "/catalog/items/avirex/450/2/02.jpg",
      "/catalog/items/avirex/450/2/03.jpg",
      "/catalog/items/avirex/450/2/04.jpg",
      "/catalog/items/avirex/450/2/05.jpg",
      "/catalog/items/avirex/450/2/06.jpg",
      "/catalog/items/avirex/450/2/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 13,
    "slug": "avirex-avirex-limited-edition-flight-jacket-3-450-3",
    "name": "Avirex Limited Edition Flight Jacket #3",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 450,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/450/3/01.webp",
    "imageHover": "/catalog/items/avirex/450/3/02.webp",
    "images": [
      "/catalog/items/avirex/450/3/01.webp",
      "/catalog/items/avirex/450/3/02.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 14,
    "slug": "avirex-avirex-limited-edition-flight-jacket-4-450-4",
    "name": "Avirex Limited Edition Flight Jacket #4",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 450,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/450/4/01.jpg",
    "imageHover": "/catalog/items/avirex/450/4/02.jpg",
    "images": [
      "/catalog/items/avirex/450/4/01.jpg",
      "/catalog/items/avirex/450/4/02.jpg",
      "/catalog/items/avirex/450/4/03.jpg",
      "/catalog/items/avirex/450/4/04.jpg",
      "/catalog/items/avirex/450/4/05.jpg",
      "/catalog/items/avirex/450/4/06.jpg",
      "/catalog/items/avirex/450/4/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 15,
    "slug": "avirex-avirex-limited-edition-flight-jacket-5-450-5",
    "name": "Avirex Limited Edition Flight Jacket #5",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 450,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/450/5/01.jpg",
    "imageHover": "/catalog/items/avirex/450/5/02.jpg",
    "images": [
      "/catalog/items/avirex/450/5/01.jpg",
      "/catalog/items/avirex/450/5/02.jpg",
      "/catalog/items/avirex/450/5/03.jpg",
      "/catalog/items/avirex/450/5/04.jpg",
      "/catalog/items/avirex/450/5/05.jpg",
      "/catalog/items/avirex/450/5/06.jpg",
      "/catalog/items/avirex/450/5/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 16,
    "slug": "avirex-avirex-limited-edition-flight-jacket-6-450-6",
    "name": "Avirex Limited Edition Flight Jacket #6",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 450,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/450/6/01.jpg",
    "imageHover": "/catalog/items/avirex/450/6/02.jpg",
    "images": [
      "/catalog/items/avirex/450/6/01.jpg",
      "/catalog/items/avirex/450/6/02.jpg",
      "/catalog/items/avirex/450/6/03.jpg",
      "/catalog/items/avirex/450/6/04.jpg",
      "/catalog/items/avirex/450/6/05.jpg",
      "/catalog/items/avirex/450/6/06.jpg",
      "/catalog/items/avirex/450/6/07.jpg",
      "/catalog/items/avirex/450/6/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 17,
    "slug": "avirex-avirex-limited-edition-flight-jacket-7-450-7",
    "name": "Avirex Limited Edition Flight Jacket #7",
    "brand": "avirex",
    "category": "avirex",
    "description": "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    "price": 450,
    "meta": "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/avirex/450/7/01.jpg",
    "imageHover": "/catalog/items/avirex/450/7/02.webp",
    "images": [
      "/catalog/items/avirex/450/7/01.jpg",
      "/catalog/items/avirex/450/7/02.webp",
      "/catalog/items/avirex/450/7/03.webp",
      "/catalog/items/avirex/450/7/04.webp",
      "/catalog/items/avirex/450/7/05.jpg",
      "/catalog/items/avirex/450/7/06.jpg",
      "/catalog/items/avirex/450/7/07.jpg",
      "/catalog/items/avirex/450/7/08.jpg",
      "/catalog/items/avirex/450/7/09.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 18,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-1-350-1",
    "name": "Pelle Pelle Limited Edition Plush Jacket #1",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 350,
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
    "image": "/catalog/items/pelle-pelle/350/1/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/350/1/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/350/1/01.webp",
      "/catalog/items/pelle-pelle/350/1/02.webp",
      "/catalog/items/pelle-pelle/350/1/03.webp",
      "/catalog/items/pelle-pelle/350/1/04.webp",
      "/catalog/items/pelle-pelle/350/1/05.webp",
      "/catalog/items/pelle-pelle/350/1/06.webp",
      "/catalog/items/pelle-pelle/350/1/07.webp",
      "/catalog/items/pelle-pelle/350/1/08.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 19,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-2-350-2",
    "name": "Pelle Pelle Limited Edition Plush Jacket #2",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 350,
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
    "image": "/catalog/items/pelle-pelle/350/2/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/350/2/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/350/2/01.webp",
      "/catalog/items/pelle-pelle/350/2/02.webp",
      "/catalog/items/pelle-pelle/350/2/03.webp",
      "/catalog/items/pelle-pelle/350/2/04.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 20,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-3-350-3",
    "name": "Pelle Pelle Limited Edition Plush Jacket #3",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 350,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/350/3/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/350/3/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/350/3/01.webp",
      "/catalog/items/pelle-pelle/350/3/02.webp",
      "/catalog/items/pelle-pelle/350/3/03.webp",
      "/catalog/items/pelle-pelle/350/3/04.webp",
      "/catalog/items/pelle-pelle/350/3/05.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 21,
    "slug": "pelle-pelle-pelle-pelle-soda-club-yellow-edition-350-4",
    "name": "Pelle Pelle Soda Club Yellow Edition",
    "brand": "pelle-pelle",
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
    "image": "/catalog/items/pelle-pelle/350/4/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/350/4/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/350/4/01.jpg",
      "/catalog/items/pelle-pelle/350/4/02.webp",
      "/catalog/items/pelle-pelle/350/4/03.webp",
      "/catalog/items/pelle-pelle/350/4/04.jpg",
      "/catalog/items/pelle-pelle/350/4/05.jpg",
      "/catalog/items/pelle-pelle/350/4/06.jpg",
      "/catalog/items/pelle-pelle/350/4/07.jpg",
      "/catalog/items/pelle-pelle/350/4/08.jpg",
      "/catalog/items/pelle-pelle/350/4/09.jpg",
      "/catalog/items/pelle-pelle/350/4/10.jpg",
      "/catalog/items/pelle-pelle/350/4/11.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 22,
    "slug": "pelle-pelle-pelle-pelle-burgundy-plush-edition-350-5",
    "name": "Pelle Pelle Burgundy Plush Edition",
    "brand": "pelle-pelle",
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
    "image": "/catalog/items/pelle-pelle/350/5/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/350/5/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/350/5/01.jpg",
      "/catalog/items/pelle-pelle/350/5/02.jpg",
      "/catalog/items/pelle-pelle/350/5/03.jpg",
      "/catalog/items/pelle-pelle/350/5/04.jpg",
      "/catalog/items/pelle-pelle/350/5/05.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 23,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-6-350-6",
    "name": "Pelle Pelle Limited Edition Plush Jacket #6",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 350,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/350/6/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/350/6/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/350/6/01.jpg",
      "/catalog/items/pelle-pelle/350/6/02.jpg",
      "/catalog/items/pelle-pelle/350/6/03.jpg",
      "/catalog/items/pelle-pelle/350/6/04.jpg",
      "/catalog/items/pelle-pelle/350/6/05.jpg",
      "/catalog/items/pelle-pelle/350/6/06.jpg",
      "/catalog/items/pelle-pelle/350/6/07.jpg",
      "/catalog/items/pelle-pelle/350/6/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 24,
    "slug": "pelle-pelle-pelle-pelle-midnight-navy-plush-edition-350-7",
    "name": "Pelle Pelle Midnight Navy Plush Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 350,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#1b263b",
    "darkColor": "#0a0a0a",
    "colorName": "Midnight Navy",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#1b263b"
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
    "image": "/catalog/items/pelle-pelle/350/7/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/350/7/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/350/7/01.jpg",
      "/catalog/items/pelle-pelle/350/7/02.jpg",
      "/catalog/items/pelle-pelle/350/7/03.jpg",
      "/catalog/items/pelle-pelle/350/7/04.jpg",
      "/catalog/items/pelle-pelle/350/7/05.jpg",
      "/catalog/items/pelle-pelle/350/7/06.jpg",
      "/catalog/items/pelle-pelle/350/7/07.jpg",
      "/catalog/items/pelle-pelle/350/7/08.jpg",
      "/catalog/items/pelle-pelle/350/7/09.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 25,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-1-450-1",
    "name": "Pelle Pelle Limited Edition Plush Jacket #1",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "image": "/catalog/items/pelle-pelle/450/1/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/1/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/1/01.webp",
      "/catalog/items/pelle-pelle/450/1/02.webp",
      "/catalog/items/pelle-pelle/450/1/03.webp",
      "/catalog/items/pelle-pelle/450/1/04.webp",
      "/catalog/items/pelle-pelle/450/1/05.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 26,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-2-450-2",
    "name": "Pelle Pelle Limited Edition Plush Jacket #2",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "image": "/catalog/items/pelle-pelle/450/2/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/2/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/2/01.jpg",
      "/catalog/items/pelle-pelle/450/2/02.webp",
      "/catalog/items/pelle-pelle/450/2/03.jpg",
      "/catalog/items/pelle-pelle/450/2/04.webp",
      "/catalog/items/pelle-pelle/450/2/05.webp",
      "/catalog/items/pelle-pelle/450/2/06.webp",
      "/catalog/items/pelle-pelle/450/2/07.webp",
      "/catalog/items/pelle-pelle/450/2/08.webp",
      "/catalog/items/pelle-pelle/450/2/09.webp",
      "/catalog/items/pelle-pelle/450/2/10.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 27,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-3-450-3",
    "name": "Pelle Pelle Limited Edition Plush Jacket #3",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/3/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/3/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/3/01.webp",
      "/catalog/items/pelle-pelle/450/3/02.webp",
      "/catalog/items/pelle-pelle/450/3/03.webp",
      "/catalog/items/pelle-pelle/450/3/04.webp",
      "/catalog/items/pelle-pelle/450/3/05.webp",
      "/catalog/items/pelle-pelle/450/3/06.webp",
      "/catalog/items/pelle-pelle/450/3/07.webp",
      "/catalog/items/pelle-pelle/450/3/08.webp",
      "/catalog/items/pelle-pelle/450/3/09.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 28,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-4-450-4",
    "name": "Pelle Pelle Limited Edition Plush Jacket #4",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/4/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/4/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/4/01.webp",
      "/catalog/items/pelle-pelle/450/4/02.webp",
      "/catalog/items/pelle-pelle/450/4/03.webp",
      "/catalog/items/pelle-pelle/450/4/04.webp",
      "/catalog/items/pelle-pelle/450/4/05.webp",
      "/catalog/items/pelle-pelle/450/4/06.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 29,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-5-450-5",
    "name": "Pelle Pelle Limited Edition Plush Jacket #5",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/5/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/5/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/5/01.webp",
      "/catalog/items/pelle-pelle/450/5/02.webp",
      "/catalog/items/pelle-pelle/450/5/03.webp",
      "/catalog/items/pelle-pelle/450/5/04.webp",
      "/catalog/items/pelle-pelle/450/5/05.webp",
      "/catalog/items/pelle-pelle/450/5/06.webp",
      "/catalog/items/pelle-pelle/450/5/07.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 30,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-6-450-6",
    "name": "Pelle Pelle Limited Edition Plush Jacket #6",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/6/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/6/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/6/01.webp",
      "/catalog/items/pelle-pelle/450/6/02.webp",
      "/catalog/items/pelle-pelle/450/6/03.webp",
      "/catalog/items/pelle-pelle/450/6/04.webp",
      "/catalog/items/pelle-pelle/450/6/05.webp",
      "/catalog/items/pelle-pelle/450/6/06.webp",
      "/catalog/items/pelle-pelle/450/6/07.webp",
      "/catalog/items/pelle-pelle/450/6/08.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 31,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-7-450-7",
    "name": "Pelle Pelle Limited Edition Plush Jacket #7",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/7/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/7/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/7/01.webp",
      "/catalog/items/pelle-pelle/450/7/02.webp",
      "/catalog/items/pelle-pelle/450/7/03.webp",
      "/catalog/items/pelle-pelle/450/7/04.jpg",
      "/catalog/items/pelle-pelle/450/7/05.jpg",
      "/catalog/items/pelle-pelle/450/7/06.jpg",
      "/catalog/items/pelle-pelle/450/7/07.jpg",
      "/catalog/items/pelle-pelle/450/7/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 32,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-8-450-8",
    "name": "Pelle Pelle Limited Edition Plush Jacket #8",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/8/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/8/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/8/01.webp",
      "/catalog/items/pelle-pelle/450/8/02.webp",
      "/catalog/items/pelle-pelle/450/8/03.webp",
      "/catalog/items/pelle-pelle/450/8/04.jpg",
      "/catalog/items/pelle-pelle/450/8/05.jpg",
      "/catalog/items/pelle-pelle/450/8/06.jpg",
      "/catalog/items/pelle-pelle/450/8/07.jpg",
      "/catalog/items/pelle-pelle/450/8/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 33,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-9-450-9",
    "name": "Pelle Pelle Limited Edition Plush Jacket #9",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/9/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/9/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/9/01.webp",
      "/catalog/items/pelle-pelle/450/9/02.webp",
      "/catalog/items/pelle-pelle/450/9/03.webp",
      "/catalog/items/pelle-pelle/450/9/04.webp",
      "/catalog/items/pelle-pelle/450/9/05.webp",
      "/catalog/items/pelle-pelle/450/9/06.webp",
      "/catalog/items/pelle-pelle/450/9/07.webp",
      "/catalog/items/pelle-pelle/450/9/08.webp",
      "/catalog/items/pelle-pelle/450/9/09.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 34,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-10-450-10",
    "name": "Pelle Pelle Limited Edition Plush Jacket #10",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/10/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/10/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/10/01.webp",
      "/catalog/items/pelle-pelle/450/10/02.webp",
      "/catalog/items/pelle-pelle/450/10/03.webp",
      "/catalog/items/pelle-pelle/450/10/04.webp",
      "/catalog/items/pelle-pelle/450/10/05.webp",
      "/catalog/items/pelle-pelle/450/10/06.webp",
      "/catalog/items/pelle-pelle/450/10/07.webp",
      "/catalog/items/pelle-pelle/450/10/08.webp",
      "/catalog/items/pelle-pelle/450/10/09.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 35,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-11-450-11",
    "name": "Pelle Pelle Limited Edition Plush Jacket #11",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/11/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/11/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/11/01.jpg",
      "/catalog/items/pelle-pelle/450/11/02.webp",
      "/catalog/items/pelle-pelle/450/11/03.jpg",
      "/catalog/items/pelle-pelle/450/11/04.jpg",
      "/catalog/items/pelle-pelle/450/11/05.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 36,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-12-450-12",
    "name": "Pelle Pelle Limited Edition Plush Jacket #12",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/12/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/12/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/12/01.webp",
      "/catalog/items/pelle-pelle/450/12/02.webp",
      "/catalog/items/pelle-pelle/450/12/03.webp",
      "/catalog/items/pelle-pelle/450/12/04.webp",
      "/catalog/items/pelle-pelle/450/12/05.webp",
      "/catalog/items/pelle-pelle/450/12/06.webp",
      "/catalog/items/pelle-pelle/450/12/07.webp",
      "/catalog/items/pelle-pelle/450/12/08.webp",
      "/catalog/items/pelle-pelle/450/12/09.webp",
      "/catalog/items/pelle-pelle/450/12/10.webp"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 37,
    "slug": "pelle-pelle-pelle-pelle-black-copper-studded-edition-450-13",
    "name": "Pelle Pelle Black Copper Studded Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#241d17",
    "darkColor": "#0a0a0a",
    "colorName": "Black & Copper",
    "colors": [
      {
        "name": "Black & Copper",
        "hex": "#241d17"
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
    "image": "/catalog/items/pelle-pelle/450/13/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/13/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/13/01.jpg",
      "/catalog/items/pelle-pelle/450/13/02.webp",
      "/catalog/items/pelle-pelle/450/13/03.webp",
      "/catalog/items/pelle-pelle/450/13/04.jpg",
      "/catalog/items/pelle-pelle/450/13/05.jpg",
      "/catalog/items/pelle-pelle/450/13/06.jpg",
      "/catalog/items/pelle-pelle/450/13/07.jpg",
      "/catalog/items/pelle-pelle/450/13/08.jpg",
      "/catalog/items/pelle-pelle/450/13/09.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 38,
    "slug": "pelle-pelle-pelle-pelle-ash-grey-limited-edition-450-14",
    "name": "Pelle Pelle Ash Grey Limited Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#606060",
    "darkColor": "#0a0a0a",
    "colorName": "Ash Grey",
    "colors": [
      {
        "name": "Ash Grey",
        "hex": "#606060"
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
    "image": "/catalog/items/pelle-pelle/450/14/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/14/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/450/14/01.jpg",
      "/catalog/items/pelle-pelle/450/14/02.jpg",
      "/catalog/items/pelle-pelle/450/14/03.jpg",
      "/catalog/items/pelle-pelle/450/14/04.jpg",
      "/catalog/items/pelle-pelle/450/14/05.jpg",
      "/catalog/items/pelle-pelle/450/14/06.jpg",
      "/catalog/items/pelle-pelle/450/14/07.jpg",
      "/catalog/items/pelle-pelle/450/14/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 39,
    "slug": "pelle-pelle-pelle-pelle-two-tone-brown-teal-edition-450-15",
    "name": "Pelle Pelle Two-Tone Brown Teal Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#3a2618",
    "darkColor": "#0a0a0a",
    "colorName": "Brown & Teal",
    "colors": [
      {
        "name": "Brown & Teal",
        "hex": "#3a2618"
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
    "image": "/catalog/items/pelle-pelle/450/15/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/15/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/450/15/01.jpg",
      "/catalog/items/pelle-pelle/450/15/02.jpg",
      "/catalog/items/pelle-pelle/450/15/03.jpg",
      "/catalog/items/pelle-pelle/450/15/04.jpg",
      "/catalog/items/pelle-pelle/450/15/05.jpg",
      "/catalog/items/pelle-pelle/450/15/06.jpg",
      "/catalog/items/pelle-pelle/450/15/07.jpg",
      "/catalog/items/pelle-pelle/450/15/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 40,
    "slug": "pelle-pelle-pelle-pelle-black-crimson-red-plush-edition-450-16",
    "name": "Pelle Pelle Black & Crimson Red Plush Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#1a1a1a",
    "darkColor": "#0a0a0a",
    "colorName": "Black & Red",
    "colors": [
      {
        "name": "Black & Red",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/16/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/16/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/450/16/01.jpg",
      "/catalog/items/pelle-pelle/450/16/02.jpg",
      "/catalog/items/pelle-pelle/450/16/03.jpg",
      "/catalog/items/pelle-pelle/450/16/04.jpg",
      "/catalog/items/pelle-pelle/450/16/05.jpg",
      "/catalog/items/pelle-pelle/450/16/06.jpg",
      "/catalog/items/pelle-pelle/450/16/07.jpg",
      "/catalog/items/pelle-pelle/450/16/08.jpg",
      "/catalog/items/pelle-pelle/450/16/09.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 41,
    "slug": "pelle-pelle-pelle-pelle-vintage-brown-leather-edition-450-17",
    "name": "Pelle Pelle Vintage Brown Leather Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#442b1a",
    "darkColor": "#0a0a0a",
    "colorName": "Espresso Brown",
    "colors": [
      {
        "name": "Espresso Brown",
        "hex": "#442b1a"
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
    "image": "/catalog/items/pelle-pelle/450/17/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/17/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/450/17/01.jpg",
      "/catalog/items/pelle-pelle/450/17/02.jpg",
      "/catalog/items/pelle-pelle/450/17/03.jpg",
      "/catalog/items/pelle-pelle/450/17/04.jpg",
      "/catalog/items/pelle-pelle/450/17/05.jpg",
      "/catalog/items/pelle-pelle/450/17/06.jpg",
      "/catalog/items/pelle-pelle/450/17/07.jpg",
      "/catalog/items/pelle-pelle/450/17/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 42,
    "slug": "pelle-pelle-pelle-pelle-olive-cabaret-edition-450-18",
    "name": "Pelle Pelle Olive Cabaret Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#484f33",
    "darkColor": "#0a0a0a",
    "colorName": "Olive Green",
    "colors": [
      {
        "name": "Olive Green",
        "hex": "#484f33"
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
    "image": "/catalog/items/pelle-pelle/450/18/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/18/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/450/18/01.jpg",
      "/catalog/items/pelle-pelle/450/18/02.jpg",
      "/catalog/items/pelle-pelle/450/18/03.jpg",
      "/catalog/items/pelle-pelle/450/18/04.jpg",
      "/catalog/items/pelle-pelle/450/18/05.jpg",
      "/catalog/items/pelle-pelle/450/18/06.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 43,
    "slug": "pelle-pelle-pelle-pelle-rolling-loud-special-edition-450-19",
    "name": "Pelle Pelle Rolling Loud Special Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#1a1a1a",
    "darkColor": "#0a0a0a",
    "colorName": "Black",
    "colors": [
      {
        "name": "Black",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/19/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/450/19/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/450/19/01.jpg",
      "/catalog/items/pelle-pelle/450/19/02.jpg",
      "/catalog/items/pelle-pelle/450/19/03.jpg",
      "/catalog/items/pelle-pelle/450/19/04.jpg",
      "/catalog/items/pelle-pelle/450/19/05.jpg",
      "/catalog/items/pelle-pelle/450/19/06.jpg",
      "/catalog/items/pelle-pelle/450/19/07.jpg",
      "/catalog/items/pelle-pelle/450/19/08.jpg",
      "/catalog/items/pelle-pelle/450/19/09.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 44,
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-20-450-20",
    "name": "Pelle Pelle Limited Edition Plush Jacket #20",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 450,
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/450/20/01.webp",
    "imageHover": "/catalog/items/pelle-pelle/450/20/02.webp",
    "images": [
      "/catalog/items/pelle-pelle/450/20/01.webp",
      "/catalog/items/pelle-pelle/450/20/02.webp",
      "/catalog/items/pelle-pelle/450/20/03.jpg",
      "/catalog/items/pelle-pelle/450/20/04.jpg",
      "/catalog/items/pelle-pelle/450/20/05.jpg",
      "/catalog/items/pelle-pelle/450/20/06.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 45,
    "slug": "pelle-pelle-pelle-pelle-collector-heavyweight-plush-1-500-1",
    "name": "Pelle Pelle Collector Heavyweight Plush #1",
    "brand": "pelle-pelle",
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
    "image": "/catalog/items/pelle-pelle/500/1/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/500/1/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/500/1/01.jpg",
      "/catalog/items/pelle-pelle/500/1/02.jpg",
      "/catalog/items/pelle-pelle/500/1/03.jpg",
      "/catalog/items/pelle-pelle/500/1/04.jpg",
      "/catalog/items/pelle-pelle/500/1/05.jpg",
      "/catalog/items/pelle-pelle/500/1/06.jpg",
      "/catalog/items/pelle-pelle/500/1/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 46,
    "slug": "pelle-pelle-pelle-pelle-collector-heavyweight-plush-2-500-2",
    "name": "Pelle Pelle Collector Heavyweight Plush #2",
    "brand": "pelle-pelle",
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
    "image": "/catalog/items/pelle-pelle/500/2/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/500/2/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/500/2/01.jpg",
      "/catalog/items/pelle-pelle/500/2/02.jpg",
      "/catalog/items/pelle-pelle/500/2/03.jpg",
      "/catalog/items/pelle-pelle/500/2/04.jpg",
      "/catalog/items/pelle-pelle/500/2/05.jpg",
      "/catalog/items/pelle-pelle/500/2/06.jpg",
      "/catalog/items/pelle-pelle/500/2/07.jpg",
      "/catalog/items/pelle-pelle/500/2/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 47,
    "slug": "pelle-pelle-pelle-pelle-black-cabaret-collector-edition-500-3",
    "name": "Pelle Pelle Black Cabaret Collector Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 500,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#1a1a1a",
    "darkColor": "#0a0a0a",
    "colorName": "Black",
    "colors": [
      {
        "name": "Black",
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
    "featured": false,
    "inStock": true,
    "image": "/catalog/items/pelle-pelle/500/3/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/500/3/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/500/3/01.jpg",
      "/catalog/items/pelle-pelle/500/3/02.jpg",
      "/catalog/items/pelle-pelle/500/3/03.jpg",
      "/catalog/items/pelle-pelle/500/3/04.jpg",
      "/catalog/items/pelle-pelle/500/3/05.jpg",
      "/catalog/items/pelle-pelle/500/3/06.jpg",
      "/catalog/items/pelle-pelle/500/3/07.jpg",
      "/catalog/items/pelle-pelle/500/3/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 48,
    "slug": "pelle-pelle-pelle-pelle-ivory-cream-limited-edition-500-4",
    "name": "Pelle Pelle Ivory Cream Limited Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 500,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#ede8dc",
    "darkColor": "#0a0a0a",
    "colorName": "Ivory Cream",
    "colors": [
      {
        "name": "Ivory Cream",
        "hex": "#ede8dc"
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
    "image": "/catalog/items/pelle-pelle/500/4/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/500/4/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/500/4/01.jpg",
      "/catalog/items/pelle-pelle/500/4/02.jpg",
      "/catalog/items/pelle-pelle/500/4/03.jpg",
      "/catalog/items/pelle-pelle/500/4/04.jpg",
      "/catalog/items/pelle-pelle/500/4/05.jpg",
      "/catalog/items/pelle-pelle/500/4/06.jpg",
      "/catalog/items/pelle-pelle/500/4/07.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 49,
    "slug": "pelle-pelle-pelle-pelle-midnight-navy-plush-edition-500-5",
    "name": "Pelle Pelle Midnight Navy Plush Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 500,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#1b263b",
    "darkColor": "#0a0a0a",
    "colorName": "Midnight Navy",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#1b263b"
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
    "image": "/catalog/items/pelle-pelle/500/5/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/500/5/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/500/5/01.jpg",
      "/catalog/items/pelle-pelle/500/5/02.jpg",
      "/catalog/items/pelle-pelle/500/5/03.jpg",
      "/catalog/items/pelle-pelle/500/5/04.jpg",
      "/catalog/items/pelle-pelle/500/5/05.jpg",
      "/catalog/items/pelle-pelle/500/5/06.jpg",
      "/catalog/items/pelle-pelle/500/5/07.jpg",
      "/catalog/items/pelle-pelle/500/5/08.jpg",
      "/catalog/items/pelle-pelle/500/5/09.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 50,
    "slug": "pelle-pelle-pelle-pelle-military-olive-edition-500-6",
    "name": "Pelle Pelle Military Olive Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 500,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#484f33",
    "darkColor": "#0a0a0a",
    "colorName": "Olive Green",
    "colors": [
      {
        "name": "Olive Green",
        "hex": "#484f33"
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
    "image": "/catalog/items/pelle-pelle/500/6/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/500/6/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/500/6/01.jpg",
      "/catalog/items/pelle-pelle/500/6/02.jpg",
      "/catalog/items/pelle-pelle/500/6/03.jpg",
      "/catalog/items/pelle-pelle/500/6/04.jpg",
      "/catalog/items/pelle-pelle/500/6/05.jpg",
      "/catalog/items/pelle-pelle/500/6/06.jpg",
      "/catalog/items/pelle-pelle/500/6/07.jpg",
      "/catalog/items/pelle-pelle/500/6/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  },
  {
    "id": 51,
    "slug": "pelle-pelle-pelle-pelle-vintage-brown-leather-edition-500-7",
    "name": "Pelle Pelle Vintage Brown Leather Edition",
    "brand": "pelle-pelle",
    "category": "pelle-pelle",
    "description": "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape.",
    "price": 500,
    "meta": "Supple plush leather, hand-cut embroidered appliques, satin lining",
    "color": "#442b1a",
    "darkColor": "#0a0a0a",
    "colorName": "Espresso Brown",
    "colors": [
      {
        "name": "Espresso Brown",
        "hex": "#442b1a"
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
    "image": "/catalog/items/pelle-pelle/500/7/01.jpg",
    "imageHover": "/catalog/items/pelle-pelle/500/7/02.jpg",
    "images": [
      "/catalog/items/pelle-pelle/500/7/01.jpg",
      "/catalog/items/pelle-pelle/500/7/02.jpg",
      "/catalog/items/pelle-pelle/500/7/03.jpg",
      "/catalog/items/pelle-pelle/500/7/04.jpg",
      "/catalog/items/pelle-pelle/500/7/05.jpg",
      "/catalog/items/pelle-pelle/500/7/06.jpg",
      "/catalog/items/pelle-pelle/500/7/07.jpg",
      "/catalog/items/pelle-pelle/500/7/08.jpg"
    ],
    "hem": 410,
    "cuff": 418,
    "svgExtra": ""
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brand === brandSlug);
}

export function getFeaturedProducts(): Product[] {
  const featured = products.filter((p) => p.featured);
  return featured.length > 0 ? featured : products.slice(0, 8);
}

export function getAllColors(): string[] {
  const set = new Set<string>();
  for (const p of products) {
    if (p.colorName) set.add(p.colorName);
  }
  return Array.from(set);
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
        return json.data.map((raw: any) => ({
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
          imageHover: raw.imageHover || raw.image,
          images: Array.isArray(raw.images) && raw.images.length > 0 ? raw.images : [raw.image, raw.imageHover].filter(Boolean),
          hem: raw.hem || 410,
          cuff: raw.cuff || 418,
          svgExtra: raw.svgExtra || "",
        }));
      }
    }
  } catch {
    // Smooth fallback to local catalog
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
          imageHover: raw.imageHover || raw.image,
          images: Array.isArray(raw.images) && raw.images.length > 0 ? raw.images : [raw.image, raw.imageHover].filter(Boolean),
          hem: raw.hem || 410,
          cuff: raw.cuff || 418,
          svgExtra: raw.svgExtra || "",
        };
      }
    }
  } catch {
    // Smooth fallback
  }
  return getProduct(slug);
}

export async function fetchLiveFeaturedProducts(): Promise<Product[]> {
  const live = await fetchLiveProducts();
  const featured = live.filter((p) => p.featured);
  return featured.length > 0 ? featured : live.slice(0, 8);
}

export function getBrandLabel(slug: string): string {
  return getBrand(slug)?.name ?? slug;
}

export async function fetchLiveProductsByBrand(brandSlug: string): Promise<Product[]> {
  return fetchLiveProducts(brandSlug);
}

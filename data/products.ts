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
}

export const products: Product[] = [
  {
    "id": 1,
    "name": "Avirex B-3 Sheepskin Shearling Bomber",
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
    "id": 2,
    "name": "Avirex B-3 Sheepskin Shearling Bomber",
    "slug": "avirex-avirex-b-3-sheepskin-shearling-bomber-300-2",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791162966/leatherhavencraft/catalog/avirex/300/2/tsff4pjybin7tedsokye.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/2/tsff4pjybin7tedsokye",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791162967/leatherhavencraft/catalog/avirex/300/2/bvdyantuxfgdynatv4gc.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/2/bvdyantuxfgdynatv4gc",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162966/leatherhavencraft/catalog/avirex/300/2/tsff4pjybin7tedsokye.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162967/leatherhavencraft/catalog/avirex/300/2/bvdyantuxfgdynatv4gc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162971/leatherhavencraft/catalog/avirex/300/2/pqemlvazamoapfgpcy90.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162969/leatherhavencraft/catalog/avirex/300/2/ibdfxaanxqyt53rvqmno.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162974/leatherhavencraft/catalog/avirex/300/2/tdnzdphg7fouvaxb8v7j.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162973/leatherhavencraft/catalog/avirex/300/2/jm5zdajhzahqqg3sxykt.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162976/leatherhavencraft/catalog/avirex/300/2/z9ibjkd7vgcbpi558pij.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/2/tsff4pjybin7tedsokye",
      "leatherhavencraft/catalog/avirex/300/2/bvdyantuxfgdynatv4gc",
      "leatherhavencraft/catalog/avirex/300/2/pqemlvazamoapfgpcy90",
      "leatherhavencraft/catalog/avirex/300/2/ibdfxaanxqyt53rvqmno",
      "leatherhavencraft/catalog/avirex/300/2/tdnzdphg7fouvaxb8v7j",
      "leatherhavencraft/catalog/avirex/300/2/jm5zdajhzahqqg3sxykt",
      "leatherhavencraft/catalog/avirex/300/2/z9ibjkd7vgcbpi558pij"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 3,
    "name": "Avirex Icon Squadron Pilot Jacket #4",
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-4-300-4",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791162977/leatherhavencraft/catalog/avirex/300/4/tye41g922jsabaduv9d4.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/4/tye41g922jsabaduv9d4",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791162981/leatherhavencraft/catalog/avirex/300/4/clgegog7et9yleg5lw0t.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/4/clgegog7et9yleg5lw0t",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162977/leatherhavencraft/catalog/avirex/300/4/tye41g922jsabaduv9d4.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162981/leatherhavencraft/catalog/avirex/300/4/clgegog7et9yleg5lw0t.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162981/leatherhavencraft/catalog/avirex/300/4/sdeddmq0p1wuoryvsumi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162982/leatherhavencraft/catalog/avirex/300/4/dly04ywiotlae37ngibn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162983/leatherhavencraft/catalog/avirex/300/4/zoeltuvjj8gx6lj3hagw.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162983/leatherhavencraft/catalog/avirex/300/4/wlnuubzxkdi5m870aa3s.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791162989/leatherhavencraft/catalog/avirex/300/4/u34rwaayjvcvsb6ol52k.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/4/tye41g922jsabaduv9d4",
      "leatherhavencraft/catalog/avirex/300/4/clgegog7et9yleg5lw0t",
      "leatherhavencraft/catalog/avirex/300/4/sdeddmq0p1wuoryvsumi",
      "leatherhavencraft/catalog/avirex/300/4/dly04ywiotlae37ngibn",
      "leatherhavencraft/catalog/avirex/300/4/zoeltuvjj8gx6lj3hagw",
      "leatherhavencraft/catalog/avirex/300/4/wlnuubzxkdi5m870aa3s",
      "leatherhavencraft/catalog/avirex/300/4/u34rwaayjvcvsb6ol52k"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 4,
    "name": "Avirex Heritage Racing Leather Jacket",
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
    "id": 5,
    "name": "Avirex Icon Flight Leather Jacket #6",
    "slug": "avirex-avirex-icon-flight-leather-jacket-6-300-6",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163112/leatherhavencraft/catalog/avirex/300/6/qusfjsi91qeo18fn7qic.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/6/qusfjsi91qeo18fn7qic",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163113/leatherhavencraft/catalog/avirex/300/6/cp7jznk6ctdbebrmdfmt.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/6/cp7jznk6ctdbebrmdfmt",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163112/leatherhavencraft/catalog/avirex/300/6/qusfjsi91qeo18fn7qic.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163113/leatherhavencraft/catalog/avirex/300/6/cp7jznk6ctdbebrmdfmt.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/6/qusfjsi91qeo18fn7qic",
      "leatherhavencraft/catalog/avirex/300/6/cp7jznk6ctdbebrmdfmt"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 6,
    "name": "Avirex Icon Squadron Pilot Jacket #7",
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-7-300-7",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163120/leatherhavencraft/catalog/avirex/300/7/q0rxxmsvytindssaur1o.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/7/q0rxxmsvytindssaur1o",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163119/leatherhavencraft/catalog/avirex/300/7/ilov0ssb8yuoqzg82zol.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/7/ilov0ssb8yuoqzg82zol",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163120/leatherhavencraft/catalog/avirex/300/7/q0rxxmsvytindssaur1o.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163119/leatherhavencraft/catalog/avirex/300/7/ilov0ssb8yuoqzg82zol.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163121/leatherhavencraft/catalog/avirex/300/7/ydh3thrnynw4am0utub8.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163122/leatherhavencraft/catalog/avirex/300/7/g3nssifigkhyjymavjzv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163124/leatherhavencraft/catalog/avirex/300/7/h0bjsrxptdo1nyyqkstw.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163125/leatherhavencraft/catalog/avirex/300/7/n1gcwj9vs6r7jyv2jxb4.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163127/leatherhavencraft/catalog/avirex/300/7/iticekic5ahlxggocvc5.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163127/leatherhavencraft/catalog/avirex/300/7/ozy9grbaqd0fwx7afzpr.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/7/q0rxxmsvytindssaur1o",
      "leatherhavencraft/catalog/avirex/300/7/ilov0ssb8yuoqzg82zol",
      "leatherhavencraft/catalog/avirex/300/7/ydh3thrnynw4am0utub8",
      "leatherhavencraft/catalog/avirex/300/7/g3nssifigkhyjymavjzv",
      "leatherhavencraft/catalog/avirex/300/7/h0bjsrxptdo1nyyqkstw",
      "leatherhavencraft/catalog/avirex/300/7/n1gcwj9vs6r7jyv2jxb4",
      "leatherhavencraft/catalog/avirex/300/7/iticekic5ahlxggocvc5",
      "leatherhavencraft/catalog/avirex/300/7/ozy9grbaqd0fwx7afzpr"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 7,
    "name": "Avirex Icon Squadron Pilot Jacket #8",
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-8-300-8",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163132/leatherhavencraft/catalog/avirex/300/8/qjykgxjoegxl0tyrs9gy.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/8/qjykgxjoegxl0tyrs9gy",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163132/leatherhavencraft/catalog/avirex/300/8/xvrb58ovnigeycuymeqv.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/8/xvrb58ovnigeycuymeqv",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163132/leatherhavencraft/catalog/avirex/300/8/qjykgxjoegxl0tyrs9gy.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163132/leatherhavencraft/catalog/avirex/300/8/xvrb58ovnigeycuymeqv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163134/leatherhavencraft/catalog/avirex/300/8/hmcbzdcrnapskxqoesy7.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163134/leatherhavencraft/catalog/avirex/300/8/q5sukrspk7ih6p0rdwve.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163135/leatherhavencraft/catalog/avirex/300/8/stbrmhltaj3wvszl1hls.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163136/leatherhavencraft/catalog/avirex/300/8/hwv7bvmiley2r28qpega.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163142/leatherhavencraft/catalog/avirex/300/8/ioo524lqztgwjnx3eqgn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163142/leatherhavencraft/catalog/avirex/300/8/nmr0kdersxm3sxdxthja.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/8/qjykgxjoegxl0tyrs9gy",
      "leatherhavencraft/catalog/avirex/300/8/xvrb58ovnigeycuymeqv",
      "leatherhavencraft/catalog/avirex/300/8/hmcbzdcrnapskxqoesy7",
      "leatherhavencraft/catalog/avirex/300/8/q5sukrspk7ih6p0rdwve",
      "leatherhavencraft/catalog/avirex/300/8/stbrmhltaj3wvszl1hls",
      "leatherhavencraft/catalog/avirex/300/8/hwv7bvmiley2r28qpega",
      "leatherhavencraft/catalog/avirex/300/8/ioo524lqztgwjnx3eqgn",
      "leatherhavencraft/catalog/avirex/300/8/nmr0kdersxm3sxdxthja"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 8,
    "name": "Avirex Icon Squadron Pilot Jacket #9",
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-9-300-9",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163151/leatherhavencraft/catalog/avirex/300/9/vm3sbi6xcztaj5agcnsr.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/9/vm3sbi6xcztaj5agcnsr",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163152/leatherhavencraft/catalog/avirex/300/9/kpgpbvdc2neiiwek0pk7.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/9/kpgpbvdc2neiiwek0pk7",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163151/leatherhavencraft/catalog/avirex/300/9/vm3sbi6xcztaj5agcnsr.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163152/leatherhavencraft/catalog/avirex/300/9/kpgpbvdc2neiiwek0pk7.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163152/leatherhavencraft/catalog/avirex/300/9/mnoqg1nyjlxkjpemm47c.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163161/leatherhavencraft/catalog/avirex/300/9/ostt0kqfvrxmjr1gjkda.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163164/leatherhavencraft/catalog/avirex/300/9/wgaxzjle2bqboc5w8jcf.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163169/leatherhavencraft/catalog/avirex/300/9/um3twcp2jtmqmiid8mhb.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163170/leatherhavencraft/catalog/avirex/300/9/edu3faofic4wztjlvxlb.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/9/vm3sbi6xcztaj5agcnsr",
      "leatherhavencraft/catalog/avirex/300/9/kpgpbvdc2neiiwek0pk7",
      "leatherhavencraft/catalog/avirex/300/9/mnoqg1nyjlxkjpemm47c",
      "leatherhavencraft/catalog/avirex/300/9/ostt0kqfvrxmjr1gjkda",
      "leatherhavencraft/catalog/avirex/300/9/wgaxzjle2bqboc5w8jcf",
      "leatherhavencraft/catalog/avirex/300/9/um3twcp2jtmqmiid8mhb",
      "leatherhavencraft/catalog/avirex/300/9/edu3faofic4wztjlvxlb"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 9,
    "name": "Avirex Icon Squadron Pilot Jacket #10",
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-10-300-10",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163183/leatherhavencraft/catalog/avirex/300/10/q2agzdb7nuxtcbhjnp9r.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/10/q2agzdb7nuxtcbhjnp9r",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163185/leatherhavencraft/catalog/avirex/300/10/mujjrggqrzocah1ntxkf.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/10/mujjrggqrzocah1ntxkf",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163183/leatherhavencraft/catalog/avirex/300/10/q2agzdb7nuxtcbhjnp9r.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163185/leatherhavencraft/catalog/avirex/300/10/mujjrggqrzocah1ntxkf.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163191/leatherhavencraft/catalog/avirex/300/10/vecltpmeklixkaqp7p5w.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163191/leatherhavencraft/catalog/avirex/300/10/etttfkhwqwodx76mnl8y.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163200/leatherhavencraft/catalog/avirex/300/10/ffu0dzbxzgb0dyhjllkh.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163199/leatherhavencraft/catalog/avirex/300/10/ifcwoekjyraorqnjkqhl.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163202/leatherhavencraft/catalog/avirex/300/10/n7fpctllfsbxa477ijxl.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163203/leatherhavencraft/catalog/avirex/300/10/ael8bjxc5wnofqgkq1tc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163204/leatherhavencraft/catalog/avirex/300/10/kz5bjpm8f4tgls5z5djj.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/10/q2agzdb7nuxtcbhjnp9r",
      "leatherhavencraft/catalog/avirex/300/10/mujjrggqrzocah1ntxkf",
      "leatherhavencraft/catalog/avirex/300/10/vecltpmeklixkaqp7p5w",
      "leatherhavencraft/catalog/avirex/300/10/etttfkhwqwodx76mnl8y",
      "leatherhavencraft/catalog/avirex/300/10/ffu0dzbxzgb0dyhjllkh",
      "leatherhavencraft/catalog/avirex/300/10/ifcwoekjyraorqnjkqhl",
      "leatherhavencraft/catalog/avirex/300/10/n7fpctllfsbxa477ijxl",
      "leatherhavencraft/catalog/avirex/300/10/ael8bjxc5wnofqgkq1tc",
      "leatherhavencraft/catalog/avirex/300/10/kz5bjpm8f4tgls5z5djj"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 10,
    "name": "Avirex Icon Squadron Pilot Jacket #11",
    "slug": "avirex-avirex-icon-squadron-pilot-jacket-11-300-11",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163213/leatherhavencraft/catalog/avirex/300/11/prcg7mbuigdvibntdafd.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/300/11/prcg7mbuigdvibntdafd",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163213/leatherhavencraft/catalog/avirex/300/11/l3nzg4hpmqfvazkrxvie.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/300/11/l3nzg4hpmqfvazkrxvie",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163213/leatherhavencraft/catalog/avirex/300/11/prcg7mbuigdvibntdafd.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163213/leatherhavencraft/catalog/avirex/300/11/l3nzg4hpmqfvazkrxvie.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163219/leatherhavencraft/catalog/avirex/300/11/bv3skehqwdo5hp1g555w.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163218/leatherhavencraft/catalog/avirex/300/11/rmanp2xagxysevuwvcnj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163224/leatherhavencraft/catalog/avirex/300/11/jg1irkgfgdo60gfgoolw.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163223/leatherhavencraft/catalog/avirex/300/11/yen6kaagzhnz9jlwbxc6.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163229/leatherhavencraft/catalog/avirex/300/11/q0qzt9r7qmpilkzvbnep.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/300/11/prcg7mbuigdvibntdafd",
      "leatherhavencraft/catalog/avirex/300/11/l3nzg4hpmqfvazkrxvie",
      "leatherhavencraft/catalog/avirex/300/11/bv3skehqwdo5hp1g555w",
      "leatherhavencraft/catalog/avirex/300/11/rmanp2xagxysevuwvcnj",
      "leatherhavencraft/catalog/avirex/300/11/jg1irkgfgdo60gfgoolw",
      "leatherhavencraft/catalog/avirex/300/11/yen6kaagzhnz9jlwbxc6",
      "leatherhavencraft/catalog/avirex/300/11/q0qzt9r7qmpilkzvbnep"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 11,
    "name": "Avirex Limited Edition Flight Jacket #1",
    "slug": "avirex-avirex-limited-edition-flight-jacket-1-450-1",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163303/leatherhavencraft/catalog/avirex/450/1/gljfutkfbllznvexxnkj.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/450/1/gljfutkfbllznvexxnkj",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163303/leatherhavencraft/catalog/avirex/450/1/ugksg6svzhql1o47nbi5.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/450/1/ugksg6svzhql1o47nbi5",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163303/leatherhavencraft/catalog/avirex/450/1/gljfutkfbllznvexxnkj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163303/leatherhavencraft/catalog/avirex/450/1/ugksg6svzhql1o47nbi5.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163310/leatherhavencraft/catalog/avirex/450/1/lgbe26klj7vi3sxfspfj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163318/leatherhavencraft/catalog/avirex/450/1/luhwmadlrqlvdtxuiqnc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163331/leatherhavencraft/catalog/avirex/450/1/o8l4rnm5w5aqmiysfaex.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163327/leatherhavencraft/catalog/avirex/450/1/yastzd041fdrkze9m8l9.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/450/1/gljfutkfbllznvexxnkj",
      "leatherhavencraft/catalog/avirex/450/1/ugksg6svzhql1o47nbi5",
      "leatherhavencraft/catalog/avirex/450/1/lgbe26klj7vi3sxfspfj",
      "leatherhavencraft/catalog/avirex/450/1/luhwmadlrqlvdtxuiqnc",
      "leatherhavencraft/catalog/avirex/450/1/o8l4rnm5w5aqmiysfaex",
      "leatherhavencraft/catalog/avirex/450/1/yastzd041fdrkze9m8l9"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 12,
    "name": "Avirex Limited Tactical Bomber #2",
    "slug": "avirex-avirex-limited-tactical-bomber-2-450-2",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163364/leatherhavencraft/catalog/avirex/450/2/yboyggqk6ihncvlfxxx2.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/450/2/yboyggqk6ihncvlfxxx2",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163364/leatherhavencraft/catalog/avirex/450/2/fkabkkuvs6yqofa699z0.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/450/2/fkabkkuvs6yqofa699z0",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163364/leatherhavencraft/catalog/avirex/450/2/yboyggqk6ihncvlfxxx2.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163364/leatherhavencraft/catalog/avirex/450/2/fkabkkuvs6yqofa699z0.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163369/leatherhavencraft/catalog/avirex/450/2/gt2yiqfjx9h1vkdygl0l.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163369/leatherhavencraft/catalog/avirex/450/2/fckhblae8zoljdldihpd.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163378/leatherhavencraft/catalog/avirex/450/2/zibelfiw5zj3j6etriso.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163380/leatherhavencraft/catalog/avirex/450/2/axmpmkfhy6cb53pagdhi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163382/leatherhavencraft/catalog/avirex/450/2/crfmkz2vr1fvuekxgwbb.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/450/2/yboyggqk6ihncvlfxxx2",
      "leatherhavencraft/catalog/avirex/450/2/fkabkkuvs6yqofa699z0",
      "leatherhavencraft/catalog/avirex/450/2/gt2yiqfjx9h1vkdygl0l",
      "leatherhavencraft/catalog/avirex/450/2/fckhblae8zoljdldihpd",
      "leatherhavencraft/catalog/avirex/450/2/zibelfiw5zj3j6etriso",
      "leatherhavencraft/catalog/avirex/450/2/axmpmkfhy6cb53pagdhi",
      "leatherhavencraft/catalog/avirex/450/2/crfmkz2vr1fvuekxgwbb"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 13,
    "name": "Avirex Limited Edition Flight Jacket #3",
    "slug": "avirex-avirex-limited-edition-flight-jacket-3-450-3",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163421/leatherhavencraft/catalog/avirex/450/3/g91qkkieiqp9zo6l8vzq.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/450/3/g91qkkieiqp9zo6l8vzq",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163421/leatherhavencraft/catalog/avirex/450/3/fsxloqpj0cxafeukfsjp.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/450/3/fsxloqpj0cxafeukfsjp",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163421/leatherhavencraft/catalog/avirex/450/3/g91qkkieiqp9zo6l8vzq.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163421/leatherhavencraft/catalog/avirex/450/3/fsxloqpj0cxafeukfsjp.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/450/3/g91qkkieiqp9zo6l8vzq",
      "leatherhavencraft/catalog/avirex/450/3/fsxloqpj0cxafeukfsjp"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 14,
    "name": "Avirex Limited Edition Flight Jacket #4",
    "slug": "avirex-avirex-limited-edition-flight-jacket-4-450-4",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163430/leatherhavencraft/catalog/avirex/450/4/pjg3bip5bekpnqzudrut.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/450/4/pjg3bip5bekpnqzudrut",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163431/leatherhavencraft/catalog/avirex/450/4/htel8eqgkilihmrc8fub.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/450/4/htel8eqgkilihmrc8fub",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163430/leatherhavencraft/catalog/avirex/450/4/pjg3bip5bekpnqzudrut.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163431/leatherhavencraft/catalog/avirex/450/4/htel8eqgkilihmrc8fub.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163433/leatherhavencraft/catalog/avirex/450/4/ohyxlrcfms8suhiliikc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163433/leatherhavencraft/catalog/avirex/450/4/urun6vliq50lombb8mrf.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163440/leatherhavencraft/catalog/avirex/450/4/pxs3b3oqmogfxafwkici.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163439/leatherhavencraft/catalog/avirex/450/4/fik2ggslc2wnegsujnna.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163443/leatherhavencraft/catalog/avirex/450/4/vvi3kzjf5ccrhetw4svw.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/450/4/pjg3bip5bekpnqzudrut",
      "leatherhavencraft/catalog/avirex/450/4/htel8eqgkilihmrc8fub",
      "leatherhavencraft/catalog/avirex/450/4/ohyxlrcfms8suhiliikc",
      "leatherhavencraft/catalog/avirex/450/4/urun6vliq50lombb8mrf",
      "leatherhavencraft/catalog/avirex/450/4/pxs3b3oqmogfxafwkici",
      "leatherhavencraft/catalog/avirex/450/4/fik2ggslc2wnegsujnna",
      "leatherhavencraft/catalog/avirex/450/4/vvi3kzjf5ccrhetw4svw"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 15,
    "name": "Avirex Limited Edition Flight Jacket #5",
    "slug": "avirex-avirex-limited-edition-flight-jacket-5-450-5",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163450/leatherhavencraft/catalog/avirex/450/5/lec0cgfm6fzcwmukea4i.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/450/5/lec0cgfm6fzcwmukea4i",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163450/leatherhavencraft/catalog/avirex/450/5/oyztbgcoujng7evc4b5v.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/450/5/oyztbgcoujng7evc4b5v",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163450/leatherhavencraft/catalog/avirex/450/5/lec0cgfm6fzcwmukea4i.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163450/leatherhavencraft/catalog/avirex/450/5/oyztbgcoujng7evc4b5v.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163452/leatherhavencraft/catalog/avirex/450/5/xqvvfzgoffdcf4uttvvs.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163452/leatherhavencraft/catalog/avirex/450/5/qdyyapud1u3k7fb9niuz.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163457/leatherhavencraft/catalog/avirex/450/5/xo3f63noc8ifx3hgf4em.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163458/leatherhavencraft/catalog/avirex/450/5/ghmu4tmyegjozwdorzhp.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163459/leatherhavencraft/catalog/avirex/450/5/wlspnyhir9ohkkhlxfsz.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/450/5/lec0cgfm6fzcwmukea4i",
      "leatherhavencraft/catalog/avirex/450/5/oyztbgcoujng7evc4b5v",
      "leatherhavencraft/catalog/avirex/450/5/xqvvfzgoffdcf4uttvvs",
      "leatherhavencraft/catalog/avirex/450/5/qdyyapud1u3k7fb9niuz",
      "leatherhavencraft/catalog/avirex/450/5/xo3f63noc8ifx3hgf4em",
      "leatherhavencraft/catalog/avirex/450/5/ghmu4tmyegjozwdorzhp",
      "leatherhavencraft/catalog/avirex/450/5/wlspnyhir9ohkkhlxfsz"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 16,
    "name": "Avirex Limited Edition Flight Jacket #6",
    "slug": "avirex-avirex-limited-edition-flight-jacket-6-450-6",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163465/leatherhavencraft/catalog/avirex/450/6/ya7krjdxu8vhflnjyxp4.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/450/6/ya7krjdxu8vhflnjyxp4",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163464/leatherhavencraft/catalog/avirex/450/6/mbllxhck1ltljutq2okt.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/450/6/mbllxhck1ltljutq2okt",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163465/leatherhavencraft/catalog/avirex/450/6/ya7krjdxu8vhflnjyxp4.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163464/leatherhavencraft/catalog/avirex/450/6/mbllxhck1ltljutq2okt.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163466/leatherhavencraft/catalog/avirex/450/6/wx1ui7eodeakopw3bso0.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163469/leatherhavencraft/catalog/avirex/450/6/uanoyd01pryd5r1l5aik.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163471/leatherhavencraft/catalog/avirex/450/6/j97nx6lscrqmquccukua.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163474/leatherhavencraft/catalog/avirex/450/6/fwqobwrhc42tdegs4mvi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163475/leatherhavencraft/catalog/avirex/450/6/iro5krjwlb4tuerpsbqc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163476/leatherhavencraft/catalog/avirex/450/6/u2thnwbzv9zwdmsgfb3g.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/450/6/ya7krjdxu8vhflnjyxp4",
      "leatherhavencraft/catalog/avirex/450/6/mbllxhck1ltljutq2okt",
      "leatherhavencraft/catalog/avirex/450/6/wx1ui7eodeakopw3bso0",
      "leatherhavencraft/catalog/avirex/450/6/uanoyd01pryd5r1l5aik",
      "leatherhavencraft/catalog/avirex/450/6/j97nx6lscrqmquccukua",
      "leatherhavencraft/catalog/avirex/450/6/fwqobwrhc42tdegs4mvi",
      "leatherhavencraft/catalog/avirex/450/6/iro5krjwlb4tuerpsbqc",
      "leatherhavencraft/catalog/avirex/450/6/u2thnwbzv9zwdmsgfb3g"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 17,
    "name": "Avirex Limited Edition Flight Jacket #7",
    "slug": "avirex-avirex-limited-edition-flight-jacket-7-450-7",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163490/leatherhavencraft/catalog/avirex/450/7/srsz5rscuk9ec1bkxrfz.webp",
    "imagePublicId": "leatherhavencraft/catalog/avirex/450/7/srsz5rscuk9ec1bkxrfz",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163490/leatherhavencraft/catalog/avirex/450/7/m6e01u3iuwptmxaflsfn.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/avirex/450/7/m6e01u3iuwptmxaflsfn",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163490/leatherhavencraft/catalog/avirex/450/7/srsz5rscuk9ec1bkxrfz.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163490/leatherhavencraft/catalog/avirex/450/7/m6e01u3iuwptmxaflsfn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163491/leatherhavencraft/catalog/avirex/450/7/dknpor634j0eft8pwied.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163492/leatherhavencraft/catalog/avirex/450/7/lxzikstsi2wvvdudhikg.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163494/leatherhavencraft/catalog/avirex/450/7/xy9t9cvfdgveyofsihtv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163501/leatherhavencraft/catalog/avirex/450/7/eodauuiwq2mqm6d4w0xu.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163501/leatherhavencraft/catalog/avirex/450/7/lxe36s9x5rmsno7ij5rj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163507/leatherhavencraft/catalog/avirex/450/7/dsmt0k9lqbo72urrix28.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163506/leatherhavencraft/catalog/avirex/450/7/gu8nteuazwjvjtqynddk.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/avirex/450/7/srsz5rscuk9ec1bkxrfz",
      "leatherhavencraft/catalog/avirex/450/7/m6e01u3iuwptmxaflsfn",
      "leatherhavencraft/catalog/avirex/450/7/dknpor634j0eft8pwied",
      "leatherhavencraft/catalog/avirex/450/7/lxzikstsi2wvvdudhikg",
      "leatherhavencraft/catalog/avirex/450/7/xy9t9cvfdgveyofsihtv",
      "leatherhavencraft/catalog/avirex/450/7/eodauuiwq2mqm6d4w0xu",
      "leatherhavencraft/catalog/avirex/450/7/lxe36s9x5rmsno7ij5rj",
      "leatherhavencraft/catalog/avirex/450/7/dsmt0k9lqbo72urrix28",
      "leatherhavencraft/catalog/avirex/450/7/gu8nteuazwjvjtqynddk"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "avirex",
    "svgExtra": ""
  },
  {
    "id": 18,
    "name": "Pelle Pelle Limited Edition Plush Jacket #1",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-1-350-1",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163515/leatherhavencraft/catalog/pelle-pelle/350/1/qedvxkhuloqvnh3plf9f.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/350/1/qedvxkhuloqvnh3plf9f",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163524/leatherhavencraft/catalog/pelle-pelle/350/1/rlwgnssncbynfwix62ca.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/350/1/rlwgnssncbynfwix62ca",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163515/leatherhavencraft/catalog/pelle-pelle/350/1/qedvxkhuloqvnh3plf9f.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163524/leatherhavencraft/catalog/pelle-pelle/350/1/rlwgnssncbynfwix62ca.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163519/leatherhavencraft/catalog/pelle-pelle/350/1/lyttpnwrzbolao9zio8c.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163526/leatherhavencraft/catalog/pelle-pelle/350/1/etr3w9ajchag6jfrtlhq.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163529/leatherhavencraft/catalog/pelle-pelle/350/1/cisfcbhygnobs59iapa6.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163536/leatherhavencraft/catalog/pelle-pelle/350/1/xe5vmpno7xj8dxcracaz.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163538/leatherhavencraft/catalog/pelle-pelle/350/1/zpby1zdhzcxhypq0thup.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163543/leatherhavencraft/catalog/pelle-pelle/350/1/f5sywbu6zbw3zhqmuvce.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/350/1/qedvxkhuloqvnh3plf9f",
      "leatherhavencraft/catalog/pelle-pelle/350/1/rlwgnssncbynfwix62ca",
      "leatherhavencraft/catalog/pelle-pelle/350/1/lyttpnwrzbolao9zio8c",
      "leatherhavencraft/catalog/pelle-pelle/350/1/etr3w9ajchag6jfrtlhq",
      "leatherhavencraft/catalog/pelle-pelle/350/1/cisfcbhygnobs59iapa6",
      "leatherhavencraft/catalog/pelle-pelle/350/1/xe5vmpno7xj8dxcracaz",
      "leatherhavencraft/catalog/pelle-pelle/350/1/zpby1zdhzcxhypq0thup",
      "leatherhavencraft/catalog/pelle-pelle/350/1/f5sywbu6zbw3zhqmuvce"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 19,
    "name": "Pelle Pelle Limited Edition Plush Jacket #2",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-2-350-2",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163555/leatherhavencraft/catalog/pelle-pelle/350/2/eebjj0fi8w7gg6cvlkha.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/350/2/eebjj0fi8w7gg6cvlkha",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163557/leatherhavencraft/catalog/pelle-pelle/350/2/txozjerbd6mqxrcxoh1o.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/350/2/txozjerbd6mqxrcxoh1o",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163555/leatherhavencraft/catalog/pelle-pelle/350/2/eebjj0fi8w7gg6cvlkha.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163557/leatherhavencraft/catalog/pelle-pelle/350/2/txozjerbd6mqxrcxoh1o.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163559/leatherhavencraft/catalog/pelle-pelle/350/2/upgvanv99vm8owqnurwb.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163560/leatherhavencraft/catalog/pelle-pelle/350/2/kvfpv6vrlouovwspb9uj.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/350/2/eebjj0fi8w7gg6cvlkha",
      "leatherhavencraft/catalog/pelle-pelle/350/2/txozjerbd6mqxrcxoh1o",
      "leatherhavencraft/catalog/pelle-pelle/350/2/upgvanv99vm8owqnurwb",
      "leatherhavencraft/catalog/pelle-pelle/350/2/kvfpv6vrlouovwspb9uj"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 20,
    "name": "Pelle Pelle Limited Edition Plush Jacket #3",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-3-350-3",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163566/leatherhavencraft/catalog/pelle-pelle/350/3/ohgrruw1gdkmomsvd9uy.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/350/3/ohgrruw1gdkmomsvd9uy",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163567/leatherhavencraft/catalog/pelle-pelle/350/3/yaiobkj6ivbhvhxucwnj.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/350/3/yaiobkj6ivbhvhxucwnj",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163566/leatherhavencraft/catalog/pelle-pelle/350/3/ohgrruw1gdkmomsvd9uy.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163567/leatherhavencraft/catalog/pelle-pelle/350/3/yaiobkj6ivbhvhxucwnj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163568/leatherhavencraft/catalog/pelle-pelle/350/3/ypht62c64rxp03webb9m.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163569/leatherhavencraft/catalog/pelle-pelle/350/3/eqeh193wgmywyeoscjsy.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163571/leatherhavencraft/catalog/pelle-pelle/350/3/yz4xamdvlmgz4hcwn14k.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/350/3/ohgrruw1gdkmomsvd9uy",
      "leatherhavencraft/catalog/pelle-pelle/350/3/yaiobkj6ivbhvhxucwnj",
      "leatherhavencraft/catalog/pelle-pelle/350/3/ypht62c64rxp03webb9m",
      "leatherhavencraft/catalog/pelle-pelle/350/3/eqeh193wgmywyeoscjsy",
      "leatherhavencraft/catalog/pelle-pelle/350/3/yz4xamdvlmgz4hcwn14k"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 21,
    "name": "Pelle Pelle Soda Club Yellow Edition",
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
    "name": "Pelle Pelle Burgundy Plush Edition",
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
    "id": 23,
    "name": "Pelle Pelle Limited Edition Plush Jacket #6",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-6-350-6",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163592/leatherhavencraft/catalog/pelle-pelle/350/6/ooabt4axq6eozwrbctck.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/350/6/ooabt4axq6eozwrbctck",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163592/leatherhavencraft/catalog/pelle-pelle/350/6/k5elxlxfy1sqv2pohvui.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/350/6/k5elxlxfy1sqv2pohvui",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163592/leatherhavencraft/catalog/pelle-pelle/350/6/ooabt4axq6eozwrbctck.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163592/leatherhavencraft/catalog/pelle-pelle/350/6/k5elxlxfy1sqv2pohvui.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163593/leatherhavencraft/catalog/pelle-pelle/350/6/dd2wzwummojmh4jaexlz.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163595/leatherhavencraft/catalog/pelle-pelle/350/6/cwmh3ajdyae1xsqqpust.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163594/leatherhavencraft/catalog/pelle-pelle/350/6/cpkhuykhxqbjjoysglwf.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163596/leatherhavencraft/catalog/pelle-pelle/350/6/uozsoaqetca1zgenblte.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163597/leatherhavencraft/catalog/pelle-pelle/350/6/tqge0eck11gfgug7je6h.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163598/leatherhavencraft/catalog/pelle-pelle/350/6/z6voz3rzrucoriod7ktb.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/350/6/ooabt4axq6eozwrbctck",
      "leatherhavencraft/catalog/pelle-pelle/350/6/k5elxlxfy1sqv2pohvui",
      "leatherhavencraft/catalog/pelle-pelle/350/6/dd2wzwummojmh4jaexlz",
      "leatherhavencraft/catalog/pelle-pelle/350/6/cwmh3ajdyae1xsqqpust",
      "leatherhavencraft/catalog/pelle-pelle/350/6/cpkhuykhxqbjjoysglwf",
      "leatherhavencraft/catalog/pelle-pelle/350/6/uozsoaqetca1zgenblte",
      "leatherhavencraft/catalog/pelle-pelle/350/6/tqge0eck11gfgug7je6h",
      "leatherhavencraft/catalog/pelle-pelle/350/6/z6voz3rzrucoriod7ktb"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 24,
    "name": "Pelle Pelle Midnight Navy Plush Edition",
    "slug": "pelle-pelle-pelle-pelle-midnight-navy-plush-edition-350-7",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163600/leatherhavencraft/catalog/pelle-pelle/350/7/bygemwzmuteqfgvhytdg.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/350/7/bygemwzmuteqfgvhytdg",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163599/leatherhavencraft/catalog/pelle-pelle/350/7/gp5ywim45rud7j794oii.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/350/7/gp5ywim45rud7j794oii",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163600/leatherhavencraft/catalog/pelle-pelle/350/7/bygemwzmuteqfgvhytdg.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163599/leatherhavencraft/catalog/pelle-pelle/350/7/gp5ywim45rud7j794oii.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163601/leatherhavencraft/catalog/pelle-pelle/350/7/rqonmx4qmkkpezdm0riq.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163602/leatherhavencraft/catalog/pelle-pelle/350/7/n9knajc6cykv5pmgfujg.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163602/leatherhavencraft/catalog/pelle-pelle/350/7/c3c28dy0q7zn6iuc4t2i.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163605/leatherhavencraft/catalog/pelle-pelle/350/7/rbtlrptcivhbjx3l2hp7.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163604/leatherhavencraft/catalog/pelle-pelle/350/7/qvadk5st91vyervqcq17.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163606/leatherhavencraft/catalog/pelle-pelle/350/7/frvpqy9ijjbjcxibog8k.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163606/leatherhavencraft/catalog/pelle-pelle/350/7/vuzd997b2f4lmku9fpo0.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/350/7/bygemwzmuteqfgvhytdg",
      "leatherhavencraft/catalog/pelle-pelle/350/7/gp5ywim45rud7j794oii",
      "leatherhavencraft/catalog/pelle-pelle/350/7/rqonmx4qmkkpezdm0riq",
      "leatherhavencraft/catalog/pelle-pelle/350/7/n9knajc6cykv5pmgfujg",
      "leatherhavencraft/catalog/pelle-pelle/350/7/c3c28dy0q7zn6iuc4t2i",
      "leatherhavencraft/catalog/pelle-pelle/350/7/rbtlrptcivhbjx3l2hp7",
      "leatherhavencraft/catalog/pelle-pelle/350/7/qvadk5st91vyervqcq17",
      "leatherhavencraft/catalog/pelle-pelle/350/7/frvpqy9ijjbjcxibog8k",
      "leatherhavencraft/catalog/pelle-pelle/350/7/vuzd997b2f4lmku9fpo0"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 25,
    "name": "Pelle Pelle Limited Edition Plush Jacket #1",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-1-450-1",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163609/leatherhavencraft/catalog/pelle-pelle/450/1/dkdqtlhkvdngjgjpkdkk.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/1/dkdqtlhkvdngjgjpkdkk",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163609/leatherhavencraft/catalog/pelle-pelle/450/1/jhz7kiaiigadcnxhxgqi.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/1/jhz7kiaiigadcnxhxgqi",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163609/leatherhavencraft/catalog/pelle-pelle/450/1/dkdqtlhkvdngjgjpkdkk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163609/leatherhavencraft/catalog/pelle-pelle/450/1/jhz7kiaiigadcnxhxgqi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163610/leatherhavencraft/catalog/pelle-pelle/450/1/zeziq4zoaltjer8ryxor.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163611/leatherhavencraft/catalog/pelle-pelle/450/1/vkl8kxnrup61dq51ue5y.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163612/leatherhavencraft/catalog/pelle-pelle/450/1/nreg2ntv3r169zbnof1d.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/1/dkdqtlhkvdngjgjpkdkk",
      "leatherhavencraft/catalog/pelle-pelle/450/1/jhz7kiaiigadcnxhxgqi",
      "leatherhavencraft/catalog/pelle-pelle/450/1/zeziq4zoaltjer8ryxor",
      "leatherhavencraft/catalog/pelle-pelle/450/1/vkl8kxnrup61dq51ue5y",
      "leatherhavencraft/catalog/pelle-pelle/450/1/nreg2ntv3r169zbnof1d"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 26,
    "name": "Pelle Pelle Limited Edition Plush Jacket #2",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-2-450-2",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163614/leatherhavencraft/catalog/pelle-pelle/450/2/oxdqghbvvdvctb5ge8wb.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/2/oxdqghbvvdvctb5ge8wb",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163614/leatherhavencraft/catalog/pelle-pelle/450/2/zwcjuaf7foleifmcfffi.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/2/zwcjuaf7foleifmcfffi",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163614/leatherhavencraft/catalog/pelle-pelle/450/2/oxdqghbvvdvctb5ge8wb.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163614/leatherhavencraft/catalog/pelle-pelle/450/2/zwcjuaf7foleifmcfffi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163616/leatherhavencraft/catalog/pelle-pelle/450/2/rbhzgqm4tuks055k2lpk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163617/leatherhavencraft/catalog/pelle-pelle/450/2/wzr6sekwlog0oxsjksfn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163618/leatherhavencraft/catalog/pelle-pelle/450/2/kbmimens3hphqiurchuf.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163618/leatherhavencraft/catalog/pelle-pelle/450/2/xbqmkf4gtfqqj6wst2sp.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163620/leatherhavencraft/catalog/pelle-pelle/450/2/fwiaoh02vlzfbshvx22p.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163620/leatherhavencraft/catalog/pelle-pelle/450/2/zlffdzhjkafv9b9fbhq6.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163621/leatherhavencraft/catalog/pelle-pelle/450/2/utbtb98n2tyvb6fjgtvw.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163622/leatherhavencraft/catalog/pelle-pelle/450/2/ei0qlesm0wbsadurfcbv.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/2/oxdqghbvvdvctb5ge8wb",
      "leatherhavencraft/catalog/pelle-pelle/450/2/zwcjuaf7foleifmcfffi",
      "leatherhavencraft/catalog/pelle-pelle/450/2/rbhzgqm4tuks055k2lpk",
      "leatherhavencraft/catalog/pelle-pelle/450/2/wzr6sekwlog0oxsjksfn",
      "leatherhavencraft/catalog/pelle-pelle/450/2/kbmimens3hphqiurchuf",
      "leatherhavencraft/catalog/pelle-pelle/450/2/xbqmkf4gtfqqj6wst2sp",
      "leatherhavencraft/catalog/pelle-pelle/450/2/fwiaoh02vlzfbshvx22p",
      "leatherhavencraft/catalog/pelle-pelle/450/2/zlffdzhjkafv9b9fbhq6",
      "leatherhavencraft/catalog/pelle-pelle/450/2/utbtb98n2tyvb6fjgtvw",
      "leatherhavencraft/catalog/pelle-pelle/450/2/ei0qlesm0wbsadurfcbv"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 27,
    "name": "Pelle Pelle Limited Edition Plush Jacket #3",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-3-450-3",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163625/leatherhavencraft/catalog/pelle-pelle/450/3/cqqyqc0ec0hofz4xis2x.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/3/cqqyqc0ec0hofz4xis2x",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163624/leatherhavencraft/catalog/pelle-pelle/450/3/tpkvzapvbdkacpar1z6l.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/3/tpkvzapvbdkacpar1z6l",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163625/leatherhavencraft/catalog/pelle-pelle/450/3/cqqyqc0ec0hofz4xis2x.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163624/leatherhavencraft/catalog/pelle-pelle/450/3/tpkvzapvbdkacpar1z6l.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163627/leatherhavencraft/catalog/pelle-pelle/450/3/bebd3jzcdjytfixjg0v7.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163627/leatherhavencraft/catalog/pelle-pelle/450/3/dgjkdnteibthlhikwy05.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163628/leatherhavencraft/catalog/pelle-pelle/450/3/vl8qdqjpj6qnq0clj5sy.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163629/leatherhavencraft/catalog/pelle-pelle/450/3/tz4azi0z80mejn5g4hi5.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163630/leatherhavencraft/catalog/pelle-pelle/450/3/fpxxf8mfpvcekywvzagt.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163630/leatherhavencraft/catalog/pelle-pelle/450/3/jbyioyzkeb3psvjdnh1e.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163631/leatherhavencraft/catalog/pelle-pelle/450/3/c93uknhvvbw4hic18zy1.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/3/cqqyqc0ec0hofz4xis2x",
      "leatherhavencraft/catalog/pelle-pelle/450/3/tpkvzapvbdkacpar1z6l",
      "leatherhavencraft/catalog/pelle-pelle/450/3/bebd3jzcdjytfixjg0v7",
      "leatherhavencraft/catalog/pelle-pelle/450/3/dgjkdnteibthlhikwy05",
      "leatherhavencraft/catalog/pelle-pelle/450/3/vl8qdqjpj6qnq0clj5sy",
      "leatherhavencraft/catalog/pelle-pelle/450/3/tz4azi0z80mejn5g4hi5",
      "leatherhavencraft/catalog/pelle-pelle/450/3/fpxxf8mfpvcekywvzagt",
      "leatherhavencraft/catalog/pelle-pelle/450/3/jbyioyzkeb3psvjdnh1e",
      "leatherhavencraft/catalog/pelle-pelle/450/3/c93uknhvvbw4hic18zy1"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 28,
    "name": "Pelle Pelle Limited Edition Plush Jacket #4",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-4-450-4",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163634/leatherhavencraft/catalog/pelle-pelle/450/4/wrw6wpzhtyjmbb9pj4zc.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/4/wrw6wpzhtyjmbb9pj4zc",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163633/leatherhavencraft/catalog/pelle-pelle/450/4/xgpem3muzeg1smggfk1t.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/4/xgpem3muzeg1smggfk1t",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163634/leatherhavencraft/catalog/pelle-pelle/450/4/wrw6wpzhtyjmbb9pj4zc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163633/leatherhavencraft/catalog/pelle-pelle/450/4/xgpem3muzeg1smggfk1t.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163634/leatherhavencraft/catalog/pelle-pelle/450/4/aqb4l5vgsmd8ixyy5p5c.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163635/leatherhavencraft/catalog/pelle-pelle/450/4/z73yf13ihsseqvtafxvz.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163636/leatherhavencraft/catalog/pelle-pelle/450/4/gzmh3snyhshzfoqzfmrz.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163637/leatherhavencraft/catalog/pelle-pelle/450/4/jjauwjy6e4qadql2sqrz.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/4/wrw6wpzhtyjmbb9pj4zc",
      "leatherhavencraft/catalog/pelle-pelle/450/4/xgpem3muzeg1smggfk1t",
      "leatherhavencraft/catalog/pelle-pelle/450/4/aqb4l5vgsmd8ixyy5p5c",
      "leatherhavencraft/catalog/pelle-pelle/450/4/z73yf13ihsseqvtafxvz",
      "leatherhavencraft/catalog/pelle-pelle/450/4/gzmh3snyhshzfoqzfmrz",
      "leatherhavencraft/catalog/pelle-pelle/450/4/jjauwjy6e4qadql2sqrz"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 29,
    "name": "Pelle Pelle Limited Edition Plush Jacket #5",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-5-450-5",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163639/leatherhavencraft/catalog/pelle-pelle/450/5/lgnqrevrywxcyilm3pkk.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/5/lgnqrevrywxcyilm3pkk",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163639/leatherhavencraft/catalog/pelle-pelle/450/5/lzrvo7pti2zgjvsriw9o.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/5/lzrvo7pti2zgjvsriw9o",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163639/leatherhavencraft/catalog/pelle-pelle/450/5/lgnqrevrywxcyilm3pkk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163639/leatherhavencraft/catalog/pelle-pelle/450/5/lzrvo7pti2zgjvsriw9o.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163640/leatherhavencraft/catalog/pelle-pelle/450/5/aqoimpg3iqnlky834vj5.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163641/leatherhavencraft/catalog/pelle-pelle/450/5/p8cywsfqj3ay9mht4jjr.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163642/leatherhavencraft/catalog/pelle-pelle/450/5/spiaix4xe4mchh9eyxnj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163644/leatherhavencraft/catalog/pelle-pelle/450/5/lmkiozfaegv559ashuxp.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163643/leatherhavencraft/catalog/pelle-pelle/450/5/aguthibl4d4ohd9e1s5x.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/5/lgnqrevrywxcyilm3pkk",
      "leatherhavencraft/catalog/pelle-pelle/450/5/lzrvo7pti2zgjvsriw9o",
      "leatherhavencraft/catalog/pelle-pelle/450/5/aqoimpg3iqnlky834vj5",
      "leatherhavencraft/catalog/pelle-pelle/450/5/p8cywsfqj3ay9mht4jjr",
      "leatherhavencraft/catalog/pelle-pelle/450/5/spiaix4xe4mchh9eyxnj",
      "leatherhavencraft/catalog/pelle-pelle/450/5/lmkiozfaegv559ashuxp",
      "leatherhavencraft/catalog/pelle-pelle/450/5/aguthibl4d4ohd9e1s5x"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 30,
    "name": "Pelle Pelle Limited Edition Plush Jacket #6",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-6-450-6",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163646/leatherhavencraft/catalog/pelle-pelle/450/6/jack35ismpte0r9uecsq.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/6/jack35ismpte0r9uecsq",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163646/leatherhavencraft/catalog/pelle-pelle/450/6/y8mqltubzrf6z5ejozql.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/6/y8mqltubzrf6z5ejozql",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163646/leatherhavencraft/catalog/pelle-pelle/450/6/jack35ismpte0r9uecsq.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163646/leatherhavencraft/catalog/pelle-pelle/450/6/y8mqltubzrf6z5ejozql.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163647/leatherhavencraft/catalog/pelle-pelle/450/6/fwjxge8drlcwudwoa1id.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163648/leatherhavencraft/catalog/pelle-pelle/450/6/cydu8gzuuxcw2taoqbtc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163649/leatherhavencraft/catalog/pelle-pelle/450/6/apclblas35suglcafxln.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163650/leatherhavencraft/catalog/pelle-pelle/450/6/fhepwekjyrvwgwlsrn4p.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163651/leatherhavencraft/catalog/pelle-pelle/450/6/nci9nabzvkcrsp1cceil.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163651/leatherhavencraft/catalog/pelle-pelle/450/6/rqabrmu5k0wxre04n0lo.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/6/jack35ismpte0r9uecsq",
      "leatherhavencraft/catalog/pelle-pelle/450/6/y8mqltubzrf6z5ejozql",
      "leatherhavencraft/catalog/pelle-pelle/450/6/fwjxge8drlcwudwoa1id",
      "leatherhavencraft/catalog/pelle-pelle/450/6/cydu8gzuuxcw2taoqbtc",
      "leatherhavencraft/catalog/pelle-pelle/450/6/apclblas35suglcafxln",
      "leatherhavencraft/catalog/pelle-pelle/450/6/fhepwekjyrvwgwlsrn4p",
      "leatherhavencraft/catalog/pelle-pelle/450/6/nci9nabzvkcrsp1cceil",
      "leatherhavencraft/catalog/pelle-pelle/450/6/rqabrmu5k0wxre04n0lo"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 31,
    "name": "Pelle Pelle Limited Edition Plush Jacket #7",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-7-450-7",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163653/leatherhavencraft/catalog/pelle-pelle/450/7/t1bkuyujd5cle3aa2qbn.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/7/t1bkuyujd5cle3aa2qbn",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163653/leatherhavencraft/catalog/pelle-pelle/450/7/z4hxsomgqsjb2pncutco.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/7/z4hxsomgqsjb2pncutco",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163653/leatherhavencraft/catalog/pelle-pelle/450/7/t1bkuyujd5cle3aa2qbn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163653/leatherhavencraft/catalog/pelle-pelle/450/7/z4hxsomgqsjb2pncutco.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163655/leatherhavencraft/catalog/pelle-pelle/450/7/wmvbqtpxa6ppva7sc1cx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163655/leatherhavencraft/catalog/pelle-pelle/450/7/payagvdcqmkfuiayknxs.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163656/leatherhavencraft/catalog/pelle-pelle/450/7/tfduorfwriirmom6eav2.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163657/leatherhavencraft/catalog/pelle-pelle/450/7/xw7yzgd7rgqq2yn3gyfk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163658/leatherhavencraft/catalog/pelle-pelle/450/7/wfhqpvjgftmhffrfi6ov.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163658/leatherhavencraft/catalog/pelle-pelle/450/7/npiqxby6dba404uzmrfq.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/7/t1bkuyujd5cle3aa2qbn",
      "leatherhavencraft/catalog/pelle-pelle/450/7/z4hxsomgqsjb2pncutco",
      "leatherhavencraft/catalog/pelle-pelle/450/7/wmvbqtpxa6ppva7sc1cx",
      "leatherhavencraft/catalog/pelle-pelle/450/7/payagvdcqmkfuiayknxs",
      "leatherhavencraft/catalog/pelle-pelle/450/7/tfduorfwriirmom6eav2",
      "leatherhavencraft/catalog/pelle-pelle/450/7/xw7yzgd7rgqq2yn3gyfk",
      "leatherhavencraft/catalog/pelle-pelle/450/7/wfhqpvjgftmhffrfi6ov",
      "leatherhavencraft/catalog/pelle-pelle/450/7/npiqxby6dba404uzmrfq"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 32,
    "name": "Pelle Pelle Limited Edition Plush Jacket #8",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-8-450-8",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163660/leatherhavencraft/catalog/pelle-pelle/450/8/dzbb8nzajliuvwsmrpz3.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/8/dzbb8nzajliuvwsmrpz3",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163660/leatherhavencraft/catalog/pelle-pelle/450/8/xgtihuutrwvc3tbuxrpr.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/8/xgtihuutrwvc3tbuxrpr",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163660/leatherhavencraft/catalog/pelle-pelle/450/8/dzbb8nzajliuvwsmrpz3.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163660/leatherhavencraft/catalog/pelle-pelle/450/8/xgtihuutrwvc3tbuxrpr.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163661/leatherhavencraft/catalog/pelle-pelle/450/8/ncwybu9twyoyo2vambcm.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163662/leatherhavencraft/catalog/pelle-pelle/450/8/l4i4u1fzue0x1kanebxn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163663/leatherhavencraft/catalog/pelle-pelle/450/8/y0ncrqyxdxf7epneacce.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163663/leatherhavencraft/catalog/pelle-pelle/450/8/hhu5rheojq792rl9yo6b.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163665/leatherhavencraft/catalog/pelle-pelle/450/8/yvlc39pupn5s0vtbbvbo.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163666/leatherhavencraft/catalog/pelle-pelle/450/8/qdumtllnsmf46t5z22xv.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/8/dzbb8nzajliuvwsmrpz3",
      "leatherhavencraft/catalog/pelle-pelle/450/8/xgtihuutrwvc3tbuxrpr",
      "leatherhavencraft/catalog/pelle-pelle/450/8/ncwybu9twyoyo2vambcm",
      "leatherhavencraft/catalog/pelle-pelle/450/8/l4i4u1fzue0x1kanebxn",
      "leatherhavencraft/catalog/pelle-pelle/450/8/y0ncrqyxdxf7epneacce",
      "leatherhavencraft/catalog/pelle-pelle/450/8/hhu5rheojq792rl9yo6b",
      "leatherhavencraft/catalog/pelle-pelle/450/8/yvlc39pupn5s0vtbbvbo",
      "leatherhavencraft/catalog/pelle-pelle/450/8/qdumtllnsmf46t5z22xv"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 33,
    "name": "Pelle Pelle Limited Edition Plush Jacket #9",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-9-450-9",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163669/leatherhavencraft/catalog/pelle-pelle/450/9/wz9yfbwgquip9vfhvcbi.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/9/wz9yfbwgquip9vfhvcbi",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163668/leatherhavencraft/catalog/pelle-pelle/450/9/ofe1wmg5ikcaq4hotjsi.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/9/ofe1wmg5ikcaq4hotjsi",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163669/leatherhavencraft/catalog/pelle-pelle/450/9/wz9yfbwgquip9vfhvcbi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163668/leatherhavencraft/catalog/pelle-pelle/450/9/ofe1wmg5ikcaq4hotjsi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163670/leatherhavencraft/catalog/pelle-pelle/450/9/uuzlq1hwzlcupdkrbq2y.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163670/leatherhavencraft/catalog/pelle-pelle/450/9/k9l2a5aph9uubud6bglg.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163673/leatherhavencraft/catalog/pelle-pelle/450/9/eduj2pwmzbsymbm2klbc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163673/leatherhavencraft/catalog/pelle-pelle/450/9/pwxpvxzxxealjdlm98ya.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163674/leatherhavencraft/catalog/pelle-pelle/450/9/m2qvthjshmhodsrvn9zk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163675/leatherhavencraft/catalog/pelle-pelle/450/9/kscew3d8wozcbrc0zkih.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163676/leatherhavencraft/catalog/pelle-pelle/450/9/ttvlszo4z5z7yvf1imif.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/9/wz9yfbwgquip9vfhvcbi",
      "leatherhavencraft/catalog/pelle-pelle/450/9/ofe1wmg5ikcaq4hotjsi",
      "leatherhavencraft/catalog/pelle-pelle/450/9/uuzlq1hwzlcupdkrbq2y",
      "leatherhavencraft/catalog/pelle-pelle/450/9/k9l2a5aph9uubud6bglg",
      "leatherhavencraft/catalog/pelle-pelle/450/9/eduj2pwmzbsymbm2klbc",
      "leatherhavencraft/catalog/pelle-pelle/450/9/pwxpvxzxxealjdlm98ya",
      "leatherhavencraft/catalog/pelle-pelle/450/9/m2qvthjshmhodsrvn9zk",
      "leatherhavencraft/catalog/pelle-pelle/450/9/kscew3d8wozcbrc0zkih",
      "leatherhavencraft/catalog/pelle-pelle/450/9/ttvlszo4z5z7yvf1imif"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 34,
    "name": "Pelle Pelle Limited Edition Plush Jacket #10",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-10-450-10",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163679/leatherhavencraft/catalog/pelle-pelle/450/10/av3zvcqiwvzkleksdb5j.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/10/av3zvcqiwvzkleksdb5j",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163679/leatherhavencraft/catalog/pelle-pelle/450/10/hzdb0vqdmqqvvwl3qyxu.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/10/hzdb0vqdmqqvvwl3qyxu",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163679/leatherhavencraft/catalog/pelle-pelle/450/10/av3zvcqiwvzkleksdb5j.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163679/leatherhavencraft/catalog/pelle-pelle/450/10/hzdb0vqdmqqvvwl3qyxu.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163680/leatherhavencraft/catalog/pelle-pelle/450/10/azcqnyl2lriiw3kft0rj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163680/leatherhavencraft/catalog/pelle-pelle/450/10/gk4kztjuzbexflcrcqab.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163682/leatherhavencraft/catalog/pelle-pelle/450/10/dmvsunruclpv0uga2bmx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163682/leatherhavencraft/catalog/pelle-pelle/450/10/ofz0pixvucrjqcajl7rx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163683/leatherhavencraft/catalog/pelle-pelle/450/10/pbiivebt7sfcwkd62h9c.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163684/leatherhavencraft/catalog/pelle-pelle/450/10/gvlgpjnqbubwnnq8qxse.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163685/leatherhavencraft/catalog/pelle-pelle/450/10/khplbxonrldftkickxmx.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/10/av3zvcqiwvzkleksdb5j",
      "leatherhavencraft/catalog/pelle-pelle/450/10/hzdb0vqdmqqvvwl3qyxu",
      "leatherhavencraft/catalog/pelle-pelle/450/10/azcqnyl2lriiw3kft0rj",
      "leatherhavencraft/catalog/pelle-pelle/450/10/gk4kztjuzbexflcrcqab",
      "leatherhavencraft/catalog/pelle-pelle/450/10/dmvsunruclpv0uga2bmx",
      "leatherhavencraft/catalog/pelle-pelle/450/10/ofz0pixvucrjqcajl7rx",
      "leatherhavencraft/catalog/pelle-pelle/450/10/pbiivebt7sfcwkd62h9c",
      "leatherhavencraft/catalog/pelle-pelle/450/10/gvlgpjnqbubwnnq8qxse",
      "leatherhavencraft/catalog/pelle-pelle/450/10/khplbxonrldftkickxmx"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 35,
    "name": "Pelle Pelle Limited Edition Plush Jacket #11",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-11-450-11",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163687/leatherhavencraft/catalog/pelle-pelle/450/11/du0ffr0mvmf2xrfwt6yl.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/11/du0ffr0mvmf2xrfwt6yl",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163686/leatherhavencraft/catalog/pelle-pelle/450/11/yki2wyhmhk7snmt9it4d.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/11/yki2wyhmhk7snmt9it4d",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163687/leatherhavencraft/catalog/pelle-pelle/450/11/du0ffr0mvmf2xrfwt6yl.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163686/leatherhavencraft/catalog/pelle-pelle/450/11/yki2wyhmhk7snmt9it4d.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163688/leatherhavencraft/catalog/pelle-pelle/450/11/u4lisisympcztfehic3i.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163688/leatherhavencraft/catalog/pelle-pelle/450/11/ml0wrywuxkgecwh04m0b.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163689/leatherhavencraft/catalog/pelle-pelle/450/11/kivywit5lqeqrukbcpbw.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/11/du0ffr0mvmf2xrfwt6yl",
      "leatherhavencraft/catalog/pelle-pelle/450/11/yki2wyhmhk7snmt9it4d",
      "leatherhavencraft/catalog/pelle-pelle/450/11/u4lisisympcztfehic3i",
      "leatherhavencraft/catalog/pelle-pelle/450/11/ml0wrywuxkgecwh04m0b",
      "leatherhavencraft/catalog/pelle-pelle/450/11/kivywit5lqeqrukbcpbw"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 36,
    "name": "Pelle Pelle Limited Edition Plush Jacket #12",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-12-450-12",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163691/leatherhavencraft/catalog/pelle-pelle/450/12/kqjkckt4z8kvsmmpswgn.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/12/kqjkckt4z8kvsmmpswgn",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163691/leatherhavencraft/catalog/pelle-pelle/450/12/bhqyml5eyjlsnjeafpz6.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/12/bhqyml5eyjlsnjeafpz6",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163691/leatherhavencraft/catalog/pelle-pelle/450/12/kqjkckt4z8kvsmmpswgn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163691/leatherhavencraft/catalog/pelle-pelle/450/12/bhqyml5eyjlsnjeafpz6.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163693/leatherhavencraft/catalog/pelle-pelle/450/12/wbwl2ocpnqhnp1gs7bcu.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163693/leatherhavencraft/catalog/pelle-pelle/450/12/f2rb8momwpguoajv0wpw.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163694/leatherhavencraft/catalog/pelle-pelle/450/12/zbgwnmdmmedmgal9vhvc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163695/leatherhavencraft/catalog/pelle-pelle/450/12/ptq4rroejzcv5dkzfzim.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163696/leatherhavencraft/catalog/pelle-pelle/450/12/xiupqynr7o0zuheqxa95.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163696/leatherhavencraft/catalog/pelle-pelle/450/12/sdpjvw2ue38abcvuervd.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163697/leatherhavencraft/catalog/pelle-pelle/450/12/wiysl5pkae2hm63wuz2q.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163698/leatherhavencraft/catalog/pelle-pelle/450/12/jlosmvdyhgfi390okjhx.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/12/kqjkckt4z8kvsmmpswgn",
      "leatherhavencraft/catalog/pelle-pelle/450/12/bhqyml5eyjlsnjeafpz6",
      "leatherhavencraft/catalog/pelle-pelle/450/12/wbwl2ocpnqhnp1gs7bcu",
      "leatherhavencraft/catalog/pelle-pelle/450/12/f2rb8momwpguoajv0wpw",
      "leatherhavencraft/catalog/pelle-pelle/450/12/zbgwnmdmmedmgal9vhvc",
      "leatherhavencraft/catalog/pelle-pelle/450/12/ptq4rroejzcv5dkzfzim",
      "leatherhavencraft/catalog/pelle-pelle/450/12/xiupqynr7o0zuheqxa95",
      "leatherhavencraft/catalog/pelle-pelle/450/12/sdpjvw2ue38abcvuervd",
      "leatherhavencraft/catalog/pelle-pelle/450/12/wiysl5pkae2hm63wuz2q",
      "leatherhavencraft/catalog/pelle-pelle/450/12/jlosmvdyhgfi390okjhx"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 37,
    "name": "Pelle Pelle Black Copper Studded Edition",
    "slug": "pelle-pelle-pelle-pelle-black-copper-studded-edition-450-13",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163700/leatherhavencraft/catalog/pelle-pelle/450/13/mazvuagr2pfw9iaj6xga.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/13/mazvuagr2pfw9iaj6xga",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163700/leatherhavencraft/catalog/pelle-pelle/450/13/phwam5zgrofdjirarmcl.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/13/phwam5zgrofdjirarmcl",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163700/leatherhavencraft/catalog/pelle-pelle/450/13/mazvuagr2pfw9iaj6xga.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163700/leatherhavencraft/catalog/pelle-pelle/450/13/phwam5zgrofdjirarmcl.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163701/leatherhavencraft/catalog/pelle-pelle/450/13/yn1fuigvcfft6wwbreiv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163702/leatherhavencraft/catalog/pelle-pelle/450/13/upu61carl4dghzzzzsdj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163703/leatherhavencraft/catalog/pelle-pelle/450/13/qw69ruplux6n4bklkzin.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163704/leatherhavencraft/catalog/pelle-pelle/450/13/swlorzih9s0azrp0aueh.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163705/leatherhavencraft/catalog/pelle-pelle/450/13/gafbumwxywtz5iuchivq.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163705/leatherhavencraft/catalog/pelle-pelle/450/13/otgygn1upys7qxlwq2rg.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163707/leatherhavencraft/catalog/pelle-pelle/450/13/gvvg75igvkiu4eiykehe.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/13/mazvuagr2pfw9iaj6xga",
      "leatherhavencraft/catalog/pelle-pelle/450/13/phwam5zgrofdjirarmcl",
      "leatherhavencraft/catalog/pelle-pelle/450/13/yn1fuigvcfft6wwbreiv",
      "leatherhavencraft/catalog/pelle-pelle/450/13/upu61carl4dghzzzzsdj",
      "leatherhavencraft/catalog/pelle-pelle/450/13/qw69ruplux6n4bklkzin",
      "leatherhavencraft/catalog/pelle-pelle/450/13/swlorzih9s0azrp0aueh",
      "leatherhavencraft/catalog/pelle-pelle/450/13/gafbumwxywtz5iuchivq",
      "leatherhavencraft/catalog/pelle-pelle/450/13/otgygn1upys7qxlwq2rg",
      "leatherhavencraft/catalog/pelle-pelle/450/13/gvvg75igvkiu4eiykehe"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 38,
    "name": "Pelle Pelle Ash Grey Limited Edition",
    "slug": "pelle-pelle-pelle-pelle-ash-grey-limited-edition-450-14",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163708/leatherhavencraft/catalog/pelle-pelle/450/14/rwsfn5euk5tpod7mklob.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/14/rwsfn5euk5tpod7mklob",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163709/leatherhavencraft/catalog/pelle-pelle/450/14/lumzbtedfwl8mzqz54h6.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/14/lumzbtedfwl8mzqz54h6",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163708/leatherhavencraft/catalog/pelle-pelle/450/14/rwsfn5euk5tpod7mklob.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163709/leatherhavencraft/catalog/pelle-pelle/450/14/lumzbtedfwl8mzqz54h6.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163710/leatherhavencraft/catalog/pelle-pelle/450/14/h6ddhvw09qerhlrtmk1q.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163711/leatherhavencraft/catalog/pelle-pelle/450/14/on6bhbqxolqw1gopnxzb.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163711/leatherhavencraft/catalog/pelle-pelle/450/14/iyxibopxejqpxcq6w73d.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163713/leatherhavencraft/catalog/pelle-pelle/450/14/pczdputypxexmgoduj0e.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163713/leatherhavencraft/catalog/pelle-pelle/450/14/hzmfrdj9bk6gxtd6pi7f.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163714/leatherhavencraft/catalog/pelle-pelle/450/14/beilx1lzvfxxqeokdhgu.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/14/rwsfn5euk5tpod7mklob",
      "leatherhavencraft/catalog/pelle-pelle/450/14/lumzbtedfwl8mzqz54h6",
      "leatherhavencraft/catalog/pelle-pelle/450/14/h6ddhvw09qerhlrtmk1q",
      "leatherhavencraft/catalog/pelle-pelle/450/14/on6bhbqxolqw1gopnxzb",
      "leatherhavencraft/catalog/pelle-pelle/450/14/iyxibopxejqpxcq6w73d",
      "leatherhavencraft/catalog/pelle-pelle/450/14/pczdputypxexmgoduj0e",
      "leatherhavencraft/catalog/pelle-pelle/450/14/hzmfrdj9bk6gxtd6pi7f",
      "leatherhavencraft/catalog/pelle-pelle/450/14/beilx1lzvfxxqeokdhgu"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 39,
    "name": "Pelle Pelle Two-Tone Brown Teal Edition",
    "slug": "pelle-pelle-pelle-pelle-two-tone-brown-teal-edition-450-15",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163716/leatherhavencraft/catalog/pelle-pelle/450/15/at8zygzbcxlqojxvp6zm.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/15/at8zygzbcxlqojxvp6zm",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163716/leatherhavencraft/catalog/pelle-pelle/450/15/ekjdwam8euncsebcerr9.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/15/ekjdwam8euncsebcerr9",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163716/leatherhavencraft/catalog/pelle-pelle/450/15/at8zygzbcxlqojxvp6zm.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163716/leatherhavencraft/catalog/pelle-pelle/450/15/ekjdwam8euncsebcerr9.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163718/leatherhavencraft/catalog/pelle-pelle/450/15/vivhboktuuol0oybmq7q.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163718/leatherhavencraft/catalog/pelle-pelle/450/15/spsvgronkltvfczga4nx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163720/leatherhavencraft/catalog/pelle-pelle/450/15/q20zty4arm5awcbexbkt.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163720/leatherhavencraft/catalog/pelle-pelle/450/15/nedmnr9p2axyjnlowqui.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163722/leatherhavencraft/catalog/pelle-pelle/450/15/zfmhoievl3u9alkogjmt.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163722/leatherhavencraft/catalog/pelle-pelle/450/15/aivp1sntgsmlittlyqab.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/15/at8zygzbcxlqojxvp6zm",
      "leatherhavencraft/catalog/pelle-pelle/450/15/ekjdwam8euncsebcerr9",
      "leatherhavencraft/catalog/pelle-pelle/450/15/vivhboktuuol0oybmq7q",
      "leatherhavencraft/catalog/pelle-pelle/450/15/spsvgronkltvfczga4nx",
      "leatherhavencraft/catalog/pelle-pelle/450/15/q20zty4arm5awcbexbkt",
      "leatherhavencraft/catalog/pelle-pelle/450/15/nedmnr9p2axyjnlowqui",
      "leatherhavencraft/catalog/pelle-pelle/450/15/zfmhoievl3u9alkogjmt",
      "leatherhavencraft/catalog/pelle-pelle/450/15/aivp1sntgsmlittlyqab"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 40,
    "name": "Pelle Pelle Black & Crimson Red Plush Edition",
    "slug": "pelle-pelle-pelle-pelle-black-crimson-red-plush-edition-450-16",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163725/leatherhavencraft/catalog/pelle-pelle/450/16/jx1jklzlfvs323vbvzkv.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/16/jx1jklzlfvs323vbvzkv",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163725/leatherhavencraft/catalog/pelle-pelle/450/16/dxbrrvqpomrtyp0qiifr.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/16/dxbrrvqpomrtyp0qiifr",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163725/leatherhavencraft/catalog/pelle-pelle/450/16/jx1jklzlfvs323vbvzkv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163725/leatherhavencraft/catalog/pelle-pelle/450/16/dxbrrvqpomrtyp0qiifr.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163726/leatherhavencraft/catalog/pelle-pelle/450/16/qyhuhzwk5z3hjjo1zake.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163727/leatherhavencraft/catalog/pelle-pelle/450/16/ylkn9c5ehukjpffrt3xe.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163728/leatherhavencraft/catalog/pelle-pelle/450/16/dyanoyvmcxmrbjh8gfle.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163729/leatherhavencraft/catalog/pelle-pelle/450/16/ajciqlljezlb52qvbbsy.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163729/leatherhavencraft/catalog/pelle-pelle/450/16/knvfhbi6vcoomsthsgmd.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163731/leatherhavencraft/catalog/pelle-pelle/450/16/g0lvpilhmvxdnyqitcis.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163731/leatherhavencraft/catalog/pelle-pelle/450/16/lgxb7tocgymhugogi9rk.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/16/jx1jklzlfvs323vbvzkv",
      "leatherhavencraft/catalog/pelle-pelle/450/16/dxbrrvqpomrtyp0qiifr",
      "leatherhavencraft/catalog/pelle-pelle/450/16/qyhuhzwk5z3hjjo1zake",
      "leatherhavencraft/catalog/pelle-pelle/450/16/ylkn9c5ehukjpffrt3xe",
      "leatherhavencraft/catalog/pelle-pelle/450/16/dyanoyvmcxmrbjh8gfle",
      "leatherhavencraft/catalog/pelle-pelle/450/16/ajciqlljezlb52qvbbsy",
      "leatherhavencraft/catalog/pelle-pelle/450/16/knvfhbi6vcoomsthsgmd",
      "leatherhavencraft/catalog/pelle-pelle/450/16/g0lvpilhmvxdnyqitcis",
      "leatherhavencraft/catalog/pelle-pelle/450/16/lgxb7tocgymhugogi9rk"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 41,
    "name": "Pelle Pelle Vintage Brown Leather Edition",
    "slug": "pelle-pelle-pelle-pelle-vintage-brown-leather-edition-450-17",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163733/leatherhavencraft/catalog/pelle-pelle/450/17/iwgyttvtg8ufszw6qcv1.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/17/iwgyttvtg8ufszw6qcv1",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163733/leatherhavencraft/catalog/pelle-pelle/450/17/gzsykpfly7fz37inhtfn.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/17/gzsykpfly7fz37inhtfn",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163733/leatherhavencraft/catalog/pelle-pelle/450/17/iwgyttvtg8ufszw6qcv1.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163733/leatherhavencraft/catalog/pelle-pelle/450/17/gzsykpfly7fz37inhtfn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163735/leatherhavencraft/catalog/pelle-pelle/450/17/ysrajydhafc714hon5xm.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163735/leatherhavencraft/catalog/pelle-pelle/450/17/u8r8lghwfmvs097mgkhb.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163737/leatherhavencraft/catalog/pelle-pelle/450/17/kvolskvueymobikthtlx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163737/leatherhavencraft/catalog/pelle-pelle/450/17/muvibxpnwgbgjfysxqzl.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163739/leatherhavencraft/catalog/pelle-pelle/450/17/z6pvfq3fmhz5ildektub.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163739/leatherhavencraft/catalog/pelle-pelle/450/17/bdbacoxyji9bcp1bjfkk.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/17/iwgyttvtg8ufszw6qcv1",
      "leatherhavencraft/catalog/pelle-pelle/450/17/gzsykpfly7fz37inhtfn",
      "leatherhavencraft/catalog/pelle-pelle/450/17/ysrajydhafc714hon5xm",
      "leatherhavencraft/catalog/pelle-pelle/450/17/u8r8lghwfmvs097mgkhb",
      "leatherhavencraft/catalog/pelle-pelle/450/17/kvolskvueymobikthtlx",
      "leatherhavencraft/catalog/pelle-pelle/450/17/muvibxpnwgbgjfysxqzl",
      "leatherhavencraft/catalog/pelle-pelle/450/17/z6pvfq3fmhz5ildektub",
      "leatherhavencraft/catalog/pelle-pelle/450/17/bdbacoxyji9bcp1bjfkk"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 42,
    "name": "Pelle Pelle Olive Cabaret Edition",
    "slug": "pelle-pelle-pelle-pelle-olive-cabaret-edition-450-18",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163742/leatherhavencraft/catalog/pelle-pelle/450/18/gtqqtcbgygdjpulphal1.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/18/gtqqtcbgygdjpulphal1",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163742/leatherhavencraft/catalog/pelle-pelle/450/18/t1y9owhr0rtqdph3vsuj.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/18/t1y9owhr0rtqdph3vsuj",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163742/leatherhavencraft/catalog/pelle-pelle/450/18/gtqqtcbgygdjpulphal1.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163742/leatherhavencraft/catalog/pelle-pelle/450/18/t1y9owhr0rtqdph3vsuj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163743/leatherhavencraft/catalog/pelle-pelle/450/18/rvxzzxdel6xrtksbwvij.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163744/leatherhavencraft/catalog/pelle-pelle/450/18/mtb63vm3ikpkmafco00d.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163746/leatherhavencraft/catalog/pelle-pelle/450/18/b2cbdyrxlhcilwsd6doa.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163746/leatherhavencraft/catalog/pelle-pelle/450/18/zmf2idb6ssbjxajvtars.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/18/gtqqtcbgygdjpulphal1",
      "leatherhavencraft/catalog/pelle-pelle/450/18/t1y9owhr0rtqdph3vsuj",
      "leatherhavencraft/catalog/pelle-pelle/450/18/rvxzzxdel6xrtksbwvij",
      "leatherhavencraft/catalog/pelle-pelle/450/18/mtb63vm3ikpkmafco00d",
      "leatherhavencraft/catalog/pelle-pelle/450/18/b2cbdyrxlhcilwsd6doa",
      "leatherhavencraft/catalog/pelle-pelle/450/18/zmf2idb6ssbjxajvtars"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 43,
    "name": "Pelle Pelle Rolling Loud Special Edition",
    "slug": "pelle-pelle-pelle-pelle-rolling-loud-special-edition-450-19",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163747/leatherhavencraft/catalog/pelle-pelle/450/19/znduxeksc91awzcdoptm.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/19/znduxeksc91awzcdoptm",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163748/leatherhavencraft/catalog/pelle-pelle/450/19/pyxehm14g0kmzajx5hv4.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/19/pyxehm14g0kmzajx5hv4",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163747/leatherhavencraft/catalog/pelle-pelle/450/19/znduxeksc91awzcdoptm.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163748/leatherhavencraft/catalog/pelle-pelle/450/19/pyxehm14g0kmzajx5hv4.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163749/leatherhavencraft/catalog/pelle-pelle/450/19/wobfcdgud8zoiwlrwkgi.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163749/leatherhavencraft/catalog/pelle-pelle/450/19/xwyiltrdj2iv4lk5bi3y.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163751/leatherhavencraft/catalog/pelle-pelle/450/19/dnmzdtv75xptcpqnde2p.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163751/leatherhavencraft/catalog/pelle-pelle/450/19/eqtr9dafsprlyajpstsh.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163752/leatherhavencraft/catalog/pelle-pelle/450/19/fiazr0wtdctsqnpjx0nx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163752/leatherhavencraft/catalog/pelle-pelle/450/19/bxw9sahxtz9kijtqvqkh.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163754/leatherhavencraft/catalog/pelle-pelle/450/19/u8eauvc3qrtg7btxobqz.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/19/znduxeksc91awzcdoptm",
      "leatherhavencraft/catalog/pelle-pelle/450/19/pyxehm14g0kmzajx5hv4",
      "leatherhavencraft/catalog/pelle-pelle/450/19/wobfcdgud8zoiwlrwkgi",
      "leatherhavencraft/catalog/pelle-pelle/450/19/xwyiltrdj2iv4lk5bi3y",
      "leatherhavencraft/catalog/pelle-pelle/450/19/dnmzdtv75xptcpqnde2p",
      "leatherhavencraft/catalog/pelle-pelle/450/19/eqtr9dafsprlyajpstsh",
      "leatherhavencraft/catalog/pelle-pelle/450/19/fiazr0wtdctsqnpjx0nx",
      "leatherhavencraft/catalog/pelle-pelle/450/19/bxw9sahxtz9kijtqvqkh",
      "leatherhavencraft/catalog/pelle-pelle/450/19/u8eauvc3qrtg7btxobqz"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 44,
    "name": "Pelle Pelle Limited Edition Plush Jacket #20",
    "slug": "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-20-450-20",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163755/leatherhavencraft/catalog/pelle-pelle/450/20/jqvi4ipbiwcryjuixexc.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/450/20/jqvi4ipbiwcryjuixexc",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163755/leatherhavencraft/catalog/pelle-pelle/450/20/qlm7agce6sa7cer4sypv.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/450/20/qlm7agce6sa7cer4sypv",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163755/leatherhavencraft/catalog/pelle-pelle/450/20/jqvi4ipbiwcryjuixexc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163755/leatherhavencraft/catalog/pelle-pelle/450/20/qlm7agce6sa7cer4sypv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163756/leatherhavencraft/catalog/pelle-pelle/450/20/vsijozusuufohcpydg8u.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163756/leatherhavencraft/catalog/pelle-pelle/450/20/zlosec3pav4acz3bbrbe.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163757/leatherhavencraft/catalog/pelle-pelle/450/20/nt6nvqwhuiv07ectuwjy.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163757/leatherhavencraft/catalog/pelle-pelle/450/20/er9fbfhbixxgcnr5qyni.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/450/20/jqvi4ipbiwcryjuixexc",
      "leatherhavencraft/catalog/pelle-pelle/450/20/qlm7agce6sa7cer4sypv",
      "leatherhavencraft/catalog/pelle-pelle/450/20/vsijozusuufohcpydg8u",
      "leatherhavencraft/catalog/pelle-pelle/450/20/zlosec3pav4acz3bbrbe",
      "leatherhavencraft/catalog/pelle-pelle/450/20/nt6nvqwhuiv07ectuwjy",
      "leatherhavencraft/catalog/pelle-pelle/450/20/er9fbfhbixxgcnr5qyni"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 45,
    "name": "Pelle Pelle Collector Heavyweight Plush #1",
    "slug": "pelle-pelle-pelle-pelle-collector-heavyweight-plush-1-500-1",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163759/leatherhavencraft/catalog/pelle-pelle/500/1/ppthlqknjsklvdntyebv.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/500/1/ppthlqknjsklvdntyebv",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163759/leatherhavencraft/catalog/pelle-pelle/500/1/v8y8sigl24ipge1mtvb4.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/500/1/v8y8sigl24ipge1mtvb4",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163759/leatherhavencraft/catalog/pelle-pelle/500/1/ppthlqknjsklvdntyebv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163759/leatherhavencraft/catalog/pelle-pelle/500/1/v8y8sigl24ipge1mtvb4.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163761/leatherhavencraft/catalog/pelle-pelle/500/1/mqqmkziokjivzlswcyx0.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163762/leatherhavencraft/catalog/pelle-pelle/500/1/ng9irsefmbcedrekmg9n.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163764/leatherhavencraft/catalog/pelle-pelle/500/1/zx6x8olrjwmiovrvijvq.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163764/leatherhavencraft/catalog/pelle-pelle/500/1/c29qt0mfyirb7c5clsuc.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163765/leatherhavencraft/catalog/pelle-pelle/500/1/g7ypoxcgd6wwyukbtip6.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/500/1/ppthlqknjsklvdntyebv",
      "leatherhavencraft/catalog/pelle-pelle/500/1/v8y8sigl24ipge1mtvb4",
      "leatherhavencraft/catalog/pelle-pelle/500/1/mqqmkziokjivzlswcyx0",
      "leatherhavencraft/catalog/pelle-pelle/500/1/ng9irsefmbcedrekmg9n",
      "leatherhavencraft/catalog/pelle-pelle/500/1/zx6x8olrjwmiovrvijvq",
      "leatherhavencraft/catalog/pelle-pelle/500/1/c29qt0mfyirb7c5clsuc",
      "leatherhavencraft/catalog/pelle-pelle/500/1/g7ypoxcgd6wwyukbtip6"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 46,
    "name": "Pelle Pelle Collector Heavyweight Plush #2",
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
  },
  {
    "id": 47,
    "name": "Pelle Pelle Black Cabaret Collector Edition",
    "slug": "pelle-pelle-pelle-pelle-black-cabaret-collector-edition-500-3",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163775/leatherhavencraft/catalog/pelle-pelle/500/3/wyoe0o8veioaf10zbtxn.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/500/3/wyoe0o8veioaf10zbtxn",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163775/leatherhavencraft/catalog/pelle-pelle/500/3/qjnq2w5bbxq9z2fmidfv.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/500/3/qjnq2w5bbxq9z2fmidfv",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163775/leatherhavencraft/catalog/pelle-pelle/500/3/wyoe0o8veioaf10zbtxn.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163775/leatherhavencraft/catalog/pelle-pelle/500/3/qjnq2w5bbxq9z2fmidfv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163777/leatherhavencraft/catalog/pelle-pelle/500/3/rxzo6cj5ncbo96ubuvyu.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163777/leatherhavencraft/catalog/pelle-pelle/500/3/kevwsf0oc1mz0rgnzjpe.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163778/leatherhavencraft/catalog/pelle-pelle/500/3/wgpdmir8ltit4xhf2ogk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163779/leatherhavencraft/catalog/pelle-pelle/500/3/ge6gtcsyezs7692d5bzx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163780/leatherhavencraft/catalog/pelle-pelle/500/3/i6vtdyhsfa4sbalcsr2o.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163780/leatherhavencraft/catalog/pelle-pelle/500/3/lqmxc73cy11mkbfqtkeu.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/500/3/wyoe0o8veioaf10zbtxn",
      "leatherhavencraft/catalog/pelle-pelle/500/3/qjnq2w5bbxq9z2fmidfv",
      "leatherhavencraft/catalog/pelle-pelle/500/3/rxzo6cj5ncbo96ubuvyu",
      "leatherhavencraft/catalog/pelle-pelle/500/3/kevwsf0oc1mz0rgnzjpe",
      "leatherhavencraft/catalog/pelle-pelle/500/3/wgpdmir8ltit4xhf2ogk",
      "leatherhavencraft/catalog/pelle-pelle/500/3/ge6gtcsyezs7692d5bzx",
      "leatherhavencraft/catalog/pelle-pelle/500/3/i6vtdyhsfa4sbalcsr2o",
      "leatherhavencraft/catalog/pelle-pelle/500/3/lqmxc73cy11mkbfqtkeu"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 48,
    "name": "Pelle Pelle Ivory Cream Limited Edition",
    "slug": "pelle-pelle-pelle-pelle-ivory-cream-limited-edition-500-4",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163782/leatherhavencraft/catalog/pelle-pelle/500/4/yr4exlqbqqyk2j1blj9s.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/500/4/yr4exlqbqqyk2j1blj9s",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163782/leatherhavencraft/catalog/pelle-pelle/500/4/kk8m90pwi48mwrzb6ge9.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/500/4/kk8m90pwi48mwrzb6ge9",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163782/leatherhavencraft/catalog/pelle-pelle/500/4/yr4exlqbqqyk2j1blj9s.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163782/leatherhavencraft/catalog/pelle-pelle/500/4/kk8m90pwi48mwrzb6ge9.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163784/leatherhavencraft/catalog/pelle-pelle/500/4/wy6yd8ne5ctyono36kct.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163783/leatherhavencraft/catalog/pelle-pelle/500/4/zy2q8caf4pkvdeuqvpsv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163786/leatherhavencraft/catalog/pelle-pelle/500/4/vyykroo7ku8vpq6bwexa.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163785/leatherhavencraft/catalog/pelle-pelle/500/4/ufwuvemt19kervu2r9js.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163787/leatherhavencraft/catalog/pelle-pelle/500/4/pyrjqgqormc3nej2hkck.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/500/4/yr4exlqbqqyk2j1blj9s",
      "leatherhavencraft/catalog/pelle-pelle/500/4/kk8m90pwi48mwrzb6ge9",
      "leatherhavencraft/catalog/pelle-pelle/500/4/wy6yd8ne5ctyono36kct",
      "leatherhavencraft/catalog/pelle-pelle/500/4/zy2q8caf4pkvdeuqvpsv",
      "leatherhavencraft/catalog/pelle-pelle/500/4/vyykroo7ku8vpq6bwexa",
      "leatherhavencraft/catalog/pelle-pelle/500/4/ufwuvemt19kervu2r9js",
      "leatherhavencraft/catalog/pelle-pelle/500/4/pyrjqgqormc3nej2hkck"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 49,
    "name": "Pelle Pelle Midnight Navy Plush Edition",
    "slug": "pelle-pelle-pelle-pelle-midnight-navy-plush-edition-500-5",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163790/leatherhavencraft/catalog/pelle-pelle/500/5/udyhdwddueq9kbx2cpla.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/500/5/udyhdwddueq9kbx2cpla",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163789/leatherhavencraft/catalog/pelle-pelle/500/5/ag6jhvunz0vx7xhz5j2w.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/500/5/ag6jhvunz0vx7xhz5j2w",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163790/leatherhavencraft/catalog/pelle-pelle/500/5/udyhdwddueq9kbx2cpla.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163789/leatherhavencraft/catalog/pelle-pelle/500/5/ag6jhvunz0vx7xhz5j2w.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163791/leatherhavencraft/catalog/pelle-pelle/500/5/xf6x6gysrqlwqbdcwbci.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163791/leatherhavencraft/catalog/pelle-pelle/500/5/dlaawnjomvo0l0ds4wsu.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163793/leatherhavencraft/catalog/pelle-pelle/500/5/m8mdwckca6hezr5vrmac.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163794/leatherhavencraft/catalog/pelle-pelle/500/5/iblbskfnhnddeabt5bty.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163794/leatherhavencraft/catalog/pelle-pelle/500/5/bnowk0ezunc849igisea.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163795/leatherhavencraft/catalog/pelle-pelle/500/5/b0ladtptwgndfa3scuv5.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163796/leatherhavencraft/catalog/pelle-pelle/500/5/atkh3ppjh2dus0jp9kxk.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/500/5/udyhdwddueq9kbx2cpla",
      "leatherhavencraft/catalog/pelle-pelle/500/5/ag6jhvunz0vx7xhz5j2w",
      "leatherhavencraft/catalog/pelle-pelle/500/5/xf6x6gysrqlwqbdcwbci",
      "leatherhavencraft/catalog/pelle-pelle/500/5/dlaawnjomvo0l0ds4wsu",
      "leatherhavencraft/catalog/pelle-pelle/500/5/m8mdwckca6hezr5vrmac",
      "leatherhavencraft/catalog/pelle-pelle/500/5/iblbskfnhnddeabt5bty",
      "leatherhavencraft/catalog/pelle-pelle/500/5/bnowk0ezunc849igisea",
      "leatherhavencraft/catalog/pelle-pelle/500/5/b0ladtptwgndfa3scuv5",
      "leatherhavencraft/catalog/pelle-pelle/500/5/atkh3ppjh2dus0jp9kxk"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 50,
    "name": "Pelle Pelle Military Olive Edition",
    "slug": "pelle-pelle-pelle-pelle-military-olive-edition-500-6",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163798/leatherhavencraft/catalog/pelle-pelle/500/6/nvlxt7h8jyudxkeivahr.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/500/6/nvlxt7h8jyudxkeivahr",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163798/leatherhavencraft/catalog/pelle-pelle/500/6/xo92l7f8qqs0mzlmfbgm.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/500/6/xo92l7f8qqs0mzlmfbgm",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163798/leatherhavencraft/catalog/pelle-pelle/500/6/nvlxt7h8jyudxkeivahr.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163798/leatherhavencraft/catalog/pelle-pelle/500/6/xo92l7f8qqs0mzlmfbgm.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163800/leatherhavencraft/catalog/pelle-pelle/500/6/uv7lmsnzqoax6wntf9jj.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163800/leatherhavencraft/catalog/pelle-pelle/500/6/ambbyhpxsh3ziagt9xa9.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163801/leatherhavencraft/catalog/pelle-pelle/500/6/fyi295kvuflzkntcv3x0.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163802/leatherhavencraft/catalog/pelle-pelle/500/6/k7zkja1wkpiosozjgxxv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163804/leatherhavencraft/catalog/pelle-pelle/500/6/b3mhujz6xf5igstuxahv.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163804/leatherhavencraft/catalog/pelle-pelle/500/6/qwgifnrpwmjvvm8y88cp.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/500/6/nvlxt7h8jyudxkeivahr",
      "leatherhavencraft/catalog/pelle-pelle/500/6/xo92l7f8qqs0mzlmfbgm",
      "leatherhavencraft/catalog/pelle-pelle/500/6/uv7lmsnzqoax6wntf9jj",
      "leatherhavencraft/catalog/pelle-pelle/500/6/ambbyhpxsh3ziagt9xa9",
      "leatherhavencraft/catalog/pelle-pelle/500/6/fyi295kvuflzkntcv3x0",
      "leatherhavencraft/catalog/pelle-pelle/500/6/k7zkja1wkpiosozjgxxv",
      "leatherhavencraft/catalog/pelle-pelle/500/6/b3mhujz6xf5igstuxahv",
      "leatherhavencraft/catalog/pelle-pelle/500/6/qwgifnrpwmjvvm8y88cp"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  },
  {
    "id": 51,
    "name": "Pelle Pelle Vintage Brown Leather Edition",
    "slug": "pelle-pelle-pelle-pelle-vintage-brown-leather-edition-500-7",
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
    "image": "https://res.cloudinary.com/huvljadv/image/upload/v1791163806/leatherhavencraft/catalog/pelle-pelle/500/7/idyvpfqmpfydjiq8qawx.webp",
    "imagePublicId": "leatherhavencraft/catalog/pelle-pelle/500/7/idyvpfqmpfydjiq8qawx",
    "imageHover": "https://res.cloudinary.com/huvljadv/image/upload/v1791163806/leatherhavencraft/catalog/pelle-pelle/500/7/hbeji5tzvdqjcu7yrktw.webp",
    "imageHoverPublicId": "leatherhavencraft/catalog/pelle-pelle/500/7/hbeji5tzvdqjcu7yrktw",
    "images": [
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163806/leatherhavencraft/catalog/pelle-pelle/500/7/idyvpfqmpfydjiq8qawx.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163806/leatherhavencraft/catalog/pelle-pelle/500/7/hbeji5tzvdqjcu7yrktw.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163808/leatherhavencraft/catalog/pelle-pelle/500/7/krkdzke0uqwfixrlwqga.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163808/leatherhavencraft/catalog/pelle-pelle/500/7/xbvqz6tkqk1xevivnftk.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163810/leatherhavencraft/catalog/pelle-pelle/500/7/kyuqqg5th2vlnygqlrji.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163810/leatherhavencraft/catalog/pelle-pelle/500/7/qjflokkfys9gtiiypwv4.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163812/leatherhavencraft/catalog/pelle-pelle/500/7/e9vwyzvy1tlpkbuqjd1g.webp",
      "https://res.cloudinary.com/huvljadv/image/upload/v1791163812/leatherhavencraft/catalog/pelle-pelle/500/7/yayjdb7pjoksq1tzrujx.webp"
    ],
    "imagesPublicIds": [
      "leatherhavencraft/catalog/pelle-pelle/500/7/idyvpfqmpfydjiq8qawx",
      "leatherhavencraft/catalog/pelle-pelle/500/7/hbeji5tzvdqjcu7yrktw",
      "leatherhavencraft/catalog/pelle-pelle/500/7/krkdzke0uqwfixrlwqga",
      "leatherhavencraft/catalog/pelle-pelle/500/7/xbvqz6tkqk1xevivnftk",
      "leatherhavencraft/catalog/pelle-pelle/500/7/kyuqqg5th2vlnygqlrji",
      "leatherhavencraft/catalog/pelle-pelle/500/7/qjflokkfys9gtiiypwv4",
      "leatherhavencraft/catalog/pelle-pelle/500/7/e9vwyzvy1tlpkbuqjd1g",
      "leatherhavencraft/catalog/pelle-pelle/500/7/yayjdb7pjoksq1tzrujx"
    ],
    "hem": 410,
    "cuff": 418,
    "brand": "pelle-pelle",
    "svgExtra": ""
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brand === brandSlug);
}

export function getBrandLabel(slug: string): string {
  return getBrand(slug)?.name ?? slug;
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
          imagePublicId: raw.imagePublicId,
          imageHover: raw.imageHover || raw.image,
          imageHoverPublicId: raw.imageHoverPublicId,
          images: Array.isArray(raw.images) && raw.images.length > 0 ? raw.images : [raw.image, raw.imageHover].filter(Boolean),
          imagesPublicIds: raw.imagesPublicIds || [],
          hem: raw.hem || 410,
          cuff: raw.cuff || 418,
          svgExtra: raw.svgExtra || "",
        }));
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

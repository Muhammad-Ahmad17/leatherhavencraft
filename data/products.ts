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
  /** Discount percentage (0-100). When > 0, sale price and discount badges are displayed. */
  discountPercent?: number;
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
    id: "6ac2f47a30bd00af4c89d5f3",
    slug: "avirex-avirex-icon-squadron-pilot-jacket-7-300-7",
    name: "Archival Squadron Heavyweight Pilot Jacket #7",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163120/leatherhavencraft/catalog/avirex/300/7/q0rxxmsvytindssaur1o.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163119/leatherhavencraft/catalog/avirex/300/7/ilov0ssb8yuoqzg82zol.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163120/leatherhavencraft/catalog/avirex/300/7/q0rxxmsvytindssaur1o.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163119/leatherhavencraft/catalog/avirex/300/7/ilov0ssb8yuoqzg82zol.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163121/leatherhavencraft/catalog/avirex/300/7/ydh3thrnynw4am0utub8.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163122/leatherhavencraft/catalog/avirex/300/7/g3nssifigkhyjymavjzv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163124/leatherhavencraft/catalog/avirex/300/7/h0bjsrxptdo1nyyqkstw.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163125/leatherhavencraft/catalog/avirex/300/7/n1gcwj9vs6r7jyv2jxb4.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163127/leatherhavencraft/catalog/avirex/300/7/iticekic5ahlxggocvc5.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163127/leatherhavencraft/catalog/avirex/300/7/ozy9grbaqd0fwx7afzpr.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5f7",
    slug: "avirex-avirex-icon-squadron-pilot-jacket-9-300-9",
    name: "Archival Squadron Heavyweight Pilot Jacket #9",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163151/leatherhavencraft/catalog/avirex/300/9/vm3sbi6xcztaj5agcnsr.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163152/leatherhavencraft/catalog/avirex/300/9/kpgpbvdc2neiiwek0pk7.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163151/leatherhavencraft/catalog/avirex/300/9/vm3sbi6xcztaj5agcnsr.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163152/leatherhavencraft/catalog/avirex/300/9/kpgpbvdc2neiiwek0pk7.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163152/leatherhavencraft/catalog/avirex/300/9/mnoqg1nyjlxkjpemm47c.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163161/leatherhavencraft/catalog/avirex/300/9/ostt0kqfvrxmjr1gjkda.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163164/leatherhavencraft/catalog/avirex/300/9/wgaxzjle2bqboc5w8jcf.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163169/leatherhavencraft/catalog/avirex/300/9/um3twcp2jtmqmiid8mhb.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163170/leatherhavencraft/catalog/avirex/300/9/edu3faofic4wztjlvxlb.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d611",
    slug: "pelle-pelle-pelle-pelle-soda-club-yellow-edition-350-4",
    name: "Soda Club Archival Plush Leather Jacket \u2014 Vibrant Yellow",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 349,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#c99a2c",
    darkColor: "#0a0a0a",
    colorName: "Mustard Yellow",
    colors: [{"name": "Mustard Yellow", "hex": "#c99a2c"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163574/leatherhavencraft/catalog/pelle-pelle/350/4/hxn4iqvi9hewprsbtemc.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163573/leatherhavencraft/catalog/pelle-pelle/350/4/rldlgsovdxjwqqmtk83j.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163574/leatherhavencraft/catalog/pelle-pelle/350/4/hxn4iqvi9hewprsbtemc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163573/leatherhavencraft/catalog/pelle-pelle/350/4/rldlgsovdxjwqqmtk83j.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163575/leatherhavencraft/catalog/pelle-pelle/350/4/yw1ycjepniwropyzts6x.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163576/leatherhavencraft/catalog/pelle-pelle/350/4/zyk6fnvac0ejmth2wuzw.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163578/leatherhavencraft/catalog/pelle-pelle/350/4/os6yucqqwzklqg1tx3fx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163579/leatherhavencraft/catalog/pelle-pelle/350/4/finaanaqdc9ajikifnkt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163580/leatherhavencraft/catalog/pelle-pelle/350/4/il8lrgmmb7ssbc63nxjp.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163582/leatherhavencraft/catalog/pelle-pelle/350/4/pqiyeonvpsy5o8fnptsk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163582/leatherhavencraft/catalog/pelle-pelle/350/4/n5ysoiv2nqottbotjwmi.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163584/leatherhavencraft/catalog/pelle-pelle/350/4/oi6cp19mu0ofgzkifgsg.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163584/leatherhavencraft/catalog/pelle-pelle/350/4/j5sx6hn5hzbpotaxjljg.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d617",
    slug: "pelle-pelle-pelle-pelle-midnight-navy-plush-edition-350-7",
    name: "Archival Plush Leather Bomber \u2014 Midnight Navy Edition",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 349,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1b263b",
    darkColor: "#0a0a0a",
    colorName: "Midnight Navy",
    colors: [{"name": "Midnight Navy", "hex": "#1b263b"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163600/leatherhavencraft/catalog/pelle-pelle/350/7/bygemwzmuteqfgvhytdg.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163599/leatherhavencraft/catalog/pelle-pelle/350/7/gp5ywim45rud7j794oii.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163600/leatherhavencraft/catalog/pelle-pelle/350/7/bygemwzmuteqfgvhytdg.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163599/leatherhavencraft/catalog/pelle-pelle/350/7/gp5ywim45rud7j794oii.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163601/leatherhavencraft/catalog/pelle-pelle/350/7/rqonmx4qmkkpezdm0riq.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163602/leatherhavencraft/catalog/pelle-pelle/350/7/n9knajc6cykv5pmgfujg.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163602/leatherhavencraft/catalog/pelle-pelle/350/7/c3c28dy0q7zn6iuc4t2i.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163605/leatherhavencraft/catalog/pelle-pelle/350/7/rbtlrptcivhbjx3l2hp7.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163604/leatherhavencraft/catalog/pelle-pelle/350/7/qvadk5st91vyervqcq17.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163606/leatherhavencraft/catalog/pelle-pelle/350/7/frvpqy9ijjbjcxibog8k.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163606/leatherhavencraft/catalog/pelle-pelle/350/7/vuzd997b2f4lmku9fpo0.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d609",
    slug: "avirex-avirex-limited-edition-flight-jacket-7-450-7",
    name: "Heritage Military Flight Leather Jacket #7",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 449,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163491/leatherhavencraft/catalog/avirex/450/7/dknpor634j0eft8pwied.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163492/leatherhavencraft/catalog/avirex/450/7/lxzikstsi2wvvdudhikg.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163491/leatherhavencraft/catalog/avirex/450/7/dknpor634j0eft8pwied.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163492/leatherhavencraft/catalog/avirex/450/7/lxzikstsi2wvvdudhikg.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163490/leatherhavencraft/catalog/avirex/450/7/srsz5rscuk9ec1bkxrfz.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163490/leatherhavencraft/catalog/avirex/450/7/m6e01u3iuwptmxaflsfn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163494/leatherhavencraft/catalog/avirex/450/7/xy9t9cvfdgveyofsihtv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163501/leatherhavencraft/catalog/avirex/450/7/eodauuiwq2mqm6d4w0xu.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163501/leatherhavencraft/catalog/avirex/450/7/lxe36s9x5rmsno7ij5rj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163507/leatherhavencraft/catalog/avirex/450/7/dsmt0k9lqbo72urrix28.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163506/leatherhavencraft/catalog/avirex/450/7/gu8nteuazwjvjtqynddk.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5fb",
    slug: "avirex-avirex-icon-squadron-pilot-jacket-11-300-11",
    name: "Archival Squadron Heavyweight Pilot Jacket #11",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163213/leatherhavencraft/catalog/avirex/300/11/prcg7mbuigdvibntdafd.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163213/leatherhavencraft/catalog/avirex/300/11/l3nzg4hpmqfvazkrxvie.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163213/leatherhavencraft/catalog/avirex/300/11/prcg7mbuigdvibntdafd.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163213/leatherhavencraft/catalog/avirex/300/11/l3nzg4hpmqfvazkrxvie.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163219/leatherhavencraft/catalog/avirex/300/11/bv3skehqwdo5hp1g555w.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163218/leatherhavencraft/catalog/avirex/300/11/rmanp2xagxysevuwvcnj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163224/leatherhavencraft/catalog/avirex/300/11/jg1irkgfgdo60gfgoolw.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163223/leatherhavencraft/catalog/avirex/300/11/yen6kaagzhnz9jlwbxc6.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163229/leatherhavencraft/catalog/avirex/300/11/q0qzt9r7qmpilkzvbnep.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d619",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-1-450-1",
    name: "Archival Limited Edition Plush Leather Jacket #1",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163609/leatherhavencraft/catalog/pelle-pelle/450/1/jhz7kiaiigadcnxhxgqi.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163609/leatherhavencraft/catalog/pelle-pelle/450/1/dkdqtlhkvdngjgjpkdkk.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163609/leatherhavencraft/catalog/pelle-pelle/450/1/jhz7kiaiigadcnxhxgqi.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163609/leatherhavencraft/catalog/pelle-pelle/450/1/dkdqtlhkvdngjgjpkdkk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163610/leatherhavencraft/catalog/pelle-pelle/450/1/zeziq4zoaltjer8ryxor.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163611/leatherhavencraft/catalog/pelle-pelle/450/1/vkl8kxnrup61dq51ue5y.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163612/leatherhavencraft/catalog/pelle-pelle/450/1/nreg2ntv3r169zbnof1d.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d62f",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-12-450-12",
    name: "Archival Limited Edition Plush Leather Jacket #12",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163694/leatherhavencraft/catalog/pelle-pelle/450/12/zbgwnmdmmedmgal9vhvc.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163691/leatherhavencraft/catalog/pelle-pelle/450/12/kqjkckt4z8kvsmmpswgn.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163694/leatherhavencraft/catalog/pelle-pelle/450/12/zbgwnmdmmedmgal9vhvc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163691/leatherhavencraft/catalog/pelle-pelle/450/12/kqjkckt4z8kvsmmpswgn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163691/leatherhavencraft/catalog/pelle-pelle/450/12/bhqyml5eyjlsnjeafpz6.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163693/leatherhavencraft/catalog/pelle-pelle/450/12/wbwl2ocpnqhnp1gs7bcu.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163693/leatherhavencraft/catalog/pelle-pelle/450/12/f2rb8momwpguoajv0wpw.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163695/leatherhavencraft/catalog/pelle-pelle/450/12/ptq4rroejzcv5dkzfzim.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163696/leatherhavencraft/catalog/pelle-pelle/450/12/xiupqynr7o0zuheqxa95.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163696/leatherhavencraft/catalog/pelle-pelle/450/12/sdpjvw2ue38abcvuervd.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163697/leatherhavencraft/catalog/pelle-pelle/450/12/wiysl5pkae2hm63wuz2q.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163698/leatherhavencraft/catalog/pelle-pelle/450/12/jlosmvdyhgfi390okjhx.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d637",
    slug: "pelle-pelle-pelle-pelle-black-crimson-red-plush-edition-450-16",
    name: "Archival 1990s Plush Leather Bomber \u2014 Black & Crimson",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Black & Red",
    colors: [{"name": "Black & Red", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163725/leatherhavencraft/catalog/pelle-pelle/450/16/jx1jklzlfvs323vbvzkv.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163725/leatherhavencraft/catalog/pelle-pelle/450/16/dxbrrvqpomrtyp0qiifr.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163725/leatherhavencraft/catalog/pelle-pelle/450/16/jx1jklzlfvs323vbvzkv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163725/leatherhavencraft/catalog/pelle-pelle/450/16/dxbrrvqpomrtyp0qiifr.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163726/leatherhavencraft/catalog/pelle-pelle/450/16/qyhuhzwk5z3hjjo1zake.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163727/leatherhavencraft/catalog/pelle-pelle/450/16/ylkn9c5ehukjpffrt3xe.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163728/leatherhavencraft/catalog/pelle-pelle/450/16/dyanoyvmcxmrbjh8gfle.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163729/leatherhavencraft/catalog/pelle-pelle/450/16/ajciqlljezlb52qvbbsy.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163729/leatherhavencraft/catalog/pelle-pelle/450/16/knvfhbi6vcoomsthsgmd.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163731/leatherhavencraft/catalog/pelle-pelle/450/16/g0lvpilhmvxdnyqitcis.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163731/leatherhavencraft/catalog/pelle-pelle/450/16/lgxb7tocgymhugogi9rk.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d629",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-9-450-9",
    name: "Archival Limited Edition Plush Leather Jacket #9",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163669/leatherhavencraft/catalog/pelle-pelle/450/9/wz9yfbwgquip9vfhvcbi.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163668/leatherhavencraft/catalog/pelle-pelle/450/9/ofe1wmg5ikcaq4hotjsi.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163669/leatherhavencraft/catalog/pelle-pelle/450/9/wz9yfbwgquip9vfhvcbi.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163668/leatherhavencraft/catalog/pelle-pelle/450/9/ofe1wmg5ikcaq4hotjsi.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163670/leatherhavencraft/catalog/pelle-pelle/450/9/uuzlq1hwzlcupdkrbq2y.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163670/leatherhavencraft/catalog/pelle-pelle/450/9/k9l2a5aph9uubud6bglg.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163673/leatherhavencraft/catalog/pelle-pelle/450/9/eduj2pwmzbsymbm2klbc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163673/leatherhavencraft/catalog/pelle-pelle/450/9/pwxpvxzxxealjdlm98ya.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163674/leatherhavencraft/catalog/pelle-pelle/450/9/m2qvthjshmhodsrvn9zk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163675/leatherhavencraft/catalog/pelle-pelle/450/9/kscew3d8wozcbrc0zkih.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163676/leatherhavencraft/catalog/pelle-pelle/450/9/ttvlszo4z5z7yvf1imif.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d63b",
    slug: "pelle-pelle-pelle-pelle-olive-cabaret-edition-450-18",
    name: "Archival Plush Leather Bomber \u2014 Olive Cabaret Edition",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#484f33",
    darkColor: "#0a0a0a",
    colorName: "Olive Green",
    colors: [{"name": "Olive Green", "hex": "#484f33"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163742/leatherhavencraft/catalog/pelle-pelle/450/18/gtqqtcbgygdjpulphal1.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163742/leatherhavencraft/catalog/pelle-pelle/450/18/t1y9owhr0rtqdph3vsuj.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163742/leatherhavencraft/catalog/pelle-pelle/450/18/gtqqtcbgygdjpulphal1.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163742/leatherhavencraft/catalog/pelle-pelle/450/18/t1y9owhr0rtqdph3vsuj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163743/leatherhavencraft/catalog/pelle-pelle/450/18/rvxzzxdel6xrtksbwvij.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163744/leatherhavencraft/catalog/pelle-pelle/450/18/mtb63vm3ikpkmafco00d.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163746/leatherhavencraft/catalog/pelle-pelle/450/18/b2cbdyrxlhcilwsd6doa.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163746/leatherhavencraft/catalog/pelle-pelle/450/18/zmf2idb6ssbjxajvtars.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d649",
    slug: "pelle-pelle-pelle-pelle-midnight-navy-plush-edition-500-5",
    name: "Archival Plush Leather Bomber \u2014 Midnight Navy Edition",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 499,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1b263b",
    darkColor: "#0a0a0a",
    colorName: "Midnight Navy",
    colors: [{"name": "Midnight Navy", "hex": "#1b263b"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163790/leatherhavencraft/catalog/pelle-pelle/500/5/udyhdwddueq9kbx2cpla.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163789/leatherhavencraft/catalog/pelle-pelle/500/5/ag6jhvunz0vx7xhz5j2w.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163790/leatherhavencraft/catalog/pelle-pelle/500/5/udyhdwddueq9kbx2cpla.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163789/leatherhavencraft/catalog/pelle-pelle/500/5/ag6jhvunz0vx7xhz5j2w.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163791/leatherhavencraft/catalog/pelle-pelle/500/5/xf6x6gysrqlwqbdcwbci.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163791/leatherhavencraft/catalog/pelle-pelle/500/5/dlaawnjomvo0l0ds4wsu.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163793/leatherhavencraft/catalog/pelle-pelle/500/5/m8mdwckca6hezr5vrmac.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163794/leatherhavencraft/catalog/pelle-pelle/500/5/iblbskfnhnddeabt5bty.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163794/leatherhavencraft/catalog/pelle-pelle/500/5/bnowk0ezunc849igisea.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163795/leatherhavencraft/catalog/pelle-pelle/500/5/b0ladtptwgndfa3scuv5.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163796/leatherhavencraft/catalog/pelle-pelle/500/5/atkh3ppjh2dus0jp9kxk.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d621",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-5-450-5",
    name: "Archival Limited Edition Plush Leather Jacket #5",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163641/leatherhavencraft/catalog/pelle-pelle/450/5/p8cywsfqj3ay9mht4jjr.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163640/leatherhavencraft/catalog/pelle-pelle/450/5/aqoimpg3iqnlky834vj5.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163641/leatherhavencraft/catalog/pelle-pelle/450/5/p8cywsfqj3ay9mht4jjr.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163640/leatherhavencraft/catalog/pelle-pelle/450/5/aqoimpg3iqnlky834vj5.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163639/leatherhavencraft/catalog/pelle-pelle/450/5/lgnqrevrywxcyilm3pkk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163639/leatherhavencraft/catalog/pelle-pelle/450/5/lzrvo7pti2zgjvsriw9o.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163642/leatherhavencraft/catalog/pelle-pelle/450/5/spiaix4xe4mchh9eyxnj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163644/leatherhavencraft/catalog/pelle-pelle/450/5/lmkiozfaegv559ashuxp.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163643/leatherhavencraft/catalog/pelle-pelle/450/5/aguthibl4d4ohd9e1s5x.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d62d",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-11-450-11",
    name: "Archival Limited Edition Plush Leather Jacket #11",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163687/leatherhavencraft/catalog/pelle-pelle/450/11/du0ffr0mvmf2xrfwt6yl.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163686/leatherhavencraft/catalog/pelle-pelle/450/11/yki2wyhmhk7snmt9it4d.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163687/leatherhavencraft/catalog/pelle-pelle/450/11/du0ffr0mvmf2xrfwt6yl.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163686/leatherhavencraft/catalog/pelle-pelle/450/11/yki2wyhmhk7snmt9it4d.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163688/leatherhavencraft/catalog/pelle-pelle/450/11/u4lisisympcztfehic3i.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163688/leatherhavencraft/catalog/pelle-pelle/450/11/ml0wrywuxkgecwh04m0b.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163689/leatherhavencraft/catalog/pelle-pelle/450/11/kivywit5lqeqrukbcpbw.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d645",
    slug: "pelle-pelle-pelle-pelle-black-cabaret-collector-edition-500-3",
    name: "Collector Edition Black Cabaret Plush Leather Jacket",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 499,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Black",
    colors: [{"name": "Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163775/leatherhavencraft/catalog/pelle-pelle/500/3/wyoe0o8veioaf10zbtxn.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163775/leatherhavencraft/catalog/pelle-pelle/500/3/qjnq2w5bbxq9z2fmidfv.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163775/leatherhavencraft/catalog/pelle-pelle/500/3/wyoe0o8veioaf10zbtxn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163775/leatherhavencraft/catalog/pelle-pelle/500/3/qjnq2w5bbxq9z2fmidfv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163777/leatherhavencraft/catalog/pelle-pelle/500/3/rxzo6cj5ncbo96ubuvyu.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163777/leatherhavencraft/catalog/pelle-pelle/500/3/kevwsf0oc1mz0rgnzjpe.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163778/leatherhavencraft/catalog/pelle-pelle/500/3/wgpdmir8ltit4xhf2ogk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163779/leatherhavencraft/catalog/pelle-pelle/500/3/ge6gtcsyezs7692d5bzx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163780/leatherhavencraft/catalog/pelle-pelle/500/3/i6vtdyhsfa4sbalcsr2o.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163780/leatherhavencraft/catalog/pelle-pelle/500/3/lqmxc73cy11mkbfqtkeu.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d63d",
    slug: "pelle-pelle-pelle-pelle-rolling-loud-special-edition-450-19",
    name: "Special Edition Rolling Loud Plush Streetwear Jacket",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Black",
    colors: [{"name": "Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163747/leatherhavencraft/catalog/pelle-pelle/450/19/znduxeksc91awzcdoptm.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163748/leatherhavencraft/catalog/pelle-pelle/450/19/pyxehm14g0kmzajx5hv4.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163747/leatherhavencraft/catalog/pelle-pelle/450/19/znduxeksc91awzcdoptm.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163748/leatherhavencraft/catalog/pelle-pelle/450/19/pyxehm14g0kmzajx5hv4.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163749/leatherhavencraft/catalog/pelle-pelle/450/19/wobfcdgud8zoiwlrwkgi.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163749/leatherhavencraft/catalog/pelle-pelle/450/19/xwyiltrdj2iv4lk5bi3y.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163751/leatherhavencraft/catalog/pelle-pelle/450/19/dnmzdtv75xptcpqnde2p.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163751/leatherhavencraft/catalog/pelle-pelle/450/19/eqtr9dafsprlyajpstsh.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163752/leatherhavencraft/catalog/pelle-pelle/450/19/fiazr0wtdctsqnpjx0nx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163752/leatherhavencraft/catalog/pelle-pelle/450/19/bxw9sahxtz9kijtqvqkh.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163754/leatherhavencraft/catalog/pelle-pelle/450/19/u8eauvc3qrtg7btxobqz.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5f9",
    slug: "avirex-avirex-icon-squadron-pilot-jacket-10-300-10",
    name: "Archival Squadron Heavyweight Pilot Jacket #10",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163199/leatherhavencraft/catalog/avirex/300/10/ifcwoekjyraorqnjkqhl.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163202/leatherhavencraft/catalog/avirex/300/10/n7fpctllfsbxa477ijxl.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163199/leatherhavencraft/catalog/avirex/300/10/ifcwoekjyraorqnjkqhl.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163202/leatherhavencraft/catalog/avirex/300/10/n7fpctllfsbxa477ijxl.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163185/leatherhavencraft/catalog/avirex/300/10/mujjrggqrzocah1ntxkf.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163183/leatherhavencraft/catalog/avirex/300/10/q2agzdb7nuxtcbhjnp9r.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163191/leatherhavencraft/catalog/avirex/300/10/vecltpmeklixkaqp7p5w.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163191/leatherhavencraft/catalog/avirex/300/10/etttfkhwqwodx76mnl8y.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163200/leatherhavencraft/catalog/avirex/300/10/ffu0dzbxzgb0dyhjllkh.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163203/leatherhavencraft/catalog/avirex/300/10/ael8bjxc5wnofqgkq1tc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163204/leatherhavencraft/catalog/avirex/300/10/kz5bjpm8f4tgls5z5djj.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d633",
    slug: "pelle-pelle-pelle-pelle-ash-grey-limited-edition-450-14",
    name: "Archival Plush Leather Jacket \u2014 Ash Grey Edition",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#606060",
    darkColor: "#0a0a0a",
    colorName: "Ash Grey",
    colors: [{"name": "Ash Grey", "hex": "#606060"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163708/leatherhavencraft/catalog/pelle-pelle/450/14/rwsfn5euk5tpod7mklob.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163709/leatherhavencraft/catalog/pelle-pelle/450/14/lumzbtedfwl8mzqz54h6.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163708/leatherhavencraft/catalog/pelle-pelle/450/14/rwsfn5euk5tpod7mklob.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163709/leatherhavencraft/catalog/pelle-pelle/450/14/lumzbtedfwl8mzqz54h6.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163710/leatherhavencraft/catalog/pelle-pelle/450/14/h6ddhvw09qerhlrtmk1q.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163711/leatherhavencraft/catalog/pelle-pelle/450/14/on6bhbqxolqw1gopnxzb.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163711/leatherhavencraft/catalog/pelle-pelle/450/14/iyxibopxejqpxcq6w73d.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163713/leatherhavencraft/catalog/pelle-pelle/450/14/pczdputypxexmgoduj0e.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163713/leatherhavencraft/catalog/pelle-pelle/450/14/hzmfrdj9bk6gxtd6pi7f.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163714/leatherhavencraft/catalog/pelle-pelle/450/14/beilx1lzvfxxqeokdhgu.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d643",
    slug: "pelle-pelle-pelle-pelle-collector-heavyweight-plush-2-500-2",
    name: "Collector Heavyweight Plush Leather Jacket #2",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 499,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163768/leatherhavencraft/catalog/pelle-pelle/500/2/bjfegthniso1srqwnkua.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163767/leatherhavencraft/catalog/pelle-pelle/500/2/hgevhhcmr8oqebwyte38.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163768/leatherhavencraft/catalog/pelle-pelle/500/2/bjfegthniso1srqwnkua.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163767/leatherhavencraft/catalog/pelle-pelle/500/2/hgevhhcmr8oqebwyte38.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163769/leatherhavencraft/catalog/pelle-pelle/500/2/ikp9hb33p427joetpcii.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163770/leatherhavencraft/catalog/pelle-pelle/500/2/zco2xfqeovfaz36mryfk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163771/leatherhavencraft/catalog/pelle-pelle/500/2/agzil8gxughezydlbfgz.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163771/leatherhavencraft/catalog/pelle-pelle/500/2/edyhcjqrr7nguethbm4u.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163773/leatherhavencraft/catalog/pelle-pelle/500/2/xugfi6avowvyazeucrnh.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163773/leatherhavencraft/catalog/pelle-pelle/500/2/d5ayhegbycmjexj3crvm.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5ff",
    slug: "avirex-avirex-limited-tactical-bomber-2-450-2",
    name: "Heritage Tactical Flight Bomber Jacket #2",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 449,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163364/leatherhavencraft/catalog/avirex/450/2/yboyggqk6ihncvlfxxx2.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163364/leatherhavencraft/catalog/avirex/450/2/fkabkkuvs6yqofa699z0.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163364/leatherhavencraft/catalog/avirex/450/2/yboyggqk6ihncvlfxxx2.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163364/leatherhavencraft/catalog/avirex/450/2/fkabkkuvs6yqofa699z0.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163369/leatherhavencraft/catalog/avirex/450/2/gt2yiqfjx9h1vkdygl0l.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163369/leatherhavencraft/catalog/avirex/450/2/fckhblae8zoljdldihpd.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163378/leatherhavencraft/catalog/avirex/450/2/zibelfiw5zj3j6etriso.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163380/leatherhavencraft/catalog/avirex/450/2/axmpmkfhy6cb53pagdhi.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163382/leatherhavencraft/catalog/avirex/450/2/crfmkz2vr1fvuekxgwbb.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d607",
    slug: "avirex-avirex-limited-edition-flight-jacket-6-450-6",
    name: "Heritage Military Flight Leather Jacket #6",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 449,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163475/leatherhavencraft/catalog/avirex/450/6/iro5krjwlb4tuerpsbqc.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163476/leatherhavencraft/catalog/avirex/450/6/u2thnwbzv9zwdmsgfb3g.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163475/leatherhavencraft/catalog/avirex/450/6/iro5krjwlb4tuerpsbqc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163476/leatherhavencraft/catalog/avirex/450/6/u2thnwbzv9zwdmsgfb3g.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163465/leatherhavencraft/catalog/avirex/450/6/ya7krjdxu8vhflnjyxp4.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163464/leatherhavencraft/catalog/avirex/450/6/mbllxhck1ltljutq2okt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163466/leatherhavencraft/catalog/avirex/450/6/wx1ui7eodeakopw3bso0.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163469/leatherhavencraft/catalog/avirex/450/6/uanoyd01pryd5r1l5aik.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163471/leatherhavencraft/catalog/avirex/450/6/j97nx6lscrqmquccukua.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163474/leatherhavencraft/catalog/avirex/450/6/fwqobwrhc42tdegs4mvi.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d62b",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-10-450-10",
    name: "Archival Limited Edition Plush Leather Jacket #10",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163679/leatherhavencraft/catalog/pelle-pelle/450/10/av3zvcqiwvzkleksdb5j.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163679/leatherhavencraft/catalog/pelle-pelle/450/10/hzdb0vqdmqqvvwl3qyxu.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163679/leatherhavencraft/catalog/pelle-pelle/450/10/av3zvcqiwvzkleksdb5j.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163679/leatherhavencraft/catalog/pelle-pelle/450/10/hzdb0vqdmqqvvwl3qyxu.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163680/leatherhavencraft/catalog/pelle-pelle/450/10/azcqnyl2lriiw3kft0rj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163680/leatherhavencraft/catalog/pelle-pelle/450/10/gk4kztjuzbexflcrcqab.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163682/leatherhavencraft/catalog/pelle-pelle/450/10/dmvsunruclpv0uga2bmx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163682/leatherhavencraft/catalog/pelle-pelle/450/10/ofz0pixvucrjqcajl7rx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163683/leatherhavencraft/catalog/pelle-pelle/450/10/pbiivebt7sfcwkd62h9c.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163684/leatherhavencraft/catalog/pelle-pelle/450/10/gvlgpjnqbubwnnq8qxse.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163685/leatherhavencraft/catalog/pelle-pelle/450/10/khplbxonrldftkickxmx.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d64b",
    slug: "pelle-pelle-pelle-pelle-military-olive-edition-500-6",
    name: "Archival Plush Leather Bomber \u2014 Military Olive Edition",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 499,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#484f33",
    darkColor: "#0a0a0a",
    colorName: "Olive Green",
    colors: [{"name": "Olive Green", "hex": "#484f33"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163798/leatherhavencraft/catalog/pelle-pelle/500/6/nvlxt7h8jyudxkeivahr.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163798/leatherhavencraft/catalog/pelle-pelle/500/6/xo92l7f8qqs0mzlmfbgm.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163798/leatherhavencraft/catalog/pelle-pelle/500/6/nvlxt7h8jyudxkeivahr.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163798/leatherhavencraft/catalog/pelle-pelle/500/6/xo92l7f8qqs0mzlmfbgm.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163800/leatherhavencraft/catalog/pelle-pelle/500/6/uv7lmsnzqoax6wntf9jj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163800/leatherhavencraft/catalog/pelle-pelle/500/6/ambbyhpxsh3ziagt9xa9.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163801/leatherhavencraft/catalog/pelle-pelle/500/6/fyi295kvuflzkntcv3x0.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163802/leatherhavencraft/catalog/pelle-pelle/500/6/k7zkja1wkpiosozjgxxv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163804/leatherhavencraft/catalog/pelle-pelle/500/6/b3mhujz6xf5igstuxahv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163804/leatherhavencraft/catalog/pelle-pelle/500/6/qwgifnrpwmjvvm8y88cp.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5e9",
    slug: "avirex-avirex-b-3-sheepskin-shearling-bomber-300-1",
    name: "WWII Military Spec Heavy B-3 Sheepskin Shearling Bomber",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#3e271a",
    darkColor: "#0a0a0a",
    colorName: "Dark Brown",
    colors: [{"name": "Dark Brown", "hex": "#3e271a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791162944/leatherhavencraft/catalog/avirex/300/1/taumbkrdbocadl4n8rpt.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791162945/leatherhavencraft/catalog/avirex/300/1/ewo7wbvu3wgpzld2pczo.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791162944/leatherhavencraft/catalog/avirex/300/1/taumbkrdbocadl4n8rpt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162945/leatherhavencraft/catalog/avirex/300/1/ewo7wbvu3wgpzld2pczo.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162829/leatherhavencraft/catalog/avirex/300/1/qc2pxvyf5nl34bevvmlc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162822/leatherhavencraft/catalog/avirex/300/1/kv4wja2a0cfkdu1h3hgt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162938/leatherhavencraft/catalog/avirex/300/1/o0qyqr0hhpn01kpcx4ol.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162944/leatherhavencraft/catalog/avirex/300/1/mhg1obja9cexvliumql9.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162947/leatherhavencraft/catalog/avirex/300/1/j8rxeh9bfnewrhffd8v3.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162963/leatherhavencraft/catalog/avirex/300/1/toijma77xuoisgc9l5fz.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5ed",
    slug: "avirex-avirex-icon-squadron-pilot-jacket-4-300-4",
    name: "Archival Squadron Heavyweight Pilot Jacket #4",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791162977/leatherhavencraft/catalog/avirex/300/4/tye41g922jsabaduv9d4.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791162981/leatherhavencraft/catalog/avirex/300/4/clgegog7et9yleg5lw0t.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791162977/leatherhavencraft/catalog/avirex/300/4/tye41g922jsabaduv9d4.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162981/leatherhavencraft/catalog/avirex/300/4/clgegog7et9yleg5lw0t.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162981/leatherhavencraft/catalog/avirex/300/4/sdeddmq0p1wuoryvsumi.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162982/leatherhavencraft/catalog/avirex/300/4/dly04ywiotlae37ngibn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162983/leatherhavencraft/catalog/avirex/300/4/zoeltuvjj8gx6lj3hagw.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162983/leatherhavencraft/catalog/avirex/300/4/wlnuubzxkdi5m870aa3s.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162989/leatherhavencraft/catalog/avirex/300/4/u34rwaayjvcvsb6ol52k.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d60f",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-3-350-3",
    name: "Archival Limited Edition Plush Leather Jacket #3",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 349,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163566/leatherhavencraft/catalog/pelle-pelle/350/3/ohgrruw1gdkmomsvd9uy.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163567/leatherhavencraft/catalog/pelle-pelle/350/3/yaiobkj6ivbhvhxucwnj.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163566/leatherhavencraft/catalog/pelle-pelle/350/3/ohgrruw1gdkmomsvd9uy.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163567/leatherhavencraft/catalog/pelle-pelle/350/3/yaiobkj6ivbhvhxucwnj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163568/leatherhavencraft/catalog/pelle-pelle/350/3/ypht62c64rxp03webb9m.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163569/leatherhavencraft/catalog/pelle-pelle/350/3/eqeh193wgmywyeoscjsy.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163571/leatherhavencraft/catalog/pelle-pelle/350/3/yz4xamdvlmgz4hcwn14k.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d627",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-8-450-8",
    name: "Archival Limited Edition Plush Leather Jacket #8",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163660/leatherhavencraft/catalog/pelle-pelle/450/8/dzbb8nzajliuvwsmrpz3.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163660/leatherhavencraft/catalog/pelle-pelle/450/8/xgtihuutrwvc3tbuxrpr.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163660/leatherhavencraft/catalog/pelle-pelle/450/8/dzbb8nzajliuvwsmrpz3.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163660/leatherhavencraft/catalog/pelle-pelle/450/8/xgtihuutrwvc3tbuxrpr.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163661/leatherhavencraft/catalog/pelle-pelle/450/8/ncwybu9twyoyo2vambcm.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163662/leatherhavencraft/catalog/pelle-pelle/450/8/l4i4u1fzue0x1kanebxn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163663/leatherhavencraft/catalog/pelle-pelle/450/8/y0ncrqyxdxf7epneacce.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163663/leatherhavencraft/catalog/pelle-pelle/450/8/hhu5rheojq792rl9yo6b.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163665/leatherhavencraft/catalog/pelle-pelle/450/8/yvlc39pupn5s0vtbbvbo.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163666/leatherhavencraft/catalog/pelle-pelle/450/8/qdumtllnsmf46t5z22xv.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5f1",
    slug: "avirex-avirex-icon-flight-leather-jacket-6-300-6",
    name: "Heritage Icon Flight Leather Jacket #6",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#bc8e3e",
    darkColor: "#0a0a0a",
    colorName: "Yellow",
    colors: [{"name": "Yellow", "hex": "#bc8e3e"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163113/leatherhavencraft/catalog/avirex/300/6/cp7jznk6ctdbebrmdfmt.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163112/leatherhavencraft/catalog/avirex/300/6/qusfjsi91qeo18fn7qic.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163113/leatherhavencraft/catalog/avirex/300/6/cp7jznk6ctdbebrmdfmt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163112/leatherhavencraft/catalog/avirex/300/6/qusfjsi91qeo18fn7qic.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5fd",
    slug: "avirex-avirex-limited-edition-flight-jacket-1-450-1",
    name: "Heritage Military Flight Leather Jacket #1",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 449,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163303/leatherhavencraft/catalog/avirex/450/1/gljfutkfbllznvexxnkj.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163303/leatherhavencraft/catalog/avirex/450/1/ugksg6svzhql1o47nbi5.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163303/leatherhavencraft/catalog/avirex/450/1/gljfutkfbllznvexxnkj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163303/leatherhavencraft/catalog/avirex/450/1/ugksg6svzhql1o47nbi5.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163310/leatherhavencraft/catalog/avirex/450/1/lgbe26klj7vi3sxfspfj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163318/leatherhavencraft/catalog/avirex/450/1/luhwmadlrqlvdtxuiqnc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163331/leatherhavencraft/catalog/avirex/450/1/o8l4rnm5w5aqmiysfaex.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163327/leatherhavencraft/catalog/avirex/450/1/yastzd041fdrkze9m8l9.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d601",
    slug: "avirex-avirex-limited-edition-flight-jacket-3-450-3",
    name: "Heritage Military Flight Leather Jacket #3",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 449,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163421/leatherhavencraft/catalog/avirex/450/3/g91qkkieiqp9zo6l8vzq.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163421/leatherhavencraft/catalog/avirex/450/3/fsxloqpj0cxafeukfsjp.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163421/leatherhavencraft/catalog/avirex/450/3/g91qkkieiqp9zo6l8vzq.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163421/leatherhavencraft/catalog/avirex/450/3/fsxloqpj0cxafeukfsjp.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d605",
    slug: "avirex-avirex-limited-edition-flight-jacket-5-450-5",
    name: "Heritage Military Flight Leather Jacket #5",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 449,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163450/leatherhavencraft/catalog/avirex/450/5/lec0cgfm6fzcwmukea4i.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163450/leatherhavencraft/catalog/avirex/450/5/oyztbgcoujng7evc4b5v.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163450/leatherhavencraft/catalog/avirex/450/5/lec0cgfm6fzcwmukea4i.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163450/leatherhavencraft/catalog/avirex/450/5/oyztbgcoujng7evc4b5v.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163452/leatherhavencraft/catalog/avirex/450/5/xqvvfzgoffdcf4uttvvs.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163452/leatherhavencraft/catalog/avirex/450/5/qdyyapud1u3k7fb9niuz.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163457/leatherhavencraft/catalog/avirex/450/5/xo3f63noc8ifx3hgf4em.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163458/leatherhavencraft/catalog/avirex/450/5/ghmu4tmyegjozwdorzhp.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163459/leatherhavencraft/catalog/avirex/450/5/wlspnyhir9ohkkhlxfsz.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d613",
    slug: "pelle-pelle-pelle-pelle-burgundy-plush-edition-350-5",
    name: "Archival Plush Leather Bomber \u2014 Burgundy Edition",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 349,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#5c1324",
    darkColor: "#0a0a0a",
    colorName: "Burgundy Red",
    colors: [{"name": "Burgundy Red", "hex": "#5c1324"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163586/leatherhavencraft/catalog/pelle-pelle/350/5/ecuswk2altqqzppbqwsw.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163587/leatherhavencraft/catalog/pelle-pelle/350/5/lxaga1hyw88yyrts3rom.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163586/leatherhavencraft/catalog/pelle-pelle/350/5/ecuswk2altqqzppbqwsw.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163587/leatherhavencraft/catalog/pelle-pelle/350/5/lxaga1hyw88yyrts3rom.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163588/leatherhavencraft/catalog/pelle-pelle/350/5/f35czowqp1kpomagzq8a.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163588/leatherhavencraft/catalog/pelle-pelle/350/5/vnbb1guni1y5zsg3mh1e.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163590/leatherhavencraft/catalog/pelle-pelle/350/5/zpcqxjf24vhnbahn7j43.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d615",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-6-350-6",
    name: "Archival Limited Edition Plush Leather Jacket #6",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 349,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163592/leatherhavencraft/catalog/pelle-pelle/350/6/ooabt4axq6eozwrbctck.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163592/leatherhavencraft/catalog/pelle-pelle/350/6/k5elxlxfy1sqv2pohvui.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163592/leatherhavencraft/catalog/pelle-pelle/350/6/ooabt4axq6eozwrbctck.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163592/leatherhavencraft/catalog/pelle-pelle/350/6/k5elxlxfy1sqv2pohvui.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163593/leatherhavencraft/catalog/pelle-pelle/350/6/dd2wzwummojmh4jaexlz.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163595/leatherhavencraft/catalog/pelle-pelle/350/6/cwmh3ajdyae1xsqqpust.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163594/leatherhavencraft/catalog/pelle-pelle/350/6/cpkhuykhxqbjjoysglwf.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163596/leatherhavencraft/catalog/pelle-pelle/350/6/uozsoaqetca1zgenblte.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163597/leatherhavencraft/catalog/pelle-pelle/350/6/tqge0eck11gfgug7je6h.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163598/leatherhavencraft/catalog/pelle-pelle/350/6/z6voz3rzrucoriod7ktb.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5f5",
    slug: "avirex-avirex-icon-squadron-pilot-jacket-8-300-8",
    name: "Archival Squadron Heavyweight Pilot Jacket #8",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163132/leatherhavencraft/catalog/avirex/300/8/qjykgxjoegxl0tyrs9gy.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163132/leatherhavencraft/catalog/avirex/300/8/xvrb58ovnigeycuymeqv.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163132/leatherhavencraft/catalog/avirex/300/8/qjykgxjoegxl0tyrs9gy.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163132/leatherhavencraft/catalog/avirex/300/8/xvrb58ovnigeycuymeqv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163134/leatherhavencraft/catalog/avirex/300/8/hmcbzdcrnapskxqoesy7.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163134/leatherhavencraft/catalog/avirex/300/8/q5sukrspk7ih6p0rdwve.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163135/leatherhavencraft/catalog/avirex/300/8/stbrmhltaj3wvszl1hls.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163136/leatherhavencraft/catalog/avirex/300/8/hwv7bvmiley2r28qpega.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163142/leatherhavencraft/catalog/avirex/300/8/ioo524lqztgwjnx3eqgn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163142/leatherhavencraft/catalog/avirex/300/8/nmr0kdersxm3sxdxthja.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d603",
    slug: "avirex-avirex-limited-edition-flight-jacket-4-450-4",
    name: "Heritage Military Flight Leather Jacket #4",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 449,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163430/leatherhavencraft/catalog/avirex/450/4/pjg3bip5bekpnqzudrut.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163431/leatherhavencraft/catalog/avirex/450/4/htel8eqgkilihmrc8fub.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163430/leatherhavencraft/catalog/avirex/450/4/pjg3bip5bekpnqzudrut.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163431/leatherhavencraft/catalog/avirex/450/4/htel8eqgkilihmrc8fub.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163433/leatherhavencraft/catalog/avirex/450/4/ohyxlrcfms8suhiliikc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163433/leatherhavencraft/catalog/avirex/450/4/urun6vliq50lombb8mrf.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163440/leatherhavencraft/catalog/avirex/450/4/pxs3b3oqmogfxafwkici.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163439/leatherhavencraft/catalog/avirex/450/4/fik2ggslc2wnegsujnna.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163443/leatherhavencraft/catalog/avirex/450/4/vvi3kzjf5ccrhetw4svw.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d641",
    slug: "pelle-pelle-pelle-pelle-collector-heavyweight-plush-1-500-1",
    name: "Collector Heavyweight Plush Leather Jacket #1",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 499,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163759/leatherhavencraft/catalog/pelle-pelle/500/1/ppthlqknjsklvdntyebv.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163759/leatherhavencraft/catalog/pelle-pelle/500/1/v8y8sigl24ipge1mtvb4.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163759/leatherhavencraft/catalog/pelle-pelle/500/1/ppthlqknjsklvdntyebv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163759/leatherhavencraft/catalog/pelle-pelle/500/1/v8y8sigl24ipge1mtvb4.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163761/leatherhavencraft/catalog/pelle-pelle/500/1/mqqmkziokjivzlswcyx0.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163762/leatherhavencraft/catalog/pelle-pelle/500/1/ng9irsefmbcedrekmg9n.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163764/leatherhavencraft/catalog/pelle-pelle/500/1/zx6x8olrjwmiovrvijvq.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163764/leatherhavencraft/catalog/pelle-pelle/500/1/c29qt0mfyirb7c5clsuc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163765/leatherhavencraft/catalog/pelle-pelle/500/1/g7ypoxcgd6wwyukbtip6.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d61f",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-4-450-4",
    name: "Archival Limited Edition Plush Leather Jacket #4",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163634/leatherhavencraft/catalog/pelle-pelle/450/4/wrw6wpzhtyjmbb9pj4zc.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163633/leatherhavencraft/catalog/pelle-pelle/450/4/xgpem3muzeg1smggfk1t.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163634/leatherhavencraft/catalog/pelle-pelle/450/4/wrw6wpzhtyjmbb9pj4zc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163633/leatherhavencraft/catalog/pelle-pelle/450/4/xgpem3muzeg1smggfk1t.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163634/leatherhavencraft/catalog/pelle-pelle/450/4/aqb4l5vgsmd8ixyy5p5c.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163635/leatherhavencraft/catalog/pelle-pelle/450/4/z73yf13ihsseqvtafxvz.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163636/leatherhavencraft/catalog/pelle-pelle/450/4/gzmh3snyhshzfoqzfmrz.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163637/leatherhavencraft/catalog/pelle-pelle/450/4/jjauwjy6e4qadql2sqrz.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d625",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-7-450-7",
    name: "Archival Limited Edition Plush Leather Jacket #7",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163653/leatherhavencraft/catalog/pelle-pelle/450/7/t1bkuyujd5cle3aa2qbn.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163653/leatherhavencraft/catalog/pelle-pelle/450/7/z4hxsomgqsjb2pncutco.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163653/leatherhavencraft/catalog/pelle-pelle/450/7/t1bkuyujd5cle3aa2qbn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163653/leatherhavencraft/catalog/pelle-pelle/450/7/z4hxsomgqsjb2pncutco.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163655/leatherhavencraft/catalog/pelle-pelle/450/7/wmvbqtpxa6ppva7sc1cx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163655/leatherhavencraft/catalog/pelle-pelle/450/7/payagvdcqmkfuiayknxs.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163656/leatherhavencraft/catalog/pelle-pelle/450/7/tfduorfwriirmom6eav2.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163657/leatherhavencraft/catalog/pelle-pelle/450/7/xw7yzgd7rgqq2yn3gyfk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163658/leatherhavencraft/catalog/pelle-pelle/450/7/wfhqpvjgftmhffrfi6ov.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163658/leatherhavencraft/catalog/pelle-pelle/450/7/npiqxby6dba404uzmrfq.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d635",
    slug: "pelle-pelle-pelle-pelle-two-tone-brown-teal-edition-450-15",
    name: "Archival Plush Leather Bomber \u2014 Two-Tone Brown & Teal",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#3a2618",
    darkColor: "#0a0a0a",
    colorName: "Brown & Teal",
    colors: [{"name": "Brown & Teal", "hex": "#3a2618"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163716/leatherhavencraft/catalog/pelle-pelle/450/15/at8zygzbcxlqojxvp6zm.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163716/leatherhavencraft/catalog/pelle-pelle/450/15/ekjdwam8euncsebcerr9.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163716/leatherhavencraft/catalog/pelle-pelle/450/15/at8zygzbcxlqojxvp6zm.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163716/leatherhavencraft/catalog/pelle-pelle/450/15/ekjdwam8euncsebcerr9.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163718/leatherhavencraft/catalog/pelle-pelle/450/15/vivhboktuuol0oybmq7q.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163718/leatherhavencraft/catalog/pelle-pelle/450/15/spsvgronkltvfczga4nx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163720/leatherhavencraft/catalog/pelle-pelle/450/15/q20zty4arm5awcbexbkt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163720/leatherhavencraft/catalog/pelle-pelle/450/15/nedmnr9p2axyjnlowqui.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163722/leatherhavencraft/catalog/pelle-pelle/450/15/zfmhoievl3u9alkogjmt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163722/leatherhavencraft/catalog/pelle-pelle/450/15/aivp1sntgsmlittlyqab.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d647",
    slug: "pelle-pelle-pelle-pelle-ivory-cream-limited-edition-500-4",
    name: "Archival Plush Leather Jacket \u2014 Ivory Cream Edition",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 499,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#ede8dc",
    darkColor: "#0a0a0a",
    colorName: "Ivory Cream",
    colors: [{"name": "Ivory Cream", "hex": "#ede8dc"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163782/leatherhavencraft/catalog/pelle-pelle/500/4/yr4exlqbqqyk2j1blj9s.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163782/leatherhavencraft/catalog/pelle-pelle/500/4/kk8m90pwi48mwrzb6ge9.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163782/leatherhavencraft/catalog/pelle-pelle/500/4/yr4exlqbqqyk2j1blj9s.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163782/leatherhavencraft/catalog/pelle-pelle/500/4/kk8m90pwi48mwrzb6ge9.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163784/leatherhavencraft/catalog/pelle-pelle/500/4/wy6yd8ne5ctyono36kct.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163783/leatherhavencraft/catalog/pelle-pelle/500/4/zy2q8caf4pkvdeuqvpsv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163786/leatherhavencraft/catalog/pelle-pelle/500/4/vyykroo7ku8vpq6bwexa.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163785/leatherhavencraft/catalog/pelle-pelle/500/4/ufwuvemt19kervu2r9js.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163787/leatherhavencraft/catalog/pelle-pelle/500/4/pyrjqgqormc3nej2hkck.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d61d",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-3-450-3",
    name: "Archival Limited Edition Plush Leather Jacket #3",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163625/leatherhavencraft/catalog/pelle-pelle/450/3/cqqyqc0ec0hofz4xis2x.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163624/leatherhavencraft/catalog/pelle-pelle/450/3/tpkvzapvbdkacpar1z6l.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163625/leatherhavencraft/catalog/pelle-pelle/450/3/cqqyqc0ec0hofz4xis2x.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163624/leatherhavencraft/catalog/pelle-pelle/450/3/tpkvzapvbdkacpar1z6l.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163627/leatherhavencraft/catalog/pelle-pelle/450/3/bebd3jzcdjytfixjg0v7.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163627/leatherhavencraft/catalog/pelle-pelle/450/3/dgjkdnteibthlhikwy05.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163628/leatherhavencraft/catalog/pelle-pelle/450/3/vl8qdqjpj6qnq0clj5sy.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163629/leatherhavencraft/catalog/pelle-pelle/450/3/tz4azi0z80mejn5g4hi5.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163630/leatherhavencraft/catalog/pelle-pelle/450/3/fpxxf8mfpvcekywvzagt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163630/leatherhavencraft/catalog/pelle-pelle/450/3/jbyioyzkeb3psvjdnh1e.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163631/leatherhavencraft/catalog/pelle-pelle/450/3/c93uknhvvbw4hic18zy1.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d623",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-6-450-6",
    name: "Archival Limited Edition Plush Leather Jacket #6",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163646/leatherhavencraft/catalog/pelle-pelle/450/6/jack35ismpte0r9uecsq.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163646/leatherhavencraft/catalog/pelle-pelle/450/6/y8mqltubzrf6z5ejozql.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163646/leatherhavencraft/catalog/pelle-pelle/450/6/jack35ismpte0r9uecsq.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163646/leatherhavencraft/catalog/pelle-pelle/450/6/y8mqltubzrf6z5ejozql.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163647/leatherhavencraft/catalog/pelle-pelle/450/6/fwjxge8drlcwudwoa1id.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163648/leatherhavencraft/catalog/pelle-pelle/450/6/cydu8gzuuxcw2taoqbtc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163649/leatherhavencraft/catalog/pelle-pelle/450/6/apclblas35suglcafxln.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163650/leatherhavencraft/catalog/pelle-pelle/450/6/fhepwekjyrvwgwlsrn4p.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163651/leatherhavencraft/catalog/pelle-pelle/450/6/nci9nabzvkcrsp1cceil.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163651/leatherhavencraft/catalog/pelle-pelle/450/6/rqabrmu5k0wxre04n0lo.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d64d",
    slug: "pelle-pelle-pelle-pelle-vintage-brown-leather-edition-500-7",
    name: "Archival 1990s Plush Leather Bomber \u2014 Vintage Brown",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 499,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#442b1a",
    darkColor: "#0a0a0a",
    colorName: "Espresso Brown",
    colors: [{"name": "Espresso Brown", "hex": "#442b1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163806/leatherhavencraft/catalog/pelle-pelle/500/7/idyvpfqmpfydjiq8qawx.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163806/leatherhavencraft/catalog/pelle-pelle/500/7/hbeji5tzvdqjcu7yrktw.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163806/leatherhavencraft/catalog/pelle-pelle/500/7/idyvpfqmpfydjiq8qawx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163806/leatherhavencraft/catalog/pelle-pelle/500/7/hbeji5tzvdqjcu7yrktw.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163808/leatherhavencraft/catalog/pelle-pelle/500/7/krkdzke0uqwfixrlwqga.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163808/leatherhavencraft/catalog/pelle-pelle/500/7/xbvqz6tkqk1xevivnftk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163810/leatherhavencraft/catalog/pelle-pelle/500/7/kyuqqg5th2vlnygqlrji.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163810/leatherhavencraft/catalog/pelle-pelle/500/7/qjflokkfys9gtiiypwv4.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163812/leatherhavencraft/catalog/pelle-pelle/500/7/e9vwyzvy1tlpkbuqjd1g.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163812/leatherhavencraft/catalog/pelle-pelle/500/7/yayjdb7pjoksq1tzrujx.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d60d",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-2-350-2",
    name: "Archival Limited Edition Plush Leather Jacket #2",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 349,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163555/leatherhavencraft/catalog/pelle-pelle/350/2/eebjj0fi8w7gg6cvlkha.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163557/leatherhavencraft/catalog/pelle-pelle/350/2/txozjerbd6mqxrcxoh1o.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163555/leatherhavencraft/catalog/pelle-pelle/350/2/eebjj0fi8w7gg6cvlkha.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163557/leatherhavencraft/catalog/pelle-pelle/350/2/txozjerbd6mqxrcxoh1o.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163559/leatherhavencraft/catalog/pelle-pelle/350/2/upgvanv99vm8owqnurwb.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163560/leatherhavencraft/catalog/pelle-pelle/350/2/kvfpv6vrlouovwspb9uj.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d61b",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-2-450-2",
    name: "Archival Limited Edition Plush Leather Jacket #2",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163614/leatherhavencraft/catalog/pelle-pelle/450/2/zwcjuaf7foleifmcfffi.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163614/leatherhavencraft/catalog/pelle-pelle/450/2/oxdqghbvvdvctb5ge8wb.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163614/leatherhavencraft/catalog/pelle-pelle/450/2/zwcjuaf7foleifmcfffi.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163614/leatherhavencraft/catalog/pelle-pelle/450/2/oxdqghbvvdvctb5ge8wb.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163616/leatherhavencraft/catalog/pelle-pelle/450/2/rbhzgqm4tuks055k2lpk.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163617/leatherhavencraft/catalog/pelle-pelle/450/2/wzr6sekwlog0oxsjksfn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163618/leatherhavencraft/catalog/pelle-pelle/450/2/kbmimens3hphqiurchuf.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163618/leatherhavencraft/catalog/pelle-pelle/450/2/xbqmkf4gtfqqj6wst2sp.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163620/leatherhavencraft/catalog/pelle-pelle/450/2/fwiaoh02vlzfbshvx22p.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163620/leatherhavencraft/catalog/pelle-pelle/450/2/zlffdzhjkafv9b9fbhq6.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163621/leatherhavencraft/catalog/pelle-pelle/450/2/utbtb98n2tyvb6fjgtvw.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163622/leatherhavencraft/catalog/pelle-pelle/450/2/ei0qlesm0wbsadurfcbv.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5eb",
    slug: "avirex-avirex-b-3-sheepskin-shearling-bomber-300-2",
    name: "WWII Military Spec Heavy B-3 Sheepskin Shearling Bomber",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#3e271a",
    darkColor: "#0a0a0a",
    colorName: "Dark Brown",
    colors: [{"name": "Dark Brown", "hex": "#3e271a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791162973/leatherhavencraft/catalog/avirex/300/2/jm5zdajhzahqqg3sxykt.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791162976/leatherhavencraft/catalog/avirex/300/2/z9ibjkd7vgcbpi558pij.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791162973/leatherhavencraft/catalog/avirex/300/2/jm5zdajhzahqqg3sxykt.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162976/leatherhavencraft/catalog/avirex/300/2/z9ibjkd7vgcbpi558pij.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162966/leatherhavencraft/catalog/avirex/300/2/tsff4pjybin7tedsokye.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162967/leatherhavencraft/catalog/avirex/300/2/bvdyantuxfgdynatv4gc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162971/leatherhavencraft/catalog/avirex/300/2/pqemlvazamoapfgpcy90.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162969/leatherhavencraft/catalog/avirex/300/2/ibdfxaanxqyt53rvqmno.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791162974/leatherhavencraft/catalog/avirex/300/2/tdnzdphg7fouvaxb8v7j.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d5ef",
    slug: "avirex-avirex-heritage-racing-leather-jacket-300-5",
    name: "Heritage Speedway Racing Leather Jacket",
    brand: "avirex",
    category: "avirex",
    description: "Artisan master tribute to the historical Avirex aviation flight silhouette. Constructed from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs. Handcrafted in our independent workshop as an archival tribute; not affiliated with the trademark holders.",
    price: 299,
    meta: "Full-grain steerhide, heavy brass hardware, tailored anatomical fit",
    color: "#1e1e1e",
    darkColor: "#0a0a0a",
    colorName: "Black & White",
    colors: [{"name": "Black & White", "hex": "#1e1e1e"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163073/leatherhavencraft/catalog/avirex/300/5/c3bsfkq7jqwpxenvtyqu.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163044/leatherhavencraft/catalog/avirex/300/5/ptmx2el25hkqxwjvd7n9.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163073/leatherhavencraft/catalog/avirex/300/5/c3bsfkq7jqwpxenvtyqu.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163044/leatherhavencraft/catalog/avirex/300/5/ptmx2el25hkqxwjvd7n9.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163073/leatherhavencraft/catalog/avirex/300/5/djnhyij5heeej6zfdoiv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163090/leatherhavencraft/catalog/avirex/300/5/pzu1skvbz9gmepuf9nad.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163094/leatherhavencraft/catalog/avirex/300/5/mthq3lg4vizr51h813ja.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163095/leatherhavencraft/catalog/avirex/300/5/bcrl0yswagasdv2a5u7w.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163100/leatherhavencraft/catalog/avirex/300/5/ugtzkwe7yxp3w2wiji0z.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d60b",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-1-350-1",
    name: "Archival Limited Edition Plush Leather Jacket #1",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 349,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163515/leatherhavencraft/catalog/pelle-pelle/350/1/qedvxkhuloqvnh3plf9f.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163524/leatherhavencraft/catalog/pelle-pelle/350/1/rlwgnssncbynfwix62ca.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163515/leatherhavencraft/catalog/pelle-pelle/350/1/qedvxkhuloqvnh3plf9f.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163524/leatherhavencraft/catalog/pelle-pelle/350/1/rlwgnssncbynfwix62ca.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163519/leatherhavencraft/catalog/pelle-pelle/350/1/lyttpnwrzbolao9zio8c.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163526/leatherhavencraft/catalog/pelle-pelle/350/1/etr3w9ajchag6jfrtlhq.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163529/leatherhavencraft/catalog/pelle-pelle/350/1/cisfcbhygnobs59iapa6.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163536/leatherhavencraft/catalog/pelle-pelle/350/1/xe5vmpno7xj8dxcracaz.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163538/leatherhavencraft/catalog/pelle-pelle/350/1/zpby1zdhzcxhypq0thup.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163543/leatherhavencraft/catalog/pelle-pelle/350/1/f5sywbu6zbw3zhqmuvce.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d631",
    slug: "pelle-pelle-pelle-pelle-black-copper-studded-edition-450-13",
    name: "Archival Studded Plush Leather Jacket \u2014 Black Copper Edition",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#241d17",
    darkColor: "#0a0a0a",
    colorName: "Black & Copper",
    colors: [{"name": "Black & Copper", "hex": "#241d17"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163700/leatherhavencraft/catalog/pelle-pelle/450/13/mazvuagr2pfw9iaj6xga.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163700/leatherhavencraft/catalog/pelle-pelle/450/13/phwam5zgrofdjirarmcl.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163700/leatherhavencraft/catalog/pelle-pelle/450/13/mazvuagr2pfw9iaj6xga.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163700/leatherhavencraft/catalog/pelle-pelle/450/13/phwam5zgrofdjirarmcl.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163701/leatherhavencraft/catalog/pelle-pelle/450/13/yn1fuigvcfft6wwbreiv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163702/leatherhavencraft/catalog/pelle-pelle/450/13/upu61carl4dghzzzzsdj.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163703/leatherhavencraft/catalog/pelle-pelle/450/13/qw69ruplux6n4bklkzin.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163704/leatherhavencraft/catalog/pelle-pelle/450/13/swlorzih9s0azrp0aueh.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163705/leatherhavencraft/catalog/pelle-pelle/450/13/gafbumwxywtz5iuchivq.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163705/leatherhavencraft/catalog/pelle-pelle/450/13/otgygn1upys7qxlwq2rg.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163707/leatherhavencraft/catalog/pelle-pelle/450/13/gvvg75igvkiu4eiykehe.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d639",
    slug: "pelle-pelle-pelle-pelle-vintage-brown-leather-edition-450-17",
    name: "Archival 1990s Plush Leather Bomber \u2014 Vintage Brown",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#442b1a",
    darkColor: "#0a0a0a",
    colorName: "Espresso Brown",
    colors: [{"name": "Espresso Brown", "hex": "#442b1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163733/leatherhavencraft/catalog/pelle-pelle/450/17/iwgyttvtg8ufszw6qcv1.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163733/leatherhavencraft/catalog/pelle-pelle/450/17/gzsykpfly7fz37inhtfn.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163733/leatherhavencraft/catalog/pelle-pelle/450/17/iwgyttvtg8ufszw6qcv1.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163733/leatherhavencraft/catalog/pelle-pelle/450/17/gzsykpfly7fz37inhtfn.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163735/leatherhavencraft/catalog/pelle-pelle/450/17/ysrajydhafc714hon5xm.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163735/leatherhavencraft/catalog/pelle-pelle/450/17/u8r8lghwfmvs097mgkhb.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163737/leatherhavencraft/catalog/pelle-pelle/450/17/kvolskvueymobikthtlx.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163737/leatherhavencraft/catalog/pelle-pelle/450/17/muvibxpnwgbgjfysxqzl.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163739/leatherhavencraft/catalog/pelle-pelle/450/17/z6pvfq3fmhz5ildektub.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163739/leatherhavencraft/catalog/pelle-pelle/450/17/bdbacoxyji9bcp1bjfkk.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6ac2f47a30bd00af4c89d63f",
    slug: "pelle-pelle-pelle-pelle-limited-edition-plush-jacket-20-450-20",
    name: "Archival Limited Edition Plush Leather Jacket #20",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Authentic master tribute to Marc Buchanan's legendary Pelle Pelle plush leather silhouette. Featuring heavyweight hand-cut embroidered leather letterform appliques, studded accents, custom hardware, and comfortable anatomical drape. Handcrafted in our independent workshop as an archival tribute to historic hip-hop leather culture; not an official trademark piece.",
    price: 449,
    meta: "Supple plush leather, hand-cut embroidered appliques, satin lining",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    colors: [{"name": "Classic Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791163755/leatherhavencraft/catalog/pelle-pelle/450/20/jqvi4ipbiwcryjuixexc.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791163755/leatherhavencraft/catalog/pelle-pelle/450/20/qlm7agce6sa7cer4sypv.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791163755/leatherhavencraft/catalog/pelle-pelle/450/20/jqvi4ipbiwcryjuixexc.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163755/leatherhavencraft/catalog/pelle-pelle/450/20/qlm7agce6sa7cer4sypv.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163756/leatherhavencraft/catalog/pelle-pelle/450/20/vsijozusuufohcpydg8u.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163756/leatherhavencraft/catalog/pelle-pelle/450/20/zlosec3pav4acz3bbrbe.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163757/leatherhavencraft/catalog/pelle-pelle/450/20/nt6nvqwhuiv07ectuwjy.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791163757/leatherhavencraft/catalog/pelle-pelle/450/20/er9fbfhbixxgcnr5qyni.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89c556f5ed04f59b90a6",
    slug: "harley-davidson-h-d-trenton-leather-riding-jacket-350",
    name: "V-Twin Heritage: Trenton Leather Riding Jacket (Tribute Edition)",
    brand: "harley-davidson",
    category: "harley-davidson",
    description: "Bespoke artisanal tribute crafted by Leather Haven Craft, inspired by iconic American V-twin motorcycle riding silhouettes. Constructed from heavy 1.2\u20131.4mm full-grain steerhide, anatomical riding sleeves, action back articulation, and antiqued brass hardware. Handcrafted in our independent atelier; not an official licensed merchandise item.",
    price: 349,
    meta: "Artisan tribute piece \u00b7 Heavy full-grain cowhide \u00b7 Pre-curved motorcycle cut",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "V-Twin Black",
    colors: [{"name": "V-Twin Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791788752/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97014-25VM_ALT01_1791788732482.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791788773/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97014-25VM_F_1791788754848.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791788752/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97014-25VM_ALT01_1791788732482.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791788773/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97014-25VM_F_1791788754848.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791788803/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97014-25VM_ALT02_1791788777418.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791788978/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97014-25VM_B_1791788965785.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89c656f5ed04f59b90aa",
    slug: "harley-davidson-harley-davidson-men-s-auroral-ii-3-in-1-leather-jacket-350",
    name: "V-Twin Heritage: Auroral II 3-in-1 Riding Leather Jacket (Tribute Edition)",
    brand: "harley-davidson",
    category: "harley-davidson",
    description: "Bespoke artisanal tribute crafted by Leather Haven Craft, inspired by iconic American V-twin motorcycle riding silhouettes. Constructed from heavy 1.2\u20131.4mm full-grain steerhide, anatomical riding sleeves, action back articulation, and antiqued brass hardware. Handcrafted in our independent atelier; not an official licensed merchandise item.",
    price: 349,
    meta: "Artisan tribute piece \u00b7 Heavy full-grain cowhide \u00b7 Pre-curved motorcycle cut",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "V-Twin Black",
    colors: [{"name": "V-Twin Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791788983/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-21VM_ALT01_1791788979909.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791788991/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-21VM_F_1791788984213.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791788983/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-21VM_ALT01_1791788979909.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791788991/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-21VM_F_1791788984213.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791788999/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-21VM_ALT05_1791788992397.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789010/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-21VM_B_1791789000547.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89c756f5ed04f59b90ae",
    slug: "harley-davidson-harley-davidson-men-s-essential-convertible-leather-jacket-350",
    name: "V-Twin Heritage: Essential Convertible Riding Leather Jacket (Tribute Edition)",
    brand: "harley-davidson",
    category: "harley-davidson",
    description: "Bespoke artisanal tribute crafted by Leather Haven Craft, inspired by iconic American V-twin motorcycle riding silhouettes. Constructed from heavy 1.2\u20131.4mm full-grain steerhide, anatomical riding sleeves, action back articulation, and antiqued brass hardware. Handcrafted in our independent atelier; not an official licensed merchandise item.",
    price: 349,
    meta: "Artisan tribute piece \u00b7 Heavy full-grain cowhide \u00b7 Pre-curved motorcycle cut",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "V-Twin Black",
    colors: [{"name": "V-Twin Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789017/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97017-25VM_ALT01_1791789012498.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789026/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97017-25VM_F_1791789018715.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789017/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97017-25VM_ALT01_1791789012498.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789026/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97017-25VM_F_1791789018715.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789038/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/97017-25VM_B_1791789027841.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89c756f5ed04f59b90b2",
    slug: "harley-davidson-harley-davidson-men-s-swingarm-3-in-1-leather-jacket-350",
    name: "V-Twin Heritage: Swingarm 3-in-1 Riding Leather Jacket (Tribute Edition)",
    brand: "harley-davidson",
    category: "harley-davidson",
    description: "Bespoke artisanal tribute crafted by Leather Haven Craft, inspired by iconic American V-twin motorcycle riding silhouettes. Constructed from heavy 1.2\u20131.4mm full-grain steerhide, anatomical riding sleeves, action back articulation, and antiqued brass hardware. Handcrafted in our independent atelier; not an official licensed merchandise item.",
    price: 349,
    meta: "Artisan tribute piece \u00b7 Heavy full-grain cowhide \u00b7 Pre-curved motorcycle cut",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "V-Twin Black",
    colors: [{"name": "V-Twin Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789042/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98045-19VM_F_1791789039238.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789056/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98045-19VM_B_1791789043527.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789042/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98045-19VM_F_1791789039238.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789056/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98045-19VM_B_1791789043527.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89c856f5ed04f59b90b6",
    slug: "harley-davidson-harley-davidson-women-s-h-d-triple-vent-miss-enthusiast-ii-leather-riding-jacket-350",
    name: "V-Twin Heritage: Triple Vent Enthusiast II Leather Riding Jacket (Tribute Edition)",
    brand: "harley-davidson",
    category: "harley-davidson",
    description: "Bespoke artisanal tribute crafted by Leather Haven Craft, inspired by iconic American V-twin motorcycle riding silhouettes. Constructed from heavy 1.2\u20131.4mm full-grain steerhide, anatomical riding sleeves, action back articulation, and antiqued brass hardware. Handcrafted in our independent atelier; not an official licensed merchandise item.",
    price: 349,
    meta: "Artisan tribute piece \u00b7 Heavy full-grain cowhide \u00b7 Pre-curved motorcycle cut",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "V-Twin Black",
    colors: [{"name": "V-Twin Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789068/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-26VW_ALT01_1791789058191.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789088/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-26VW_F_1791789069997.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789068/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-26VW_ALT01_1791789058191.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789088/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-26VW_F_1791789069997.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789120/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-26VW_ALT02_1791789089543.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789152/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/98003-26VW_B_1791789130490.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89c956f5ed04f59b90ba",
    slug: "harley-davidson-infant-faux-leather-biker-jacket-350",
    name: "V-Twin Heritage: Infant Faux Leather Biker Jacket (Tribute Edition)",
    brand: "harley-davidson",
    category: "harley-davidson",
    description: "Bespoke artisanal tribute crafted by Leather Haven Craft, inspired by iconic American V-twin motorcycle riding silhouettes. Constructed from heavy 1.2\u20131.4mm full-grain steerhide, anatomical riding sleeves, action back articulation, and antiqued brass hardware. Handcrafted in our independent atelier; not an official licensed merchandise item.",
    price: 349,
    meta: "Artisan tribute piece \u00b7 Heavy full-grain cowhide \u00b7 Pre-curved motorcycle cut",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "V-Twin Black",
    colors: [{"name": "V-Twin Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789184/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/99564-24VY_ALT01_1791789153590.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789217/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/99564-24VY_F_1791789189250.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789184/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/99564-24VY_ALT01_1791789153590.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789217/leatherhavencraft/catalog/harley-davidson/leatherhavencraft/catalog/harley-davidson/99564-24VY_F_1791789189250.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89ca56f5ed04f59b90be",
    slug: "supreme-supreme-x-vanson-leathers-ghost-rider-jacket-500",
    name: "Archival 'Ghost Rider' Competition Leather Jacket (Tribute Edition)",
    brand: "supreme",
    category: "supreme",
    description: "Artisan collector recreation by Leather Haven Craft, paying tribute to iconic 1990s downtown New York and Japanese avant-garde archival leather silhouettes. Hand-cut top-grain leather appliques, custom heavy metal hardware, and tailored streetwear drape. Handcrafted independently; not an official collaboration product.",
    price: 499,
    meta: "Independent artisan tribute \u00b7 Competition full-grain hide \u00b7 Hand-cut appliques",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Archival Black",
    colors: [{"name": "Archival Black", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789223/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/6dfab969e5e78b6ccfa647c415c1eca65cd44477-1200x1051_1791789219202.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789229/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/89d40048a99b8a877ab9c1aad154e72eb7a63280-1200x1044_1791789224475.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789223/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/6dfab969e5e78b6ccfa647c415c1eca65cd44477-1200x1051_1791789219202.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789229/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/89d40048a99b8a877ab9c1aad154e72eb7a63280-1200x1044_1791789224475.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789234/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/5567d2374b1de818ba3c75d39d4423166ab4b11b-644x900_1791789229717.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789239/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/dd623d813a168970cfd567db326458fcdd53ad96-1200x1073_1791789236310.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789256/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/f79cd85b6209d362d3d7282911a99dde011f0198-1200x1068_1791789240626.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89cb56f5ed04f59b90c2",
    slug: "supreme-supreme-x-y-s-by-yohji-yamamoto-leather-jacket-1-370",
    name: "Avant-Garde Drape Leather Motorcycle Jacket \u2014 Pitch Black Edition (Tribute Edition)",
    brand: "supreme",
    category: "supreme",
    description: "Artisan collector recreation by Leather Haven Craft, paying tribute to iconic 1990s downtown New York and Japanese avant-garde archival leather silhouettes. Hand-cut top-grain leather appliques, custom heavy metal hardware, and tailored streetwear drape. Handcrafted independently; not an official collaboration product.",
    price: 369,
    meta: "Independent artisan tribute \u00b7 Competition full-grain hide \u00b7 Hand-cut appliques",
    color: "#111111",
    darkColor: "#0a0a0a",
    colorName: "Pitch Black",
    colors: [{"name": "Pitch Black", "hex": "#111111"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789285/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/665d6e36665330b509dac7df69bd0dc99c1cd49e-1440x1800_1791789257183.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789312/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/f1314d3d264ebab4e60865f7599f74c738579cfc-1440x1800_1791789288675.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789285/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/665d6e36665330b509dac7df69bd0dc99c1cd49e-1440x1800_1791789257183.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789312/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/f1314d3d264ebab4e60865f7599f74c738579cfc-1440x1800_1791789288675.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89cb56f5ed04f59b90c6",
    slug: "supreme-supreme-x-y-s-by-yohji-yamamoto-leather-jacket-2-370",
    name: "Avant-Garde Drape Leather Motorcycle Jacket \u2014 Distressed Studio Edition (Tribute Edition)",
    brand: "supreme",
    category: "supreme",
    description: "Artisan collector recreation by Leather Haven Craft, paying tribute to iconic 1990s downtown New York and Japanese avant-garde archival leather silhouettes. Hand-cut top-grain leather appliques, custom heavy metal hardware, and tailored streetwear drape. Handcrafted independently; not an official collaboration product.",
    price: 369,
    meta: "Independent artisan tribute \u00b7 Competition full-grain hide \u00b7 Hand-cut appliques",
    color: "#222222",
    darkColor: "#0a0a0a",
    colorName: "Distressed Black",
    colors: [{"name": "Distressed Black", "hex": "#222222"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789317/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/8b167dd73abb6bea069be9e6c68142a64c83fd9f-1440x1800_1791789313423.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789324/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/b5c192eea63f6ce3a54ed21d5694ecd66f41d602-1440x1800_1791789319881.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789317/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/8b167dd73abb6bea069be9e6c68142a64c83fd9f-1440x1800_1791789313423.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789324/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/b5c192eea63f6ce3a54ed21d5694ecd66f41d602-1440x1800_1791789319881.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89cd56f5ed04f59b90ca",
    slug: "supreme-supreme-vanson-leather-bones-jacket-1-370",
    name: "Skeleton Bones Racing Leather Jacket \u2014 Classic Black (Tribute Edition)",
    brand: "supreme",
    category: "supreme",
    description: "Artisan collector recreation by Leather Haven Craft, paying tribute to iconic 1990s downtown New York and Japanese avant-garde archival leather silhouettes. Hand-cut top-grain leather appliques, custom heavy metal hardware, and tailored streetwear drape. Handcrafted independently; not an official collaboration product.",
    price: 369,
    meta: "Independent artisan tribute \u00b7 Competition full-grain hide \u00b7 Hand-cut appliques",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Black & White Bones",
    colors: [{"name": "Black & White Bones", "hex": "#1a1a1a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789337/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/9e6071c93a56898b1bf50e3c5a6a56edb61c4da8-1200x1029_1791789324829.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789344/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/86b461daebc5720faff0861b2d96306561904308-1200x1008_1791789338898.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789337/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/9e6071c93a56898b1bf50e3c5a6a56edb61c4da8-1200x1029_1791789324829.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789344/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/86b461daebc5720faff0861b2d96306561904308-1200x1008_1791789338898.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789349/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/982ffb4d4c59b76899cb7c0526b9d04033a8c980-1200x967_1791789345057.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89ce56f5ed04f59b90ce",
    slug: "supreme-supreme-vanson-leather-bones-jacket-2-370",
    name: "Skeleton Bones Racing Leather Jacket \u2014 Racing Blue (Tribute Edition)",
    brand: "supreme",
    category: "supreme",
    description: "Artisan collector recreation by Leather Haven Craft, paying tribute to iconic 1990s downtown New York and Japanese avant-garde archival leather silhouettes. Hand-cut top-grain leather appliques, custom heavy metal hardware, and tailored streetwear drape. Handcrafted independently; not an official collaboration product.",
    price: 369,
    meta: "Independent artisan tribute \u00b7 Competition full-grain hide \u00b7 Hand-cut appliques",
    color: "#1e3a8a",
    darkColor: "#0a0a0a",
    colorName: "Royal Blue",
    colors: [{"name": "Royal Blue", "hex": "#1e3a8a"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789352/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/40fe911ae32b00e835cb806bc43e49854f192f8d-1200x1038_1791789350060.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789353/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/61c1689f588fe74ddad63327eaef947997dfc2ba-1200x980_1791789352678.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789352/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/40fe911ae32b00e835cb806bc43e49854f192f8d-1200x1038_1791789350060.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789353/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/61c1689f588fe74ddad63327eaef947997dfc2ba-1200x980_1791789352678.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789354/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/ec615bcbf33b4e898fa857fd8168ba540ea34796-1200x979_1791789353915.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89ce56f5ed04f59b90d2",
    slug: "supreme-supreme-vanson-leather-bones-jacket-3-370",
    name: "Skeleton Bones Racing Leather Jacket \u2014 Crimson Red (Tribute Edition)",
    brand: "supreme",
    category: "supreme",
    description: "Artisan collector recreation by Leather Haven Craft, paying tribute to iconic 1990s downtown New York and Japanese avant-garde archival leather silhouettes. Hand-cut top-grain leather appliques, custom heavy metal hardware, and tailored streetwear drape. Handcrafted independently; not an official collaboration product.",
    price: 369,
    meta: "Independent artisan tribute \u00b7 Competition full-grain hide \u00b7 Hand-cut appliques",
    color: "#991b1b",
    darkColor: "#0a0a0a",
    colorName: "Crimson Red",
    colors: [{"name": "Crimson Red", "hex": "#991b1b"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789356/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/190ec6a0cb535897cf831ab99480955c6d668e7d-1200x1029_1791789355167.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789357/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/9204ad9169087fcb84b4a8e1cbb783febd422618-1200x1008_1791789356820.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789356/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/190ec6a0cb535897cf831ab99480955c6d668e7d-1200x1029_1791789355167.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789357/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/9204ad9169087fcb84b4a8e1cbb783febd422618-1200x1008_1791789356820.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789359/leatherhavencraft/catalog/supreme/leatherhavencraft/catalog/supreme/d70549a67ad89afbae936d3afb8db17edb1f7222-1200x967_1791789358721.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89cf56f5ed04f59b90d6",
    slug: "others-maritime-submariner-double-breasted-leather-coat-210-10",
    name: "Maritime Submariner Double-Breasted Leather Coat",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#5a7489",
    darkColor: "#0a0a0a",
    colorName: "Slate Navy",
    colors: [{"name": "Slate Navy", "hex": "#5a7489"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789360/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/37%20%281%29_1791789360173.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789364/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/37%20%282%29_1791789363104.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789360/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/37%20%281%29_1791789360173.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789364/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/37%20%282%29_1791789363104.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789366/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/37%20%283%29_1791789365797.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789367/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/37%20%284%29_1791789367530.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789368/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/37%20%285%29_1791789368482.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d056f5ed04f59b90da",
    slug: "others-minimalist-european-biker-asymmetrical-leather-jacket-210-2",
    name: "Minimalist European Biker Asymmetrical Leather Jacket",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#1e1e24",
    darkColor: "#0a0a0a",
    colorName: "Midnight Black",
    colors: [{"name": "Midnight Black", "hex": "#1e1e24"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789370/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/3%20%281%29_1791789369418.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789376/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/3%20%282%29_1791789370628.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789370/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/3%20%281%29_1791789369418.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789376/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/3%20%282%29_1791789370628.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789380/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/3%20%283%29_1791789378744.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789382/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/3%20%284%29_1791789381235.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789383/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/3%20%285%29_1791789382717.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789385/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/3%20%286%29_1791789384508.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d156f5ed04f59b90de",
    slug: "others-heritage-double-rider-distressed-brown-leather-jacket-210-3",
    name: "Heritage Double-Rider Distressed Brown Leather Jacket",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#4c231d",
    darkColor: "#0a0a0a",
    colorName: "Oxblood Mahogany",
    colors: [{"name": "Oxblood Mahogany", "hex": "#4c231d"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789390/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/5%20%281%29_1791789386705.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789392/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/5%20%282%29_1791789391070.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789390/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/5%20%281%29_1791789386705.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789392/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/5%20%282%29_1791789391070.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789396/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/5%20%283%29_1791789393263.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789399/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/5%20%284%29_1791789397262.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d156f5ed04f59b90e2",
    slug: "others-vintage-suede-full-grain-field-utility-jacket-210-4",
    name: "Vintage Suede & Full-Grain Field Utility Jacket",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#8b6f6b",
    darkColor: "#0a0a0a",
    colorName: "Warm Taupe",
    colors: [{"name": "Warm Taupe", "hex": "#8b6f6b"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789401/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/6%20%281%29_1791789400136.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789402/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/6%20%282%29_1791789401998.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789401/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/6%20%281%29_1791789400136.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789402/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/6%20%282%29_1791789401998.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789403/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/6%20%283%29_1791789403257.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789404/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/6%20%284%29_1791789404267.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789405/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/6%20%285%29_1791789405464.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d256f5ed04f59b90e6",
    slug: "others-classic-melton-steerhide-highwayman-leather-jacket-210-5",
    name: "Classic Melton & Steerhide Highwayman Leather Jacket",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#271517",
    darkColor: "#0a0a0a",
    colorName: "Deep Espresso",
    colors: [{"name": "Deep Espresso", "hex": "#271517"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789407/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/13%20%281%29_1791789406539.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789409/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/13%20%282%29_1791789407956.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789407/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/13%20%281%29_1791789406539.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789409/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/13%20%282%29_1791789407956.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789410/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/13%20%283%29_1791789409679.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789412/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/13%20%284%29_1791789411102.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789413/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/13%20%285%29_1791789412718.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d356f5ed04f59b90ea",
    slug: "others-artisan-quilted-shoulder-moto-leather-jacket-210-6",
    name: "Artisan Quilted Shoulder Moto Leather Jacket",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#443833",
    darkColor: "#0a0a0a",
    colorName: "Antique Bark",
    colors: [{"name": "Antique Bark", "hex": "#443833"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789418/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/15%20%281%29_1791789414159.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789427/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/15%20%282%29_1791789419129.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789418/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/15%20%281%29_1791789414159.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789427/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/15%20%282%29_1791789419129.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789431/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/15%20%283%29_1791789428332.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789439/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/15%20%284%29_1791789432049.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789443/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/15%20%285%29_1791789439718.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789449/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/15%20%286%29_1791789444498.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d456f5ed04f59b90ee",
    slug: "others-speedway-track-master-genuine-leather-jacket-210-7",
    name: "Speedway Track Master Genuine Leather Jacket",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#222325",
    darkColor: "#0a0a0a",
    colorName: "Onyx Black",
    colors: [{"name": "Onyx Black", "hex": "#222325"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789453/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/9%20%281%29_1791789450269.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789456/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/9%20%282%29_1791789453638.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789453/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/9%20%281%29_1791789450269.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789456/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/9%20%282%29_1791789453638.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789459/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/9%20%283%29_1791789457328.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789466/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/9%20%284%29_1791789459733.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789470/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/9%20%285%29_1791789466830.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789474/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/9%20%286%29_1791789471133.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d556f5ed04f59b90f2",
    slug: "others-heritage-roadster-distressed-cognac-leather-jacket-210-8",
    name: "Heritage Roadster Distressed Cognac Leather Jacket",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#8d493b",
    darkColor: "#0a0a0a",
    colorName: "Cognac Amber",
    colors: [{"name": "Cognac Amber", "hex": "#8d493b"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789477/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/12%20%281%29_1791789475069.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789480/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/12%20%282%29_1791789478111.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789477/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/12%20%281%29_1791789475069.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789480/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/12%20%282%29_1791789478111.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789482/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/12%20%283%29_1791789480647.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789483/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/12%20%284%29_1791789482766.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789485/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/12%20%285%29_1791789484143.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d656f5ed04f59b90f6",
    slug: "others-tactical-aviator-collar-steerhide-leather-blouson-210-9",
    name: "Tactical Aviator Collar Steerhide Leather Blouson",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#535c4e",
    darkColor: "#0a0a0a",
    colorName: "Military Olive Brown",
    colors: [{"name": "Military Olive Brown", "hex": "#535c4e"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789486/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/19%20%281%29_1791789485656.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789488/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/19%20%282%29_1791789487046.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789486/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/19%20%281%29_1791789485656.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789488/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/19%20%282%29_1791789487046.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789489/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/19%20%283%29_1791789488894.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789490/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/19%20%284%29_1791789489832.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789491/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/19%20%285%29_1791789490886.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  },
  {
    id: "6acc89d756f5ed04f59b90fa",
    slug: "others-archival-stand-collar-caf-racer-leather-jacket-210-1",
    name: "Archival Stand-Collar Caf\u00e9 Racer Leather Jacket",
    brand: "others",
    category: "others",
    description: "Bespoke workshop piece handcrafted from premium top-grain hide with authentic metal hardware, tailored anatomical fit, and breathable satin lining. Engineered for enduring heirloom character and lifetime patina.",
    price: 209,
    meta: "Full-grain artisan hide, heavy Talon-style hardware, tailored cut",
    color: "#474546",
    darkColor: "#0a0a0a",
    colorName: "Vintage Charcoal",
    colors: [{"name": "Vintage Charcoal", "hex": "#474546"}],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: false,
    image: "https://res.cloudinary.com/huvljadv/image/upload/v1791789492/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/2%20%281%29_1791789492141.webp",
    imageHover: "https://res.cloudinary.com/huvljadv/image/upload/v1791789494/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/2%20%282%29_1791789493379.webp",
    images: ["https://res.cloudinary.com/huvljadv/image/upload/v1791789492/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/2%20%281%29_1791789492141.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789494/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/2%20%282%29_1791789493379.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789496/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/2%20%283%29_1791789494645.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789498/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/2%20%284%29_1791789496937.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789502/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/2%20%285%29_1791789499682.webp", "https://res.cloudinary.com/huvljadv/image/upload/v1791789507/leatherhavencraft/catalog/others/leatherhavencraft/catalog/others/2%20%286%29_1791789503490.webp"],
    hem: 410,
    cuff: 418,
    svgExtra: "",
  }
];

export function cleanProductSlug(slug: string): string {
  if (!slug) return "";
  let s = slug.toLowerCase().trim();
  const prefixes: [string, string][] = [
    ["pelle-pelle-pelle-pelle-", "pelle-pelle-"],
    ["avirex-avirex-", "avirex-"],
    ["supreme-supreme-", "supreme-"],
    ["harley-davidson-h-d-", "harley-davidson-"],
    ["harley-davidson-harley-davidson-", "harley-davidson-"],
  ];
  for (const [p, r] of prefixes) {
    if (s.startsWith(p)) {
      s = r + s.slice(p.length);
      break;
    }
  }
  return s;
}

export function getProduct(slug: string): Product | undefined {
  const normalized = slug.toLowerCase().trim();
  const cleaned = cleanProductSlug(normalized);
  
  // 1. Direct match on exact slug
  let match = products.find((p) => p.slug === normalized) || scrollModelProducts.find((p) => p.slug === normalized);
  if (match) return match;

  // 2. Match on cleaned slug
  match = products.find((p) => cleanProductSlug(p.slug) === cleaned) || scrollModelProducts.find((p) => cleanProductSlug(p.slug) === cleaned);
  return match;
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
  discountPercent?: number;
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
    discountPercent: raw.discountPercent !== undefined ? Number(raw.discountPercent) : 0,
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
        return mapRawProduct(json.data);
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
    id: "scroll-6",
    name: "Master Archive Double Rider Motorcycle Leather Jacket",
    slug: "schott-nyc-double-rider-motorcycle-leather-jacket",
    brand: "schott-nyc",
    category: "schott-nyc",
    description: "Iconic asymmetrical double rider motorcycle jacket handcrafted in heavyweight 1.4mm full-grain steerhide featuring vintage nickel Talon zippers, snap-down lapels, adjustable waist belt, and tailored bi-swing action back.",
    price: 349,
    discountPercent: 15,
    meta: "1.4mm full-grain steerhide, vintage Talon zippers, belted waist & bi-swing back",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
    featured: true,
    image: "/scroll-model/jacket-6.png",
    imageHover: "/scroll-model/jacket-6.png",
    hem: 410,
    cuff: 418,
    svgExtra: "",
    scrollJacketImage: "/scroll-model/jacket-6.webp",
  },
  {
    id: "scroll-1",
    name: "Heritage Tactical Flight Bomber Jacket #2",
    slug: "avirex-avirex-limited-tactical-bomber-2-450-2",
    brand: "avirex",
    category: "avirex",
    description: "Artisan flight bomber handcrafted from genuine heavy top-grain steerhide with period-accurate Talon zipper hardware, reinforced storm flap, quilted satin thermal lining, and tailored rib-knit cuffs.",
    price: 449,
    meta: "Full-grain steerhide, heavy brass hardware & tailored anatomical fit",
    color: "#1a1a1a",
    darkColor: "#0a0a0a",
    colorName: "Classic Black",
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
    name: "Soda Club 'New York' Archival Plush Leather Jacket",
    slug: "pelle-pelle-new-york-knicks-plush-leather-jacket",
    brand: "pelle-pelle",
    category: "pelle-pelle",
    description: "Handcrafted master tribute in supple full-grain lambskin with iconic New York chenille lettering, basketball embroidery, and Marc Buchanan atelier crest patches.",
    price: 349,
    meta: "Supple full-grain lambskin, custom chenille & Marc Buchanan crest",
    color: "#e66012",
    darkColor: "#1d4486",
    colorName: "Orange / Royal Blue",
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
    name: "V-Twin Heritage: Trenton Leather Riding Jacket (Tribute Edition)",
    slug: "harley-davidson-h-d-trenton-leather-riding-jacket-350",
    brand: "harley-davidson",
    category: "harley-davidson",
    description: "Authentic master recreation handcrafted from premium heavyweight full-grain cowhide, pre-curved riding sleeves, action back articulation, heavy antiqued metal hardware, and signature heritage motorcycle detailing.",
    price: 349,
    meta: "Heavyweight full-grain cowhide, action back & pre-curved riding fit",
    color: "#1a1a1a",
    darkColor: "#ea580c",
    colorName: "V-Twin Black",
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
    name: "WWII Military Spec Heavy B-3 Sheepskin Shearling Bomber",
    slug: "avirex-avirex-b-3-sheepskin-shearling-bomber-300-1",
    brand: "avirex",
    category: "avirex",
    description: "Historical WWII flight jacket bench-crafted from 20mm genuine merino shearling pelts with antiqued steerhide welts, dual throat latch buckles, and heavy brass zippers.",
    price: 299,
    meta: "Heavy 20mm shearling sheepskin pelt, double buckle collar & brass hardware",
    color: "#4a3528",
    darkColor: "#d4a373",
    colorName: "Aged Brown / Cream Shearling",
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
    name: "Archival Ghost Rider Competition Leather Jacket (Tribute Edition)",
    slug: "supreme-supreme-x-vanson-leathers-ghost-rider-jacket-500",
    brand: "supreme",
    category: "supreme",
    description: "Museum-tier master tribute bench-cut from ultra-premium competition full-grain cowhide, custom branded RiRi zippers, authentic chainstitched leather applique patches, and tailored boxy streetwear cut.",
    price: 499,
    meta: "Competition-grade cowhide, custom hardware & New York archival cut",
    color: "#f59e0b",
    darkColor: "#1a1a1a",
    colorName: "Archival Yellow Flames & Black",
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

export async function fetchLiveScrollProducts(limit = 6): Promise<Product[]> {
  return scrollModelProducts.slice(0, limit);
}


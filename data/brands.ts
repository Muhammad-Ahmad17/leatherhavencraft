export interface BrandHeritage {
  originYear: string;
  originPlace: string;
  signatureSilhouettes: string[];
  primaryHides: string;
  hardwareNotes: string;
  heritageStory: string[];
  authenticityPoints: string[];
  fitAndSizingGuide: string;
}

export interface Brand {
  slug: string;
  name: string;
  /** Served from public/brands. */
  logo: string;
  tagline: string;
  /** Stand-in colour behind the type if a photo fails to load. */
  accent: string;
  /** 3840×972. Replace with the designer's desktop file at this path. */
  heroDesktop: string;
  /** 1170×1560. Replace with the designer's mobile file at this path. */
  heroMobile: string;
  /** Rich archival editorial dossier for search engine authority and collector guidance. */
  heritage?: BrandHeritage;
}

export const brands: Brand[] = [
{
    slug: "leather-haven-craft",
    name: "Leather Haven Craft",
    logo: "/brands/leather-haven-craft.png",
    tagline: "Signature handcrafted leather outerwear and bespoke atelier goods.",
    accent: "#1f1610",
    heroDesktop: "/banners/leather-haven-craft-desktop.jpg",
    heroMobile: "/banners/leather-haven-craft-mobile.jpg",
    heritage: {
      originYear: "Atelier",
      originPlace: "Master Workshop & Bespoke Tailoring House",
      signatureSilhouettes: [
        "Bespoke Made-to-Measure Café Racer",
        "Artisan Double Rider Horween Moto",
        "Heritage Field & Bomber Jacket",
        "Custom Club & Private Label Commissions",
      ],
      primaryHides:
        "Full-Grain Horween Chromexcel (Chicago), Vegetable-Tanned Italian Steerhide, Naked Lambskin, and Scottish Shearling.",
      hardwareNotes:
        "Solid antique brass and matte gunmetal zippers, hand-peened copper rivets, Japanese breathable cupro linings, and hand-waxed bonded nylon thread.",
      heritageStory: [
        "Leather Haven Craft is our proprietary bespoke atelier and master workshop, created to preserve the fading art of bench-made leather tailoring. While fast-fashion mass produces garments with paper-thin bonded scraps, our master artisans construct outerwear one piece at a time using uncompromised full-grain hides sourced from historic global tanneries.",
        "Every Leather Haven Craft piece begins with careful hide grading: our master pattern-maker hand-inspects each hide for grain consistency, tensile strength, and natural character marks, ensuring that every panel across the chest, shoulders, and sleeves matches in density and drape.",
        "We operate a dedicated custom manufacturing department catering to individual made-to-measure tailoring, club outerwear orders, and private label commissions. Our size matrix spans XS through 6XL, with precision pattern adjustments ensuring an exact, personalized anatomical fit for every client.",
      ],
      authenticityPoints: [
        "Full-grain provenance: We exclusively use top-tier hides with untouched surface grain, developing a rich, personalized patina over decades of wear.",
        "Hand-stitched structural stress points: Pocket corners, collar junctions, and zipper ends are reinforced with internal leather bar tacks.",
        "Bespoke measurement guarantee: Custom made-to-measure orders are tailored to exact chest, shoulder, sleeve, and back length client specifications.",
        "Direct artisan access: Personal WhatsApp and email concierge consultation with our master pattern-makers before and during construction.",
      ],
      fitAndSizingGuide:
        "Offered in our Universal Gents Size Matrix spanning XS through 6XL, plus full bespoke made-to-measure adjustments. Standard sizing fits true to American outerwear standards with balanced shoulder slopes and articulated sleeves.",
    },
  },
{
    slug: "avirex",
    name: "Avirex",
    logo: "/brands/avirex.png",
    tagline: "Flight jackets built for the street.",
    accent: "#1c2430",
    heroDesktop: "/banners/avirex-desktop.jpg",
    heroMobile: "/banners/avirex-mobile.jpg",
    heritage: {
      originYear: "1975",
      originPlace: "Long Island City, New York",
      signatureSilhouettes: [
        "Iconic B-3 Shearling Sheepskin Bomber",
        "A-2 Flight Pilot Jacket",
        "G-1 Naval Aviator Leather",
        "Archival All-American Varsity Bomber",
      ],
      primaryHides:
        "Thick Antique Cowhide with Pull-Up Oils, Heavyweight Genuine Shearling Sheepskin Pelts, and Military Goatskin.",
      hardwareNotes:
        "Antiqued military-spec brass zippers, dual buckle throat latches, bi-swing action back pleats, and wool-blend knit storm cuffs.",
      heritageStory: [
        "Founded in Long Island City, New York in 1975 by Jeff Clyman, Avirex was born out of a deep reverence for the golden era of military aviation outerwear. Analyzing original WWII flight uniforms from the U.S. Army Air Corps and Navy, Avirex faithfully recreated the exact heavy shearling pelts, antique brass hardware, and vegetable-tanned hides required for high-altitude unpressurized cockpits.",
        "Avirex's uncompromising military authenticity quickly caught the attention of Hollywood and the Department of Defense. In 1986, Avirex supplied the iconic leather flight jackets worn by Tom Cruise in 'Top Gun', triggering a worldwide explosion in flight jacket enthusiasm. Concurrently, Avirex received official contracts to supply flight outerwear to the U.S. Air Force and NASA astronaut crews.",
        "In the 1990s and 2000s, Avirex became a monumental street fashion phenomenon across New York, London, and Paris. Hip-hop icons embraced the massive warmth and unmistakable silhouette of the Avirex B-3 Shearling and multi-badge flight bombers, cementing Avirex as an eternal winter uniform of luxury and resilience.",
      ],
      authenticityPoints: [
        "Natural sheepskin shearling: The fleece lining is the actual wool growing out of the sheepskin hide, not artificial synthetic polyester glued to a backing.",
        "Mil-spec inspection tags: Authentic military contract numbers, specification plaques, and historical squadron embroidery.",
        "Heavy-gauge antique brass Talon and Scovill zipper hardware designed for survival-grade endurance.",
        "Distinctive pull-up leather treatment: Bending the leather reveals lighter undertones as rich oils shift naturally beneath the grain.",
      ],
      fitAndSizingGuide:
        "Authentic military flight cut: Built with a generous, broad chest and deep armholes designed to accommodate thermal flight gear and high-altitude layering. True to size delivers an authentic vintage flight silhouette with comfortable room; size down if you prefer a slim, modern tailored profile.",
    },
  },
{
    slug: "pelle-pelle",
    name: "Pelle Pelle",
    logo: "/brands/pelle_pelle.png",
    tagline: "Bold leather with a Detroit cut.",
    accent: "#2a1214",
    heroDesktop: "/banners/pelle-pelle-desktop.jpg",
    heroMobile: "/banners/pelle-pelle-mobile.jpg",
    heritage: {
      originYear: "1978",
      originPlace: "Detroit, Michigan",
      signatureSilhouettes: [
        "Marc Buchanan Plush Bomber",
        "Enamel Studded Street Edition",
        "Legendary Soda Club Leather",
        "Crown Jewel Shearling Collar",
      ],
      primaryHides:
        "Ultra-Plush Naked Italian Lambskin, Drum-Dyed Nappa Leather, and Premium Shearling Sheepskin Pelts.",
      hardwareNotes:
        "Custom Pelle Pelle medallion zippers, hand-set enameled metal hardware, layered leather appliqué badges, and dimensional crest embroidery.",
      heritageStory: [
        "Founded in 1978 in Detroit, Michigan by visionary fashion designer Marc Buchanan, Pelle Pelle ('Leather Leather' in Italian) revolutionized urban luxury outerwear. Buchanan took high-fashion European leathercraft techniques and fused them with bold, uncompromising Detroit swagger, pioneering the oversized leather bomber that came to define hip-hop royalty.",
        "Throughout the golden era of the 1980s and 1990s, Pelle Pelle was the definitive statement of status and cultural triumph. Immortalized in music videos, album covers, and street corners from New York to Detroit and Chicago, Pelle Pelle was worn by legends including 2Pac, The Notorious B.I.G., 50 Cent, and Redman.",
        "Each archival Pelle Pelle piece represents a triumph of complex leather engineering: dozens of individual leather panels cut by hand, intricately layered into 3D multi-color relief graphics, accented with custom heavy metal hardware, and finished with plush satin jacquard linings.",
      ],
      authenticityPoints: [
        "Multi-layered graphic leather appliqué: Authentic pieces use genuine colored leather panels stitched together, never screen-printed imitation graphics.",
        "Heavy-gauge antiqued brass zipper tracks with smooth action and reinforced pull tabs.",
        "Plush, supple lambskin hand-feel: Authentic Pelle Pelle leather feels buttery soft to the touch with immediate drape and zero plastic stiffness.",
        "Heavy thermal jacquard or quilted satin interior lining with reinforced hanging chain.",
      ],
      fitAndSizingGuide:
        "Signature 1990s Detroit oversized silhouette: Cut broad across the chest and shoulders with deep armholes and an elasticated leather waistband designed to sit cleanly at hip level. For the authentic iconic baggy hip-hop drape, select your true size. For a more tailored modern fit, size down one step.",
    },
  },
{
    slug: "harley-davidson",
    name: "Harley-Davidson",
    logo: "/brands/harley_davidson.png",
    tagline: "Leather cut for the road.",
    accent: "#1a120e",
    heroDesktop: "/banners/harley-davidson-desktop.jpg",
    heroMobile: "/banners/harley-davidson-mobile.jpg",
    heritage: {
      originYear: "1903",
      originPlace: "Milwaukee, Wisconsin",
      signatureSilhouettes: [
        "Vintage Cruiser Moto Jacket",
        "Highway Touring Biker",
        "Bar & Shield Bomber",
        "Roadster Distressed Racer",
      ],
      primaryHides:
        "Competition-Grade 1.2–1.4mm Heavyweight Cowhide, Wax-Treated Buffalo Leather, and Distressed Steerhide.",
      hardwareNotes:
        "Heavy-gauge industrial YKK locking zippers, snap-down collar tabs, zippered bicep airflow vents, and kidney-support waist extensions.",
      heritageStory: [
        "Since William S. Harley and Arthur Davidson built their first motorcycle in Milwaukee in 1903, the Harley-Davidson name has stood as the undisputed beacon of open-road freedom. As motorcycle cruising evolved across the American interstate system, the demand for road-tested protective gear led to the development of Harley-Davidson’s legendary heavyweight leather program.",
        "Engineered to withstand brutal wind shear, asphalt abrasion, and unpredictable weather, every Harley-Davidson leather jacket incorporates thick competition-weight hides treated with proprietary natural waxes. Triple-needle seam construction ensures that critical impact zones retain structural integrity under extreme tension.",
        "Beyond technical road performance, Harley-Davidson leather outerwear represents an iconic cross-generational collector category. Archival pieces from the 1970s, 80s, and 90s feature deeply developed patina, embossed leather Bar & Shield logos, and hardware that only improves with hundreds of thousands of highway miles.",
      ],
      authenticityPoints: [
        "Deeply embossed or hand-stitched leather Bar & Shield emblem with high-density thread count.",
        "Engineered riding features: Action back shoulder pleats, zippered sleeve gussets, and interior body armor pockets.",
        "Industrial-strength antique brass or burnished nickel zippers with leather pull extensions for gloved operation.",
        "Heavyweight drum-dyed leather that shows subtle undertones (tea-core effect) as the top finish naturally distresses.",
      ],
      fitAndSizingGuide:
        "Engineered for riding ergonomics: Cut with extra room across the upper back and shoulders for comfortable handlebar reach, accompanied by extended sleeve lengths that do not pull back over wrists when arms are outstretched. Runs true to American sizing with a comfortable relaxed profile.",
    },
  },
{
    slug: "schott-nyc",
    name: "Schott NYC",
    logo: "/brands/schott_nyc.png",
    tagline: "The original American motorcycle jacket.",
    accent: "#141414",
    heroDesktop: "/banners/schott-nyc-desktop.jpg",
    heroMobile: "/banners/schott-nyc-mobile.jpg",
    heritage: {
      originYear: "1913",
      originPlace: "Lower East Side, New York City",
      signatureSilhouettes: [
        "Perfecto 618 / 613 One Star",
        "Café Racer 141 & 641",
        "A-2 Flight Bomber",
        "503 Wool-Lined Moto",
      ],
      primaryHides:
        "Heavyweight 3.5–4.0 oz U.S. Steerhide, Full-Grain Naked Cowhide, and Vegetable-Retanned Horsehide.",
      hardwareNotes:
        "Solid brass asymmetric front zipper, Schott NYC star-embossed snap buttons, underarm football-shaped armhole gussets, and nickel star epaulets.",
      heritageStory: [
        "Founded in 1913 by brothers Irving and Jack Schott in a basement on the Lower East Side of Manhattan, Schott NYC revolutionized outerwear forever. In 1928, Irving Schott designed and hand-sewed the world’s very first leather motorcycle jacket featuring an asymmetric zipper closure, christening it the 'Perfecto' after his favorite hand-rolled cigar.",
        "The Schott Perfecto quickly transformed from a durable piece of motorcyclist protective armor into the definitive international symbol of rebellion. When Marlon Brando zipped up his Schott 618 in the 1953 cult classic 'The Wild One', an entire youth culture archetype was born. Over subsequent decades, the jacket became the uniform of rock and roll royalty—worn religiously by James Dean, The Ramones at CBGB, Bruce Springsteen, and Debbie Harry.",
        "Over a century later, Schott NYC remains family-owned and operated in New Jersey, hand-cutting each hide with traditional shears, verifying grain alignment across every pattern piece, and using the exact heavy-gauge brass hardware that defined mid-century American craftsmanship.",
      ],
      authenticityPoints: [
        "Period-accurate heavy-gauge Talon or brass zippers with reinforced leather pull tags.",
        "Underarm bi-swing gussets (known as 'football' gussets) are tailored into the armpits to ensure unrestricted handlebar reach.",
        "Weight inspection: An authentic steerhide Perfecto weighs between 4.5 and 6.0 lbs, feeling dense, substantial, and naturally protective.",
        "Reinforced interior map pocket with quilted thermal or breathable satin lining and heavy-duty seams.",
      ],
      fitAndSizingGuide:
        "Classic vintage American motorcycle cut: trim through the ribs with a higher waistline designed to sit comfortably above a motorcycle fuel tank without bunching. For a traditional 1950s trim rock-and-roll silhouette, order your exact chest size. For layering over heavy knit sweaters or hoodies, we recommend sizing up one interval.",
    },
  },
{
    slug: "supreme",
    name: "Supreme",
    logo: "/brands/supreme.png",
    tagline: "Box-logo outerwear, season after season.",
    accent: "#3a1014",
    heroDesktop: "/banners/supreme-desktop.jpg",
    heroMobile: "/banners/supreme-mobile.jpg",
    heritage: {
      originYear: "1994",
      originPlace: "Lafayette Street, Manhattan, New York",
      signatureSilhouettes: [
        "Archival Moto Leather Jacket",
        "Schott NYC Collaborative Perfecto",
        "Vanson Leathers Racing Jacket",
        "Leather Track & Bomber Archive",
      ],
      primaryHides:
        "Full-Grain Calfskin, Drum-Dyed Cowhide, Perforated Competition Leather, and Soft Lambskin.",
      hardwareNotes:
        "Heavy RiRi and YKK zippers, custom enamel box logo snaps, embroidered leather typography, and custom quilted viscose linings.",
      heritageStory: [
        "Established on Lafayette Street in downtown Manhattan in April 1994 by James Jebbia, Supreme evolved from an independent skaters' clubhouse into the single most influential streetwear institution on the planet. From its earliest days, Supreme respected heritage craftsmanship, consistently partnering with historic American outerwear makers.",
        "Supreme’s leather outerwear program represents the ultimate intersection of downtown New York counterculture and museum-tier leather manufacturing. Regular long-term collaborative capsules with century-old titans like Schott NYC and Boston’s Vanson Leathers merge time-honored heavy hides with avant-garde typography, color-blocking, and limited release editions.",
        "Because Supreme leather jackets are produced in strictly capped runs and sell out in seconds, archival pieces appreciate significantly in value, collected by connoisseurs worldwide as wearable artifacts of contemporary streetwear history.",
      ],
      authenticityPoints: [
        "High-density red box logo woven collar label with crisp white Futura Bold Oblique lettering.",
        "Archival silhouette references: Bench-cut proportions, reinforced shoulder slopes, and anatomical sizing.",
        "Precision high-thread-count chainstitch embroidery on leather script and chenille varsity patches.",
        "Heavy, smooth action on genuine RiRi or YKK zipper tracks with zero binding or uneven teeth spacing.",
      ],
      fitAndSizingGuide:
        "Modern New York streetwear silhouette: Engineered with slightly dropped shoulders, a relaxed chest contour, and a clean contemporary body length. Fits true to standard modern sizing with a clean silhouette over t-shirts and hoodies.",
    },
  },
{
    slug: "accessories",
    name: "Accessories",
    logo: "/brands/accessories.png",
    tagline: "Handcrafted full-grain leather belts, wallets, bags, and heritage goods.",
    accent: "#241914",
    heroDesktop: "/banners/accessories-desktop.jpg",
    heroMobile: "/banners/accessories-mobile.jpg",
    heritage: {
      originYear: "Atelier",
      originPlace: "Heritage Goods Workshop",
      signatureSilhouettes: [
        "Heavy Bridle Leather Garrison Belt",
        "Bifold & Minimalist Card Wallets",
        "Bespoke Travel Duffle & Dop Kits",
        "Solid Brass Hardware Key Lanyards",
      ],
      primaryHides:
        "9–10 oz English Bridle Leather, Vegetable-Tanned Horween Dublin, and Supple Cowhide Trims.",
      hardwareNotes:
        "Solid cast brass and stainless steel roller buckles, hand-burnished edges sealed with natural beeswax, and saddle-stitched bonded threads.",
      heritageStory: [
        "The Leather Haven Craft accessories collection applies our uncompromising outerwear leather standards to everyday carry essentials. Cut from the densest portions of vegetable-tanned bridle leather and full-grain Horween steerhide, each piece is engineered for a lifetime of daily utility.",
        "Unlike mass-market accessories made from cardboard-filled split leather that cracks within months, our goods are cut from solid full-grain leather planks up to 4mm in thickness. Hand-burnished with natural beeswax and organic carnauba, our edges develop a glassy, heirloom luster over years of use.",
        "From heavyweight 1.5-inch motorcycle belts with solid sand-cast brass buckles to hand-sewn card sleeves that mold directly to your daily cards, these pieces are built to be passed down through generations.",
      ],
      authenticityPoints: [
        "Solid single-piece leather construction with zero synthetic fillers, cardboard inserts, or bonded backing materials.",
        "Solid sand-cast brass hardware that never peels, chips, or rusts.",
        "Edges hand-beveled, burnished with natural beeswax, and heat-creased by master leatherworkers.",
        "Natural vegetable tanning that absorbs oils and light, transforming into a deep honey or mahogany patina over time.",
      ],
      fitAndSizingGuide:
        "Belts are sized based on your standard pant waist size plus 2 inches (e.g., if you wear size 34 pants, select a size 36 belt to accommodate the middle buckle hole).",
    },
  },
{
    slug: "others",
    name: "Others",
    logo: "/logo.png",
    tagline: "Archival varsity outerwear, European café racers, and custom bespoke commissions.",
    accent: "#3a2618",
    heroDesktop: "/banners/home-desktop.jpg",
    heroMobile: "/banners/home-mobile.jpg",
    heritage: {
      originYear: "Archive",
      originPlace: "Global Heritage Silhouettes",
      signatureSilhouettes: [
        "Vintage Melton Wool & Leather Varsity Jackets",
        "Classic Stand-Collar Café Racers",
        "Double-Breasted Car Coats & Peacoats",
        "Custom Made-to-Measure Specialty Outerwear",
      ],
      primaryHides:
        "Full-Grain Cowhide, Melton Wool Body with Steerhide Sleeves, and Supple Suede.",
      hardwareNotes:
        "Heavy-gauge Talon & YKK Excella zippers, enamelled snap fasteners, and wool worsted rib-knit trims.",
      heritageStory: [
        "The Others collection curates eclectic archival silhouettes, vintage college varsity jackets, minimalist European café racers, and custom client commissions that transcend single-house categorizations.",
        "From heavyweight 24 oz Melton wool varsity jackets with top-grain steerhide sleeves to streamlined minimalist car coats, every garment in this collection is handcrafted with the same uncompromising anatomical cut and heavy leather standards as our flagship lines.",
        "This category also serves as the launchpad for custom client commissions and one-of-a-kind bespoke creations tailored directly from client-submitted sketches and references.",
      ],
      authenticityPoints: [
        "Full-grain leather sleeves and trims paired with dense 24 oz genuine Melton wool.",
        "Artisan patternmaking with high-mount armholes and natural shoulder articulation.",
        "Heavy-gauge metal hardware and reinforced pocket besoms with double bar-tack stitching.",
        "Fully lined in breathable satin, quilted thermal insulation, or heritage cotton twill.",
      ],
      fitAndSizingGuide:
        "Available across our Universal Sizing Matrix (XS–6XL). Most archival varsity and car coat silhouettes feature a relaxed, comfortable cut suitable for mid-layer sweaters.",
    },
  }
];

export const brandStripSlugs = [
  "leather-haven-craft",
  "avirex",
  "pelle-pelle",
  "harley-davidson",
  "schott-nyc",
  "supreme",
  "accessories",
  "others",
] as const;

export function getBrand(slug: string): Brand | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === "leather-heaven-craft") {
    return brands.find((brand) => brand.slug === "leather-haven-craft");
  }
  if (normalized === "accessory") {
    return brands.find((brand) => brand.slug === "accessories");
  }
  return brands.find((brand) => brand.slug === normalized);
}

export function getBrandStrip(): Brand[] {
  return brandStripSlugs
    .map((slug) => getBrand(slug))
    .filter((brand): brand is Brand => brand !== undefined);
}

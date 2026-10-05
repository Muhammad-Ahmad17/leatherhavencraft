export interface BlogSection {
  heading: string;
  id: string;
  paragraphs: string[];
  callout?: {
    type: "tip" | "warning" | "quote" | "highlight";
    title?: string;
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  checklist?: string[];
}

export interface BlogPost {
  _id?: string;
  id?: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featured?: boolean;
  isPublished?: boolean;
  metaTitle: string;
  metaDescription: string;
  content?: string;
  sections?: BlogSection[];
  relatedProductSlugs?: string[];
  relatedPostSlugs?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-definitive-guide-to-iconic-leather-jackets",
    title: "The Collector's Field Guide: Schott Perfecto, Avirex A-2, and Pelle Pelle Heritage",
    subtitle: "Tracing the origins, cultural significance, and anatomical cuts of the world's most revered leather outerwear silhouettes.",
    excerpt: "From the asymmetrical zipper of Irving Schott's 1928 Perfecto to the military cockpit legacy of the Avirex A-2 and Marc Buchanan's 1990s urban leather revolution, discover the history behind iconic leather cuts.",
    coverImage: "/banners/schott-nyc-desktop.jpg",
    category: "Heritage & History",
    tags: ["Schott NYC", "Avirex", "Pelle Pelle", "Vintage Outerwear", "Motorcycle Jackets"],
    publishedAt: "2026-09-28",
    readingTime: "8 min read",
    featured: true,
    author: {
      name: "Marcus Vance",
      role: "Head Archivist & Vintage Outerwear Specialist",
    },
    metaTitle: "Iconic Leather Jackets Guide | Schott Perfecto, Avirex A-2 & Pelle Pelle",
    metaDescription: "Explore the history, anatomical cuts, and cultural impact of the Schott 618 Perfecto, Avirex military A-2 bomber, and Pelle Pelle urban leathers in this definitive collector guide.",
    sections: [
      {
        heading: "The Asymmetrical Revolution: Irving Schott & The 1928 Perfecto",
        id: "schott-perfecto-history",
        paragraphs: [
          "In 1928, Irving Schott—son of a Russian immigrant working out of a basement in Manhattan's Lower East Side—revolutionized outerwear forever. Prior to his invention, motorcycle jackets were cumbersome wool coats or buttoned button-down car coats that flap violently in high wind. Schott introduced the world's first zippered leather jacket, naming it the 'Perfecto' after his favorite Cuban cigar.",
          "The signature off-center diagonal zipper was not merely a design flourish; it was an ergonomic triumph. By cutting the zipper across the torso, the lapels closed in an overlapping double layer that blocked freezing headwind when leaning over motorcycle handlebars. Paired with snap-down lapels that refused to flap at speed, zippered sleeve gussets, and an integrated kidney belt, the Schott 618 became the quintessential silhouette of American rebellion when Marlon Brando wore it in 'The Wild One' (1953).",
        ],
        callout: {
          type: "quote",
          title: "Archival Note",
          text: "Original 1950s Schott Perfectos were banned in American high schools nationwide because school boards believed the jacket symbolized juvenile delinquency. Today, that exact silhouette resides in the Metropolitan Museum of Art.",
        },
      },
      {
        heading: "Cockpit Provenance: The Avirex A-2 & G-1 Flight Bombers",
        id: "avirex-flight-bombers",
        paragraphs: [
          "While civilian motorcyclists adopted the double rider, the skies demanded a vastly different engineering discipline. In 1931, the U.S. Army Air Corps standardized the Type A-2 summer flying jacket under specification 94-3040. When high-altitude bombing missions exposed aircrews to unpressurized cabin temperatures plummeting to -40°C, military gear required indestructible performance.",
          "Avirex immortalized these cockpits specifications for modern collectors. The hallmark of the authentic A-2 is its snug knit worsted-wool cuffs and waistband, designed to trap body heat, complemented by snap-down storm flaps over heavy brass Talon zippers, a one-piece back panel to eliminate leak seams, and deep snap-flap cargo pockets. Naval aviators demanded the Type G-1 variant, defined by its genuine mouton fur collar and bi-swing action back pleats allowing full lateral reach in cockpits.",
        ],
        callout: {
          type: "tip",
          title: "Collector Tip: Horsehide vs. Goatskin",
          text: "Early WWII-era A-2s were cut from vegetable-tanned horsehide, developing striking golden undertones under dark top finishes. Later contracts transitioned to pebble-grained goatskin, which offers supreme flexibility and natural water resistance without stiff break-in periods.",
        },
      },
      {
        heading: "The Urban Leather Renaissance: Marc Buchanan & Pelle Pelle",
        id: "pelle-pelle-urban-dynasty",
        paragraphs: [
          "In 1978, Detroit designer Marc Buchanan launched Pelle Pelle with a radical vision: transforming leather outerwear from utilitarian military gear into bold, status-defining statement luxury. Buchanan recognized that hip-hop culture in New York, Detroit, and Chicago craved outerwear with oversized boxy shoulders, sumptuous plush lambskins, and intricate layered leather artwork.",
          "Throughout the 1990s and early 2000s, Pelle Pelle dominated street culture. Iconic pieces like the Soda Club, Picasso, and Grandmaster featured hand-cut multi-tone leather appliques, studded metal studs, heavy embossed typography, and custom silk-viscose linings. Unlike stiff biker coats, Buchanan’s hides underwent proprietary tumbling and soda-washing treatments that rendered 1.2mm leathers extraordinarily soft while retaining structural bulk.",
        ],
      },
      {
        heading: "Silhouettes Comparison: Specs & Architecture",
        id: "silhouette-comparison-specs",
        paragraphs: [
          "To choose the ideal vintage or contemporary jacket, understand how cut, drape, and hide selection influence everyday wear:",
        ],
        table: {
          headers: ["Silhouette", "Era", "Signature Hide", "Hardware", "Intended Drape"],
          rows: [
            ["Double Rider (Perfecto)", "1928–Present", "Steerhide / Naked Cowhide", "Talon / Ideal Nickel Brass", "Cropped, snug torso taper"],
            ["A-2 Flight Bomber", "1931–Present", "Goatskin / Horsehide", "Mil-Spec Brass Talon", "Relaxed torso, blouson drape"],
            ["Pelle Pelle Plush Bomber", "1978–2000s", "Soda-Washed Lambskin", "Heavy Cast Zinc / Custom", "Oversized, broad boxy drop"],
            ["Café Racer / Single Rider", "1960s–Present", "Horween Chromexcel / Cowhide", "Minimalist Center YKK/RiRi", "Streamlined, body-skimming"],
          ],
        },
      },
      {
        heading: "Authenticity & Archival Value in 2026",
        id: "authenticity-valuation",
        paragraphs: [
          "Today, collector interest in genuine heritage leather jackets has reached unprecedented highs. Collectors prioritize untouched original hides, documented provenance, verified period-accurate zippers, and original rayon or wool linings over reproduction fast-fashion imitations.",
          "At Leather Haven Craft, every vintage piece is individually inspected for seam tensility, zipper tooth alignment, and hide condition. When commissioning our bespoke made-to-measure outerwear, we apply these identical vintage construction standards—ensuring your piece endures for decades rather than seasons.",
        ],
      },
    ],
    relatedProductSlugs: ["artisan-steerhide-rider", "cognac-rider", "navy-flight", "field-bomber"],
  },
  {
    slug: "steerhide-vs-lambskin-vs-shearling-leather-guide",
    title: "Steerhide vs. Lambskin vs. Shearling: The Definitive Leather Tannage & Grain Matrix",
    subtitle: "A material masterclass exploring hide temper, thickness, break-in durability, and thermal insulation.",
    excerpt: "Choosing the right hide dictates whether your jacket acts as armor against the elements or drapes like a second skin. Here is how full-grain steerhide, Horween Chromexcel, Italian lambskin, and sheepskin shearling compare.",
    coverImage: "/banners/leather-haven-craft-desktop.jpg",
    category: "Materials & Tannages",
    tags: ["Leather Tannage", "Steerhide", "Lambskin", "Horween Chromexcel", "Shearling"],
    publishedAt: "2026-09-22",
    readingTime: "7 min read",
    featured: false,
    author: {
      name: "Arthur Thorne",
      role: "Master Leather Artisan & Tanner Consultant",
    },
    metaTitle: "Steerhide vs Lambskin vs Shearling Guide | Leather Tannage Matrix",
    metaDescription: "Understand the differences between full-grain steerhide, Italian lambskin, Horween Chromexcel, and genuine shearling. Complete breakdown of thickness, temper, and break-in.",
    sections: [
      {
        heading: "The Full-Grain Steerhide Standard: Heavyweight Durability",
        id: "steerhide-durability",
        paragraphs: [
          "Steerhide represents the benchmark for motorcycle and hardwearing outerwear. Cut from mature male cattle, steerhide features dense, tightly interwoven collagen fibers that yield exceptional puncture, abrasion, and tear resistance.",
          "In its full-grain state (where the outermost natural epidermis remains unbuffed and unsanded), steerhide averages 1.3mm to 1.5mm in thickness (roughly 3.25 to 3.75 oz). When first worn, full-grain steerhide feels stiff, structured, and almost armor-like. Over several months of active body heat and flexing, the hide molds precisely to the wearer's elbow creases and shoulder slope, developing character that machine-processed leathers can never replicate.",
        ],
        callout: {
          type: "highlight",
          title: "Break-In Expectation",
          text: "Expect full-grain steerhide to require 30 to 50 hours of active wear before achieving full drape comfort. Once broken in, it lasts upwards of 40 years without structural compromise.",
        },
      },
      {
        heading: "Horween Chromexcel: Century-Old Pull-Up Alchemy",
        id: "horween-chromexcel-alchemy",
        paragraphs: [
          "Formulated in 1913 by Chicago's famed Horween Leather Company, Chromexcel (CXL) is one of the world's few surviving combination-tanned leathers. It undergoes 89 distinct processing stages over a full month, merging chrome tanning (for tensile strength and elasticity) with vegetable tanning (utilizing bark extracts for richness and firm temper).",
          "Chromexcel is subsequently hot-stuffed with proprietary cosmetic-grade beef tallow, cosmetic oils, and beeswax. This extreme saturation yields a legendary 'pull-up' effect: when the leather is folded, creased, or flexed, the oils displace beneath the surface, revealing striking lighter tonal gradations that shift with movement.",
        ],
      },
      {
        heading: "Italian Plonge Lambskin: Butter-Soft Elegance",
        id: "italian-lambskin-elegance",
        paragraphs: [
          "For urban commuters, formal layering, and lightweight statement jackets, Italian plonge lambskin stands in direct contrast to heavyweight steerhide. Cut between 0.8mm and 1.0mm, lambskin possesses microscopic pore structures that impart an extraordinarily soft, velvety hand-feel with zero break-in period.",
          "While lambskin should not be treated as abrasion gear for high-speed motorcycling, high-grade full-grain lambskin is surprisingly resilient to daily wear. It breathes naturally, folds compactly without permanent creasing, and takes color dyes with unmatched depth and saturation.",
        ],
      },
      {
        heading: "Merino Sheepskin Shearling: Cold-Weather Thermal Superiority",
        id: "shearling-thermal-superiority",
        paragraphs: [
          "True shearling is not a leather jacket lined with synthetic wool—it is a single continuous pelt of sheepskin tanned with its natural fleece wool intact on the reverse side. The leather exterior forms a windproof barrier, while the dense wool fibers trap millions of microscopic air pockets.",
          "This natural capillary system provides insulation unmatched by synthetic goose-down or polyester fillings, remaining comfortable from -25°C up to +10°C due to wool's moisture-wicking and thermoregulating properties.",
        ],
      },
      {
        heading: "Material Comparison Matrix",
        id: "material-matrix",
        paragraphs: [
          "Compare hide specifications side-by-side to determine which leather matches your climate and lifestyle:",
        ],
        table: {
          headers: ["Hide Type", "Thickness", "Temper", "Break-in Time", "Thermal Rating", "Primary Strength"],
          rows: [
            ["Full-Grain Steerhide", "1.3 – 1.5mm", "Firm & Structured", "30–60 wears", "Moderate", "Maximum abrasion & longevity"],
            ["Horween Chromexcel", "1.2 – 1.4mm", "Medium Supple", "15–30 wears", "Moderate to Warm", "Spectacular pull-up patina"],
            ["Italian Lambskin", "0.8 – 1.0mm", "Ultra-Supple", "Instant (0 days)", "Mild / Transitional", "Silky lightweight comfort"],
            ["Merino Shearling", "15 – 22mm fleece", "Soft Heavy Cushion", "5–10 wears", "Extreme Sub-Zero", "Superior thermal insulation"],
          ],
        },
      },
    ],
    relatedProductSlugs: ["artisan-steerhide-rider", "quilted-puffer", "camel-overcoat", "saddle-leather"],
  },
  {
    slug: "how-to-spot-authentic-vintage-pelle-pelle-and-schott",
    title: "Collector Verification: How to Spot Authentic Vintage Pelle Pelle & Schott NYC Jackets",
    subtitle: "The archivist's checklist for verifying Talon hardware, hide grain density, inner lining typography, and era-specific hallmarks.",
    excerpt: "With vintage leather jacket valuations climbing in auction houses and collector circles, counterfeit and franken-jacket pieces abound. Learn the exact hallmarks our archivists use to verify authentic vintage pieces.",
    coverImage: "/banners/pelle-pelle-desktop.jpg",
    category: "Collector Verification",
    tags: ["Authenticity Guide", "Pelle Pelle", "Schott NYC", "Vintage Buying", "Hardware Hallmarks"],
    publishedAt: "2026-09-18",
    readingTime: "9 min read",
    featured: false,
    author: {
      name: "Marcus Vance",
      role: "Head Archivist & Vintage Outerwear Specialist",
    },
    metaTitle: "How to Authenticate Vintage Schott NYC & Pelle Pelle Jackets",
    metaDescription: "Archivist guide to authenticating vintage Schott Perfecto and Pelle Pelle leather jackets. Inspect Talon zippers, label typography, leather temper, and stitching.",
    sections: [
      {
        heading: "The Vintage Market: Why Verification Matters",
        id: "verification-importance",
        paragraphs: [
          "As vintage Americana and 1990s hip-hop outerwear experience unprecedented demand, the secondary market has seen an influx of counterfeit pieces, cheap split-leather replicas, and 'franken-jackets' (vintage shells with modern replacement hardware or stitched reproduction patches).",
          "Authenticating a heritage jacket requires forensic attention to four distinct pillars: hardware manufacturer hallmarks, label typography evolution, hide scent and temper, and structural seam thread composition.",
        ],
      },
      {
        heading: "1. Hardware Anatomy: Talon, Ideal & Zipper Sliders",
        id: "hardware-hallmarks",
        paragraphs: [
          "Zippers are the single most difficult component for counterfeiters to replicate authentically because period-specific dies and stamped zipper stops are long out of production.",
          "On genuine vintage Schott NYC jackets: pieces from the 1960s to 1980s will virtually always feature USA-stamped Talon zippers (specifically the iconic bell-pull slider or rectangular pull with rounded hole). By the late 1980s and 1990s, Schott shifted toward heavy-gauge Ideal and Schott-embossed branded sliders with sturdy brass stoppers. Counterfeits frequently utilize generic unbranded alloy sliders or modern tooth gauges with sharp, unburnished edges.",
          "On authentic Pelle Pelle jackets: hardware is exceptionally heavy, often cast with bespoke Marc Buchanan crests, antiqued brushed silver, or deep gunmetal finishes. Weight alone is a dead giveaway—a genuine Pelle Pelle zipper slider feels substantial, whereas replicas utilize featherweight aluminum or zinc die-casts.",
        ],
        callout: {
          type: "warning",
          title: "Red Flag Alert",
          text: "If a seller claims a Schott Perfecto is from the 1970s but it features modern YKK plastic coil teeth or lightweight chrome plated sliders, it is either a modern replica or has had its front closure completely replaced.",
        },
      },
      {
        heading: "2. Label Evolution & Era Dating",
        id: "label-typography-dating",
        paragraphs: [
          "Brand woven labels provide an accurate chronological timeline for dating vintage jackets:",
        ],
        checklist: [
          "Schott 1950s: The legendary 'Bull's Eye' label featuring an archer target graphic behind the Perfecto script.",
          "Schott 1970s–1980s: The rectangular woven label with the American flag and steerhead logo with registered trademark symbols.",
          "Schott White Pocket Tag: Located inside the left zippered coin pocket, Schott jackets produced after the late 1970s contain a white paper/fabric barcode tag indicating the exact style number (e.g. 618 or 118) and production batch.",
          "Pelle Pelle Neck Crests: Genuine 90s pieces feature heavy jacquard woven labels accompanied by a metal chain hanging loop fastened with heavy-duty bar-tacks.",
          "Pelle Pelle Care Tags: Multi-lingual black satin tags specifying 'Genuine Leather Shell' with Marc Buchanan Detroit design copyright notices.",
        ],
      },
      {
        heading: "3. Leather Temper, Weight & Sensory Tests",
        id: "leather-temper-sensory",
        paragraphs: [
          "Genuine vintage heritage pieces are cut from heavyweight steerhide, naked cowhide, or premium drum-dyed lambskin. A size Large Schott 618 weighs between 2.2kg and 2.7kg (5 to 6 lbs). If a seller presents a supposedly authentic Perfecto that weighs barely 1kg, it is almost certainly synthetic polyurethane or paper-thin promotional bonded split.",
          "Furthermore, trust your sense of smell. Real full-grain leather that has aged gracefully over 30 years smells rich, earthy, and warm, even when stored. Counterfeit faux leathers emit chemical petro-solvent odors or fishy plasticizer off-gassing.",
        ],
      },
      {
        heading: "4. Stitching Density & Lining Integrity",
        id: "stitching-lining-integrity",
        paragraphs: [
          "Authentic Schott and Pelle Pelle garments employ high-tensile bonded nylon thread with a consistent 6 to 8 stitches per inch (SPI). Seams along the shoulder yoke and elbow gussets are double-stitched and folded flat beneath.",
          "Linings on genuine Schott 618s feature heavy black quilted nylon filled with bonded insulation, finished with knit cuffs tucked inside the leather sleeve hem. Vintage Pelle Pelle jackets feature custom jacquard paisley, tiger crest, or embossed viscose linings that remain silky and tear-resistant.",
        ],
      },
    ],
    relatedProductSlugs: ["artisan-steerhide-rider", "black-bar-shield", "red-box-coach"],
  },
  {
    slug: "the-master-guide-to-leather-jacket-care-and-restoration",
    title: "The Master Guide to Leather Jacket Care, Weatherproofing & Patina Development",
    subtitle: "The definitive 4-phase longevity protocol for conditioning, moisture protection, storage, and natural aging.",
    excerpt: "High-grade leather does not wear out—it wears in. Follow this master guide by our workshop artisans to protect your hide, navigate torrential rain, and develop an enviable, rich vintage patina.",
    coverImage: "/banners/accessories-desktop.jpg",
    category: "Care & Longevity",
    tags: ["Leather Care", "Conditioning", "Weatherproofing", "Restoration", "Patina"],
    publishedAt: "2026-09-12",
    readingTime: "6 min read",
    featured: false,
    author: {
      name: "Arthur Thorne",
      role: "Master Leather Artisan & Tanner Consultant",
    },
    metaTitle: "The Master Guide to Leather Jacket Care & Patina Development",
    metaDescription: "Learn how to clean, condition, waterproof, and store your leather jacket to last generations. Workshop protocols for Horween, steerhide, and lambskin.",
    sections: [
      {
        heading: "The Philosophy of Leather Longevity",
        id: "leather-longevity-philosophy",
        paragraphs: [
          "Unlike synthetic textiles that degrade with every wash, natural leather possesses an organic collagen cellular structure. When properly hydrated with natural oils, leather fibers glide smoothly against one another during movement.",
          "When neglected, however, dust particles act as microscopic sandpaper within the grain, and moisture evaporation strips essential oils, causing microscopic fissures that eventually become irreversible cracks. With a 15-minute maintenance ritual performed twice a year, a quality jacket will outlive its owner.",
        ],
      },
      {
        heading: "Phase 1: Routine Cleaning & Dust Removal",
        id: "cleaning-dust-removal",
        paragraphs: [
          "Before applying any conditioner, the jacket surface must be completely free of road grit, airborne pollutants, and salt deposits.",
        ],
        checklist: [
          "Use a 100% natural horsehair brush to buff the seams, collar crevices, zipper tracks, and cuffs.",
          "Wipe down the hide using a soft microfiber cloth lightly dampened with lukewarm distilled water.",
          "Never use household detergents, alcohol wipes, or bleach, which instantly dissolve the leather's protective enamel finish.",
          "For stubborn grime, use a glycerin-based saddle soap worked into a dry foam, wiped off immediately with a dry cloth.",
        ],
      },
      {
        heading: "Phase 2: Conditioning & Oil Replenishment",
        id: "conditioning-oil-replenishment",
        paragraphs: [
          "Conditioning reintroduces essential lipids that keep the hide flexible and water-repellent. Different hides demand different formulations:",
        ],
        table: {
          headers: ["Leather Type", "Recommended Conditioner", "Application Frequency", "Key Application Rule"],
          rows: [
            ["Full-Grain Steerhide", "Mink Oil or Heavy Beeswax Balm", "Once every 6 months", "Buff firmly; allow 24h absorption"],
            ["Horween Chromexcel", "Venetian Imperial Leather Cream", "Once every 9–12 months", "Use sparingly; hide has deep internal oils"],
            ["Plonge Lambskin", "Delicate Saphir Crème Universelle", "Once every 4–6 months", "Gentle circular motions; do not over-saturate"],
            ["Shearling Pelt", "Light lanolin spray on fleece only", "Once annually (autumn)", "Avoid saturating external suede shell"],
          ],
        },
      },
      {
        heading: "Phase 3: Surviving Heavy Rain & Accidental Drenching",
        id: "rain-drenching-protocol",
        paragraphs: [
          "If caught in a sudden downpour, do not panic. High-grade full-grain leather is naturally resilient to rain, provided you dry it correctly.",
          "The golden rule: NEVER place a wet leather jacket near a radiator, heater, hair dryer, or direct fire. Accelerated artificial heat causes the water molecules to evaporate too quickly, pulling the natural tanning oils with them and leaving the hide brittle, shriveled, and permanently warped.",
          "Instead: pat dry with clean cotton towels to absorb surface moisture, hang the jacket on a contoured wide-shoulder wooden hanger, and allow it to dry at gentle ambient room temperature in a well-ventilated room. Once 90% dry, apply a light coat of conditioner to restore lost moisture.",
        ],
      },
      {
        heading: "Phase 4: Off-Season Storage Protocol",
        id: "storage-protocol",
        paragraphs: [
          "How you store your jacket during warm summer months determines whether it emerges supple or stiff:",
        ],
        checklist: [
          "Always use a contoured wide-shoulder wooden hanger (at least 5cm wide at the tips) to prevent shoulder puckers and neck sagging.",
          "Store in a breathable non-woven cotton or linen garment bag. Never enclose leather in sealed plastic dry-cleaning bags, which trap humidity and breed white mold.",
          "Maintain closet relative humidity between 40% and 55% at temperatures below 22°C (72°F).",
        ],
      },
    ],
    relatedProductSlugs: ["artisan-steerhide-rider", "heritage-leather-duffle", "cognac-rider"],
  },
  {
    slug: "bespoke-vs-off-the-rack-leather-outerwear",
    title: "Bespoke vs. Off-The-Rack: Why Made-to-Measure Outerwear Fits Differently",
    subtitle: "How anatomical shoulder pitch, bicep high-mounts, and tailored torso drop elevate a jacket into a generational second skin.",
    excerpt: "Off-the-rack sizing forces compromises in shoulder slope, sleeve pitch, and torso drape. Discover how our made-to-measure atelier crafts custom outerwear sculpted to your exact skeletal anatomy.",
    coverImage: "/banners/leather-haven-craft-mobile.jpg",
    category: "Bespoke Atelier",
    tags: ["Bespoke Tailoring", "Made to Measure", "Custom Leather", "Anatomy & Sizing"],
    publishedAt: "2026-09-05",
    readingTime: "7 min read",
    featured: false,
    author: {
      name: "Arthur Thorne",
      role: "Master Leather Artisan & Tanner Consultant",
    },
    metaTitle: "Bespoke vs Off-The-Rack Leather Jackets | Made-to-Measure Guide",
    metaDescription: "Understand why bespoke made-to-measure leather jackets fit with unmatched comfort. Discover how shoulder pitch, high-mount armholes, and torso taper transform fit.",
    sections: [
      {
        heading: "The Geometric Compromise of Ready-To-Wear Outerwear",
        id: "ready-to-wear-compromise",
        paragraphs: [
          "Standard mass-manufactured jackets are designed around statistical averages—proportions designed to fit as many people passably as possible. To accommodate wider bellies, mass-market manufacturers enlarge the neck circumference, drop the shoulder seams, and widen the armholes.",
          "For anyone with an athletic build, tall torso, long arms, or broad shoulders, off-the-rack sizing forces an inevitable compromise: either the shoulders fit but the torso balloons into an unflattering box, or the waist is trim but the armholes choke your movement.",
        ],
      },
      {
        heading: "Anatomical Shoulder Pitch & Armhole Engineering",
        id: "shoulder-pitch-armholes",
        paragraphs: [
          "The hallmark of true bespoke leather tailoring lies in the shoulder pitch and armhole height. In off-the-rack garments, armholes are cut low on the ribcage to ensure everyone can slip their arms in. However, when you raise your arms or reach forward, low armholes drag the entire body of the jacket upward, pulling the hem above your beltline.",
          "In bespoke patternmaking, we cut high-mounted armholes and rotate the sleeve forward by 12 to 15 degrees. This anatomical curve mirrors natural relaxed posture, granting effortless 360-degree arm articulation without pulling the jacket hem or straining the back yoke.",
        ],
        callout: {
          type: "tip",
          title: "The Atelier Difference",
          text: "When you raise your arms to drive, ride, or gesture in a bespoke jacket, the torso hem stays anchored right at your beltline. That is the definitive test of high-mount master patternmaking.",
        },
      },
      {
        heading: "The Made-to-Measure Commission Process at Leather Haven Craft",
        id: "bespoke-commission-process",
        paragraphs: [
          "Our bespoke process removes the guesswork through meticulous digital and concierge consultation:",
        ],
        checklist: [
          "Step 1: Direct Measurement Submission (Chest circumference, shoulder point-to-point, center-back length, bicep, sleeve from shoulder bone to wrist).",
          "Step 2: Hide & Tannage Selection (Full-grain Horween steerhide, washed lambskin, or sheepskin shearling in custom colorways).",
          "Step 3: Hardware & Lining Customization (Choice of RiRi, Talon, or YKK Excella zippers in antiqued brass, polished nickel, or matte black; cupro, tartan, or silk-satin inner linings).",
          "Step 4: Bench Handcrafting (Single-artisan cutting, skiving, edge-burnishing, and assembly over 14 to 21 business days).",
          "Step 5: White-Glove Express Delivery (Inspected, conditioned, wrapped in breathable archival canvas, and shipped worldwide via DHL Express).",
        ],
      },
    ],
    relatedProductSlugs: ["artisan-steerhide-rider", "camel-overcoat", "cognac-rider", "field-bomber"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return BLOG_POSTS.slice(0, limit);

  return BLOG_POSTS.filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return 0;
    })
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
}

export function mapBackendBlog(raw: any): BlogPost {
  return {
    _id: raw._id ? String(raw._id) : undefined,
    id: raw._id ? String(raw._id) : raw.id || raw.slug,
    slug: raw.slug,
    title: raw.title,
    subtitle: raw.subtitle || "",
    excerpt: raw.excerpt || raw.title,
    coverImage: raw.coverImage || "/banners/home-desktop.jpg",
    category: raw.category || "Heritage & History",
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    publishedAt: raw.createdAt ? new Date(raw.createdAt).toISOString() : raw.publishedAt || new Date().toISOString(),
    readingTime: raw.readingTime || "5 min read",
    author: raw.author || { name: "Leather Haven Craft Atelier", role: "Master Leather Artisan" },
    featured: Boolean(raw.featured),
    isPublished: raw.isPublished !== undefined ? Boolean(raw.isPublished) : true,
    metaTitle: raw.metaTitle || raw.title,
    metaDescription: raw.metaDescription || raw.excerpt || raw.title,
    content: raw.content || "",
    sections: raw.sections || [],
    relatedProductSlugs: raw.relatedProductSlugs || [],
    relatedPostSlugs: raw.relatedPostSlugs || [],
  };
}

export async function fetchLiveBlogs(category?: string): Promise<BlogPost[]> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  try {
    const url =
      category && category !== "All"
        ? `${backendUrl}/api/blogs?category=${encodeURIComponent(category)}`
        : `${backendUrl}/api/blogs`;
    const res = await fetch(url, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        return json.data.map(mapBackendBlog);
      }
    }
  } catch {
    // Smooth fallback to static catalog if backend is offline or during static compilation
  }
  return category && category !== "All"
    ? BLOG_POSTS.filter((p) => p.category === category)
    : BLOG_POSTS;
}

export async function fetchLiveBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${backendUrl}/api/blogs/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return mapBackendBlog(json.data);
      }
    }
  } catch {
    // Smooth fallback
  }
  return getBlogPost(slug);
}

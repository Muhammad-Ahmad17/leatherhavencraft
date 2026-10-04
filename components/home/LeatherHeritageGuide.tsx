"use client";

import { useState } from "react";
import Link from "next/link";

const SILHOUETTES = [
  {
    id: "double-rider",
    name: "The Double Rider",
    subtitle: "The American Motorcycle Icon (Est. 1928)",
    description:
      "Engineered by Irving Schott in 1928 as the 'Perfecto', the double rider features an asymmetrical front zipper that creates a wind-blocking double-layer of leather across the chest. Accented by snap-down lapels, a buckled half-belt, and zippered sleeve gussets.",
    definingFeatures: [
      "Asymmetric diagonal front zipper",
      "Snap-down notched collar & lapels",
      "Attached buckled waist belt & coin pocket",
      "Zippered sleeve cuffs & shoulder epaulets",
    ],
    recommendedBrands: "Schott NYC, Harley-Davidson, Leather Haven Craft",
  },
  {
    id: "cafe-racer",
    name: "The Café Racer",
    subtitle: "Stripped-Down Minimalist Speed (Est. 1950s)",
    description:
      "Originating among 1950s British motorcycle enthusiasts racing between transport cafés, the racer jacket strips away external ornamentation for aerodynamic efficiency. Features a clean mandarin band collar with a snap throat latch and straight center zipper.",
    definingFeatures: [
      "Clean stand collar with snap throat latch",
      "Straight heavy-gauge center zipper",
      "Twin horizontal or slanted zippered chest pockets",
      "Contoured, streamlined torso with zero flapping",
    ],
    recommendedBrands: "Schott NYC 141, Leather Haven Craft Bespoke",
  },
  {
    id: "flight-bomber",
    name: "The Flight Bomber (A-2 / G-1)",
    subtitle: "Aviation Mil-Spec Heritage (Est. 1931)",
    description:
      "Standardized by the U.S. Army Air Corps in 1931, the A-2 flight jacket is the gold standard of military aviator outerwear. Designed for unpressurized cockpits, it pairs durable full-grain cowhide or goatskin with wind-blocking wool-knit cuffs and hem.",
    definingFeatures: [
      "Heavy front zipper shielded by snap storm flap",
      "Wool-blend ribbed knit waist and cuffs",
      "Dual front flap patch pockets with side entries",
      "Bi-swing shoulder action back pleats for arm mobility",
    ],
    recommendedBrands: "Avirex A-2, Avirex G-1 Naval Flight",
  },
  {
    id: "shearling-b3",
    name: "The Shearling B-3 Bomber",
    subtitle: "Heavyweight High-Altitude Armor (Est. 1934)",
    description:
      "Issued to WWII B-17 and B-24 bomber crews flying at 30,000 feet in sub-zero open cabins. Constructed entirely from dense natural sheepskin pelts, where the thick wool fleece lining is the actual interior of the hide.",
    definingFeatures: [
      "100% natural heavyweight sheepskin wool fleece",
      "Dual leather buckle throat latches at collar",
      "Adjustable side waist cinch straps with heavy buckles",
      "External leather tape welt reinforcements over all seams",
    ],
    recommendedBrands: "Avirex B-3 Sheepskin Bomber",
  },
];

const LEATHER_GRADES = [
  {
    name: "Full-Grain Steerhide",
    weight: "3.5 – 4.0 oz (1.4 – 1.6 mm)",
    breakIn: "30 – 50 Hours of Active Wear",
    characteristics: "Dense, heavyweight, virtually indestructible. Develops pronounced character creases and high-contrast patina over decades.",
    bestFor: "Motorcycle riding, heavy autumn/winter outerwear, lifetime durability.",
  },
  {
    name: "Horween Chromexcel",
    weight: "3.0 – 3.5 oz (1.2 – 1.4 mm)",
    breakIn: "15 – 25 Hours of Wear",
    characteristics: "Combination tanned in Chicago since 1905 with food-grade tallows and waxes. Distinct pull-up effect where colors lighten naturally when flexed.",
    bestFor: "Artisan bespoke jackets, heritage patina enthusiasts, luxury casual wear.",
  },
  {
    name: "Naked Italian Lambskin",
    weight: "2.2 – 2.8 oz (0.9 – 1.1 mm)",
    breakIn: "Immediate (0 Hours)",
    characteristics: "Ultra-supple, buttery soft hand feel with immediate natural drape. No synthetic pigment coatings; breathes easily against the body.",
    bestFor: "Pelle Pelle urban luxury cuts, trans-seasonal spring/autumn wear, lightweight comfort.",
  },
  {
    name: "Heavy Shearling Sheepskin",
    weight: "15 – 20 mm Wool Loft Pelt",
    breakIn: "10 – 15 Hours of Wear",
    characteristics: "Complete sheepskin pelt with thick natural wool fleece interior and weather-resistant leather exterior. Unmatched thermal retention in freezing temperatures.",
    bestFor: "Avirex B-3 Bombers, extreme winter conditions, sub-zero protection.",
  },
];

export function LeatherHeritageGuide() {
  const [activeSilhouette, setActiveSilhouette] = useState(SILHOUETTES[0].id);
  const currentSilhouette = SILHOUETTES.find((s) => s.id === activeSilhouette) || SILHOUETTES[0];

  return (
    <section
      aria-labelledby="heritage-guide-heading"
      className="border-t border-[#ded5c7] bg-[#fbf9f6] px-6 py-20 sm:py-28 text-[#221b16]"
    >
      <div className="mx-auto max-w-6xl">
        {/* ── Editorial Section Header ── */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#8a4d2b]">
            The Master Atelier Dossier
          </p>
          <h2
            id="heritage-guide-heading"
            className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#221b16] sm:text-4xl lg:text-5xl"
          >
            The Collector’s Guide to Heritage Leather Outerwear
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-[#6b5c51] sm:text-sm">
            Whether investing in an archival Schott Perfecto, an authentic Avirex military flight bomber, or commissioning a bespoke made-to-measure piece, understanding hides, cuts, and construction ensures an heirloom that lasts for generations.
          </p>
        </div>

        {/* ── 1. The 4 Canonical Silhouettes ── */}
        <div className="mt-16">
          <div className="border-b border-[#ded5c7] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Anatomy &amp; Cut
              </span>
              <h3 className="mt-1 font-serif text-2xl font-bold text-[#221b16]">
                The Four Canonical Silhouettes
              </h3>
            </div>
            <p className="text-xs text-[#706456]">
              Select a silhouette to explore its origins and defining specifications:
            </p>
          </div>

          {/* Interactive Silhouette Tab Selector */}
          <div className="mt-6 flex flex-wrap gap-2">
            {SILHOUETTES.map((s) => {
              const isSelected = s.id === activeSilhouette;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSilhouette(s.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#8a4d2b] text-white shadow-xs"
                      : "border border-[#ded5c7] bg-white text-[#4a3f35] hover:bg-[#faf6f0] hover:border-[#8a4d2b]"
                  }`}
                >
                  {s.name}
                </button>
              );
            })}
          </div>

          {/* Active Silhouette Detail Showcase */}
          <div className="mt-6 rounded-2xl border border-[#ded5c7] bg-white p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                  {currentSilhouette.subtitle}
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#221b16] sm:text-3xl">
                  {currentSilhouette.name}
                </h4>
                <p className="text-xs leading-relaxed text-[#5a4c41] sm:text-sm sm:leading-7">
                  {currentSilhouette.description}
                </p>

                <div className="pt-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#221b16] mb-2">
                    Key Historical References:
                  </span>
                  <span className="inline-block rounded-md bg-[#faf8f5] border border-[#ded5c7] px-3 py-1.5 text-xs text-[#8a4d2b] font-medium">
                    {currentSilhouette.recommendedBrands}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-xl border border-[#ded5c7] bg-[#f9f7f3] p-6 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#221b16]">
                  Defining Engineering Features
                </span>
                <ul className="space-y-2.5 text-xs text-[#4a3f35]">
                  {currentSilhouette.definingFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b] text-[10px] text-white font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#ded5c7]">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8a4d2b] hover:text-black transition-colors"
                  >
                    <span>Browse All Outerwear Silhouettes</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. The Tannages & Hide Matrix ── */}
        <div className="mt-20">
          <div className="border-b border-[#ded5c7] pb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Material Science &amp; Grading
            </span>
            <h3 className="mt-1 font-serif text-2xl font-bold text-[#221b16]">
              The Atelier Leather Hide Matrix
            </h3>
            <p className="mt-2 text-xs text-[#706456] max-w-2xl">
              Authentic leather jackets are defined by hide selection. We curate only untouched full-grain leathers and genuine sheepskin pelts:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEATHER_GRADES.map((grade, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-[#ded5c7] bg-white p-6 shadow-2xs transition-all hover:border-[#8a4d2b] hover:shadow-md"
              >
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                    Tier 01 Hide
                  </span>
                  <h4 className="mt-2 font-serif text-lg font-bold text-[#221b16]">
                    {grade.name}
                  </h4>
                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <span className="text-[#8a7b70] block text-[10px] uppercase">Thickness</span>
                      <span className="font-semibold text-[#221b16]">{grade.weight}</span>
                    </div>
                    <div>
                      <span className="text-[#8a7b70] block text-[10px] uppercase">Break-In Period</span>
                      <span className="font-semibold text-[#8a4d2b]">{grade.breakIn}</span>
                    </div>
                    <p className="mt-3 text-[#5a4c41] leading-relaxed text-[11px]">
                      {grade.characteristics}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#eee7de]">
                  <span className="block text-[10px] uppercase tracking-wider text-[#8a7b70]">Best Application</span>
                  <span className="text-xs text-[#221b16] font-medium">{grade.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Authenticity & Provenance Standards ── */}
        <div className="mt-20 rounded-2xl border border-[#ded5c7] bg-[#f5efe6] p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Provenance &amp; Quality Guarantee
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-[#221b16] sm:text-3xl">
              Why Genuine Full-Grain Leather Cannot Be Replicated
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-[#5a4c41] sm:text-sm sm:leading-7">
              Commercial fast fashion heavily markets &apos;genuine leather&apos; and &apos;PU vegan leather&apos;, which are in reality scrap split shavings bonded with synthetic plastic resins that peel and crack within months. At Leather Haven Craft, every piece is constructed from the outermost top layer of the hide—retaining natural grain density, water resistance, and the ability to absorb natural conditioning oils for a century of use.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#ded5c7] pt-6">
              <div>
                <span className="font-serif text-lg font-bold text-[#221b16] block">100% Full Grain</span>
                <p className="text-[11px] text-[#6b5c51] mt-1">Zero bonded scraps, artificial embossing, or vinyl film coatings.</p>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-[#221b16] block">Brass Hardware</span>
                <p className="text-[11px] text-[#6b5c51] mt-1">Authentic heavy-duty Talon, RiRi, and YKK metal zipper assemblies.</p>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-[#221b16] block">XS – 6XL Sizing</span>
                <p className="text-[11px] text-[#6b5c51] mt-1">Inclusive pattern grading and bespoke made-to-measure tailoring.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/size-guide"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#8a4d2b] px-6 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-black shadow-xs"
              >
                Universal Size Guide
              </Link>
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#ded5c7] bg-white px-6 text-xs font-semibold uppercase tracking-wider text-[#221b16] transition-all hover:bg-[#faf8f5] shadow-xs"
              >
                Explore Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

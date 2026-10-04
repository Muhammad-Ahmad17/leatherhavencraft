"use client";

import { useState } from "react";
import {
  UNIVERSAL_SIZE_CHART,
  MEASUREMENT_ROWS,
  SIZES_ORDER,
  HOW_TO_MEASURE_STEPS,
  formatMeasurement,
} from "@/data/sizeChart";

interface UniversalSizeChartProps {
  selectedSize?: string;
  onSelectSize?: (size: string) => void;
  brandName?: string;
  showCustomCta?: boolean;
}

export function UniversalSizeChart({
  selectedSize,
  onSelectSize,
  brandName = "Leather Haven Craft",
  showCustomCta = true,
}: UniversalSizeChartProps) {
  const [unit, setUnit] = useState<"in" | "cm">("in");
  const [activeMeasurement, setActiveMeasurement] = useState<number | null>(null);

  return (
    <div className="space-y-6 text-[#221b16]">
      {/* ── Top Controls: Unit Selector & Sizing Advisory ── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#ded5c7] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
              Universal Standard
            </span>
            <span className="rounded bg-[#8a4d2b]/10 px-2 py-0.5 text-[10px] font-semibold text-[#8a4d2b]">
              XS – 6XL
            </span>
          </div>
          <h4 className="mt-1 font-serif text-lg font-bold sm:text-xl text-[#221b16]">
            Gents Outerwear Size Matrix
          </h4>
          <p className="text-xs text-[#706456]">
            Standard flat garment measurements across {brandName} and all heritage houses.
          </p>
        </div>

        {/* Unit Toggle Switch */}
        <div className="flex items-center gap-1 self-start rounded-lg border border-[#ded5c7] bg-[#f5f0e8] p-1 sm:self-auto">
          <button
            type="button"
            onClick={() => setUnit("in")}
            className={`rounded px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              unit === "in"
                ? "bg-white text-[#221b16] shadow-xs border border-[#ded5c7]"
                : "text-[#706456] hover:text-[#221b16]"
            }`}
          >
            Inches (in)
          </button>
          <button
            type="button"
            onClick={() => setUnit("cm")}
            className={`rounded px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              unit === "cm"
                ? "bg-white text-[#221b16] shadow-xs border border-[#ded5c7]"
                : "text-[#706456] hover:text-[#221b16]"
            }`}
          >
            Metric (cm)
          </button>
        </div>
      </div>

      {/* ── Main Responsive Table ── */}
      <div className="overflow-hidden rounded-xl border border-[#ded5c7] bg-white shadow-xs">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-[700px] border-collapse text-center text-xs">
            <thead>
              <tr className="border-b border-[#ded5c7] bg-[#f7f4ef]">
                <th className="sticky left-0 z-10 bg-[#f7f4ef] px-3.5 py-3 text-left font-bold uppercase tracking-wider text-[#221b16] border-r border-[#ded5c7] shadow-xs">
                  USA Size
                </th>
                {SIZES_ORDER.map((s) => {
                  const isCurrent = selectedSize?.trim().toUpperCase() === s;
                  const isPlus = ["3XL", "4XL", "5XL", "6XL"].includes(s);
                  return (
                    <th
                      key={s}
                      onClick={() => onSelectSize?.(s)}
                      className={`px-3 py-3 font-bold transition-colors cursor-pointer ${
                        isCurrent
                          ? "bg-[#8a4d2b] text-white"
                          : "text-[#221b16] hover:bg-[#ede6dc]"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-xs">{s}</span>
                        {isPlus && (
                          <span
                            className={`text-[9px] font-normal leading-tight ${
                              isCurrent ? "text-white/80" : "text-[#8a4d2b]"
                            }`}
                          >
                            +$20
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eee7dc]">
              {MEASUREMENT_ROWS.map((row) => {
                const isActive = activeMeasurement === row.num;
                return (
                  <tr
                    key={row.key}
                    onMouseEnter={() => setActiveMeasurement(row.num)}
                    onMouseLeave={() => setActiveMeasurement(null)}
                    className={`transition-colors ${
                      isActive ? "bg-[#faf5ee]" : "hover:bg-[#fbf9f6]"
                    }`}
                  >
                    <td className="sticky left-0 z-10 bg-inherit px-3.5 py-2.5 text-left font-semibold text-[#221b16] border-r border-[#ded5c7] whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#8a4d2b]/15 text-[10px] font-bold text-[#8a4d2b]">
                          {row.num}
                        </span>
                        <span>{row.label}</span>
                      </div>
                    </td>
                    {SIZES_ORDER.map((s) => {
                      const isCurrent = selectedSize?.trim().toUpperCase() === s;
                      const val = UNIVERSAL_SIZE_CHART[s][row.key];
                      return (
                        <td
                          key={s}
                          onClick={() => onSelectSize?.(s)}
                          className={`px-3 py-2.5 font-medium transition-colors cursor-pointer ${
                            isCurrent
                              ? "bg-[#8a4d2b]/10 font-bold text-[#8a4d2b] border-x border-[#8a4d2b]/20"
                              : "text-[#4a3f35]"
                          }`}
                        >
                          {formatMeasurement(val, unit)}
                          <span className="text-[10px] text-[#9c8e82] ml-0.5">{unit}</span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Extended Sizing Atelier Note ── */}
      <div className="rounded-lg border border-[#e8ded3] bg-[#faf8f5] p-3 text-xs text-[#706456] flex items-start gap-2.5">
        <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-[#8a4d2b] shrink-0" />
        <p className="leading-relaxed">
          <strong className="text-[#8a4d2b]">Tailoring &amp; Extended Sizing:</strong> Standard sizing spans XS through 2XL at catalog base price. Sizes 3XL through 6XL are handcrafted with dedicated extra hide panels and pattern grading, incurring an artisan surcharge of +$20.
        </p>
      </div>

      {/* ── Diagram & Measurement Methodology Grid ── */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start pt-2">
                {/* Left Column: Visual Jacket Diagram */}
        <div className="rounded-xl border border-[#ded5c7] bg-[#f9f7f3] p-4 lg:col-span-6 flex flex-col items-center">
          <div className="w-full flex items-center justify-between border-b border-[#ded5c7] pb-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#221b16]">
              Garment Measurement Points
            </span>
            <span className="text-[11px] text-[#8a7b70]">Laid Flat (Inches/cm)</span>
          </div>

          {/* High-fidelity Bespoke Leather Jacket Vector Diagram */}
          <div className="relative w-full max-w-[410px] aspect-[450/360] flex items-center justify-center">
            <svg
              viewBox="0 0 450 360"
              className="w-full h-full select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Soft ambient drop shadow for flat-laid garment */}
                <filter id="leatherShadow" x="-8%" y="-4%" width="116%" height="116%" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#2a1d17" floodOpacity="0.14" />
                </filter>

                {/* Subtle rich leather tonal gradient */}
                <linearGradient id="leatherBodyGrad" x1="120" y1="40" x2="320" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fcfaf6" />
                  <stop offset="45%" stopColor="#f5eee3" />
                  <stop offset="100%" stopColor="#e8ded0" />
                </linearGradient>

                {/* Interior collar lining */}
                <linearGradient id="collarLining" x1="184" y1="36" x2="236" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#d5c4b0" />
                  <stop offset="100%" stopColor="#ba9f83" />
                </linearGradient>

                {/* Metallic antique brass hardware */}
                <linearGradient id="brassHardware" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e5c99e" />
                  <stop offset="50%" stopColor="#b4884c" />
                  <stop offset="100%" stopColor="#7a5423" />
                </linearGradient>

                {/* Badge shadow */}
                <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* ═══════════ 1. JACKET LEATHER FOUNDATION ═══════════ */}
              {/* Main Outer Body & Sleeves Silhouette */}
              <path
                d="M 184 40
                   Q 210 35 236 40
                   L 316 72
                   Q 338 145 348 205
                   Q 354 240 356 264
                   L 322 272
                   Q 312 215 286 150
                   L 280 274
                   Q 210 279 140 274
                   L 134 150
                   Q 108 215 98 272
                   L 64 264
                   Q 66 240 72 205
                   Q 82 145 104 72
                   Z"
                fill="url(#leatherBodyGrad)"
                stroke="#2a1d17"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                filter="url(#leatherShadow)"
              />

              {/* ═══════════ 2. COLLAR (CAFÉ RACER SNAP BAND COLLAR) ═══════════ */}
              {/* Inside Neck Hole / Interior Lining */}
              <path
                d="M 184 40 Q 210 52 236 40 Q 210 35 184 40 Z"
                fill="url(#collarLining)"
                stroke="#2a1d17"
                strokeWidth="1.5"
              />
              {/* Outer Collar Stand Band */}
              <path
                d="M 180 39
                   Q 210 33 240 39
                   L 242 47
                   Q 210 56 178 47
                   Z"
                fill="#ece1d2"
                stroke="#2a1d17"
                strokeWidth="2"
              />
              {/* Collar Double Topstitching */}
              <path
                d="M 181 41 Q 210 35 239 41"
                stroke="#8c6f58"
                strokeWidth="1"
                strokeDasharray="2.5 1.5"
                fill="none"
              />
              {/* Collar Snap Button Tab */}
              <circle cx="218" cy="48" r="3" fill="url(#brassHardware)" stroke="#2a1d17" strokeWidth="0.8" />

              {/* ═══════════ 3. SHOULDER & ARM SEAMS (SCYE) ═══════════ */}
              {/* Left Armhole Scye Seam */}
              <path
                d="M 104 72 Q 118 112 134 150"
                stroke="#2a1d17"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 102 73 Q 115 112 131 150"
                stroke="#8c6f58"
                strokeWidth="1"
                strokeDasharray="2 1.5"
                fill="none"
              />
              {/* Right Armhole Scye Seam */}
              <path
                d="M 316 72 Q 302 112 286 150"
                stroke="#2a1d17"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 318 73 Q 305 112 289 150"
                stroke="#8c6f58"
                strokeWidth="1"
                strokeDasharray="2 1.5"
                fill="none"
              />

              {/* Classic Moto Shoulder Yokes */}
              <path
                d="M 104 72 Q 155 86 205 88"
                stroke="#2a1d17"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 316 72 Q 265 86 215 88"
                stroke="#2a1d17"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 106 74 Q 155 88 205 90"
                stroke="#8c6f58"
                strokeWidth="0.8"
                strokeDasharray="2 1.5"
                fill="none"
              />
              <path
                d="M 314 74 Q 265 88 215 90"
                stroke="#8c6f58"
                strokeWidth="0.8"
                strokeDasharray="2 1.5"
                fill="none"
              />

              {/* ═══════════ 4. FRONT ZIPPER PLACKET & HARDWARE ═══════════ */}
              {/* Storm Flap Parallel Stitch Lines */}
              <line x1="205" y1="52" x2="205" y2="277" stroke="#8c6f58" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="215" y1="52" x2="215" y2="277" stroke="#8c6f58" strokeWidth="1" strokeDasharray="3 2" />
              {/* Heavy Center Front Zipper Track */}
              <line
                x1="210"
                y1="52"
                x2="210"
                y2="277"
                stroke="#33241c"
                strokeWidth="2.5"
                strokeDasharray="3 2"
              />
              {/* Brass Zipper Slider & Leather Pull Tab */}
              <g transform="translate(206, 68)">
                <rect width="8" height="6" rx="1.5" fill="url(#brassHardware)" stroke="#2a1d17" strokeWidth="0.8" />
                <path d="M 4 6 L 4 16 L 2 18 L 6 18 L 4 16" fill="url(#brassHardware)" stroke="#2a1d17" strokeWidth="0.8" />
              </g>

              {/* ═══════════ 5. CHEST & WAIST ZIPPER POCKETS ═══════════ */}
              {/* Left Slanted Chest Zip Pocket */}
              <g>
                <path d="M 148 110 L 186 116" stroke="#2a1d17" strokeWidth="2.5" />
                <path d="M 148 108 L 186 114" stroke="#8c6f58" strokeWidth="1" strokeDasharray="2 1.5" />
                <circle cx="152" cy="111" r="2" fill="url(#brassHardware)" />
              </g>
              {/* Right Horizontal Chest Zip Pocket */}
              <g>
                <path d="M 234 116 L 272 110" stroke="#2a1d17" strokeWidth="2.5" />
                <path d="M 234 114 L 272 108" stroke="#8c6f58" strokeWidth="1" strokeDasharray="2 1.5" />
                <circle cx="268" cy="111" r="2" fill="url(#brassHardware)" />
              </g>

              {/* Lower Hand-Warmer Slash Pockets */}
              <g>
                <path d="M 152 195 L 148 244" stroke="#2a1d17" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 155 196 L 151 243" stroke="#8c6f58" strokeWidth="1" strokeDasharray="2 1.5" />
                <circle cx="150" cy="220" r="1.8" fill="url(#brassHardware)" />
              </g>
              <g>
                <path d="M 268 195 L 272 244" stroke="#2a1d17" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 265 196 L 269 243" stroke="#8c6f58" strokeWidth="1" strokeDasharray="2 1.5" />
                <circle cx="270" cy="220" r="1.8" fill="url(#brassHardware)" />
              </g>

              {/* ═══════════ 6. SLEEVE DETAILS & CUFF ZIPPERS ═══════════ */}
              {/* Articulated Biker Elbow Seams */}
              <path d="M 72 205 Q 86 210 98 212" stroke="#8c6f58" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
              <path d="M 348 205 Q 334 210 322 212" stroke="#8c6f58" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
              {/* Left Cuff Zipper */}
              <line x1="72" y1="264" x2="76" y2="242" stroke="#3b2b22" strokeWidth="2" strokeDasharray="2 1.5" />
              <circle cx="76" cy="242" r="1.8" fill="url(#brassHardware)" />
              {/* Right Cuff Zipper */}
              <line x1="348" y1="264" x2="344" y2="242" stroke="#3b2b22" strokeWidth="2" strokeDasharray="2 1.5" />
              <circle cx="344" cy="242" r="1.8" fill="url(#brassHardware)" />

              {/* ═══════════ 7. WAISTBAND & BOTTOM HEM ═══════════ */}
              <path d="M 137 262 Q 210 267 283 262" stroke="#2a1d17" strokeWidth="1.5" fill="none" />
              <path d="M 138 260 Q 210 265 282 260" stroke="#8c6f58" strokeWidth="1" strokeDasharray="2.5 1.5" fill="none" />
              {/* Side Cinch Buckle Tabs */}
              <rect x="134" y="264" width="7" height="4" rx="1" fill="#ede3d5" stroke="#2a1d17" strokeWidth="1" />
              <circle cx="137.5" cy="266" r="1" fill="url(#brassHardware)" />
              <rect x="279" y="264" width="7" height="4" rx="1" fill="#ede3d5" stroke="#2a1d17" strokeWidth="1" />
              <circle cx="282.5" cy="266" r="1" fill="url(#brassHardware)" />

                            {/* ═══════════════════════════════════════════════════════
                  8. TECHNICAL MEASUREMENT OVERLAYS (1 TO 6 - CLEAN ZERO OVERLAP)
                  ═══════════════════════════════════════════════════════ */}

              {/* ── POINT 4: SHOULDER (Shoulder to Shoulder - Positioned Cleanly at Top) ── */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setActiveMeasurement(activeMeasurement === 4 ? null : 4)}
                onMouseEnter={() => setActiveMeasurement(4)}
                onMouseLeave={() => setActiveMeasurement(null)}
              >
                {/* Guide Witness Lines down to shoulder tips */}
                <line x1="104" y1="38" x2="104" y2="72" stroke={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} strokeWidth="1.2" strokeDasharray="2 2" />
                <line x1="316" y1="38" x2="316" y2="72" stroke={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} strokeWidth="1.2" strokeDasharray="2 2" />
                {/* Main Dimension Line across shoulders */}
                <line
                  x1="104"
                  y1="42"
                  x2="316"
                  y2="42"
                  stroke={activeMeasurement === 4 ? "#d9480f" : "#2563eb"}
                  strokeWidth={activeMeasurement === 4 ? 3 : 2}
                />
                {/* End Ticks & Anchors */}
                <line x1="104" y1="36" x2="104" y2="48" stroke={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} strokeWidth="2" />
                <line x1="316" y1="36" x2="316" y2="48" stroke={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} strokeWidth="2" />
                <circle cx="104" cy="42" r="3" fill={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} />
                <circle cx="316" cy="42" r="3" fill={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} />
                {/* Badge 4 - Cleanly isolated at top center */}
                <circle cx="210" cy="42" r={activeMeasurement === 4 ? 13 : 11} fill={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} filter="url(#badgeShadow)" />
                <text x="210" y="46" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">4</text>
              </g>

              {/* ── POINT 1: CHEST (Pit to Pit - Clean Horizontal Center Line) ── */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setActiveMeasurement(activeMeasurement === 1 ? null : 1)}
                onMouseEnter={() => setActiveMeasurement(1)}
                onMouseLeave={() => setActiveMeasurement(null)}
              >
                {/* Main Dimension Line across armpits */}
                <line
                  x1="134"
                  y1="150"
                  x2="286"
                  y2="150"
                  stroke={activeMeasurement === 1 ? "#d9480f" : "#2563eb"}
                  strokeWidth={activeMeasurement === 1 ? 3 : 2}
                />
                {/* End Ticks & Circles */}
                <line x1="134" y1="142" x2="134" y2="158" stroke={activeMeasurement === 1 ? "#d9480f" : "#2563eb"} strokeWidth="2" />
                <line x1="286" y1="142" x2="286" y2="158" stroke={activeMeasurement === 1 ? "#d9480f" : "#2563eb"} strokeWidth="2" />
                <circle cx="134" cy="150" r="3.5" fill={activeMeasurement === 1 ? "#d9480f" : "#2563eb"} />
                <circle cx="286" cy="150" r="3.5" fill={activeMeasurement === 1 ? "#d9480f" : "#2563eb"} />
                {/* Badge 1 - Center chest, completely free from any vertical crossing line */}
                <circle cx="210" cy="150" r={activeMeasurement === 1 ? 13 : 11} fill={activeMeasurement === 1 ? "#d9480f" : "#2563eb"} filter="url(#badgeShadow)" />
                <text x="210" y="154" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
              </g>

              {/* ── POINT 2: WAIST (Bottom Hem Sweep - Clean Bottom Line) ── */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setActiveMeasurement(activeMeasurement === 2 ? null : 2)}
                onMouseEnter={() => setActiveMeasurement(2)}
                onMouseLeave={() => setActiveMeasurement(null)}
              >
                {/* Extension Witness Lines */}
                <line x1="138" y1="274" x2="138" y2="304" stroke={activeMeasurement === 2 ? "#d9480f" : "#2563eb"} strokeWidth="1.2" strokeDasharray="2 2" />
                <line x1="282" y1="274" x2="282" y2="304" stroke={activeMeasurement === 2 ? "#d9480f" : "#2563eb"} strokeWidth="1.2" strokeDasharray="2 2" />
                {/* Main Dimension Line */}
                <line
                  x1="138"
                  y1="298"
                  x2="282"
                  y2="298"
                  stroke={activeMeasurement === 2 ? "#d9480f" : "#2563eb"}
                  strokeWidth={activeMeasurement === 2 ? 3 : 2}
                />
                {/* End Ticks */}
                <line x1="138" y1="292" x2="138" y2="304" stroke={activeMeasurement === 2 ? "#d9480f" : "#2563eb"} strokeWidth="2" />
                <line x1="282" y1="292" x2="282" y2="304" stroke={activeMeasurement === 2 ? "#d9480f" : "#2563eb"} strokeWidth="2" />
                {/* Badge 2 */}
                <circle cx="210" cy="298" r={activeMeasurement === 2 ? 13 : 11} fill={activeMeasurement === 2 ? "#d9480f" : "#2563eb"} filter="url(#badgeShadow)" />
                <text x="210" y="302" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
              </g>

              {/* ── POINT 3: LENGTH (Collar to Hem - Positioned on Flank with Projection Lines) ── */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setActiveMeasurement(activeMeasurement === 3 ? null : 3)}
                onMouseEnter={() => setActiveMeasurement(3)}
                onMouseLeave={() => setActiveMeasurement(null)}
              >
                {/* Horizontal Extension Witness Lines from collar base & hem edge to side axis */}
                <line x1="236" y1="40" x2="395" y2="40" stroke={activeMeasurement === 3 ? "#d9480f" : "#059669"} strokeWidth="1.2" strokeDasharray="2 2" />
                <line x1="280" y1="274" x2="395" y2="274" stroke={activeMeasurement === 3 ? "#d9480f" : "#059669"} strokeWidth="1.2" strokeDasharray="2 2" />
                {/* Main Vertical Dimension Line on side flank */}
                <line
                  x1="395"
                  y1="40"
                  x2="395"
                  y2="274"
                  stroke={activeMeasurement === 3 ? "#d9480f" : "#059669"}
                  strokeWidth={activeMeasurement === 3 ? 3 : 2}
                />
                {/* Top/Bottom Horizontal Ticks & Anchor Circles */}
                <line x1="388" y1="40" x2="402" y2="40" stroke={activeMeasurement === 3 ? "#d9480f" : "#059669"} strokeWidth="2" />
                <line x1="388" y1="274" x2="402" y2="274" stroke={activeMeasurement === 3 ? "#d9480f" : "#059669"} strokeWidth="2" />
                <circle cx="395" cy="40" r="3" fill={activeMeasurement === 3 ? "#d9480f" : "#059669"} />
                <circle cx="395" cy="274" r="3" fill={activeMeasurement === 3 ? "#d9480f" : "#059669"} />
                {/* Badge 3 - Dedicated flank position, 0 overlap with points 1, 4, or 2 */}
                <circle cx="395" cy="157" r={activeMeasurement === 3 ? 13 : 11} fill={activeMeasurement === 3 ? "#d9480f" : "#059669"} filter="url(#badgeShadow)" />
                <text x="395" y="161" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
              </g>

              {/* ── POINT 5: SLEEVE (Shoulder Tip to Cuff) ── */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setActiveMeasurement(activeMeasurement === 5 ? null : 5)}
                onMouseEnter={() => setActiveMeasurement(5)}
                onMouseLeave={() => setActiveMeasurement(null)}
              >
                {/* Dimension Curve following outer sleeve contour */}
                <path
                  d="M 96 68 Q 62 145 52 205 Q 46 240 50 264"
                  stroke={activeMeasurement === 5 ? "#d9480f" : "#7c3aed"}
                  strokeWidth={activeMeasurement === 5 ? 3 : 2}
                  fill="none"
                />
                {/* End Markers */}
                <circle cx="96" cy="68" r="3.5" fill={activeMeasurement === 5 ? "#d9480f" : "#7c3aed"} />
                <circle cx="50" cy="264" r="3.5" fill={activeMeasurement === 5 ? "#d9480f" : "#7c3aed"} />
                {/* Badge 5 */}
                <circle cx="38" cy="154" r={activeMeasurement === 5 ? 13 : 11} fill={activeMeasurement === 5 ? "#d9480f" : "#7c3aed"} filter="url(#badgeShadow)" />
                <text x="38" y="158" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">5</text>
              </g>

              {/* ── POINT 6: WRIST (Cuff Opening) ── */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setActiveMeasurement(activeMeasurement === 6 ? null : 6)}
                onMouseEnter={() => setActiveMeasurement(6)}
                onMouseLeave={() => setActiveMeasurement(null)}
              >
                {/* Offset dimension line across cuff */}
                <line
                  x1="324"
                  y1="288"
                  x2="358"
                  y2="280"
                  stroke={activeMeasurement === 6 ? "#d9480f" : "#db2777"}
                  strokeWidth={activeMeasurement === 6 ? 3 : 2.5}
                />
                <line x1="322" y1="284" x2="326" y2="292" stroke={activeMeasurement === 6 ? "#d9480f" : "#db2777"} strokeWidth="2" />
                <line x1="356" y1="276" x2="360" y2="284" stroke={activeMeasurement === 6 ? "#d9480f" : "#db2777"} strokeWidth="2" />
                {/* Badge 6 */}
                <circle cx="356" cy="306" r={activeMeasurement === 6 ? 13 : 11} fill={activeMeasurement === 6 ? "#d9480f" : "#db2777"} filter="url(#badgeShadow)" />
                <text x="356" y="310" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">6</text>
              </g>
            </svg>
          </div>

          {/* Dynamic Measurement Spec Callout */}
          <div className="mt-3 min-h-[38px] w-full rounded-lg border border-[#ded5c7] bg-[#fdfbf7] px-3 py-1.5 text-center text-xs leading-tight flex items-center justify-center transition-all">
            {activeMeasurement ? (
              <div className="text-[#221b16]">
                <strong className="text-[#8a4d2b]">
                  Point {activeMeasurement} • {MEASUREMENT_ROWS.find((r) => r.num === activeMeasurement)?.label}:
                </strong>{" "}
                <span className="text-[#5a4c41]">
                  {MEASUREMENT_ROWS.find((r) => r.num === activeMeasurement)?.description}
                </span>
              </div>
            ) : (
              <span className="text-[#8a7b70] italic text-[11px]">
                Hover or click any marker (1–6) or table row to inspect measurement guide
              </span>
            )}
          </div>

          {/* Interactive Number Legend */}
          <div className="mt-3 grid grid-cols-3 gap-2 w-full pt-3 border-t border-[#ded5c7] text-left text-xs">
            {MEASUREMENT_ROWS.map((row) => {
              const isAct = activeMeasurement === row.num;
              const badgeBg =
                row.num === 1 || row.num === 2 || row.num === 4
                  ? "bg-[#2563eb]"
                  : row.num === 3
                  ? "bg-[#059669]"
                  : row.num === 5
                  ? "bg-[#7c3aed]"
                  : "bg-[#db2777]";

              return (
                <button
                  key={row.num}
                  type="button"
                  onClick={() => setActiveMeasurement(isAct ? null : row.num)}
                  onMouseEnter={() => setActiveMeasurement(row.num)}
                  onMouseLeave={() => setActiveMeasurement(null)}
                  className={`flex items-center gap-1.5 rounded-md px-2 py-1 transition-all cursor-pointer text-left ${
                    isAct
                      ? "bg-[#8a4d2b]/15 text-[#8a4d2b] font-bold shadow-2xs"
                      : "text-[#4a3f35] hover:bg-[#ede5d8]"
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white transition-transform ${badgeBg} ${
                      isAct ? "scale-110 ring-2 ring-[#8a4d2b]/40" : ""
                    }`}
                  >
                    {row.num}
                  </span>
                  <span className="truncate">{row.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: "How to Find the Right Size" Instructions */}
        <div className="lg:col-span-6 space-y-4">
          <div className="border-b border-[#ded5c7] pb-2">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-[#221b16]">
              How to Find the Right Size
            </h5>
            <p className="text-xs text-[#706456]">
              Follow our atelier guidelines for an exact fit.
            </p>
          </div>

          <ol className="space-y-3 text-xs leading-relaxed text-[#4a3f35]">
            {HOW_TO_MEASURE_STEPS.map((step) => (
              <li key={step.step} className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#221b16] text-[10px] font-bold text-white mt-0.5">
                  {step.step}
                </span>
                <div>
                  <strong className="text-[#221b16] block">{step.title}</strong>
                  <span>{step.text}</span>
                </div>
              </li>
            ))}
          </ol>

          {/* Bespoke Sizing CTA */}
          {showCustomCta && (
            <div className="mt-4 rounded-xl border border-[#ded5c7] bg-[#f5f0e8] p-4 text-xs">
              <div className="font-bold text-[#221b16] uppercase tracking-wider text-[11px]">
                Need Custom Measurements or In-Between Sizing?
              </div>
              <p className="mt-1 text-[#6b5c51] leading-relaxed">
                Our master pattern-makers craft custom body, sleeve, and shoulder adjustments to your exact specifications.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/?text=Hi%20Leather%20Haven%20Craft%20%E2%80%94%20I%20need%20assistance%20with%20sizing%20or%20a%20custom%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 items-center justify-center rounded bg-[#25D366] px-3 text-[11px] font-semibold uppercase tracking-wider text-black hover:opacity-90 shadow-2xs"
                >
                  Message on WhatsApp
                </a>
                <a
                  href="mailto:support@leatherhavencraft.com?subject=Custom%20Sizing%20Inquiry"
                  className="inline-flex h-8 items-center justify-center rounded border border-[#ded5c7] bg-white px-3 text-[11px] font-semibold uppercase tracking-wider text-[#221b16] hover:bg-[#ede7de] shadow-2xs"
                >
                  Email Specifications
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

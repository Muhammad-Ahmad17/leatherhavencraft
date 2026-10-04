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

          {/* High-fidelity Jacket Vector Diagram */}
          <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center">
            <svg
              viewBox="0 0 400 320"
              className="w-full h-full select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Jacket Silhouette */}
              <path
                d="M 140 40 L 160 55 L 240 55 L 260 40 L 320 70 L 350 220 L 315 230 L 295 125 L 295 240 L 105 240 L 105 125 L 85 230 L 50 220 L 80 70 Z"
                fill="#f0ebe1"
                stroke="#2a1810"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Collar & Lapels */}
              <path
                d="M 160 55 L 200 110 L 240 55"
                stroke="#2a1810"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 160 55 L 180 85 L 140 75"
                stroke="#2a1810"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 240 55 L 220 85 L 260 75"
                stroke="#2a1810"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Main Center Zipper */}
              <line
                x1="200"
                y1="110"
                x2="200"
                y2="240"
                stroke="#8a4d2b"
                strokeWidth="2"
                strokeDasharray="3 2"
              />

              {/* 4. Shoulder Line (Point 4) */}
              <line
                x1="120"
                y1="65"
                x2="280"
                y2="65"
                stroke={activeMeasurement === 4 ? "#d9480f" : "#2563eb"}
                strokeWidth="2.5"
              />
              <circle cx="120" cy="65" r="4" fill={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} />
              <circle cx="280" cy="65" r="4" fill={activeMeasurement === 4 ? "#d9480f" : "#2563eb"} />

              {/* 1. Chest Line (Point 1: Pit to Pit) */}
              <line
                x1="105"
                y1="140"
                x2="295"
                y2="140"
                stroke={activeMeasurement === 1 ? "#d9480f" : "#2563eb"}
                strokeWidth="2.5"
              />
              <circle cx="105" cy="140" r="4" fill={activeMeasurement === 1 ? "#d9480f" : "#2563eb"} />
              <circle cx="295" cy="140" r="4" fill={activeMeasurement === 1 ? "#d9480f" : "#2563eb"} />

              {/* 2. Waist Line (Point 2: Bottom Hem) */}
              <line
                x1="105"
                y1="250"
                x2="295"
                y2="250"
                stroke={activeMeasurement === 2 ? "#d9480f" : "#2563eb"}
                strokeWidth="2.5"
              />
              <circle cx="105" cy="250" r="4" fill={activeMeasurement === 2 ? "#d9480f" : "#2563eb"} />
              <circle cx="295" cy="250" r="4" fill={activeMeasurement === 2 ? "#d9480f" : "#2563eb"} />

              {/* 3. Length Line (Point 3: Collar to Hem) */}
              <line
                x1="200"
                y1="40"
                x2="200"
                y2="240"
                stroke={activeMeasurement === 3 ? "#d9480f" : "#059669"}
                strokeWidth="2.5"
              />
              <circle cx="200" cy="40" r="4" fill={activeMeasurement === 3 ? "#d9480f" : "#059669"} />
              <circle cx="200" cy="240" r="4" fill={activeMeasurement === 3 ? "#d9480f" : "#059669"} />

              {/* 5. Sleeve Line (Point 5: Outer Arm Curve) */}
              <path
                d="M 80 70 Q 55 140 50 220"
                stroke={activeMeasurement === 5 ? "#d9480f" : "#7c3aed"}
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="80" cy="70" r="4" fill={activeMeasurement === 5 ? "#d9480f" : "#7c3aed"} />
              <circle cx="50" cy="220" r="4" fill={activeMeasurement === 5 ? "#d9480f" : "#7c3aed"} />

              {/* 6. Wrist Line (Point 6: Cuff) */}
              <line
                x1="315"
                y1="235"
                x2="350"
                y2="225"
                stroke={activeMeasurement === 6 ? "#d9480f" : "#db2777"}
                strokeWidth="3"
              />

              {/* Number Badges matching user diagram */}
              {/* Badge 1: Chest */}
              <g transform="translate(188, 128)">
                <rect width="24" height="24" rx="12" fill="#2563eb" />
                <text x="12" y="16" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
              </g>
              {/* Badge 2: Waist */}
              <g transform="translate(188, 255)">
                <rect width="24" height="24" rx="12" fill="#2563eb" />
                <text x="12" y="16" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
              </g>
              {/* Badge 3: Length */}
              <g transform="translate(188, 20)">
                <rect width="24" height="24" rx="12" fill="#059669" />
                <text x="12" y="16" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
              </g>
              {/* Badge 4: Shoulder */}
              <g transform="translate(188, 53)">
                <rect width="24" height="24" rx="12" fill="#2563eb" />
                <text x="12" y="16" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
              </g>
              {/* Badge 5: Sleeve */}
              <g transform="translate(30, 130)">
                <rect width="24" height="24" rx="12" fill="#7c3aed" />
                <text x="12" y="16" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
              </g>
              {/* Badge 6: Wrist */}
              <g transform="translate(340, 240)">
                <rect width="24" height="24" rx="12" fill="#db2777" />
                <text x="12" y="16" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">6</text>
              </g>
            </svg>
          </div>

          {/* Number Legend */}
          <div className="mt-3 grid grid-cols-3 gap-2 w-full pt-3 border-t border-[#ded5c7] text-left text-xs">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2563eb] text-[10px] font-bold text-white">1</span>
              <span>Chest</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2563eb] text-[10px] font-bold text-white">2</span>
              <span>Waist</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#059669] text-[10px] font-bold text-white">3</span>
              <span>Length</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2563eb] text-[10px] font-bold text-white">4</span>
              <span>Shoulder</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#7c3aed] text-[10px] font-bold text-white">5</span>
              <span>Sleeve</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#db2777] text-[10px] font-bold text-white">6</span>
              <span>Wrist</span>
            </div>
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

import Link from "next/link";
import type { Brand } from "@/data/brands";

interface BrandDossierProps {
  brand: Brand;
}

export function BrandDossier({ brand }: BrandDossierProps) {
  const heritage = brand.heritage;
  if (!heritage) return null;

  return (
    <section
      aria-labelledby="brand-dossier-heading"
      className="border-t border-[#ded5c7] bg-[#fbf9f6] px-6 py-16 sm:py-24 text-[#221b16]"
    >
      <div className="mx-auto max-w-5xl">
        {/* ── Section Header ── */}
        <div className="border-b border-[#ded5c7] pb-8 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
              Archival Provenance
            </span>
            <span className="rounded-full bg-[#8a4d2b]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#8a4d2b]">
              Established {heritage.originYear}
            </span>
          </div>

          <h2
            id="brand-dossier-heading"
            className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#221b16] sm:text-4xl lg:text-5xl"
          >
            {brand.name} Heritage &amp; Collector Guide
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#6b5c51] sm:text-sm max-w-3xl">
            An in-depth atelier dossier on the history, iconic cuts, material standards, and authenticity inspection for {brand.name} leather outerwear.
          </p>
        </div>

        {/* ── Quick Technical Specs Grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#ded5c7] bg-white p-5 shadow-2xs">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Origins
            </span>
            <p className="mt-2 font-serif text-base font-bold text-[#221b16]">
              {heritage.originYear}
            </p>
            <p className="mt-1 text-xs text-[#706456]">
              {heritage.originPlace}
            </p>
          </div>

          <div className="rounded-xl border border-[#ded5c7] bg-white p-5 shadow-2xs">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Signature Hides
            </span>
            <p className="mt-2 text-xs font-semibold text-[#221b16] leading-relaxed">
              {heritage.primaryHides}
            </p>
          </div>

          <div className="rounded-xl border border-[#ded5c7] bg-white p-5 shadow-2xs">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Iconic Cuts
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {heritage.signatureSilhouettes.map((cut, idx) => (
                <span
                  key={idx}
                  className="rounded bg-[#f5efe6] px-2 py-0.5 text-[10px] font-medium text-[#4a3a2d]"
                >
                  {cut}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#ded5c7] bg-white p-5 shadow-2xs">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Hardware &amp; Craft
            </span>
            <p className="mt-2 text-xs text-[#706456] leading-relaxed">
              {heritage.hardwareNotes}
            </p>
          </div>
        </div>

        {/* ── Editorial Story & Cultural Impact ── */}
        <div className="mt-12 rounded-2xl border border-[#ded5c7] bg-white p-6 sm:p-10 shadow-xs">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8a4d2b]/20 bg-[#faf6f0] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b] mb-4">
            <span>Historical Significance</span>
          </div>

          <h3 className="font-serif text-2xl font-bold tracking-tight text-[#221b16] sm:text-3xl">
            The Cultural Legacy of {brand.name}
          </h3>

          <div className="mt-6 space-y-4 text-xs leading-relaxed text-[#52453c] sm:text-sm sm:leading-7">
            {heritage.heritageStory.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* ── Two-Column Box: Authenticity Checklist & Sizing Advisory ── */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Authenticity Verification Guide */}
          <div className="lg:col-span-7 rounded-2xl border border-[#ded5c7] bg-[#f7f3ec] p-6 sm:p-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
              Collector Verification
            </span>
            <h4 className="mt-1 font-serif text-xl font-bold text-[#221b16] sm:text-2xl">
              Authenticity Inspection Checklist
            </h4>
            <p className="mt-2 text-xs text-[#706456]">
              Every {brand.name} piece in our archive is authenticated through a multi-point verification protocol before entering our catalog:
            </p>

            <ul className="mt-6 space-y-3.5 text-xs text-[#4a3f35] sm:text-sm">
              {heritage.authenticityPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b] text-white text-[10px] font-bold mt-0.5">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Sizing Advisory & Direct Consultation */}
          <div className="lg:col-span-5 rounded-2xl border border-[#ded5c7] bg-white p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Atelier Fit Advisory
              </span>
              <h4 className="mt-1 font-serif text-xl font-bold text-[#221b16]">
                How {brand.name} Fits
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-[#6b5c51] sm:text-sm">
                {heritage.fitAndSizingGuide}
              </p>
            </div>

            <div className="rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-4 text-xs space-y-3">
              <div className="font-bold text-[#221b16] uppercase tracking-wider text-[11px]">
                Compare Exact Flat Measurements
              </div>
              <p className="text-[#706456] leading-relaxed">
                Check our universal pit-to-pit chest, shoulder, waist, and sleeve matrix to confirm your ideal size across all heritage houses.
              </p>
              <Link
                href="/size-guide"
                className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-[#8a4d2b] px-4 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-black shadow-2xs"
              >
                <span>Universal Size Guide (XS–6XL) &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

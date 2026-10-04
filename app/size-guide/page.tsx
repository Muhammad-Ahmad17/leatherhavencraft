import type { Metadata } from "next";
import Link from "next/link";
import { UniversalSizeChart } from "@/components/common/UniversalSizeChart";
import { CustomManufacturing } from "@/components/home/CustomManufacturing";

export const metadata: Metadata = {
  title: "Universal Size Guide (XS – 6XL) | Leather Haven Craft",
  description:
    "Official universal gents sizing chart for leather jackets and outerwear across Schott NYC, Avirex, Pelle Pelle, and Leather Haven Craft. Detailed pit-to-pit chest, waist, length, shoulder, sleeve, and wrist measurements in inches and cm.",
  alternates: { canonical: "/size-guide" },
};

export default function SizeGuidePage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#221b16] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#8a7b70]">
          <Link href="/" className="hover:text-[#221b16] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#8a4d2b]">Universal Size Guide</span>
        </nav>

        {/* ── Editorial Header ── */}
        <header className="border-b border-[#ded5c7] pb-8 mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Atelier Standards
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[#221b16]">
            Universal Gents Size Chart
          </h1>
          <p className="mt-3 text-xs leading-relaxed text-[#6b5c51] sm:text-sm max-w-2xl">
            This master matrix applies across all outerwear pieces in our catalog. Every measurement is taken with the garment laid completely flat, seam to seam, ensuring accurate sizing when compared against your existing outerwear.
          </p>
        </header>

        {/* ── Full Interactive Chart & Visual Diagram ── */}
        <div className="rounded-2xl border border-[#ded5c7] bg-white p-5 sm:p-8 shadow-sm">
          <UniversalSizeChart showCustomCta={true} />
        </div>

        {/* ── Leather Fit Advisory Note ── */}
        <section className="mt-12 rounded-2xl border border-[#ded5c7] bg-[#f5f0e8] p-6 sm:p-8">
          <h3 className="font-serif text-lg font-bold text-[#221b16] sm:text-xl">
            The Philosophy of Leather Fit &amp; Break-in
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed text-[#52453c]">
            <div className="space-y-2">
              <strong className="block text-[#221b16] font-semibold text-sm">
                Natural Hide Molding
              </strong>
              <p>
                Genuine full-grain cowhide, steerhide, and horsehide are dense, natural materials that gently yield to body heat and movement. After 20 to 30 hours of continuous wear, high-grade leather relaxes at pressure points across the shoulders, chest, and elbows, conforming specifically to your physique.
              </p>
            </div>
            <div className="space-y-2">
              <strong className="block text-[#221b16] font-semibold text-sm">
                Layering vs. Trim Moto Silhouette
              </strong>
              <p>
                If you intend to wear your jacket over thick Scottish lambswool sweaters or hoodies, select the larger size when your chest measurement falls between intervals. If you prefer the authentic 1950s café racer or flight profile, choose your exact flat chest measurement.
              </p>
            </div>
          </div>
        </section>

        {/* ── Custom Manufacturing Section ── */}
        <div className="mt-16">
          <CustomManufacturing showSizeGuideLink={false} />
        </div>
      </div>
    </main>
  );
}

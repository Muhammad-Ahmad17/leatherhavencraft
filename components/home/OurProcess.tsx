export function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "Hide Selection & Inspection",
      desc: "We curate premium full-grain steerhide, lambskin, and heritage leathers, hand-inspecting each hide for natural grain consistency, weight, and structural longevity.",
    },
    {
      num: "02",
      title: "Artisanal Pattern Cutting",
      desc: "Each garment panel is individually hand-marked, grain-matched, and precision cut to guarantee an ergonomic silhouette and enduring drape.",
    },
    {
      num: "03",
      title: "Master Construction & Hardware",
      desc: "Built with heavy-duty bonded nylon threading, reinforced stress points, and authentic heritage-grade brass zippers and solid metal hardware.",
    },
    {
      num: "04",
      title: "Conditioning & Final Inspection",
      desc: "Treated with natural organic balms, steam-molded for fit memory, and subject to an exhaustive multi-point quality check prior to global delivery.",
    },
  ];

  return (
    <section className="border-t border-[#ded5c7] bg-[#faf8f5] px-6 py-16 sm:py-24" aria-labelledby="our-process-heading">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#ded5c7] pb-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
              Atelier Craftsmanship
            </p>
            <h2 id="our-process-heading" className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#2a1810] sm:text-4xl">
              Our Process
            </h2>
          </div>
          <p className="text-xs text-[#706456] max-w-sm sm:text-right">
            Every piece is crafted in accordance with heritage leatherworking standards and inspected by our master artisans.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative flex flex-col justify-between rounded-xl border border-[#ded5c7] bg-white p-6 shadow-2xs transition-all hover:border-[#8a4d2b] hover:shadow-md"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-[#8a4d2b]/60">
                  {step.num}
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#2a1810]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#706456]">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 h-1 w-8 rounded-full bg-[#8a4d2b]/20" />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-[#ded5c7] bg-[#f4eee6]/60 p-4 text-center text-xs text-[#706456]">
          <span className="font-semibold text-[#2a1810]">Atelier Standards: </span>
          Complete workshop documentation and step-by-step video archives updating soon.
        </div>
      </div>
    </section>
  );
}

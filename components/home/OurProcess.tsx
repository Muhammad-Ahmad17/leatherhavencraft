"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Leather Selection",
    desc: "We select quality leather with careful attention to texture, finish, and durability.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4v16M15 4v16" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Pattern & Cutting",
    desc: "Each panel is carefully measured and cut to achieve the right shape, fit, and proportions.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Stitching & Assembly",
    desc: "Panels are precisely stitched and assembled with durable thread and quality hardware.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Finishing & Quality Check",
    desc: "Every piece is inspected, finished, and checked for details before it is ready to ship.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function OurProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-t border-[#ded5c7] bg-white px-6 py-16 sm:py-24 overflow-hidden"
      aria-labelledby="our-process-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#ded5c7] pb-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
              Atelier Standards
            </p>
            <h2
              id="our-process-heading"
              className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#2a1810] sm:text-4xl"
            >
              Our Process
            </h2>
          </div>
          <p className="text-xs text-[#706456] max-w-md sm:text-right leading-relaxed">
            From raw hide curation to precision assembly, every jacket is individually bench-crafted in accordance with heritage leatherworking discipline.
          </p>
        </div>

        {/* ── Steps Container with Connecting Collision Line ── */}
        <div className="relative mt-14 sm:mt-18">
          {/* Continuous horizontal connection line (desktop) */}
          <div
            className={`hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#ded5c7] via-[#8a4d2b]/40 to-[#ded5c7] transition-all duration-1000 ease-out z-0 ${
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-75"
            }`}
            style={{ transformOrigin: "left center" }}
            aria-hidden="true"
          />

          {/* Continuous vertical connection line (mobile) */}
          <div
            className={`block lg:hidden absolute top-8 bottom-8 left-[27px] w-[2px] bg-gradient-to-b from-[#ded5c7] via-[#8a4d2b]/40 to-[#ded5c7] transition-all duration-1000 ease-out z-0 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((step, idx) => {
              // Staggered delays: 01 (100ms), 02 (300ms), 03 (500ms), 04 (700ms)
              const delays = ["delay-100", "delay-300", "delay-500", "delay-700"];
              return (
                <div
                  key={step.num}
                  className={`group relative flex flex-col justify-between rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-6 shadow-2xs transition-all duration-700 ease-out hover:border-[#8a4d2b] hover:shadow-md hover:-translate-y-1 ${
                    delays[idx]
                  } ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <div>
                    {/* Header: Step Badge & Atelier Icon */}
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white border border-[#ded5c7] font-mono text-sm font-bold text-[#8a4d2b] shadow-2xs group-hover:border-[#8a4d2b] group-hover:bg-[#8a4d2b] group-hover:text-white transition-all">
                        {step.num}
                      </span>
                      <div className="text-[#8a4d2b]/70 group-hover:text-[#8a4d2b] transition-colors">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="mt-5 text-base font-bold text-[#2a1810] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#706456]">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#ded5c7]/60 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a7b70]">
                      Phase {step.num}
                    </span>
                    <div className="h-1 w-6 rounded-full bg-[#8a4d2b]/20 group-hover:w-10 group-hover:bg-[#8a4d2b] transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-[#ded5c7] bg-[#faf8f5] p-4 text-center text-xs text-[#706456]">
          <span className="font-semibold text-[#2a1810]">Atelier Benchmark: </span>
          Every piece is measured against archival standards before final dispatch.
        </div>
      </div>
    </section>
  );
}

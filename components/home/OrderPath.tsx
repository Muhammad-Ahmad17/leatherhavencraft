const steps = [
  {
    n: "01",
    title: "Pick the jacket or cut",
    copy: "Choose a heritage silhouette, bespoke cut, or wholesale volume run. Specs on every page.",
  },
  {
    n: "02",
    title: "Message us",
    copy: "Send your piece or bulk specs on WhatsApp or email. We confirm stock, sizing, and volume pricing before you pay.",
  },
  {
    n: "03",
    title: "We ship it",
    copy: "Bench-crafted outerwear, inspected and sent express to addresses in Europe and the United States.",
  },
];

const trust = [
  { title: "Master Atelier", copy: "Artisan-crafted master tributes and bespoke custom cuts." },
  { title: "Wholesale & Bulk Supply", copy: "Tiered factory pricing and private-label production for boutiques and clubs." },
  { title: "Europe & USA Express", copy: "Duties and door-to-door transit are confirmed on the order thread." },
  { title: "Dedicated Concierge", copy: "Direct artisan advice for individual fits or bulk volume quotations." },
];

export function OrderPath() {
  return (
    <section className="border-t border-[#ded5c7] bg-white px-6 py-16 sm:py-20" aria-label="How an order works">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">Concierge &amp; Bulk Ordering</p>
        <h2 className="mt-2 text-3xl font-medium tracking-tight text-[#221b16] sm:text-4xl">How an order works</h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-[#ded5c7] pt-6">
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#8a4d2b]">{step.n}</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-[#221b16]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6b5c51]">{step.copy}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 border-t border-[#ded5c7] pt-10">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <li key={item.title}>
                <h3 className="text-sm font-semibold tracking-tight text-[#221b16]">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-[#6b5c51]">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

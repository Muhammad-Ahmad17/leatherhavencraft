const steps = [
  {
    n: "01",
    title: "Pick the jacket",
    copy: "Choose a house, a cut, and a size. Photos and details are on every product page.",
  },
  {
    n: "02",
    title: "Message us",
    copy: "Send the piece on WhatsApp or email. We confirm stock, size, and shipping before you pay.",
  },
  {
    n: "03",
    title: "We ship it",
    copy: "Bench-crafted outerwear, inspected and sent to addresses in Europe and the United States.",
  },
];

const trust = [
  { title: "Master Atelier", copy: "Artisan-crafted master tributes and bespoke custom cuts." },
  { title: "In-stock pieces", copy: "What you see is what we can talk through today." },
  { title: "Europe & USA", copy: "Duties and transit are confirmed on the order thread." },
  { title: "Size help", copy: "Ask before you buy. We would rather get the fit right." },
];

export function OrderPath() {
  return (
    <>
      <section className="border-t border-[var(--line)] bg-[var(--bg)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">No checkout cart</p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight">How an order works</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} className="border-t border-[var(--line)] pt-6">
                <p className="text-[11px] tracking-[0.18em] text-[var(--leather)]">{step.n}</p>
                <h3 className="mt-3 text-xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-white px-6 py-10">
        <ul className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <li key={item.title}>
              <h3 className="text-sm font-medium tracking-tight">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">{item.copy}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

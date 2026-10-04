"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Are all jackets authentic Schott NYC, Avirex, Pelle Pelle, and Harley-Davidson?",
    a: "Yes, 100% authentic. Every piece sourced from heritage houses is verified for authentic hardware (RiRi, Talon, or YKK zippers), heavyweight hides, and official brand tags. For our in-house line, pieces are handcrafted by our master artisans using full-grain Horween leathers.",
  },
  {
    q: "What leather types do you offer?",
    a: "We curate premium heavyweight steerhide and cowhide (Schott Perfecto & Cafe Racers), thick shearling sheepskin pelt (Avirex B-3 Bombers), supple lambskin (Pelle Pelle Plush Bombers), and competition-weight full-grain Horween Chromexcel for our bespoke creations.",
  },
  {
    q: "How do I choose the correct size?",
    a: "Every jacket has exact pit-to-pit chest, sleeve, back length, and hem measurements listed on its product page. If you are unsure between two sizes, message our WhatsApp or email concierge with your height, weight, and chest circumference for personalized fit advice before ordering.",
  },
  {
    q: "How does the ordering and payment process work?",
    a: "Click \"Inquire / Order\" on any jacket to reach our concierge via WhatsApp or email (support@leatherhavencraft.com). We confirm exact measurements, live inventory, and shipping address, then issue a secure, encrypted payment link via Stripe or invoice.",
  },
  {
    q: "Where do you ship and what are the delivery times?",
    a: "We ship express worldwide with DHL Express and FedEx Priority. Deliveries to the United States, United Kingdom, and Europe typically arrive in 3 to 5 business days with full door-to-door tracking and transit insurance.",
  },
];

export function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="border-t border-[#ded5c7] bg-[#faf8f5] text-[#221b16] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Questions &amp; Guidance
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#221b16] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-[#6b5c51] max-w-xl mx-auto">
            Everything you need to know about our leather grades, authentic heritage cuts, concierge ordering, and worldwide delivery.
          </p>
        </div>

        <div className="mt-12 divide-y divide-[#ded5c7] border-y border-[#ded5c7]">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left transition-colors hover:text-[#8a4d2b] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold pr-4 sm:text-lg text-[#221b16]">
                    {faq.q}
                  </span>
                  <span className="text-xl text-[#8a4d2b] flex-shrink-0 font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 text-sm leading-relaxed text-[#6b5c51] sm:text-base">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-[#6b5c51]">
            Have a custom measurement or bespoke inquiry?{" "}
            <Link
              href="/faq"
              className="text-[#8a4d2b] font-medium underline underline-offset-4 hover:text-[#221b16]"
            >
              View Full FAQ &amp; Policies →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

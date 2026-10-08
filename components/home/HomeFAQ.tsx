"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How are your jackets constructed and sourced?",
    a: "Our jackets are master artisan recreations and custom made to measure pieces handcrafted in our Sialkot workshop. Each piece is individually bench-crafted using heavy 1.3 to 1.5mm full grain steerhide, genuine merino shearling pelts, or supple lambskin with heavy gauge brass hardware (Talon, Ideal, YKK) mirroring the exact drape, cut, and weight of iconic archival silhouettes.",
  },
  {
    q: "What leather types do you offer?",
    a: "We curate premium heavyweight steerhide and cowhide (Schott Perfecto & Cafe Racers), thick shearling sheepskin pelt (Avirex B-3 Bombers), supple lambskin (Pelle Pelle Plush Bombers), and competition-weight full-grain Horween Chromexcel for our bespoke creations.",
  },
  {
    q: "Do you offer wholesale pricing, bulk dealing, or private-label production?",
    a: "Yes. In addition to individual pieces, Leather Haven Craft operates as a direct leathercraft manufacturer for retail boutiques, motorcycle clubs, streetwear labels, and corporate bulk clients. We offer tiered wholesale discounts starting from 5+ units, custom embossing, private label branding, and international bulk express shipping. Contact our workshop via WhatsApp or email with your quantity and design requirements for a wholesale quotation.",
  },
  {
    q: "How do I choose the correct size?",
    a: "Every jacket has exact pit to pit chest, sleeve, back length, and hem measurements listed on its product page. If you are unsure between two sizes, message our WhatsApp or email concierge with your height, weight, and chest circumference for personalized fit advice before ordering.",
  },
  {
    q: "How does the ordering and payment process work?",
    a: "Click \"Inquire / Order\" on any jacket to reach our concierge via WhatsApp or email (support@leatherhavencraft.com). We confirm exact measurements, live inventory, and shipping address, then issue a secure, encrypted payment link via Stripe or invoice.",
  },
  {
    q: "Where do you ship and what are the delivery times?",
    a: "We provide free worldwide delivery. We use reliable air delivery selected according to destination country with no fixed single carrier to ensure the fastest local transit. Delivery typically takes around 1 week to 9 days. We provide direct personal updates on your order throughout production until it is dispatched, after which the respective delivery service provides full online tracking to your doorstep.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 to 8 days of delivery. The customer must contact us within 7 to 8 days to request a return. Return shipping costs will be paid by the customer. The product must be returned in its original, unused, and undamaged condition. Once we receive and inspect the returned product, we will process the refund or re-payment. Refunds will only be issued after the returned product has been received and checked. Any item that is damaged, used, altered, or not in its original condition may not be eligible for a refund.",
  },
];

export function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="border-t border-[#ded5c7] bg-[#faf7f2] text-[#2a1810] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Questions &amp; Guidance
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2a1810] sm:text-4xl">
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
                  <span className="text-base font-semibold pr-4 sm:text-lg text-[#2a1810]">
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
              className="text-[#8a4d2b] font-medium underline underline-offset-4 hover:text-[#2a1810]"
            >
              View Full FAQ &amp; Policies →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

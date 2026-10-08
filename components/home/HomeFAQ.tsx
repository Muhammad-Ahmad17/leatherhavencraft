"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What leather do you use?",
    a: "We use 100% natural cowhide and sheepskin leather, selected for durability, comfort, and a premium feel.",
  },
  {
    q: "Are your jackets comfortable and easy to wear?",
    a: "Yes. Our jackets are designed for everyday comfort, easy wear, and a secure fit.",
  },
  {
    q: "How long does delivery take?",
    a: "We offer worldwide delivery, with orders typically arriving within 7 to 9 days.",
  },
  {
    q: "How do I choose my size?",
    a: "Check the size guide on the product page. If you are unsure, contact us for help choosing the right fit.",
  },
  {
    q: "How do I place an order?",
    a: "Click \"Order Now\" and send us a message on WhatsApp. We will guide you through the order.",
  },
  {
    q: "Do you offer custom or bulk orders?",
    a: "Yes. We offer custom sizing, branding, and bulk orders. Contact us with your requirements.",
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

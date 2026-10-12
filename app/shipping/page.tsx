import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Worldwide Delivery & 7 to 8 Day Return Policy | Leather Haven Craft",
  description:
    "Free global air delivery timeline (7 to 9 days), full dispatch updates, tracking, and our official 7 to 8 day return policy.",
  alternates: { canonical: "/shipping" },
  openGraph: {
    title: "Shipping, Delivery & Returns Policy | Leather Haven Craft",
    description: "Free international air delivery and 7 to 8 day return policy for handcrafted leather outerwear.",
  },
};

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#221b16] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-[#8a7b70] mb-8">
          <Link href="/" className="hover:text-[#221b16] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#8a4d2b] font-medium">Shipping &amp; Returns</span>
        </nav>

        <header className="border-b border-[#ded5c7] pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Global Logistics &amp; Customer Care
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-5xl text-[#221b16]">
            Shipping &amp; Returns Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#6b5c51] leading-relaxed">
            Free Worldwide Delivery (7 to 9 Days) · Full Dispatch Updates &amp; Tracking · 7 to 8 Day Return Policy
          </p>
        </header>

        <div className="mt-10 space-y-10 text-xs sm:text-sm leading-relaxed text-[#52453c]">
          {/* ── Shipping Policy ── */}
          <section className="space-y-4">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#221b16]">
              1. Delivery Timelines &amp; Dispatch Updates
            </h2>
            <p>
              We provide free worldwide delivery across all orders. We use dependable international air delivery services selected according to destination country with no fixed single company, ensuring the most reliable and efficient local transit for each region.
            </p>
            <div className="rounded-xl border border-[#ded5c7] bg-white p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#ded5c7]/60 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a4d2b]">
                  Estimated Delivery Window
                </span>
                <span className="font-mono text-sm font-bold text-[#221b16]">
                  7 to 9 Days
                </span>
              </div>
              <p className="text-xs text-[#6b5c51]">
                We personally keep you updated on your order throughout production and preparation until it is dispatched. Once dispatched, the respective delivery service provides full online tracking directly to your doorstep.
              </p>
            </div>
          </section>

          {/* ── Packaging ── */}
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#221b16]">
              2. Luxury Protective Packaging
            </h2>
            <p>
              Every leather garment is prepared with care to preserve hide shape, structure, and hardware during transit. Garments are placed inside breathable protective covers on wide wooden hangers to prevent creasing and maintain natural drape.
            </p>
          </section>

          {/* ── Return Policy ── */}
          <section className="space-y-4">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#221b16]">
              3. Return Policy (7 to 8 Days)
            </h2>
            <p>
              We accept returns within 7 to 8 days of delivery. Please review the following conditions:
            </p>
            <div className="rounded-xl border border-[#ded5c7] bg-white p-6 shadow-2xs space-y-3.5">
              <ul className="space-y-2.5 list-disc list-inside text-[#52453c]">
                <li>
                  <strong className="text-[#221b16]">Notification Window:</strong> The customer must contact us within 7 to 8 days of delivery to request a return.
                </li>
                <li>
                  <strong className="text-[#221b16]">Shipping Costs:</strong> Return shipping costs will be paid by the customer.
                </li>
                <li>
                  <strong className="text-[#221b16]">Original Condition:</strong> The product must be returned in its original, unused, and undamaged condition.
                </li>
                <li>
                  <strong className="text-[#221b16]">Inspection &amp; Refund:</strong> Once we receive and inspect the returned product, we will process the refund or re-payment.
                </li>
                <li>
                  <strong className="text-[#221b16]">Verification Requirement:</strong> Refunds will only be issued after the returned product has been received and checked.
                </li>
                <li>
                  <strong className="text-[#221b16]">Eligibility:</strong> Any item that is damaged, used, altered, or not in its original condition may not be eligible for a refund.
                </li>
              </ul>
              <div className="border-t border-[#ded5c7]/60 pt-3 text-xs text-[#706456]">
                Thank you for your understanding and cooperation. To initiate a return, contact our support desk at{" "}
                <a href="mailto:support@leatherhavencraft.com" className="text-[#8a4d2b] font-bold underline">
                  support@leatherhavencraft.com
                </a>.
              </div>
            </div>
          </section>

          {/* ── Official Refund Claim Checklist ── */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#ded5c7] pb-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#221b16]">
                4. Step-by-Step Refund Claim Checklist
              </h2>
              <span className="rounded-full bg-[#8a4d2b]/10 text-[#8a4d2b] border border-[#8a4d2b]/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Mandatory Protocol
              </span>
            </div>

            <p className="text-xs text-[#6b5c51]">
              To guarantee seamless review by our workshop management and prevent processing delays, ensure all 5 verification steps are completed prior to dispatching your parcel:
            </p>

            <div className="rounded-xl border border-[#ded5c7] bg-[#f7f4ee] p-5 sm:p-6 space-y-4 shadow-2xs">
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 rounded-lg border border-[#ded5c7]/80 bg-white p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b] text-[10px] font-bold text-white">
                    1
                  </span>
                  <div>
                    <strong className="block text-xs font-bold text-[#221b16]">
                      7-to-8 Day Notice Window Check
                    </strong>
                    <span className="text-[11px] text-[#6b5c51]">
                      Verify that your return claim is initiated within 7 to 8 calendar days from the courier delivery timestamp recorded on your tracking page.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#ded5c7]/80 bg-white p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b] text-[10px] font-bold text-white">
                    2
                  </span>
                  <div>
                    <strong className="block text-xs font-bold text-[#221b16]">
                      Garment &amp; Hide Condition Audit
                    </strong>
                    <span className="text-[11px] text-[#6b5c51]">
                      The leather garment must be unworn, unscented, free from permanent elbow break-in creases, and devoid of alterations or collar scuffs.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#ded5c7]/80 bg-white p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b] text-[10px] font-bold text-white">
                    3
                  </span>
                  <div>
                    <strong className="block text-xs font-bold text-[#221b16]">
                      Original Packaging &amp; Accessories Preservation
                    </strong>
                    <span className="text-[11px] text-[#6b5c51]">
                      Package the piece with all original materials, including the garment dust cover, wide wooden hanger, and attached atelier tags.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#ded5c7]/80 bg-white p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b] text-[10px] font-bold text-white">
                    4
                  </span>
                  <div>
                    <strong className="block text-xs font-bold text-[#221b16]">
                      Obtain RMA Return Authorization Number
                    </strong>
                    <span className="text-[11px] text-[#6b5c51]">
                      Email support@leatherhavencraft.com with your Order Number (LHC-XXXXX) and photo verification to receive an authorized RMA intake code.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-[#ded5c7]/80 bg-white p-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b] text-[10px] font-bold text-white">
                    5
                  </span>
                  <div>
                    <strong className="block text-xs font-bold text-[#221b16]">
                      Tracked Courier Return Shipment
                    </strong>
                    <span className="text-[11px] text-[#6b5c51]">
                      Ship your return with a reliable tracked courier service and provide the tracking AWB to our concierge. Refunds are issued to your original payment method within 5 to 7 business days following physical receipt and verification at our atelier.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

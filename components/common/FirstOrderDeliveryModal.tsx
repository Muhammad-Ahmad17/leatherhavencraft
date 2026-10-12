"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export function FirstOrderDeliveryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const { applyCoupon, couponCode } = useCart();

  useEffect(() => {
    const dismissed = localStorage.getItem("lhc_first_order_popup_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("lhc_first_order_popup_dismissed", "true");
    setIsOpen(false);
  };

  const handleApplyCoupon = () => {
    applyCoupon("FREEDELIVERY");
    setApplied(true);
    localStorage.setItem("lhc_first_order_popup_dismissed", "true");
    setTimeout(() => {
      setIsOpen(false);
    }, 900);
  };

  if (!isOpen || couponCode === "FREEDELIVERY") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-300">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#ded5c7] bg-[#faf8f5] shadow-2xl animate-in zoom-in-95 duration-300 text-center">
        {/* Dismissal */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-[#706456] hover:text-[#1c1815] transition-colors p-1 cursor-pointer"
          aria-label="Dismiss"
        >
          Close
        </button>

        {/* Minimalist Top Header */}
        <div className="bg-[#1c1815] py-5 px-6 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c9b199] block">
            Atelier Client Invitation
          </span>
          <h3 className="mt-1.5 font-serif text-xl sm:text-2xl font-bold tracking-tight">
            Complimentary Air Courier
          </h3>
        </div>

        {/* Body */}
        <div className="p-7 sm:p-8 space-y-6">
          <p className="text-xs sm:text-sm text-[#61544a] leading-relaxed">
            Welcome to Leather Haven Craft. Receive complimentary express worldwide courier service on your initial order with promotional code <strong className="font-mono text-[#1c1815] font-bold">FREEDELIVERY</strong>.
          </p>

          {/* Minimalist Code Voucher Card */}
          <div className="flex items-center justify-between rounded-xl border border-[#ded5c7] bg-white p-4 shadow-2xs">
            <div className="text-left">
              <span className="block text-[9px] uppercase font-bold tracking-[0.2em] text-[#8a4d2b]">
                Promotional Code
              </span>
              <span className="font-mono text-sm font-bold tracking-wider text-[#1c1815]">
                FREEDELIVERY
              </span>
            </div>
            <span className="rounded border border-[#ded5c7] bg-[#faf8f5] px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#1c1815]">
              $50.00 Credit
            </span>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-1">
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-[#1c1815] px-4 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#3d2417] active:scale-98 transition-all cursor-pointer shadow-sm"
            >
              {applied ? "Promotional Code Applied" : "Activate Complimentary Delivery"}
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              className="text-[11px] font-medium text-[#8a7b70] hover:text-[#1c1815] transition-colors cursor-pointer"
            >
              Continue exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

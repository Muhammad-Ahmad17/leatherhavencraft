"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export function DeliveryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const { applyCoupon, couponCode } = useCart();

  useEffect(() => {
    // Only display if user has not explicitly dismissed it and coupon is not already applied
    const dismissed = localStorage.getItem("lhc_delivery_modal_closed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleManualClose = () => {
    localStorage.setItem("lhc_delivery_modal_closed", "true");
    setIsOpen(false);
  };

  const handleApplyCoupon = () => {
    applyCoupon("FREEDELIVERY");
    setApplied(true);
    localStorage.setItem("lhc_delivery_modal_closed", "true");
    setTimeout(() => {
      setIsOpen(false);
    }, 900);
  };

  if (!isOpen || couponCode === "FREEDELIVERY") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delivery-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300 select-none"
    >
      {/* Modal Container: Solid Pure White Background with Warm Leather Brown Typography */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[#ded5c7] bg-white shadow-2xl animate-in zoom-in-95 duration-300 text-center">
        {/* Prominent Manual Close Button — User Must Click to Dismiss */}
        <button
          type="button"
          onClick={handleManualClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f4efe8] text-[#5a4332] hover:bg-[#8a4d2b] hover:text-white transition-all cursor-pointer font-bold text-sm"
          aria-label="Close delivery notice"
        >
          ✕
        </button>

        {/* Minimalist Header with Leather Brown Theme */}
        <div className="bg-white border-b border-[#f0ebe3] pt-8 pb-5 px-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b] block">
            International Orders · Worldwide Delivery
          </span>
          <h2
            id="delivery-modal-title"
            className="mt-2 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#221b16]"
          >
            Claim Free Express Delivery
          </h2>
        </div>

        {/* Content Body */}
        <div className="p-7 sm:p-9 space-y-6 bg-white text-center">
          <p className="text-xs sm:text-sm text-[#5a4332] leading-relaxed max-w-md mx-auto">
            We ship handcrafted bespoke leather jackets all around the world. Apply promotional voucher code{" "}
            <strong className="font-mono text-sm font-bold text-[#8a4d2b]">FREEDELIVERY</strong> to eliminate the $50 express international air courier fee.
          </p>

          {/* Clean Voucher Code Card */}
          <div className="flex items-center justify-between rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-4 shadow-2xs max-w-sm mx-auto">
            <div className="text-left">
              <span className="block text-[9px] uppercase font-bold tracking-[0.2em] text-[#8a4d2b]">
                Voucher Code
              </span>
              <span className="font-mono text-base font-bold tracking-wider text-[#221b16]">
                FREEDELIVERY
              </span>
            </div>
            <span className="rounded-md border border-[#8a4d2b]/20 bg-white px-3 py-1.5 text-xs font-bold tracking-wider text-[#8a4d2b]">
              -$50.00 Off
            </span>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2 max-w-sm mx-auto">
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-[#8a4d2b] px-4 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#6e3b1f] active:scale-98 transition-all cursor-pointer shadow-sm"
            >
              {applied ? "Code Activated in Bag" : "Apply Free Delivery Code (-$50)"}
            </button>
            <button
              type="button"
              onClick={handleManualClose}
              className="text-[11px] font-medium text-[#8a7b70] hover:text-[#221b16] transition-colors cursor-pointer underline underline-offset-4"
            >
              Close and continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

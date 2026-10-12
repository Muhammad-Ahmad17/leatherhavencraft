"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export function SideDeliveryBadge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [applied, setApplied] = useState(false);
  const { applyCoupon, couponCode } = useCart();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("lhc_side_delivery_badge_dismissed");
    if (!dismissed) {
      // Appear smoothly after 2.5 seconds on the bottom-left side
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("lhc_side_delivery_badge_dismissed", "true");
  };

  const handleActivate = () => {
    applyCoupon("FREEDELIVERY");
    setApplied(true);
    setTimeout(() => {
      setIsDismissed(true);
      sessionStorage.setItem("lhc_side_delivery_badge_dismissed", "true");
    }, 1200);
  };

  if (!isVisible || isDismissed || couponCode === "FREEDELIVERY") return null;

  return (
    <aside
      aria-label="International & Custom Orders Delivery Notice"
      className="fixed bottom-6 left-5 z-40 print:hidden animate-in fade-in slide-in-from-left-4 duration-500 max-w-[280px] sm:max-w-[310px]"
    >
      {/* Clean White Background Card with Warm Leather-Brown Theme */}
      <div className="overflow-hidden rounded-2xl border border-[#ded5c7] bg-white shadow-xl transition-all">
        {/* Top Header in Pure White with Brown Typography */}
        <div className="flex items-center justify-between border-b border-[#f0ebe3] bg-white px-4 py-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
            International &amp; Custom Orders
          </span>
          <button
            type="button"
            onClick={handleDismiss}
            className="text-[10px] font-bold uppercase tracking-wider text-[#a89a8c] hover:text-[#8a4d2b] transition-colors p-0.5 cursor-pointer"
            aria-label="Dismiss notice"
          >
            Dismiss
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-3 text-left bg-white">
          <p className="text-[11px] leading-relaxed text-[#5a4332]">
            Custom tailored orders shipped worldwide. Use code{" "}
            <strong className="font-mono text-xs font-bold text-[#8a4d2b]">FREEDELIVERY</strong> for complimentary express air shipping (-$50).
          </p>

          <button
            type="button"
            onClick={handleActivate}
            className="flex h-8.5 w-full items-center justify-center rounded-lg bg-[#8a4d2b] px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white hover:bg-[#6e3b1f] active:scale-98 transition-all cursor-pointer shadow-xs"
          >
            {applied ? "Code Activated in Bag" : "Apply Free Delivery Code"}
          </button>
        </div>
      </div>
    </aside>
  );
}

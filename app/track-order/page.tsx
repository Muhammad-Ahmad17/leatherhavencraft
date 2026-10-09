"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

interface OrderItem {
  name: string;
  slug: string;
  price: number;
  size: string;
  color?: string;
  image?: string;
  quantity: number;
}

interface StatusHistoryItem {
  status: string;
  note: string;
  timestamp: string;
}

interface TrackedOrder {
  orderNumber: string;
  clientName: string;
  orderStatus: string;
  courier?: string;
  trackingNumber?: string;
  trackingUrl?: string;
  items: OrderItem[];
  totalAmount: number;
  currency: string;
  shippingAddress?: {
    city?: string;
    country?: string;
  };
  statusHistory: StatusHistoryItem[];
  createdAt: string;
}

const STAGES = [
  { id: "order_placed", label: "Order Confirmed", desc: "Production ticket issued" },
  { id: "leather_selected", label: "Hide Selected", desc: "Full-grain hide inspected" },
  { id: "crafting_in_progress", label: "Artisan Tailoring", desc: "Bench assembly & stitching" },
  { id: "quality_inspection", label: "Quality Audit", desc: "Hardware & fit verification" },
  { id: "dispatched", label: "Dispatched", desc: "In transit via Air Express" },
];

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("order") || "";

  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<TrackedOrder | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://api.leatherhavencraft.com"
      : "http://localhost:5000");

  const handleSearch = useCallback(async (searchReference?: string) => {
    const term = (searchReference || query).trim();
    if (!term) return;

    setLoading(true);
    setErrorMsg("");
    setOrder(null);

    try {
      const res = await fetch(`${backendUrl}/api/orders/track/${encodeURIComponent(term)}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "No order found matching this reference.");
      }
      setOrder(data.data);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Tracking lookup failed.");
    } finally {
      setLoading(false);
    }
  }, [backendUrl, query]);

  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery, handleSearch]);

  const getStageIndex = (status: string) => {
    switch (status) {
      case "order_placed":
        return 0;
      case "leather_selected":
        return 1;
      case "crafting_in_progress":
        return 2;
      case "quality_inspection":
        return 3;
      case "dispatched":
      case "in_transit":
      case "delivered":
        return 4;
      default:
        return 0;
    }
  };

  const currentStageIdx = order ? getStageIndex(order.orderStatus) : 0;

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2a1810] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#706456]">
          <Link href="/" className="hover:text-[#2a1810]">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#2a1810]">Order Tracking</span>
        </nav>

        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Two-Stage Workshop Tracking
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2a1810]">
            Track Your Bespoke Order
          </h1>
          <p className="text-xs sm:text-sm text-[#6b5c51] max-w-xl mx-auto leading-relaxed">
            Follow your piece from hide selection and bench assembly through international express delivery.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="mx-auto max-w-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex gap-2 rounded-2xl border border-[#ded5c7] bg-white p-2 shadow-sm"
          >
            <input
              type="text"
              required
              placeholder="Enter Order ID (e.g. LHC-74921) or Tracking Number..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 text-xs sm:text-sm text-[#1e1915] placeholder-[#9a8e80] focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[#2a1810] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] transition-colors shadow-xs cursor-pointer disabled:opacity-50"
            >
              {loading ? "Locating..." : "Track Order"}
            </button>
          </form>

          {errorMsg && (
            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800 text-center">
              {errorMsg}
            </div>
          )}
        </div>

        {/* Live Order Status Display */}
        {order && (
          <div className="rounded-2xl border border-[#ded5c7] bg-white p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in duration-300">
            {/* Top Order Overview Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#f0ebe3] pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold text-[#2a1810]">
                    {order.orderNumber}
                  </span>
                  <span className="rounded-full bg-[#faf7f2] border border-[#ded5c7] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8a4d2b]">
                    {order.orderStatus.replace(/_/g, " ")}
                  </span>
                </div>
                <p className="text-xs text-[#706456]">
                  Client: <strong className="text-[#2a1810] font-semibold">{order.clientName}</strong> · Ordered on{" "}
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* External Courier Air Freight Button */}
              {order.trackingUrl ? (
                <a
                  href={order.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#8a4d2b] px-5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#733f22] transition-colors shadow-xs cursor-pointer"
                >
                  <span>Track on {order.courier || "Courier"}</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ) : null}
            </div>

            {/* Stage Progress Timeline */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Workshop Production Milestones
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                {STAGES.map((st, idx) => {
                  const isDone = idx <= currentStageIdx;
                  const isCurrent = idx === currentStageIdx;

                  return (
                    <div
                      key={st.id}
                      className={`rounded-xl border p-3.5 transition-all ${
                        isCurrent
                          ? "border-[#8a4d2b] bg-[#faf6f0] shadow-xs"
                          : isDone
                          ? "border-[#ded5c7] bg-white"
                          : "border-[#ede7df] bg-[#faf8f5]/60 opacity-60"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                            isDone ? "bg-[#2a1810] text-white" : "bg-[#ded5c7] text-[#706456]"
                          }`}
                        >
                          {isDone ? "✓" : idx + 1}
                        </span>
                        <strong className="text-xs font-bold text-[#2a1810]">{st.label}</strong>
                      </div>
                      <p className="mt-1.5 text-[11px] text-[#706456] leading-tight">{st.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Courier Air Express Details Card */}
            {order.courier && (
              <div className="rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                    Air Freight Dispatch Details
                  </span>
                  <div className="text-sm font-bold text-[#2a1810]">
                    Carrier: {order.courier}
                  </div>
                  {order.trackingNumber && (
                    <div className="text-xs text-[#706456]">
                      Airway Bill (AWB): <strong className="font-mono text-[#2a1810]">{order.trackingNumber}</strong>
                    </div>
                  )}
                </div>

                {order.trackingUrl && (
                  <a
                    href={order.trackingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#8a4d2b] hover:text-[#2a1810] underline underline-offset-4"
                  >
                    Open Live Courier Hub &rarr;
                  </a>
                )}
              </div>
            )}

            {/* Ordered Pieces Overview */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                Pieces in this Order ({order.items.length})
              </h3>
              <div className="divide-y divide-[#ede7df] border-t border-[#ede7df]">
                {order.items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3.5 text-xs">
                    <div>
                      <strong className="text-sm font-serif font-bold text-[#2a1810] block">{it.name}</strong>
                      <span className="text-[#706456]">
                        Size: {it.size} {it.color ? `· Color: ${it.color}` : ""} · Qty: {it.quantity}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-[#2a1810]">{formatPrice(it.price * it.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workshop Status Activity Log */}
            {order.statusHistory && order.statusHistory.length > 0 && (
              <div className="space-y-3 pt-2 border-t border-[#f0ebe3]">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4d2b]">
                  Atelier Production Log
                </h3>
                <div className="space-y-2">
                  {order.statusHistory.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <span className="h-2 w-2 rounded-full bg-[#8a4d2b] mt-1 shrink-0" />
                      <div>
                        <span className="text-[#706456] text-[11px] block">
                          {new Date(h.timestamp).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        <p className="text-[#2a1810] font-medium">{h.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] flex items-center justify-center bg-[#faf7f2]">
          <p className="text-xs uppercase tracking-widest text-[#706456]">Loading tracking portal...</p>
        </main>
      }
    >
      <TrackOrderContent />
    </Suspense>
  );
}

"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`${backendUrl}/api/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "footer" }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing to Leather Haven Craft updates.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect to the server. Please check your connection.");
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={status === "loading"}
          aria-label="Email address for newsletter"
          className="h-11 flex-1 rounded border border-white/20 bg-white/10 px-4 text-xs text-white placeholder-white/45 transition-colors focus:border-[#d4af37] focus:bg-white/15 focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded bg-[#d4af37] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#14100c] transition-all hover:bg-[#e2bd44] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
        >
          {status === "loading" ? "Subscribing..." : "Join Gazette"}
        </button>
      </form>

      <div className="mt-2.5 flex items-center justify-between text-[11px] text-white/50">
        <span>Confidential · Single-click unsubscribe</span>
        <span>Archive &amp; seasonal dispatches</span>
      </div>

      {message && (
        <p
          className={`mt-2.5 text-xs font-medium ${
            status === "success" ? "text-[#d4af37]" : "text-rose-400"
          }`}
        >
          {status === "success" ? "✓ " : "✕ "}
          {message}
        </p>
      )}
    </div>
  );
}

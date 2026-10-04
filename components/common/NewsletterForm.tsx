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
          className="h-11 flex-1 rounded-md border border-[#d6cdbf] bg-white px-4 text-xs text-[#221b16] placeholder-[#8a7b70] shadow-2xs transition-colors focus:border-[#8a4d2b] focus:outline-none focus:ring-1 focus:ring-[#8a4d2b] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-[#2a1810] px-6 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#3d2417] active:scale-[0.99] disabled:opacity-50 cursor-pointer shadow-2xs"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#6b5c51]">
        <span>No spam · Unsubscribe anytime</span>
        <span>New arrivals &amp; collection updates</span>
      </div>

      {message && (
        <p
          className={`mt-2.5 text-xs font-medium ${
            status === "success" ? "text-emerald-700" : "text-rose-600"
          }`}
        >
          {status === "success" ? "✓ " : "✕ "}
          {message}
        </p>
      )}
    </div>
  );
}

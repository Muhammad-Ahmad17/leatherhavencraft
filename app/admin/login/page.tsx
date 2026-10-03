"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAdminToken, setAdminSession, getBackendUrl } from "@/lib/adminAuth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (getAdminToken()) {
      router.replace("/admin");
    }
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const backendUrl = getBackendUrl();
      const res = await fetch(`${backendUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invalid authentication credentials.");
      }

      setAdminSession(data.token, data.user);
      router.replace("/admin");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unable to connect to authentication server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#f8f6f2] px-4 py-12 text-[#1e1915]">
      {/* Background warm radial aura */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(138, 77, 43, 0.08) 0%, rgba(248, 246, 242, 0) 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand Logo */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Leather Haven Craft"
              className="mx-auto h-16 w-auto max-w-[240px] object-contain drop-shadow-sm"
            />
          </Link>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#7d7162]">
            Executive Atelier Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="overflow-hidden rounded-2xl border border-[#e5dfd4] bg-white p-8 shadow-xl">
          <div className="mb-6 border-b border-[#eee7de] pb-4">
            <h2 className="text-base font-semibold tracking-wide text-[#1e1915]">
              Authenticate Session
            </h2>
            <p className="mt-1 text-xs text-[#706456]">
              Enter privileged credentials to access the catalog management system.
            </p>
          </div>

          {error && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-800">
              <svg className="h-4 w-4 shrink-0 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b6052]">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@leatherhavencraft.com"
                className="mt-2 h-11 w-full rounded-lg border border-[#d8d0c4] bg-[#faf8f5] px-3.5 text-sm text-[#1e1915] placeholder-[#9c9183] transition-colors focus:border-[#8a4d2b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8a4d2b]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b6052]">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[11px] font-medium text-[#786c5e] hover:text-[#8a4d2b]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="mt-2 h-11 w-full rounded-lg border border-[#d8d0c4] bg-[#faf8f5] px-3.5 text-sm text-[#1e1915] placeholder-[#9c9183] transition-colors focus:border-[#8a4d2b] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8a4d2b]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex h-11 w-full items-center justify-center rounded-lg border border-[#8a4d2b]/60 bg-gradient-to-r from-[#8a4d2b] to-[#a35c34] px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:brightness-105 active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Authenticating...
                </span>
              ) : (
                "Enter Secure Dashboard"
              )}
            </button>
          </form>
        </div>

        {/* Back to storefront link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs font-medium text-[#706456] transition-colors hover:text-[#1e1915]"
          >
            ← Return to public storefront
          </Link>
        </div>
      </div>
    </div>
  );
}

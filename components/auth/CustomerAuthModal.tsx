"use client";

import React, { useState } from "react";
import { useCustomerAuth } from "@/context/CustomerAuthContext";
import Link from "next/link";

export function CustomerAuthModal() {
  const { isAuthModalOpen, authModalMode, closeAuthModal, openLogin, openRegister, login, register } =
    useCustomerAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAuthModalOpen) return null;

  const isLogin = authModalMode === "login";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      if (isLogin) {
        const res = await login(email, password);
        if (!res.success) {
          setErrorMsg(res.message || "Failed to log in.");
        }
      } else {
        const res = await register(name, email, password, phone);
        if (!res.success) {
          setErrorMsg(res.message || "Failed to create account.");
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a110c]/70 p-4 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-2xl border border-[#ded5c7] bg-[#fbf9f6] p-6 sm:p-8 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#ded5c7] pb-3 mb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
              Atelier Client Portal
            </span>
            <h3 className="font-serif text-xl font-bold text-[#2a1810]">
              {isLogin ? "Sign In to Your Account" : "Create Atelier Account"}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeAuthModal}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-xs font-bold text-[#6b5c51] hover:text-[#2a1810] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="flex rounded-lg border border-[#ded5c7] bg-[#faf8f5] p-1 mb-5">
          <button
            type="button"
            onClick={() => {
              setErrorMsg("");
              openLogin();
            }}
            className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-all ${
              isLogin ? "bg-[#2a1810] text-white shadow-xs" : "text-[#706456] hover:text-[#2a1810]"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setErrorMsg("");
              openRegister();
            }}
            className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-all ${
              !isLogin ? "bg-[#2a1810] text-white shadow-xs" : "text-[#706456] hover:text-[#2a1810]"
            }`}
          >
            New Client
          </button>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="mb-4 rounded-lg border border-rose-300 bg-rose-50 p-2.5 text-xs text-rose-800">
            {errorMsg}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {!isLogin && (
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Arthur Sterling"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="e.g. client@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
              Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                Contact Phone (Optional)
              </label>
              <input
                type="tel"
                placeholder="e.g. +1 (555) 019-2834"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
              />
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 rounded-lg bg-[#2a1810] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3d2417] active:bg-[#1a0e08] transition-colors shadow-xs cursor-pointer disabled:opacity-50"
            >
              {isSubmitting
                ? isLogin
                  ? "Signing in..."
                  : "Creating account..."
                : isLogin
                ? "Sign In to Atelier"
                : "Register Account"}
            </button>
          </div>
        </form>

        <div className="mt-5 border-t border-[#ded5c7] pt-3 text-center text-[11px] text-[#706456]">
          Looking for order shipment updates?{" "}
          <Link
            href="/track-order"
            onClick={closeAuthModal}
            className="font-bold text-[#8a4d2b] hover:text-[#2a1810] underline underline-offset-2"
          >
            Track an Order &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

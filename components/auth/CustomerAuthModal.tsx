"use client";

import React, { useState } from "react";
import { useCustomerAuth } from "@/context/CustomerAuthContext";
import Link from "next/link";

export function CustomerAuthModal() {
  const {
    isAuthModalOpen,
    authModalMode,
    closeAuthModal,
    openLogin,
    openRegister,
    openForgotPassword,
    openResetPassword,
    login,
    register,
    verifyEmail,
    resendCode,
    forgotPassword,
    resetPassword,
  } = useCustomerAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [hpWebsite, setHpWebsite] = useState(""); // Honeypot bot trap
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email verification state
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [isResending, setIsResending] = useState(false);

  if (!isAuthModalOpen) return null;

  const isLogin = authModalMode === "login";
  const isRegister = authModalMode === "register";
  const isForgot = authModalMode === "forgot";
  const isReset = authModalMode === "reset";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setInfoMsg("");
    setIsSubmitting(true);

    try {
      if (isLogin) {
        const res = await login(email, password);
        if (!res.success) {
          setErrorMsg(res.message || "Failed to log in.");
        }
      } else if (isRegister) {
        const res = await register(name, email, password, phone, hpWebsite);
        if (!res.success) {
          setErrorMsg(res.message || "Failed to create account.");
        } else if (res.requiresVerification) {
          setIsVerifying(true);
          setInfoMsg("A 6-digit confirmation code has been dispatched to your email address.");
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!verificationCode || verificationCode.trim().length < 6) {
      setErrorMsg("Please enter the complete 6-digit verification code.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await verifyEmail(email, verificationCode.trim());
      if (!res.success) {
        setErrorMsg(res.message || "Invalid or expired verification code.");
      } else {
        setIsVerifying(false);
        setVerificationCode("");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResendCode() {
    setErrorMsg("");
    setIsResending(true);
    try {
      const res = await resendCode(email);
      if (res.success) {
        setInfoMsg(res.message || "A new 6-digit verification code has been dispatched.");
      } else {
        setErrorMsg(res.message || "Failed to dispatch verification code.");
      }
    } finally {
      setIsResending(false);
    }
  }

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.trim()) {
      setErrorMsg("Please provide your account email address.");
      return;
    }

    setErrorMsg("");
    setInfoMsg("");
    setIsSubmitting(true);

    try {
      const res = await forgotPassword(email.trim(), hpWebsite);
      if (!res.success) {
        setErrorMsg(res.message || "Failed to initiate password reset.");
      } else {
        setInfoMsg(res.message || "A 6-digit reset code has been dispatched to your email.");
        openResetPassword();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault();
    if (!resetCode || resetCode.trim().length < 6) {
      setErrorMsg("Please enter the 6-digit password reset code.");
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setErrorMsg("New password must be at least 6 characters long.");
      return;
    }

    setErrorMsg("");
    setInfoMsg("");
    setIsSubmitting(true);

    try {
      const res = await resetPassword(email.trim(), resetCode.trim(), newPassword);
      if (!res.success) {
        setErrorMsg(res.message || "Failed to reset password.");
      } else {
        setInfoMsg("Password updated successfully. You are now signed in.");
        setTimeout(() => {
          closeAuthModal();
        }, 1500);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    setIsVerifying(false);
    setVerificationCode("");
    setResetCode("");
    setNewPassword("");
    setErrorMsg("");
    setInfoMsg("");
    setHpWebsite("");
    closeAuthModal();
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
              {isVerifying
                ? "Verify Email Address"
                : isForgot
                ? "Reset Your Password"
                : isReset
                ? "Create New Password"
                : isLogin
                ? "Sign In to Your Account"
                : "Create Atelier Account"}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-xs font-bold text-[#6b5c51] hover:text-[#2a1810] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Toggle (Only shown on Login / Register views) */}
        {!isVerifying && !isForgot && !isReset && (
          <div className="flex rounded-lg border border-[#ded5c7] bg-[#faf8f5] p-1 mb-5">
            <button
              type="button"
              onClick={() => {
                setErrorMsg("");
                setInfoMsg("");
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
                setInfoMsg("");
                openRegister();
              }}
              className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-all ${
                !isLogin ? "bg-[#2a1810] text-white shadow-xs" : "text-[#706456] hover:text-[#2a1810]"
              }`}
            >
              New Client
            </button>
          </div>
        )}

        {/* Info Notification */}
        {infoMsg && (
          <div className="mb-4 rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 text-xs text-emerald-800">
            {infoMsg}
          </div>
        )}

        {/* Error Notification */}
        {errorMsg && (
          <div className="mb-4 rounded-lg border border-rose-300 bg-rose-50 p-2.5 text-xs text-rose-800">
            {errorMsg}
          </div>
        )}

        {/* Invisible Honeypot Field (Bot Trap) */}
        <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
          <label htmlFor="hp_website">Leave this field empty</label>
          <input
            id="hp_website"
            type="text"
            name="hp_website"
            tabIndex={-1}
            autoComplete="off"
            value={hpWebsite}
            onChange={(e) => setHpWebsite(e.target.value)}
          />
        </div>

        {/* Verification Form */}
        {isVerifying ? (
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="text-xs text-[#52453c] leading-relaxed">
              We dispatched an activation code to{" "}
              <strong className="text-[#1e1915]">{email}</strong>. Enter the 6-digit code to activate your account.
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                6-Digit Verification Code
              </label>
              <input
                type="text"
                required
                maxLength={6}
                autoFocus
                placeholder="000000"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ""))}
                className="mt-1 h-12 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-center text-xl font-bold tracking-[0.35em] text-[#2a1810] font-mono focus:border-[#8a4d2b] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || verificationCode.length < 6}
              className="w-full h-10 rounded-lg bg-[#2a1810] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3d2417] active:bg-[#1a0e08] transition-colors shadow-xs cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Verifying..." : "Verify & Activate Account"}
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-[#706456]">
              <button
                type="button"
                onClick={handleResendCode}
                disabled={isResending}
                className="font-semibold text-[#8a4d2b] hover:underline cursor-pointer disabled:opacity-50"
              >
                {isResending ? "Dispatching..." : "Resend Code"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsVerifying(false);
                  setVerificationCode("");
                }}
                className="text-[#706456] hover:text-[#1e1915] cursor-pointer"
              >
                Change Email
              </button>
            </div>
          </form>
        ) : isForgot ? (
          /* Forgot Password View */
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="text-xs text-[#52453c] leading-relaxed">
              Enter your email address and we will send a 6-digit security code to reset your atelier password.
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                Email Address
              </label>
              <input
                type="email"
                required
                autoFocus
                placeholder="e.g. client@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full h-10 rounded-lg bg-[#2a1810] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3d2417] active:bg-[#1a0e08] transition-colors shadow-xs cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Dispatching Code..." : "Send Password Reset Code"}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setErrorMsg("");
                  setInfoMsg("");
                  openLogin();
                }}
                className="text-xs text-[#706456] hover:text-[#1e1915] cursor-pointer"
              >
                &larr; Back to Sign In
              </button>
            </div>
          </form>
        ) : isReset ? (
          /* Reset Password View */
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="text-xs text-[#52453c] leading-relaxed">
              Enter the 6-digit code sent to <strong className="text-[#1e1915]">{email}</strong> along with your new password.
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                6-Digit Reset Code
              </label>
              <input
                type="text"
                required
                maxLength={6}
                autoFocus
                placeholder="000000"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value.replace(/\D/g, ""))}
                className="mt-1 h-12 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-center text-xl font-bold tracking-[0.35em] text-[#2a1810] font-mono focus:border-[#8a4d2b] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                New Password (Minimum 6 Characters)
              </label>
              <input
                type="password"
                required
                minLength={6}
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || resetCode.length < 6 || newPassword.length < 6}
              className="w-full h-10 rounded-lg bg-[#2a1810] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3d2417] active:bg-[#1a0e08] transition-colors shadow-xs cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Updating Password..." : "Update Password & Sign In"}
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-[#706456]">
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={isSubmitting}
                className="font-semibold text-[#8a4d2b] hover:underline cursor-pointer disabled:opacity-50"
              >
                Resend Code
              </button>

              <button
                type="button"
                onClick={() => {
                  setErrorMsg("");
                  setInfoMsg("");
                  openLogin();
                }}
                className="text-[#706456] hover:text-[#1e1915] cursor-pointer"
              >
                &larr; Back to Sign In
              </button>
            </div>
          </form>
        ) : (
          /* Standard Sign In / Register Form */
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
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                  Password
                </label>
                {isLogin && (
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMsg("");
                      setInfoMsg("");
                      openForgotPassword();
                    }}
                    className="text-[11px] text-[#8a4d2b] hover:underline font-medium cursor-pointer"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
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
        )}

        <div className="mt-5 border-t border-[#ded5c7] pt-3 text-center text-[11px] text-[#706456]">
          Looking for order shipment updates?{" "}
          <Link
            href="/track-order"
            onClick={handleClose}
            className="font-bold text-[#8a4d2b] hover:text-[#2a1810] underline underline-offset-2"
          >
            Track an Order &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

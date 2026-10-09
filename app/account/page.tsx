"use client";

import React, { useState, useEffect } from "react";
import { useCustomerAuth, ShippingAddress } from "@/context/CustomerAuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CustomerAccountPage() {
  const { customer, isLoading, logout, updateProfile, openLogin } = useCustomerAuth();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"profile" | "shipping" | "orders">("profile");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState<ShippingAddress>({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    if (customer) {
      setName(customer.name || "");
      setPhone(customer.phone || "");
      setAddress({
        street: customer.shippingAddress?.street || "",
        city: customer.shippingAddress?.city || "",
        state: customer.shippingAddress?.state || "",
        postalCode: customer.shippingAddress?.postalCode || "",
        country: customer.shippingAddress?.country || "",
      });
    }
  }, [customer]);

  if (isLoading) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center bg-[#faf7f2] px-6 py-20 text-center">
        <div className="space-y-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#8a4d2b] border-t-transparent mx-auto" />
          <p className="text-xs uppercase tracking-widest text-[#706456]">Loading atelier portal...</p>
        </div>
      </main>
    );
  }

  if (!customer) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center bg-[#faf7f2] px-6 py-20 text-center">
        <div className="max-w-md rounded-2xl border border-[#ded5c7] bg-white p-8 shadow-sm space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
            Authentication Required
          </span>
          <h1 className="font-serif text-2xl font-bold text-[#2a1810]">
            Atelier Client Portal
          </h1>
          <p className="text-xs text-[#6b5c51] leading-relaxed">
            Please sign in to access your personal profile, saved shipping addresses, and live workshop tracking.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={openLogin}
              className="w-full h-11 rounded-lg bg-[#2a1810] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3d2417] transition-colors shadow-xs cursor-pointer"
            >
              Sign In to Atelier
            </button>
          </div>
        </div>
      </main>
    );
  }

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    setSaveLoading(true);
    setSuccessMessage("");
    const res = await updateProfile({ name, phone });
    setSaveLoading(false);
    if (res.success) {
      setIsEditingProfile(false);
      setSuccessMessage("Personal details updated successfully.");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  }

  async function handleSaveAddress(e: React.FormEvent) {
    e.preventDefault();
    setSaveLoading(true);
    setSuccessMessage("");
    const res = await updateProfile({ shippingAddress: address });
    setSaveLoading(false);
    if (res.success) {
      setIsEditingAddress(false);
      setSuccessMessage("Shipping address updated successfully.");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  }

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2a1810] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#706456]">
          <Link href="/" className="hover:text-[#2a1810]">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#2a1810]">Client Portal</span>
        </nav>

        {/* Header Profile Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-[#ded5c7] bg-white p-6 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
                Verified Collector
              </span>
              <span className="rounded-full bg-[#faf7f2] border border-[#ded5c7] px-2 py-0.5 text-[9px] font-semibold text-[#706456]">
                ID: #{customer._id.slice(-6).toUpperCase()}
              </span>
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#2a1810]">
              Welcome back, {customer.name}
            </h1>
            <p className="text-xs text-[#6b5c51]">{customer.email}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/track-order"
              className="h-10 rounded-lg border border-[#ded5c7] bg-[#faf8f5] px-4 text-xs font-semibold text-[#2a1810] flex items-center justify-center hover:border-[#8a4d2b] transition-colors"
            >
              Track an Order
            </Link>
            <button
              type="button"
              onClick={() => {
                logout();
                router.push("/");
              }}
              className="h-10 rounded-lg bg-[#2a1810] px-4 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] transition-colors cursor-pointer shadow-xs"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Success Alert Banner */}
        {successMessage && (
          <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-800">
            {successMessage}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#ded5c7] text-xs">
          {[
            { id: "profile", label: "Personal Details" },
            { id: "shipping", label: "Shipping Address" },
            { id: "orders", label: "Order History & Live Tracking" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`border-b-2 py-3 px-4 font-semibold transition-colors ${
                activeTab === tab.id
                  ? "border-[#8a4d2b] text-[#2a1810]"
                  : "border-transparent text-[#706456] hover:text-[#2a1810]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Personal Details */}
        {activeTab === "profile" && (
          <div className="rounded-2xl border border-[#ded5c7] bg-white p-6 shadow-xs max-w-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-[#f0ebe3] pb-3">
              <h2 className="font-serif text-lg font-bold text-[#2a1810]">Personal Profile</h2>
              {!isEditingProfile && (
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(true)}
                  className="text-xs font-semibold text-[#8a4d2b] hover:text-[#2a1810] underline"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {isEditingProfile ? (
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                    className="rounded-lg border border-[#ded5c7] px-4 py-2 text-xs font-semibold text-[#6b5c51]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saveLoading}
                    className="rounded-lg bg-[#2a1810] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417]"
                  >
                    {saveLoading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[11px] text-[#706456] block">Full Name</span>
                  <strong className="text-sm text-[#2a1810]">{customer.name}</strong>
                </div>
                <div>
                  <span className="text-[11px] text-[#706456] block">Email Address</span>
                  <strong className="text-sm text-[#2a1810]">{customer.email}</strong>
                </div>
                <div>
                  <span className="text-[11px] text-[#706456] block">Contact Phone</span>
                  <strong className="text-sm text-[#2a1810]">{customer.phone || "Not provided"}</strong>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Shipping Address */}
        {activeTab === "shipping" && (
          <div className="rounded-2xl border border-[#ded5c7] bg-white p-6 shadow-xs max-w-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-[#f0ebe3] pb-3">
              <h2 className="font-serif text-lg font-bold text-[#2a1810]">Saved Delivery Address</h2>
              {!isEditingAddress && (
                <button
                  type="button"
                  onClick={() => setIsEditingAddress(true)}
                  className="text-xs font-semibold text-[#8a4d2b] hover:text-[#2a1810] underline"
                >
                  Edit Address
                </button>
              )}
            </div>

            {isEditingAddress ? (
              <form onSubmit={handleSaveAddress} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Street Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 12 Savile Row"
                    value={address.street || ""}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. London"
                      value={address.city || ""}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                      State / Province
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Greater London"
                      value={address.state || ""}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                      Postal Code / ZIP
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. W1S 3PR"
                      value={address.postalCode || ""}
                      onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                      className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                      Country
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. United Kingdom"
                      value={address.country || ""}
                      onChange={(e) => setAddress({ ...address, country: e.target.value })}
                      className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingAddress(false)}
                    className="rounded-lg border border-[#ded5c7] px-4 py-2 text-xs font-semibold text-[#6b5c51]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saveLoading}
                    className="rounded-lg bg-[#2a1810] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417]"
                  >
                    {saveLoading ? "Saving..." : "Save Address"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-xs space-y-1">
                {address.street ? (
                  <>
                    <p className="font-semibold text-sm text-[#2a1810]">{address.street}</p>
                    <p className="text-[#6b5c51]">{[address.city, address.state, address.postalCode].filter(Boolean).join(", ")}</p>
                    <p className="font-semibold text-[#2a1810]">{address.country}</p>
                  </>
                ) : (
                  <p className="text-[#706456] italic">No shipping address saved yet. Click Edit Address to provide one for seamless bespoke dispatch.</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Order History & Live Tracking */}
        {activeTab === "orders" && (
          <div className="space-y-6 max-w-2xl">
            <div className="rounded-2xl border border-[#ded5c7] bg-white p-6 shadow-xs space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
                Workshop Production &amp; Delivery
              </span>
              <h2 className="font-serif text-lg font-bold text-[#2a1810]">
                Live Door-to-Door Shipment Tracking
              </h2>
              <p className="text-xs text-[#6b5c51] leading-relaxed">
                Every bespoke piece is crafted by hand in our workshop before dispatch via international air express. Have an Order ID or Courier Tracking Number?
              </p>
              <Link
                href="/track-order"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2a1810] px-5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] transition-colors shadow-xs"
              >
                Open Live Tracking Portal &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

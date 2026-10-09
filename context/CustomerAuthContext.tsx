"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export interface ShippingAddress {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface Customer {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  shippingAddress?: ShippingAddress;
  createdAt?: string;
}

interface CustomerAuthContextType {
  customer: Customer | null;
  token: string | null;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  authModalMode: "login" | "register";
  openLogin: () => void;
  openRegister: () => void;
  closeAuthModal: () => void;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<{ success: boolean; message?: string }>;
  updateProfile: (data: { name?: string; phone?: string; shippingAddress?: ShippingAddress }) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const CustomerAuthContext = createContext<CustomerAuthContextType | undefined>(undefined);

const TOKEN_KEY = "lhc_customer_token_v1";

export function CustomerAuthProvider({ children }: { children: React.ReactNode }) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "register">("login");

  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://api.leatherhavencraft.com"
      : "http://localhost:5000");

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setCustomer(null);
  }, []);

  // Hydrate user profile on initial mount
  useEffect(() => {
    async function loadCustomer() {
      try {
        const storedToken = localStorage.getItem(TOKEN_KEY);
        if (!storedToken) {
          setIsLoading(false);
          return;
        }

        setToken(storedToken);
        const res = await fetch(`${backendUrl}/api/customer/me`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (res.ok) {
          const json = await res.json();
          if (json.success && json.customer) {
            setCustomer(json.customer);
          } else {
            logout();
          }
        } else {
          logout();
        }
      } catch (err) {
        console.error("Failed to hydrate customer session", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadCustomer();
  }, [backendUrl, logout]);

  const openLogin = () => {
    setAuthModalMode("login");
    setIsAuthModalOpen(true);
  };

  const openRegister = () => {
    setAuthModalMode("register");
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${backendUrl}/api/customer/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, message: data.message || "Invalid credentials" };
      }

      localStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setCustomer(data.customer);
      setIsAuthModalOpen(false);
      return { success: true };
    } catch (err: unknown) {
      return {
        success: false,
        message: err instanceof Error ? err.message : "Network error occurred",
      };
    }
  };

  const register = async (name: string, email: string, password: string, phone?: string) => {
    try {
      const res = await fetch(`${backendUrl}/api/customer/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, phone }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, message: data.message || "Registration failed" };
      }

      localStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setCustomer(data.customer);
      setIsAuthModalOpen(false);
      return { success: true };
    } catch (err: unknown) {
      return {
        success: false,
        message: err instanceof Error ? err.message : "Network error occurred",
      };
    }
  };

  const updateProfile = async (data: { name?: string; phone?: string; shippingAddress?: ShippingAddress }) => {
    if (!token) return { success: false, message: "Not authenticated" };
    try {
      const res = await fetch(`${backendUrl}/api/customer/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        return { success: false, message: json.message || "Update failed" };
      }

      setCustomer(json.customer);
      return { success: true };
    } catch (err: unknown) {
      return {
        success: false,
        message: err instanceof Error ? err.message : "Network error occurred",
      };
    }
  };

  return (
    <CustomerAuthContext.Provider
      value={{
        customer,
        token,
        isLoading,
        isAuthModalOpen,
        authModalMode,
        openLogin,
        openRegister,
        closeAuthModal,
        login,
        register,
        updateProfile,
        logout,
      }}
    >
      {children}
    </CustomerAuthContext.Provider>
  );
}

export function useCustomerAuth() {
  const ctx = useContext(CustomerAuthContext);
  if (!ctx) {
    throw new Error("useCustomerAuth must be used within a CustomerAuthProvider");
  }
  return ctx;
}

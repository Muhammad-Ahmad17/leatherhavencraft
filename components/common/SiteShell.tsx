"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CustomerAuthProvider } from "@/context/CustomerAuthContext";
import { CustomerAuthModal } from "@/components/auth/CustomerAuthModal";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isProductDetail = pathname?.startsWith("/products/") && pathname !== "/products";

  if (isAdmin) {
    return <main className="min-h-screen bg-[#11100f] text-[#f2eee9]">{children}</main>;
  }

  return (
    <CustomerAuthProvider>
      <CartProvider>
        <Header />
        {children}
        {!isProductDetail && <Footer />}
        <CartDrawer />
        <CustomerAuthModal />
      </CartProvider>
    </CustomerAuthProvider>
  );
}

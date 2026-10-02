import { SITE_NAME } from "@/lib/constants";

/** E.164 digits only, no + (e.g. 447700900000). Set NEXT_PUBLIC_WHATSAPP_NUMBER in production. */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "orders@leatherhavencraft.com";

export function buildWhatsAppUrl(text: string): string {
  const encoded = encodeURIComponent(text);
  if (!WHATSAPP_NUMBER) return `https://wa.me/?text=${encoded}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildOrderMessage(options: {
  productName: string;
  priceLabel: string;
  size: string;
  productUrl: string;
  brandName?: string;
}): string {
  const lines = [
    `Hi ${SITE_NAME},`,
    "",
    "I'd like to order:",
    `• ${options.productName}${options.brandName ? ` (${options.brandName})` : ""}`,
    `• Size: ${options.size}`,
    `• Price: ${options.priceLabel}`,
    `• Link: ${options.productUrl}`,
  ];
  return lines.join("\n");
}

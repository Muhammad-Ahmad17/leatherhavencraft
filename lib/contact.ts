import { SITE_NAME } from "@/lib/constants";

/** E.164 digits only, no + (e.g. 923338704371). Set NEXT_PUBLIC_WHATSAPP_NUMBER in production. */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "923338704371";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@leatherhavencraft.com";

export function buildWhatsAppUrl(text: string): string {
  const encoded = encodeURIComponent(text);
  const number = WHATSAPP_NUMBER || "923338704371";
  return `https://wa.me/${number}?text=${encoded}`;
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
    "I would like to order:",
    `• ${options.productName}${options.brandName ? ` (${options.brandName})` : ""}`,
    `• Size: ${options.size}`,
    `• Price: ${options.priceLabel}`,
    `• Link: ${options.productUrl}`,
  ];
  return lines.join("\n");
}

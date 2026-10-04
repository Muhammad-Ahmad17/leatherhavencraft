import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import { SiteShell } from "@/components/common/SiteShell";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import "./globals.css";


const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.leatherhavencraft.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "58x58" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.leatherhavencraft.com/#organization",
      name: SITE_NAME,
      url: "https://www.leatherhavencraft.com",
      logo: "https://www.leatherhavencraft.com/logo.png",
      email: "support@leatherhavencraft.com",
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": "https://www.leatherhavencraft.com/#website",
      url: "https://www.leatherhavencraft.com",
      name: SITE_NAME,
      publisher: {
        "@id": "https://www.leatherhavencraft.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

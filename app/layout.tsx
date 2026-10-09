import localFont from "next/font/local";
import type { Metadata } from "next";
import { SiteShell } from "@/components/common/SiteShell";
import { SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/constants";
import "./globals.css";

const fontSans = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "200 800",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Leather Haven Craft",
    "Leather Haven",
    "Leather Haven Craft Atelier",
    "leather jackets",
    "handcrafted leather jackets",
    "vintage leather jacket recreations",
    "custom leather jackets",
    "bespoke leather outerwear",
    "Avirex leather jacket",
    "Schott NYC leather jacket",
    "Pelle Pelle leather jacket",
    "Harley-Davidson leather jacket",
    "B-3 bomber jacket",
    "shearling leather jacket",
  ],
  authors: [{ name: "Leather Haven Craft", url: "https://www.leatherhavencraft.com" }],
  creator: "Leather Haven Craft",
  publisher: "Leather Haven Craft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
    images: ["/banners/home-desktop.jpg"],
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "CVVLIna9Pm_qo5LzeCVFOQ6c6YcM-1ZIlE0BMDmk-Ds",
  },
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ClothingStore", "OnlineStore"],
      "@id": "https://www.leatherhavencraft.com/#organization",
      name: SITE_NAME,
      alternateName: ["LeatherHavenCraft", "Leather Haven Craft Atelier", "LHC Outerwear"],
      url: "https://www.leatherhavencraft.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.leatherhavencraft.com/#logo",
        url: "https://www.leatherhavencraft.com/logo.png",
        contentUrl: "https://www.leatherhavencraft.com/logo.png",
        caption: "Leather Haven Craft Logo",
        width: "512",
        height: "512",
      },
      image: "https://www.leatherhavencraft.com/banners/home-desktop.jpg",
      email: "support@leatherhavencraft.com",
      description: SITE_DESCRIPTION,
      priceRange: "$$",
      currenciesAccepted: "USD, EUR, GBP",
      paymentAccepted: "Credit Card, Debit Card, Stripe",
      sameAs: [
        "https://www.instagram.com/leatherhavencraft",
        ...(process.env.NEXT_PUBLIC_ETSY_URL ? [process.env.NEXT_PUBLIC_ETSY_URL] : []),
      ].filter(Boolean),
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "France" },
        { "@type": "Country", name: "Italy" },
        { "@type": "Country", name: "Canada" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kashmir Road, Near MAF Town",
        addressLocality: "Sialkot",
        addressRegion: "Punjab",
        postalCode: "51310",
        addressCountry: "PK",
      },
      hasMap: "https://maps.app.goo.gl/JPg45EsFFu8Y5Qa69?g_st=aw",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support & Fit Concierge",
          email: "support@leatherhavencraft.com",
          telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923338704371",
          availableLanguage: ["en"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.leatherhavencraft.com/#website",
      url: "https://www.leatherhavencraft.com",
      name: SITE_NAME,
      alternateName: ["LeatherHavenCraft", "LHC Outerwear"],
      publisher: {
        "@id": "https://www.leatherhavencraft.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.leatherhavencraft.com/products?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
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

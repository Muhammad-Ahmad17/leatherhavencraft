import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import { SiteShell } from "@/components/common/SiteShell";
import { SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/constants";
import "./globals.css";


const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = getSiteUrl();

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
    images: ["/banners/home-desktop.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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

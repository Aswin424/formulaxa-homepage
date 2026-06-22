import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const siteUrl = "https://formulaxa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FormulaxA | Fitness Operating System for Coaching, Gyms, and Fitizens",
    template: "%s | FormulaxA",
  },
  description:
    "FormulaxA is a fitness operating system for personalized fitness programs, online coaching, coach software, and gym management in India.",
  keywords: [
    "FormulaXA",
    "FormulaxA",
    "fitness operating system",
    "fitness app India",
    "personalized fitness program",
    "6-week fitness program",
    "sports science fitness program",
    "strength and conditioning coaches",
    "online fitness coaching platform",
    "personal trainer software",
    "fitness coach software",
    "gym management software India",
    "fitness business management platform",
    "consultation assessment exercise program",
    "progress tracking",
  ],
  authors: [{ name: "FormulaxA" }],
  creator: "FormulaxA",
  publisher: "FormulaxA",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [
      { url: "/assets/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "FormulaxA",
    title: "FormulaxA | Fitness Operating System",
    description:
      "Personalized fitness programs, coaching workflows, progress tracking, and fitness business operations in one connected platform.",
    images: [
      {
        url: "/assets/formulaxa-nav-mark.png",
        width: 256,
        height: 202,
        alt: "FormulaxA logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "FormulaxA | Fitness Operating System",
    description:
      "Personalized fitness programs, coach OS, and gym management software for connected fitness growth.",
    images: ["/assets/formulaxa-nav-mark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FormulaxA",
    alternateName: "FormulaXA",
    url: siteUrl,
    logo: `${siteUrl}/assets/formulaxa-nav-mark.png`,
    email: "formulaxa@gmail.com",
    telephone: "+919****9490",
    sameAs: ["https://www.instagram.com/formulaxa/", "https://www.linkedin.com/company/131274186/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919****9490",
        email: "formulaxa@gmail.com",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FormulaxA",
    alternateName: "FormulaXA",
    url: siteUrl,
    description:
      "A connected fitness operating system for personalized programs, online coaching, personal trainer software, and gym management.",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

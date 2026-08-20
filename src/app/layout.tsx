import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import {
  JsonLd,
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/components/shared/JsonLd";
import TerminalManager from "@/components/terminal/TerminalManager";
import { absoluteUrl, brandOgImages, siteConfig } from "@/lib/site";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/InterRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Cipher Unit (CipherUnit) | Open-Source Developer Tools & Engineering Collective",
    template: "%s | Cipher Unit",
  },
  description: siteConfig.description,
  keywords: [
    "Cipher Unit",
    "CipherUnit",
    "cipher unit",
    "cipherunit",
    "cipherunits",
    "cipher units",
    "Cipherunits",
    "CipherUnits",
    "Cipher Units",
    "cipher unit github",
    "open source developer tools",
    "developer tools",
    "open source group",
    "software engineering",
    "modern frameworks",
    "backend tools",
    "dev infrastructure",
    "clean architecture",
    "scalable systems",
    "programming tools",
    "engineering collective",
    "Rust developer tools",
    "Python open source",
  ],
  authors: [
    {
      name: "Cipher Unit Engineering Team",
      url: siteConfig.github,
    },
  ],
  creator: "Cipher Unit",
  publisher: "Cipher Unit",
  applicationName: "Cipher Unit",
  category: "technology",
  classification: "Software Development / Open Source",
  icons: {
    icon: [
      { url: siteConfig.brand.logo, sizes: "any" },
      { url: siteConfig.brand.main, type: "image/png" },
    ],
    shortcut: siteConfig.brand.logo,
    apple: [
      {
        url: siteConfig.brand.logo,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Cipher Unit — Open-Source Developer Tools & Engineering Systems",
    description: siteConfig.description,
    siteName: "Cipher Unit",
    images: brandOgImages(),
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cipher Unit — CipherUnit Open Source Developer Tools and Engineering Collective",
    description: siteConfig.description,
    images: [siteConfig.brand.main],
  },
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
  alternates: {
    canonical: "/",
    languages: {
      "en-US": absoluteUrl("/"),
      "x-default": absoluteUrl("/"),
    },
    types: {
      "text/plain": absoluteUrl("/llms.txt"),
    },
  },
  appleWebApp: {
    capable: true,
    title: "Cipher Unit",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: true,
    address: false,
    date: false,
    url: true,
  },
  verification: siteConfig.googleVerification
    ? { google: siteConfig.googleVerification }
    : undefined,
  other: {
    "contact:email": siteConfig.email,
    "contact:github": siteConfig.github,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#282c33" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-100 -translate-y-16 rounded-md border border-(--color-primery) bg-(--color-surface) px-4 py-2 text-sm text-white shadow-lg transition focus:translate-y-0"
        >
          Skip to main content
        </a>
        <JsonLd id="jsonld-organization" data={OrganizationJsonLd} />
        <JsonLd id="jsonld-website" data={WebSiteJsonLd} />
        <Header />
        {children}
        <TerminalManager />
        <Footer />
      </body>
    </html>
  );
}

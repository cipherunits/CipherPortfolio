import type { Metadata, Viewport } from "next";
import "./styles/globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { JsonLd, OrganizationJsonLd, WebSiteJsonLd, FAQJsonLd, BreadcrumbJsonLdHome } from "@/components/shared/JsonLd";

const baseUrl = "https://cipherunit.xyz";

const cloudImages = {
  main: "https://res.cloudinary.com/djc6gxgjc/image/upload/q_auto/f_auto/v1781272726/SharpCipherUnit_krk0zv.png",
  logo: "https://res.cloudinary.com/djc6gxgjc/image/upload/q_auto/f_auto/v1781272725/CipherUnit_gkjt2m.jpg",
  alt: "https://res.cloudinary.com/djc6gxgjc/image/upload/q_auto/f_auto/v1781272726/CipherUnitWithoutBG_zbbq4w.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Cipher Unit (CipherUnit) | Open-Source Developer Tools & Engineering Collective",
    template: "%s | Cipher Unit",
  },
  description:
    "CipherUnit is an open-source engineering collective focused on building secure, scalable, and high-quality software systems. Discover CipherUnit developer tools, clean architecture frameworks, and open-source backend systems.",
  keywords: [
    "Cipher Unit",
    "CipherUnit",
    "cipher unit",
    "cipherunit",
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
  ],
  authors: [
    {
      name: "Cipher Unit Engineering Team",
      url: "https://github.com/cipherunits",
    },
  ],
  creator: "Cipher Unit",
  publisher: "Cipher Unit",
  applicationName: "Cipher Unit",
  category: "technology",
  classification: "Software Development / Open Source",
  icons: {
    icon: [
      { url: cloudImages.logo, sizes: "any" },
      { url: cloudImages.main, type: "image/png" },
    ],
    shortcut: cloudImages.logo,
    apple: [
      {
        url: cloudImages.logo,
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Cipher Unit — Open-Source Developer Tools & Engineering Systems",
    description:
      "Build modern software with CipherUnit (Cipher Unit). Open-source developer tools, scalable backend systems, and engineering frameworks designed for performance and clean architecture.",
    siteName: "Cipher Unit",
    images: [
      {
        url: cloudImages.main,
        width: 1200,
        height: 630,
        alt: "CipherUnit Open Source Engineering Collective — Developer tools and scalable software systems",
        type: "image/png",
      },
      {
        url: cloudImages.alt,
        width: 1200,
        height: 630,
        alt: "CipherUnit Cipher Unit Logo — Open Source Developer Tools",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cipher Unit — CipherUnit Open Source Developer Tools and Engineering Collective",
    description:
      "CipherUnit (Cipher Unit) is an open-source engineering collective building modern developer tools, scalable systems, and clean architecture frameworks.",
    images: [cloudImages.main],
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
      "en": baseUrl,
      "fa": `${baseUrl}/?lang=fa`,
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
  other: {
    "contact:email": "cipherunit.dev@gmail.com",
    "contact:github": "https://github.com/cipherunits",
    "google-site-verification": "google-site-verification=JAqVoZOf1UANedsrHM9nVT00TPrWuA8na9tIGSticg4",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        <JsonLd data={OrganizationJsonLd} />
        <JsonLd data={WebSiteJsonLd} />
        <JsonLd data={FAQJsonLd} />
        <JsonLd data={BreadcrumbJsonLdHome} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

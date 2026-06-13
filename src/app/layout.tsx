import type { Metadata, Viewport } from "next";
import "./styles/globals.css";

const baseUrl = "https://cipherunit.xvz";

const cloudImages = {
  main: "https://res.cloudinary.com/djc6gxgjc/image/upload/q_auto/f_auto/v1781272726/SharpCipherUnit_krk0zv.png",
  logo: "https://res.cloudinary.com/djc6gxgjc/image/upload/q_auto/f_auto/v1781272725/CipherUnit_gkjt2m.jpg",
  alt: "https://res.cloudinary.com/djc6gxgjc/image/upload/q_auto/f_auto/v1781272726/CipherUnitWithoutBG_zbbq4w.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Cipher Unit (CipherUnit) | Open-Source Developer Tools & Engineering Collective",
    template: "%s | Cipher Unit",
  },

  description:
    "Cipher Unit is an open-source engineering collective building modern developer tools, scalable software systems, and clean architecture frameworks. Discover high-performance tools for developers and software engineers.",

  keywords: [
    "Cipher Unit",
    "CipherUnit",
    "cipher unit github",
    "open source developer tools",
    "developer tools",
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

  openGraph: {
    type: "website",
    url: baseUrl,

    title: "Cipher Unit — Open-Source Developer Tools & Engineering Systems",

    description:
      "Build modern software with Cipher Unit. Open-source developer tools, scalable backend systems, and engineering frameworks designed for performance and clean architecture.",

    siteName: "Cipher Unit",

    images: [
      {
        url: cloudImages.main,
        width: 1200,
        height: 630,
        alt: "Cipher Unit Open Source Engineering Collective",
        type: "image/png",
      },
      {
        url: cloudImages.alt,
        width: 1200,
        height: 630,
        alt: "CipherUnit Developer Tools and Systems",
        type: "image/png",
      },
    ],

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cipher Unit— Open Source Developer Tools",
    description:
      "Open-source engineering collective building modern developer tools and scalable software systems.",
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
      "en-US": baseUrl,
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

    "google-site-verification": "JAqVoZOf1UANedsrHM9nVT00TPrWuA8na9tIGSticg4",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
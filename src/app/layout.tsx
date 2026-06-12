import type { Metadata, Viewport } from "next";
import "./styles/globals.css";

const baseUrl = "https://cipherunit.xvz";

export const metadata: Metadata = {
  title: {
    default: "Cipher Unit | Modern Open-Source Tools for Developers",
    template: "%s | Cipher Unit"
  },
  description: "Cipher Unit builds modern open-source developer tools, libraries, and frameworks. Join our community of developers building the future of software development.",
  
  keywords: [
    "open source",
    "developer tools", 
    "software development",
    "dev tools",
    "programming",
    "Cipher Unit",
    "developer community",
    "modern software"
  ],
  
  authors: [{ name: "Cipher Unit Team", url: "https://github.com/cipherunit" }],
  creator: "Cipher Unit",
  publisher: "Cipher Unit",
  
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/CipherUnit.png", type: "image/png" }
    ],
    shortcut: "/CipherUnit.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  
  openGraph: {
    title: "Cipher Unit - Modern Open-Source Tools for Developers",
    description: "Build better software faster with Cipher Unit's open-source developer tools. Join thousands of developers using our modern toolchain.",
    url: baseUrl,
    siteName: "Cipher Unit",
    images: [
      {
        url: `${baseUrl}/CipherUnit.png`,
        width: 1200,
        height: 630,
        alt: "Cipher Unit - Open Source Developer Tools",
        type: "image/jpeg",
      }
    ],
    locale: "en_US",
    type: "website",
    emails: ["cipherunit.dev@gmail.com"],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Cipher Unit - Modern Open-Source Tools for Developers",
    description: "Build better software faster with Cipher Unit's open-source developer tools.",
    images: [`${baseUrl}/CipherUnit.png`],
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
  
  applicationName: "Cipher Unit",
  appleWebApp: {
    capable: true,
    title: "Cipher Unit",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
    url: true,
  },
  
  category: "technology",
  classification: "Software Development",
  
  other: {
    "contact:email": "cipherunit.dev@gmail.com",
    "contact:github": "https://github.com/cipherunit",
    "google-site-verification": "your-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "facebook-domain-verification": "your-facebook-code",
  },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
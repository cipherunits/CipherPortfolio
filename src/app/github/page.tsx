import { redirect } from "next/navigation";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Cipher Unit on GitHub — CipherUnit Open Source Developer Tools",
  description:
    "Explore Cipher Unit's (CipherUnit) open-source projects and repositories on GitHub.",
  alternates: {
    canonical: "/github",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function GithubPage() {
  redirect(siteConfig.github);
}
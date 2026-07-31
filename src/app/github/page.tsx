import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  title: "Redirecting to GitHub…",
  description: "Redirecting to the Cipher Unit GitHub organization.",
};

export default function GithubPage() {
  redirect(siteConfig.github);
}

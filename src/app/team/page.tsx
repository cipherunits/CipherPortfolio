import type { Metadata } from "next";

import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import Team from "@/components/landing/team/Team";
import {
  buildTeamGraphJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import { absoluteUrl, brandOgImages, siteConfig } from "@/lib/site";
import { getTeamMembers } from "@/lib/team";

const PAGE_URL = absoluteUrl("/team");

export const revalidate = 3600;

export const metadata: Metadata = {
  title:
    "GitHub Team & Contributors | Cipher Unit Open-Source Engineering Collective",
  description:
    "Meet the public GitHub members of Cipher Unit (cipherunits): engineers and open-source contributors with profiles, avatars, and GitHub links building developer tools.",
  keywords: [
    "Cipher Unit team",
    "CipherUnit team",
    "cipherunits GitHub",
    "Cipher Unit GitHub members",
    "Cipher Unit contributors",
    "open source engineering team",
    "GitHub organization members",
    "Cipher Unit people",
    "open source developers",
    "software engineering collective",
    "GitHub profiles",
    "developer team",
  ],
  category: "Technology",
  classification: "Software Development / Open Source Team",
  alternates: {
    canonical: "/team",
  },
  authors: [{ name: "Cipher Unit", url: siteConfig.github }],
  creator: "Cipher Unit",
  publisher: "Cipher Unit",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: siteConfig.name,
    title: "Cipher Unit GitHub Team & Contributors",
    description:
      "Public GitHub members of the Cipher Unit open-source engineering collective — names, avatars, and profiles.",
    images: brandOgImages("Cipher Unit GitHub Team & Contributors"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Cipher Unit GitHub Team & Contributors",
    description:
      "Meet public GitHub members building open-source developer tools at Cipher Unit.",
    images: [siteConfig.brand.main],
  },
};

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <main id="main-content" className="mx-auto my-8 max-w-6xl p-6 md:my-22">
      <JsonLd id="jsonld-team-graph" data={buildTeamGraphJsonLd(members)} />

      <header className="mb-10 space-y-3">
        <NamePage />
        <SubNamePage text="Public GitHub members of the Cipher Units organization." />
        <p className="max-w-2xl text-sm leading-7 text-(--color-stroke)">
          Browse engineers and contributors listed publicly on{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            github.com/{siteConfig.githubOrg}
          </a>
          . Each profile links to their GitHub account.
        </p>
      </header>

      <Team preview={false} />
    </main>
  );
}

import type { Metadata } from "next";

import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import Team from "@/components/landing/team/Team";
import {
  buildTeamGraphJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import { seoAvatarUrl, teamImageTitle } from "@/lib/seo-images";
import { absoluteUrl, brandOgImages, siteConfig } from "@/lib/site";
import { getTeamMembers } from "@/lib/team";

const PAGE_URL = absoluteUrl("/team");

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const members = await getTeamMembers();
  const memberOgImages = members.slice(0, 8).map((member) => ({
    url: seoAvatarUrl(member.avatarUrl),
    alt: teamImageTitle(member),
  }));

  return {
    title: {
      absolute:
        "GitHub Team & Contributors | Cipher Unit Open-Source Engineering Collective",
    },
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
      ...members.slice(0, 12).flatMap((member) => [
        member.name,
        member.login,
        `${member.name} Cipher Unit`,
      ]),
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
      images: [
        ...brandOgImages("Cipher Unit GitHub Team & Contributors"),
        ...memberOgImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cipher Unit GitHub Team & Contributors",
      description:
        "Meet public GitHub members building open-source developer tools at Cipher Unit.",
      images: [memberOgImages[0]?.url || siteConfig.brand.main],
    },
  };
}

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <main id="main-content" className="mx-auto my-8 max-w-6xl px-4 sm:px-6 md:my-22">
      <JsonLd id="jsonld-team-graph" data={buildTeamGraphJsonLd(members)} />

      <header className="mb-10 space-y-2">
        <NamePage title="GitHub Team & Contributors" />
        <SubNamePage text="Public GitHub members of the Cipher Units organization." />
      </header>

      <Team preview={false} />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import Team from "@/components/landing/team/Team";
import {
  buildTeamGraphJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import { projects } from "@/lib/projects";
import { projectPagePath, teamAvatarUrl, teamImageTitle } from "@/lib/seo-images";
import { absoluteUrl, brandOgImages, siteConfig } from "@/lib/site";
import { getTeamMembers } from "@/lib/team";

const PAGE_URL = absoluteUrl("/team");

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const members = await getTeamMembers();
  const memberOgImages = members.slice(0, 8).map((member) => ({
    url: teamAvatarUrl(member),
    alt: teamImageTitle(member),
  }));
  const memberNames = members
    .slice(0, 8)
    .map((member) => member.name)
    .join(", ");

  return {
    title: {
      absolute:
        "GitHub Team & Contributors | Cipher Unit Open-Source Engineering Collective",
    },
    description:
      members.length > 0
        ? `Meet the ${members.length} public GitHub members of Cipher Unit (cipherunits), including ${memberNames}. Engineers and open-source contributors building developer tools, Rust/Python libraries, and infrastructure.`
        : "Meet the public GitHub members of Cipher Unit (cipherunits): engineers and open-source contributors with profiles, avatars, and GitHub links building developer tools.",
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
        "Public GitHub members of the Cipher Unit open-source engineering collective — names, avatars, bios, and profiles.",
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

      <header className="mb-10 space-y-3">
        <NamePage title="GitHub Team & Contributors" />
        <SubNamePage text="Public GitHub members of the Cipher Units organization." />
        <p className="max-w-3xl text-sm leading-7 text-(--color-stroke)">
          Cipher Unit ({siteConfig.shortName}) is built by public members of the{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline-offset-2 hover:underline"
          >
            @{siteConfig.githubOrg}
          </a>{" "}
          GitHub organization
          {members.length > 0 ? ` — currently ${members.length} public profiles` : ""}
          . Browse names, avatars, bios, and open-source contributions from
          engineers shipping developer tools, Rust/Python libraries, and
          infrastructure projects.
        </p>
        <p className="max-w-3xl text-sm leading-7 text-(--color-stroke)">
          Explore what the team ships on the{" "}
          <Link
            href="/projects"
            className="text-white underline-offset-2 hover:underline"
          >
            open-source projects
          </Link>{" "}
          page
          {projects.length > 0 ? (
            <>
              , including{" "}
              {projects.map((project, index) => (
                <span key={project.slug}>
                  {index > 0 ? (index === projects.length - 1 ? ", and " : ", ") : null}
                  <Link
                    href={projectPagePath(project)}
                    className="text-white underline-offset-2 hover:underline"
                  >
                    {project.title}
                  </Link>
                </span>
              ))}
            </>
          ) : null}
          . For collaborations or contributions, visit{" "}
          <Link
            href="/contact"
            className="text-white underline-offset-2 hover:underline"
          >
            Contact CipherUnit
          </Link>
          .
        </p>
      </header>

      <Team preview={false} />

      <section className="mt-14 max-w-3xl space-y-3" aria-labelledby="team-how-heading">
        <h2 id="team-how-heading" className="text-lg font-semibold text-white">
          How Cipher Unit works as a collective
        </h2>
        <p className="text-sm leading-7 text-(--color-stroke)">
          Cipher Unit is an open-source engineering collective. Public GitHub
          membership is the source of truth for this page: profiles sync from
          the @{siteConfig.githubOrg} organization so search engines and
          visitors see real contributors, not a static marketing roster.
        </p>
        <p className="text-sm leading-7 text-(--color-stroke)">
          Want to contribute? Open an issue or pull request on a project
          repository, or reach the team through the{" "}
          <Link
            href="/contact"
            className="text-white underline-offset-2 hover:underline"
          >
            contact page
          </Link>{" "}
          and{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline-offset-2 hover:underline"
          >
            GitHub organization
          </a>
          .
        </p>
      </section>
    </main>
  );
}

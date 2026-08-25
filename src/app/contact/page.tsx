import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import ContactBox from "@/components/contacts/ContactBox";
import ContactMedia from "@/components/contacts/ContactMedia";
import ContactText from "@/components/contacts/ContactText";
import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import {
  ContactPageJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import { projects } from "@/lib/projects";
import { projectPagePath } from "@/lib/seo-images";
import { absoluteUrl, brandOgImages, siteConfig } from "@/lib/site";

const PAGE_URL = absoluteUrl("/contact");

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact CipherUnit | Open Source Software Engineers & Development Team",
  },
  description:
    "Contact Cipher Unit (CipherUnit) for open-source collaborations, GitHub contributions, technical consulting, project partnerships, and developer support. Email cipherunit.dev@gmail.com or reach the @cipherunits team on GitHub.",
  keywords: [
    "Contact CipherUnit",
    "Contact Cipher Unit",
    "Cipher Unit",
    "CipherUnit contact",
    "cipherunit.dev@gmail.com",
    "Open Source Developers",
    "Software Engineering",
    "Development Team",
    "GitHub Contributors",
    "Technical Support",
    "Software Consulting",
    "Project Collaboration",
    "Engineering Team",
    "Hire Developers",
    "cipherunits",
  ],
  category: "Technology",
  classification: "Software Development / Contact",
  alternates: {
    canonical: "/contact",
  },
  authors: [{ name: "Cipher Unit", url: siteConfig.url }],
  creator: "Cipher Unit",
  publisher: "Cipher Unit",
  openGraph: {
    title: "Contact CipherUnit | Open Source Engineering Collective",
    description:
      "Reach the Cipher Unit engineering team for collaborations, open-source contributions, consulting, partnerships, and technical discussions.",
    url: PAGE_URL,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: brandOgImages(
      "Contact Cipher Unit — Open Source Engineering Collective",
    ),
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CipherUnit | Open Source Engineering Collective",
    description:
      "Connect with CipherUnit for software engineering, open-source collaboration, consulting, and technical inquiries.",
    images: [siteConfig.brand.main],
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

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="mx-auto my-8 mt-16 mb-24 max-w-6xl p-6"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <JsonLd id="jsonld-contact-page" data={ContactPageJsonLd} />

      <header className="space-y-3">
        <NamePage title="Contact CipherUnit" />
        <SubNamePage text="Open-source collaborations, contributions, and technical inquiries." />
        <p className="max-w-3xl text-sm leading-7 text-(--color-stroke)">
          Reach the Cipher Unit ({siteConfig.shortName}) engineering collective
          for open-source project partnerships, GitHub contributions,
          consulting, and developer support. Prefer email at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          or message the team through{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline-offset-2 hover:underline"
          >
            GitHub @{siteConfig.githubOrg}
          </a>
          .
        </p>
      </header>

      <section className="mt-10 flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="space-y-6">
          <ContactText />
          <Image
            src={siteConfig.brand.main}
            overrideSrc={absoluteUrl(siteConfig.brand.main)}
            alt="Contact Cipher Unit (CipherUnit) — open-source engineering collective"
            title="Contact Cipher Unit"
            width={420}
            height={240}
            sizes="(max-width: 768px) 90vw, 420px"
            className="h-auto w-full max-w-[420px] rounded-lg border border-(--color-stroke)/40"
          />
        </div>
        <ContactBox />
      </section>

      <section
        className="mt-14 max-w-3xl space-y-3"
        aria-labelledby="contact-topics-heading"
      >
        <h2
          id="contact-topics-heading"
          className="text-lg font-semibold text-white"
        >
          What you can contact Cipher Unit about
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-(--color-stroke)">
          <li>
            Collaborating on open-source developer tools and infrastructure
          </li>
          <li>
            Contributing to{" "}
            {projects.map((project, index) => (
              <span key={project.slug}>
                {index > 0
                  ? index === projects.length - 1
                    ? ", or "
                    : ", "
                  : null}
                <Link
                  href={projectPagePath(project)}
                  className="text-white underline-offset-2 hover:underline"
                >
                  {project.title}
                </Link>
              </span>
            ))}
          </li>
          <li>Technical questions, consulting, and partnership inquiries</li>
          <li>
            Meeting the public engineering team on the{" "}
            <Link
              href="/team"
              className="text-white underline-offset-2 hover:underline"
            >
              GitHub team page
            </Link>
          </li>
        </ul>
        <p className="text-sm leading-7 text-(--color-stroke)">
          Browse all repositories from the{" "}
          <Link
            href="/projects"
            className="text-white underline-offset-2 hover:underline"
          >
            projects directory
          </Link>{" "}
          or the{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline-offset-2 hover:underline"
          >
            @{siteConfig.githubOrg} GitHub organization
          </a>
          . We reply to genuine collaboration and contribution requests.
        </p>
      </section>

      <ContactMedia />
    </main>
  );
}

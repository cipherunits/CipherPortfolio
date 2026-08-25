import type { Metadata } from "next";

import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import Projects from "@/components/landing/projects/components/Projects";
import {
  buildProjectsGraphJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import { projects } from "@/lib/projects";
import { projectOgImage } from "@/lib/seo-images";
import { absoluteUrl, brandOgImages, siteConfig } from "@/lib/site";

const PAGE_URL = absoluteUrl("/projects");

const projectOgImages = projects.map((project) => projectOgImage(project));

export const metadata: Metadata = {
  title: {
    absolute:
      "Open Source Projects | Cipher Unit - Rust, Python, Docker & Developer Tools",
  },
  description:
    "Explore Cipher Unit's open-source software projects, including Fusion Framework, Cipher Token, Cipher Scope, NPM Mirror, Rust libraries, Python packages, Docker utilities and production-ready developer solutions.",
  keywords: [
    "Cipher Unit",
    "Cipher Unit Projects",
    "Open Source",
    "Open Source Projects",
    "Developer Tools",
    "Software Engineering",
    "Rust",
    "Python",
    "PyO3",
    "JWT",
    "Cryptography",
    "Docker",
    "Docker Compose",
    "Fusion Framework",
    "Cipher Token",
    "Cipher Scope",
    "NPM Mirror",
    "Offline NPM",
    "GitHub",
    "CLI",
    "Developer Libraries",
    "Open Source Software",
  ],
  category: "Technology",
  classification: "Software Development",
  alternates: {
    canonical: "/projects",
  },
  authors: [{ name: "Cipher Unit", url: siteConfig.url }],
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
    title: "Cipher Unit Open Source Projects",
    description:
      "Browse open-source developer tools — Fusion Framework, Cipher Token, Cipher Scope and NPM Mirror — built by Cipher Unit.",
    images: [
      ...projectOgImages,
      ...brandOgImages("Cipher Unit Open Source Projects"),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cipher Unit Open Source Projects",
    description:
      "Browse open-source developer tools and engineering projects created by Cipher Unit.",
    images: [
      projectOgImages[0]?.url || absoluteUrl(siteConfig.brand.main),
    ],
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="mx-auto my-8 max-w-6xl px-4 sm:px-6 md:my-22">
      <JsonLd id="jsonld-projects-graph" data={buildProjectsGraphJsonLd()} />

      <header className="mb-10 space-y-2">
        <NamePage title="Open Source Projects" />
        <SubNamePage text="Explore all open-source projects developed by Cipher Unit." />
        <p className="max-w-3xl text-sm leading-7 text-(--color-stroke)">
          Cipher Unit publishes open-source developer tools across Rust, Python,
          TypeScript, and Docker. Each project page includes overview copy,
          repository links, documentation, and README content when available —
          including Fusion Framework, Cipher Token, Cipher Scope, and NPM Mirror.
        </p>
      </header>

      <Projects view={false} />
    </main>
  );
}

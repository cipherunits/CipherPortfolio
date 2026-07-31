import type { Metadata } from "next";

import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import Projects from "@/components/landing/projects/components/Projects";
import {
  buildProjectsGraphJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import { projects } from "@/lib/projects";
import { projectImageCaption, projectImageTitle } from "@/lib/seo-images";
import { absoluteUrl, brandOgImages, siteConfig } from "@/lib/site";

const PAGE_URL = absoluteUrl("/projects");

const projectOgImages = projects.map((project) => ({
  url: project.imageUrl,
  alt: projectImageTitle(project),
  type: "image/png" as const,
}));

export const metadata: Metadata = {
  title:
    "Open Source Projects | Cipher Unit - Rust, Python, Docker & Developer Tools",
  description:
    "Explore Cipher Unit's open-source software projects, including Rust libraries, Python packages, Docker utilities, cryptography tools and production-ready developer solutions.",
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
    "NPM Mirror",
    "Cipher Token",
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
      "Browse open-source developer tools, Rust libraries, Python packages and Docker utilities built by Cipher Unit.",
    images: [
      ...brandOgImages("Cipher Unit Open Source Projects"),
      ...projectOgImages,
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cipher Unit Open Source Projects",
    description:
      "Browse open-source developer tools and engineering projects created by Cipher Unit.",
    images: [projects[0]?.imageUrl || siteConfig.brand.main],
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="mx-auto my-8 max-w-6xl p-6 md:my-22">
      <JsonLd id="jsonld-projects-graph" data={buildProjectsGraphJsonLd()} />

      <header className="mb-16 space-y-3">
        <NamePage />
        <SubNamePage text="Explore all open-source projects developed by Cipher Unit." />
        <p className="sr-only">
          {projects.map((project) => projectImageCaption(project)).join(" ")}
        </p>
      </header>

      <Projects view={false} />
    </main>
  );
}

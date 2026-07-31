import Link from "next/link";

import Fields from "@/components/shared/Fields";
import ProjectBox from "./ProjectBox";

const projects = [
  {
    imageUrl: "/images/cipher-token.png",
    tech: "Rust • Python • PyO3 • JWT • Cryptography",
    title: "Cipher Token",
    description:
      "A high-performance Rust library for secure JWT token generation, validation and cryptographic utilities with Python bindings powered by PyO3.",
    linkLive: "https://github.com/cipherunits/CipherToken",
    linkDocs: "https://cipherunits.github.io/CipherToken/getting-started",
    buttonLive: "GitHub Repository",
    buttonDocs: "Documentation",
  },
  {
    imageUrl: "/images/npm-mirrors.png",
    tech: "Npm • Docker Compose • Makefile • Offline Package Cache",
    title: "NPM Mirror",
    description:
      "Create a local offline mirror of npm packages before losing internet connectivity. Built with Docker, Docker Compose and Makefile for reliable package caching.",
    linkLive: "https://github.com/cipherunits/npm-mirror",
    linkDocs: "https://cipherunits.github.io/npm-mirror/",
    buttonLive: "GitHub Repository",
    buttonDocs: "Documentation",
  },
];

export default function Projects({ view = false }: { view?: boolean }) {
  return (
    <section
      className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full">
          <Fields text="projects" />
        </div>

        {view && (
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-white transition hover:underline"
            aria-label="View all Cipher Unit open source projects"
          >
            View all projects →
          </Link>
        )}
      </div>

      <div
        className="mt-12 grid grid-cols-1 justify-center gap-8 lg:grid-cols-3"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="numberOfItems" content={String(projects.length)} />
        <meta itemProp="itemListOrder" content="Ascending" />

        {projects.map((project, index) => (
          <div
            key={project.title}
            className="mx-auto w-full max-w-95"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />

            <ProjectBox {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/shared/Button";
import {
  buildProjectPageJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import { getProjectBySlug, projects } from "@/lib/projects";
import {
  projectImageCaption,
  projectImageTitle,
  projectPagePath,
} from "@/lib/seo-images";
import { absoluteUrl, brandOgImages, siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: { absolute: "Project not found | Cipher Unit" },
      robots: { index: false, follow: true },
    };
  }

  const pageUrl = absoluteUrl(projectPagePath(project));
  const title = `${project.title} | Cipher Unit Open Source Project`;

  return {
    title: { absolute: title },
    description: project.description,
    keywords: [
      project.title,
      "Cipher Unit",
      "CipherUnit",
      "open source",
      ...project.programmingLanguages,
    ],
    alternates: {
      canonical: projectPagePath(project),
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
      url: pageUrl,
      siteName: siteConfig.name,
      title: `${project.title} — Cipher Unit`,
      description: project.description,
      images: [
        {
          url: project.imageUrl,
          alt: projectImageTitle(project),
          type: "image/png" as const,
        },
        ...brandOgImages(`${project.title} by Cipher Unit`),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Cipher Unit`,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const imageTitle = projectImageTitle(project);
  const imageCaption = projectImageCaption(project);

  return (
    <main
      id="main-content"
      className="mx-auto my-8 max-w-6xl px-4 sm:px-6 md:my-22"
    >
      <JsonLd
        id={`jsonld-project-${project.slug}`}
        data={buildProjectPageJsonLd(project)}
      />

      <header className="mb-10 space-y-2">
        <NamePage title={project.title} />
        <SubNamePage text={project.description} />
      </header>

      <article
        itemScope
        itemType="https://schema.org/SoftwareSourceCode"
        className="overflow-hidden rounded-xl border border-(--color-stroke)/50 bg-(--color-background-secondary)"
      >
        <meta itemProp="codeRepository" content={project.linkLive} />
        <meta
          itemProp="url"
          content={absoluteUrl(projectPagePath(project))}
        />
        <meta itemProp="applicationCategory" content="Developer Tool" />
        <meta itemProp="author" content="Cipher Unit" />
        <meta itemProp="creator" content="Cipher Unit" />

        <figure
          className="relative aspect-video w-full overflow-hidden"
          itemProp="image"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <meta
            itemProp="contentUrl"
            content={absoluteUrl(project.imageUrl)}
          />
          <meta itemProp="url" content={absoluteUrl(project.imageUrl)} />
          <meta itemProp="name" content={imageTitle} />
          <meta itemProp="caption" content={imageCaption} />
          <Image
            src={project.imageUrl}
            overrideSrc={absoluteUrl(project.imageUrl)}
            alt={`${project.title} open source software developed by Cipher Unit (CipherUnit). ${project.description}`}
            title={imageTitle}
            fill
            priority
            quality={90}
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
          <figcaption className="sr-only">{imageCaption}</figcaption>
        </figure>

        <div className="border-y border-(--color-stroke)/40 bg-(--color-surface)/40 px-5 py-3">
          <p className="text-sm leading-6 text-(--color-stroke)">
            {project.tech}
          </p>
          {project.programmingLanguages.map((lang) => (
            <meta key={lang} itemProp="programmingLanguage" content={lang} />
          ))}
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div>
            <h2
              itemProp="name"
              className="text-3xl font-semibold text-white"
            >
              {project.title}
            </h2>
            <p
              itemProp="description"
              className="mt-4 max-w-3xl text-sm leading-7 text-(--color-stroke)"
            >
              {project.description}
            </p>
          </div>

          <nav
            aria-label={`${project.title} project links`}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href={project.linkLive}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
              itemProp="codeRepository"
            >
              <Button Theme="primary">
                {project.buttonLive ?? "GitHub Repository"}
              </Button>
            </Link>
            <Link
              href={project.linkDocs}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${project.title} documentation`}
            >
              <Button Theme="stroke">
                {project.buttonDocs ?? "Documentation"}
              </Button>
            </Link>
            <Link
              href="/projects"
              className="text-sm text-(--color-stroke) transition hover:text-white"
            >
              ← All projects
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}

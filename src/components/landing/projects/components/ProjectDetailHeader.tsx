import Image from "next/image";
import Link from "next/link";

import Button from "@/components/shared/Button";
import type { Project } from "@/lib/projects";
import {
  PROJECT_IMAGE_HEIGHT,
  PROJECT_IMAGE_WIDTH,
  projectImageAlt,
  projectImageCaption,
  projectImageEncodingFormat,
  projectImageTitle,
} from "@/lib/seo-images";
import { absoluteUrl } from "@/lib/site";

type ProjectDetailHeaderProps = {
  project: Project;
};

export default function ProjectDetailHeader({
  project,
}: ProjectDetailHeaderProps) {
  const absoluteImageUrl = absoluteUrl(project.imageUrl);
  const imageTitle = projectImageTitle(project);
  const imageCaption = projectImageCaption(project);
  const imageAlt = projectImageAlt(project);
  const encodingFormat = projectImageEncodingFormat(project.imageUrl);

  return (
    <section
      className="mb-10 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start"
      aria-labelledby={`project-${project.slug}-overview`}
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
    >
      <meta itemProp="name" content={project.title} />
      <meta itemProp="description" content={project.description} />
      <meta itemProp="codeRepository" content={project.linkLive} />
      <meta itemProp="url" content={absoluteUrl(`/projects/${project.slug}`)} />
      <meta itemProp="applicationCategory" content="DeveloperApplication" />
      <meta itemProp="author" content="Cipher Unit" />
      <meta itemProp="creator" content="Cipher Unit" />
      {project.programmingLanguages.map((lang) => (
        <meta key={lang} itemProp="programmingLanguage" content={lang} />
      ))}

      <figure
        className="relative aspect-video overflow-hidden rounded-xl border border-(--color-stroke)/40 bg-[#2c3138]"
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <meta itemProp="contentUrl" content={absoluteImageUrl} />
        <meta itemProp="url" content={absoluteImageUrl} />
        <meta itemProp="name" content={imageTitle} />
        <meta itemProp="caption" content={imageCaption} />
        <meta itemProp="description" content={imageCaption} />
        <meta itemProp="encodingFormat" content={encodingFormat} />
        <meta itemProp="width" content={String(PROJECT_IMAGE_WIDTH)} />
        <meta itemProp="height" content={String(PROJECT_IMAGE_HEIGHT)} />
        <Image
          src={project.imageUrl}
          overrideSrc={absoluteImageUrl}
          alt={imageAlt}
          title={imageTitle}
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-contain"
        />
        <figcaption className="sr-only">{imageCaption}</figcaption>
      </figure>

      <div className="space-y-5">
        <p className="text-xs leading-6 tracking-wide text-(--color-stroke) uppercase">
          {project.tech}
        </p>

        <div className="space-y-3">
          <h2
            id={`project-${project.slug}-overview`}
            className="text-xl font-semibold text-white"
          >
            About {project.title}
          </h2>
          <p className="text-sm leading-7 text-(--color-stroke)">
            {project.description}
          </p>
          {project.overview ? (
            <div className="space-y-3 text-sm leading-7 text-(--color-stroke)">
              {project.overview.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          ) : null}
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
            title={`${project.title} GitHub Repository`}
            itemProp="codeRepository"
          >
            <Button Theme="primary">
              {project.buttonLive || "GitHub Repository"}
            </Button>
          </Link>
          <Link
            href={project.linkDocs}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} documentation`}
            title={`${project.title} Documentation`}
          >
            <Button Theme="stroke">
              {project.buttonDocs || "Documentation"}
            </Button>
          </Link>
          <Link
            href="/projects"
            className="text-sm text-(--color-stroke) underline-offset-2 hover:text-white hover:underline"
          >
            All Cipher Unit projects
          </Link>
        </nav>
      </div>
    </section>
  );
}

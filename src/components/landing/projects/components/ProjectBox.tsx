import Image from "next/image";
import Link from "next/link";

import Button from "@/components/shared/Button";
import {
  PROJECT_IMAGE_HEIGHT,
  PROJECT_IMAGE_WIDTH,
  projectImageAlt,
  projectImageCaption,
  projectImageEncodingFormat,
  projectImageTitle,
} from "@/lib/seo-images";
import { absoluteUrl } from "@/lib/site";
import type { Project } from "../types/projects.type";

export default function ProjectBox({
  slug,
  imageUrl,
  tech,
  programmingLanguages,
  title,
  description,
  buttonLive,
  buttonDocs,
  linkLive,
  linkDocs,
}: Project) {
  const project = {
    slug,
    imageUrl,
    tech,
    programmingLanguages,
    title,
    description,
    linkLive,
    linkDocs,
    ...(buttonLive ? { buttonLive } : {}),
    ...(buttonDocs ? { buttonDocs } : {}),
  } satisfies Project;
  const pagePath = `/projects/${slug}`;
  const absoluteImageUrl = absoluteUrl(imageUrl);
  const imageTitle = projectImageTitle(project);
  const imageCaption = projectImageCaption(project);
  const imageAlt = projectImageAlt(project);
  const encodingFormat = projectImageEncodingFormat(imageUrl);

  return (
    <article
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
      className="
        group
        flex h-full w-full flex-col
        overflow-hidden
        rounded-xl
        border border-(--color-stroke)/50
        bg-(--color-background-secondary)
        transition-all duration-300
        hover:-translate-y-1
        hover:border-(--color-primery)/40
        hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.55)]
      "
    >
      <meta itemProp="codeRepository" content={linkLive} />
      <meta itemProp="url" content={absoluteUrl(pagePath)} />
      <meta itemProp="applicationCategory" content="Developer Tool" />
      <meta itemProp="author" content="Cipher Unit" />
      <meta itemProp="creator" content="Cipher Unit" />

      <figure
        className="relative aspect-video overflow-hidden bg-[#2c3138]"
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
        <Link
          href={pagePath}
          aria-label={`${title} — Cipher Unit project page`}
          title={imageTitle}
          className="absolute inset-0"
        >
          <Image
            src={imageUrl}
            overrideSrc={absoluteImageUrl}
            alt={imageAlt}
            title={imageTitle}
            fill
            quality={90}
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        <figcaption className="sr-only">{imageCaption}</figcaption>
      </figure>

      <div className="border-y border-(--color-stroke)/40 bg-(--color-surface)/40 px-4 py-3">
        <p className="text-xs leading-6 text-(--color-stroke)">{tech}</p>
        {programmingLanguages?.map((lang) => (
          <meta key={lang} itemProp="programmingLanguage" content={lang} />
        ))}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <header>
          <h2 itemProp="name" className="text-2xl font-semibold text-white">
            <Link
              href={pagePath}
              className="transition hover:text-(--color-primery)"
            >
              {title}
            </Link>
          </h2>

          <p
            itemProp="description"
            className="mt-3 text-sm leading-7 text-(--color-stroke)"
          >
            {description}
          </p>
        </header>

        <footer className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <nav
            aria-label={`${title} project links`}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href={linkLive}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} GitHub repository`}
              title={`${title} GitHub Repository`}
              itemProp="codeRepository"
            >
              <Button Theme="primary">{buttonLive}</Button>
            </Link>

            <Link
              href={linkDocs}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${title} documentation`}
              title={`${title} Documentation`}
            >
              <Button Theme="stroke">{buttonDocs}</Button>
            </Link>
          </nav>
        </footer>
      </div>
    </article>
  );
}

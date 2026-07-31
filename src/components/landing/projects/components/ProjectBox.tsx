import Image from "next/image";
import Link from "next/link";

import Button from "@/components/shared/Button";
import type { Project } from "../types/projects.type";

export default function ProjectBox({
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
  return (
    <article
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
      className="
        group
        flex h-full w-full flex-col
        overflow-hidden
        border border-(--color-stroke)
        bg-(--color-background-secondary)
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:shadow-2xl
      "
    >
      <meta itemProp="codeRepository" content={linkLive} />
      <meta itemProp="url" content={linkDocs} />
      <meta itemProp="applicationCategory" content="Developer Tool" />
      <meta itemProp="author" content="Cipher Unit" />
      <meta itemProp="creator" content="Cipher Unit" />

      <figure
        className="relative aspect-video overflow-hidden"
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <Image
          src={imageUrl}
          alt={`${title} open source software developed by Cipher Unit. ${description}`}
          fill
          quality={90}
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <figcaption className="sr-only">
          {title} open source developer tool screenshot.
        </figcaption>
      </figure>

      <div className="border-y border-(--color-stroke) px-4 py-3">
        <p className="text-xs leading-6 text-(--color-stroke)">{tech}</p>
        {programmingLanguages?.map((lang) => (
          <meta key={lang} itemProp="programmingLanguage" content={lang} />
        ))}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <header>
          <h2 itemProp="name" className="text-2xl font-semibold text-white">
            {title}
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
              itemProp="url"
            >
              <Button Theme="stroke">{buttonDocs}</Button>
            </Link>
          </nav>
        </footer>
      </div>
    </article>
  );
}

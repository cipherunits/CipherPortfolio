import Link from "next/link";

import Fields from "@/components/shared/Fields";
import ProjectBox from "./ProjectBox";
import { projects } from "@/lib/projects";

export default function Projects({ view = false }: { view?: boolean }) {
  const isLanding = view;

  return (
    <section
      className={
        isLanding
          ? "mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-20"
          : "w-full"
      }
      aria-labelledby={isLanding ? "projects-heading" : undefined}
      aria-label={isLanding ? undefined : "Cipher Unit open source projects"}
    >
      {isLanding ? (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full" id="projects-heading">
            <Fields text="projects" />
          </div>

          <Link
            href="/projects"
            className="shrink-0 rounded-md border border-(--color-stroke)/40 bg-(--color-background-secondary) px-3 py-2 text-sm font-medium text-white transition hover:border-(--color-primery)/40 hover:bg-(--color-surface)"
            aria-label="View all Cipher Unit open source projects"
          >
            View all projects →
          </Link>
        </div>
      ) : null}

      <div
        className={`grid grid-cols-1 justify-center gap-8 lg:grid-cols-3 ${
          isLanding ? "mt-12" : ""
        }`}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="numberOfItems" content={String(projects.length)} />
        <meta itemProp="itemListOrder" content="Ascending" />

        {projects.map((project, index) => (
          <div
            key={project.slug}
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

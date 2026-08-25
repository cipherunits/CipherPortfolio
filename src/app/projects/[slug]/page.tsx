import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetailHeader from "@/components/landing/projects/components/ProjectDetailHeader";
import ProjectReadmeView from "@/components/landing/projects/components/ProjectReadmeView";
import {
  buildProjectPageJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import { getProjectReadme } from "@/lib/project-readme";
import { getProjectBySlug, projects } from "@/lib/projects";
import {
  projectImageTitle,
  projectOgImage,
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
export const revalidate = 3600;

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
  const imageUrl = absoluteUrl(project.imageUrl);
  const imageTitle = projectImageTitle(project);
  const title = `${project.title} | Cipher Unit Open Source Project`;
  const description = project.overview
    ? `${project.description} ${project.overview.split("\n\n")[0]}`
    : project.description;
  const techKeywords = project.tech
    .split("•")
    .map((part) => part.trim())
    .filter(Boolean);

  return {
    title: { absolute: title },
    description: description.slice(0, 300),
    keywords: [
      project.title,
      "Cipher Unit",
      "CipherUnit",
      "cipherunits",
      "open source",
      "open source project",
      "developer tools",
      ...project.programmingLanguages,
      ...techKeywords,
    ],
    category: "Technology",
    classification: "Software Development",
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
        projectOgImage(project),
        ...brandOgImages(`${project.title} by Cipher Unit`),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Cipher Unit`,
      description: project.description,
      images: [imageUrl],
    },
    other: {
      "og:image:alt": imageTitle,
      image: imageUrl,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const readme = await getProjectReadme(project);

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

      <ProjectDetailHeader project={project} />

      {readme ? (
        <ProjectReadmeView readme={readme} projectTitle={project.title} />
      ) : null}
    </main>
  );
}

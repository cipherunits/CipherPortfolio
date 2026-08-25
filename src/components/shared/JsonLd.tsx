import { faqItems } from "@/lib/faq";
import { type Project, projects } from "@/lib/projects";
import {
  projectImageObject,
  projectPagePath,
  teamImageObject,
} from "@/lib/seo-images";
import { absoluteUrl, siteConfig } from "@/lib/site";
import type { TeamMember } from "@/lib/team";

const siteUrl = siteConfig.url;
const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const logoId = `${siteUrl}/#logo`;

export const OrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: siteConfig.name,
  alternateName: ["CipherUnit", "CipherUnit Open Source", "Cipher Unit"],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": logoId,
    url: absoluteUrl(siteConfig.brand.logo),
    contentUrl: absoluteUrl(siteConfig.brand.logo),
    name: "Cipher Unit (CipherUnit) logo",
    caption: "Cipher Unit logo",
  },
  image: [
    absoluteUrl(siteConfig.brand.main),
    ...projects.map((project) => absoluteUrl(project.imageUrl)),
  ],
  description: siteConfig.description,
  foundingDate: "2024",
  email: siteConfig.email,
  sameAs: [
    siteConfig.github,
    ...(siteConfig.instagram ? [siteConfig.instagram] : []),
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "customer support",
    availableLanguage: ["English"],
    url: absoluteUrl("/contact"),
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "software engineering",
    "open source developer tools",
    "clean architecture",
    "scalable software systems",
    "backend systems",
    "developer infrastructure",
    "Rust",
    "Python",
    "TypeScript",
  ],
};

export const WebSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteUrl,
  description: siteConfig.description,
  inLanguage: "en-US",
  publisher: { "@id": orgId },
  copyrightHolder: { "@id": orgId },
  about: { "@id": orgId },
};

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const BreadcrumbJsonLdHome = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
]);

export const BreadcrumbJsonLdContact = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export const BreadcrumbJsonLdProjects = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
]);

export const BreadcrumbJsonLdTeam = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
]);

export const FAQJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const HomePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: `${siteConfig.name} (${siteConfig.shortName}) | Open-Source Developer Tools & Engineering Collective`,
  description: siteConfig.description,
  inLanguage: "en-US",
  isPartOf: { "@id": websiteId },
  about: { "@id": orgId },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: absoluteUrl(siteConfig.brand.main),
  },
  breadcrumb: BreadcrumbJsonLdHome,
  mainEntity: { "@id": orgId },
};

export function buildProjectsGraphJsonLd() {
  const pageUrl = absoluteUrl("/projects");
  const imageNodes = projects.map((project) => projectImageObject(project));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Cipher Unit Open Source Projects",
        description:
          "Browse all open source projects developed by Cipher Unit.",
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        primaryImageOfPage: { "@id": imageNodes[0]?.["@id"] },
        image: imageNodes.map((image) => ({ "@id": image["@id"] })),
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        ...BreadcrumbJsonLdProjects,
        "@id": `${pageUrl}#breadcrumb`,
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#itemlist`,
        name: "Cipher Unit Open Source Projects",
        description:
          "Collection of open-source software developed by Cipher Unit.",
        numberOfItems: projects.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: projects.map((project, index) => {
          const projectUrl = absoluteUrl(projectPagePath(project));
          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareSourceCode",
              "@id": projectUrl,
              name: project.title,
              description: project.description,
              codeRepository: project.linkLive,
              url: projectUrl,
              programmingLanguage: project.programmingLanguages,
              image: { "@id": `${projectUrl}#image` },
              author: { "@id": orgId },
              creator: { "@id": orgId },
              license: "https://opensource.org/licenses",
              applicationCategory: "DeveloperApplication",
            },
          };
        }),
      },
      ...imageNodes,
    ],
  };
}

export function buildProjectPageJsonLd(project: Project) {
  const pageUrl = absoluteUrl(projectPagePath(project));
  const image = projectImageObject(project, { representativeOfPage: true });
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: projectPagePath(project) },
  ]);
  const richDescription = project.overview
    ? `${project.description} ${project.overview.split("\n\n")[0]}`
    : project.description;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${project.title} | Cipher Unit Open Source Project`,
        description: richDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        primaryImageOfPage: { "@id": image["@id"] },
        image: { "@id": image["@id"] },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": pageUrl },
      },
      {
        ...breadcrumb,
        "@id": `${pageUrl}#breadcrumb`,
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": pageUrl,
        name: project.title,
        description: richDescription,
        url: pageUrl,
        codeRepository: project.linkLive,
        programmingLanguage: project.programmingLanguages,
        image: { "@id": image["@id"] },
        author: { "@id": orgId },
        creator: { "@id": orgId },
        sameAs: [project.linkLive, project.linkDocs],
        license: "https://opensource.org/licenses",
        applicationCategory: "DeveloperApplication",
      },
      image,
    ],
  };
}

export const ContactPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${absoluteUrl("/contact")}#webpage`,
      url: absoluteUrl("/contact"),
      name: "Contact CipherUnit | Open Source Engineering Collective",
      description:
        "Contact Cipher Unit (CipherUnit) for open-source collaborations, GitHub contributions, consulting, partnerships, and technical inquiries.",
      inLanguage: "en-US",
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      mainEntity: { "@id": orgId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.brand.main),
      },
      breadcrumb: { "@id": `${absoluteUrl("/contact")}#breadcrumb` },
      significantLink: [
        absoluteUrl("/team"),
        absoluteUrl("/projects"),
        siteConfig.github,
        `mailto:${siteConfig.email}`,
      ],
    },
    {
      ...BreadcrumbJsonLdContact,
      "@id": `${absoluteUrl("/contact")}#breadcrumb`,
    },
    {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.name,
      alternateName: ["CipherUnit", "Cipher Unit"],
      url: siteUrl,
      email: siteConfig.email,
      sameAs: [
        siteConfig.github,
        ...(siteConfig.instagram ? [siteConfig.instagram] : []),
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: siteConfig.email,
          contactType: "customer support",
          availableLanguage: ["English"],
          url: absoluteUrl("/contact"),
        },
        {
          "@type": "ContactPoint",
          contactType: "technical support",
          url: siteConfig.github,
          availableLanguage: ["English"],
        },
      ],
    },
  ],
};

export function buildTeamGraphJsonLd(members: TeamMember[]) {
  const pageUrl = absoluteUrl("/team");
  const imageNodes = members.map((member) =>
    teamImageObject(member, pageUrl),
  );

  const personNodes = members.map((member) => ({
    "@type": "Person" as const,
    "@id": `${pageUrl}#${member.login}`,
    name: member.name,
    alternateName: member.login,
    url: member.htmlUrl,
    image: { "@id": `${pageUrl}#${member.login}-image` },
    sameAs: [member.htmlUrl],
    jobTitle: "Open Source Engineer",
    worksFor: { "@id": orgId },
    affiliation: { "@id": orgId },
    memberOf: { "@id": orgId },
    description:
      member.bio ||
      `Public GitHub member of the ${siteConfig.name} open-source engineering collective (@${member.login}).`,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Cipher Unit GitHub Team & Contributors",
        description:
          "Public GitHub members of the Cipher Unit open-source engineering collective — profiles, avatars, and contributor bios synced from GitHub.",
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        mainEntity: { "@id": `${pageUrl}#itemlist` },
        primaryImageOfPage: imageNodes[0]
          ? { "@id": imageNodes[0]["@id"] }
          : undefined,
        image: imageNodes.map((image) => ({ "@id": image["@id"] })),
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        significantLink: [
          absoluteUrl("/projects"),
          absoluteUrl("/contact"),
          siteConfig.github,
        ],
      },
      {
        ...BreadcrumbJsonLdTeam,
        "@id": `${pageUrl}#breadcrumb`,
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#itemlist`,
        name: "Cipher Unit GitHub Team",
        description: `Public members of the ${siteConfig.githubOrg} GitHub organization.`,
        numberOfItems: members.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: personNodes.map((person, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": person["@id"] },
        })),
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        url: siteUrl,
        member: personNodes.map((person) => ({ "@id": person["@id"] })),
      },
      ...personNodes,
      ...imageNodes,
    ],
  };
}

type JsonLdProps = {
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import { faqItems } from "@/lib/faq";
import { projects } from "@/lib/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";

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
    caption: "Cipher Unit logo",
  },
  image: absoluteUrl(siteConfig.brand.main),
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
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareSourceCode",
            "@id": `${pageUrl}#${project.slug}`,
            name: project.title,
            description: project.description,
            codeRepository: project.linkLive,
            url: project.linkLive,
            programmingLanguage: project.programmingLanguages,
            image: absoluteUrl(project.imageUrl),
            author: { "@id": orgId },
            creator: { "@id": orgId },
            license: "https://opensource.org/licenses",
            applicationCategory: "DeveloperApplication",
          },
        })),
      },
    ],
  };
}

export const ContactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contact")}#webpage`,
  url: absoluteUrl("/contact"),
  name: "Contact CipherUnit",
  description:
    "Contact CipherUnit for open-source software development, engineering collaborations, and technical inquiries.",
  inLanguage: "en-US",
  isPartOf: { "@id": websiteId },
  about: { "@id": orgId },
  mainEntity: { "@id": orgId },
  breadcrumb: BreadcrumbJsonLdContact,
};

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

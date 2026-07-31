import { siteConfig } from "@/lib/site";

const siteUrl = siteConfig.url;

export const OrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cipher Unit",
  alternateName: ["CipherUnit", "CipherUnit Open Source"],
  url: siteUrl,
  logo: `${siteUrl}/images/CipherUnit.png`,
  image: `${siteUrl}/images/Hero.png`,
  description:
    "CipherUnit is an open-source engineering collective focused on building secure, scalable, and high-quality software systems.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Cipher Unit Engineering Team",
    },
  ],
  sameAs: [siteConfig.github],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "support",
    url: `${siteUrl}/contact`,
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "software engineering",
    "open source developer tools",
    "clean architecture",
    "scalable software systems",
    "backend systems",
    "developer infrastructure",
  ],
};

export const WebSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cipher Unit",
  url: siteUrl,
  description:
    "CipherUnit — an open-source engineering collective building modern developer tools, scalable systems, and clean architecture frameworks.",
  inLanguage: ["en-US", "fa-IR"],
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const BreadcrumbJsonLdHome = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

export const BreadcrumbJsonLdContact = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${siteUrl}/contact`,
    },
  ],
};

export const BreadcrumbJsonLdGithub = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "GitHub",
      item: `${siteUrl}/github`,
    },
  ],
};

export const FAQJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Cipher Unit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cipher Unit (CipherUnit) is an open-source engineering collective focused on building secure, scalable, and high-quality software systems and developer tools.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of tools does CipherUnit build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CipherUnit builds modern developer tools, open-source backend systems, clean architecture frameworks, and scalable software infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Is Cipher Unit an open source group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cipher Unit is an open-source group. Everything CipherUnit builds is open source and available for the developer community.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact CipherUnit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `You can contact CipherUnit via email at ${siteConfig.email} or through GitHub at github.com/cipherunits.`,
      },
    },
  ],
};

type JsonLdProps = {
  id: string;
  data: Record<string, unknown>;
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

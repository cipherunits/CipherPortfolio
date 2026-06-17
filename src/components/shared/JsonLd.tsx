export const OrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cipher Unit",
  alternateName: ["CipherUnit", "CipherUnit Open Source"],
  url: "https://cipherunit.xyz",
  logo: "https://cipherunit.xyz/CipherUnit.png",
  image: "https://cipherunit.xyz/Hero.png",
  description:
    "CipherUnit is an open-source engineering collective focused on building secure, scalable, and high-quality software systems.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Cipher Unit Engineering Team",
    },
  ],
  sameAs: [
    "https://github.com/cipherunits",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "cipherunit.dev@gmail.com",
    contactType: "support",
    url: "https://cipherunit.xyz/contact",
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
  url: "https://cipherunit.xyz",
  description:
    "CipherUnit — an open-source engineering collective building modern developer tools, scalable systems, and clean architecture frameworks.",
  inLanguage: ["en-US", "fa-IR"],
  publisher: {
    "@id": "https://cipherunit.xyz/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://cipherunit.xyz/?q={search_term_string}",
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
      item: "https://cipherunit.xyz",
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
      item: "https://cipherunit.xyz",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://cipherunit.xyz/contact",
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
      item: "https://cipherunit.xyz",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "GitHub",
      item: "https://cipherunit.xyz/github",
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
        text: "You can contact CipherUnit via email at cipherunit.dev@gmail.com or through GitHub at github.com/cipherunits.",
      },
    },
  ],
};

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      id="jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

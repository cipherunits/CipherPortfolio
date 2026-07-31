const DEFAULT_SITE_URL = "https://cipherunit.xyz";
const DEFAULT_GITHUB = "https://github.com/cipherunits";
const DEFAULT_EMAIL = "cipherunit.dev@gmail.com";

/** Local fallbacks so OG/icons never resolve to empty strings. */
const DEFAULT_BRAND = {
  main: "/images/Hero.png",
  logo: "/images/CipherUnit.png",
  alt: "/images/CipherUnit.png",
} as const;

export const siteConfig = {
  name: "Cipher Unit",
  shortName: "CipherUnit",
  tagline: "Open-source developer tools & engineering collective",
  description:
    "CipherUnit is an open-source engineering collective focused on building secure, scalable, and high-quality software systems. Discover CipherUnit developer tools, clean architecture frameworks, and open-source backend systems.",
  url: process.env.SITE_NAME || DEFAULT_SITE_URL,
  email: process.env.CONTACT_EMAIL || DEFAULT_EMAIL,
  github: process.env.GITHUB_PAGE || DEFAULT_GITHUB,
  githubOrg: "cipherunits",

  docs: "https://cipherunits.github.io/CipherPortfolio/",
  /** Prefer INSTAGRAM_PAGE; keep Instageram_PAGE as legacy fallback. */
  instagram:
    process.env.INSTAGRAM_PAGE || process.env.Instageram_PAGE || "",
  brand: {
    main: process.env.NEXT_PUBLIC_BRAND_IMAGE_MAIN || DEFAULT_BRAND.main,
    logo: process.env.NEXT_PUBLIC_BRAND_IMAGE_LOGO || DEFAULT_BRAND.logo,
    alt: process.env.NEXT_PUBLIC_BRAND_IMAGE_ALT || DEFAULT_BRAND.alt,
  },
  googleVerification: process.env.GOOGLE_PUBLIC_KEY || "",
} as const;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") {
    return base;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function mailtoHref(email = siteConfig.email) {
  return `mailto:${email}`;
}

/** Shared Open Graph / Twitter image set used across pages. */
export function brandOgImages(alt?: string) {
  return [
    {
      url: siteConfig.brand.main,
      width: 1200,
      height: 630,
      alt:
        alt ||
        "CipherUnit Open Source Engineering Collective — Developer tools and scalable software systems",
      type: "image/png" as const,
    },
    {
      url: siteConfig.brand.alt,
      width: 1200,
      height: 630,
      alt: "CipherUnit Cipher Unit Logo — Open Source Developer Tools",
      type: "image/png" as const,
    },
  ];
}

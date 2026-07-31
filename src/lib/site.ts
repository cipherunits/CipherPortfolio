const DEFAULT_SITE_URL = "https://cipherunit.xyz";
const DEFAULT_GITHUB = "https://github.com/cipherunits";
const DEFAULT_EMAIL = "cipherunit.dev@gmail.com";

export const siteConfig = {
  name: "Cipher Unit",
  shortName: "CipherUnit",
  url: process.env.SITE_NAME || DEFAULT_SITE_URL,
  email: process.env.CONTACT_EMAIL || DEFAULT_EMAIL,
  github: process.env.GITHUB_PAGE || DEFAULT_GITHUB,
  /** Prefer INSTAGRAM_PAGE; keep Instageram_PAGE as legacy fallback. */
  instagram:
    process.env.INSTAGRAM_PAGE || process.env.Instageram_PAGE || "",
  brand: {
    main: process.env.NEXT_PUBLIC_BRAND_IMAGE_MAIN || "",
    logo: process.env.NEXT_PUBLIC_BRAND_IMAGE_LOGO || "",
    alt: process.env.NEXT_PUBLIC_BRAND_IMAGE_ALT || "",
  },
  googleVerification: process.env.GOOGLE_PUBLIC_KEY || "",
} as const;

export function mailtoHref(email = siteConfig.email) {
  return `mailto:${email}`;
}

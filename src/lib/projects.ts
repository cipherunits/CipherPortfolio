export type Project = {
  slug: string;
  imageUrl: string;
  tech: string;
  programmingLanguages: string[];
  title: string;
  description: string;
  buttonLive?: string;
  buttonDocs?: string;
  linkLive: string;
  linkDocs: string;
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projects: Project[] = [
  {
    slug: "fusion-framework",
    imageUrl: "/images/logo-fusion.png",
    tech: "Multi-language • Framework • Tooling",
    programmingLanguages: ["Makefile", "TypeScript", "Rust"],
    title: "Fusion Framework",
    description:
      "One framework, multiple languages, unlimited possibilities for modern application development — the core Fusion stack and orchestration layer.",
    linkLive: "https://github.com/cipherunits/fusion-framework",
    linkDocs: "https://fusion.cipherunit.xyz",
    buttonLive: "GitHub Repository",
    buttonDocs: "Documentation",
  },
  {
    slug: "cipher-token",
    imageUrl: "/images/cipher-token.png",
    tech: "Rust • Python • PyO3 • JWT • Cryptography",
    programmingLanguages: ["Rust", "Python"],
    title: "Cipher Token",
    description:
      "High-performance token and crypto utilities in Rust, with PyO3 Python bindings for secure JWT generation, validation, and cryptographic helpers.",
    linkLive: "https://github.com/cipherunits/CipherToken",
    linkDocs: "https://cipherunits.github.io/CipherToken/getting-started",
    buttonLive: "GitHub Repository",
    buttonDocs: "Documentation",
  },
  {
    slug: "cipher-scope",
    imageUrl: "/images/cipher-scope.png",
    tech: "TypeScript • Node.js • CLI • TOML",
    programmingLanguages: ["TypeScript"],
    title: "Cipher Scope",
    description:
      "Runtime visibility for modern applications. A terminal CLI that surfaces project context before you run anything — branded banner, env profile, package manager, and version from one config file.",
    linkLive: "https://github.com/cipherunits/CipherScope",
    linkDocs: "https://www.npmjs.com/package/cipher-scope",
    buttonLive: "GitHub Repository",
    buttonDocs: "npm Package",
  },
  {
    slug: "npm-mirror",
    imageUrl: "/images/npm-mirrors.png",
    tech: "Npm • Docker Compose • Offline Package Cache",
    programmingLanguages: ["Docker", "Shell", "Makefile"],
    title: "NPM Mirror",
    description:
      "Internal npm package cache and mirror for unreliable networks. Spin up a local offline registry with Docker Compose before connectivity drops.",
    linkLive: "https://github.com/cipherunits/npm-mirror",
    linkDocs: "https://cipherunits.github.io/npm-mirror/",
    buttonLive: "GitHub Repository",
    buttonDocs: "Documentation",
  },
];

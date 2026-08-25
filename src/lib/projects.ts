export type Project = {
  slug: string;
  imageUrl: string;
  tech: string;
  programmingLanguages: string[];
  title: string;
  description: string;
  /** Site-owned body copy for SEO when GitHub README is thin or missing. */
  overview?: string;
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
    overview:
      "Fusion Framework is Cipher Unit's multi-language application stack for building modern developer tools and product backends. It ties together orchestration, tooling, and shared conventions so teams can ship across TypeScript, Rust, and related Fusion packages from one coherent foundation.\n\nUse Fusion when you want a consistent project structure, shared docs at fusion.cipherunit.xyz, and an open-source core maintained by the Cipher Unit (CipherUnit) engineering collective. The framework repository is the entry point to the wider Fusion ecosystem including GUI, CLI tooling, docs, and snippets.",
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
    overview:
      "Cipher Token is Cipher Unit's open-source token engine for secure JWT generation, validation, rotation, and cryptographic helpers. The Rust core delivers high performance, while PyO3 bindings make the same APIs available to Python services and tooling.\n\nEngineers use Cipher Token when they need a focused, auditable library for token lifecycle management inside backends, CLIs, and developer infrastructure — without pulling in a heavyweight auth platform.",
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
    overview:
      "Cipher Scope gives developers instant runtime visibility in the terminal. From a single cipherscope.toml file it prints a branded banner plus detected project facts — environment profile, package manager, and version — before you run builds or services.\n\nInstall it from npm as cipher-scope and use it in local workflows or CI to make project context obvious at a glance. Cipher Scope is maintained by Cipher Unit as a lightweight open-source CLI for modern TypeScript and Node.js repositories.",
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
    overview:
      "NPM Mirror is Cipher Unit's offline-friendly npm registry cache built for teams on unreliable networks. With Docker Compose you can stand up a local Verdaccio-based proxy that caches packages from npmjs.org before connectivity drops.\n\nIt helps reduce repeated downloads, keep installs moving during outages, and give internal teams a dependable package mirror. Documentation and Compose setup live with the open-source cipherunits/npm-mirror repository.",
    linkLive: "https://github.com/cipherunits/npm-mirror",
    linkDocs: "https://cipherunits.github.io/npm-mirror/",
    buttonLive: "GitHub Repository",
    buttonDocs: "Documentation",
  },
];

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

export const projects: Project[] = [
  {
    slug: "cipher-token",
    imageUrl: "/images/cipher-token.png",
    tech: "Rust • Python • PyO3 • JWT • Cryptography",
    programmingLanguages: ["Rust", "Python"],
    title: "Cipher Token",
    description:
      "A high-performance Rust library for secure JWT token generation, validation and cryptographic utilities with Python bindings powered by PyO3.",
    linkLive: "https://github.com/cipherunits/CipherToken",
    linkDocs: "https://cipherunits.github.io/CipherToken/getting-started",
    buttonLive: "GitHub Repository",
    buttonDocs: "Documentation",
  },
  {
    slug: "npm-mirror",
    imageUrl: "/images/npm-mirrors.png",
    tech: "Npm • Docker Compose • Makefile • Offline Package Cache",
    programmingLanguages: ["Docker", "Shell", "Makefile"],
    title: "NPM Mirror",
    description:
      "Create a local offline mirror of npm packages before losing internet connectivity. Built with Docker, Docker Compose and Makefile for reliable package caching.",
    linkLive: "https://github.com/cipherunits/npm-mirror",
    linkDocs: "https://cipherunits.github.io/npm-mirror/",
    buttonLive: "GitHub Repository",
    buttonDocs: "Documentation",
  },
];

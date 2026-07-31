import type { Metadata } from "next";

import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import Projects from "@/components/landing/projects/components/Projects";

import { siteConfig } from "@/lib/site";

const SITE_URL = siteConfig.url;
const PAGE_URL = `${SITE_URL}/projects`;

const OG_IMAGE =
    "https://res.cloudinary.com/djc6gxgjc/image/upload/q_auto/f_auto/v1781272725/CipherUnit_gkjt2m.jpg";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title:
        "Open Source Projects | Cipher Unit - Rust, Python, Docker & Developer Tools",

    description:
        "Explore Cipher Unit's open-source software projects, including Rust libraries, Python packages, Docker utilities, cryptography tools and production-ready developer solutions.",

    keywords: [
        "Cipher Unit",
        "Cipher Unit Projects",
        "Open Source",
        "Open Source Projects",
        "Developer Tools",
        "Software Engineering",
        "Rust",
        "Python",
        "PyO3",
        "JWT",
        "Cryptography",
        "Docker",
        "Docker Compose",
        "NPM Mirror",
        "Cipher Token",
        "Offline NPM",
        "GitHub",
        "CLI",
        "Developer Libraries",
        "Open Source Software",
    ],

    category: "Technology",

    classification: "Software Development",

    alternates: {
        canonical: PAGE_URL,
    },

    authors: [
        {
            name: "Cipher Unit",
            url: SITE_URL,
        },
    ],

    creator: "Cipher Unit",

    publisher: "Cipher Unit",

    robots: {
        index: true,
        follow: true,
        nocache: false,

        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "website",

        locale: "en_US",

        url: PAGE_URL,

        siteName: "Cipher Unit",

        title: "Cipher Unit Open Source Projects",

        description:
            "Browse open-source developer tools, Rust libraries, Python packages and Docker utilities built by Cipher Unit.",

        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "Cipher Unit Open Source Projects",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Cipher Unit Open Source Projects",

        description:
            "Browse open-source developer tools and engineering projects created by Cipher Unit.",

        images: [OG_IMAGE],
    },

    referrer: "origin-when-cross-origin",
};

export default function ProjectsPage() {
    const jsonLd = {
        "@context": "https://schema.org",

        "@graph": [
            {
                "@type": "WebSite",

                "@id": SITE_URL,

                url: SITE_URL,

                name: "Cipher Unit",
            },

            {
                "@type": "WebPage",

                "@id": PAGE_URL,

                url: PAGE_URL,

                name: "Cipher Unit Projects",

                description:
                    "Browse all open source projects developed by Cipher Unit.",

                inLanguage: "en",

                isPartOf: {
                    "@id": SITE_URL,
                },
            },

            {
                "@type": "BreadcrumbList",

                itemListElement: [
                    {
                        "@type": "ListItem",

                        position: 1,

                        name: "Home",

                        item: SITE_URL,
                    },

                    {
                        "@type": "ListItem",

                        position: 2,

                        name: "Projects",

                        item: PAGE_URL,
                    },
                ],
            },

            {
                "@type": "ItemList",

                name: "Cipher Unit Open Source Projects",

                description:
                    "Collection of open-source software developed by Cipher Unit.",

                numberOfItems: 2,

                itemListOrder:
                    "https://schema.org/ItemListOrderAscending",

                itemListElement: [
                    {
                        "@type": "ListItem",

                        position: 1,

                        item: {
                            "@type": "SoftwareSourceCode",

                            name: "Cipher Token",

                            codeRepository:
                                "https://github.com/cipherunits/CipherToken",

                            url:
                                "https://github.com/cipherunits/CipherToken",

                            programmingLanguage: [
                                "Rust",
                                "Python",
                            ],

                            author: {
                                "@type": "Organization",
                                name: "Cipher Unit",
                            },
                        },
                    },

                    {
                        "@type": "ListItem",

                        position: 2,

                        item: {
                            "@type": "SoftwareSourceCode",

                            name: "NPM Mirror",

                            codeRepository:
                                "https://github.com/cipherunits/npm-mirror",

                            url:
                                "https://github.com/cipherunits/npm-mirror",

                            programmingLanguage: [
                                "Docker",
                                "Shell",
                                "Makefile",
                            ],

                            author: {
                                "@type": "Organization",
                                name: "Cipher Unit",
                            },
                        },
                    },
                ],
            },
        ],
    };

    return (
        <main className="mx-auto my-8 max-w-6xl p-6 md:my-22">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <header className="mb-16 space-y-3">
                <NamePage />
                <SubNamePage text="Explore all open-source projects developed by Cipher Unit." />
            </header>

            <Projects view={false} />
        </main>
    );
}
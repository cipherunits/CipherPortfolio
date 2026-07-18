import NamePage from "@/components/shared/NamePage";
import { Metadata } from "next";
import SubNamePage from "@/components/shared/SubNamePage";
import Projects from "@/components/landing/projects/components/Projects";

const SITE_URL = "https://cipherunit.com";
const PAGE_URL = `${SITE_URL}/projects`;
const OG_IMAGE = "https://res.cloudinary.com/djc6gxgjc/image/upload/q_auto/f_auto/v1781272725/CipherUnit_gkjt2m.jpg";

export const metadata: Metadata = {
    title: "Open Source Projects | Cipher Unit — NPM Mirror, Cipher Token & More",
    description:
        "Explore Cipher Unit's open-source developer tools, including NPM Mirror and Cipher Token, plus other libraries and applications built and maintained by the Cipher Unit engineering collective.",
    keywords: [
        "Cipher Unit projects",
        "Npm Mirror",
        "Cipher Token",
        "open source developer tools",
        "open source projects list",
        "software engineering collective",
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "Open Source Projects | Cipher Unit",
        description:
            "Browse Cipher Unit's open-source tools — including NPM Mirror and Cipher Token — built by the Cipher Unit collective.",
        url: PAGE_URL,
        siteName: "Cipher Unit",
        type: "website",
        locale: "en_US",
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
        title: "Open Source Projects | Cipher Unit",
        description:
            "Browse Cipher Unit's open-source tools — including NPM Mirror and Cipher Token — built by the Cipher Unit collective.",
        images: [OG_IMAGE],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },
};

export default function ProjectsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Cipher Unit Open Source Projects",
        description:
            "List of open-source developer tools and projects by Cipher Unit, including NPM Mirror and Cipher Token.",
        url: PAGE_URL,
        isPartOf: {
            "@type": "WebSite",
            name: "Cipher Unit",
            url: SITE_URL,
        },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                        "@type": "SoftwareSourceCode",
                        name: "NPM Mirror",
                        url: `${SITE_URL}/projects/npm-mirror`,
                    },
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                        "@type": "SoftwareSourceCode",
                        name: "Cipher Token",
                        url: `${SITE_URL}/projects/cipher-token`,
                    },
                },
            ],
        },
    };

    return (
        <div className="max-w-6xl mx-auto p-6 my-8 md:my-22">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="space-y-3 mb-16">
                <NamePage />
                <SubNamePage text="List of my projects" />
            </div>
            <Projects view={false} />
        </div>
    );
}
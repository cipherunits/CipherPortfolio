import ContactBox from "@/components/contacts/ContactBox";
import ContactMedia from "@/components/contacts/ContactMedia";
import ContactText from "@/components/contacts/ContactText";
import NamePage from "@/components/shared/NamePage";
import SubNamePage from "@/components/shared/SubNamePage";
import type { Metadata } from "next";

import {
  BreadcrumbJsonLdContact,
  JsonLd,
} from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact CipherUnit | Open Source Software Engineers & Development Team",
  },

  description:
    "Contact CipherUnit for open-source software development, engineering collaborations, technical consulting, project partnerships, business inquiries, GitHub contributions, and developer support.",

  keywords: [
    "Contact CipherUnit",
    "Cipher Unit",
    "CipherUnit contact",
    "Open Source Developers",
    "Software Engineering",
    "Development Team",
    "GitHub Contributors",
    "Technical Support",
    "Software Consulting",
    "Project Collaboration",
    "Engineering Team",
    "Hire Developers",
    "Web Development",
    "Next.js Developers",
    "React Developers",
    "TypeScript Experts",
    "Open Source Community",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact CipherUnit | Open Source Engineering Collective",
    description:
      "Reach the CipherUnit engineering team for collaborations, open-source contributions, consulting, partnerships, and technical discussions.",
    url: "https://cipherunit.xyz/contact",
    siteName: "CipherUnit",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Contact CipherUnit | Open Source Engineering Collective",
    description:
      "Connect with CipherUnit for software engineering, open-source collaboration, consulting, and technical inquiries.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ContactPage() {
  return (
    <main
      className="mx-auto my-8 max-w-6xl p-6 md:my-22"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <JsonLd data={BreadcrumbJsonLdContact} />

      <header className="space-y-3">
        <NamePage />
        <SubNamePage text="Contact CipherUnit" />
      </header>

      <section className="mt-10 flex flex-col items-center justify-between gap-10 md:flex-row">
        <ContactText />
        <ContactBox />
      </section>

      <ContactMedia />
    </main>
  );
}
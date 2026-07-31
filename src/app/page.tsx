import AboutMe from "@/components/landing/about-me/AboutMe";
import Hero from "@/components/landing/hero/Hero";
import Contact from "@/components/landing/contact/Contact";
import Overview from "@/components/landing/overview/Overview";
import Skills from "@/components/landing/skills/Skills";
import Projects from "@/components/landing/projects/components/Projects";
import Team from "@/components/landing/team/Team";
import Faq from "@/components/landing/faq/Faq";
import {
  BreadcrumbJsonLdHome,
  FAQJsonLd,
  HomePageJsonLd,
  JsonLd,
} from "@/components/shared/JsonLd";
import type { Metadata } from "next";
import { brandOgImages, siteConfig } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute:
      "Cipher Unit (CipherUnit) | Open-Source Developer Tools & Engineering Collective",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Cipher Unit — Open-Source Developer Tools & Engineering Systems",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
    images: brandOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cipher Unit — CipherUnit Open Source Developer Tools and Engineering Collective",
    description: siteConfig.description,
    images: [siteConfig.brand.main],
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <JsonLd id="jsonld-home-webpage" data={HomePageJsonLd} />
      <JsonLd id="jsonld-breadcrumb-home" data={BreadcrumbJsonLdHome} />
      <JsonLd id="jsonld-faq" data={FAQJsonLd} />
      <Hero />
      <Overview />
      <Projects view={true} />
      <Skills />
      <Team preview />
      <AboutMe />
      <Faq />
      <Contact />
    </main>
  );
}

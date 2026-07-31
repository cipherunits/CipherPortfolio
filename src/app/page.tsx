import AboutMe from "@/components/landing/about-me/AboutMe";
import Hero from "@/components/landing/hero/Hero";
import Contact from "@/components/landing/contact/Contact";
import Overview from "@/components/landing/overview/Overview";
import Skills from "@/components/landing/skills/Skills";
import Projects from "@/components/landing/projects/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Projects view={true} />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
}

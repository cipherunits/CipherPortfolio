import AboutMe from "@/components/landing/about-me/AboutMe";
import Hero from "@/components/landing/hero/Hero";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Co1ntact from "@/components/landing/contact/Contact";
import Overview from "@/components/landing/overview/Overview";
import Skils from "@/components/landing/skils/Skils";
import Projects from "@/components/landing/projects/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Projects />
      <Skils />
      <AboutMe />
      <Co1ntact />
    </>
  );
}

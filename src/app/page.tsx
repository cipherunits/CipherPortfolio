import AboutMe from "@/components/about-me/AboutMe";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Co1ntact from "@/components/contacts/Contact";
import Overview from "@/components/overview/Overview";
import Skils from "@/components/skils/Skils";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Projects />
      <Skils />
      <AboutMe />
      <Co1ntact />
      <Footer />
    </>
  );
}

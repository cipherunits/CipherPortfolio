import AboutMe from "@/components/about-me/AboutMe";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Co1ntact from "@/components/contacts/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Co1ntact />
      <Footer />
    </>
  );
}

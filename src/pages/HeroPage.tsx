import { Contact } from "../components/ Contact";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Projets } from "../components/Projets";

export const HeroPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projets />
      <Contact />
      <Footer />
    </>
  );
};

import { Contact } from "../components/ Contact";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Projets from "../components/Projets";

export const AboutPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <Projets />
      <div className="background-container">
        <Contact />
        <Footer />
      </div>
    </>
  );
};

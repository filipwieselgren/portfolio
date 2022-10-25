import { Contact } from "../components/ Contact";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Resume } from "../components/Resume";

export const ResumePage = () => {
  return (
    <>
      <Navbar />
      <Resume />
      <div className="background-container">
        <Contact />
        <Footer />
      </div>
    </>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/general/App.css";
import "./css/navbar/navbarMobile.css";
import "./css/navbar/navbarDesktop.css";
import "./css/hero/heroMobile.css";
import "./css/hero/heroDesktop.css";
import "./css/projects/projectsMobile.css";
import "./css/projects/projectsDesktop.css";
import "./css/contact/contactMobile.css";
import "./css/contact/contactDesktop.css";
import "./css/footer/footerMobile.css";
import "./css/footer/footerDesktop.css";
import "./css/about/aboutDesktop.css";
import "./css/about/aboutMobile.css";
import "./css/resume/resumeMobile.css";
import "./css/resume/resumeDesktop.css";
import { HeroPage } from "./pages/HeroPage";
import { AboutPage } from "./pages/AboutPage";
import { Projets } from "./components/Projets";
import { Contact } from "./components/ Contact";
import { ResumePage } from "./pages/ResumePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />}></Route>
          <Route path="/about" element={<HeroPage />}></Route>
          <Route path="/projects" element={<Projets />}></Route>
          <Route path="/contact" element={<HeroPage />}></Route>
          <Route path="/resume" element={<ResumePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

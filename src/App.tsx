import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/general/App.css";
import "./css/navbar/navbarMobile.css";
import "./css/navbar/navbarDesktop.css";
import "./css/hero/heroMobile.css";
import "./css/hero/heroDesktop.css";
import { HeroPage } from "./pages/HeroPage";
import { AboutPage } from "./pages/AboutPage";
import { Projets } from "./components/Projets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/projects" element={<Projets />}></Route>
          {/* <Route path="/prodjects" element={<FooterPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

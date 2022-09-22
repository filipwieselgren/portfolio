import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HeroPage } from "./pages/HeroPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          {/* <Route path="/prodjects" element={<FooterPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

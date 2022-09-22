import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HeroPage } from "./pages/HeroPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />}></Route>
          {/* <Route path="/prodjects" element={<ProdjectPage />}></Route> */}
          {/* <Route path="/prodjects" element={<FooterPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

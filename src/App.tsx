import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Styling } from "./components/Styling";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Styling />}>
            <Route path="/" element={<Navbar />}></Route>
            <Route path="/" element={<Hero />}></Route> */}
      <Navbar />
      <Hero />
      {/*  <Main /> */}
      {/* </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

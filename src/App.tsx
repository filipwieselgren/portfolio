import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { getFromLocal } from "./local";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*  <Main /> */}
    </>
  );
}

export default App;

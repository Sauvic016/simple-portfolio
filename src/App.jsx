import React from "react";
import "./index.css";
import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills";

import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />

        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;

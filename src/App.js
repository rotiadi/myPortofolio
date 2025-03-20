import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutMe from "./components/AbouteMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <AboutMe />
        <Projects />
        <ContactMe />
        {/*  <ScrollToTop /> */}
      </div>
    </div>
  );
}

export default App;

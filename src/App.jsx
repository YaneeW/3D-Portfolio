import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import Skill from "./components/Skill";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="app">
      <ThreeBackground />
      <ThreeBackground />
      <ThreeBackground />
      <div className="portdetail">
        <Navbar />
        <HeaderSection />
        <AboutMe />
        {/* <Skill /> */}
      </div>
    </div>
  );
}

export default App;

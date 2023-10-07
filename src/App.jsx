import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="app">
      <div className="three_bg">
        <Navbar />
        <HeaderSection />
        <Skill />
        {/* <ThreeBackground />
        <ThreeBackground /> */}
      </div>
    </div>
  );
}

export default App;
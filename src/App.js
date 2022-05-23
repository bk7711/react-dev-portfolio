import React from "react";
import "./App.css";
import Nav from "./components/Header/index.js";
import Main from "./components/Nav/index.js";
import Experience from "./components/Experience/index.js";
import Portfolio from "./components/Portfolio/index.js";
import Education from "./components/Education/index.js";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Experience />
      <Portfolio />
      <Education />
    </div>
  );
}

export default App;

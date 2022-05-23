import React from "react";
import "./Header.css";

const Nav = () => {
  return (
    <header className="gradient">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="intro">
        <img
          src={require("../../assets/images/headshot.jpg")}
          id="headshot"
          alt="Carolyn Blackwell"
        />
        <h1>Carolyn Blackwell</h1>
        <h2>Professional, Manager, Developer</h2>
      </div>
    </header>
  );
};

export default Nav;

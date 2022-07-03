import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  // const [languages] = useState([
  //   {
  //     name: "html",
  //     description: "Projects completed with HTML, CSS, and JavaScript",
  //   },
  //   {
  //     name: "node",
  //     description: "Projects completed with Node.js",
  //   },
  //   {
  //     name: "mysql",
  //     description: "Projects completed with a MySql database",
  //   },
  //   {
  //     name: "mongo",
  //     description: "Projects completed with MongoDB",
  //   },
  //   {
  //     name: "mern",
  //     description: "Projects completed React or a complete MERN stack",
  //   },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <section id="portfolio" className="components">
      <div>
        <h2>Portfolio</h2>
        <ul className="category">
          <li className="categories">CATEGORIES</li>
          <li className="categories">
            <a href="#html">HTML/CSS/JS</a>
          </li>
          <li className="categories">
            <a href="#node">Node.js</a>
          </li>
          <li className="categories">
            <a href="#mysql">MySQL</a>
          </li>
          <li className="categories">
            <a href="#mongo">MongoDB</a>
          </li>
          <li className="categories">
            <a href="#mern">MERN Stack</a>
          </li>
        </ul>
      </div>
      <div className="portfolio">
        <div className="sites" id="port-one">
          <button className="btn">
            <a href="https://bk7711.github.io/runbuddy/">View website</a>
          </button>
          <img
            className="image"
            src={require("../../assets/images/html/runbuddy.png")}
            alt="Run Buddy"
          />
          <div className="card-body">
            <h3 className="title">Run Buddy</h3>
            <a className="github" href="https://github.com/bk7711/runbuddy">
              Github Repository
            </a>
          </div>
        </div>
        <div className="sites" id="port-two">
          <img
            className="image"
            src={require("../../assets/images/html/weather.png")}
            alt="Weather app"
          />
          <button className="btn">
            <a href="https://bk7711.github.io/weatherSearch/">View website</a>
          </button>
          <div className="card-body">
            <h3 className="title">Weather Dashboard</h3>
            <a
              className="github"
              href="https://github.com/bk7711/weatherSearch"
            >
              Github Repository
            </a>
          </div>
        </div>
        <div className="sites" id="port-three">
          <img
            className="image"
            src={require("../../assets/images/mainpage.png")}
            alt="weather dashboard"
          />
          <button className="btn">
            <a href="https://trb5160.github.io/Project-1/">View website</a>
          </button>
          <div className="card-body">
            <h3 className="title">Travel Guide</h3>
            <a
              className="github"
              href="https://github.com/trb5160/Project-1.git"
            >
              Github Repository
            </a>
          </div>
        </div>
        <div className="sites" id="port-four">
          <button className="btn">
            <a href="https://bk7711.github.io/CodeQuiz/">View website</a>
          </button>
          <img
            className="image"
            src={require("../../assets/images/webpage.png")}
            alt="Online Quiz"
          />
          <div className="card-body">
            <h3 className="title">Javascript Quiz</h3>
            <a className="github" href="https://github.com/bk7711/CodeQuiz">
              Github Repository
            </a>
          </div>
        </div>
        <div className="sites" id="port-five">
          <button className="btn">
            <a href="https://bk7711.github.io/password/">View website</a>
          </button>
          <img
            className="image"
            src={require("../../assets/images/html/password.png")}
            alt="Password Generator"
          />
          <div className="card-body">
            <h3 className="title">Password Generator</h3>
            <a className="github" href="https://github.com/bk7711/password">
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

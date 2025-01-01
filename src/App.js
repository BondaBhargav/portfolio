import React from "react";
import { Outlet } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="">
        <Outlet /> {/* Render the active route */}
      </div>
    </div>
  );
};
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navborder fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            className="profile-img"
            src="https://res.cloudinary.com/dtc4lwuck/image/upload/v1734971839/vitamin_p9cluy.png"
            alt="profile"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default App;
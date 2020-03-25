import React, { useState } from "react";
import { scrollTo } from "../custom/functions";
import { homeURL } from "../config.json";
import "../styles/Navbar.css";

type NavbarProps = {
  homePage: boolean;
};

// Scrolls to the desired section of the home page
const handleNavClick = (targetId: string) => {
  if (targetId === "home") {
    window.location.href = homeURL;
  } else {
    scrollTo(targetId, 500);
  }
};

const Navbar: React.FC<NavbarProps> = ({ homePage }) => {
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  window.onscroll = () => {
    setScrollPos(window.scrollY);
  };

  return (
    <div
      className="navbar-container"
      style={{
        color: scrollPos > 0 ? "black" : "white",
        backgroundColor: scrollPos > 0 ? "white" : "transparent"
      }}
    >
      <div className="leading-navbar-items">
        <div
          className={`navbar-item ${
            scrollPos > 0 ? "not-top-of-page" : "top-of-page"
          }`}
          style={{ display: homePage ? "none" : "inline-block" }}
          onClick={() => handleNavClick("home")}
        >
          Home
        </div>
      </div>
      <div
        className="trailing-navbar-items"
        style={{ display: !homePage ? "none" : "flex" }}
      >
        <div
          className={`navbar-item ${
            scrollPos > 0 ? "not-top-of-page" : "top-of-page"
          }`}
          onClick={() => handleNavClick("about-container")}
        >
          About
        </div>
        <div
          className={`navbar-item ${
            scrollPos > 0 ? "not-top-of-page" : "top-of-page"
          }`}
          onClick={() => handleNavClick("skills-container")}
        >
          Skills
        </div>
        <div
          className={`navbar-item ${
            scrollPos > 0 ? "not-top-of-page" : "top-of-page"
          }`}
          onClick={() => handleNavClick("experience-container")}
        >
          Work Experience
        </div>
        <div
          className={`navbar-item ${
            scrollPos > 0 ? "not-top-of-page" : "top-of-page"
          }`}
          onClick={() => handleNavClick("projects-container")}
        >
          Projects
        </div>
        <div
          className={`navbar-item ${
            scrollPos > 0 ? "not-top-of-page" : "top-of-page"
          }`}
          onClick={() => handleNavClick("contact-container")}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;

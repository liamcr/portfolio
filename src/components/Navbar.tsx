import React, { useState } from "react";
import { scrollTo, getVh } from "../custom/functions";
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

  const isInSection = (sectionClassName: string) => {
    const elements = document.getElementsByClassName(sectionClassName);

    if (elements.length === 0) {
      return false;
    }

    const element = elements[0] as HTMLElement;

    const bottomOfWindow =
      Math.ceil(
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) + window.innerHeight
      ) === document.documentElement.offsetHeight;

    if (bottomOfWindow && sectionClassName === "contact-container") {
      return true;
    } else if (bottomOfWindow && sectionClassName === "projects-container") {
      return false;
    } else if (
      scrollPos > element.offsetTop - getVh(10) - 1 &&
      scrollPos < element.offsetHeight + element.offsetTop - getVh(10) - 1
    ) {
      return true;
    }

    return false;
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
          className="navbar-item"
          style={{ display: homePage ? "none" : "inline-block" }}
          onClick={() => handleNavClick("home")}
        >
          Home
        </div>
      </div>
      <div className="trailing-navbar-items">
        <div
          className={`navbar-item ${
            isInSection("about-container") ? "current-section" : ""
          }`}
          onClick={() => handleNavClick("about-container")}
        >
          About
        </div>
        <div
          className={`navbar-item ${
            isInSection("skills-container") ? "current-section" : ""
          }`}
          onClick={() => handleNavClick("skills-container")}
        >
          Skills
        </div>
        <div
          className={`navbar-item ${
            isInSection("experience-container") ? "current-section" : ""
          }`}
          onClick={() => handleNavClick("experience-container")}
        >
          Work Experience
        </div>
        <div
          className={`navbar-item ${
            isInSection("projects-container") ? "current-section" : ""
          }`}
          onClick={() => handleNavClick("projects-container")}
        >
          Projects
        </div>
        <div
          className={`navbar-item ${
            isInSection("contact-container") ? "current-section" : ""
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

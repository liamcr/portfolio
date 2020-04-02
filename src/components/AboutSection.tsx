import React from "react";
import SectionHeader from "./SectionHeader";
import AboutImage from "../assets/AboutImage.jpg";
import "../styles/AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <div className="about-container" id="about-container">
      <SectionHeader content="About Me" />
      <div className="about-content-container">
        <div className="about-image-container">
          <img className="about-image" src={AboutImage} alt="Me" />
        </div>
        <div className="about-content">
          Welcome to the site! I’m Liam Crocket, and I’m currently working
          through my 3rd year in the University of Guelph’s Software Engineering
          Program. I’m passionate about web development in particular, but am
          also interested in learning about all sorts of other development
          platforms, such as mobile or desktop development. On this site you can
          see how I’ve put this passion into my projects by visiting and
          checking them out below! I currently have 3 co-op terms worth of
          experience under my belt (plus 1 internship!), with responsibilities
          including systems development, full-stack web development, and machine
          learning engineering. I’m in the process of searching for an 8-month
          co-op position for the winter 2021 term, so if you’re interested feel
          free to reach out using any of the links listed in the contact section
          below!
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

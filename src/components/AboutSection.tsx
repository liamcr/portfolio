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
          Welcome to the site! I’m Liam Crocket, and I’m currently working full
          time as a Software Developer at Auvik Networks. I’m passionate about
          both web and backend development, with experience ranging from
          languages such as Typescipt and Go, to systems such as Docker and
          Kubernetes. On this site you can see how I’ve put this passion into my
          projects by visiting and checking them out below! I currently have
          over 3 years of professional experience, with responsibilities
          including systems development, full-stack web development, and machine
          learning engineering. I’m in the process of searching for a full-time
          position, so if you’re interested feel free to reach out using any of
          the links listed in the contact section below!
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

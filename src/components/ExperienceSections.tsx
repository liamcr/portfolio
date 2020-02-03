import React from "react";
import SectionHeader from "./SectionHeader";
import "../styles/ExperienceSection.css";

const ExperienceSection: React.FC = () => {
  return (
    <div className="experience-container" id="experience-container">
      <SectionHeader content="My Work Experience" />
      <div className="content-container"></div>
    </div>
  );
};

export default ExperienceSection;

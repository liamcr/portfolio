import React from "react";
import SectionHeader from "./SectionHeader";
import "../styles/SkillsSection.css";

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-container" id="skills-container">
      <SectionHeader content="My Skills" />
      <div className="skills-content-container"></div>
    </div>
  );
};

export default SkillsSection;

import React from "react";
import SectionHeader from "./SectionHeader";
import "../styles/ProjectsSection.css";

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-container" id="projects-container">
      <SectionHeader content="My Projects" />
      <div className="content-container"></div>
    </div>
  );
};

export default ProjectsSection;

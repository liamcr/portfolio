import React from "react";
import SectionHeader from "./SectionHeader";
import { featuredProjects } from "../custom/featuredProjects";
import "../styles/ProjectsSection.css";
import ProjectPreviewSection from "./ProjectPreviewSection";

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-container" id="projects-container">
      <SectionHeader content="My Projects" />
      <div className="projects-content-container">
        {featuredProjects.map((projectObj, index) => (
          <ProjectPreviewSection
            key={index}
            projectObj={projectObj}
            imageOnLeft={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

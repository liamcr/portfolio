import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { featuredProjects } from "../custom/featuredProjects";
import "../styles/ProjectsSection.css";
import ProjectPreviewSection from "./ProjectPreviewSection";
import { Button } from "@material-ui/core";

const ProjectsSection: React.FC = () => {
  const numProjects = featuredProjects.length;
  const [projectsShown, setProjectsShown] = useState(3);

  const onLoadMore = () => {
    setProjectsShown(Math.min(projectsShown + 3, numProjects));
  };

  return (
    <div className="projects-container" id="projects-container">
      <SectionHeader content="My Projects" />
      <div className="projects-content-container">
        {featuredProjects.slice(0, projectsShown).map((projectObj, index) => (
          <ProjectPreviewSection
            key={index}
            projectObj={projectObj}
            imageOnLeft={index % 2 === 1}
          />
        ))}
        {projectsShown < numProjects && (
          <div className="load-more-container">
            <Button color="primary" variant="outlined" onClick={onLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;

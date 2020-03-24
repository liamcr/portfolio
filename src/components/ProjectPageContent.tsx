import React from "react";
import { FullProjectObj } from "../custom/types";
import TechnologyPreview from "./TechnologyPreview";
import { Button } from "@material-ui/core";
import { OpenInNew } from "@material-ui/icons";
import "../styles/ProjectPageContent.css";

type ProjectPageContentProps = {
  project: FullProjectObj;
};

const ProjectPageContent: React.FC<ProjectPageContentProps> = ({ project }) => {
  const handleLink = (url: string) => {
    window.open(url);
  };

  return (
    <div className="project-page-content-container">
      <div className="project-page-header">{project.name}</div>
      <div className="project-page-subtitle">{project.date}</div>
      <div className="project-preview-technologies-container">
        {project.technologies.map((technology, index) => (
          <TechnologyPreview key={index} technologyID={technology} />
        ))}
      </div>
      {project.sections.map((section, index) => (
        <div className="project-section" key={index}>
          <div className="project-section-header">{section.header}</div>
          <div className="project-section-body">
            {section.bodyParagraphs.map((paragraph, index) => (
              <div className="project-section-body-paragraph">{paragraph}</div>
            ))}
          </div>
        </div>
      ))}
      <div className="project-buttons">
        <Button
          color="primary"
          onClick={() => handleLink(project.url)}
          endIcon={<OpenInNew />}
        >
          Live Demo
        </Button>
        <Button
          color="primary"
          onClick={() => handleLink(project.repoURL)}
          endIcon={<OpenInNew />}
        >
          Visit Repo
        </Button>
      </div>
    </div>
  );
};

export default ProjectPageContent;

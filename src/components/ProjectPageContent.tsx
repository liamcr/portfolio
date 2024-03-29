import React from "react";
import { FullProjectObj } from "../custom/types";
import TechnologyPreview from "./TechnologyPreview";
import { Button, useMediaQuery } from "@material-ui/core";
import { OpenInNew } from "@material-ui/icons";
import "../styles/ProjectPageContent.css";

type ProjectPageContentProps = {
  project: FullProjectObj;
};

const ProjectPageContent: React.FC<ProjectPageContentProps> = ({ project }) => {
  const handleLink = (url: string) => {
    window.open(url);
  };

  const isSmallScreen = useMediaQuery("(max-width: 700px)");

  return (
    <div className="project-page-content-container">
      <img
        src={project.icon}
        alt="Project Icon"
        className="project-icon"
        style={{
          right: isSmallScreen ? "5%" : "20%",
        }}
      />
      <div className="project-page-header">{project.name}</div>
      <div className="project-page-subtitle">{project.date}</div>
      <div className="project-preview-technologies-container">
        {project.technologies
          .slice(0, isSmallScreen ? 2 : undefined)
          .map((technology, index) => (
            <TechnologyPreview key={index} technologyID={technology} />
          ))}
      </div>
      {project.sections.map((section, index) => (
        <div className="project-section" key={index}>
          <div className="project-section-header">{section.header}</div>
          <div className="project-section-body">
            {section.bodyParagraphs.map((paragraph, index) => (
              <div className="project-section-body-paragraph" key={index}>
                {paragraph}
              </div>
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
          {project.backendRepoURL !== undefined
            ? "Visit Frontend Repo"
            : "Visit Repo"}
        </Button>
        {project.backendRepoURL && (
          <Button
            color="primary"
            onClick={() =>
              handleLink(project.backendRepoURL ? project.backendRepoURL : "#")
            }
            endIcon={<OpenInNew />}
          >
            Visit Backend Repo
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectPageContent;

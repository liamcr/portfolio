import React from "react";
import { ProjectObj } from "../custom/types";
import { Button } from "@material-ui/core";
import "../styles/ProjectPreviewSection.css";
import TechnologyPreview from "./TechnologyPreview";
import { OpenInNew } from "@material-ui/icons";

type ProjectPreviewProps = {
  projectObj: ProjectObj;
  imageOnLeft: boolean;
};

const ProjectPreviewSection: React.FC<ProjectPreviewProps> = ({
  projectObj,
  imageOnLeft
}) => {
  const handleLink = (url: string) => {
    window.open(url);
  };

  return (
    <div className="project-preview-container">
      {imageOnLeft && (
        <div className="project-preview-image-container">
          <img
            className="project-preview-image"
            src={projectObj.imageReference}
            alt={projectObj.title}
          />
        </div>
      )}
      <div
        className="project-preview-content"
        style={{
          padding: `0 ${imageOnLeft ? "0" : "48px"} 0 ${
            imageOnLeft ? "48px" : "0"
          }`
        }}
      >
        <div className="project-preview-header">{projectObj.title}</div>
        <div className="project-preview-date">{projectObj.date}</div>
        <div className="project-preview-technologies-container">
          {projectObj.technologies.map((technology, index) => (
            <TechnologyPreview key={index} technologyID={technology} />
          ))}
        </div>
        <div className="project-preview-description">
          {projectObj.description}
        </div>
        <div className="project-preview-buttons">
          <Button color="primary" href={projectObj.projectPageURL}>
            Learn More
          </Button>
          <Button
            color="primary"
            onClick={() => handleLink(projectObj.url)}
            endIcon={<OpenInNew />}
          >
            Live Demo
          </Button>
          {projectObj.repoURL !== "" && (
            <Button
              color="primary"
              onClick={() => handleLink(projectObj.repoURL)}
              endIcon={<OpenInNew />}
            >
              Visit Repo
            </Button>
          )}
        </div>
      </div>
      {!imageOnLeft && (
        <div className="project-preview-image-container">
          <img
            className="project-preview-image"
            src={projectObj.imageReference}
            alt={projectObj.title}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectPreviewSection;

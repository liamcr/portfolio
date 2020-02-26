import React from "react";
import { ProjectObj } from "../custom/types";
import { Button } from "@material-ui/core";
import "../styles/ProjectPreviewSection.css";
import TechnologyPreview from "./TechnologyPreview";

type ProjectPreviewProps = {
  projectObj: ProjectObj;
  imageOnLeft: boolean;
};

const ProjectPreviewSection: React.FC<ProjectPreviewProps> = ({
  projectObj,
  imageOnLeft
}) => {
  return (
    <div className="project-preview-container">
      {imageOnLeft && (
        <img
          className="project-preview-image"
          src={projectObj.imageReference}
          alt={projectObj.title}
        />
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
          {/* <Button disabled>Learn More</Button> */}
          <Button color="primary" href={projectObj.url}>
            Live Demo
          </Button>
          <Button color="primary" href={projectObj.repoURL}>
            Visit Repo
          </Button>
        </div>
      </div>
      {!imageOnLeft && (
        <img
          className="project-preview-image"
          src={projectObj.imageReference}
          alt={projectObj.title}
        />
      )}
    </div>
  );
};

export default ProjectPreviewSection;

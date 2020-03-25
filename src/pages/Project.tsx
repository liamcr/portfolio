import React from "react";
import Navbar from "../components/Navbar";
import { projects } from "../custom/projects";
import { useParams } from "react-router-dom";
import { hasKey } from "../custom/functions";
import { FullProjectObj } from "../custom/types";
import ProjectPageContent from "../components/ProjectPageContent";
import "../styles/Project.css";

const Project: React.FC = () => {
  const { id } = useParams();
  let projectObj: FullProjectObj;

  if (id !== undefined && hasKey(projects, id)) {
    projectObj = projects[id];
  } else {
    window.location.href = "/";

    // Return a blank HTML element so TypeScript doesn't yell at me
    // for using projectObj before it's defined. (User is redirected
    // before this, so it doesn't matter!)
    return <></>;
  }

  return (
    <div className="project-page-container">
      <Navbar homePage={false} />
      <div className="project-header-image-container">
        <img
          src={projectObj.headerImage}
          alt="Header for project"
          className="project-header-image"
        />
      </div>
      <ProjectPageContent project={projectObj} />
    </div>
  );
};

export default Project;

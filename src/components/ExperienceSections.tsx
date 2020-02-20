import React from "react";
import SectionHeader from "./SectionHeader";
import { workExperience } from "../custom/workExperience";
import "../styles/ExperienceSection.css";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection: React.FC = () => {
  return (
    <div className="experience-container" id="experience-container">
      <SectionHeader content="My Work Experience" />
      <div className="experience-content-container">
        {workExperience.map((workObj, index) => (
          <ExperienceCard workObj={workObj} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;

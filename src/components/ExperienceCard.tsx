import React from "react";
import { WorkObj } from "../custom/types";
import "../styles/ExperienceCard.css";

type ExperienceCardProps = {
  workObj: WorkObj;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ workObj }) => {
  return (
    <div className="experience-card-container">
      <div className="logo-container">
        <img
          className="company-logo"
          src={workObj.companyImage}
          alt={`${workObj.company} logo`}
        />
      </div>
      <div className="experience-header-info">
        <div className="job-title">{workObj.jobTitle}</div>
        <div className="company">{workObj.company}</div>
        <div className="location-and-dates">{`${workObj.location} • ${workObj.timeFrame}`}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;

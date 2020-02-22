import React from "react";
import SectionHeader from "./SectionHeader";
import Slider from "react-slick";
import "../styles/SkillsSection.css";
import SkillCard from "./SkillCard";
import { useMediaQuery } from "@material-ui/core";

const SkillsSection: React.FC = () => {
  const skillIDs = [
    "javascript",
    "reactjs",
    "firebase",
    "nodejs",
    "git",
    "awsLambda",
    "docker",
    "kubernetes",
    "python",
    "swift",
    "awsDynamoDB",
    "awsS3",
    "awsSageMaker",
    "c"
  ];

  const largeScreen = useMediaQuery("(min-width:1050px)");
  const mediumScreen = useMediaQuery("(min-width:750px)");

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: largeScreen ? 3 : mediumScreen ? 2 : 1,
    arrows: true,
    focusOnSelect: true
  };

  return (
    <div className="skills-container" id="skills-container">
      <SectionHeader content="My Skills" />
      <div className="skills-content-container">
        <Slider {...settings}>
          {skillIDs.map((skillID, index) => (
            <SkillCard skillID={skillID} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SkillsSection;

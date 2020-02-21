import React from "react";
import landingImage from "../assets/LandingImage.jpg";
import DownArrow from "../assets/downArrow.svg";
import { scrollTo } from "../custom/functions";
import "../styles/LandingImage.css";
import "../styles/BouncingArrow.css";
import { useMediaQuery } from "@material-ui/core";

const LandingImage: React.FC = () => {
  const isNavBar = !useMediaQuery("(max-width: 700px)");

  return (
    <div className="landing-image-container">
      <img className="landing-image" src={landingImage} alt="Liam Crocket" />
      <div className="landing-image-overlay">
        <div className="landing-image-text">
          <div className="landing-image-overlay-header">Hey there!</div>
          <div className="landing-image-overlay-subheader">
            My name's Liam, and welcome to my website!
          </div>
        </div>
        <div
          className="bouncing-down-arrow"
          style={{ backgroundImage: `url(${DownArrow})` }}
          onClick={() => scrollTo("about-container", 500, isNavBar)}
        ></div>
      </div>
    </div>
  );
};

export default LandingImage;

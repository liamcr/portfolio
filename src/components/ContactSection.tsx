import React from "react";
import SectionHeader from "./SectionHeader";
import "../styles/ContactSection.css";
import { Button, Grid } from "@material-ui/core";
import { MailOutline, LinkedIn, GitHub } from "@material-ui/icons";

const ContactSection: React.FC = () => {
  return (
    <div className="contact-container" id="contact-container">
      <SectionHeader content="Get in Touch!" />
      <div className="contact-content-container">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={12}>
            <div className="contact-option">
              <div className="contact-header">Shoot me an email!</div>
              <Button color="primary" href="mailto:liamcrocket@gmail.com">
                <MailOutline />
                <div className="contact-button-text">
                  {"liamcrocket@gmail.com"}
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <div className="contact-option">
              <div className="contact-header">Connect on LinkedIn!</div>
              <Button
                color="primary"
                href="https://www.linkedin.com/in/william-crocket/"
              >
                <LinkedIn />
                <div className="contact-button-text">{"William Crocket"}</div>
              </Button>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <div className="contact-option">
              <div className="contact-header">Check out my GitHub!</div>
              <Button color="primary" href="https://github.com/liamcr">
                <GitHub />
                <div className="contact-button-text">{"Liam Crocket"}</div>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContactSection;

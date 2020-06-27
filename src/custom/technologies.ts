import React from "../assets/technologyIcons/react.png";
import SpotifyAPI from "../assets/technologyIcons/spotifyAPI.png";
import MaterialUI from "../assets/technologyIcons/materialUI.svg";
import Firebase from "../assets/technologyIcons/firebase.png";
import RedditAPI from "../assets/technologyIcons/redditAPI.png";
import JavaScript from "../assets/technologyIcons/javascript.png";
import NodeJS from "../assets/technologyIcons/nodejs.svg";
import Git from "../assets/technologyIcons/git.png";
import AWSLambda from "../assets/technologyIcons/awsLambda.png";
import Docker from "../assets/technologyIcons/docker.png";
import Python from "../assets/technologyIcons/python.svg";
import Swift from "../assets/technologyIcons/swift.svg";
import AWSDynamoDB from "../assets/technologyIcons/dynamoDB.png";
import AWSS3 from "../assets/technologyIcons/awsS3.png";
import AWSSageMaker from "../assets/technologyIcons/awsSageMaker.png";
import C from "../assets/technologyIcons/c.png";
import TypeScript from "../assets/technologyIcons/typescript.png";
import Java from "../assets/technologyIcons/java.png";

export const technologies = {
  javascript: {
    displayName: "JavaScript",
    imageReference: JavaScript,
    timeExperienced: "1 yr., 6 mos.",
    experienceType: "Work Experience",
    description:
      "Developed in JavaScript for my web-based personal projects, school projects, and I also have experience using it in a professional setting during my time at WSIB's Innovation Lab.",
  },
  reactjs: {
    displayName: "React.js",
    imageReference: React,
    timeExperienced: "8 mos.",
    experienceType: "Work Experience",
    description:
      "Developed a couple of web-based personal projects using React, and used it heavily during my time at WSIB's Innovation Lab.",
  },
  reactNative: {
    displayName: "React Native",
    imageReference: React,
    timeExperienced: "3 mos.",
    experienceType: "Personal Projects",
    description: "",
  },
  materialUI: {
    displayName: "Material UI",
    imageReference: MaterialUI,
    timeExperienced: "2 mos.",
    experienceType: "Personal Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  spotifyAPI: {
    displayName: "Spotify API",
    imageReference: SpotifyAPI,
    timeExperienced: "1 yr, 6 mos.",
    experienceType: "Personal Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  firebase: {
    displayName: "Firebase",
    imageReference: Firebase,
    timeExperienced: "8 mos.",
    experienceType: "Work Experience",
    description:
      "Used Firebase as the backend to my One Word Stories project. Also used it as a backend tool for the WSIB Innovation Lab's website.",
  },
  redditAPI: {
    displayName: "Reddit API",
    imageReference: RedditAPI,
    timeExperienced: "8 mos.",
    experienceType: "Personal Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  nodejs: {
    displayName: "Node.js",
    imageReference: NodeJS,
    timeExperienced: "4 mos.",
    experienceType: "Personal Projects",
    description:
      "Used Node.js to develop my One Word Stories project. I also have experience using this for web-based school assignments.",
  },
  git: {
    displayName: "Git",
    imageReference: Git,
    timeExperienced: "2 yrs.",
    experienceType: "Work Experience",
    description:
      "I use Git as the version control system for all of my personal and academic projects. I also used it during my time at both The Co-operators and WSIB's Innovation Lab.",
  },
  awsLambda: {
    displayName: "AWS Lambda",
    imageReference: AWSLambda,
    timeExperienced: "1 mo.",
    experienceType: "Personal Projects",
    description:
      "Used AWS Lambda to write cloud functions to fetch data from my database for my Smash API side project.",
  },
  docker: {
    displayName: "Docker",
    imageReference: Docker,
    timeExperienced: "1 mo.",
    experienceType: "Work Experience",
    description:
      "Used Docker to containerize my projects during my term at WSIB's Innovation Lab.",
  },
  python: {
    displayName: "Python",
    imageReference: Python,
    timeExperienced: "3 yrs.",
    experienceType: "Work Experience",
    description:
      "Used Python while at WSIB's Innovation Lab to create a machine learning model using scikit-learn that determined whether or not a user was fatigued based only on their motion data.",
  },
  swift: {
    displayName: "Swift",
    imageReference: Swift,
    timeExperienced: "2 mos.",
    experienceType: "Work Experience",
    description:
      "Developed a cross-platform app in Swift that connected an iPhone app to an Apple Watch app. Apple Watch data was passed in real-time to the iPhone and used as input data to a machine learning model.",
  },
  awsDynamoDB: {
    displayName: "DynamoDB",
    imageReference: AWSDynamoDB,
    timeExperienced: "1 mo.",
    experienceType: "Personal Projects",
    description: "AWS DynamoDB was used as a backend for my Smash API project.",
  },
  awsS3: {
    displayName: "AWS S3",
    imageReference: AWSS3,
    timeExperienced: "2 mos.",
    experienceType: "Work Experience",
    description:
      "S3 was used for file storing for both my work with WSIB, as well as for my Smash API project.",
  },
  awsSageMaker: {
    displayName: "SageMaker",
    imageReference: AWSSageMaker,
    timeExperienced: "1 mo.",
    experienceType: "Work Experience",
    description:
      "SageMaker was used to train an SVM machine learning model with over 3,000 data points.",
  },
  c: {
    displayName: "C",
    imageReference: C,
    timeExperienced: "3 yrs.",
    experienceType: "School Projects",
    description:
      "I used C as the primary programming language for school projects. I have experience writing shared libraries in C that can be used for larger-scale applications.",
  },
  typescript: {
    displayName: "TypeScript",
    imageReference: TypeScript,
    timeExperienced: "1 mo.",
    experienceType: "Personal Projects",
    description:
      "I used TypeScript as the primary programming language for my personal website (The one you're looking at right now!).",
  },
  java: {
    displayName: "Java",
    imageReference: Java,
    timeExperienced: "8 mos.",
    experienceType: "School Projects",
    description: "",
  },
};

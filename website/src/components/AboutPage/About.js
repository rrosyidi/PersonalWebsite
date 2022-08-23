import React, { Component, createRef, useState } from "react";
import "./aboutStyle.css";
import jira from "./AboutPageImages/Jira.png";
import node from "./AboutPageImages/Node.png";
import react from "./AboutPageImages/Reacts.png";
import face from "../NavBar/NavBarImages/faceShot.jpg";
import docker from "./AboutPageImages/docker.png";
import aws from "./AboutPageImages/awsCloud.png";
import python from "./AboutPageImages/python.png";

import CardFlip from "./CardFlip.js";

class About extends Component {
  constructor(props) {
    super(props);
    this.introName = createRef();
    this.subHeading = createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.introName.current.style.marginTop = "50%";
      this.introName.current.style.opacity = "0%";

      this.subHeading.current.style.marginTop = "0%";
      this.subHeading.current.style.opacity = "0%";
    }, 0);
    setTimeout(() => {
      this.introName.current.style.transition = "all .4s ease-in";
      this.introName.current.style.marginTop = "15%";
    }, 750);
    setTimeout(() => {
      this.subHeading.current.style.transition = "all .4s ease-in";
      this.subHeading.current.style.marginTop = "-5%";
    }, 900);
    setTimeout(() => {
      this.introName.current.style.opacity = "100%";
    }, 950);
    setTimeout(() => {
      this.subHeading.current.style.opacity = "100%";
    }, 1100);
  }

  render() {
    return (
      <div className="aboutPageContainer" ref={this.props.forwardRef}>
        <div className="raviRosyidiContainer">
          <h1 ref={this.introName} className="raviRosyidi">
            RAVI ROSYIDI
          </h1>
          <h2 ref={this.subHeading} className="subHeading">
            Full-Stack Software Engineer | New Grad
          </h2>
        </div>

        {/* Line Seperating the Two */}
        <hr className="line" />

        {/* About Me Container */}
        <div className="aboutMeContainer">
          <h1 className="aboutMeTag">About Me.</h1>
          {/* <hr /> */}

          {/* About me paragraphs */}
          <div style={{ display: "flex" }}>
            <p className="aboutMeParagraph">
              I am an aspiring developer with experience in both frontend and
              backend developement. Some of the technologies that I have
              recently used are ReactJs/React Native, Express, Jira, and
              NodeJs.
              <p className="aboutMeParagraph" style={{ marginTop: "20px" }}>
                I was born in Jakarta, Indonesia currently living in the state
                of Maryland. I am a well-organized, detailed oriented problem
                solver with a huge passion to learn new techonlogies in the
                software engineering space. I love to play sports whether that
                be Soccer, Basketball, or even Bowling. I also love binge
                watching TV shows ranging from Arcane to Game of Thrones.
                <p className="aboutMeParagraph" style={{ marginTop: "20px" }}>
                  I am currently working as a Junior Software Development
                  Engineer @ Publicis Sapient. Mainly using technologies such as
                  Jira and React to digitally transition companies, such as
                  McDonalds, into the twenty-first centrury.
                  <p className="aboutMeParagraph" style={{ marginTop: "20px" }}>
                    I'm interested in working on ambitious projects with
                    positive people and I'm always on the lookout and open for
                    new opportunities!
                  </p>
                </p>
              </p>
            </p>
            <img src={face} className="face" />
          </div>
        </div>

        {/* Techonlgies I've had expierenced with */}
        <div className="technologiesSection">
          <h1 className="techHeader">Notable Techonlogies and Skills</h1>
          <div className="cardFlipColumnContainer">
            <div className="cardFlipRowContainer">
              <CardFlip
                front="React/React Native"
                back="2020-Present"
                img={react}
              />
              <CardFlip front="Jira" back="2022-Present" img={jira} />
              <CardFlip front="Node" back="2021-Present" img={node} />
              {/* <CardFlip front="React/ReactJs" back="2020-Present"/> */}
            </div>
            <div className="cardFlipRowContainer">
              <CardFlip front="Docker" back="2020-2022" img={docker} />
              <CardFlip front="Python" back="2020-Present" img={python} />
              <CardFlip front="AWS Cloud*" back="In Progress" img={aws} />
              {/* <CardFlip front="React/ReactJs" back="2020-Present"/> */}
            </div>
          </div>

          {/* <button
            className="contactMe"
            onClick={() => (window.location = "mailto:ravi0rwork@gmail.com")}
          >
            Contact Me
          </button> */}
        </div>
        {/* background: linear-gradient(97.97deg, rgb(176, 69, 242) 6.26%, rgb(89, 68, 242) 92.64%) text, rgb(176, 69, 242); */}
      </div>
    );
  }
}

export default About;

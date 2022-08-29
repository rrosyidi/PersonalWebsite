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

const display = (ref, margin) => {
  ref.current.style.marginTop = margin
  ref.current.style.opacity = "100%";
}

const hide = (ref, margin) => {
  ref.current.style.marginTop = margin
  ref.current.style.opacity = "0%";
}

class About extends Component {
  constructor(props) {
    super(props);
    this.introName = createRef();
    this.subHeading = createRef();
    this.line = createRef();

    this.aboutMeTag = createRef();
    this.aboutMeMeta = createRef();
    this.aboutMeImg = createRef();

    this.techHeader = createRef();
    this.skillsRowOne = createRef();
    this.skillsRowTwo = createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log("Height of VH is ", window.innerHeight);
    console.log("Height of VW is ", window.innerWidth);
    // console.log("2/5 is  ", 2 / 5);
    setTimeout(() => {
      this.introName.current.style.marginTop = "100%";
      this.introName.current.style.opacity = "0%";
      this.subHeading.current.style.opacity = "0%";
    }, 0);
    setTimeout(() => {
      this.introName.current.style.transition = "all .4s ease-in";
      this.introName.current.style.marginTop = "-5%";
    }, 750);
    setTimeout(() => {
      this.subHeading.current.style.marginTop = "50%";
      this.subHeading.current.style.transition = "all .4s ease-in";
      this.subHeading.current.style.marginTop = "-7%";
    }, 900);
    setTimeout(() => {
      this.introName.current.style.opacity = "100%";
      this.line.current.style.opacity = "100%";
    }, 950);
    setTimeout(() => {
      this.subHeading.current.style.opacity = "100%";
    }, 1050);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    // console.log(window.innerHeight)
    console.log(window.scrollY);
    if (window.innerHeight * (7/10) < window.scrollY) {
      // console.log("Hitting About Me Page")
      // console.log("Display AboutmeTag")
      display(this.aboutMeTag, "-3%")
      setTimeout(() => {
        display(this.aboutMeMeta, "0%")
        display(this.aboutMeImg, "0%")
      }, 200)
    } else if (window.innerHeight * (7/10) > window.scrollY) {
      // console.log("Hide About Me Tag")
      hide(this.aboutMeTag, "0%")
      hide(this.aboutMeMeta, "3%")
      hide(this.aboutMeImg, "3%")
    }

    if (window.innerHeight*1.7 < window.scrollY) {
      display(this.techHeader, "-3%")
      setTimeout(() => {
        display(this.skillsRowOne, "0%")
        setTimeout(() => {
          display(this.skillsRowTwo, "0%")
        }, 200);
      }, 200);
    } else if (window.innerHeight*1.7 > window.scrollY) {
      hide(this.techHeader, "0%")
      hide(this.skillsRowOne, "3%")
      hide(this.skillsRowTwo, "3%")
    }

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
        <hr ref={this.line} className="line" />

        {/* About Me Container */}
        <div className="aboutMeContainer">
          <h1 ref={this.aboutMeTag} className="aboutMeTag">
            About Me
          </h1>
          {/* <hr /> */}

          {/* About me paragraphs */}
          <div style={{ display: "flex" }}>
            <div className="aboutMeParagraphContainer" ref={this.aboutMeMeta}>
              <p className="aboutMeParagraph">
                I am an aspiring developer with experience in both frontend and
                backend developement. Some of the technologies that I have
                recently used are ReactJs/React Native, Express, Jira, and
                NodeJs.
              </p>
              <p className="aboutMeParagraph">
                I was born in Jakarta, Indonesia currently living in the state
                of Maryland. I am a well-organized, detailed oriented problem
                solver with a huge passion to learn new techonlogies in the
                software engineering space. I love to play sports whether that
                be Soccer, Basketball, or even Bowling. I also love binge
                watching TV shows ranging from Arcane to Game of Thrones.
              </p>
              <p className="aboutMeParagraph">
                I am currently working as a Junior Software Development Engineer
                @ Publicis Sapient. Mainly using technologies such as Jira and
                React to digitally transition companies, such as McDonalds, into
                the twenty-first centrury.
              </p>
              <p className="aboutMeParagraph">
                I'm interested in working on ambitious projects with positive
                people and I'm always on the lookout and open for new
                opportunities!
              </p>
            </div>

            <div className="faceContainer" ref={this.aboutMeImg}>
              <img src={face} className="face" />
            </div>
          </div>
        </div>

        {/* Techonlgies I've had expierenced with */}
        <div className="technologiesSection">
          <h1 ref={this.techHeader} className="techHeader">Notable Techonlogies and Skills</h1>

          {/* Cards */}
          <div ref={this.skillsRowOne} className="cardFlipRowContainer">
            <CardFlip
              front="React/React Native"
              back="2020-Present"
              img={react}
            />
            <CardFlip front="Jira" back="2022-Present" img={jira} />
            <CardFlip front="Node" back="2021-Present" img={node} />
            {/* <CardFlip front="React/ReactJs" back="2020-Present"/> */}
          </div>
          <div ref={this.skillsRowTwo} className="cardFlipRowContainer">
            <CardFlip front="Docker" back="2020-2022" img={docker} />
            <CardFlip front="Python" back="2020-Present" img={python} />
            <CardFlip front="AWS Cloud*" back="In Progress" img={aws} />
            {/* <CardFlip front="React/ReactJs" back="2020-Present"/> */}
          </div>
        </div>
        {/* background: linear-gradient(97.97deg, rgb(176, 69, 242) 6.26%, rgb(89, 68, 242) 92.64%) text, rgb(176, 69, 242); */}
      </div>
    );
  }
}

export default About;

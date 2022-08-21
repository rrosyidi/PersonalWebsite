import React, { Component, useState } from "react";
import "./aboutStyle.css";
import jira from "./AboutPageImages/Jira.png";
import node from "./AboutPageImages/Node.png";
import react from "./AboutPageImages/Reacts.png";
import app from "./AboutPageImages/appDev.png";
import backend from "./AboutPageImages/backend.png";
import website from "./AboutPageImages/websiteDev.png";
import bracket from "./AboutPageImages/bracket.png";
import face from "../NavBar/NavBarImages/faceShot.jpg";
import CardFlip from "./CardFlip.js";

function ToggleLogo(props) {
  const images = [props.img1, props.img2, props.img3];
  const [imagesIndex, cycleImages] = useState(0);

  return (
    <img
      id="logo"
      src={images[imagesIndex]}
      className="images"
      onMouseOver={() => (
        (document.getElementById("logo").style.marginTop = "1%"),
        (document.getElementById("logo").style.cursor = "pointer"),
        (document.getElementById("logo").style.boxShadow = "0px 0px 15px 1px #b045f2")
      )}
      onMouseLeave={() =>(
        (document.getElementById("logo").style.marginTop = "3.5%"),
        (document.getElementById("logo").style.boxShadow = "none")
      )
      }
      onClick={() => cycleImages((imagesIndex + 1) % 3)}
    />
  );
}

function ToggleLogo2(props) {
  const images = [props.img1, props.img2, props.img3];
  const [imagesIndex, cycleImages] = useState(0);

  return (
    <img
      id="logo2"
      src={images[imagesIndex]}
      className="images2"
      onMouseOver={() => (
        (document.getElementById("logo2").style.marginTop = "1%"),
        (document.getElementById("logo2").style.cursor = "pointer")
        (document.getElementById("logo2").style.boxShadow = "0px 0px 15px 1px #b045f2")
      )}
      onMouseLeave={() =>
        (document.getElementById("logo2").style.marginTop = "3.5%")
        (document.getElementById("logo2").style.boxShadow = "none")
      }
      onClick={() => cycleImages((imagesIndex + 1) % 3)}
    />
  );
}

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      const h5Style = document.getElementById("myName").style;
      h5Style.opacity = "100%";
      // h5Style.marginLeft = "0%";
      h5Style.marginTop = "0%";
    }, 1150);
    setTimeout(() => {
      const sentenceStyle = document.getElementById("sentence").style;
      sentenceStyle.opacity = "100%";
      sentenceStyle.marginTop = "8%";
    }, 1250);
    setTimeout(() => {
      const logoStyle = document.getElementById("logo").style;
      const logoStyle2 = document.getElementById("logo2").style;
      const bodyStyle = document.getElementById("body").style;
      logoStyle.opacity = "100%";
      logoStyle.marginTop = "3.5%";
      logoStyle2.opacity = "100%";
      logoStyle2.marginTop = "3.5%";
      bodyStyle.opacity = "100%";
      bodyStyle.marginTop = "10%";
    }, 1300);
    setTimeout(() => {
      const fs = document.getElementById("fullstack").style;
      fs.opacity = "100%";
      fs.letterSpacing = "2px";

      const brace = document.getElementById("curlyBrace").style;
      brace.marginLeft = "55%";
      brace.opacity = "100%";
    }, 2000);
  }

  render() {
    return (
      <div className="aboutPageContainer">
        <div className="introContainer"> 

        {/* Introduction Container */}
        <h5 id="myName" className="myName">
          Hi, my name is Ravi, I am
        </h5>
        <div style={{marginTop: "-15%"}}>
        <h1 id="sentence" className="fullStackSentence">
          A{" "}
          <h3 id="fullstack" className="fullStack">
            Fullstack
          </h3>
          {""}
          Software Engineer.
        </h1>

        </div>
        {/* Body + Images */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "-15%"}}
        >
          <body
            id="body"
            className="body"
            style={{ fontWeight: "lighter", flexDirection: "row" }}
          >
            I am an aspiring developer with experience in both frontend and
            backend developement. Some of the technologies that I have recently
            used are{" "}
            <text style={{ color: "#bf96e0", fontWeight: "bold" }}>
              ReactJs/React Native
            </text>{" "}
            ,{" "}
            <text style={{ color: "#bf96e0", fontWeight: "bold" }}>
              Express
            </text>{" "}
            , <text style={{ color: "#bf96e0", fontWeight: "bold" }}>Jira</text>{" "}
            , and{" "}
            <text style={{ color: "#bf96e0", fontWeight: "bold" }}>NodeJs</text>
            . I'm always on the lookout and open for new opportunities!
          </body>
          <ToggleLogo img1={jira} img2={node} img3={react} />
          <ToggleLogo2 img1={app} img2={backend} img3={website} />
          <img src={bracket} className="curlyBrace" id="curlyBrace" />
        </div>
        </div>

        {/* Line Seperating the Two */}
        <hr className="line" />

        {/* About Me Container */}
        <div className="aboutMeContainer">
          <h1 className="aboutMeTag">About Me.</h1>
          {/* <hr /> */}

          {/* About me paragraphs */}
          <div style={{ display: "flex" }}>
            <body className="aboutMeParagraph">
              I was born in Jakarta, Indonesia currently living in the state of
              Maryland. I am a well-organized, detailed oriented problem solver
              with a huge passion to learn new techonlogies in the software
              engineering space. I love to play sports whether that be Soccer,
              Basketball, or even Bowling. I also love binge watching TV shows
              ranging from Arcane to Game of Thrones.
              <body className="aboutMeParagraph" style={{ marginTop: "20px" }}>
                I am currently working as a Junior Software Development Engineer
                @ Publicis Sapient. Mainly using technologies such as Jira and
                React to digitally transition companies, such as McDonalds, into
                the twenty-first centrury.
                <body
                  className="aboutMeParagraph"
                  style={{ marginTop: "20px" }}
                >
                  I'm interested in working on ambitious projects with positive
                  people.
                </body>
              </body>
            </body>

            <img src={face} className="face" />
          </div>
        </div>

        {/* Techonlgies I've had expierenced with */}
        <div className="technologiesSection">
          <h1 className="techHeader">Techonlogies and Skills</h1>
          <div className="cardFlipColumnContainer">
            <div className="cardFlipRowContainer">
              <CardFlip front="React/ReactJs" back="2020-Present" />
              <CardFlip front="Express" back="2022-Present" />
              <CardFlip front="React/ReactJs" back="2020-Present" />
              {/* <CardFlip front="React/ReactJs" back="2020-Present"/> */}
            </div>
            <div className="cardFlipRowContainer">
              <CardFlip front="React/ReactJs" back="2020-Present" />
              <CardFlip front="React/ReactJs" back="2020-Present" />
              <CardFlip front="React/ReactJs" back="2020-Present" />
              {/* <CardFlip front="React/ReactJs" back="2020-Present"/> */}
            </div>
          </div>

          <button className="contactMe" onClick={() => window.location = 'mailto:ravi0rwork@gmail.com'}>Contact Me</button>
        </div>
        {/* background: linear-gradient(97.97deg, rgb(176, 69, 242) 6.26%, rgb(89, 68, 242) 92.64%) text, rgb(176, 69, 242); */}
      </div>

    );
  }
}

export default About;

import React, { Component, useState } from "react";
import "./aboutStyle.css";
import jira from "./AboutPageImages/Jira.png";
import node from "./AboutPageImages/Node.png";
import react from "./AboutPageImages/Reacts.png";

const TogglePicture = () => {
  const images = [jira, react, node];
  const [imagesIndex, cycleImages] = useState(0);

  return (
    <img
      id="logo"
      src={images[imagesIndex]}
      className="images"
      onMouseOver={() => (
        (document.getElementById("logo").style.marginTop = "1%"),
        (document.getElementById("logo").style.cursor = "pointer")
      )}
      onMouseLeave={() =>
        (document.getElementById("logo").style.marginTop = "3.5%")
      }
      onClick={() => cycleImages((imagesIndex + 1) % 3)}
    />
  );
};

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      const h5Style = document.getElementById("h5").style;
      h5Style.opacity = "100%";
      h5Style.marginLeft = "0%";
    }, 1000);
    setTimeout(() => {
      const sentenceStyle = document.getElementById("sentence").style;
      sentenceStyle.opacity = "100%";
      sentenceStyle.marginTop = "8%";
    }, 1250);
    setTimeout(() => {
      const logoStyle = document.getElementById("logo").style;
      const bodyStyle = document.getElementById("body").style;
      logoStyle.opacity = "100%";
      logoStyle.marginTop = "3.5%";
      bodyStyle.opacity = "100%";
      bodyStyle.marginTop = "10%";
    }, 1500);
    setTimeout(() => {
      const brace = document.getElementById("curlyBrace").style;
      brace.marginLeft = "55%";
      brace.opacity = "100%";
    }, 1750);
    setTimeout(() => {
      const fs = document.getElementById("fullstack").style
      fs.opacity="100%"
      fs.letterSpacing = "2px"
    }, 2000);
  }

  render() {
    return (
      <div className="aboutPageContainer">
        
        {/* Introduction Container */}
        <h5 id="h5" className="myName">
          Hello, my name is Ravi, I am
        </h5>
        <h1 id="sentence" className="fullStackSentence">
          A{" "}
          <h3
            id="fullstack"
            className="fullStack"
          >
            Fullstack
          </h3>{""}
          Software Engineer.
        </h1>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "50px" }}
        >
          <body
            id="body"
            className="body"
            style={{ fontWeight: "lighter", flexDirection: "row" }}
          >
            I am currently working as a junior software development engineer @
            Publicis Sapient. Using technologies such as Jira, React, NodeJs and
            ExpressJs to digitally transition{" "}
            <text style={{ color: "#816797", fontWeight: "bold" }}>
              McDonalds
            </text>{" "}
            into the twenty-first century.
          </body>
          <div className="imageBackground" />
          <TogglePicture />
          <text id="curlyBrace" className="curlyBrace">
            {"}"}
          </text>
        </div>

        {/* Line Seperating the Two */}
        <hr className="line" />

        {/* About Me Container */}
        <div className="aboutMeContainer">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <h2 className="aboutMeTag">About Me.</h2>  
            <hr />
          </div> 
        </div>
      </div>
    );
  }
}

export default About;

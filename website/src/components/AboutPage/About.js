import React, { Component } from "react";
import "./aboutStyle.css";

class About extends Component {
  render() {
    return (
      <div className="aboutPageContainer">
        <h5 className="myName">Hello, my name is Ravi</h5>
        <h1 className="fullStackSentence">A <h3 className="fullStack">FullStack</h3> Software Engineer.</h1>
        <body className="body" style={{ fontWeight: "lighter" }}>
          Currently a junior software development engineer @ Publicis Sapient. Working
          towards building
        </body>
      </div>
    );
  }
}

export default About;

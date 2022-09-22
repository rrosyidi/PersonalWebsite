import React, { Component } from "react";
import TitlePage from "./TitlePage.js";
import AboutMeSection from "./AboutMeSection";
import TechnologiesSection from "./TechnologiesSection";


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginLeft: "15%", marginRight: "15%"}} ref={this.props.forwardRef}>

        {/* Title Page Including Animations */}
        <TitlePage/>

        {/* About Me Container */}
        <AboutMeSection/>

        {/* Techonlgies I've had expierenced with */}
        <TechnologiesSection/>
      </div>
    );
  }
}

export default About;

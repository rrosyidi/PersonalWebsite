import React, { Component } from "react";
import TitlePage from "./TitlePage.js";
import AboutMeSection from "./AboutMeSection";
import TechnologiesSection from "./TechnologiesSection";

const About = React.forwardRef((props, ref) => {
  return (
    <div
      style={{ marginLeft: "15%", marginRight: "15%" }}
    >
      {/* Title Page Including Animations */}
      <TitlePage />

      {/* About Me Container */}
      <AboutMeSection ref={ref}/>

      {/* Techonlgies I've had expierenced with */}
      <TechnologiesSection />
    </div>
  );
});

export default About;

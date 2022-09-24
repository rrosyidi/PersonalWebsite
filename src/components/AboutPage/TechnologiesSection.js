import styled from "@emotion/styled";
import React, {useEffect, useRef} from "react";
import DisplayHide from "../DisplayHide.js";
import CardFlip from "./CardFlip.js";
import jira from "./AboutPageImages/Jira.png";
import node from "./AboutPageImages/Node.png";
import react from "./AboutPageImages/Reacts.png";
import docker from "./AboutPageImages/docker.png";
import aws from "./AboutPageImages/awsCloud.png";
import python from "./AboutPageImages/python.png";

const TechnologiesContainer = styled.div({
  marginTop: "30%",
  // position: "absolute",
  display: "grid",
  // display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "black",
  // height: "50vw"
});

const TechHeader = styled.h1({
  color: "white",
  display: "flex",
  justifyContent: "center",
  fontSize: "1.7vw",
  marginTop: "0%",
  transition: "all .5s ease-in",
  opacity: "0%",
});

const CardFlipRowContainer = styled.div({
  display: "flex",
  marginTop: "3%",
  transition: "all .5s ease-in",
  opacity: "0%",
});

const TechnologiesSection = () => {
  const techHeader = useRef();
  const skillsRowOne = useRef();
  const skillsRowTwo = useRef();

  useEffect(() => {
    DisplayHide.hideFunc(techHeader, "0%");
    DisplayHide.hideFunc(skillsRowOne, "3%");
    DisplayHide.hideFunc(skillsRowTwo, "3%");

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (
      techHeader.current.offsetTop <
      window.scrollY + window.innerHeight / 2
    ) {
      DisplayHide.displayFunc(techHeader, "-3%");
      setTimeout(() => {
        DisplayHide.displayFunc(skillsRowOne, "0%");
        setTimeout(() => {
          DisplayHide.displayFunc(skillsRowTwo, "0%");
        }, 200);
      }, 200);
    } else {
      DisplayHide.hideFunc(techHeader, "0%");
      DisplayHide.hideFunc(skillsRowOne, "3%");
      DisplayHide.hideFunc(skillsRowTwo, "3%");
    }
  };

  return (
    <TechnologiesContainer>
      <TechHeader ref={techHeader}> Notable Technologies and Skills</TechHeader>

      {/* Cards */}
      <CardFlipRowContainer ref={skillsRowOne}>
        <CardFlip front="React/React Native" back="2020-Present" img={react} />
        <CardFlip front="Jira" back="2022-Present" img={jira} />
        <CardFlip front="Node" back="2021-Present" img={node} />
      </CardFlipRowContainer>
      <CardFlipRowContainer ref={skillsRowTwo}>
        <CardFlip front="Docker" back="2021-Present" img={docker} />
        <CardFlip front="Python" back="2020-Present" img={python} />
        <CardFlip front="AWS Cloud*" back="In Progress" img={aws} />
      </CardFlipRowContainer>

    </TechnologiesContainer>
  );
};

export default TechnologiesSection;

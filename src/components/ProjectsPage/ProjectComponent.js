import React, { useRef, useEffect } from "react";
import DisplayHide from "../DisplayHide.js";
import styled from "@emotion/styled";
import projData from "./ProjData.js";
import ProjectSpotlight from "./ProjectSpotlight.js";

import HomePage from "./projectImages/HomePage.jpg";
import HomePageClicked from "./projectImages/HomePageClicked.jpg";
import BudgetPage from "./projectImages/BudgetPage.jpg";
import ResultPage from "./projectImages/ResultPage.jpg";
import TimePage from "./projectImages/TimePage.jpg";
import RecPage from "./projectImages/RecPage.png";

import HapVsGDP from "./projectImages/HapVsGDP.JPG";
import HapVsGDPColor from "./projectImages/HapVsGDPColor.JPG";
import HapVsLE from "./projectImages/HapVsLE.JPG";
import HapVsSS from "./projectImages/HapVsSS.JPG";
import HapVsFreedom from "./projectImages/HapVsFreedom.JPG";

import CF from "./projectImages/CarbonFootprint.png";
import HeatMap from "./projectImages/HeatMap.png";
import EmissionList from "./projectImages/EmissionList.png";
import CompareFootprint from "./projectImages/CompareFootprint.png";

const ProjectsPageContainer = styled.div({
  // marginLeft: "15%",
  // marginRight: "15%",
  marginLeft: "calc(5vw + 2vh)",
  marginRight: "calc(5vw + 2vh)",
  marginTop: "25%",
//   backgroundColor: "black",
//   height: "90vh",
});

const ProjectTitleContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ProjectsTitle = styled.h1({
  color: "white",
  fontSize: "calc(1.8vw + .8vh)",
  textAlign: "center",
  marginTop: "3%",
  transition: "all .5s ease-in",
  opacity: "0%",
});

const ProjectContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ProjectComponent = React.forwardRef((props, ref) => {
  const projTitleRef = useRef();
  const SS = useRef();
  const HIA = useRef();
  const CFV = useRef();

  useEffect(() => {
    DisplayHide.hideFunc(projTitleRef, "3%");
    DisplayHide.hideFunc(SS, "3%");
    DisplayHide.hideFunc(HIA, "3%");
    DisplayHide.hideFunc(CFV, "3%");
    window.removeEventListener("scroll", handleProjScroll);
    window.addEventListener("scroll", handleProjScroll);

    return () => {
      window.removeEventListener("scroll", handleProjScroll);
    };
  });

  const handleProjScroll = () => {
    if (
      projTitleRef.current.offsetTop <
      window.scrollY + window.innerHeight / 2
    ) {
      DisplayHide.displayFunc(projTitleRef, "0%");
      setTimeout(() => {
        DisplayHide.displayFunc(SS, "0%");
        setTimeout(() => {
          DisplayHide.displayFunc(HIA, "0%");
          setTimeout(() => {
            DisplayHide.displayFunc(CFV, "0%");
          }, 200);
        }, 200);
      }, 200);
    } else {
      DisplayHide.hideFunc(projTitleRef, "3%");
      DisplayHide.hideFunc(SS, "3%");
      DisplayHide.hideFunc(HIA, "3%");
      DisplayHide.hideFunc(CFV, "3%");
    }
  };

  return (
    <ProjectsPageContainer ref={ref}>
      <ProjectTitleContainer>
        <ProjectsTitle ref={projTitleRef}>Personal Projects</ProjectsTitle>
      </ProjectTitleContainer>

      <ProjectContainer>
        <ProjectSpotlight
          ref={SS}
          data={projData[0]}
          mainImg={HomePage}
          scrollImages={[
            HomePageClicked,
            BudgetPage,
            TimePage,
            ResultPage,
            RecPage,
          ]}
          mainImgWidth="80%"
          scrollImagesWidth="80%"
          scrollImagesHeight="inherit"
        />

        <ProjectSpotlight
          ref={HIA}
          data={projData[1]}
          mainImg={HapVsGDP}
          scrollImages={[HapVsLE, HapVsSS, HapVsFreedom, HapVsGDPColor]}
          mainImgWidth="80%"
          scrollImagesWidth="150%"
          scrollImagesHeight="150%"
        />

        <ProjectSpotlight
          ref={CFV}
          data={projData[2]}
          mainImg={CF}
          scrollImages={[CompareFootprint, HeatMap, EmissionList]}
          mainImgWidth="100%"
          scrollImagesWidth="200%"
          scrollImagesHeight="200%"
        />
      </ProjectContainer>
    </ProjectsPageContainer>
  );
});

export default ProjectComponent;

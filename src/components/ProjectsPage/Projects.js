import React, { useRef, useEffect } from "react";
import "./projectStyle.css";
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

const CreateProjectSpotlight = React.forwardRef((props, ref) => {
  const link = props.data.buttonLink;
  const width = props.scrollImagesWidth;
  const height = props.scrollImagesHeight;
  const mainWidth = props.mainImgWidth;
  const buttonRef = useRef();

  return (
    <div ref={ref} className="indivProject">
      <div className="headerContainer">
        <h1 className="projectsHeader">{props.data.projTitle}</h1>
      </div>

      <div className="bodyScroll">
        <div className="projBody">
          <p style={{ wordWrap: "break-word", fontSize: "1vw" }}>
            {props.data.mainInfo}
          </p>
          <img
            className="projImage introImage"
            src={props.mainImg}
            style={{ width: mainWidth }}
            alt="mainProjectImage"
          />
          <hr className="projLine" />
          {props.data.extraInfo.map((info, index) => (
            <p style={{ wordWrap: "break-word", fontSize: "1vw" }} key={index}>
              {info}
            </p>
          ))}
          <hr className="projLine" />
          <h2 style={{ fontSize: "1.25vw" }}>ScreenShots</h2>
          <div className="imageScroll">
            {props.scrollImages.map((img, index) => (
              <img
                key={index}
                className="projImage imagesBesideFirst"
                src={img}
                style={{ width: width, height: height }}
                alt="ProjectImages"
              />
            ))}
          </div>
          <button
            ref={buttonRef}
            className="projButton"
            onClick={() => window.open(link)}
            onMouseOver={() => (buttonRef.current.style.cursor = "pointer")}
          >
            {props.data.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
});

const Projects = React.forwardRef((props, ref) => {
  const projTitleRef = useRef();
  const SS = useRef();
  const HIA = useRef();
  const CFV = useRef();

  const projData = [
    {
      projTitle: "Spot Search",
      mainInfo:
        "React Native based application that determines best available locations based on user choices such as distance, cost, and type (fast food, restaurant, theme parks, tourist attractions)",
      extraInfo: [
        "Incorporates both Google Places API as well as the user's geolocation to determine locations best suitable based on API feedback and our own algorithm",
        "Designed UI layout through Figma as well as managed workflow through GitHub",
      ],
      buttonText: "Recorded Video",
      buttonLink:
        "https://drive.google.com/file/d/19w-1SiMCIMfq5zDvBeDmU5yoQc39pS7M/view?usp=sharing",
    },
    {
      projTitle: "Happiness Index Analysis",
      mainInfo:
        "An analysis of 150 different countries to determine the effect of many factors on a country overall happiness",
      extraInfo: [
        "Written in Python and uses frameworks such as Jupyter Notebook as well as data analysis techniques such as Linear Regression",
        "Incorporates data manipulation/ visualization libraries such as Pandas, Seaborn, and Sklearn",
      ],
      buttonText: "Full Research",
      buttonLink: "https://rrosyidi.github.io/",
    },
    {
      projTitle: "Carbon Footprint Visualizer",
      mainInfo:
        "A ReactJs application that compares and visualizes your carbon footprint compared to other residental and commercial consumers",
      extraInfo: [
        "A two-day hackathon project consisting of a ReactJs frontend and a Python/Sqlite DB backend",
        "Uses technologies such as semantic-UI for a quick frontend building process as well as libraries such as DeckGL for heatmaps",
      ],
      buttonText: "Hackathon Project",
      buttonLink: "https://devpost.com/software/carbon-emissions-calculator",
    },
  ];

  useEffect(() => {
    hide(projTitleRef, "3%");
    hide(SS, "3%");
    hide(HIA, "3%");
    hide(CFV, "3%");
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const display = (ref, margin) => {
    ref.current.style.transition = "all .5s ease-in"
    ref.current.style.marginTop = margin;
    ref.current.style.opacity = "100%";
  };

  const hide = (ref, margin) => {
    ref.current.style.transition = "all .2s ease-in"
    ref.current.style.marginTop = margin;
    ref.current.style.opacity = "0%";
  };

  const handleScroll = (event) => {
    console.log(window.scrollY);
    if (window.innerHeight * 4.4 < window.scrollY) {
      display(projTitleRef, "0%");
      setTimeout(() => {
        display(SS, "0%");
        setTimeout(() => {
          display(HIA, "0%");
          setTimeout(() => {
            display(CFV, "0%");
          }, 200);
        }, 200);
      }, 200);
    }
    
    if (window.innerHeight * 4.4 > window.scrollY) {
      hide(projTitleRef, "3%");
      hide(SS, "3%");
      hide(HIA, "3%");
      hide(CFV, "3%");
    }
  };

  return (
    <div ref={ref} className="projectsPageContainer">
      <div class="projTitleContainer">
        <h1 ref={projTitleRef} className="projectsTitle">
          Personal Projects
        </h1>
      </div>

      <div className="projectContainer">
        {/* Create spotlight for individual projects */}
        <CreateProjectSpotlight
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

        <CreateProjectSpotlight
          ref={HIA}
          data={projData[1]}
          mainImg={HapVsGDP}
          scrollImages={[HapVsLE, HapVsSS, HapVsFreedom, HapVsGDPColor]}
          mainImgWidth="80%"
          scrollImagesWidth="150%"
          scrollImagesHeight="150%"
        />

        <CreateProjectSpotlight
          ref={CFV}
          data={projData[2]}
          mainImg={CF}
          scrollImages={[CompareFootprint, HeatMap, EmissionList]}
          mainImgWidth="100%"
          scrollImagesWidth="200%"
          scrollImagesHeight="200%"
        />
      </div>
    </div>
  );
});

export default Projects;

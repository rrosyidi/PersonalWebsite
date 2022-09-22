import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";
import PopulateExperience from "./PopulateExperience.js";
import DisplayHide from "../DisplayHide.js";

const ExperienceContainer = styled.div({
  marginTop: "23.5%",
  marginLeft: "15%",
  marginRight: "15%",
  // height: "71vh",
  display: "flex",
  flexDirection: "column"
});

const Header = styled.h1({
  color: "white",
  fontSize: "2.2vw",
  fontWeight: "bolder",
  marginTop: "-4%",
  position: "absolute",
  transition: "all .5s ease-in",
  opacity: "0%",
});

const ExperienceComponent = React.forwardRef((props, ref) => {
  const expTitle = useRef();
  const exp1 = useRef();
  const exp2 = useRef();
  const exp3 = useRef();

  const refs = [exp1, exp2, exp3];
  const data = [
    {
      date: "Jul 2022 - Present",
      title: "Software Engineer @ ",
      company: "Publicis Sapient",
      meta: [
        "Developed and maintained code for the McDonalds website primarily using HTML, CSS, JavaScript, React, and NodeJs.",
        " Modernized the McDonalds app using technologies such as React Native.",
      ],
    },
    {
      date: "Sep 2019 - Dec 2019",
      title: "Learning Assistant @ ",
      company: "Montgomery College",
      meta: [
        "Helped teach/create classwork which includes exam study guides and projects which were used throughout the semester and the next.",
        "Additionally held weekly tutoring sessions outside the class.",
      ],
    },
    {
      date: "Aug 2018 - Aug 2018",
      title: "CS Intern @ ",
      company: "GuideVine",
      meta: [
        "Assisted with the creation of an interactive chatbot that answers and direct customers.",
        "Provided research for a paper on artificial intelligence.",
      ],
    },
  ];

  useEffect(() => {
    DisplayHide.hideFunc(expTitle, "0%");
    DisplayHide.hideFunc(exp1, "6%");
    DisplayHide.hideFunc(exp2, "6%");
    DisplayHide.hideFunc(exp3, "6%");

    window.removeEventListener("scroll", handleExpScroll);
    window.addEventListener("scroll", handleExpScroll);

    return () => {
      window.removeEventListener("scroll", handleExpScroll);
    };
  });

  const handleExpScroll = () => {
    if (expTitle.current.offsetTop < window.scrollY + window.innerHeight / 2) {
        DisplayHide.displayFunc(expTitle, "-3%");
        setTimeout(() => {
            DisplayHide.displayFunc(exp1, "3%");
            setTimeout(() => {
                DisplayHide.displayFunc(exp2, "3%");
                setTimeout(() => {
                    DisplayHide.displayFunc(exp3, "3%");
                }, 200)
            }, 200)
        }, 200)
    } else {
      DisplayHide.hideFunc(expTitle, "0%");
      DisplayHide.hideFunc(exp1, "6%");
      DisplayHide.hideFunc(exp2, "6%");
      DisplayHide.hideFunc(exp3, "6%");
    }
  };

  return (
    <ExperienceContainer ref={ref}>
      <Header ref={expTitle}>Professional Experience</Header>
      {data.map((data, index) => (
        <PopulateExperience
          key={index}
          date={data.date}
          title={data.title}
          meta={data.meta}
          company={data.company}
          ref={refs[index]}
        />
      ))}
    </ExperienceContainer>
  );
});

export default ExperienceComponent;

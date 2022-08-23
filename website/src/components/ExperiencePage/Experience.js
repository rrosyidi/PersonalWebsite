import React, { Component } from "react";
import "./ExperienceStyle.css";

const Experience = React.forwardRef((props, ref) => {
  // console.log(ref)

  const data = [
    {
      date: "Jul 2022 - Present",
      title: "Software Engineer @ ",
      company: "Publicis Sapient",
      meta: [
        "Developed and maintained code for the McDonalds website primarily using HTML, CSS, JavaScript, React, and NodeJs.",
        " Modernized the McDonalds app using technologies such as React Native."
      ],
    },
    {
      date: "Sep 2019 - Dec 2019",
      title: "Learning Assistant @ ",
      company: "Montgomery College",
      meta: [
        "Helped teach/create classwork which includes exam study guides and projects which were used throughout the semester and the next.",
        "Additionally held weekly tutoring sessions outside the class."
      ]
    },
    {
      date: "Aug 2018 - Aug 2018",
      title: "CS Intern @ ",
      company: "GuideVine",
      meta:[
        "Assisted with the creation of an interactive chatbot that answers and direct customers.",
        "Provided research for a paper on artificial intelligence."
      ]
    }
  ];

  const PopulateExperience = (props) => {
    return (
      <div className="listExperience">
        <div className="individualSec">
          <p className="dates">{props.date}</p>
          <hr className="nextLine indivLine" />
          <div className="expHeaderBody">
            <p className="expHeader">{props.title}{props.company}</p>
            {props.meta.map((point, index) => (
              <li className="expBody" key={index}>{point}</li>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={ref} className="ExperienceContainer">
      <h1 className="header">Professional Experience</h1>

      {data.map((data, index) => 
        <PopulateExperience key={index} date={data.date} title={data.title} meta={data.meta} company={data.company}/>
      )}
    </div>
  );
});

export default Experience;

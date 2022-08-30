import React, { useRef, useEffect } from "react";
import "./ExperienceStyle.css";

const Experience = React.forwardRef((props, ref) => {
  // console.log(ref)
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

  const display = (ref, margin) => {
    ref.current.style.transition = "all .5s ease-in"
    ref.current.style.opacity = "100%";
    ref.current.style.marginTop = margin;
  };

  const hide = (ref, margin) => {
    ref.current.style.transition = "all .2s ease-in"
    ref.current.style.opacity = "0%";
    ref.current.style.marginTop = margin;
  };

  const handleExpScroll = (event) => {
    // console.log("In exp scroll ", window.scrollY)
    // console.log(exp2)
    if (window.innerHeight * 2.9 < window.scrollY) {
      display(expTitle, "-3%");
      setTimeout(() => {
        display(exp1, "3%");
        setTimeout(() => {
          display(exp2, "3%");
          setTimeout(() => {
            display(exp3, "3%");
          }, 200);
        }, 200);
      }, 200);
      // exp1.current.style.padding = "3%"
    } else if (window.innerHeight * 2.9 > window.scrollY) {
      hide(expTitle, "0%");
      hide(exp1, "6%");
      hide(exp2, "6%");
      hide(exp3, "6%");
    }
  };

  useEffect(() => {
    hide(expTitle, "0%");
    hide(exp1, "6%");
    hide(exp2, "6%");
    hide(exp3, "6%");
    window.removeEventListener("scroll", handleExpScroll);
    window.addEventListener("scroll", handleExpScroll);
    return () => {
      window.removeEventListener("scroll", handleExpScroll);
    };
  }, []);

  const PopulateExperience = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} className="listExperience">
        <div className="individualSec">
          <p className="dates">{props.date}</p>
          <hr className="nextLine indivLine" />

          <div className="expHeaderBody">
            <p className="expHeader">
              {props.title}
              {props.company}
            </p>
            {props.meta.map((point, index) => (
              <li className="expBody" key={index}>
                {point}
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div ref={ref} className="ExperienceContainer">
      <h1 ref={expTitle} className="header">
        Professional Experience
      </h1>

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
    </div>
  );
});

export default Experience;

import React, { useRef } from "react";
import "./LinksStyle.css";
import gmail from "./LinkImages/Gmail.png";
import hub from "./LinkImages/Github.png";
import res from "./LinkImages/Resume.png";

const Links = React.forwardRef((props, ref) => {
  const mail = useRef();
  const github = useRef();
  const resume = useRef();

  const handleEnter = (ref) => {
    ref.current.style.opacity = "100%";
  };

  const handleLeave = (ref) => {
    ref.current.style.opacity = "0%";
  };

  return (
    <div ref={ref} className="linkContainer">
      <h1 className="linkTitle">Links and Socials</h1>

      <div className="linkAndBody">
        <div
          className="indivLinks"
          onMouseEnter={() => handleEnter(mail)}
          onMouseLeave={() => handleLeave(mail)}
        >
          <img
            alt="Gmail"
            src={gmail}
            className="indivImage"
            onClick={() => (window.location = "mailto:ravi0rwork@gmail.com")}
          />
        </div>
        <p ref={mail} className="bodyText">
          Contact Me
        </p>
      </div>

      <div className="linkAndBody">
        <div
          className="indivLinks"
          onMouseEnter={() => handleEnter(github)}
          onMouseLeave={() => handleLeave(github)}
        >
          <img
            alt="Github"
            src={hub}
            className="indivImage"
            onClick={() => window.open("https://github.com/rrosyidi/")}
          />
          {/* <p>Hello</p> */}
        </div>
        <p ref={github} className="bodyText">
          Check out my github
        </p>
      </div>

      <div className="linkAndBody">
        <div
          className="indivLinks"
          onMouseEnter={() => handleEnter(resume)}
          onMouseLeave={() => handleLeave(resume)}
        >
          <img
            alt="Resume"
            src={res}
            className="indivImage"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1fCjBWnyzpM0cpLyFzAEqCcXcnThiaizm/view?usp=sharing"
              )
            }
          />
          {/* <p>Hello</p> */}
        </div>
        <p ref={resume} className="bodyText">
          Download my resume
        </p>
      </div>
    </div>
  );
});

export default Links;

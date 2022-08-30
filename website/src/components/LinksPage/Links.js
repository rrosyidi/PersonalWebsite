import React, { useRef, useEffect } from "react";
import "./LinksStyle.css";
import gmail from "./LinkImages/Gmail.png";
import hub from "./LinkImages/Github.png";
import res from "./LinkImages/Resume.png";

const Links = React.forwardRef((props, ref) => {
  const mail = useRef();
  const github = useRef();
  const resume = useRef();

  const linkTitle = useRef();
  const mailRef = useRef();
  const gitRef = useRef();
  const resumeRef = useRef();

  const show = (ref, margin) => {
    ref.current.style.transition = "all .5s ease-in";
    ref.current.style.marginBottom = margin;
    ref.current.style.opacity = "100%";
  };

  const hide = (ref, margin) => {
    ref.current.style.transition = "all .2s ease-in";
    ref.current.style.marginBottom = margin;
    ref.current.style.opacity = "0%";
  };

  const handleLinkScroll = () => {
    if (window.innerHeight * 5.9 < window.scrollY) {
      show(linkTitle, "3%");
      setTimeout(() => {
        show(mailRef, "3%");
        setTimeout(() => {
          show(gitRef, "3%");
          setTimeout(() => {
            show(resumeRef, "3%");
          }, 200);
        }, 200);
      }, 200);
    } else if (window.innerHeight * 5.9 > window.scrollY) {
      hide(linkTitle, "6%");
      hide(mailRef, "6%");
      hide(gitRef, "6%");
      hide(resumeRef, "6%");
    }
  };

  useEffect(() => {
    hide(linkTitle, "3%");
    hide(mailRef, "3%");
    hide(gitRef, "3%");
    hide(resumeRef, "3%");
    // console.log("Height is " , ref.current.clientHeight)
    window.removeEventListener("scroll", handleLinkScroll);
    window.addEventListener("scroll", handleLinkScroll);
    return () => {
      window.removeEventListener("scroll", handleLinkScroll);
    };
  }, []);

  const handleEnter = (ref) => {
    ref.current.style.opacity = "100%";
  };

  const handleLeave = (ref) => {
    ref.current.style.opacity = "0%";
  };

  return (
    <div ref={ref} className="linkContainer">
      <h1 ref={linkTitle} className="linkTitle">
        Links and Socials
      </h1>

      <div ref={mailRef} className="linkAndBody">
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

      <div ref={gitRef} className="linkAndBody">
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

      <div ref={resumeRef} className="linkAndBody">
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

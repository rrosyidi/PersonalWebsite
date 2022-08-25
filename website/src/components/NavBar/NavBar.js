import React, { useRef } from "react";
import linkedin from "./NavBarImages/linkedin.png";
import "./style.css";

const hoverAnimation = (ref) => {
  ref.current.style.transition = "all .4s ease";
  ref.current.style.fontSize = "160%";
  ref.current.style.cursor = "pointer";
};

const leaveHoverAnimation = (ref) => {
  ref.current.style.fontSize = "110%";
};

const scrollToSection = (ref) => {
  ref.current.scrollIntoView({behavior: "smooth" });
};

const NavBar = React.forwardRef((props, ref) => {
  const { expierence, projects, education } = ref.current;
  const lnk = useRef();
  const aboutRef = useRef();
  const expRef = useRef();
  const projRef = useRef();
  const eduRef = useRef();

  return (

    <div className="navBar">

      <div className="navLinksAndImage">

        {/* Linkedin Link + Name */}
        <img
          ref={lnk}
          src={linkedin}
          className="faceImage"
          onClick={() =>
            window.open("https://www.linkedin.com/in/ravi-rosyidi-081a84198")
          }
          onMouseOver={() => (lnk.current.style.cursor = "pointer")}
        />

        {/* <div> */}
          <h3 className="navBarName">Ravi Rosyidi</h3>
        {/* </div> */}

        {/* Navigational Links */}
        <div className="navLinks">
          <button
            ref={aboutRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(aboutRef)}
            onMouseLeave={() => leaveHoverAnimation(aboutRef)}
            onClick={() => window.scrollTo({ top: "1200", behavior: "smooth" })}
          >
            About
          </button>
          <button
            ref={expRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(expRef)}
            onMouseLeave={() => leaveHoverAnimation(expRef)}
            onClick={() => scrollToSection(expierence)}
          >
            Experience
          </button>
          <button
            ref={projRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(projRef)}
            onMouseLeave={() => leaveHoverAnimation(projRef)}
            onClick={() => scrollToSection(projects)}
          >
            Projects
          </button>
          <button
            ref={eduRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(eduRef)}
            onMouseLeave={() => leaveHoverAnimation(eduRef)}
            onClick={() => scrollToSection(education)}
          >
            Education
          </button>
        </div>
      </div>
    </div>
  );
});
export default NavBar;

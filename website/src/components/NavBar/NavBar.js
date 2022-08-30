import React, { useRef, useEffect } from "react";
import linkedin from "./NavBarImages/linkedin.png";
import "./style.css";

const hoverAnimation = (ref) => {
  ref.current.style.transition = "all .4s ease";
  ref.current.style.fontSize = "1.2vw";
  ref.current.style.cursor = "pointer";
};

const leaveHoverAnimation = (ref) => {
  ref.current.style.fontSize = "1vw";
};

const scrollToSection = (ref, position) => {
  ref.current.scrollIntoView({block: position, behavior: "smooth"});
};

const NavBar = React.forwardRef((props, ref) => {
  const { expierence, projects, education } = ref.current;
  const lnk = useRef();
  const name = useRef();
  const aboutRef = useRef();
  const expRef = useRef();
  const projRef = useRef();
  const eduRef = useRef();

  const twoHeight = window.innerHeight*1.25;
  const projHeight = window.innerHeight*5.125
  
  useEffect (() => {
    setTimeout(() => {
      lnk.current.style.marginTop = "0%"
    }, 300)
    setTimeout(() => {
      name.current.style.marginTop = "1.4%"
    }, 400)
    setTimeout(() => {
      aboutRef.current.style.marginTop = "3.5%"
    }, 500)
    setTimeout(() => {
      expRef.current.style.marginTop = "3.5%"
    }, 600)
    setTimeout(() => {
      projRef.current.style.marginTop = "3.5%"
    }, 700)
    setTimeout(() => {
      eduRef.current.style.marginTop = "3.5%"
    }, 800)
  }, []);

  // window.addEventListener('load', () => {
  //   loadAnimation()
  // })

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
          <h3 ref={name} className="navBarName">Ravi Rosyidi</h3>
        {/* </div> */}

        {/* Navigational Links */}
        <div className="navLinks">
          <button
            ref={aboutRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(aboutRef)}
            onMouseLeave={() => leaveHoverAnimation(aboutRef)}
            onClick={() => window.scrollTo({ top: twoHeight, behavior: "smooth" })}
          >
            About
          </button>
          <button
            ref={expRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(expRef)}
            onMouseLeave={() => leaveHoverAnimation(expRef)}
            onClick={() => scrollToSection(expierence, "end")}
          >
            Experience
          </button>
          <button
            ref={projRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(projRef)}
            onMouseLeave={() => leaveHoverAnimation(projRef)}
            onClick={() => scrollToSection(projects, "center")}
            // onClick={() => window.scrollTo({top: projHeight, behavior: "smooth"})}
          >
            Projects
          </button>
          <button
            ref={eduRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(eduRef)}
            onMouseLeave={() => leaveHoverAnimation(eduRef)}
            onClick={() => scrollToSection(education, "start")}
          >
            Links
          </button>
        </div>
      </div>
    </div>
  );
});
export default NavBar;

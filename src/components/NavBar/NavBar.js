import React, { useRef, useEffect } from "react";
// import linkedin from "./NavBarImages/linkedin.png";
import "./style.css";

const hoverAnimation = (ref) => {
  ref.current.style.transition = "all .4s ease";
  ref.current.style.fontSize = "1.5vw";
  ref.current.style.cursor = "pointer";
};

const leaveHoverAnimation = (ref) => {
  ref.current.style.fontSize = "1.3vw";
};

const scrollToSection = (ref, position) => {
  ref.current.scrollIntoView({block: position, behavior: "smooth"});
};

const NavBar = React.forwardRef((props, ref) => {
  const {about, expierence, projects, links } = ref.current;
  const lnk = useRef();
  const name = useRef();
  const aboutRef = useRef();
  const expRef = useRef();
  const projRef = useRef();
  const eduRef = useRef();

  const twoHeight = window.innerHeight*1.25;
  // const projHeight = window.innerHeight*5.125
  
  useEffect (() => {
    setTimeout(() => {
      lnk.current.style.opacity = "100%"
    }, 500)
    setTimeout(() => {
      name.current.style.opacity = "100%"
    }, 600)
    setTimeout(() => {
      aboutRef.current.style.opacity = "100%"
    }, 700)
    setTimeout(() => {
      expRef.current.style.opacity = "100%"
    }, 800)
    setTimeout(() => {
      projRef.current.style.opacity = "100%"
    }, 900)
    setTimeout(() => {
      eduRef.current.style.opacity = "100%"
    }, 1000)

    document.addEventListener('keydown', detectKeyDown, true)
  }, []);

  const detectKeyDown = () => {
    console.log("Experience Offset Height: ", expierence.current.offsetTop)
  }

  // window.addEventListener('load', () => {
  //   loadAnimation()
  // })

  return (
    <div className="navBar">

      <div className="navLinksAndImage">

        {/* Linkedin Link + Name */}
        {/* <img
          ref={lnk}
          alt="LinkedinIcon"
          src={linkedin}
          className="faceImage"
          onClick={() =>
            window.open("https://www.linkedin.com/in/ravi-rosyidi-081a84198")
          }
          onMouseOver={() => (lnk.current.style.cursor = "pointer")}
        /> */}

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
            onClick={() => scrollToSection(about, "center")}
          >
            About
          </button>
          <button
            ref={expRef}
            className="linkStyle"
            onMouseOver={() => hoverAnimation(expRef)}
            onMouseLeave={() => leaveHoverAnimation(expRef)}
            onClick={() => scrollToSection(expierence, "center")}
            // onClick={() => window.scrollTo({ top: (expierence.current.offsetTop*.85), behavior: "smooth" })}
            
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
            onClick={() => scrollToSection(links, "center")}
          >
            Links
          </button>
        </div>
      </div>
    </div>
  );
});
export default NavBar;

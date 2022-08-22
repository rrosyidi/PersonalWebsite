import React from "react";
import linkedin from "./NavBarImages/linkedin.png";
import "./style.css";

const hoverAnimation = (id) => {
  document.getElementById(id).style.transition = "all .4s ease";
  document.getElementById(id).style.fontSize = "160%";
};

const leaveHoverAnimation = (id) => {
  document.getElementById(id).style.textDecoration = "none";
  document.getElementById(id).style.fontSize = "120%";
};

const scrollToSection = (ref) => {
  ref.current.scrollIntoView({ block: "start", behavior: "smooth" });
};

const NavBar = React.forwardRef((props, ref) => {
  const {expierence, projects, education } = ref.current;

  return (
    <div className="navBar">
      <div style={{ marginTop: "3%", display: "flex" }}>
        <img
          id="face"
          src={linkedin}
          className="faceImage"
          onClick={() =>
            window.open("https://www.linkedin.com/in/ravi-rosyidi-081a84198")
          }
          onMouseOver={() =>
            (document.getElementById("face").style.cursor = "pointer")
          }
        />
        <div>
          <h3 style={{ color: "white" }}>Ravi Rosyidi</h3>
        </div>
        <div className="navLinks">
          <button
            id="About"
            className="linkStyle"
            onMouseOver={() => (
              hoverAnimation("About"),
              (document.getElementById("About").style.cursor = "pointer")
            )}
            onMouseLeave={() => leaveHoverAnimation("About")}
            onClick={() => window.scrollTo({top: "1200", behavior: "smooth"})}
          >
            About
          </button>
          <button
            id="Experience"
            className="linkStyle"
            onMouseOver={() => (
              hoverAnimation("Experience"),
              (document.getElementById("Experience").style.cursor = "pointer")
            )}
            onMouseLeave={() => leaveHoverAnimation("Experience")}
            onClick={() => scrollToSection(expierence)}
          >
            Experience
          </button>
          <button
            id="Projects"
            className="linkStyle"
            onMouseOver={() => (
              hoverAnimation("Projects"),
              (document.getElementById("Projects").style.cursor = "pointer")
            )}
            onMouseLeave={() => leaveHoverAnimation("Projects")}
            onClick={() => scrollToSection(projects)}
          >
            Projects
          </button>
          <button
            id="Education"
            className="linkStyle"
            onMouseOver={() => (
              hoverAnimation("Education"),
              (document.getElementById("Education").style.cursor = "pointer")
            )}
            onMouseLeave={() => leaveHoverAnimation("Education")}
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

import React from "react";
import { Link } from "react-router-dom";
import face from "./NavBarImages/faceShot.jpg";
import "./style.css";

const hoverAnimation = (id) => {
  document.getElementById(id).style.transition = "all .4s ease";
  document.getElementById(id).style.fontSize = "160%";
};

const leaveHoverAnimation = (id) => {
  document.getElementById(id).style.textDecoration = "none";
  document.getElementById(id).style.fontSize = "120%";
};

const NavBar = () => {
  return (
    <div className="navBar">
      <img
        id="face"
        src={face}
        className="faceImage"
        onClick={() =>
          window.open("https://www.linkedin.com/in/ravi-rosyidi-081a84198")
        }
        onMouseOver={ () =>
          document.getElementById("face").style.cursor = "pointer"
        }
      />
      <div>
        <h3 style={{ color: "white" }}>Ravi Rosyidi</h3>
      </div>
      <div className="navLinks">
        <Link
          id="About"
          to="/"
          className="linkStyle"
          style={{ textDecoration: "none", fontWeight: "bold" }}
          onMouseOver={() => hoverAnimation("About")}
          onMouseLeave={() => leaveHoverAnimation("About")}
        >
          About
        </Link>
        <Link
          id="Experience"
          to="/Experience"
          className="linkStyle"
          style={{ textDecoration: "none", fontWeight: "bold" }}
          onMouseOver={() => hoverAnimation("Experience")}
          onMouseLeave={() => leaveHoverAnimation("Experience")}
        >
          Experience
        </Link>
        <Link
          id="Projects"
          to="/Projects"
          className="linkStyle"
          style={{ textDecoration: "none", fontWeight: "bold" }}
          onMouseOver={() => hoverAnimation("Projects")}
          onMouseLeave={() => leaveHoverAnimation("Projects")}
        >
          Projects
        </Link>
        <Link
          id="Education"
          to="/Education"
          className="linkStyle"
          style={{ textDecoration: "none", fontWeight: "bold" }}
          onMouseOver={() => hoverAnimation("Education")}
          onMouseLeave={() => leaveHoverAnimation("Education")}
        >
          Education
        </Link>
      </div>
    </div>
  );
};
export default NavBar;

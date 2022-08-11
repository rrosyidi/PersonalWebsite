import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


const hoverAnimation = (id) => {
    document.getElementById(id).style.transition = "all .4s ease"
    document.getElementById(id).style.fontSize = '20px'
}

const leaveHoverAnimation = (id) => {
    document.getElementById(id).style.textDecoration='none'
    document.getElementById(id).style.fontSize = 'medium'
}

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navName">
        <h2 style={{ color: "white"}}>Ravi Rosyidi</h2>
      </div>
      <div className="navLinks">
        <Link
          id="About"
          to="/"
          className="linkStyle"
          style={{ textDecoration: "none", fontWeight: 'bold'}}
          onMouseOver={() => hoverAnimation('About')}
          onMouseLeave={() => leaveHoverAnimation('About')}
        >
          About
        </Link>
        <Link
          id="Experience"
          to="/Experience"
          className="linkStyle"
          style={{ textDecoration: "none", fontWeight: 'bold' }}
          onMouseOver={() => hoverAnimation('Experience')}
          onMouseLeave={() => leaveHoverAnimation('Experience')}
        >
          Experience
        </Link>
        <Link
          id="Projects"
          to="/Projects"
          className="linkStyle"
          style={{ textDecoration: "none", fontWeight: 'bold'}}
          onMouseOver={() => hoverAnimation('Projects')}
          onMouseLeave={() => leaveHoverAnimation('Projects')}
        >
          Projects
        </Link>
        <Link
          id="Education"
          to="/Education"
          className="linkStyle"
          style={{ textDecoration: "none", fontWeight: 'bold'}}
          onMouseOver={() => hoverAnimation('Education')}
          onMouseLeave={() => leaveHoverAnimation('Education')}
        >
          Education
        </Link>
      </div>
    </div>
  );
};
export default NavBar;

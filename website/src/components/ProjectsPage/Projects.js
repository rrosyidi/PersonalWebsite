import React, { Component } from "react";
import "./projectStyle.css";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projectsPageContainer">
      <h1 className="projectsTitle">Projects</h1>
      <div className="projectContainer">
        <div className="indivProject">
          <div className="headerContainer">
            <h1 className="projectsHeader">Spot Search</h1>
          </div>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
          <p>SpotSearch</p>
        </div>
        <div className="indivProject">
          <div className="headerContainer">
            <h1 className="projectsHeader">Happiness Index Analysis</h1>
          </div>
          <p>Testing</p>
        </div>
        <div className="indivProject">
          <div className="headerContainer">
            <h1 className="projectsHeader">Carbon Footprint Visualizer</h1>
          </div>
          <p>Testing</p>
        </div>
      </div>
    </div>
  );
});

export default Projects;

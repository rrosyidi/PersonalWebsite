import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/AboutPage/About";
import Education from "./components/Education";
import Experience from "./components/ExperiencePage/Experience";
import Projects from "./components/Projects";
import { useRef } from "react";

function App() {
  const expierence = useRef();
  const projects = useRef();
  const education = useRef();

  const allRef = useRef({expierence, projects, education});

  return (
    <div style={{ background: "linear-gradient(#604972, #1B2430 )", height: "100vh"}}>
        <NavBar ref={allRef}/>
        <About/>
        <Experience ref={expierence}/>
        <Projects ref={projects}/>
        <Education ref={education}/>
    </div>
  );
}

export default App;

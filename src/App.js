import NavBar from "./components/NavBar/NavBar";
import About from "./components/AboutPage/About";
import Links from "./components/LinksPage/Links";
import ExperienceComponent from "./components/ExperiencePage/ExperienceComponent";
import ProjectComponent from "./components/ProjectsPage/ProjectComponent";
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
        {/* <ProjectComponent ref={projects}/> */}
        <ExperienceComponent ref={expierence}/>
        <ProjectComponent ref={projects}/>
        <Links ref={education}/>
    </div>
  );
}

export default App;

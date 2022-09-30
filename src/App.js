import NavBar from "./components/NavBar/NavBar";
import About from "./components/AboutPage/About";
import LinksComponent from "./components/LinksPage/LinksComponent";
import ExperienceComponent from "./components/ExperiencePage/ExperienceComponent";
import ProjectComponent from "./components/ProjectsPage/ProjectComponent";
import { useRef } from "react";

function App() {
  const about = useRef();
  const expierence = useRef();
  const projects = useRef();
  const links = useRef();

  const allRef = useRef({about, expierence, projects, links});

  return (
    <div style={{ background: "linear-gradient(#604972, #1B2430 )", height: "100vh"}}>
        <About ref={about}/>
        <ExperienceComponent ref={expierence}/>
        <ProjectComponent ref={projects}/>
        <LinksComponent ref={links}/>
        <NavBar ref={allRef}/>
    </div>
  );
}

export default App;

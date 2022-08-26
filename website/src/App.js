import NavBar from "./components/NavBar/NavBar";
import About from "./components/AboutPage/About";
import Links from "./components/LinksPage/Links";
import Experience from "./components/ExperiencePage/Experience";
import Projects from "./components/ProjectsPage/Projects";
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
        <Links ref={education}/>
        {/* <button
            className="contactMe"
            onClick={() => (window.location = "mailto:ravi0rwork@gmail.com")}
          >
            Contact Me 
          </button> */}
    </div>
  );
}

export default App;

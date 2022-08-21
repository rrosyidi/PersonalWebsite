import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/AboutPage/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div style={{ background: "linear-gradient(#604972, #1B2430 )", height: "100vh"}}>
      <Router>
        {/* <div style={{background: "linear-gradient(97.97deg, #b045f2, #1B2430 )" }}> */}
        {/* <div style={{background: "linear-gradient(97.97deg, rgb(176, 69, 242) 6.26%, rgb(89, 68, 242) 92.64%) text, rgb(176, 69, 242)" }}> */}
        {/* background: linear-gradient(97.97deg, rgb(176, 69, 242) 6.26%, rgb(89, 68, 242) 92.64%) text, rgb(176, 69, 242) */}
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Education" element={<Education />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

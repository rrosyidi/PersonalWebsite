import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/Experience' element={<Experience/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Education' element={<Education/>}/>
        </Routes>
      </Router>
  );
}

export default App;

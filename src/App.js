import NavBar from "./components/navBar";
import Landing from "./components/landing";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
        <Routes>
          <Route exact path="/" element= {<Landing />}/>
          <Route exact path="/aboutme" element= {<AboutMe />}/>
          <Route exact path="/experience" element= {<Experience />}/>
          <Route exact path="/projects" element= {<Projects />}/>
        </Routes>
      </nav>
    </div>
  );
}

export default App;

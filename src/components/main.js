import AboutMe from "./aboutMe";
import Experience from "./experience";
import Projects from "./projects";


function Main() {

    

    return(
        <div className="main">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <AboutMe />
            <Experience />
            <Projects />
        </div>
    )
}

export default Main
import AboutMe from "./aboutMe";
import Experience from "./experience";
import Projects from "./projects";
import Fade from "react-reveal";


function Main() {

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);
    

    return(
        <div className="main">
            {/* <div className="circle1"></div> */}
            {/* <div className="circle2"></div>
            <div className="circle3"></div> */}
            
                <AboutMe id="aboutMeSection"/>
            
            {/* <Fade left> */}
                <Experience id="experienceSection"/>
            {/* </Fade> */}
            {/* <Fade left> */}
                <Projects id="projectsSection"/>
            {/* </Fade> */}

            
            
            
        </div>
    )
}

export default Main
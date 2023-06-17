
import { BsGithub, BsLinkedin, BsEnvelopeAtFill } from "react-icons/bs";


function Landing() {

    return(
        <div id="landing">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            {/* <div className="triangle1"></div> */}
            {/* <div className="triangle2"></div> */}
            <h1 class="name">Hi, I'm <br/><span className="firstLetter"><b>S</b></span>am <span className="firstLetter"><b>B</b></span>aldwin</h1>
            <h2 id="role"><span className="firstLetter"><b>W</b></span>eb <span className="firstLetter"><b>D</b></span>eveloper</h2>
            
            <div id="contactIcons">
                <a href="https://github.com/SamBaldwin4566" target="_blank" rel="noreferrer"><BsGithub className="contact"/></a>
                <a href="https://www.linkedin.com/in/sam-baldwin-235671254/" target="_blank" rel="noreferrer"><BsLinkedin className="contact"/></a>
                <a href="mailto:sbaldwin.coding@gmail.com" target="_blank" rel="noreferrer"><BsEnvelopeAtFill className="contact"/></a>
            </div>
        </div>
    )
}

export default Landing
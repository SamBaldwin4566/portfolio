
import { BsGithub, BsLinkedin, BsEnvelopeAtFill } from "react-icons/bs";
import img from '../images/Sam2.png';
import Pulse from 'react-reveal/Pulse';

function Landing() {

    return(
        <div id="landing">
            
            <div className="circle1"></div>
            
                <div><img src={img} id="profPic" alt="pic"></img></div>
            
            <div className="circle3"></div>
            
                <h1 class="name">Hi, I'm Sam</h1>
            
            <Pulse >
            {/* <h2 id="role"><span className="firstLetter"><b>S</b></span>oftware <span className="firstLetter"><b>D</b></span>eveloper</h2> */}
            <h2 id="role">a Software Developer.</h2>
            </Pulse>
            
            
            <div id="contactIcons">
                <a href="https://github.com/SamBaldwin4566" target="_blank" rel="noreferrer"><BsGithub className="contact"/></a>
                <a href="https://www.linkedin.com/in/sam-baldwin-235671254/" target="_blank" rel="noreferrer"><BsLinkedin className="contact"/></a>
                <a href="mailto:sbaldwin.coding@gmail.com" target="_blank" rel="noreferrer"><BsEnvelopeAtFill className="contact"/></a>
            </div>

        </div>
    )
}

export default Landing
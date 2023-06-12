
import { BsGithub, BsLinkedin, BsEnvelopeAtFill } from "react-icons/bs";


function Landing() {

    return(
        <div id="landing">
            
            <h1 id="name">Sam Baldwin</h1>
            <h2 id="role"><b>Web Developer</b></h2>
            <div id="contactIcons">
                <a href="https://github.com/SamBaldwin4566" target="_blank" rel="noreferrer"><BsGithub className="contact"/></a>
                <a href="https://www.linkedin.com/in/sam-baldwin-235671254/" target="_blank" rel="noreferrer"><BsLinkedin className="contact"/></a>
                <a href="mailto:sbaldwin.coding@gmail.com" target="_blank" rel="noreferrer"><BsEnvelopeAtFill className="contact"/></a>
            </div>
        </div>
    )
}

export default Landing
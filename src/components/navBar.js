import { Link } from "react-router-dom";
import img from '../images/profilePicture.jpeg'
import {  BsFillHouseDoorFill, BsFillFilePersonFill,BsBuildingFill, BsClipboardFill } from "react-icons/bs";

// import { AiFillHome, AiOutlineUser } from "react-icons/ai";



function NavBar() {

    return(
        <div id="navBar">
            <img src={img} id="profPic" alt="pic"></img>
            <div className="nav"><Link to="/"><BsFillHouseDoorFill className="icon"/></Link></div>
            <div className="nav"><Link to="/aboutme"><BsFillFilePersonFill className="icon"/></Link></div>
            <div className="nav"><Link to="/experience"><BsBuildingFill className="icon"/></Link></div>
            <div className="nav"><Link to="/projects"><BsClipboardFill className="icon"/></Link></div>
        </div>
    )
}

export default NavBar
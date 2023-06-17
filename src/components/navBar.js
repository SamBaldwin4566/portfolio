import { NavLink } from "react-router-dom";
import img from '../images/profilePicture.jpeg'
import {  BsFillHouseDoorFill, BsFillFilePersonFill,BsBuildingFill, BsClipboardFill } from "react-icons/bs";


// import { AiFillHome, AiOutlineUser } from "react-icons/ai";



function NavBar() {

    

    return(
        <div id="navBar">
            
            {/* <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div> */}
            <div className="nav"><NavLink exact activeClassName = "active" to="/"><BsFillHouseDoorFill className="icon"/></NavLink></div>
            <div className="nav"><NavLink activeClassName = "active" to="/aboutme"><BsFillFilePersonFill className="icon"/></NavLink></div>
            <div className="nav"><NavLink activeClassName = "active" to="/experience"><BsBuildingFill className="icon"/></NavLink></div>
            <div className="nav"><NavLink activeClassName = "active" to="/projects"><BsClipboardFill className="icon"/></NavLink></div>
            <img src={img} id="profPic" alt="pic"></img>
        </div>
    )
}

export default NavBar
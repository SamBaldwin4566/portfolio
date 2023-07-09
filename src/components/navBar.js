import { NavLink } from "react-router-dom";
import img from '../images/Sam.png'

import {  BsFillHouseDoorFill, BsFillFilePersonFill,BsBuildingFill, BsClipboardFill } from "react-icons/bs";


// import { AiFillHome, AiOutlineUser } from "react-icons/ai";



function NavBar() {

    // let logo = document.getElementById('#logo')
    // function transform() {
    //     toggleClass('.logo','.logo-active');
    // }
    
    return(
        <div id="navBar">
            
            <div id="logo" className="logo" onclick='transform()'></div>
            <div className="nav"><NavLink exact activeClassName = "active" to="/"><BsFillHouseDoorFill className="icon"/></NavLink></div>
            <div className="nav"><NavLink activeClassName = "active" to="/aboutme"><BsFillFilePersonFill className="icon"/></NavLink></div>
            <div className="nav"><NavLink activeClassName = "active" to="/experience"><BsBuildingFill className="icon"/></NavLink></div>
            <div className="nav"><NavLink activeClassName = "active" to="/projects"><BsClipboardFill className="icon"/></NavLink></div>
            {/* <img src={img} id="profPic" alt="pic"></img> */}
        </div>
    )
}

export default NavBar
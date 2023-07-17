import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import img from '../images/Sam.png'

import {  BsFillHouseDoorFill, BsFillFilePersonFill,BsBuildingFill, BsClipboardFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";


// import { AiFillHome, AiOutlineUser } from "react-icons/ai";



function NavBar() {

    
    function dropMenu(e) {
        if (e.target.className === 'logo') {
            e.target.className = 'logo-active';
            
            e.target.nextSibling.className = 'nav-home-active'
            e.target.nextSibling.nextSibling.className = 'nav-aboutMe-active'
            e.target.nextSibling.nextSibling.nextSibling.className = 'nav-experience-active'
            e.target.nextSibling.nextSibling.nextSibling.nextSibling.className = 'nav-projects-active'
        }
        else {
            e.target.className = 'logo'
            
            e.target.nextSibling.className = 'nav-home'
            e.target.nextSibling.nextSibling.className = 'nav-aboutMe'
            e.target.nextSibling.nextSibling.nextSibling.className = 'nav-experience'
            e.target.nextSibling.nextSibling.nextSibling.nextSibling.className = 'nav-projects'
        }
        
    }
    // function removeMenu(e) {
    //     if (e.target.firstChild.className = 'logo-active') {
    //         e.target.firstChild.className = 'logo'
    //         e.target.firstChild.nextSibling.className = 'nav'
    //         e.target.firstChild.nextSibling.nextSibling.className = 'nav'
    //         e.target.firstChild.nextSibling.nextSibling.nextSibling.className = 'nav'
    //         e.target.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.className = 'nav'
    //     }
    // }
    

   


    return(
        <div id="navBar">
            
            <div id="logo" className="logo" onClick={dropMenu}>=</div>
                
            
            <div  className="nav">
                <NavLink exact activeClassName = "active" to="/">
                    <BsFillHouseDoorFill id='homeIcon' className="icon"/>
                </NavLink>
            </div>
            <div id='aboutMeIcon' className="nav">
                <NavLink activeClassName = "active" to="/aboutMe">
                    <BsFillFilePersonFill className="icon"/>
                </NavLink>
            </div>
            <div id='experienceIcon' className="nav">
                <NavLink activeClassName = "active" to="/experience">
                    <BsBuildingFill className="icon"/>
                </NavLink>
            </div>
            <div id='projectsIcon' className="nav">
                <NavLink activeClassName = "active" to="/projects">
                    <BsClipboardFill className="icon"/>
                </NavLink>
            </div>
        
            
        
        </div>
    )
}

export default NavBar
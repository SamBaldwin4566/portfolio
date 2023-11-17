import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import img from '../images/Sam.png'
import React, { useState } from 'react';
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
    

    

            const [isShown1, setIsShown1] = useState(false);
            const [isShown2, setIsShown2] = useState(false);
            const [isShown3, setIsShown3] = useState(false);
            const [isShown4, setIsShown4] = useState(false);
        
        
    
    

   


    return(
        <div id="navBar">
            
            <div id="logo" className="logo" onClick={dropMenu}>
        
            </div>
                
            
            <div  className="nav">
                <NavLink exact activeClassName = "active" to="/">
                    <div id='homeIcon' className="icon"
                    onMouseEnter={() => setIsShown1(true)}
                    onMouseLeave={() => setIsShown1(false)}
                    >
                        
                        <BsFillHouseDoorFill />
                        {isShown1 && ( 
                        <div className="iconText">Home</div>
                        )}
                    </div>
                    
                </NavLink>
            </div>
            <div id='aboutMeIcon' className="nav">
                <NavLink activeClassName = "active" to="/aboutMe">
                    <div className="icon"
                    onMouseEnter={() => setIsShown2(true)}
                    onMouseLeave={() => setIsShown2(false)}
                    >
                        <BsFillFilePersonFill />
                        {isShown2 && ( 
                        <div className="iconText">About Me</div>
                        )}
                    </div>
                    
                </NavLink>
            </div>
            <div id='experienceIcon' className="nav">
                <NavLink activeClassName = "active" to="/experience">
                    <div className="icon"
                    onMouseEnter={() => setIsShown3(true)}
                    onMouseLeave={() => setIsShown3(false)}
                    >
                        <BsBuildingFill />
                        {isShown3 && ( 
                        <div className="iconText">Experience</div>
                        )}
                    </div>
                    
                </NavLink>
            </div>
            <div id='projectsIcon' className="nav">
                <NavLink activeClassName = "active" to="/projects">
                    <div className="icon"
                    onMouseEnter={() => setIsShown4(true)}
                    onMouseLeave={() => setIsShown4(false)}>
                        <BsClipboardFill />
                        {isShown4 && ( 
                        <div className="iconText">Projects</div>
                        )}
                    </div>
                    
                </NavLink>
            </div>
        
            
        
        </div>
    )
}

export default NavBar
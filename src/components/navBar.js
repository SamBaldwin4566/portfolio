import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import {  BsFillHouseDoorFill, BsFillFilePersonFill,BsBuildingFill, BsClipboardFill, BsFillCaretDownFill} from "react-icons/bs";


// import { AiFillHome, AiOutlineUser } from "react-icons/ai";



function NavBar() {

    
    function dropMenu(e) {
        let logo = document.getElementById("logoIcon")

        if (logo.className === 'logoIcon-active') {
            logo.className = 'logoIcon'
            logo.nextSibling.className = 'mainButtons-inactive'
            

        }
        else if (logo.className === 'logoIcon active') {
            logo.className = 'logoIcon'
            logo.nextSibling.className = 'mainButtons-inactive'
        }

        else {
            logo.className = 'logoIcon-active';

            logo.nextSibling.className = 'mainButtons-active'
            
        }
        
    }
    

    

            const [isShown1, setIsShown1] = useState(false);
            const [isShown2, setIsShown2] = useState(false);
            const [isShown3, setIsShown3] = useState(false);
            const [isShown4, setIsShown4] = useState(false);
        
        
    
    

   


    return(
        <div id="navBar">

                <NavLink to="/main" className="logoIcon" id="logoIcon" onClick={dropMenu}>
                
                </NavLink>
                
            
                
                    





                <div class="mainButtons">
                    <NavLink to="/" className="navIcon" onClick={dropMenu}> 
                        <div >
                            <BsFillHouseDoorFill />
                        </div>
                    </NavLink>
                    <a href="#aboutMePage"className="navIcon">
                        <div >
                            <BsFillFilePersonFill />
                        </div>
                    </a>
                    <a href="#experience" className="navIcon">
                        <div >
                            <BsBuildingFill />
                        </div> 
                    </a>
                    <a href="#projects" className="navIcon">
                        <div >
                            <BsClipboardFill />
                        </div>
                    </a>
                </div>
                
           

            
            
            


            
        
            
        
        </div>
    )
}

export default NavBar
import travel1 from '../images/travel1.jpeg'
import travel2 from '../images/travel2.jpeg'
import travel3 from '../images/travel3.jpeg'
import travel5 from '../images/travel5.jpeg'
import raya1 from '../images/raya1.jpeg'
import Fade from "react-reveal";


function AboutMe() {

    
    



    return(
        <div id="aboutMePage">
    
            
            <div id="breakLine">
                <br/><br/><br/>
                        
            </div>

            <h1 className="sectionHeading"><span className="firstLetter"><b>A</b></span>bout <span className="firstLetter"><b>M</b></span>e</h1>

            <div id="aboutMe">
                        
                    <div id="skillList">
                        <div class="skills">Javascript</div>
                        <div class="skills">React</div>
                        <div class="skills">HTML</div>
                        <div class="skills">CSS</div>
                        <div class="skills">PHP</div> 
                    </div>
                        

                    <div id="aboutMeInfo">
                        {/* <Fade left> */}
                        <div id="background">
                            <h1 class="heading">Background</h1>
                            
                            <div class="text">
                                
                                <p >My interest in coding first came about during lockdown. I spent many days watching YouTube videos determined 
                                to be the one to come up with the next big app. As "normal" life resumed I had to put this dream on hold. 
                                In 2022 I decided to give it another shot. After seeking advice from people I knew in the industry, I 
                                decided to enroll in a Web Development Bootcamp through Hyperion Development co-certified with Imperial College
                                London. After passing the bootcamp with 99% I am now working on my own projects while looking for the right opportunity
                                to turn this into a career.</p>
                                <p>I am currently volunteering as a Front-End Developer for Farmspeak Technology. I have gained invaluable experience from
                                this opportunity and it has just reinforced my drive to have a career in this industy.</p>
                            
                            </div>
                        </div>
                        {/* </Fade> */}
                        

                        {/* <br/><br/><br/>
                        <hr/> */}
                        {/* <Fade right> */}
                        <div id="travel">
                            <div>
                                <h1 class="heading">Travel</h1>
                                
                            
                                <div id="travelText" class="text">
                                    <p>It has always been one of my dreams to travel to every continent in the world. After university, I was fortunate enough
                                    spend my early twenties travelling and working around South East Asia, Australia and Canada. I believe travel is one of the best 
                                    experiences you can have in life and I still try to do it as much as I can. Most recently, I celebrated my 30th birthday with a 
                                    trip to Japan and South Korea.</p>
                                    <p></p>
                                    <p></p>
                                </div>

                                <div class="travelPics">
                                    <table id="picsTable">
                                        <tr>
                                            <th>
                                                <div class="imgRotateRight">
                                                    <img src={travel3} alt="Travel" class="travelImg"></img>
                                                    <p>Lake Morraine, Alberta</p>
                                                </div>
                                            </th> 
                                            <th>   
                                                <div class="imgRotateLeft">
                                                    <img src={travel1} alt="Travel" class="travelImg"></img>
                                                    <p>Trinidad & Tobago</p>
                                                </div>
                                            </th>    
                                            <th>
                                                <div class="imgRotateRight">    
                                                    <img src={travel5} alt="Travel" class="travelImg"></img>
                                                    <p>Kyoto, Japan</p>
                                                </div>
                                            </th>    
                                            {/* <th>
                                                <div class="imgRotateLeft">
                                                    <img src={travel5} alt="Travel" class="travelImg"></img>
                                                    <p>Kyoto, Japan</p>
                                                </div>
                                            </th>   */}
                                        </tr>  
                                    </table>
                                </div> 
                                
                            </div>
                            
                        </div>
                        {/* </Fade> */}

                        {/* <hr/> */}
                        {/* <Fade left> */}
                        <div id="hobbies">
                            <h1 class="heading">Hobbies & Interests</h1>

                            <div class="sideBySide">

                                <img src={raya1} alt="Raya" class="rayaPic"></img>

                                <div class="text" id="textHobbies">
                                    <p>Outside of travel and work I enjoy finding new skills to learn. I have always wanted to play an instrument and learn
                                                    a second language. So I am currently in the beginner phase of learning both Spanish and Keyboard. I like to keep on top of my fitness
                                                    and I am a regular member of a gym. I am also qualified up to Level 3 in Personal Training and like to help my family and friends achieve their
                                                    own fitness goals.</p> 
                                    <p>One of my favourite ways to spend time is with my rescue dog Raya who I adopted from Bulgaria. We recently did a DNA test and found
                                                    out her two most prominant breeds are German Shepherd and Chow Chow.
                                                    She's ace. 
                                    </p>
                                </div>

                                
                            </div>
                        </div>
                        {/* </Fade> */}

                        
                                    
                                    
                    
                        
                    
                        
                    </div>    
            </div>
            
            <div id="breakLine">
                   <br/><br/><br/><br/><br/><br/><br/>
                    
                    
            </div>
            <Fade right>
                <div id="line1">
                    <hr/>
                </div>
            </Fade>
            <Fade right>
            <div id="line2">
                <hr/>
            </div>
            </Fade>
            

            
        </div>
    )
}

export default AboutMe
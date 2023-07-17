import travel1 from '../images/travel1.jpeg'
import travel2 from '../images/travel2.jpeg'
import travel3 from '../images/travel3.jpeg'
import travel5 from '../images/travel5.jpeg'
import raya1 from '../images/raya1.jpeg'


function AboutMe() {


    



    return(
        <div>
            {/* <div className="pageHeading"><b>About Me</b></div> */}
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <h1 className="name"><span className="firstLetter"><b>A</b></span>bout <span className="firstLetter"><b>M</b></span>e</h1>
            <div id="aboutMe">
                        
                        <div class="skills">Javascript</div>
                        <div class="skills">React</div>
                        <div class="skills">HTML</div>
                        <div class="skills">CSS</div>
                        <div class="skills">Git</div>

                    <div id="aboutMeInfo">
                        <h1 class="heading">Background</h1>
                        
                        <div class="text">
                            <p>Growing up I never really knew what I wanted to do. I felt rushed into going to university. I didn't feel ready to make a decision 
                            that could possibly shape the rest of my life. However, I was always told that I have a very scientific
                            brain, so I chose Biology as it was the subject I enjoyed most. Don't get me wrong, I loved university and 
                            have no regrets about going, I just wish I had more time to really figure out what I wanted. 
                            </p>
                            <p >My interest in coding first came about during lockdown. I spent many days watching YouTube videos determined 
                            to be the one to come up with the next big app. As "normal" life resumed I had to put this dream on hold. 
                            In 2022 I decided to give it another shot. After seeking advice from people I knew in the industry, I 
                            decided to enroll in a Web Development Bootcamp through Hyperion Development co-certified with Imperial College
                            London. After passing the bootcamp with 99% I am now working on my own projects while looking for the right opportunity
                            to turn this into a career.</p>
                            <p></p>
                        
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <hr ></hr>
                        <h1 class="heading">Travel</h1>
                        
                        <div class="textTravel">
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
                                            <img src={travel2} alt="Travel" class="travelImg"></img>
                                            <p>Algonquin National Park, Ontario</p>
                                        </div>
                                    </th>    
                                    <th>
                                        <div class="imgRotateLeft">
                                            <img src={travel5} alt="Travel" class="travelImg"></img>
                                            <p>Kyoto, Japan</p>
                                        </div>
                                    </th>  
                                </tr>  
                            </table>
                        </div> 
                        <hr></hr>
                        <h1 id="hobbies" class="heading">Hobbies & Interests</h1>
                        <table id ="tableHobbies">
                            <tr>
                                <td>
                                    
                                    <div class="textHobbies">
                                            <p>Outside of travel and work I enjoy finding new skills to learn. I have always wanted to play an instrument and learn
                                                a second language. So I am currently in the beginner phase of learning both Spanish and Keyboard. I like to keep on top of my fitness
                                                and I am a regular member of a gym. I am also qualified up to Level 3 in Personal Training and like to help my family and friends achieve their
                                                own fitness goals.</p> 
                                            <p>One of my favourite ways to spend time is with my rescue dog Raya who I adopted from Bulgaria. We recently did a DNA test and found
                                                out her two most prominant breeds are German Shepherd and Chow Chow.
                                                She's ace. 
                                            </p>
                                    </div>
                                </td>    
                                <td>
                                    <img src={raya1} alt="Raya" class="rayaPic"></img>
                                </td>    
                            </tr>    
                        </table>
                        <br/><br/><br/><br/><br/><br/>
                        <hr/>
                    
                        {/* <div class="travelPics">
                            <div class="imgRotateLeft">
                                <img src={raya1} alt="Travel" class="travelImg"></img>    
                            </div>
                            <div class="imgRotateRight">
                                <img src={raya2} alt="Travel" class="travelImg"></img>    
                            </div>
                        </div> */}
                    </div>    
            </div>
        </div>
    )
}

export default AboutMe
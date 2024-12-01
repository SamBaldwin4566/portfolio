import travel1 from '../images/travel1.jpeg'
// import travel2 from '../images/travel2.jpeg'
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
                                
                                <p>My journey into coding began during the lockdown, a time when I became captivated by YouTube tutorials and dreamt of creating the next big app. As life returned to normal, I had to set that dream aside, but in 2022, I decided to reignite my passion for technology.</p>

<p>After seeking advice from industry professionals, I enrolled in a Web Development Bootcamp with Hyperion Development, co-certified by Imperial College London. Throughout the programme, I built a solid foundation in technology by exploring diverse coding approaches, including hands-on projects and collaborative problem-solving. I also took the opportunity to connect with others in the industry, gaining valuable insights and mentorship. I graduated with distinction, earning a 99% pass rate.</p>

<p>Determined to build on my skills, I dedicated time to creating personal projects and seized every opportunity to gain real-world experience. One such opportunity was volunteering as a Frontend Developer for Farmspeak Technology. In this role, I helped design intuitive user interfaces, ensuring a seamless user experience while contributing to impactful projects. This experience not only sharpened my technical skills but also reinforced my drive to pursue a career in this field.</p>
                            
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
                                    <p>One of my lifelong dreams has been to travel to every continent. After university, I was fortunate enough to spend my early twenties exploring and working in Southeast Asia, Australia, and Canada. I believe travel is one of life’s greatest experiences, offering endless opportunities to learn and grow. Even now, I make it a priority to travel whenever I can. My most recent adventures took me to Japan and South Korea, and in October, I had the incredible experience of getting married in Bali.</p>
                                    <p></p>
                                    <p></p>
                                </div>

                                <div class="travelPics">
                                    <table id="picsTable">
                                        <tr>
                                            <th>
                                                <div class="imgRotateRight">
                                                    <img src={travel3} alt="Travel" class="travelImg"></img>
                                                    <p>Canada</p>
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
                                                    <p>Japan</p>
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
                                <p>Outside of travel and work, I’m passionate about learning new skills. I've always wanted to play an instrument and learn a second language, so I’m currently in the beginner phase of learning both Spanish and the keyboard. I also prioritize my fitness and am a regular gym-goer. Additionally, I’m qualified up to Level 3 in Personal Training; however, since discovering my passion for coding, I’ve decided to only use this qualification to help my family and friends achieve their fitness goals.</p>

<p>One of my favourite ways to spend time is with my rescue dog, Raya, whom I adopted from Bulgaria. We recently did a DNA test and discovered her two most prominent breeds are German Shepherd and Chow Chow. She’s truly one of a kind!</p>
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
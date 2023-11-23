import library from '../images/LibraryApp.png'
import gamesApp from '../images/GamesApp.png'
import wedding from '../images/WeddingWebsite.png'

function Projects() {

    

    return(
        <div id="projects">
            {/* <div className="pageHeading"><b>Projects</b></div> */}
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <h1 className="name"><span className="firstLetter"><b>P</b></span>rojects</h1>


                <div class="projectsContainer">
                    <div class="card">
                        
                         <div id="wedding" class="front">
                            
                                <img class="projectsImg" src={wedding} alt=""></img>
                            
                        </div>
                        
                        <a href="http://sbaldwin-wedding.netlify.app" target="_blank" rel="noreferrer">
                            <div class="back">
                                <h1>Wedding Webpage</h1>
                                <h4>HTML | CSS | JavaScript</h4>
                                <a href="http://sbaldwin-wedding.netlify.app" target="_blank" rel="noreferrer">Click to View</a> 
                            </div>
                        </a>    
                    </div>

                    <div class="card">
                        <div id="library" class="front">
                            <img class="projectsImg" src={library} alt=""></img>
                            
                        </div>
                        
                            <div class="back">
                                <h1>Library App</h1>
                                <h4>HTML | CSS | JavaScript</h4>
                                <a href="http://sbaldwin-library.netlify.app" target="_blank" rel="noreferrer"><p>Click to View</p></a>
                            </div>
                        
                    </div>
                        
                    
                    
                    
                    
                </div>
                <div class="projectsContainer">
                    <div class="card">
                        <div id="gamesApp" class="front">
                            <img class="projectsImg" src={gamesApp} alt=""></img>
                        </div>
                        
                           <div class="back">
                                <h1>Games App</h1>
                                <h4>React | JavaScript | HTML | CSS</h4>
                                <a href="http://sbaldwin-games-app.netlify.app" target="_blank" rel="noreferrer">Click to View</a>
                            </div> 
                        
                        
                    </div>
                </div>
                
            
        </div>
    )
}

export default Projects
// import library from '../images/LibraryApp.png'
import gamesApp from '../images/GamesApp.png'
import wedding from '../images/WeddingWebsite.png'
import currencyConverter from '../images/CurrencyConverter.png';


function Projects() {

    
    

    return(
        <div id="projects">
            {/* <div className="pageHeading"><b>Projects</b></div> */}
            {/* <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div> */}
            <div id="breakLine">
                   <br/>
                    
                    
            </div>
            <h1 className="sectionHeading"><span className="firstLetter"><b>P</b></span>rojects</h1>


                <div class="projectsContainer">
                    
                    <div class="card">
                        
                         <div id="wedding" class="front">
                            
                                <img class="projectsImg" src={wedding} alt=""></img>
                            
                        </div>
                        
                        
                            <div class="back">
                                <h1>Wedding Webpage</h1>
                                <h4>HTML | Tailwind CSS | JavaScript</h4>
                                <br/><br/>
                                <a href="http://sbaldwin-wedding.netlify.app" target="_blank" rel="noreferrer">Click to View</a> 
                            </div>
                           
                    </div>
                    

                    <div class="card">
                        <div id="currencyConverter" class="front">
                            <img class="projectsImg" src={currencyConverter} alt=""></img>
                            
                        </div>
                        
                            <div class="back">
                                <h1>Currency Converter</h1>
                                <h4>HTML | CSS | JavaScript</h4>
                                <br/><br/>
                                <a href="http://sbaldwin-currencyconverter.netlify.app" target="_blank" rel="noreferrer">Click to View</a>
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
                                <br/><br/>
                                <a href="http://sbaldwin-games-app.netlify.app" target="_blank" rel="noreferrer">Click to View</a>
                            </div> 
                        
                        
                    </div>
                </div>
                <div id="breakLine">
                   
                    
                    <br/><br/><br/>
                </div>
                
                
            
        </div>
    )
}

export default Projects
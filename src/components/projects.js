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
                    <div id="wedding">
                        <a href="http://sbaldwin-wedding.netlify.app" target="_blank" rel="noreferrer"><img class="projectsImg" src={wedding} alt=""></img></a>
                        <h1>Wedding Website</h1>
                    </div>
                    <div id="library">
                        <a href="http://sbaldwin-library.netlify.app" target="_blank" rel="noreferrer"><img class="projectsImg" src={library} alt=""></img></a>
                        <h1>Library App</h1>
                    </div>
                    <div id="gamesApp">
                        <a href="http://sbaldwin-games-app.netlify.app" target="_blank" rel="noreferrer"><img class="projectsImg" src={gamesApp} alt=""></img></a>
                        <h1>Games App</h1>
                    </div>
                    
                </div>
                
            
        </div>
    )
}

export default Projects
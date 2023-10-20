import library from '../images/LibraryApp.png'
import cloneWebpage from '../images/CloneWebpage.png'
import gamesApp from '../images/GamesApp.png'

function Projects() {

    return(
        <div id="projects">
            {/* <div className="pageHeading"><b>Projects</b></div> */}
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <h1 className="name"><span className="firstLetter"><b>P</b></span>rojects</h1>


                <div id="projectsContainer">
                    <div id="library">
                        <a href="http://sbaldwin-library.netlify.app" target="_blank" rel="noreferrer"><img class="projectsImg" src={library}></img></a>
                        <h1>Library App</h1>
                    </div>
                    <div id="gamesApp">
                        <a href="http://sbaldwin-games-app.netlify.app" target="_blank" rel="noreferrer"><img class="projectsImg" src={gamesApp}></img></a>
                        <h1>Games App</h1>
                    </div>
                    
                    
                </div>
                
            
        </div>
    )
}

export default Projects
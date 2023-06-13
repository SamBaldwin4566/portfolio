import library from '../images/Library.png'

function Projects() {

    return(
        <div id="projects">
            <div className="pageHeading"><b>Projects</b>
                <div id="projectsGrid">
                    {/* <div class="projects" id="library">
                        Library
                    </div> */}
                    <div class="projectsInfo" id="libraryInfo">
                    <a href="http://sbaldwin-library.netlify.app" target="_blank" rel="noreferrer"><img class="projectPic" src={library} alt="Screenshot"></img></a>
                        
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Projects
import library from '../images/Library.png'

function Projects() {

    return(
        <div id="projects">
            <div className="pageHeading"><b>Projects</b>
                <table id="projectsGrid">
                    <tr>
                        <td>
                            <div class="projectsInfo" id="libraryInfo">
                            <a href="http://sbaldwin-library.netlify.app" target="_blank" rel="noreferrer"><img class="projectPic" src={library} alt="Screenshot"></img></a>
                            
                            </div>
                        </td>
                        
                        
                    </tr>
                </table>    
            </div>
        </div>
    )
}

export default Projects
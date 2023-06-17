import library from '../images/Library.png'

function Projects() {

    return(
        <div id="projects">
            {/* <div className="pageHeading"><b>Projects</b></div> */}
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <h1 className="name"><span className="firstLetter"><b>P</b></span>rojects</h1>
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
    )
}

export default Projects
import library from '../images/Library.png'
import cloneWebpage from '../images/CloneWebpage.png'
import gamesApp from '../images/gamesApp.png'

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
                            <div class="projectsInfo">
                            <a href="http://sbaldwin-library.netlify.app" target="_blank" rel="noreferrer"><img class="projectPic" src={library} alt="Screenshot"></img></a>
                            <p><b>Library</b></p>
                            <p>JavaScript | HTML | CSS</p>
                            <p>This project I created a library where the user can store a list of books they have read along with a review. The website allows you to
                                add, edit and delete entries. I used arrays and DOM manipulation to create lists and populate different elements to create a bookshelf look.
                                The website uses JSON local session storage to keep the information saved. 
                            </p>
                            </div>
                        </td>
                        <td>
                            <div class="projectsInfo">
                            <a href="https://sbaldwin-clone-webpage.netlify.app" target="_blank" rel="noreferrer"><img class="projectPic" src={cloneWebpage} alt="Screenshot"></img></a>
                            <p><b>Clone Webpage</b></p>
                            <p>React | JavaScript | HTML | CSS</p>
                            <p>This was one of my first projects using React in my Web Development Bootcamp. I was given the task to clone a webpage and I landed on the WWF webpage.
                            I ultilised functional components to recreate similar elements on the page and change the content. I really enjoyed this project as it enabled me to really develop
                            my CSS skills and research new ways of create styles.
                            <p><a href="https://www.wwf.org.uk/"> Original WWF Webpage </a></p>
                            <p>Cloned only for practice purposes, original webpage may have been updated since.</p>
                            </p>
                            </div>
                        </td>
                        <td>
                            <div class="projectsInfo">
                            <a href="sbaldwin-games-app.netlify.app" target="_blank" rel="noreferrer"><img class="projectPic" src={gamesApp} alt="Screenshot"></img></a>
                            <p><b>Games App</b></p>
                            <p>React | JavaScript | HTML | CSS</p>
                            <p>This was my final project during my Web Development bootcamp. I had to use React to create an app that showcased everything I learned during the course.
                            I created a hangman game that utilises state management for user interaction. <p>I have since decided to continue with this project and want to introduce other games to
                            the app, currently I am working on Tic Tac Toe.</p> 
                            </p>
                            </div>
                        </td>
                        
                        
                    </tr>
                </table>    
            
        </div>
    )
}

export default Projects
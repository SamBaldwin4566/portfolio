import React, { useState } from 'react';
import { useEffect } from 'react';


function Experience() {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    const [isShown6, setIsShown6] = useState(false);
    const [isShown7, setIsShown7] = useState(false);

    // let grid = document.getElementById('expGrid')

   const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)

    useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1000
        if (ismobile !== isMobile) setIsMobile(ismobile)
    },false)
   },[isMobile])

   
   

    
    return(
        <div id="experience">
            {/* <div className="pageHeading"><b>Experience</b></div> */}
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <h1 className="name"><span className="firstLetter"><b>E</b></span>xperience & <span className="firstLetter"><b>E</b></span>ducation</h1>
            
            <div id="expSection">
                
                
                    <div id="expGrid" className={isMobile ? "expMob" : 'expWeb'}>
                        <div id="exp1" className="expRight"
                            onMouseEnter={() => setIsShown7(true)}
                            onMouseLeave={() => setIsShown7(false)}
                            >
                                <div className="exp">
                                    <h4>July 2023 - Present</h4>
                                    <h5>Volunteer Front End Developer</h5>
                                    <h5>Farmspeak Technology</h5>
                                </div> 
                        </div> 

                        <div id="exp2" className="expLeft"
                            onMouseEnter={() => setIsShown1(true)}
                            onMouseLeave={() => setIsShown1(false)}
                            >
                                <div className="exp">
                                    <h4>April 2023 - Present</h4>
                                    <h5>Freelancer</h5>
                                    <h5>Byway</h5>
                                </div>

                        </div>

                        <div id="exp3" className="expRight"
                            onMouseEnter={() => setIsShown2(true)}
                            onMouseLeave={() => setIsShown2(false)}
                            >
                                <div className="exp">
                                    <h4>January 2019 - Present</h4>
                                    <h5>Science Technician</h5>
                                    <h5>Batley Grammar School</h5>
                                </div> 
                        </div> 

                        <div id="exp4" className="expLeft"
                            onMouseEnter={() => setIsShown3(true)}
                            onMouseLeave={() => setIsShown3(false)}
                            >

                            <div className="exp">
                                <h4>November 2022 - March 2023</h4>
                                <h5>Web Development Bootcamp</h5>
                                <h5>Hyperion Development</h5>  
                            </div> 

                        </div>

                        <div id="exp5"className="expRight"
                            onMouseEnter={() => setIsShown4(true)}
                            onMouseLeave={() => setIsShown4(false)}
                            >

                            <div className="exp">
                                <h4>October - December 2018</h4>
                                <h5>Administration Assistant</h5>
                                <h5>Global Debt Recovery</h5>
                            </div>
                        </div> 

                        <div id="exp6"className="expLeft"
                            onMouseEnter={() => setIsShown5(true)}
                            onMouseLeave={() => setIsShown5(false)}
                            >
                            <div className="exp">
                                <h4>September - April 2018</h4>
                                <h5>Customer Service Representative</h5>
                                <h5>Northtech</h5>
                            </div>
                        </div>

                        <div id="exp7"className="expRight"
                            onMouseEnter={() => setIsShown6(true)}
                            onMouseLeave={() => setIsShown6(false)}
                            >
                            <div className="exp">
                                <h4>March - July 2017</h4>
                                <h5>Microbioloical Analyst</h5>
                                <h5>Microsearch Laboratories</h5>
                            </div> 

                        </div>

                    </div>
                <div id="expInfo">
                    {isShown7 && (      
                        <div id="info1" className="info">
                            <h3>Volunteer Front End Developer | Farmspeak Technology</h3>
                            <h3>July 2023 - Present</h3>
                            <br/>
                            
                            <p>I have recently started volunteer work with Farmspeak Technology. I work in a team of Frontend Developers
                            to create functional & responsive webpages from designs on Figma using HTML, Tailwind CSS
                            and JavaScript. I had never used Tailwind CSS before starting this role but I pride myself on being
                            a fast learner and I saw this as an opportunity to challenge myself and expand my knowledge.</p>
                            
                            <p>My responsibilities include:</p>

                            <ul>
                                <li>Collaborate with the design and development teams to translate UI/UX wireframes and mockups on Figma
                                    into responsive and interactive web pages</li>
                                <li>Write clean, efficient and maintainable code using HTML, CSS and Tailwind CSS to achieve seamless front end
                                    functionality</li> 
                            </ul>

                        </div>
                    )}

                    {isShown1 && (      
                        <div id="info2" className="info">
                            <h3>Freelancer | Byway</h3>
                            <h3>April 2023 - Present</h3>
                            <br/>

                            <p>Recently I have taken up part-time freelancing work for the flight-free travel company Byway. Sustainability is a huge part 
                            of this company and I have loved my experience supporting their mission. Working for Byway has given me a insight into working for a
                            tech start-up and all the challenges and rewards that come with it.</p>
                            <p>My responsibilities include:</p>

                            <ul>
                                <li>Support the travel experience team by completing ad hoc work, tracked on Byway's CRM</li>
                                <li>Create accurate personalised travel itineraries within a CMS, including data entry and basic formatting code</li>
                                <li>Utilise other company platforms such as shared inboxes and supplier systems to finalise trips before departure</li>
                            </ul>

                        </div>
                    )}   

                    {isShown2 && (      
                        <div id="info3" className="info">
                            <h3>Science Technician | Batley Grammar School</h3>
                            <h3>January 2019 - Present</h3>
                            <br/>

                            <p>Over the past 4 years I have worked as a Science Technician at Batley Grammar School. It has been a stable job and given
                            me opportunities to develop and achieve a lot of my goals. It has taught me great organistational skills and the ability to 
                            think on my feet under pressured situations.</p>
                            
                            <p>My responsibilities include:</p>

                            <ul>
                                <li>Testing and preparation of apparatus, chemicals, equipment, and learning resources for a variety of Biology, Chemistry 
                                    and Physics practicals across six laboratories in a timely manner.</li>
                                <li>Managing stock and repairs through a personally maintained database with regular checks to ensure safe storage 
                                    and disposal of chemicals.</li>
                                <li>Data entry of exam results for school records.</li>
                                <li>Certified as one of two school-wide First Aid Responders.</li>
                            </ul>

                        </div>
                    )} 

                    {isShown3 && (      
                        <div id="info4" className="info">
                            <h3>Web Development Bootcamp | Hyperion Development</h3>
                            <h3>November 2022 - March 2023</h3>
                            <br/>

                            <p>In 2022, I decided to take advantage of a governemnt funded Bootcamp to give myself a basic understanding of Web Development.
                            I opted for Hyperion Development as I was able to complete the course remotely while continuing to work full time. After three months of long evenings and weekends
                            and endless lines of code, I came out with a 99% pass grade and a certificate co-certified by Imperial College London.</p>

                            <p>The course included lectures, daily coding problems with strict deadlines and projects to complete. I learned the fundamentals of JavaScript, HTML,
                            CSS, React, node.js, Git and an overall look into frontend development with crossover into backend. I really enjoyed completing this course and it fueled 
                            my drive to continue to learn and start some projects of my own. </p>

                        
                            
                        </div>
                    )} 

                    {isShown4 && (
                        <div id="info5" className="info">
                            <h3>Administration Assistant | Global Debt Recovery</h3>
                            <h3>October 2018 - December 2018</h3>
                            <br/>

                            <p>Global Debt Recovery was the first job I got after returning to England from my year living in Canada. It was a job I took while still searching
                            for a role more suited to my education. In the short time I was there, I learned a lot about communication skills, GDPR and how to deal with sensitive
                            information in a professional manner.</p> 
                            
                            <p>My resposibilities included:</p>
                            
                            <ul>
                                <li>Entry and verification of confidential data.</li>
                                <li>Answering inbound calls to efficiently and effectively handle customer queries.</li>
                            </ul>
                        </div>
                    )}

                    {isShown5 && (
                        <div id="info6" className="info">
                            <h3>Customer Service Representative | Northtech</h3>
                            <h3>September 2017 - April 2018</h3>
                            <br/>
                            
                            <p>While living in Toronto I worked part-time for a rennovations company called Northtech. It was a role that revolved heavily around
                            customer interaction, sales and setting up appointments.</p>

                            <p>It taught me a lot about organising my work schedule and keep on top of my targets
                            and goals while still giving me the opportunity to enjoy my time living in Toronto.</p>
                            
                            <p>Responsibilities included:</p>

                            <ul>
                                <li>Discussing renovation plans with potential new customers. </li>
                                <li>Scheduling appointments, discussing financial options and meeting customer needs.</li>
                            </ul>
                            
                        </div>
                    )}

                    {isShown6 && (
                    <div id="info7" className="info">
                        <h3>Microbiological Analyst | Microsearch Laboratories</h3>
                        <h3>March 2017 - July 2017</h3>
                        <br/>

                        <p>This was my first role having returned to the UK from a two year working holiday visa in Australia.</p>
                            
                        <p>I learned of lot about working in a Scientific enviornment with this job and it taught me the ability to work under high pressure with tight deadlines.
                        I really enjoyed the practical aspects of this job but in July 2017 I moved to Canada for a year to be with my partner.</p>

                        <p>Responsibilities included:</p>
                        
                        <ul>
                            <li>Responsibilities included sampling, pipetting and incubating various concentrations of food products to prepare samples 
                                for testing in diagnostics. </li>
                            <li>Worked in a UKAS credited lab and maintaining a clean and aseptic environment to ensure all results are reliable and accurate.</li>
                        </ul>

                    </div>
                    )}
                </div>
            </div>
    
        </div>
    )
}

export default Experience




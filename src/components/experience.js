import React, { useState } from 'react';

function Experience() {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    const [isShown6, setIsShown6] = useState(false);

    

   

    
    return(
        <div id="experience">
            <div className="pageHeading"><b>Education and Experience</b></div>
            
            <div id="expGrid">

            <div id="exp1" className="expLeft"
                onMouseEnter={() => setIsShown1(true)}
                onMouseLeave={() => setIsShown1(false)}
                >
                    <div className="exp">
                        <h2>April 2023 - Present</h2>
                        <h5>Freelancer</h5>
                        <h5>Byway</h5>
                    </div> 
                </div> 
                {isShown1 && (      
                    <div id="info1" className="infoRight">
                        <p>Recently I have taken up part-time freelancing work for the flight-free travel company Byway. Sustainability is a huge part 
                        of this company and I have loved my experience so far supporting them. Working for Byway has given me a insight into working for a
                        tech start-up and all the challenges and rewards that come with it.</p>
                        <p>My responsibilities include:</p>
                        <ul>
                            <li>Support the travel experience team by completing ad hoc work, tracked on Byway's CRM</li>
                            <li>Create accurate personalised travel itineraries within a CMS, including data entry and basic formatting code</li>
                            <li>Utilise other company platforms such as shared inboxes and supplier systems to finalise trips before departure</li>
                        </ul>
                    </div>
                )} 

                <div id="exp2" className="expRight"
                onMouseEnter={() => setIsShown2(true)}
                onMouseLeave={() => setIsShown2(false)}
                >
                    <div className="exp">
                        <h2>January 2019 - Present</h2>
                        <h5>Science Technician</h5>
                        <h5>Batley Grammar School</h5>
                    </div> 
                </div> 
                {isShown2 && (      
                    <div id="info2" className="infoLeft">
                        <p>Over the past 4 years I have worked as a Science Technician at Batley Grammar School. It has been a stable job and given
                        me opportunities to develop and achieve a lot of my goals. It has taught me great organistational skills and the ability to 
                        think on my feet under pressured situations.As much as I have appreciated this job I now feel I have gotten as much as I can 
                        from this role and feel as though it is time to move on.
                        </p>
                        <p>My responsibilities include:</p>
                        <ul>
                            <li>Testing and preparation of apparatus, chemicals, equipment, and learning resources for a variety of Biology, Chemistry 
                                and Physics practicals across six laboratories in a timely manner.</li>
                            <li>Assisting in demonstrations and practical activities in lessons, open days and extracurricular clubs.</li>
                            <li>Managing stock and repairs through a personally maintained database with regular checks to ensure safe storage and 
                                correct labellingand disposal of chemicals.</li>
                            <li>Data entry of exam results for school records.</li>
                            <li>Certified as one of two school-wide First Aid Responders.</li>
                        </ul>
                    </div>
                )}     


                <div id="exp3" className="expLeft"
                onMouseEnter={() => setIsShown3(true)}
                onMouseLeave={() => setIsShown3(false)}
                >
                    <div className="exp">
                        <h2>November 2022 - March 2023</h2>
                        <h5>Web Development Bootcamp</h5>
                        <h5>Hyperion Development & Imperial College London</h5>
                    </div> 
                </div> 
                {isShown3 && (      
                    <div id="info3" className="infoRight">
                        <p>In 2022 I decided to take advantage of a governemnt funded Bootcamp to give myself a basic understanding of Web Development.
                        I opted for Hyperion Development as I was able to complete the course remotely while continuing to work full time. After 3 months of long evenings and weekend,
                        and endless lines of code I came out of it with a 99% pass graded and a certificate co-certified by Imperial College London.</p>
                        <p>The course included lectures, daily coding problems with strict deadlines and projects to complete. I learned the fundamentals of JavaScript, HTML,
                        CSS, React, node.js, Git and an overall look into frontend development with crossover into backend. I really enjoyed completing this course and it fueled 
                        my drive to continue to learn and start some projects of my own. </p>
                        <p>My aim now is to continue my education and gain as much experience in Web Development as possible so I can get myself into the industry and 
                        start my dream career.</p>
                        <ul>
                            
                        </ul>
                    </div>
                )}                  
                
                
                
                

                <div id="exp4"className="expRight"
                onMouseEnter={() => setIsShown4(true)}
                onMouseLeave={() => setIsShown4(false)}>
                    <div className="exp">
                    <h2>October - December 2018</h2>
                    <h5>Administration Assistant</h5>
                    <h5>Global Debt Recovery</h5>
                    </div>
                </div>
                {isShown4 && (
                <div id="info4" className="infoLeft">
                    <p>Global Debt Recovery was the first job I got after returning to England from my year living in Canada. It was a job I took while still searching
                        for a role more suited to my education. In the short time I was there I learned a lot about communication skills, GDPR and how to deal with sensitive
                        information in a professional manner. 
                    </p>
                    <p>My resposibilities included:</p>
                    <ul>
                        <li>Entry and verification of confidential data.</li>
                        <li>Answering inbound calls to efficiently and effectively handle customer queries.</li>
                    </ul>
                </div>
                )}



                <div id="exp5"className="expLeft"
                onMouseEnter={() => setIsShown5(true)}
                onMouseLeave={() => setIsShown5(false)}>
                    <div className="exp">
                        <h2>September - April 2018</h2>
                        <h5>Customer Service Representative</h5>
                        <h5>Northtech</h5>
                    </div>
                </div>
                {isShown5 && (
                <div id="info5" className="infoRight">
                    <p>While living in Toronto I worked part-time for a rennovations company called Northtech. It was a role that revolved heavily around
                    customer interaction, sales and setting up appointments.</p>
                    <p>It taught me a lot about organising my work schedule and keep on top of my targets
                    and goals while still giving me the opportunity to enjoy my time living in Toronto. 
                    </p>
                    <p>Responsibilities included:</p>
                    <ul>
                        <li>Discussing renovation plans with potential new customers. </li>
                        <li>Scheduling appointments, discussing financial options and meeting customer needs.</li>
                    </ul>
                </div>
                )}

                <div id="exp6"className="expRight"
                onMouseEnter={() => setIsShown6(true)}
                onMouseLeave={() => setIsShown6(false)}>
                    <div className="exp">
                        <h2>March - July 2017</h2>
                        <h5>Microbioloical Analyst</h5>
                        <h5>Microsearch Laboratories</h5>
                    </div> 
                </div>
                {isShown6 && (
                <div id="info6" className="infoLeft">
                    <p>In March 2017 I returned to England from a 2 year working holiday in Australia. I worked various odd jobs to keep my travels possible, but when 
                        back in England I wanted to gain some experience in the Science industry. The opportunity to work for Microsearch came not too long after I returned.</p>
                        <p>
                        I learned of lot about working in a Scientific enviornment with this job and it taught me the ability to work under high pressure with tight deadlines.
                        I really enjoyed the practical aspects of this job but in July 2017 I moved to Canada for a year to be with my partner.</p>
                    <p>Responsibilities included:
                    </p>
                    <ul>
                        <li>Responsibilities included sampling, pipetting and incubating various concentrations of food products to prepare samples 
                            for testing in diagnostics. </li>
                        <li>Worked in a UKAS credited lab and maintaining a clean and aseptic environment to ensure all results are reliable and accurate.</li>
                     </ul>
                </div>
                )}

            </div>
        </div>
    )
}

export default Experience




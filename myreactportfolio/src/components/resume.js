import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import jonas from '../images/jonas.png'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={jonas} style={{ height: '200px' }} />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}> Jonas Zanini</h2>
                        <h4 style={{ color: 'gray' }}>Web developer</h4>
                        <hr style={{ borderTop: '2px solid gray', width: '50%' }}></hr>
                        <p>
                            I am a coding lover, self-learner who possesses a strong interest in emerging technologies with self-discipline and the ability to work with the minimum of supervision. Able to play a role throughout the software development / support life cycle of a project to ensure that quality solutions meet business objectives with a good team spirit and deadline orientated.
                        </p>
                        <hr style={{ borderTop: '2px solid gray', width: '50%' }}></hr>

                        <h5>Address</h5>
                        <p>Moore Park Ave, North York, ON M2M 1M9</p>

                        <h5>Phone</h5>
                        <p>1+ (647) 834 7570</p>

                        <h5>E-mail</h5>
                        <p>jonaszanini@gmail.com</p>

                        <h5>Web</h5>
                        <p>jonaszanini.com</p>
                        <hr style={{ borderTop: '2px solid gray', width: '50%' }}></hr>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                        <h2>Experience</h2>
                        <Experience
                            startYear="Jan 2019"
                            endYear="Aug 2019"
                            jobName="IBM - Software Developer C# .NET - Itaú bank account"
                            jobDescription="Working as Web Developer for Exchange Squad at Itaú bank account responsible for the development of new features. Working on elaboration of training material as well as training the new trainees. The training has subjects like Object-Oriented Programming, C#, Data Base introduction, SQL, Programming Logic, Web Forms, Windows Form, API Rest, HTML, CSS and Bootstrap."
                        />

                        <Experience
                            startYear="Nov 2015"
                            endYear="Dec 2018"
                            jobName="IBM - C# .NET Application Developer - at&t account"
                            jobDescription="Working as web developer and focal point for LCR Automation. Application responsible for taking the requests with new Products, Rate Plans and Discounts from at&t users."
                        />

                        <Experience
                            startYear="Jun 2012"
                            endYear="Oct 2015"
                            jobName="IBM - Application Developer / Support - Shell account"
                            jobDescription="Supporting over 50 applications for oil Shell Brazil account. Applications like, import and export products control, sales tracking, freight, lawsuits, cash register balancing and others.

                            Working with Veracode on code refactoring to increase the resiliency of our application infrastructure to reduce the cyber-attack.
                            
                            Extra activities such as a Focal Point for new employees assisting them in the internal processes of Shell account. Also helping IBM HR team on tech and English interviews for new candidates to other accounts into IBM."
                        />

                        <Experience
                            startYear="Aug 2008"
                            endYear="May 2012"
                            jobName="IBM - Mainframe Batch Monitoring - at&t account"
                            jobDescription="Working with monitoring and support on at&t critical systems. In daily contact with the second USA level reporting errors and gathering instructions for assertive actions. Taking care of applications responsible for 911 (US emergency number), invoices sent to corporations and small customers, and others.

                            Recognition for extra activities such as identifying the need of a new application which automate the metric input process and new staff administration. I collected all the requirements and developed this on-line application in PHP available on IBM intranet responsible for gather all production metrics from the entire team. With the use of this application we reduced the work made before manually with spreadsheets from 4h to 5min."
                        />

                        <hr style={{ borderTop: '2px solid #43C6AC' }} />

                        <h2>Education</h2>
                        <Education startYear="2005"
                            endYear="2008"
                            schoolName="FAM - Faculdade de Americana / Brazil"
                            schoolDescription="Bachelor's degree - Computer Science"
                        />

                        <Education startYear="2019"
                            endYear="2021"
                            schoolName="Cambrian College International"
                            schoolDescription="Mobile Application Development"
                        />

                        <hr style={{ borderTop: '2px solid #43C6AC' }} />

                        <h2>Skills</h2>
                        <Skills skill="C# .NET" progress="90" />
                        <Skills skill="API REST" progress="82" />
                        <Skills skill="Unit test" progress="80" />
                        <Skills skill="SQL" progress="80" />
                        <Skills skill="Angular" progress="30" />
                        <Skills skill="HTML/CSS" progress="88" />
                        <Skills skill="JavaScript" progress="60" />
                        <Skills skill="GitHub" progress="90" />
                        <Skills skill="Agile" progress="78" />
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;
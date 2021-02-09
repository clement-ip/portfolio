import React from "react";
import ResumeData from "./Resume.json";
import Skills from "./Skills";

function Resume(){

    function NewlineTextTitle(props) {
        const text = props.text;
        const newText = text.split('\n').map(str => <h4>{str}</h4>);
        return newText;
    }

    return(
        <section id="resume" className="resume section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>A button should go here to download resume.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        {
                            ResumeData.education.map((Education, index) =>{
                                return(
                                    <div className="resume-item" key={index}>
                                        <NewlineTextTitle text={Education.degree}/>
                                        <h5>{Education.duration}</h5>
                                        <h6>
                                            <b>
                                                <em>{Education.institution}</em>
                                            </b>
                                        </h6>    
                                    </div>
                                );
                            })
                        }
                        <h3 className="resume-title">Volunteering &amp; Leadership Positions</h3>
                        {
                            ResumeData.volunteering.map((Volunteering, index) =>{
                                return(
                                    <div className="resume-item" key={index}>
                                        <h4>{Volunteering.position}</h4>
                                        <h5>{Volunteering.duration}</h5>
                                        <h6>
                                            <b>
                                                <em>{Volunteering.location}</em>
                                            </b>
                                        </h6>
                                        <ul>
                                            {
                                                Volunteering.description.map((item, index)=> {
                                                    return(
                                                        <li key={index}>{item}</li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                );
                            })
                        }

                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Work Experience</h3>
                        {
                            ResumeData.workExperience.map((WorkExperience, index) =>{
                                return(
                                    <div className="resume-item" key={index}>
                                        <h4>{WorkExperience.position}</h4>
                                        <h5>{WorkExperience.duration}</h5>
                                        <h6>
                                            <b>
                                                <em>{WorkExperience.company}</em>
                                            </b>
                                        </h6>
                                        <ul>
                                            {
                                                WorkExperience.description.map((item, index)=> {
                                                    return(
                                                        <li key={index}>{item}</li>
                                                    );
                                                })
                                            }
                                            
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Skills/>
        </section> 
    );
}

export default Resume;
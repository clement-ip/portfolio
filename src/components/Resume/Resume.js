import React from "react";
import Icofont from 'react-icofont';
import ResumeData from "./Resume.json";
import Skills from "./Skills";

function Resume(){

    function NewlineTextSplit(props) {
        const text = props.text;
        const newText = text.split('\n').map(str => <div key={str}>{str}</div>);
        // const newText = text.split('\n');
        return newText;
    }

    return(
        <section id="resume" className="resume section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Resumé</h2>
                    <a href={process.env.REACT_APP_RESUME_URL} className="btn btn-info" role="button" target="_blank" rel="noopener noreferrer">
                        <Icofont icon="download"/> Download PDF Version
                    </a>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        {
                            ResumeData.education.map((Education) =>{
                                return(
                                    <div className="resume-item" key={Education.degree}>
                                        <h4><NewlineTextSplit text={Education.degree}/></h4>
                                        <h6>
                                            <b>
                                                <em>{Education.institution}</em>
                                            </b>
                                        </h6>
                                        <h5>{Education.duration}</h5>
                                    </div>
                                );
                            })
                        }
                        <h3 className="resume-title">Certifications</h3>
                        {
                            ResumeData.certifications.map((Certification) =>{
                                return(
                                    <div className="resume-item" key={Certification.title}>
                                        <h4><NewlineTextSplit text={Certification.title}/></h4>
                                        <h6>
                                            <b>
                                                <em>{Certification.issueOrg}</em>
                                            </b>
                                        </h6>
                                        <h5>{Certification.duration}</h5>
                                    </div>
                                );
                            })
                        }
                        <h3 className="resume-title">Volunteering &amp; Leadership Positions</h3>
                        {
                            ResumeData.volunteering.map((Volunteering) =>{
                                return(
                                    <div className="resume-item" key={Volunteering.position}>
                                        <h4>{Volunteering.position}</h4>
                                        <h6>
                                            <b>
                                                <em>{Volunteering.location}</em>
                                            </b>
                                        </h6>
                                        <h5>{Volunteering.duration}</h5>
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
                            ResumeData.workExperience.map((WorkExperience) =>{
                                return(
                                    <div className="resume-item" key={WorkExperience.position}>
                                        <h4>{WorkExperience.position}</h4>
                                        <h6>
                                            <b>
                                                <em>{WorkExperience.company}</em>
                                            </b>
                                        </h6>
                                        <h5>{WorkExperience.duration}</h5>
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
import React from 'react';
import Icofont from 'react-icofont';
import ContactForm from './ContactForm';

function Contact(){
    return(
        <section id="contact" className="contact section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>If you would like to connect with me, my personal information is listed below. Alternatively, you can fill out the form and I will get back to you at my earliest convienience.</p>
                </div>

                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="email">
                                <a href="mailto:clement.ip96@gmail.com" className="email" target="_blank" rel="noopener noreferrer">
                                    <Icofont icon="envelope"/>
                                </a>
                                <h4>Email:</h4>
                                <p>clement.ip96[at]gmail.com</p>
                            </div>

                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/clement-kc-ip/" className="linkedin" target="_blank" rel="noopener noreferrer">
                                    <Icofont icon="linkedin"/>
                                </a>
                                <h4>LinkedIn (Sign-In Required):</h4>
                                <p>linkedin.com/in/clement-kc-ip/</p>
                            </div>

                            <div className="github">
                                <a href="https://github.com/clement-ip" className="github" target="_blank" rel="noopener noreferrer">
                                    <i className="bx bxl-github"/>
                                </a>
                                <h4>GitHub:</h4>
                                <p>github.com/clement-ip</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
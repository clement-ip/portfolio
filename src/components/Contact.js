import React from 'react';
import Icofont from 'react-icofont';

function Contact(){
    return(
        <section id="contact" className="contact">
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

                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen/> */}
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        
                        <form action="https://formspree.io/f/xzbkwlpa" method="POST" className="email-form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Name*:</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name" data-rule="minlen:4" 
                                        placeholder="First and Last"
                                        required/>
                                    {/* <div className="validate"/> */}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Email*:</label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        name="_replyto"
                                        id="email"
                                        data-rule="email"
                                        placeholder="example@abc.com"
                                        required/>
                                    {/* <div className="validate"/> */}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject*:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="_subject"
                                    id="subject"
                                    // data-rule="minlen:4"
                                    data-msg="Please enter at least 8 chars of subject"
                                    placeholder="What is your topic of discussion?"
                                    required/>
                                {/* <div className="validate"/> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message*:</label>
                                <textarea 
                                    className="form-control"
                                    name="message"
                                    rows="10"
                                    // data-rule="required" 
                                    placeholder="Write away!"
                                    required/>
                                {/* <div className="validate"/> */}
                            </div>
                            {/* <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"/>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div> */}
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
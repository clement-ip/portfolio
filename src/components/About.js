import React from 'react';
// import Icofont from 'react-icofont';

function About(){
    return(
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About Me</h2>
                    <p><b>Oh hey! It's nice of you to stop by my website!</b></p>
                </div>
                
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="./assets/img/aboutWCT.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <p>
                            My name is Clement, and I'm based out of Vancouver, BC, Canada. 
                            I recently graduated from Simon Fraser University with a Bachelor's of Science in <b>Mathematics and Computing Science</b>.
                        </p>
                        <p> 
                            Though my studies, I developed a passion in <b>Data Science, Software Engineering/Development, and Information Technology</b>. As such, I am always on the lookout for exciting career opportunities in these particular fields of interest.
                        </p>
                        <p>
                            I also have a huge passion for <b>Web Development and Computation Mathematics</b> (hence my degree), but my interests also include fields such as <b>Hardware Design and Cybersecurity</b>.
                        </p>
                        <p>
                            Outside of my main fields of study, I have over 10 years of leadership and teamwork experience in the non-profit sector. Additionally, if you've noticed my picture on the left, you will know that I have a love for the outdoors and have gone to many expedition and camps to see what nature can offer us! (Take a guess at where I went to!)
                        </p>
                        <p>
                            I also really enjoy photography. Whether it's taking pictures of nice views, to doing photoshoots with people and/or events, to simple abstract photo taking, I like them all! While currently it is only a hobby of mine, maybe sometime down the road it might become something of a service for everyone so stay tuned!</p>
                        <p>
                            Let's have a chat if we share any interests! Whether it's through a meal, cup of coffee, or just a simple get together and hang, I really cherish and enjoy <b>dialogue and conversations</b> between one another, both online and in-person (when it's safe to do so given the current circumstances).
                        </p>
                        {/* <h3>UI/UX Designer &amp; Web Developer.</h3>
                        <p className="font-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><Icofont icon="rounded-right"/> <strong>Birthday:</strong> 1 May 1995</li>
                                <li><Icofont icon="rounded-right"/> <strong>Website:</strong> www.example.com</li>
                                <li><Icofont icon="rounded-right"/> <strong>Phone:</strong> +123 456 7890</li>
                                <li><Icofont icon="rounded-right"/> <strong>City:</strong> City : New York, USA</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><Icofont icon="rounded-right"/> <strong>Age:</strong> 30</li>
                                <li><Icofont icon="rounded-right"/> <strong>Degree:</strong> Master</li>
                                <li><Icofont icon="rounded-right"/> <strong>PhEmailone:</strong> email@example.com</li>
                                <li><Icofont icon="rounded-right"/> <strong>Freelance:</strong> Available</li>
                            </ul>
                        </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p> */}
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default About;
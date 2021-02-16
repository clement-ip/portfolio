import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

function Hero(){
    return(
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Clement Ip</h1>
                <div className = "typed">
                    {/* <p>
                        I'm a
                    </p> */}
                    <div className="typewriter">
                        <Typewriter
                                options={{
                                    strings: ['Software Developer', 
                                    'Mathematician', 
                                    'Photographer', 
                                    'Outdoor Enthusiast', 
                                    'Learner'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                    changeDeleteSpeed: 2000
                                }}
                        />    
                    </div>
                </div>
            </div>
            <div className="scroll-down">
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                    <i className="icofont-simple-down"/>
                </Link>
            </div>
        </section>
    );
}

export default Hero;
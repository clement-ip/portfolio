import React from 'react';
import Typewriter from 'typewriter-effect';

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
                                    'Leader', 
                                    'Photographer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                    changeDeleteSpeed: 2000
                                }}
                        />    
                    </div>
                </div>
                {/* <p>A <span className="typed" data-typed-items="Software Developer, Mathematician, Photographer, Leader, Photographer"></span></p> */}
            </div>
        </section>
    );
}

export default Hero;

// style="color: #fff; padding-bottom: 4px; letter-spacing: 1px; border-bottom: 3px solid #149ddd font-size: 26px; font-family: "Poppins", sans-serif;"
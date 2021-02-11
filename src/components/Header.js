import React, { useState } from 'react';
import { Link } from 'react-scroll';
// import Footer from './Footer';
// import { useState } from 'react';

function Header(){
    // const [isActive, setActive] = useState("false");

    // const handleToggle = () =>{
    //     setActive(!isActive);
    //     // toggleClass('icofont-navigation-menu icofont-close');
    // }

    return(
        <div>
            {/* <div className={isActive ? "mobile-nav-toggle d-xl-none" : null}> */}
                {/* <button type="button" onClick={handleToggle} ><i className="icofont-navigation-menu"></i></button> */}
                {/* <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button> */}
            {/* </div> */}
                <header id="header">
                    <div className="d-flex flex-column justify-content-start">
                        <div className="profile">
                            {/* <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/> */}
                            <h1 className="text-light"><a href="/">Clement Ip</a></h1>
                            <div className="social-links mt-3 text-center">
                                {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
                                <a href="mailto:clement.ip96@gmail.com" className="email" target="_blank" rel="noopener noreferrer">
                                    <i className="bx bx-envelope"/>
                                </a>
                                <a href="https://www.linkedin.com/in/clement-kc-ip/" className="linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="bx bxl-linkedin"/>
                                </a>
                                <a href="https://github.com/clement-ip" className="github" target="_blank" rel="noopener noreferrer">
                                    <i className="bx bxl-github"/>
                                </a>
                                {/* <a href="/" className="flickr" target="_blank" rel="noopener noreferrer">
                                    <i className="bx bxl-flickr"/>
                                </a> */}
                            </div>
                        </div>
                        <nav className="nav-menu">
                            <ul>
                                <Link activeClass="active" to="hero" spy={true} smooth={true} duration={1000}>
                                    <i className="bx bx-home"/><span>Home</span>
                                </Link>
                                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                                    <i className="bx bx-user"/><span>About</span>
                                </Link>
                                <Link activeClass="active" to="resume" spy={true} smooth={true} duration={1000}>
                                    <i className="bx bx-file-blank"/><span>Resume</span>
                                </Link>
                                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
                                    <i className="bx bx-book-content"/><span>Projects</span>
                                </Link>
                                {/* <Link activeClass="active" to="services" spy={true} smooth={true} duration={1000}>
                                    <i className="bx bx-server"/><span>Services</span>
                                </Link> */}
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                                    <i className="bx bx-envelope"/><span>Contact</span>
                                </Link>
                                {/* <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                                <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                                <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                                <li><a href="#portfolio"><i className="bx bx-book-content"></i><span>Projects</span></a></li>
                                <li><a href="#services"><i className="bx bx-server"></i><span>Serivces</span></a></li>
                                <li><a href="#contact"><i className="bx bx-envelope"></i><span>Contact</span></a></li> */}
                            </ul>
                        </nav>
                        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
                    </div>
                    
                </header>
        </div>
    );
}

export default Header;
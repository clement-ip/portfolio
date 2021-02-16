import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';


function Header(props){
    const [menuState, setMenuState] = useState(props);

    useEffect(() => {
        setMenuState(props);
    }, [props]);

    function scrollToTop() {
        scroll.scrollToTop();
    }

    return(
        <header id="header">
            <div className="d-flex flex-column justify-content-start">
                <div className="profile">
                    <div onClick={scrollToTop} className="image-name" style={{cursor:"pointer"}}>
                        {/* <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/> */}
                        {/* <h1 className="text-light"><a href="/">Clement Ip</a></h1> */}
                        <h1 className="text-light">Clement Ip</h1>
                    </div>
                    <div className="social-links mt-3 text-center">
                        {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
                        <a href={process.env.REACT_APP_EMAIL_URL} className="email" target="_blank" rel="noopener noreferrer">
                            <i className="bx bx-envelope"/>
                        </a>
                        <a href={process.env.REACT_APP_LINKEDIN_URL} className="linkedin" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin"/>
                        </a>
                        <a href={process.env.REACT_APP_GITHUB_URL} className="github" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"/>
                        </a>
                        {/* <a href="/" className="flickr" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-flickr"/>
                        </a> */}
                    </div>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="hero" spy={true} smooth={true} duration={1000}>
                                <i className="bx bx-home"/><span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                                <i className="bx bx-user"/><span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="resume" spy={true} smooth={true} duration={1000}>
                                <i className="bx bx-file"/><span>Resume</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
                                <i className="bx bx-book-content"/><span>Projects</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="services" spy={true} smooth={true} duration={1000}>
                                <i className="bx bx-server"/><span>Services</span>
                            </Link>
                        </li>  */}
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                                <i className='bx bx-message-square-edit'/><span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;
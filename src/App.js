import React, { useState } from "react";
// import { animateScroll as scroll } from 'react-scroll';
// import { fadeIn, fadeOut } from 'react-animations';

import About from './components/About';
import BackToTop from './components/BackToTop'
import Contact from './components/Contact/Contact';
// import Facts from './components/Facts';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
// import Services from './components/Services';
// import Skills from './components/Resume/Skills';
// import Testimonials from './components/Testimonials';

// import './App.css';

function App() {
  const [menuActive, setMenuState] = useState(false);

  const toggle = () => {
    setMenuState(!menuActive);
  };

  const checkToggle = () => {
    if(menuActive === true){
      toggle();
    }
    return null;
  }

  return (
    <div>
      <button type="button" onClick={toggle} className="mobile-nav-toggle d-xl-none">
          <i className={`${menuActive ? "icofont-close" : "icofont-navigation-menu"}`}/>
      </button>
      <div onClick={checkToggle} className={`${menuActive ? "mobile-nav-active" : ""}`}>
        <Header toggle={checkToggle}/>
        <Hero/>
        <div id="main">
          <About/>
          {/* <Facts/> */}
          {/* <Skills/> */}
          <Resume/>
          {/* <Skills/> */}
          <Projects/>
          {/* <Services/> */}
          {/* <Testimonials/> */}
          <Contact/>
        </div>
        <Footer/>
        <BackToTop/>
      </div>
    </div>
  );
}

export default App;

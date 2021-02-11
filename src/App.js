import React from 'react';
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

  // function scrollToTop() {
  //   scroll.scrollToTop();
  // }

  return (
    <div>
      <Header/>
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
      {/* <a href="#hero" className="back-to-top" ><i className="icofont-simple-up"></i></a> */}
      {/* <div className="back-to-top" onClick={scrollToTop}><i className="icofont-simple-up"></i></div> */}
      <BackToTop/>
    </div>
  );
}

export default App;

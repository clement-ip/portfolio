import React, { useState, useEffect, useLayoutEffect } from 'react';
import ProjectData from "./Projects.json";

function Projects(){
    return(
        <section id="projects" className="portfolio">
            <div className="container">

                <div className="section-title">
                <h2>Projects</h2>
                {/* <p>Check out what I've worked on below!</p> */}
                </div>

                {/* <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div> */}

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {
                        ProjectData.items.map((Project, index) => {
                            return(
                                <div className="col-lg-4 col-md-6 portfolio-item" key={index}>
                                    <div className="portfolio-wrap">
                                        <img src={Project.image} className="img-fluid" alt={Project.name}/>
                                        <div className = "portfolio-description">
                                            <h6><b>{Project.name}</b></h6>
                                            <p>{Project.description}</p>
                                        </div>
                                        <div className="portfolio-links">
                                            <a href={Project.github} target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"/></a>
                                            <a href={Project.demo} target="_blank" rel="noopener noreferrer"><i className="bx bx-link"/></a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </section>
    );
}

export default Projects;
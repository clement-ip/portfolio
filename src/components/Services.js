import React from 'react';
import Icofont from 'react-icofont';

function Services(){
    return(
        <section id="services" className="services section-bg">
            <div className="container">

                <div className="section-title">
                <h2>Services</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                    <div className="icon"><Icofont icon="computer"/></div>
                    <h4 className="title">Lorem Ipsum</h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><Icofont icon="chart-bar-graph"/></div>
                    <h4 className="title">Dolor Sitema</h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><Icofont icon="earth"/></div>
                    <h4 className="title">Sed ut perspiciatis</h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><Icofont icon="image"/></div>
                    <h4 className="title">Magni Dolores</h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon"><Icofont icon="settings"/></div>
                    <h4 className="title">Nemo Enim</h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon"><Icofont icon="tasks-alt"/></div>
                    <h4 className="title">Eiusmod Tempor</h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
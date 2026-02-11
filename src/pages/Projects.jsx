import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <section className="page-hero" style={{ backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.8)), url('/images/hero-programs.jpg')" }}>
                <div className="container">
                    <h1>Projects & Initiatives</h1>
                    <p>Comprehensive interventions for holistic community development.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="project-categories">
                        <div className="content-block">
                            <h2><Link to="/projects/education">Education Projects</Link></h2>
                            <p>Empowering the future through knowledge and skills.</p>
                            <ul>
                                <li>Community learning centres</li>
                                <li>School support and digital education access</li>
                                <li>Youth skill development and career awareness</li>
                                <li>Parent and community engagement</li>
                            </ul>
                            <Link to="/projects/education" className="btn btn-secondary">View Details</Link>
                        </div>

                        <div className="divider"></div>

                        <div className="content-block">
                            <h2><Link to="/projects/health">Health Projects</Link></h2>
                            <p>Improving community health through awareness and access.</p>
                            <ul>
                                <li>Preventive health camps and screenings</li>
                                <li>Nutrition, hygiene, and maternal health awareness</li>
                                <li>Mental health sensitisation</li>
                            </ul>
                            <Link to="/projects/health" className="btn btn-secondary">View Details</Link>
                        </div>

                        <div className="divider"></div>

                        <div className="content-block">
                            <h2><Link to="/projects/women-empowerment">Women Empowerment Projects</Link></h2>
                            <p>Supporting women to achieve economic independence and social equity.</p>
                            <ul>
                                <li>Skill training and livelihood support</li>
                                <li>Health, legal, and financial literacy</li>
                                <li>Support for self-help groups and local leadership</li>
                            </ul>
                            <Link to="/projects/women-empowerment" className="btn btn-secondary">View Details</Link>
                        </div>

                        <div className="divider"></div>

                        <div className="content-block">
                            <h2><Link to="/projects/environment">Environmental Programs</Link></h2>
                            <p>Protecting our planet for future generations.</p>
                            <ul>
                                <li>Tree plantation and conservation drives</li>
                                <li>Waste segregation and cleanliness campaigns</li>
                                <li>Environmental education at community level</li>
                            </ul>
                            <Link to="/projects/environment" className="btn btn-secondary">View Details</Link>
                        </div>

                        <div className="divider"></div>

                        <div className="content-block">
                            <h2>Akhatro Films</h2>

                            <p>ACT Mitra is a project in which alone we can do so little but together we can do so much. As
                                strong fund-raising plays very important role in implementation and maintenance of long term and
                                short-term projects and also sustainability of the organization.</p>


                            <p>ACT Mitra project gives opportunity to individuals, various clubs, small scale business,
                                corporates and MNCs to contribute in social cause by joining various social activities of the
                                organization and become a part of charity events by forming group of people who want to donate,
                                engaging in various micro funding activities, creating sense of responsibility among people and
                                to sensitize them about the social issues. All these will be done under guidance and supervision
                                of various experienced people from management studies and social workers.</p>

                        </div>
                    </div>

                    <a href="/#donation-form" className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>Support These Programs</a>
                </div>
            </section>
        </div>
    );
};

export default Projects;

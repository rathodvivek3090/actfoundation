import React from 'react';
import ProjectCard from '../components/ProjectCard';

const WomenEmpowermentProjects = () => {
    return (
        <div>
            <section className="page-hero" style={{ backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.8)), url('/images/hero-programs.jpg')" }}>
                <div className="container">
                    <h1>Women Empowerment Projects</h1>
                    <p>Supporting women to achieve economic independence and social equity.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-block">
                        <h2>Women Empowerment Initiatives</h2>
                        <ul>
                            <li>Skill training and livelihood support</li>
                            <li>Health, legal, and financial literacy</li>
                            <li>Support for self-help groups and local leadership</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WomenEmpowermentProjects;

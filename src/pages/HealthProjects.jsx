import React from 'react';
import ProjectCard from '../components/ProjectCard';

const HealthProjects = () => {
    return (
        <div>
            <section className="page-hero" style={{ backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.8)), url('/images/hero-programs.jpg')" }}>
                <div className="container">
                    <h1>Health Projects</h1>
                    <p>Improving community health through awareness and access.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-block">
                        <h2>Health Initiatives</h2>
                        <ul>
                            <li>Preventive health camps and screenings</li>
                            <li>Nutrition, hygiene, and maternal health awareness</li>
                            <li>Mental health sensitisation</li>
                        </ul>
                    </div>

                    <div className="divider"></div>

                    <ProjectCard
                        title="Project Prayas"
                        content={
                            <p>One of the Self-development goals is to ensure healthy lives and promote well-being for all at
                                all age. A developed health infrastructure will guarantee a strong and healthy future of the
                                country. Under this project we will provide health related support to marginalized groups of the
                                community, help find donners for the people who needs support for emergency health issues for
                                major diseases.</p>
                        }
                        hiddenContent={
                            <p>A developed health infrastructure guarantees a country of strong and healthy manpower for the
                                production of goods and services. Health infrastructure includes advanced machines, specialist
                                doctors, nurses, and other paramedical professionals and developed pharmaceutical industries.
                                Self- development goals also aim to prevent needless suffering from preventable diseases and
                                premature death by focusing on key targets that boost the health of a country's overall
                                population. Regions with the highest burden of disease and neglected population groups and
                                regions will be priority areas. Project also includes creating system of providing need-based
                                support in case of health emergency like Covid-19 with various professionals from medical and
                                social workers from medical social work field.</p>
                        }
                    />
                </div>
            </section>
        </div>
    );
};

export default HealthProjects;

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

                    <div className="divider"></div>

                    <ProjectCard
                        title="Akhatro Films"
                        content={
                            <p>The ACT foundation believes that many people are doing good work in the field of social work, but
                                most of them go unnoticed, due to lack of proper outreach and community engagement. In today’s
                                world, educating people about various social issues and finding varied and reliable information
                                sources is as critical as ever. Documentary films are an in-depth and informative resource
                                examining an event, experience which are a perfect platform to create dialogue.</p>
                        }
                        hiddenContent={
                            <>
                                <p>Akhatro films will encourage all types of organizations working in the field of social work,
                                    people who want to learn the use of camera for community engagement and students from
                                    professional courses i.e. Mass communication, photography and videography, film making and
                                    editing to use minimum technologies to exhibit the social experiments to the society. Project
                                    focuses on effective and innovative use of cameras as a tool to make the positive impact and to
                                    connect different group of people, with the objective to make the people aware of various social
                                    issues, government schemes and provide solutions through multimedia, innovative programs and
                                    projects of various organizations working in the fields of social work and to identify
                                    exceptional work done by various social workers and showcase their social experiments.</p>
                                <p>Akhatro films will be made by various professional film makers, editors and content writers
                                    having profound work experience at community level who will use minimum technologies to exhibit
                                    the social experiments to the society by effective and innovative use of cameras as a tool to
                                    make the positive impact and to connect different group of people.</p>
                            </>
                        }
                    />

                    <div className="divider"></div>

                    <ProjectCard
                        title="ACT Mitra Project"
                        content={
                            <p>ACT Mitra is a project in which alone we can do so little but together we can do so much. As
                                strong fund-raising plays very important role in implementation and maintenance of long term and
                                short-term projects and also sustainability of the organization.</p>
                        }
                        hiddenContent={
                            <p>ACT Mitra project gives opportunity to individuals, various clubs, small scale business,
                                corporates and MNCs to contribute in social cause by joining various social activities of the
                                organization and become a part of charity events by forming group of people who want to donate,
                                engaging in various micro funding activities, creating sense of responsibility among people and
                                to sensitize them about the social issues. All these will be done under guidance and supervision
                                of various experienced people from management studies and social workers.</p>
                        }
                    />
                </div>
            </section>
        </div>
    );
};

export default WomenEmpowermentProjects;

import React from 'react';
import ProjectCard from '../components/ProjectCard';

const EducationProjects = () => {
    return (
        <div>
            <section className="page-hero" style={{ backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.8)), url('/images/hero-programs.jpg')" }}>
                <div className="container">
                    <h1>Education Projects</h1>
                    <p>Empowering the future through knowledge and skills.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-block">
                        <h2>Education Initiatives</h2>
                        <ul>
                            <li>Community learning centres</li>
                            <li>School support and digital education access</li>
                            <li>Youth skill development and career awareness</li>
                            <li>Parent and community engagement</li>
                        </ul>
                    </div>

                    <div className="divider"></div>

                    <ProjectCard
                        title="The Art Project"
                        content={
                            <p>Art is a beauty beyond language. Art is an expression of our thoughts, emotions, intuitions,
                                desires etc. it’s about sharing the way we experience the work. Art also holds immense
                                importance in Indian culture, heritage and tradition. Throughout history, art has played a vital
                                role in the social, religious, and political fabric of the country.</p>
                        }
                        hiddenContent={
                            <p>The art project focuses on promoting various arts and provides opportunities to artisans to
                                grow and sell their art nationally and internationally by providing various platforms, create a
                                community of artists who can connect, collaborate and promote their art.</p>
                        }
                    />
                    <div className="divider"></div>
                    <ProjectCard
                        title="Socio Trekkers"
                        content={
                            <p>Socio trekkers is a concept in which the focus is to give the best adventure experience along
                                with the service of that particular area and the community living out there. It is a program
                                designed to sensitize the people about the nature and to raise awareness about the giving back
                                to the local community for their welfare and betterment.</p>
                        }
                        hiddenContent={
                            <p>Socio trekkers is a long walk on trails, hills, mountains, communities, villages etc. which
                                will be done by group of like-minded people, students of schools, colleges and other educational
                                institutes, young people and working professional under the supervision of professional and
                                trained instructors who are also experienced people in the field of adventure, mountaineering
                                and trekking. The objective of project is to achieve healthy lifestyle, physical and mental
                                fitness through adventure experience, connect with local community and provide an exposure of
                                their lifestyle, culture and tradition and to make the monetary and non-monetary
                                contribution to the local community of trekking area which will be spent toward the environment
                                conservation, education, health and infrastructure development of the community.</p>
                        }
                    />
                    <div className="divider"></div>
                    <ProjectCard
                        title="Project Roar"
                        content={
                            <p>The youth of today are going to be leaders of tomorrow. In a country, where more than 65% of the
                                people are below the age of 35 years, such country can achieve great milestones in the terms of
                                development. Where young people are key constituents, consumers, innovators, workers,
                                entrepreneurs, producers and leaders right now and in the future. The vision of empowered
                                society can only be accomplished when the youth is empowered.</p>
                        }
                        hiddenContent={
                            <p>Project ROAR wants to make the efficient use of creativity and innovative ideas of the youth who
                                is willing to work for community development, students pursuing graduation and post-graduation
                                and youths involved in various areas of social field for nation building as we cannot always
                                build the future for our youth, but we can always build our youth for the future. So, project
                                provides the opportunities to the youth in various development work and volunteer work where
                                youth can utilize the skill and knowledge in different social work activities of the
                                organization through internship program with a special focus on personal development, community
                                engagement and social work exposure at grass root level. Where youths will get exposure of
                                learning various skills, art, craft and different technologies by various professionals from
                                social entrepreneurship and community leaders from different organization.</p>
                        }
                    />
                    <div className="divider"></div>

                    <ProjectCard
                        title="Project Swa Adhyayan"
                        content={
                            <p>Spirituality plays a significant role in the lives of many individuals, including youth. It
                                refers to the search for meaning, purpose, and connection with something greater than oneself.
                                Spirituality can contribute to the emotional well-being of young people. It provides a source of
                                comfort, hope, and resilience during challenging times, helping them cope with stress, anxiety,
                                and depression. Spiritual practices such as prayer, meditation, or mindfulness can promote inner
                                peace, self-reflection, and a sense of calmness.</p>
                        }
                        hiddenContent={
                            <p>The team of various experienced people practicing Charkha and social workers will work on
                                inculcating spiritual practices among the youth, encourage people to engage in spiritual and
                                mindfulness activities, spread various spiritual and mindfulness activities to help people by
                                conducting awareness camps, workshops, seminars etc. with the help of Charkha (Spinning Wheel)
                            </p>
                        }
                    />

                    <div className="divider"></div>

                    <ProjectCard
                        title="ARDP (ACT Research & Development Project)"
                        content={
                            <p>ACT Research & Development Project is the systematic investigation and study of community-based
                                problems and social issues in order to establish facts, increase knowledge base, get latest
                                information, build credibility etc. for the development of projects, programs, strategies and
                                policies.</p>
                        }
                        hiddenContent={
                            <p>High quality research will be conducted by various social experts like research organizations
                                working in the field of social research and policy making, individuals who want to conduct
                                independent research studies, Ph.D scholars from various education streams and technical experts
                                based on problems from urban planning, engineering and architect field having profound work
                                experience in their respective fields.</p>
                        }
                    />

                </div>
            </section>
        </div>
    );
};

export default EducationProjects;

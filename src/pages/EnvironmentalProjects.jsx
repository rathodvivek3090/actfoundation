import React from 'react';
import ProjectCard from '../components/ProjectCard';

const EnvironmentalProjects = () => {
    return (
        <div>
            <section className="page-hero" style={{ backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.8)), url('/images/hero-programs.jpg')" }}>
                <div className="container">
                    <h1>Environmental Programs</h1>
                    <p>Protecting our planet for future generations.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-block">
                        <h2>Environmental Initiatives</h2>
                        <ul>
                            <li>Tree plantation and conservation drives</li>
                            <li>Waste segregation and cleanliness campaigns</li>
                            <li>Environmental education at community level</li>
                        </ul>
                    </div>

                    <div className="divider"></div>

                    <ProjectCard
                        title="Green Ganesha Project"
                        content={
                            <p>Ganesh Chaturthi is 10 days festival marking the birth of the elephant-headed deity Ganesha, the
                                god of prosperity, knowledge, good luck and wisdom.</p>
                        }
                        hiddenContent={
                            <>
                                <p>People celebrate this festival by bringing painted ganesh idol made of clay or Plaster of
                                    Paris (POP) and perform rituals with devotion. The festival concludes with ‘Gansh visarjan’ a
                                    process of immersing the idol in a river to see-off of the lord. Unfortunately, not all cities are
                                    blessed with a river or sea in the proximity. Because of this various ponds lakes and other
                                    water sources are used to see-off the god. Since the paint material used to colour idol contains
                                    ‘lead’ this is toxic in nature. POP too gets dissolved slowly and increases the acidity of water
                                    and thus water is polluted when idol is immersed. This adversely affects the environment,
                                    pollutes water bodies and ecosystem as there have been reports of dead fish and reduction of
                                    aquatic flora and fauna in the water source where idols are immersed.</p>
                                <p>Project green ganesha is an environment friendly initiative to save ecosystem in which ganesh
                                    idols are made of natural clay provided by government of Gujarat and idol is painted using
                                    natural colours. Under this project workshops and seminars are conducted at various urban and
                                    rural areas and also in various corporates, organizations, collages etc. in which team of
                                    trained artist and experts working in the field of idol making teaches how to make eco-friendly
                                    idol with the objective of spreading the message of environment conservation, supporting local
                                    artists and avoiding the use of POP idols.</p>
                                <p>This innovative project also involves the practice of gift economy and financially support the
                                    local artists and encourage their art and also the monetary contribution from this project will
                                    help in education and skill development project i.e., Tiny Library in which library will be made
                                    in tribal areas which will include books, computer lab, seminar room, smart class room, open air
                                    theater etc. so that tribal children can get excess smart education system by the use of
                                    technology.</p>
                            </>
                        }
                    />

                    <div className="divider"></div>

                    <ProjectCard
                        title="Project Solar"
                        content={
                            <p>Sunlight is a renewable energy derived from natural source that is replenished at a higher rate
                                than they are consumed. Solar energy is the most abundant of all energy sources and can even be
                                harnessed in cloudy weather. By harnessing the power of the sun, we can generate clean
                                electricity without depleting finite resources or contributing to greenhouse gas emissions.
                                Solar technology converts sunlight into electrical energy either through photovoltaic panels or
                                through mirrors the concentrates solar radiation. Solar products like solar air conditioning,
                                solar cell phone charger, solar chimney, solar calculator, solar cooker, solar dryer etc.
                                utilize this sustainable energy source, reducing our reliance on non-renewable fossil fuels and
                                promoting a more sustainable energy future.</p>
                        }
                        hiddenContent={
                            <p>The solar project focuses on encouraging and helping rural people to start the use of solar
                                appliances by making sure that solar products and solar appliances are available at affordable
                                price so that people can purchase and start using. The use of solar appliances will reduce the
                                use of non-renewable sources of energy and also reduce the expense like light bill, gas bill
                                etc. if they start using solar light and solar cooker for cooking food.</p>
                        }
                    />
                </div>
            </section>
        </div>
    );
};

export default EnvironmentalProjects;

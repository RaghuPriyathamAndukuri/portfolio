import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleCollapse = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const skillsData = [
        {
            title: 'Data Engineer',
            icon: 'fas fa-database',
            skills: [
                { name: 'Python', icon: 'fas fa-code' },
                { name: 'SQL', icon: 'fas fa-database' },
                { name: 'Cloud Computing (AWS, GCP)', icon: 'fas fa-cloud' },
                { name: 'ETL Pipelines', icon: 'fas fa-cogs' }
            ]
        },
        {
            title: 'Business Intelligence',
            icon: 'fas fa-chart-line',
            skills: [
                { name: 'Data Visualization (Tableau, Power BI)', icon: 'fas fa-chart-bar' },
                { name: 'Data Warehousing', icon: 'fas fa-database' },
                { name: 'Data Modeling', icon: 'fas fa-cogs' },
                { name: 'Dashboard Development', icon: 'fas fa-chart-pie' }
            ]
        },
        {
            title: 'Web Development',
            icon: 'fas fa-code',
            skills: [
                { name: 'HTML5', icon: 'fab fa-html5' },
                { name: 'CSS3', icon: 'fab fa-css3-alt' },
                { name: 'JavaScript', icon: 'fab fa-js' },
                { name: 'React.js', icon: 'fab fa-react' }
            ]
        }
    ];

    return (
        <section id="skills">
            <h2>My <span>Skills</span></h2>
            <p>The Skills I have gained through my experience and education</p>
            <div className="skills">
                {skillsData.map((category, index) => (
                    <motion.div
                        className="skill-category"
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <button className={`collapsible ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleCollapse(index)}>
                            <span className="collapse-text">
                                <i className={category.icon}></i> {category.title}
                            </span>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    className="content"
                                    initial={{ maxHeight: 0, opacity: 0 }}
                                    animate={{ maxHeight: '500px', opacity: 1 }}
                                    exit={{ maxHeight: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {category.skills.map((skill, i) => (
                                        <div className="skill" key={i}>
                                            <i className={skill.icon}></i> <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import './Project.css';

const Projects = () => {
    const projectsData = [
        {
            image: './Assests/DVR.png',
            title: 'Distance Vector Routing',
            description: 'Distance vector routing unicast is a routing method where routers share information about the best path to a specific destination with their neighbors, using distance metrics like hop count.'
        },
        {
            image: './Assests/Python.png',
            title: 'Personal Finance Tracker',
            description: 'Built a data-driven app to track daily expenses using Python, Pandas, and NumPy to provide statistical insights on spending habits.'
        },
        {
            image: './Assests/exam.png',
            title: 'Online Exam Platform',
            description: 'Developed a scalable online exam platform for users, admins, and super admins with PHP, MySQL, Javascript, AJAX, and Bootstrap.'
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <p>Here are some of the projects I've worked on.</p>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
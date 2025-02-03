import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = ({ inView }) => {
    const slideIn = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    };

    return (
        <section id="about">
            <motion.div
                className="about-section"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideIn}
            >
                <div className="about-image">
                    <img src="./Assests/about_img.png" alt="Profile Image" width="50%" height="auto" />
                </div>

                <div className="about-text">
                    <h2>About <span>Me</span></h2>
                    <span className="bottom-border"></span>
                    <p>Hey there! I'm <span>Raghu Priyatham Andukuri</span>, currently diving into the world of Computer Science with a Master's degree in progress. I've got some hands-on experience too! Spent a year crafting websites at Edsoft Technologies Pvt. Ltd. and another 2.5 years tackling tech challenges at Tata Consultancy Services Pvt. Ltd. Ready to bring that mix of learning and real-world know-how to the table!</p>
                    <blockquote className="quote">"Learn as if you will live forever, live like you will die tomorrow"  <br />-Mahatma Gandhi</blockquote>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
import React, { useState } from 'react';
import './Education.css';

const Education = () => {
    const [expandedBox, setExpandedBox] = useState(null);

    const toggleExpand = (index) => {
        setExpandedBox(expandedBox === index ? null : index);
    };

    const educationData = [
        {
            date: 'August 2023 - May 2025',
            degree: 'Master Degree',
            institution: 'Southern Illinois University Carbondale',
            details: 'Pursuing a Master’s in Computer Science at SIU Carbondale, specializing in Data Engineering, Business Intelligence, and AI, with a 4.0 GPA.'
        },
        {
            date: 'June 2016 - April 2019',
            degree: 'Bachelor\'s Degree',
            institution: 'Raghu Engineering College',
            details: 'Completed a Bachelor\'s degree in Electronics and Communication Engineering, gaining a strong foundation in electronics, communication systems, and practical engineering skills.'
        },
        {
            date: 'April 2013 - May 2016',
            degree: 'Polytechnic Degree',
            institution: 'T.R.R College of Technology',
            details: 'Completed a Diploma in Electronics and Communication Engineering, gaining hands-on experience in circuit design, troubleshooting, and communication systems.'
        }
    ];

    const experienceData = [
        {
            date: 'August 2023 - Present',
            position: 'Digital Media',
            company: 'WSIU',
            details: 'Digital Media Specialist at WSIU, enhancing website functionality, creating multimedia content, and boosting donations through strategic video scripting.'
        },
        {
            date: 'March 2021 - August 2022',
            position: 'System Engineer',
            company: 'Tata Consultancy Services',
            details: 'System Engineer at Tata Consultancy Services, specializing in financial reporting systems, data integration, and performance optimization, while streamlining processes and reducing downtime.'
        },
        {
            date: 'February 2020 - March 2021',
            position: 'Junior Developer',
            company: 'Edsoft Technologies',
            details: 'Junior Developer at Edsoft Technologies, creating data-driven dashboards, developing e-learning systems, and enhancing WooCommerce sites to boost user engagement and client satisfaction.'
        }
    ];

    return (
        <section id="education">
            <div className="education-section">
                <main className="row">
                    <div className="education-col">
                        <header className="title">
                            <h2>EDUCATION</h2>
                        </header>
                        <div className="contents">
                            {educationData.map((edu, index) => (
                                <div className={`box ${expandedBox === index ? 'expanded' : ''}`} key={index} onClick={() => toggleExpand(index)}>
                                    <h4>{edu.date}</h4>
                                    <h3>{edu.degree}</h3>
                                    <p>{edu.institution}</p>
                                    {expandedBox === index && <div className="more-info">{edu.details}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="education-col">
                        <header className="title">
                            <h2>EXPERIENCE</h2>
                        </header>
                        <div className="contents">
                            {experienceData.map((exp, index) => (
                                <div className={`box ${expandedBox === index + educationData.length ? 'expanded' : ''}`} key={index} onClick={() => toggleExpand(index + educationData.length)}>
                                    <h4>{exp.date}</h4>
                                    <h3>{exp.position}</h3>
                                    <p>{exp.company}</p>
                                    {expandedBox === index + educationData.length && <div className="more-info">{exp.details}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Education;
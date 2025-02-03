import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Close menu after selection
        }
    };

    return (
        <header>
            <div className="header">
                <nav>
                    <a href="./index.html">
                        <img src="./Assests/Logo/Logo.png" alt="Logo" className="logo" />
                    </a>

                    {/* Hamburger Menu Icon */}
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Navbar Links */}
                    <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                        <li><button onClick={() => scrollToSection('about')}>About</button></li>
                        <li><button onClick={() => scrollToSection('education')}>Education</button></li>
                        <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                    </ul>

                    <form method="get" action="./Assests/Resume/Raghu_Resume.pdf">
                        <button type="submit" className="button">Download My CV</button>
                    </form>
                </nav>

                {/* Hero Section */}
                <motion.div className="hero-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Hi, I'm <span>Raghu Priyatham Andukuri</span></h1>
                    <p>Master's Student in Computer Science <br /> At Southern Illinois University of Carbondale.</p>

                    <form method="get" action="./Assests/Resume/Raghu_Resume.pdf">
                        <button type="submit" className="button">Download My CV</button>
                    </form>

                    <a href="http://www.linkedin.com/in/raghuandukuri" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/raghupriyathamandukuri/" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </motion.div>

                {/* Responsive Hero Image */}
                <motion.div className="hero-image"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <img src="./Assests/hero_img.png" alt="Hero image" className="main-image" />
                </motion.div>
            </div>
        </header>
    );
};

export default Header;

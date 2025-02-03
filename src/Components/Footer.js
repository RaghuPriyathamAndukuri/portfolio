import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="social-icons">
                <a href="http://www.linkedin.com/in/raghuandukuri" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/raghupriyathamandukuri/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.instagram.com/mr_andukuri/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            &copy; 2025 Raghu Priyatham Andukuri | Portfolio
        </motion.footer>
    );
};

export default Footer;
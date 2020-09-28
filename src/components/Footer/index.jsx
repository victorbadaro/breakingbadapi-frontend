import React, { useState, useEffect } from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaCopyright, FaGoogle } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

import './styles.css';

export default function Footer() {
    const [year, setYear] = useState(0);

    useEffect(() => {
        setYear(new Date(Date.now()).getFullYear());
    }, []);

    return (
        <footer>
            <div className="info">
                <p>made with <FcLike /> by Victor Badaró</p>
                <p><FaCopyright /> All rights reserved - {year}</p>
            </div>
            <div className="divider"></div>
            <div className="contact">
                <a href="https://www.linkedin.com/in/victor-badar%C3%B3/" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                    LinkedIn
                </a>
                <a href="https://github.com/victorbadaro" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                    GitHub
                </a>
                <a href="mailto: victor.badaro92@gmail.com">
                    <FaGoogle />
                    e-mail: victor.badaro92@gmail.com
                </a>
            </div>
        </footer>
    );
}
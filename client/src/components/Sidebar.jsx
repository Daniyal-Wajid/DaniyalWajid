import React, { useRef, useEffect, useCallback } from 'react';
import './styles.css';
import LinkedInIcon from '../assets/linkedin.png';
import GitHubIcon from '../assets/github.png';
import InstagramIcon from '../assets/instagram.png';

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClose(); // Close sidebar after clicking a link
  };

  const handleClickOutside = useCallback((event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      onClose(); // Close sidebar when clicking outside
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup on unmount
    };
  }, [isOpen, handleClickOutside]); // Include handleClickOutside here

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      <button onClick={onClose} className="close-btn" aria-label="Close Sidebar">✖</button>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('services')}>My Services</li>
          <li onClick={() => scrollToSection('skills')}>My Skills</li>
          <li onClick={() => scrollToSection('portfolio')}>My Portfolio</li>
          <li onClick={() => scrollToSection('resume')}>My Resume</li>
          <li onClick={() => scrollToSection('pricing')}>Pricing</li>
          <li onClick={() => scrollToSection('achievements')}>Achievements</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
      <div className="social-links-sidebar">
        <a href="https://www.linkedin.com/in/daniyal-wajid" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/Daniyal-Wajid" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/dani.94_?igsh=YnR1aHg2dG44bGtw" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

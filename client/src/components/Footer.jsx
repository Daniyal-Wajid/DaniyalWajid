import React from 'react';
import './styles.css'; // Make sure to create this CSS file
import LinkedInIcon from '../assets/linkedin.png';
import GitHubIcon from '../assets/github.png';
import InstagramIcon from '../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a  href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
        <p className='text-footer'>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="developer-info">
          <p className='text-footer'>Developed by Daniyal Wajid</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

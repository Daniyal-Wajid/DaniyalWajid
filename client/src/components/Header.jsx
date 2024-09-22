import React from 'react';
import './styles.css';
import Daniyal from '../assets/Daniyal.png';
import LinkedInIcon from '../assets/linkedin.png';
import GitHubIcon from '../assets/github.png';
import InstagramIcon from '../assets/instagram.png';

const Header = () => {
  return (
    <div className="Header">
      <div className='name'>
        <div className="intro">
          <span className="Heading">HELLO,</span>
          <span style={{ color: "#6A9C89" }} className='Heading-2'>MY NAME IS</span>
        </div>
        <div className="name-details">
          <span style={{ color: "#6A9C89" }} className='Heading-name'>DANIYAL</span>
          <span className='Heading-name-2'>WAJID</span>
        </div>
        <div className='subtitle'>I'm a Web Developer</div>
        <div className='additional-info'>
        From Lahore, Pakistan: MERN Stack Developer with Rich Web Design Experience Ready to Collaborate on Unique Projects!
        </div>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/yourprofile" className='social-link' target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/yourprofile" className='social-link' target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a href="https://twitter.com/yourprofile" className='social-link' target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Twitter" />
          </a>
        </div>
        <div className='button-container'>
          <a href="/path-to-cv" className='button download-cv' download>Download CV</a>
          <a href="/skills" className='button my-skills'>My Skills</a>
        </div>
      </div>
      <div className='img-container'>
        <div className='img-circle'>
          <img src={Daniyal} alt="Daniyal" />
        </div>
      </div>
    </div>
  );
}

export default Header;

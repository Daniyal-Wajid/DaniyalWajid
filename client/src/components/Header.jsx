'use client';

import React, { useEffect, useState } from 'react';

const Daniyal = '/assets/Daniyal.png';
const LinkedInIcon = '/assets/linkedin.png';
const GitHubIcon = '/assets/github.png';
const InstagramIcon = '/assets/instagram.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='home' className="Header">
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
        {isMobile && (
          <div className='img-container'>
            <div className='img-circle'>
              <img src={Daniyal} alt="Daniyal" />
            </div>
          </div>
        )}
        <div className='additional-info'>
          From Lahore, Pakistan: MERN Stack Developer with Rich Web Design Experience Ready to Collaborate on Unique Projects!
        </div>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/daniyal-wajid" className='social-link' target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Daniyal-Wajid" className='social-link' target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/dani.94_?igsh=YnR1aHg2dG44bGtw" className='social-link' target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
        <div className='button-container'>
          <a href="/Daniyal Wajid.pdf" className='button download-cv' download>Download CV</a>
          <button className='button my-skills'
            onClick={() => {
              const skillsSection = document.getElementById('skills');
              if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            My Skills
          </button>
        </div>
      </div>
      {!isMobile && (
        <div className='img-container'>
          <div className='img-circle'>
            <img src={Daniyal} alt="Daniyal" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

'use client';

import React, { useEffect, useState } from 'react';
import SwipeDots from './SwipeDots';
import { useSwipeIndex } from '../utils/useSwipeIndex';

const Resume = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState({ education: [], experience: [] });

  useEffect(() => {
    const handleScroll = () => {
      const headingPosition = document.querySelector('.resume-heading').getBoundingClientRect().top;
      const subheadingPosition = document.querySelector('.resume-subheading').getBoundingClientRect().top;
      const educationPosition = document.querySelector('.education-container').getBoundingClientRect().top;
      const experiencePosition = document.querySelector('.experience-container').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setHeadingVisible(headingPosition < windowHeight);
      setSubheadingVisible(subheadingPosition < windowHeight);
      setEducationVisible(educationPosition < windowHeight);
      setExperienceVisible(experiencePosition < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const educationData = [
    { 
      name: 'BS Software Engineering (Gold Medalist)', 
      details: 'Riphah International University, Lahore | 2022 - 2026\nCGPA: 3.77 / 4.00 — Chancellor\'s (Highest) Honor List: Spring 2024, Fall 2024, Spring 2026' 
    },
    { 
      name: 'Relevant Coursework & Certifications', 
      details: '30+ certifications completed in Artificial Intelligence, Machine Learning, Python, and Software Engineering.\nTOEFL iBT Score: 100/120 (CEFR C1)' 
    },
  ];
    
  const experienceData = [
    { 
      title: 'Freelance Software Developer (2024 - Present)', 
      details: 'Developed MERN-stack applications, REST APIs, authentication, and database solutions for clients.\nDesigned scalable backend architectures and optimized application performance.\nCollaborated directly with stakeholders from requirements gathering through deployment.' 
    },
    { 
      title: 'Teaching Assistant — Riphah International University (2024 - 2025)', 
      details: 'Mentored 30+ students in programming, algorithms, debugging, and software engineering concepts.\nAssisted in coursework evaluation, project reviews, and technical problem-solving sessions.' 
    },
  ];

  const education = useSwipeIndex(educationData.length);
  const experience = useSwipeIndex(experienceData.length);

  const toggleDetails = (type, index) => {
    setExpandedIndex(prev => {
      const newExpanded = prev[type].includes(index)
        ? prev[type].filter(i => i !== index)
        : [...prev[type], index];

      return { ...prev, [type]: newExpanded };
    });
  };

  const renderList = (data, type, containerRef) => (
    <ul className={`${type}-list`} ref={containerRef}>
      {data.map((item, index) => (
        <li key={index} className={`${type}-item ${expandedIndex[type].includes(index) ? 'expanded' : ''}`} onClick={() => toggleDetails(type, index)}>
          <div className={`${type}-name`}>
            {type === 'education' ? item.name : item.title}
            <button className="details-button">{expandedIndex[type].includes(index) ? '-' : '+'}</button>
          </div>
          <div className={`${type}-details`}>{expandedIndex[type].includes(index) ? item.details : null}</div>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <div id='resume' className={`resume-heading ${headingVisible ? 'fade-in' : ''}`}>My Resume</div>
      <div className={`resume-subheading ${subheadingVisible ? 'fade-in' : ''}`}>My Story</div>
      <div className="container">
        <div className={`education-container ${educationVisible ? 'fade-in' : ''}`}>
          <h2 className="education-heading">Education</h2>
          {renderList(educationData, 'education', education.containerRef)}
          <SwipeDots count={educationData.length} activeIndex={education.activeIndex} onDotClick={education.scrollToIndex} />
        </div>
        <div className={`experience-container ${experienceVisible ? 'fade-in' : ''}`}>
          <h2 className="experience-heading">Experience</h2>
          {renderList(experienceData, 'experience', experience.containerRef)}
          <SwipeDots count={experienceData.length} activeIndex={experience.activeIndex} onDotClick={experience.scrollToIndex} />
        </div>
      </div>
    </div>
  );
};

export default Resume;

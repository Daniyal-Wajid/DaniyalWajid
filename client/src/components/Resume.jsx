import React, { useEffect, useState } from 'react';
import './styles.css';

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
    { name: 'Bachelor of Science in Computer Science', details: 'XYZ University, 2016-2020' },
    { name: 'Master of Science in Software Engineering', details: 'ABC University, 2020-2022' },
  ];

  const experienceData = [
    { title: 'Software Developer', details: 'Company A, 2020-Present' },
    { title: 'Intern', details: 'Company B, Summer 2019' },
  ];

  const toggleDetails = (type, index) => {
    setExpandedIndex(prev => {
      const newExpanded = prev[type].includes(index)
        ? prev[type].filter(i => i !== index)
        : [...prev[type], index];

      return { ...prev, [type]: newExpanded };
    });
  };

  const renderList = (data, type) => (
    <ul className={`${type}-list`}>
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
      <div className={`resume-heading ${headingVisible ? 'fade-in' : ''}`}>My Resume</div>
      <div className={`resume-subheading ${subheadingVisible ? 'fade-in' : ''}`}>My Story</div>
      <div className="container">
        <div className={`education-container ${educationVisible ? 'fade-in' : ''}`}>
          <h2 className="education-heading">Education</h2>
          {renderList(educationData, 'education')}
        </div>
        <div className={`experience-container ${experienceVisible ? 'fade-in' : ''}`}>
          <h2 className="experience-heading">Experience</h2>
          {renderList(experienceData, 'experience')}
        </div>
      </div>
    </div>
  );
};

export default Resume;

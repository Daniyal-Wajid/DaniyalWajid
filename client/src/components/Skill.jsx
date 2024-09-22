import React, { useEffect, useRef, useState } from 'react';

const Skill = ({ name, percentage, description }) => {
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (progressRef.current) {
        const progressPosition = progressRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (progressPosition < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`skill-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <p className="skill-description">{description}</p>
      <div className="progress-bar-container">
        <div 
          className={`progress-bar ${isVisible ? 'fill-progress' : ''}`} 
          ref={progressRef} 
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
        <div 
          className="progress-circle" 
          style={{ 
            left: isVisible ? `${percentage}%` : '0%', 
            transform: 'translateX(-50%)' // Center the circle
          }} 
        ></div>
      </div>
    </div>
  );
};

export default Skill;

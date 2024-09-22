import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Skill from './Skill';

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const skillsPosition = skillsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillsPosition < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={skillsRef} className="skills-container">
      <div className={`skills-heading ${isVisible ? 'fade-in' : ''}`}>Professional Skills</div>
      <div className={`skills-subheading ${isVisible ? 'fade-in' : ''}`}>My Talent</div>
      <div className="skills-wrapper">
        <Skill name="HTML" percentage={90} description="Markup language for creating web pages." />
        <Skill name="CSS" percentage={85} description="Style sheet language for designing web pages." />
        <Skill name="JavaScript" percentage={90} description="Programming language for creating interactive web content." />
        <Skill name="React" percentage={85} description="JavaScript library for building user interfaces." />
        <Skill name="Node.js" percentage={80} description="JavaScript runtime for building server-side applications." />
        <Skill name="Express" percentage={80} description="Web framework for Node.js to build APIs." />
        <Skill name="MongoDB" percentage={75} description="NoSQL database for storing data in JSON-like format." />
        <Skill name="SQL" percentage={70} description="Language for managing and querying relational databases." />
        <Skill name="Python" percentage={75} description="Versatile programming language used in web development and data analysis." />
        <Skill name="Java" percentage={70} description="Object-oriented programming language used for building cross-platform applications." />
        <Skill name="C++" percentage={65} description="General-purpose programming language for system/software development." />
        <Skill name="Bootstrap" percentage={80} description="Front-end framework for developing responsive web designs." />
      </div>
    </div>
  );
};

export default Skills;

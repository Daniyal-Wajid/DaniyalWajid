'use client';

import React, { useEffect, useRef, useState } from 'react';
import Skill from './Skill';
import SwipeDots from './SwipeDots';
import { useSwipeIndex } from '../utils/useSwipeIndex';

const skillsData = {
  'AI / ML': [
    { name: 'Python', percentage: 92, description: 'Primary language for AI/ML development, automation, and scripting.' },
    { name: 'PyTorch', percentage: 85, description: 'Deep learning framework used to design and train custom neural networks.' },
    { name: 'TensorFlow', percentage: 80, description: 'Framework for building and deploying machine learning models.' },
    { name: 'OpenCV', percentage: 88, description: 'Computer vision library for real-time image and video processing.' },
    { name: 'YOLOv8', percentage: 90, description: 'Real-time object detection framework used for custom-trained CV models.' },
    { name: 'Scikit-Learn', percentage: 80, description: 'Machine learning library for classical ML algorithms and data modeling.' },
  ],
  'Web': [
    { name: 'React.js', percentage: 88, description: 'JavaScript library for building modern, interactive user interfaces.' },
    { name: 'Next.js', percentage: 80, description: 'React framework for fast, production-ready web applications.' },
    { name: 'Node.js', percentage: 85, description: 'JavaScript runtime for building scalable server-side applications.' },
    { name: 'Express.js', percentage: 82, description: 'Minimal web framework for Node.js used to build REST APIs.' },
    { name: 'MongoDB', percentage: 80, description: 'NoSQL database for storing and querying JSON-like application data.' },
    { name: 'Supabase', percentage: 78, description: 'Open-source Firebase alternative for auth, database, and storage.' },
    { name: 'Firebase', percentage: 78, description: 'Backend-as-a-service platform for auth, realtime data, and hosting.' },
    { name: 'REST APIs', percentage: 85, description: 'Designing and consuming RESTful APIs for full-stack applications.' },
  ],
  'Languages': [
    { name: 'JavaScript', percentage: 88, description: 'Core language for building interactive web applications.' },
    { name: 'C++', percentage: 78, description: 'General-purpose language for systems and software development.' },
    { name: 'Java', percentage: 75, description: 'Object-oriented language used for cross-platform applications.' },
    { name: 'SQL', percentage: 78, description: 'Language for managing and querying relational databases.' },
  ],
  'Core Concepts': [
    { name: 'Data Structures & Algorithms', percentage: 85, description: 'Core problem-solving foundation for efficient, scalable software.' },
    { name: 'OOP', percentage: 85, description: 'Object-oriented design principles for maintainable software.' },
    { name: 'Database Design', percentage: 80, description: 'Designing normalized, efficient relational and NoSQL schemas.' },
    { name: 'System Design', percentage: 78, description: 'Designing scalable, reliable software architecture and systems.' },
    { name: 'Software Architecture', percentage: 78, description: 'Structuring applications for maintainability and scalability.' },
  ],
  'Tools': [
    { name: 'Git & GitHub', percentage: 90, description: 'Version control and collaboration for team-based software projects.' },
    { name: 'Postman', percentage: 82, description: 'API testing and documentation tool for REST API development.' },
    { name: 'VS Code', percentage: 90, description: 'Primary code editor for day-to-day development across stacks.' },
  ],
};

const categories = Object.keys(skillsData);

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { containerRef, activeIndex, scrollToIndex } = useSwipeIndex(`${activeCategory}-${skillsData[activeCategory].length}`);

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

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='skills' ref={skillsRef} className="skills-container">
      <div className={`skills-heading ${isVisible ? 'fade-in' : ''}`}>Professional Skills</div>
      <div className={`skills-subheading ${isVisible ? 'fade-in' : ''}`}>My Talent</div>

      <div className="skills-tabs" role="tablist" aria-label="Skill categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            type="button"
            aria-selected={activeCategory === cat}
            className={`skills-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            <span className="skills-tab-count">{skillsData[cat].length}</span>
          </button>
        ))}
      </div>

      <div className="skills-wrapper" key={activeCategory} ref={containerRef}>
        {skillsData[activeCategory].map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            description={skill.description}
          />
        ))}
      </div>
      <SwipeDots count={skillsData[activeCategory].length} activeIndex={activeIndex} onDotClick={scrollToIndex} />
    </div>
  );
};

export default Skills;

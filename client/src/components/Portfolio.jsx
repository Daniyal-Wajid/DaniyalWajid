'use client';

import React, { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import SwipeDots from './SwipeDots';
import { useSwipeIndex } from '../utils/useSwipeIndex';
import { withBasePath } from '../utils/basePath';

const Portfolio = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(Array(6).fill(false));

  const portfolioData = [
  {
    title: 'HawkEye — AI Campus Monitoring',
    description: 'AI-powered campus surveillance with real-time violation detection and alerts.',
    link: 'https://github.com/Daniyal-Wajid/Hawkeye',
    image: withBasePath('/assets/portfolio/Hawkeye.png'),
    badge: '1st Place — Final Year Project',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'React.js', 'Node.js', 'MongoDB'],
    stats: [
      { value: '90.4%', label: 'mAP@50' },
      { value: '91.8%', label: 'Recall' },
      { value: '80.7%', label: 'Precision' },
    ],
  },
  {
    title: 'Attendify — Face Recognition Attendance',
    description: 'Face recognition system for automated student attendance and tracking.',
    link: 'https://github.com/Daniyal-Wajid/Attendify',
    image: withBasePath('/assets/portfolio/Attendify.png'),
    tags: ['Python', 'CNN', 'OpenCV', 'React.js', 'Node.js', 'MongoDB'],
    stats: [
      { value: '80%+', label: 'Recognition Accuracy' },
      { value: '90%', label: 'Less Manual Effort' },
    ],
  },
  {
    title: 'ClassTrack — Exam Monitoring Platform',
    description: 'RFID and AI-powered exam monitoring with real-time suspicious activity detection.',
    link: 'https://github.com/Daniyal-Wajid/Classtrack',
    image: withBasePath('/assets/portfolio/Classtrack.png'),
    tags: ['Python', 'YOLOv8', 'OpenCV', 'RFID', 'React.js', 'Node.js'],
    stats: [
      { value: '80%+', label: 'Detection Accuracy' },
      { value: '60%', label: 'Less Invigilation Effort' },
    ],
  },
{
  title: 'CodeSense',
  description: 'AI-powered code analysis tool for detecting issues and suggesting smart improvements.',
  link: 'https://github.com/Daniyal-Wajid/CodeSense',
  image: withBasePath('/assets/portfolio/codesense.png'),
  tags: ['Python', 'React.js', 'Node.js'],
},
{
  title: 'Orbiqe Technologies',
  description: 'Modern company website showcasing electrification solutions and engineering services.',
  link: 'https://orbiqetech.com/',
  image: withBasePath('/assets/portfolio/orbiqe.png'),
  tags: ['React.js', 'Node.js', 'MongoDB'],
},
];

  const { containerRef, activeIndex, scrollToIndex } = useSwipeIndex(portfolioData.length);
  

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const headingPosition = document.querySelector('.portfolio-heading').getBoundingClientRect().top;
      setHeadingVisible(headingPosition < windowHeight);

      const subheadingPosition = document.querySelector('.portfolio-subheading').getBoundingClientRect().top;
      setSubheadingVisible(subheadingPosition < windowHeight);

      portfolioData.forEach((_, index) => {
        const cardPosition = document.querySelector(`.portfolio-card-${index}`).getBoundingClientRect().top;
        if (cardPosition < windowHeight) {
          setCardsVisible((prev) => {
            const newCardsVisible = [...prev];
            newCardsVisible[index] = true;
            return newCardsVisible;
          });
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div id='portfolio' className={`portfolio-heading ${headingVisible ? 'fade-in' : ''}`}>My Portfolio</div>
      <div className={`portfolio-subheading ${subheadingVisible ? 'fade-in' : ''}`}>Recent Work</div>

      <div className="portfolio-grid" ref={containerRef}>
        {portfolioData.map((item, index) => (
          <PortfolioCard
          key={index}
          className={`portfolio-card-${index} ${cardsVisible[index] ? 'fade-in' : ''}`}
          title={item.title}
          description={item.description}
          link={item.link}
          image={item.image}
          tags={item.tags}
          badge={item.badge}
          stats={item.stats}
        />        
        ))}
      </div>
      <SwipeDots count={portfolioData.length} activeIndex={activeIndex} onDotClick={scrollToIndex} />
    </div>
  );
}

export default Portfolio;

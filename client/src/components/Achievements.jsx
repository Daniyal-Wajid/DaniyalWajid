'use client';

import React, { useEffect, useState } from 'react';
import { withBasePath } from '../utils/basePath';
import { useTilt } from '../utils/useTilt';
import SwipeDots from './SwipeDots';
import { useSwipeIndex } from '../utils/useSwipeIndex';

const grades = withBasePath('/assets/achievements/grades.png');
const first = withBasePath('/assets/achievements/first-position.png');
const certificates = withBasePath('/assets/achievements/certificate.png');
const medal = withBasePath('/assets/achievements/first-place-medal.svg');
const toefl = withBasePath('/assets/achievements/toefl.svg');

const AchievementCard = ({ achievement, visible }) => {
  const tiltRef = useTilt(6, 5);
  return (
    <div ref={tiltRef} className={`achievements-card ${visible ? 'fade-in' : ''}`}>
      <img className='img-achievements' src={achievement.image} alt={achievement.title} />
      <h3 className="card-title">{achievement.title}</h3>
      <p className="card-description">{achievement.description}</p>
    </div>
  );
};

const Achievements = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.querySelector('.achievements-container');
      if (!el) return;
      const achievementsPosition = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (achievementsPosition < windowHeight) {
        setHeadingVisible(true);
        setCardsVisible(true); 
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { title: "1st Position — Final Year Project", description: "HawkEye placed 1st across all university batches for Final Year Project.", image: medal },
    { title: "Gold Medalist — 3.77 CGPA", description: "Chancellor's (Highest) Honor List: Spring 2024, Fall 2024, Spring 2026.", image: grades },
    { title: "Winner — TechFest 2024", description: "1st place in the TechFest 2024 Speed Programming Competition.", image: first },
    { title: "30+ Certifications", description: "Completed 30+ certifications in AI, Machine Learning, Python, and Software Engineering.", image: certificates },
    { title: "TOEFL iBT — 100/120", description: "Scored CEFR C1 level proficiency on the TOEFL iBT exam.", image: toefl },
  ];

  const { containerRef, activeIndex, scrollToIndex } = useSwipeIndex(achievements.length);

  return (
    <div id='achievements' className="achievements-container">
      <div className={`achievements-heading ${headingVisible ? 'fade-in' : ''}`}>Achievements</div>
      <div className={`achievements-cards ${cardsVisible ? 'fade-in' : ''}`} ref={containerRef}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} visible={cardsVisible} />
        ))}
      </div>
      <SwipeDots count={achievements.length} activeIndex={activeIndex} onDotClick={scrollToIndex} />
    </div>
  );
};

export default Achievements;

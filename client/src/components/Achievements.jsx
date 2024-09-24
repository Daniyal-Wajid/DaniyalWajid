import React, { useEffect, useState } from 'react';
import grades from "../assets/achievements/grades.png";
import first from "../assets/achievements/first-position.png";
import certificates from "../assets/achievements/certificate.png";
import './styles.css';

const Achievements = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const achievementsPosition = document.querySelector('.achievements-container').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (achievementsPosition < windowHeight) {
        setHeadingVisible(true);
        setSubheadingVisible(true);
        setCardsVisible(true); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { title: "High Grades in University", description:  "Maintaining a 3.7 CGPA while pursuing my degree.", image: grades },
    { title: "Winner of Techfest 2024", description: "Secured first place in the Techfest 2024 competition.", image: first },
    { title: "25+ Certificates from Coursera", description: "Completed over 25 courses on Coursera, enhancing my skills.", image: certificates },
  ];

  return (
    <div className="achievements-container">
      <div className={`achievements-heading ${headingVisible ? 'fade-in' : ''}`}>Achievements</div>
      <div className={`achievements-subheading ${subheadingVisible ? 'fade-in' : ''}`}>My Services</div>
      <div className={`achievements-cards ${cardsVisible ? 'fade-in' : ''}`}>
        {achievements.map((achievement, index) => (
          <div key={index} className={`achievements-card ${cardsVisible ? 'fade-in' : ''}`}>
            <img className='img-achievements' src={achievement.image} alt={achievement.title} />
            <h3 className="card-title">{achievement.title}</h3>
            <p className="card-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

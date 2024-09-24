import React, { useEffect, useState } from 'react';
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
    { title: "Achievement One", description: "Description of achievement one.", image: "image1.png" },
    { title: "Achievement Two", description: "Description of achievement two.", image: "image2.png" },
    { title: "Achievement Three", description: "Description of achievement three.", image: "image3.png" },
  ];

  return (
    <div className="achievements-container">
      <div className={`achievements-heading ${headingVisible ? 'fade-in' : ''}`}>Achievements</div>
      <div className={`achievements-subheading ${subheadingVisible ? 'fade-in' : ''}`}>My Services</div>
      <div className={`achievements-cards ${cardsVisible ? 'fade-in' : ''}`}>
        {achievements.map((achievement, index) => (
          <div key={index} className={`achievements-card ${cardsVisible ? 'fade-in' : ''}`}>
            <img src={achievement.image} alt={achievement.title} />
            <h3 className="card-title">{achievement.title}</h3>
            <p className="card-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

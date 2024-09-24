import React, { useEffect, useState } from 'react';
import './styles.css';
import tickImage from '../assets/check.png'; 
import crossImage from '../assets/cross.png'; 


const Pricing = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardsPosition = document.querySelector('.pricing-container').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardsPosition < windowHeight) {
        setCardsVisible(true);
        setSubheadingVisible(true); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pricingData = [
    { title: 'Basic', price: '$80/month', features: ['3 Pages', '7 Days', '1 Revision', 'Form Handling', 'Complete Front-End', 'Authentication'] },
    { title: 'Standard', price: '$150/month', features: ['5 Pages', '10 Days', '2 Revision', 'Form Handling', 'Complete Front-End', 'Authentication'] },
    { title: 'Premium', price: '$250/month', features: ['7 Pages', '14 Days', '3 Revisions','Form Handling', 'Complete Front-End', 'Authentication'] },
  ];

  return (
    <div className="pricing-container">
      <h2 className={`pricing-heading ${cardsVisible ? 'fade-in' : ''}`}>Pricing Plans</h2>
      <div className={`pricing-subheading ${subheadingVisible ? 'fade-in' : ''}`}>My Services</div>
      <div className={`cards ${cardsVisible ? 'fade-in' : ''}`}>
        {pricingData.map((card, index) => (
          <div key={index} className={`pricing-card ${cardsVisible ? 'fade-in' : ''}`}>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-price">{card.price}</p>
              <ul className="card-features">
                {card.features.map((feature, i) => {
                  const isStrikethrough = ['Form Handling', 'Complete Front-End', 'Authentication'].includes(feature) && card.title === 'Basic';
                  const isSecondCardStrikethrough = ['Complete Front-End', 'Authentication'].includes(feature) && card.title === 'Standard';
                  return (
                    <li key={i} className="feature-item" style={isStrikethrough || isSecondCardStrikethrough ? { textDecoration: 'line-through', color: '#aaa' } : {}}>
                      <img src={isStrikethrough || isSecondCardStrikethrough ? crossImage : tickImage} alt={isStrikethrough || isSecondCardStrikethrough ? 'Cross' : 'Tick'} className="tick-image" />
                      {feature}
                    </li>
                  );
                })}
              </ul>
            <button className="buy-button">Start Project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

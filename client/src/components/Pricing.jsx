import React, { useEffect, useState } from 'react';
import './styles.css';

const Pricing = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardsPosition = document.querySelector('.pricing-container').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardsPosition < windowHeight) {
        setCardsVisible(true);
        setSubheadingVisible(true); // Show subheading on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pricingData = [
    { title: 'Basic', price: '$10/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { title: 'Standard', price: '$20/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { title: 'Premium', price: '$30/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
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
              {card.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

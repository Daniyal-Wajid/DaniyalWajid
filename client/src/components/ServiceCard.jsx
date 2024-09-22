import React, { useEffect, useRef, useState } from 'react';
import './styles.css'; 

const ServiceCard = ({ heading, subheading, text, img }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardPosition = cardRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card ${isVisible ? 'fade-in' : ''}`}
    >
      <div className="card-heading">{heading}</div>
      <div className="card-subheading">{subheading}</div>
      <div className="card-text">{text}</div>
      <div style={{ display: "flex" }}>
        <div className='card-btn'>
          <button className="no-border-button">See Price</button>
        </div>
        <div className='card-img'>
          <img src={img} alt={heading} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

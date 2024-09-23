import React, { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard'; 
import './styles.css';

const Portfolio = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(Array(6).fill(false));

  const portfolioData = [
    { title: 'Project One', description: 'An amazing project that does X.', link: 'https://linktoyourproject1.com' },
    { title: 'Project Two', description: 'A groundbreaking project that achieves Y.', link: 'https://linktoyourproject2.com' },
    { title: 'Project Three', description: 'An innovative solution for Z.', link: 'https://linktoyourproject3.com' },
    { title: 'Project Four', description: 'A captivating project that does A.', link: 'https://linktoyourproject4.com' },
    { title: 'Project Five', description: 'An exciting project that accomplishes B.', link: 'https://linktoyourproject5.com' },
    { title: 'Project Six', description: 'A revolutionary project that achieves C.', link: 'https://linktoyourproject6.com' },
  ];

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
      <div className={`portfolio-heading ${headingVisible ? 'fade-in' : ''}`}>My Portfolio</div>
      <div className={`portfolio-subheading ${subheadingVisible ? 'fade-in' : ''}`}>Recent Work</div>

      <div className="portfolio-grid">
        {portfolioData.map((item, index) => (
          <PortfolioCard
            key={index}
            className={`portfolio-card-${index} ${cardsVisible[index] ? 'fade-in' : ''}`}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

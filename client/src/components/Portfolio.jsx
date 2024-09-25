import React, { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard'; 
import orbiqe from "../assets/portfolio/logo.png"
import Rizzq from "../assets/portfolio/rizzq.png"
import Keeper from "../assets/portfolio/Keeper.png"
import FiveWorks from "../assets/portfolio/fiveworks.png"
import Todo from "../assets/portfolio/todo.png"
import './styles.css';

const Portfolio = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(Array(6).fill(false));

  const portfolioData = [
    { 
      title: 'Orbiqe Technologies', 
      description: 'Innovative electrification solutions for a sustainable energy future.', 
      link: 'https://linktoyourproject1.com',
      image: orbiqe
    },
    { 
      title: 'RIZZQ - Job Portal', 
      description: 'A platform connecting job seekers and employers with advanced matching algorithms.', 
      link: 'https://linktoyourproject6.com',
      image: Rizzq
    },
    { 
      title: 'Google Keep Clone', 
      description: 'A user-friendly note and task organizer inspired by Google Keep.', 
      link: 'https://linktoyourproject3.com',
      image: Keeper
    },
    { 
      title: 'FiveWorks Dispatching Services', 
      description: 'Optimizing logistics operations to enhance efficiency and reduce costs.', 
      link: 'https://linktoyourproject5.com',
      image: FiveWorks
    },
    { 
      title: 'ToDo List App', 
      description: 'Manage tasks effectively with features like deadlines and priority settings.', 
      link: 'https://linktoyourproject4.com',
      image: Todo
    },
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
      <div id='portfolio' style={{marginTop:"100px"}} className={`portfolio-heading ${headingVisible ? 'fade-in' : ''}`}>My Portfolio</div>
      <div className={`portfolio-subheading ${subheadingVisible ? 'fade-in' : ''}`}>Recent Work</div>

      <div className="portfolio-grid">
        {portfolioData.map((item, index) => (
          <PortfolioCard
          key={index}
          className={`portfolio-card-${index} ${cardsVisible[index] ? 'fade-in' : ''}`}
          title={item.title}
          description={item.description}
          link={item.link}
          image={item.image} // Make sure this line is included
        />        
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

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
      description: 'A leading company specializing in electrification solutions for sustainable energy, focusing on innovative technologies to power the future.', 
      link: 'https://linktoyourproject1.com',
      image: orbiqe
    },
    { 
      title: 'HUD Electronet', 
      description: 'A groundbreaking project that provides smart electrification solutions for urban transportation, enhancing efficiency and sustainability.', 
      link: 'https://linktoyourproject2.com',
      image: 'https://linktoimage2.com/image.jpg'
    },
    { 
      title: 'RIZZQ - Job Portal', 
      description: 'A revolutionary platform connecting job seekers with employers, designed to streamline the hiring process with advanced matching algorithms.', 
      link: 'https://linktoyourproject6.com',
      image: Rizzq
    },
    { 
      title: 'Google Keeps Clone', 
      description: 'An innovative solution for organizing notes and tasks, inspired by Google Keep, featuring a user-friendly interface and enhanced functionality.', 
      link: 'https://linktoyourproject3.com',
      image: Keeper
    },
    { 
      title: 'FiveWorks Dispatching Services', 
      description: 'An exciting project that optimizes dispatching operations for logistics companies, enhancing efficiency and reducing operational costs.', 
      link: 'https://linktoyourproject5.com',
      image: FiveWorks
    },
    { 
      title: 'ToDo List', 
      description: 'A captivating project that helps users manage their tasks effectively with features like deadlines, reminders, and priority settings.', 
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
      <div style={{marginTop:"100px"}} className={`portfolio-heading ${headingVisible ? 'fade-in' : ''}`}>My Portfolio</div>
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

'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ServiceCard from './ServiceCard';
const front = "/assets/services/frontend.png";
const back = "/assets/services/backend.png";
const full = "/assets/services/fullstack.png";
const ux = "/assets/services/ux.png";

const Services = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);

  const cardData = [
    {
      heading: 'Web Development',
      subheading: 'Beautiful Frontends',
      text: 'I specialize in creating responsive and visually stunning websites that provide an exceptional user experience, ensuring that your brand stands out online.',
      img: front
    },
    {
      heading: 'Web Development',
      subheading: 'Robust Backends',
      text: 'I build powerful backend systems that ensure seamless performance, security, and scalability, enabling your applications to handle any user demand efficiently.',
      img: back
    },
    {
      heading: 'Web Development',
      subheading: 'Full-Stack Solutions',
      text: 'From concept to deployment, I deliver comprehensive full-stack web solutions that integrate both frontend and backend technologies for a cohesive user experience.',
      img: full
    },
    {
      heading: 'UI/UX Design',
      subheading: 'Intuitive Designs',
      text: 'I create intuitive and engaging user interfaces that enhance usability and improve user satisfaction, making your digital products easy to navigate and delightful to use.',
      img: ux
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3, // Default for desktop
    slidesToScroll: 1, // Default for desktop
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Show 3 slides on larger tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, // Show 2 slides on small tablets
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  
  useEffect(() => {
    const handleScroll = () => {
      const headingPosition = document.querySelector('.service-heading').getBoundingClientRect().top;
      const subheadingPosition = document.querySelector('.service-subheading').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (headingPosition < windowHeight) {
        setHeadingVisible(true);
      }
      if (subheadingPosition < windowHeight) {
        setSubheadingVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div id='services' className={`service-heading ${headingVisible ? 'fade-in' : ''}`}>What I Do</div>
      <div className={`service-subheading ${subheadingVisible ? 'fade-in' : ''}`}>My Services</div>
      
      <div className="slider-container">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <ServiceCard 
              key={index}
              heading={card.heading}
              subheading={card.subheading}
              text={card.text}
              img={card.img}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Services;

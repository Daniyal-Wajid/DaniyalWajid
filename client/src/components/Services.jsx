import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ServiceCard from './ServiceCard';
import front from "../assets/services/frontend.png"
import back from "../assets/services/backend.png"
import full from "../assets/services/fullstack.png"
import ux from "../assets/services/ux.png"
import './styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    slidesToShow: 3, // Default for mobile
    slidesToScroll: 1, // Default for mobile
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
      <div className={`service-heading ${headingVisible ? 'fade-in' : ''}`}>What I Do</div>
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

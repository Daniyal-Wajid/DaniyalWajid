import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ServiceCard from './ServiceCard';
import front from "../assets/frontend.png"
import back from "../assets/backend.png"
import full from "../assets/fullstack.png"
import './styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);

  const cardData = [
    {
      heading: 'Web Development',
      subheading: 'Build Responsive Websites',
      text: 'I create responsive and functional websites using the latest technologies.',
      img:front
    },
    {
      heading: 'Mobile Apps',
      subheading: 'Engaging Mobile Experiences',
      text: 'I develop user-friendly mobile applications for both iOS and Android.',
      img:back
    },
    {
      heading: 'UI/UX Design',
      subheading: 'Intuitive Designs',
      text: 'I design visually appealing and user-centric interfaces.',
      img:full
    },
    {
        heading: 'UI/UX Design',
        subheading: 'Intuitive Designs',
        text: 'I design visually appealing and user-centric interfaces.',
        img:front
      }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, 
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

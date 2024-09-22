import React from 'react';
import Slider from 'react-slick';
import ServiceCard from './ServiceCard';
import './styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const cardData = [
    {
      heading: 'Web Development',
      subheading: 'Build Responsive Websites',
      text: 'I create responsive and functional websites using the latest technologies.'
    },
    {
      heading: 'Mobile Apps',
      subheading: 'Engaging Mobile Experiences',
      text: 'I develop user-friendly mobile applications for both iOS and Android.'
    },
    {
      heading: 'UI/UX Design',
      subheading: 'Intuitive Designs',
      text: 'I design visually appealing and user-centric interfaces.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <div className='service-heading'>What I Do</div>
      <div className='service-subheading'>My Services</div>
      
      <div className="slider-container">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <ServiceCard 
              key={index}
              heading={card.heading}
              subheading={card.subheading}
              text={card.text}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Services;

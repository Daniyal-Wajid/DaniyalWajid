import PropTypes from 'prop-types';

const PortfolioCard = ({ className, title, description, link, image }) => {
  return (
    <div className={`portfolio-card ${className}`}>
      {image && <img src={image} alt={title} className="portfolio-card-image" />}
      <div className="portfolio-card-title">{title}</div>
      <div className="portfolio-card-description">{description}</div>
      <a 
        href={link} 
        className="portfolio-card-link" 
        aria-label={`View project for ${title}`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

PortfolioCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default PortfolioCard;

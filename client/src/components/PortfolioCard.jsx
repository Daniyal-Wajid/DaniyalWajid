'use client';

import PropTypes from 'prop-types';
import { useTilt } from '../utils/useTilt';

const PortfolioCard = ({ className, title, description, link, image, tags, badge, stats }) => {
  const tiltRef = useTilt(7, 6);

  return (
    <div ref={tiltRef} className={`portfolio-card ${className}`}>
      {badge && <span className="portfolio-card-badge">{badge}</span>}
      {image ? (
        <img src={image} alt={title} className="portfolio-card-image" />
      ) : (
        <div className="portfolio-card-image-placeholder" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="16" cy="19" r="4" stroke="currentColor" strokeWidth="2.5"/>
            <path d="M4 32L16 22L24 29L32 21L44 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Image coming soon</span>
        </div>
      )}
      <div className="portfolio-card-title">{title}</div>
      <div className="portfolio-card-description">{description}</div>
      <div className="portfolio-card-body-spacer">
        {stats && stats.length > 0 && (
          <div className="portfolio-card-stats">
            {stats.map((stat, i) => (
              <div key={i} className="portfolio-card-stat">
                <span className="portfolio-card-stat-value">{stat.value}</span>
                <span className="portfolio-card-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="portfolio-card-tags">
            {tags.map((tag, i) => (
              <span key={i} className="portfolio-card-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
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
  tags: PropTypes.arrayOf(PropTypes.string),
  badge: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
};

export default PortfolioCard;

const PortfolioCard = ({ className, title, description, link }) => {
  return (
    <div className={`portfolio-card ${className}`}>
      <div className="portfolio-card-title">{title}</div>
      <div className="portfolio-card-description">{description}</div>
      <a href={link} className="portfolio-card-link">View Project</a>
    </div>
  );
};

export default PortfolioCard;

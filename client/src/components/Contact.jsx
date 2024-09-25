import React, { useEffect, useState } from 'react';
import './styles.css';

const Contact = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactPosition = document.querySelector('.contact-container').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (contactPosition < windowHeight) {
        setHeadingVisible(true);
        setDetailsVisible(true);
        setFormVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="contact-container">
      <div className={`achievements-heading ${headingVisible ? 'fade-in' : ''}`}>Contact Me</div>
      <div className={`achievements-subheading ${headingVisible ? 'fade-in' : ''}`}>Let's Talk About Ideas</div>
      <div className="contact-content">
        <div className={`contact-details ${detailsVisible ? 'fade-in' : ''}`}>
          <div className="detail-item">
            <span className="icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>Wapda Town, Lahore, Pakistan</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="icon">💼</span>
            <div>
              <h3>Freelance</h3>
              <p>Available Right Now</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>daniyalwajid94@gmail.com</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>+92 309-1840367</p>
            </div>
          </div>
        </div>
        <form className={`contact-form ${formVisible ? 'fade-in' : ''}`}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="full-name">Your Full Name *</label>
              <input type="text" id="full-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email Address *</label>
              <input type="email" id="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Your Subject *</label>
            <input type="text" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea id="message" rows="4" required></textarea>
          </div>
          <div className="form-footer">
            <label className="terms-label">
              <input type="checkbox" required />
              Accept the terms and conditions
            </label>
            <button type="submit" className="submit-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

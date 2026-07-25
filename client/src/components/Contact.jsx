'use client';

import React, { useEffect, useState } from 'react';

const CONTACT_EMAIL = 'daniyal.wajid12@gmail.com';

const Contact = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form['full-name'].value;
    const email = form['email'].value;
    const subject = form['subject'].value;
    const message = form['message'].value;

    const body = `Name: ${fullName}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus('sending');
    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('sent');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 500);
  };

  return (
    <div id='contact' className="contact-container">
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
    <span className="icon">✉️</span>
    <div>
      <h3>Email</h3>
      <p>{CONTACT_EMAIL}</p>
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
        <form className={`contact-form ${formVisible ? 'fade-in' : ''}`} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="full-name">Your Full Name *</label>
              <input type="text" id="full-name" name="full-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Your Subject *</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea id="message" name="message" rows="3" required></textarea>
          </div>
          <div className="form-footer">
            <label className="terms-label">
              <input type="checkbox" required />
              Accept the terms and conditions
            </label>
            <button type="submit" className={`submit-button ${status !== 'idle' ? 'is-' + status : ''}`} disabled={status === 'sending'}>
              {status === 'sending' && 'Opening your email app…'}
              {status === 'sent' && 'Opened! ✓'}
              {status === 'idle' && 'Send Message'}
            </button>
          </div>
          {status === 'sent' && (
            <p className="form-status-note">
              Your email app should now be open with the message pre-filled — just hit send there.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

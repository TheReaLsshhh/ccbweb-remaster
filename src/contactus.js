import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import './contactus.css';

const ContactUs = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Scroll-based navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsTopBarVisible(false);
      } else if (currentScrollY < lastScrollY && currentScrollY < 50) {
        setIsTopBarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="App">
      <Navbar isTopBarVisible={isTopBarVisible} />
      
      {/* Contact Us Hero Section */}
      <section className={`contact-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">Get in touch with us. We'd love to hear from you.</p>
            <p className="hero-motto">We're here to help and answer any questions you may have</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section contact-section">
        <div className="container">
          
          <div className="contact-content">
            {/* Location and Map Section */}
            <div className="contact-info-section">
              <h2>Location & Address</h2>
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <p>Interactive Map Coming Soon</p>
                </div>
                <div className="address-info">
                  <h3>City College of Bayawan</h3>
                  <p>📍 Bayawan City, Negros Oriental</p>
                  <p>Philippines</p>
                  <p>Postal Code: 6221</p>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="contact-details-section">
              <h2>Contact Information</h2>
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Phone Numbers</h4>
                    <p>Main: (035) XXX-XXXX</p>
                    <p>Admissions: (035) XXX-XXXX</p>
                    <p>Registrar: (035) XXX-XXXX</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Email Addresses</h4>
                    <p>General: info@ccb.edu.ph</p>
                    <p>Admissions: admissions@ccb.edu.ph</p>
                    <p>Registrar: registrar@ccb.edu.ph</p>
                  </div>
                </div>



                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Social Media</h4>
                    <p>Facebook: @CityCollegeBayawan</p>
                    <p>Instagram: @ccbayawan</p>
                    <p>Twitter: @CCBayawan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter message subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default ContactUs;


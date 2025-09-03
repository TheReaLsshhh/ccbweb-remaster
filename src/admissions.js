import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
<<<<<<< HEAD
=======
import Footer from './components/footer';
>>>>>>> 717272eec94838c01214a9536ce3b2a069ab4fe6
import './admissions.css';

const Admissions = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="App">
      <Navbar isTopBarVisible={isTopBarVisible} />
      
      {/* Admissions Hero Section */}
      <section className={`admissions-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Admissions</h1>
            <p className="hero-subtitle">Begin your journey to academic excellence at City College of Bayawan</p>
            <p className="hero-motto">Your future starts here with quality education and endless opportunities</p>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="section admissions-section">
        <div className="container">
          
          <div className="admissions-content">
            {/* Requirements Section */}
            <div className="requirements-section">
              <h2>Admission Requirements</h2>
              <div className="requirements-grid">
                <div className="requirement-item">
                  <div className="requirement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="requirement-text">
                    <h4>High School Diploma</h4>
                    <p>Original copy of high school diploma or certificate of completion</p>
                  </div>
                </div>

                <div className="requirement-item">
                  <div className="requirement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                  </div>
                  <div className="requirement-text">
                    <h4>Academic Records</h4>
                    <p>Official transcript of records from previous school</p>
                  </div>
                </div>

                <div className="requirement-item">
                  <div className="requirement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="requirement-text">
                    <h4>Personal Information</h4>
                    <p>Birth certificate, valid ID, and recent 2x2 photos</p>
                  </div>
                </div>

                <div className="requirement-item">
                  <div className="requirement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="requirement-text">
                    <h4>Medical Certificate</h4>
                    <p>Health certificate from a licensed physician</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process Section */}
            <div className="process-section">
              <h2>Application Process</h2>
              <div className="process-steps">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Submit Requirements</h4>
                    <p>Complete the application form and submit all required documents to the Admissions Office</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Document Review</h4>
                    <p>Our admissions team will review your application and verify all submitted documents</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Interview</h4>
                    <p>Schedule and attend a personal interview with our academic advisors</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Acceptance</h4>
                    <p>Receive your acceptance letter and enrollment instructions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Dates Section */}
            <div className="dates-section">
              <h2>Important Dates</h2>
              <div className="dates-grid">
                <div className="date-item">
                  <div className="date-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <div className="date-text">
                    <h4>Application Period</h4>
                    <p>January 15 - March 31, 2025</p>
                  </div>
                </div>

                <div className="date-item">
                  <div className="date-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <div className="date-text">
                    <h4>Document Submission</h4>
                    <p>February 1 - April 15, 2025</p>
                  </div>
                </div>

                <div className="date-item">
                  <div className="date-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <div className="date-text">
                    <h4>Interviews</h4>
                    <p>March 1 - April 30, 2025</p>
                  </div>
                </div>

                <div className="date-item">
                  <div className="date-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <div className="date-text">
                    <h4>Enrollment</h4>
                    <p>May 1 - June 30, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form Section */}
            <div className="application-form-section">
              <h2>Request Information</h2>
              <form className="application-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="form-row">
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
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="program">Program of Interest</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a program</option>
                    <option value="bsit">BS Information Technology</option>
                    <option value="bsba">BS Business Administration</option>
                    <option value="bse">BS Elementary Education</option>
                    <option value="bss">BS Secondary Education</option>
                    <option value="bsa">BS Accountancy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Questions</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Any specific questions about admissions or programs?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Request Information'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you! Your information request has been submitted successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>City College of Bayawan</h3>
              <p>Honor and Excellence for the Highest Good</p>
              <p>Honus et Excellentia Ad Summum Bonum</p>
            </div>
            <div className="footer-section">
              <h4>Contact Information</h4>
              <p>📍 Bayawan City, Negros Oriental</p>
              <p>📞 (035) XXX-XXXX</p>
              <p>✉️ info@ccb.edu.ph</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="/">Home</a>
              <a href="/academics">Academic Programs</a>
              <a href="/admissions">Admissions</a>
              <a href="/news">News & Events</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 City College of Bayawan. All rights reserved.</p>
          </div>
        </div>
      </footer>
=======
      <Footer />
>>>>>>> 717272eec94838c01214a9536ce3b2a069ab4fe6
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Admissions;
<<<<<<< HEAD
=======

>>>>>>> 717272eec94838c01214a9536ce3b2a069ab4fe6

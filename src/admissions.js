import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import apiService from './services/api';
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
  const [importantDates, setImportantDates] = useState([]);
  const [loadingDates, setLoadingDates] = useState(true);
  const [datesError, setDatesError] = useState('');

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

  // Load Important Dates dynamically
  useEffect(() => {
    const loadImportantDates = async () => {
      try {
        setLoadingDates(true);
        const resp = await apiService.getAdmissionsImportantDates();
        if (resp.status === 'success' && Array.isArray(resp.important_dates)) {
          setImportantDates(resp.important_dates);
        } else {
          setDatesError('Failed to load important dates');
        }
      } catch (e) {
        setDatesError('Failed to load important dates');
      } finally {
        setLoadingDates(false);
      }
    };
    loadImportantDates();
  }, []);

  const formatDateRange = (startISO, endISO) => {
    const start = new Date(startISO);
    const end = new Date(endISO);
    const monthLong = (d) => d.toLocaleString(undefined, { month: 'long' });
    const dayNum = (d) => d.toLocaleString(undefined, { day: 'numeric' });
    const yearNum = (d) => d.getFullYear();

    if (yearNum(start) === yearNum(end)) {
      if (start.getMonth() === end.getMonth()) {
        return `${monthLong(start)} ${dayNum(start)} - ${dayNum(end)}, ${yearNum(start)}`;
      }
      return `${monthLong(start)} ${dayNum(start)} - ${monthLong(end)} ${dayNum(end)}, ${yearNum(start)}`;
    }
    return `${monthLong(start)} ${dayNum(start)}, ${yearNum(start)} - ${monthLong(end)} ${dayNum(end)}, ${yearNum(end)}`;
  };

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
      <section className={`news-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Admissions</h1>
            <p className="hero-subtitle">Begin your journey to academic excellence at City College of Bayawan</p>
            <p className="hero-motto">Your future starts here with quality education and endless opportunities</p>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="section-admissions admissions-section">
        <div className="container">
          
          <div className="admissions-content">
            {/* Requirements Section */}
            <div className="requirements-section">
              <h2>Admission Requirements</h2>
              <p className="section-subtitle">Complete requirements and qualifications for enrollment at City College of Bayawan</p>
              
              <div className="requirements-content">
                <div className="general-requirements">
                  
                  <div className="enrollment-requirements">
                    <h4>REQUIREMENTS FOR ENROLLMENT OF NEW STUDENTS</h4>
                    <ul>
                      <li>✓ Accident Insurance with One (1) Year Coverage (Original and Photocopy)</li>
                      <li>✓ Form 138- SHS Report Card (Original copy)</li>
                      <li>✓ Certificate of GOOD MORAL CHARACTER (Original copy)</li>
                      <li>✓ PSA Birth Certificate (Photocopy)</li>
                      <li>✓ CLEAR COPY of 2x2 ID Picture with Name Tag & on a White Background (2pcs)</li>
                      <li>✓ One (1) Long-size Brown Expanded Envelope</li>
                    </ul>
                  </div>

                  <div className="transferee-requirements">
                    <h4>REQUIREMENTS FOR ENROLLMENT OF TRANSFEREES</h4>
                    <ul>
                      <li>✓ Accident Insurance with One (1) Year Coverage (Original and Photocopy)</li>
                      <li>✓ Transcript of Records (TOR) (Original copy)</li>
                      <li>✓ Honorable Dismissal/Certificate of Transfer Credential (Original copy)</li>
                      <li>✓ Certificate of GOOD MORAL CHARACTER (Original copy)</li>
                      <li>✓ PSA Birth Certificate (Photocopy)</li>
                      <li>✓ CLEAR COPY of 2x2 ID Picture with Name Tag & on a White Background (2pcs)</li>
                      <li>✓ Accreditation of Subjects Form (Original copy)</li>
                      <li>✓ One (1) Long-size Brown Expanded Envelope</li>
                    </ul>
                  </div>
                </div>

                <div className="requirements-note">
                  <div className="note-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="note-content">
                    <h5>Important Notes:</h5>
                    <ul>
                      <li>All documents must be original or certified true copies</li>
                      <li>Foreign documents must be authenticated by the Philippine Embassy</li>
                      <li>Application deadline: March 31, 2026 for Academic Year 2026-2027</li>
                      <li>Incomplete applications will not be processed</li>
                      <li>Entrance examination fee: ₱500.00 (non-refundable)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process Section */}
            <div className="process-section">
              <h2>Application Process</h2>
              <p className="section-subtitle">Follow these steps to apply for your chosen program</p>
              
              <div className="process-timeline">
                <div className="timeline-item">
                  <div className="timeline-number">1</div>
                  <div className="timeline-content">
                    <h4>Choose Your Program</h4>
                    <p>Review program descriptions and select the degree program that aligns with your career goals and interests.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">2</div>
                  <div className="timeline-content">
                    <h4>Prepare Requirements</h4>
                    <p>Gather all required documents including transcripts, certificates, and identification documents.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">3</div>
                  <div className="timeline-content">
                    <h4>Submit Application</h4>
                    <p>Complete the application form and submit it along with all required documents to the Admissions Office.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">4</div>
                  <div className="timeline-content">
                    <h4>Take Entrance Exam</h4>
                    <p>Attend the scheduled entrance examination and program-specific assessments.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">5</div>
                  <div className="timeline-content">
                    <h4>Interview & Evaluation</h4>
                    <p>Participate in the interview process and await evaluation results from the admissions committee.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-number">6</div>
                  <div className="timeline-content">
                    <h4>Enrollment</h4>
                    <p>Upon acceptance, complete enrollment procedures and begin your academic journey at City College of Bayawan.</p>
                  </div>
                </div>
              </div>
              
              <div className="section-cta">
                <a href="/admissions" className="btn btn-primary">Apply Now</a>
                <a href="/contact" className="btn btn-secondary">Contact Admissions Office</a>
              </div>
            </div>

            {/* Important Dates Section */}
            <div className="dates-section">
              <h2>Important Dates</h2>
              {loadingDates ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <p>Loading dates...</p>
                </div>
              ) : datesError ? (
                <div className="error-container"><p className="error-message">{datesError}</p></div>
              ) : (
                <div className="dates-grid">
                  {importantDates.map(item => (
                    <div key={item.id} className="date-item">
                      <div className="date-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </svg>
                      </div>
                      <div className="date-text">
                        <h4>{item.title}</h4>
                        <p>{formatDateRange(item.start_date, item.end_date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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

      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Admissions;

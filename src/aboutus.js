import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './aboutus.css';

const AboutUs = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('history');

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

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPosition = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Navbar isTopBarVisible={isTopBarVisible} />
      
      {/* About Us Hero Section */}
      <section className={`about-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About City College of Bayawan</h1>
            <p className="hero-subtitle">Honor and Excellence for the Highest Good</p>
            <p className="hero-motto">Honus et Excellentia Ad Summum Bonum</p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="about-navigation">
        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${activeSection === 'history' ? 'active' : ''}`}
              onClick={() => scrollToSection('history')}
            >
              History
            </button>
            <button 
              className={`nav-tab ${activeSection === 'mission' ? 'active' : ''}`}
              onClick={() => scrollToSection('mission')}
            >
              Mission & Vision
            </button>
            <button 
              className={`nav-tab ${activeSection === 'org-chart' ? 'active' : ''}`}
              onClick={() => scrollToSection('org-chart')}
            >
              Organizational Chart
            </button>
            <button 
              className={`nav-tab ${activeSection === 'officers' ? 'active' : ''}`}
              onClick={() => scrollToSection('officers')}
            >
              Administrative Officers
            </button>
            <button 
              className={`nav-tab ${activeSection === 'campus' ? 'active' : ''}`}
              onClick={() => scrollToSection('campus')}
            >
              Campus Map
            </button>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="about-section history-section">
        <div className="container">
          <h2 className="section-title">History of City College of Bayawan</h2>
          <div className="history-content">
            <div className="history-text">
              <p>
                The City College of Bayawan was established in [Year] as a response to the growing need for 
                accessible and quality higher education in Bayawan City and its surrounding communities. 
                What began as a small institution has grown into a comprehensive educational establishment 
                committed to academic excellence and community development.
              </p>
              <p>
                The college was founded with the vision of providing affordable, quality education to the 
                youth of Bayawan City, particularly those who may not have the means to pursue higher 
                education in distant institutions. Over the years, the college has expanded its academic 
                offerings and facilities to better serve the educational needs of the community.
              </p>
              <p>
                Throughout its history, the City College of Bayawan has remained steadfast in its commitment 
                to the values of honor, excellence, and service to the community. The institution has 
                produced thousands of graduates who have gone on to become successful professionals, 
                entrepreneurs, and community leaders.
              </p>
            </div>
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-year">[Year]</div>
                <div className="timeline-content">
                  <h4>Establishment</h4>
                  <p>City College of Bayawan was officially established</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">[Year]</div>
                <div className="timeline-content">
                  <h4>First Graduation</h4>
                  <p>The first batch of students graduated from the institution</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">[Year]</div>
                <div className="timeline-content">
                  <h4>Program Expansion</h4>
                  <p>Additional academic programs were introduced</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">[Year]</div>
                <div className="timeline-content">
                  <h4>Infrastructure Development</h4>
                  <p>New facilities and buildings were constructed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Core Values Section */}
      <section id="mission" className="about-section mission-section">
        <div className="container">
          <h2 className="section-title">Mission, Vision, and Core Values</h2>
          <div className="mission-content">
            <div className="mission-card">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Vision</h3>
              <p>
                To be a leading educational institution committed to academic excellence, 
                innovation, and community development, producing competent and values-driven 
                professionals who contribute to the progress of society.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Mission</h3>
              <p>
                To provide quality, accessible, and relevant education that empowers students 
                with knowledge, skills, and values necessary for personal and professional 
                success while fostering a culture of excellence, integrity, and social responsibility.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Core Values</h3>
              <div className="values-list">
                <div className="value-item">
                  <strong>Excellence</strong> - Pursuing the highest standards in all endeavors
                </div>
                <div className="value-item">
                  <strong>Integrity</strong> - Upholding honesty, transparency, and ethical behavior
                </div>
                <div className="value-item">
                  <strong>Innovation</strong> - Embracing creativity and continuous improvement
                </div>
                <div className="value-item">
                  <strong>Service</strong> - Dedication to community development and social responsibility
                </div>
                <div className="value-item">
                  <strong>Respect</strong> - Valuing diversity and promoting inclusive environment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Chart Section */}
      <section id="org-chart" className="about-section org-chart-section">
        <div className="container">
          <h2 className="section-title">Organizational Chart</h2>
          <div className="org-chart-container">
            <div className="org-chart">
              <div className="org-level president">
                <div className="org-position">
                  <div className="position-title">College President</div>
                  <div className="position-name">Dr. [Name]</div>
                </div>
              </div>
              
              <div className="org-level vice-presidents">
                <div className="org-position">
                  <div className="position-title">Vice President for Academic Affairs</div>
                  <div className="position-name">Dr. [Name]</div>
                </div>
                <div className="org-position">
                  <div className="position-title">Vice President for Administration</div>
                  <div className="position-name">Dr. [Name]</div>
                </div>
                <div className="org-position">
                  <div className="position-title">Vice President for Student Affairs</div>
                  <div className="position-name">Dr. [Name]</div>
                </div>
              </div>
              
              <div className="org-level departments">
                <div className="dept-group">
                  <h4>Academic Departments</h4>
                  <div className="dept-list">
                    <div className="dept-item">Business Administration</div>
                    <div className="dept-item">Information Technology</div>
                    <div className="dept-item">Education</div>
                    <div className="dept-item">Hospitality Management</div>
                  </div>
                </div>
                <div className="dept-group">
                  <h4>Support Services</h4>
                  <div className="dept-list">
                    <div className="dept-item">Registrar's Office</div>
                    <div className="dept-item">Student Affairs</div>
                    <div className="dept-item">Library Services</div>
                    <div className="dept-item">IT Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Officers and Staff Directory Section */}
      <section id="officers" className="about-section officers-section">
        <div className="container">
          <h2 className="section-title">Administrative Officers and Staff Directory</h2>
          <div className="officers-content">
            <div className="officers-category">
              <h3>Executive Officers</h3>
              <div className="officers-grid">
                <div className="officer-card">
                  <div className="officer-photo">
                    <div className="photo-placeholder"></div>
                  </div>
                  <div className="officer-info">
                    <h4>Dr. [Name]</h4>
                    <p className="officer-position">College President</p>
                    <p className="officer-contact">📧 president@ccb.edu.ph</p>
                    <p className="officer-contact">📞 (035) XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="officer-card">
                  <div className="officer-photo">
                    <div className="photo-placeholder"></div>
                  </div>
                  <div className="officer-info">
                    <h4>Dr. [Name]</h4>
                    <p className="officer-position">Vice President for Academic Affairs</p>
                    <p className="officer-contact">📧 vpaa@ccb.edu.ph</p>
                    <p className="officer-contact">📞 (035) XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="officer-card">
                  <div className="officer-photo">
                    <div className="photo-placeholder"></div>
                  </div>
                  <div className="officer-info">
                    <h4>Dr. [Name]</h4>
                    <p className="officer-position">Vice President for Administration</p>
                    <p className="officer-contact">📧 vpa@ccb.edu.ph</p>
                    <p className="officer-contact">📞 (035) XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="officer-card">
                  <div className="officer-photo">
                    <div className="photo-placeholder"></div>
                  </div>
                  <div className="officer-info">
                    <h4>Dr. [Name]</h4>
                    <p className="officer-position">Vice President for Student Affairs</p>
                    <p className="officer-contact">📧 vpsa@ccb.edu.ph</p>
                    <p className="officer-contact">📞 (035) XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="officers-category">
              <h3>Department Heads</h3>
              <div className="officers-grid">
                <div className="officer-card">
                  <div className="officer-photo">
                    <div className="photo-placeholder"></div>
                  </div>
                  <div className="officer-info">
                    <h4>Prof. [Name]</h4>
                    <p className="officer-position">Dean, Business Administration</p>
                    <p className="officer-contact">📧 business@ccb.edu.ph</p>
                    <p className="officer-contact">📞 (035) XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="officer-card">
                  <div className="officer-photo">
                    <div className="photo-placeholder"></div>
                  </div>
                  <div className="officer-info">
                    <h4>Prof. [Name]</h4>
                    <p className="officer-position">Dean, Information Technology</p>
                    <p className="officer-contact">📧 it@ccb.edu.ph</p>
                    <p className="officer-contact">📞 (035) XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="officer-card">
                  <div className="officer-photo">
                    <div className="photo-placeholder"></div>
                  </div>
                  <div className="officer-info">
                    <h4>Prof. [Name]</h4>
                    <p className="officer-position">Dean, Education</p>
                    <p className="officer-contact">📧 education@ccb.edu.ph</p>
                    <p className="officer-contact">📞 (035) XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="officer-card">
                  <div className="officer-photo">
                    <div className="photo-placeholder"></div>
                  </div>
                  <div className="officer-info">
                    <h4>Prof. [Name]</h4>
                    <p className="officer-position">Dean, Hospitality Management</p>
                    <p className="officer-contact">📧 hospitality@ccb.edu.ph</p>
                    <p className="officer-contact">📞 (035) XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map and Facilities Section */}
      <section id="campus" className="about-section campus-section">
        <div className="container">
          <h2 className="section-title">Campus Map and Facilities</h2>
          <div className="campus-content">
            <div className="campus-map">
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-overlay">
                    <h3>Campus Map</h3>
                    <p>Interactive campus map coming soon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="facilities-list">
              <h3>Campus Facilities</h3>
              <div className="facilities-grid">
                <div className="facility-card">
                  <div className="facility-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                    </svg>
                  </div>
                  <h4>Academic Buildings</h4>
                  <p>Modern classrooms and lecture halls equipped with multimedia facilities</p>
                </div>
                
                <div className="facility-card">
                  <div className="facility-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                    </svg>
                  </div>
                  <h4>Library</h4>
                  <p>Comprehensive collection of books, journals, and digital resources</p>
                </div>
                
                <div className="facility-card">
                  <div className="facility-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h4>Computer Laboratories</h4>
                  <p>State-of-the-art computer labs with latest software and equipment</p>
                </div>
                
                <div className="facility-card">
                  <div className="facility-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4>Student Center</h4>
                  <p>Multi-purpose facility for student activities and events</p>
                </div>
                
                <div className="facility-card">
                  <div className="facility-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4>Sports Facilities</h4>
                  <p>Basketball court, volleyball court, and other sports amenities</p>
                </div>
                
                <div className="facility-card">
                  <div className="facility-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4>Cafeteria</h4>
                  <p>Clean and comfortable dining area with affordable meals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;

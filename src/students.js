import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import './students.css';

const Students = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll-based navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past initial 100px
        setIsTopBarVisible(false);
      } else if (currentScrollY < lastScrollY && currentScrollY < 50) {
        // Scrolling up and almost at the top (within 50px)
        setIsTopBarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <Navbar isTopBarVisible={isTopBarVisible} />
      
      {/* Students Page Header */}
      <section className="students-header">
        <div className="container">
          <h1 className="page-title">Student Portal</h1>
          <p className="page-subtitle">Access essential resources and information for your academic journey</p>
        </div>
      </section>

      {/* Student Handbook Section */}
      <section className="students-section handbook-section">
        <div className="container">
          <h2 className="section-title">Student Handbook</h2>
          <p className="section-subtitle">Your comprehensive guide to academic policies, procedures, and campus life</p>
          
          <div className="handbook-content">
            <div className="handbook-card">
              <div className="handbook-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                  <path d="M14 2v6h6"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                  <path d="M10 9H8"/>
                </svg>
              </div>
              <h3>Student Handbook 2025-2026</h3>
              <p>Complete guide containing all policies, procedures, and guidelines for students.</p>
              <button className="download-btn">Download PDF</button>
            </div>
            
            <div className="handbook-card">
              <div className="handbook-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Code of Conduct</h3>
              <p>Standards of behavior and ethical guidelines for all students.</p>
              <button className="download-btn">Download PDF</button>
            </div>
            
            <div className="handbook-card">
              <div className="handbook-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Academic Policies</h3>
              <p>Academic integrity, grading system, and academic requirements.</p>
              <button className="download-btn">Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="students-section calendar-section">
        <div className="container">
          <h2 className="section-title">Academic Calendar</h2>
          <p className="section-subtitle">Important dates and schedules for the academic year</p>
          
          <div className="calendar-content">
            <div className="calendar-card">
              <div className="calendar-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  <path d="M7 10h5v5H7z"/>
                </svg>
              </div>
              <h3>Academic Calendar 2025-2026</h3>
              <p>Complete academic year schedule including holidays, exams, and important dates.</p>
              <button className="download-btn">Download PDF</button>
            </div>
            
            <div className="calendar-card">
              <div className="calendar-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  <path d="M7 10h5v5H7z"/>
                </svg>
              </div>
              <h3>Class Schedule</h3>
              <p>Current semester class schedules and room assignments.</p>
              <button className="download-btn">View Schedule</button>
            </div>
            
            <div className="calendar-card">
              <div className="calendar-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  <path d="M7 10h5v5H7z"/>
                </svg>
              </div>
              <h3>Exam Schedule</h3>
              <p>Midterm and final examination schedules for all programs.</p>
              <button className="download-btn">View Schedule</button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Services Section */}
      <section className="students-section services-section">
        <div className="container">
          <h2 className="section-title">Student Services</h2>
          <p className="section-subtitle">Comprehensive support services to enhance your academic experience</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Guidance & Counseling</h3>
              <p>Professional counseling services for academic, personal, and career development.</p>
              <ul>
                <li>Academic Advising</li>
                <li>Career Counseling</li>
                <li>Personal Development</li>
                <li>Mental Health Support</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
              </div>
              <h3>Library Services</h3>
              <p>Access to extensive collections of books, journals, and digital resources.</p>
              <ul>
                <li>Book Collections</li>
                <li>Online Databases</li>
                <li>Study Spaces</li>
                <li>Research Support</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Registrar's Office</h3>
              <p>Academic records, enrollment services, and official documentation.</p>
              <ul>
                <li>Enrollment Services</li>
                <li>Transcript Requests</li>
                <li>Academic Records</li>
                <li>Graduation Requirements</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Health Services</h3>
              <p>Medical care, health education, and wellness programs for students.</p>
              <ul>
                <li>Medical Check-ups</li>
                <li>Health Education</li>
                <li>Emergency Care</li>
                <li>Wellness Programs</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>IT Support</h3>
              <p>Technical support for computer labs, internet access, and software assistance.</p>
              <ul>
                <li>Computer Lab Access</li>
                <li>Internet Support</li>
                <li>Software Assistance</li>
                <li>Technical Training</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Financial Aid</h3>
              <p>Scholarships, grants, and financial assistance programs for eligible students.</p>
              <ul>
                <li>Scholarship Programs</li>
                <li>Student Loans</li>
                <li>Work-Study Programs</li>
                <li>Financial Counseling</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life & Student Organizations Section */}
      <section className="students-section campus-life-section">
        <div className="container">
          <h2 className="section-title">Campus Life & Student Organizations</h2>
          <p className="section-subtitle">Get involved in campus activities and join student organizations</p>
          
          <div className="campus-life-content">
            <div className="organizations-grid">
              <div className="org-card">
                <div className="org-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Student Government</h3>
                <p>Represent student interests and organize campus-wide events and activities.</p>
                <button className="org-btn">Join Now</button>
              </div>
              
              <div className="org-card">
                <div className="org-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Academic Clubs</h3>
                <p>Subject-specific clubs for Business, IT, Education, and Hospitality students.</p>
                <button className="org-btn">Join Now</button>
              </div>
              
              <div className="org-card">
                <div className="org-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Cultural Organizations</h3>
                <p>Celebrate diversity and promote cultural awareness through various activities.</p>
                <button className="org-btn">Join Now</button>
              </div>
              
              <div className="org-card">
                <div className="org-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Sports Teams</h3>
                <p>Represent CCB in various sports competitions and intramural activities.</p>
                <button className="org-btn">Join Now</button>
              </div>
            </div>
            
            <div className="campus-activities">
              <h3>Campus Activities</h3>
              <div className="activities-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="activity-content">
                    <h4>Orientation Week</h4>
                    <p>Welcome new students with campus tours, workshops, and social events.</p>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="activity-content">
                    <h4>Cultural Festivals</h4>
                    <p>Annual celebrations showcasing local culture, music, and traditions.</p>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="activity-content">
                    <h4>Sports Competitions</h4>
                    <p>Intramural sports leagues and inter-college athletic competitions.</p>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="activity-content">
                    <h4>Academic Competitions</h4>
                    <p>Debate tournaments, quiz bowls, and academic excellence awards.</p>
                  </div>
                </div>
              </div>
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

export default Students;

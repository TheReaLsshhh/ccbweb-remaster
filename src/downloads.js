import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import './downloads.css';

const Downloads = () => {
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
      
      {/* Downloads Hero Section */}
      <section className={`news-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Downloads</h1>
            <p className="hero-subtitle">Find all the recent downloads and resources at City College of Bayawan</p>
            <p className="hero-motto">Access our newest documents, learning materials, and essential downloads</p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="downloads-section forms-section">
        <div className="container">
          <h2 className="section-title">Forms</h2>
          <p className="section-subtitle">Download essential forms for enrollment, clearance, leave, and other academic processes</p>
          
          <div className="downloads-grid">
            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                  <path d="M14 2v6h6"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                  <path d="M10 9H8"/>
                </svg>
              </div>
              <h3>Enrollment Forms</h3>
              <p className="category-description">Forms required for student enrollment and registration processes</p>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Student Enrollment Form</span>
                    <span className="download-size">PDF • 245 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Course Registration Form</span>
                    <span className="download-size">PDF • 189 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Transfer Student Form</span>
                    <span className="download-size">PDF • 312 KB</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Clearance Forms</h3>
              <p className="category-description">Forms for academic clearance and graduation requirements</p>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Student Clearance Form</span>
                    <span className="download-size">PDF • 156 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Graduation Clearance Form</span>
                    <span className="download-size">PDF • 298 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Library Clearance Form</span>
                    <span className="download-size">PDF • 134 KB</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c-1.1-.9-2-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Leave Forms</h3>
              <p className="category-description">Forms for requesting leave of absence and related procedures</p>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Leave of Absence Form</span>
                    <span className="download-size">PDF • 178 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Medical Leave Form</span>
                    <span className="download-size">PDF • 203 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Readmission Form</span>
                    <span className="download-size">PDF • 225 KB</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Other Forms</h3>
              <p className="category-description">Additional forms for various academic and administrative processes</p>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Scholarship Application Form</span>
                    <span className="download-size">PDF • 267 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Change of Major Form</span>
                    <span className="download-size">PDF • 145 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Student ID Replacement Form</span>
                    <span className="download-size">PDF • 98 KB</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabi, Manuals, and Handbooks Section */}
      <section className="downloads-section resources-section">
        <div className="container">
          <h2 className="section-title">Syllabi, Manuals & Handbooks</h2>
          <p className="section-subtitle">Access academic resources including course syllabi, student handbooks, and instructional manuals</p>
          
          <div className="downloads-grid">
            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                </svg>
              </div>
              <h3>Course Syllabi</h3>
              <p className="category-description">Detailed course outlines and syllabi for all academic programs</p>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">BSBA Course Syllabi</span>
                    <span className="download-size">PDF • 1.2 MB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">BSIT Course Syllabi</span>
                    <span className="download-size">PDF • 1.4 MB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">BSEd Course Syllabi</span>
                    <span className="download-size">PDF • 1.1 MB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">BSHM Course Syllabi</span>
                    <span className="download-size">PDF • 1.3 MB</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
              </div>
              <h3>Student Handbooks</h3>
              <p className="category-description">Comprehensive guides for student policies, procedures, and campus life</p>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Student Handbook 2025-2026</span>
                    <span className="download-size">PDF • 2.8 MB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Code of Student Conduct</span>
                    <span className="download-size">PDF • 456 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Academic Policies Manual</span>
                    <span className="download-size">PDF • 1.8 MB</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Instructional Manuals</h3>
              <p className="category-description">Guides and manuals for various academic and administrative processes</p>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Library User Manual</span>
                    <span className="download-size">PDF • 678 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Online Learning Platform Guide</span>
                    <span className="download-size">PDF • 892 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Research Guidelines Manual</span>
                    <span className="download-size">PDF • 1.5 MB</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3v2h18V4zM3 8v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8H3z"/>
                </svg>
              </div>
              <h3>Academic Calendar & Schedules</h3>
              <p className="category-description">Important dates, schedules, and academic calendar information</p>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Academic Calendar 2025-2026</span>
                    <span className="download-size">PDF • 234 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Class Schedule Template</span>
                    <span className="download-size">PDF • 167 KB</span>
                  </div>
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-info">
                    <span className="download-title">Examination Schedule</span>
                    <span className="download-size">PDF • 189 KB</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions Section */}
      <section className="downloads-section instructions-section">
        <div className="container">
          <h2 className="section-title">Download Instructions</h2>
          <p className="section-subtitle">How to download and access the documents</p>
          
          <div className="instructions-content">
            <div className="instruction-card">
              <div className="instruction-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Important Notes</h3>
              <ul>
                <li>All documents are in PDF format and require a PDF reader</li>
                <li>Some forms may require printing and manual completion</li>
                <li>Check for the latest version before downloading</li>
                <li>Contact the respective office if you need assistance</li>
              </ul>
            </div>
            
            <div className="instruction-card">
              <div className="instruction-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
                </svg>
              </div>
              <h3>Technical Support</h3>
              <ul>
                <li>For download issues, contact IT Support at itsupport@ccb.edu.ph</li>
                <li>Recommended browsers: Chrome, Firefox, Safari, Edge</li>
                <li>Ensure stable internet connection for large files</li>
                <li>Clear browser cache if downloads fail</li>
              </ul>
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

export default Downloads;

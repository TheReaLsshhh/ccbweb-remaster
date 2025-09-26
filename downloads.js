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

  const handleDownload = (fileName, fileType) => {
    // Placeholder function for download functionality
    alert(`Downloading ${fileName} (${fileType})`);
  };

  return (
    <div className="App">
      <Navbar isTopBarVisible={isTopBarVisible} />

      {/* Downloads Hero Section */}
      <section className={`news-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Downloads</h1>
            <p className="hero-subtitle">Find all the recent downloads and resources at City College of Bayawan</p>
            <p className="hero-motto">Explore our updated files, helpful guides, and important downloads</p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section id="forms" className="section forms-section">
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
              <h3>Enrollment</h3>
              <p className="category-description">These relate to student registration and academic load:</p>
              <div className="download-links">
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Enrollment Load Form', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-link-content">
                    <strong>Enrollment Load Form</strong>
                  </div>
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Load Slip', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-link-content">
                    <strong>Load Slip</strong>
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
              <h3>Clearance</h3>
              <p className="category-description">These are likely used for approvals or exits:</p>
              <div className="download-links">
                <button 
                  className="download-link"
                  onClick={() => handleDownload('COPC Compilation', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-link-content">
                    <strong>COPC Compilation</strong>
                  </div>
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('EF Continuing', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-link-content">
                    <strong>EF Continuing</strong>
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
              <h3>Request</h3>
              <p className="category-description">These involve formal requests or documentation:</p>
              <div className="download-links">
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Request Slip', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-link-content">
                    <strong>Request Slip</strong>
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
              <h3>Shift / Change</h3>
              <p className="category-description">Used for schedule or program adjustments:</p>
              <div className="download-links">
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Shift Form', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  <div className="download-link-content">
                    <strong>Shift Form</strong>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabi, Manuals, and Handbooks Section */}
      <section id="documents" className="section documents-section">
        <div className="container">
          <h2 className="section-title">Syllabi, Manuals, and Handbooks</h2>
          <p className="section-subtitle">Access comprehensive academic resources, guidelines, and reference materials</p>
          
          <div className="downloads-grid">
            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                </svg>
              </div>
              <h3>Course Syllabi</h3>
              <div className="download-links">
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Business Administration Syllabi', 'ZIP')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Business Administration Syllabi
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Information Technology Syllabi', 'ZIP')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Information Technology Syllabi
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Education Syllabi', 'ZIP')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Education Syllabi
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Hospitality Management Syllabi', 'ZIP')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Hospitality Management Syllabi
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
              <div className="download-links">
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Student Handbook 2024-2025', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Student Handbook 2024-2025
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Academic Guidelines', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Academic Guidelines
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Code of Conduct', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Code of Conduct
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Disciplinary Policies', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Disciplinary Policies
                </button>
              </div>
            </div>

            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Academic Manuals</h3>
              <div className="download-links">
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Faculty Manual', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Faculty Manual
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Thesis Writing Manual', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Thesis Writing Manual
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Research Guidelines', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Research Guidelines
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Laboratory Manual', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Laboratory Manual
                </button>
              </div>
            </div>

            <div className="download-category">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Reference Materials</h3>
              <div className="download-links">
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Academic Calendar 2024-2025', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Academic Calendar 2024-2025
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Course Catalog', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Course Catalog
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Graduation Requirements', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Graduation Requirements
                </button>
                <button 
                  className="download-link"
                  onClick={() => handleDownload('Grading System Guide', 'PDF')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/>
                  </svg>
                  Grading System Guide
                </button>
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

export default Downloads;
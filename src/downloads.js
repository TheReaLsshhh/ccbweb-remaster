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

  return (
    <div className="App">
      <Navbar isTopBarVisible={isTopBarVisible} />

      {/* Downloads Hero Section */}
      <section className={`downloads-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Downloads</h1>
            <p className="hero-subtitle">Access important documents and resources from City College of Bayawan</p>
            <p className="hero-motto">Find forms, handbooks, and essential materials for students and faculty</p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="section downloads-section">
        <div className="container">
          <div className="downloads-content">

            {/* Academic Forms Section */}
            <div className="forms-section">
              <h2>Academic Forms</h2>
              <div className="forms-grid">
                <div className="form-item">
                  <div className="form-icon enrollment-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <div className="form-content">
                    <h4>Enrollment Form</h4>
                    <p className="form-size">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C2,4.89 21.1,4 20,4Z" />
                      </svg>
                      PDF • 2.5 MB
                    </p>
                    <p>Official enrollment form for new and returning students. Required for course registration.</p>
                    <a href="/downloads/enrollment-form.pdf" className="download-btn primary-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download PDF</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>

                <div className="form-item">
                  <div className="form-icon grade-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="form-content">
                    <h4>Grade Request Form</h4>
                    <p className="form-size">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C2,4.89 21.1,4 20,4Z" />
                      </svg>
                      PDF • 1.8 MB
                    </p>
                    <p>Request official transcripts and grade reports from the Registrar's Office.</p>
                    <a href="/downloads/grade-request-form.pdf" className="download-btn secondary-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download PDF</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>

                <div className="form-item">
                  <div className="form-icon leave-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7v2H5V4h3.5l1-1h5l1 1H19zm-2 5H7v10c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9z" />
                    </svg>
                  </div>
                  <div className="form-content">
                    <h4>Leave of Absence Form</h4>
                    <p className="form-size">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C2,4.89 21.1,4 20,4Z" />
                      </svg>
                      PDF • 1.2 MB
                    </p>
                    <p>Application form for temporary leave from academic studies.</p>
                    <a href="/downloads/leave-of-absence-form.pdf" className="download-btn danger-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download PDF</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Handbooks Section */}
            <div className="handbooks-section">
              <h2>Student Handbooks and Guides</h2>
              <div className="handbooks-grid">
                <div className="handbook-item">
                  <div className="handbook-image handbook-student">
                    <div className="handbook-year">
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z" />
                      </svg>
                      <span className="edition">Handbook</span>
                    </div>
                  </div>
                  <div className="handbook-content">
                    <h4>Student Handbook</h4>
                    <p className="handbook-size">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C2,4.89 21.1,4 20,4Z" />
                      </svg>
                      PDF • 15.2 MB
                    </p>
                    <p>Complete guide to student life, policies, and procedures at City College of Bayawan.</p>
                    <a href="/downloads/student-handbook.pdf" className="download-btn gradient-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download Handbook</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>

                <div className="handbook-item">
                  <div className="handbook-image handbook-calendar">
                    <div className="handbook-year">
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      </svg>
                      <span className="edition">Calendar</span>
                    </div>
                  </div>
                  <div className="handbook-content">
                    <h4>Academic Calendar</h4>
                    <p className="handbook-size">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C2,4.89 21.1,4 20,4Z" />
                      </svg>
                      PDF • 3.5 MB
                    </p>
                    <p>Important dates, deadlines, and academic schedule for the current academic year.</p>
                    <a href="/downloads/academic-calendar.pdf" className="download-btn info-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download Calendar</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>

                <div className="handbook-item">
                  <div className="handbook-image handbook-library">
                    <div className="handbook-year">
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                      </svg>
                      <span className="edition">Manual</span>
                    </div>
                  </div>
                  <div className="handbook-content">
                    <h4>Library Manual</h4>
                    <p className="handbook-size">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C2,4.89 21.1,4 20,4Z" />
                      </svg>
                      PDF • 8.7 MB
                    </p>
                    <p>Guide to library services, resources, and research assistance available to students.</p>
                    <a href="/downloads/library-manual.pdf" className="download-btn warning-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download Manual</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>

                <div className="handbook-item">
                  <div className="handbook-image handbook-scholarship">
                    <div className="handbook-year">
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="edition">Guide</span>
                    </div>
                  </div>
                  <div className="handbook-content">
                    <h4>Scholarship Guide</h4>
                    <p className="handbook-size">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C2,4.89 21.1,4 20,4Z" />
                      </svg>
                      PDF • 5.1 MB
                    </p>
                    <p>Information about available scholarships, grants, and financial aid opportunities.</p>
                    <a href="/downloads/scholarship-guide.pdf" className="download-btn success-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download Guide</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Faculty Resources Section */}
            <div className="resources-section">
              <h2>Faculty Resources</h2>
              <div className="resources-grid">
                <div className="resource-item">
                  <div className="resource-icon faculty-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.06 7c-.8 0-1.54.5-1.85 1.26l-1.92 5.77c-.24.71.11 1.49.81 1.73.71.24 1.49-.11 1.73-.81L16.5 12H18v10h2z" />
                    </svg>
                  </div>
                  <div className="resource-content">
                    <h4>Faculty Handbook</h4>
                    <p className="resource-date">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Updated: December 2024
                    </p>
                    <p>Comprehensive guide for faculty members including policies, procedures, and teaching guidelines.</p>
                    <a href="/downloads/faculty-handbook.pdf" className="download-btn professional-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download PDF</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>

                <div className="resource-item">
                  <div className="resource-icon research-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                  </div>
                  <div className="resource-content">
                    <h4>Research Guidelines</h4>
                    <p className="resource-date">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Updated: November 2024
                    </p>
                    <p>Guidelines and procedures for conducting research projects and academic publications.</p>
                    <a href="/downloads/research-guidelines.pdf" className="download-btn research-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download PDF</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>

                <div className="resource-item">
                  <div className="resource-icon grading-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M9,13V15H15V13H9M9,16V18H12V16H9Z" />
                    </svg>
                  </div>
                  <div className="resource-content">
                    <h4>Grading System Manual</h4>
                    <p className="resource-date">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Updated: October 2024
                    </p>
                    <p>Official grading policies, assessment criteria, and grade reporting procedures.</p>
                    <a href="/downloads/grading-system-manual.pdf" className="download-btn academic-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download PDF</span>
                      <div className="btn-shine"></div>
                    </a>
                  </div>
                </div>

                <div className="resource-item">
                  <div className="resource-icon template-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                      <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
                    </svg>
                  </div>
                  <div className="resource-content">
                    <h4>Course Syllabus Template</h4>
                    <p className="resource-date">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Updated: September 2024
                    </p>
                    <p>Standard template for creating course syllabi with required elements and formatting.</p>
                    <a href="/downloads/course-syllabus-template.docx" className="download-btn template-btn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                      </svg>
                      <span>Download DOCX</span>
                      <div className="btn-shine"></div>
                    </a>
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

export default Downloads;
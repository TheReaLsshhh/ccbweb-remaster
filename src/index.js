import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to City College of Bayawan</h1>
            <p className="hero-subtitle">Honor and Excellence for the Highest Good</p>
            <p className="hero-description">Empowering students with quality education and fostering academic excellence in the heart of Bayawan City.</p>
            <div className="hero-buttons">
              <a href="#academics" className="btn btn-primary">Explore Programs</a>
              <a href="#admissions" className="btn btn-secondary">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section id="academics" className="section academics-section">
        <div className="container">
          <h2 className="section-title">Academic Programs</h2>
          <p className="section-subtitle">Discover our comprehensive range of academic programs designed to prepare you for success</p>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                </svg>
              </div>
              <h3>Bachelor of Science in Business Administration</h3>
              <p>Develop essential business skills and knowledge for leadership roles in various industries.</p>
              <ul>
                <li>Financial Management</li>
                <li>Marketing Management</li>
                <li>Human Resource Management</li>
                <li>Operations Management</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Bachelor of Science in Information Technology</h3>
              <p>Master the latest technologies and prepare for careers in the digital world.</p>
              <ul>
                <li>Software Development</li>
                <li>Database Management</li>
                <li>Network Administration</li>
                <li>Web Development</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Bachelor of Science in Education</h3>
              <p>Shape the future by becoming an educator and inspiring the next generation.</p>
              <ul>
                <li>Elementary Education</li>
                <li>Secondary Education</li>
                <li>Special Education</li>
                <li>Physical Education</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Bachelor of Science in Hospitality Management</h3>
              <p>Excel in the dynamic world of hospitality and tourism management.</p>
              <ul>
                <li>Hotel Operations</li>
                <li>Food and Beverage</li>
                <li>Tourism Management</li>
                <li>Event Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="section admissions-section">
        <div className="container">
          <h2 className="section-title">Admissions</h2>
          <p className="section-subtitle">Start your journey towards academic excellence</p>
          
          <div className="admissions-content">
            <div className="admissions-info">
              <h3>Admission Requirements</h3>
              <ul>
                <li>Completed Application Form</li>
                <li>High School Diploma or Equivalent</li>
                <li>Official Transcript of Records</li>
                <li>Certificate of Good Moral Character</li>
                <li>Medical Certificate</li>
                <li>2x2 ID Pictures (4 copies)</li>
                <li>Birth Certificate (NSO/PSA)</li>
              </ul>
            </div>
            
            <div className="admissions-process">
              <h3>Application Process</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Submit Application</h4>
                    <p>Complete and submit your application form with all required documents</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Entrance Examination</h4>
                    <p>Take the college entrance examination on the scheduled date</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Interview</h4>
                    <p>Attend the scheduled interview with the admissions committee</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Enrollment</h4>
                    <p>Complete enrollment procedures and pay necessary fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section id="news" className="section news-section">
        <div className="container">
          <h2 className="section-title">News & Events</h2>
          <p className="section-subtitle">Stay updated with the latest happenings at City College of Bayawan</p>
          
          <div className="news-grid">
            <article className="news-card">
              <div className="news-image">
                <div className="news-placeholder"></div>
              </div>
              <div className="news-content">
                <div className="news-date">December 15, 2024</div>
                <h3>Annual Recognition Day 2024</h3>
                <p>Join us in celebrating the achievements of our outstanding students during the Annual Recognition Day ceremony.</p>
                <a href="#" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-image">
                <div className="news-placeholder"></div>
              </div>
              <div className="news-content">
                <div className="news-date">December 10, 2024</div>
                <h3>New Computer Laboratory Opening</h3>
                <p>State-of-the-art computer laboratory equipped with the latest technology for IT students.</p>
                <a href="#" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-image">
                <div className="news-placeholder"></div>
              </div>
              <div className="news-content">
                <div className="news-date">December 5, 2024</div>
                <h3>Sports Festival 2024</h3>
                <p>Annual sports festival featuring various athletic competitions and team building activities.</p>
                <a href="#" className="read-more">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="section downloads-section">
        <div className="container">
          <h2 className="section-title">Downloads</h2>
          <p className="section-subtitle">Access important documents and forms</p>
          
          <div className="downloads-grid">
            <div className="download-category">
              <h3>Student Forms</h3>
              <div className="download-links">
                <a href="#" className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Application Form
                </a>
                <a href="#" className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Enrollment Form
                </a>
                <a href="#" className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Student Handbook
                </a>
              </div>
            </div>

            <div className="download-category">
              <h3>Academic Calendar</h3>
              <div className="download-links">
                <a href="#" className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Academic Calendar 2024-2025
                </a>
                <a href="#" className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Class Schedule
                </a>
              </div>
            </div>

            <div className="download-category">
              <h3>Policies & Guidelines</h3>
              <div className="download-links">
                <a href="#" className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Student Code of Conduct
                </a>
                <a href="#" className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Academic Policies
                </a>
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
              <a href="#home">Home</a>
              <a href="#academics">Academic Programs</a>
              <a href="#admissions">Admissions</a>
              <a href="#news">News & Events</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 City College of Bayawan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </React.StrictMode>
); 
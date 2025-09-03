import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import './faculty_staff.css';

const FacultyStaff = () => {
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
      
      {/* Faculty & Staff Page Header */}
      <section className="faculty-staff-header">
        <div className="container">
          <h1 className="page-title">Faculty & Staff Portal</h1>
          <p className="page-subtitle">Essential resources and information for faculty and administrative staff</p>
        </div>
      </section>

      {/* Directory of Departments and Personnel Section */}
      <section className="faculty-staff-section directory-section">
        <div className="container">
          <h2 className="section-title">Directory of Departments and Personnel</h2>
          <p className="section-subtitle">Find contact information for all academic departments and administrative offices</p>
          
          <div className="directory-content">
            <div className="departments-grid">
              <div className="department-card">
                <div className="department-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                  </svg>
                </div>
                <h3>College of Business Administration</h3>
                <div className="department-info">
                  <p><strong>Dean:</strong> Dr. Maria Santos</p>
                  <p><strong>Office:</strong> Room 201, Main Building</p>
                  <p><strong>Phone:</strong> (035) XXX-XXXX</p>
                  <p><strong>Email:</strong> business@ccb.edu.ph</p>
                </div>
                <div className="faculty-list">
                  <h4>Faculty Members:</h4>
                  <ul>
                    <li>Prof. Juan Dela Cruz - Accounting</li>
                    <li>Prof. Ana Reyes - Marketing</li>
                    <li>Prof. Carlos Mendoza - Finance</li>
                    <li>Prof. Sofia Garcia - Management</li>
                  </ul>
                </div>
                <button className="contact-btn">Contact Department</button>
              </div>
              
              <div className="department-card">
                <div className="department-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3>College of Information Technology</h3>
                <div className="department-info">
                  <p><strong>Dean:</strong> Dr. Roberto Martinez</p>
                  <p><strong>Office:</strong> Room 301, IT Building</p>
                  <p><strong>Phone:</strong> (035) XXX-XXXX</p>
                  <p><strong>Email:</strong> it@ccb.edu.ph</p>
                </div>
                <div className="faculty-list">
                  <h4>Faculty Members:</h4>
                  <ul>
                    <li>Prof. Luis Torres - Programming</li>
                    <li>Prof. Elena Rodriguez - Database Systems</li>
                    <li>Prof. Miguel Lopez - Web Development</li>
                    <li>Prof. Carmen Silva - Network Administration</li>
                  </ul>
                </div>
                <button className="contact-btn">Contact Department</button>
              </div>
              
              <div className="department-card">
                <div className="department-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>College of Education</h3>
                <div className="department-info">
                  <p><strong>Dean:</strong> Dr. Patricia Fernandez</p>
                  <p><strong>Office:</strong> Room 401, Education Building</p>
                  <p><strong>Phone:</strong> (035) XXX-XXXX</p>
                  <p><strong>Email:</strong> education@ccb.edu.ph</p>
                </div>
                <div className="faculty-list">
                  <h4>Faculty Members:</h4>
                  <ul>
                    <li>Prof. Isabel Cruz - Elementary Education</li>
                    <li>Prof. Ramon Santos - Secondary Education</li>
                    <li>Prof. Teresa Gomez - Special Education</li>
                    <li>Prof. Fernando Ramos - Educational Psychology</li>
                  </ul>
                </div>
                <button className="contact-btn">Contact Department</button>
              </div>
              
              <div className="department-card">
                <div className="department-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3>College of Hospitality Management</h3>
                <div className="department-info">
                  <p><strong>Dean:</strong> Dr. Antonio Rivera</p>
                  <p><strong>Office:</strong> Room 501, Hospitality Building</p>
                  <p><strong>Phone:</strong> (035) XXX-XXXX</p>
                  <p><strong>Email:</strong> hospitality@ccb.edu.ph</p>
                </div>
                <div className="faculty-list">
                  <h4>Faculty Members:</h4>
                  <ul>
                    <li>Prof. Rosa Martinez - Hotel Management</li>
                    <li>Prof. Jose Santos - Tourism Management</li>
                    <li>Prof. Maria Lopez - Culinary Arts</li>
                    <li>Prof. Pedro Cruz - Event Management</li>
                  </ul>
                </div>
                <button className="contact-btn">Contact Department</button>
              </div>
            </div>
            
            <div className="administrative-offices">
              <h3>Administrative Offices</h3>
              <div className="offices-grid">
                <div className="office-card">
                  <h4>Office of the President</h4>
                  <p><strong>President:</strong> Dr. Jose Rizal</p>
                  <p><strong>Phone:</strong> (035) XXX-XXXX</p>
                  <p><strong>Email:</strong> president@ccb.edu.ph</p>
                </div>
                
                <div className="office-card">
                  <h4>Registrar's Office</h4>
                  <p><strong>Registrar:</strong> Ms. Maria Clara</p>
                  <p><strong>Phone:</strong> (035) XXX-XXXX</p>
                  <p><strong>Email:</strong> registrar@ccb.edu.ph</p>
                </div>
                
                <div className="office-card">
                  <h4>Human Resources</h4>
                  <p><strong>HR Director:</strong> Ms. Sisa</p>
                  <p><strong>Phone:</strong> (035) XXX-XXXX</p>
                  <p><strong>Email:</strong> hr@ccb.edu.ph</p>
                </div>
                
                <div className="office-card">
                  <h4>Finance Office</h4>
                  <p><strong>Finance Director:</strong> Mr. Basilio</p>
                  <p><strong>Phone:</strong> (035) XXX-XXXX</p>
                  <p><strong>Email:</strong> finance@ccb.edu.ph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Policies and Downloadable Forms Section */}
      <section className="faculty-staff-section hr-section">
        <div className="container">
          <h2 className="section-title">HR Policies and Downloadable Forms</h2>
          <p className="section-subtitle">Access important HR documents, policies, and forms for faculty and staff</p>
          
          <div className="hr-content">
            <div className="policies-grid">
              <div className="policy-card">
                <div className="policy-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                </div>
                <h3>Employee Handbook</h3>
                <p>Comprehensive guide containing all employment policies, benefits, and procedures.</p>
                <button className="download-btn">Download PDF</button>
              </div>
              
              <div className="policy-card">
                <div className="policy-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Code of Ethics</h3>
                <p>Standards of professional conduct and ethical guidelines for all employees.</p>
                <button className="download-btn">Download PDF</button>
              </div>
              
              <div className="policy-card">
                <div className="policy-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3>Leave Policies</h3>
                <p>Comprehensive information about vacation, sick leave, and other leave types.</p>
                <button className="download-btn">Download PDF</button>
              </div>
            </div>
            
            <div className="forms-section">
              <h3>Downloadable Forms</h3>
              <div className="forms-grid">
                <div className="form-card">
                  <h4>Leave Request Form</h4>
                  <p>Submit requests for vacation, sick leave, or other types of leave.</p>
                  <button className="form-btn">Download Form</button>
                </div>
                
                <div className="form-card">
                  <h4>Travel Authorization</h4>
                  <p>Request authorization for official travel and conferences.</p>
                  <button className="form-btn">Download Form</button>
                </div>
                
                <div className="form-card">
                  <h4>Expense Reimbursement</h4>
                  <p>Submit expense reports for reimbursement of work-related expenses.</p>
                  <button className="form-btn">Download Form</button>
                </div>
                
                <div className="form-card">
                  <h4>Performance Evaluation</h4>
                  <p>Annual performance evaluation forms for faculty and staff.</p>
                  <button className="form-btn">Download Form</button>
                </div>
                
                <div className="form-card">
                  <h4>Professional Development</h4>
                  <p>Request approval for professional development activities and training.</p>
                  <button className="form-btn">Download Form</button>
                </div>
                
                <div className="form-card">
                  <h4>Change of Information</h4>
                  <p>Update personal information, contact details, or emergency contacts.</p>
                  <button className="form-btn">Download Form</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources for Teaching and Admin Staff Section */}
      <section className="faculty-staff-section resources-section">
        <div className="container">
          <h2 className="section-title">Resources for Teaching and Admin Staff</h2>
          <p className="section-subtitle">Essential tools, training materials, and support resources for faculty and administrative staff</p>
          
          <div className="resources-content">
            <div className="teaching-resources">
              <h3>Teaching Resources</h3>
              <div className="resources-grid">
                <div className="resource-card">
                  <div className="resource-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/>
                    </svg>
                  </div>
                  <h4>Learning Management System</h4>
                  <p>Access to online course management tools and student engagement platforms.</p>
                  <ul>
                    <li>Course Creation Tools</li>
                    <li>Assignment Management</li>
                    <li>Grade Book</li>
                    <li>Discussion Forums</li>
                  </ul>
                  <button className="resource-btn">Access LMS</button>
                </div>
                
                <div className="resource-card">
                  <div className="resource-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                    </svg>
                  </div>
                  <h4>Library Resources</h4>
                  <p>Access to academic databases, journals, and research materials.</p>
                  <ul>
                    <li>Online Databases</li>
                    <li>E-Journals</li>
                    <li>Research Guides</li>
                    <li>Citation Tools</li>
                  </ul>
                  <button className="resource-btn">Access Library</button>
                </div>
                
                <div className="resource-card">
                  <div className="resource-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4>Professional Development</h4>
                  <p>Training programs and workshops for continuous professional growth.</p>
                  <ul>
                    <li>Teaching Workshops</li>
                    <li>Technology Training</li>
                    <li>Research Methods</li>
                    <li>Leadership Development</li>
                  </ul>
                  <button className="resource-btn">View Programs</button>
                </div>
              </div>
            </div>
            
            <div className="admin-resources">
              <h3>Administrative Resources</h3>
              <div className="admin-grid">
                <div className="admin-card">
                  <h4>Administrative Systems</h4>
                  <div className="admin-links">
                    <a href="#" className="admin-link">Student Information System</a>
                    <a href="#" className="admin-link">Financial Management System</a>
                    <a href="#" className="admin-link">Inventory Management</a>
                    <a href="#" className="admin-link">Facility Booking System</a>
                  </div>
                </div>
                
                <div className="admin-card">
                  <h4>Communication Tools</h4>
                  <div className="admin-links">
                    <a href="#" className="admin-link">Email System</a>
                    <a href="#" className="admin-link">Video Conferencing</a>
                    <a href="#" className="admin-link">Internal Messaging</a>
                    <a href="#" className="admin-link">Announcement Portal</a>
                  </div>
                </div>
                
                <div className="admin-card">
                  <h4>Support Services</h4>
                  <div className="admin-links">
                    <a href="#" className="admin-link">IT Support</a>
                    <a href="#" className="admin-link">Facilities Maintenance</a>
                    <a href="#" className="admin-link">Security Services</a>
                    <a href="#" className="admin-link">Emergency Procedures</a>
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

export default FacultyStaff;


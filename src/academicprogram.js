import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './academicprogram.css';

const AcademicPrograms = () => {
  const [activeTab, setActiveTab] = useState('bsba');
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isProgramNavVisible, setIsProgramNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const programs = {
    bsba: {
      name: 'Bachelor of Science in Business Administration',
      shortName: 'BSBA',
      description: 'Develop essential business skills and knowledge for leadership roles in various industries.',
      duration: '4 Years',
      units: '144 Units',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
        </svg>
      ),
      specializations: [
        {
          name: 'Financial Management',
          description: 'Focus on financial planning, investment analysis, and corporate finance.',
          courses: ['Financial Accounting', 'Managerial Finance', 'Investment Management', 'Financial Markets']
        },
        {
          name: 'Marketing Management',
          description: 'Learn strategic marketing, consumer behavior, and brand management.',
          courses: ['Marketing Principles', 'Consumer Behavior', 'Digital Marketing', 'Brand Management']
        },
        {
          name: 'Human Resource Management',
          description: 'Develop skills in recruitment, training, and organizational development.',
          courses: ['Human Resource Management', 'Organizational Behavior', 'Training & Development', 'Labor Relations']
        },
        {
          name: 'Operations Management',
          description: 'Master supply chain management and operational efficiency.',
          courses: ['Operations Management', 'Supply Chain Management', 'Quality Management', 'Project Management']
        }
      ],
      careerOpportunities: [
        'Business Analyst',
        'Financial Manager',
        'Marketing Manager',
        'HR Manager',
        'Operations Manager',
        'Entrepreneur',
        'Management Consultant'
      ]
    },
    bsit: {
      name: 'Bachelor of Science in Information Technology',
      shortName: 'BSIT',
      description: 'Master the latest technologies and prepare for careers in the digital world.',
      duration: '4 Years',
      units: '144 Units',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      specializations: [
        {
          name: 'Software Development',
          description: 'Learn programming languages and software engineering principles.',
          courses: ['Programming Fundamentals', 'Data Structures', 'Software Engineering', 'Web Development']
        },
        {
          name: 'Database Management',
          description: 'Master database design, administration, and data analytics.',
          courses: ['Database Systems', 'SQL Programming', 'Data Analytics', 'Big Data Management']
        },
        {
          name: 'Network Administration',
          description: 'Focus on network infrastructure and cybersecurity.',
          courses: ['Computer Networks', 'Network Security', 'System Administration', 'Cybersecurity']
        },
        {
          name: 'Web Development',
          description: 'Create modern web applications and user interfaces.',
          courses: ['HTML/CSS/JavaScript', 'Frontend Frameworks', 'Backend Development', 'Mobile App Development']
        }
      ],
      careerOpportunities: [
        'Software Developer',
        'Web Developer',
        'Database Administrator',
        'Network Administrator',
        'IT Consultant',
        'System Analyst',
        'Cybersecurity Specialist'
      ]
    },
    bsed: {
      name: 'Bachelor of Science in Education',
      shortName: 'BSED',
      description: 'Shape the future by becoming an educator and inspiring the next generation.',
      duration: '4 Years',
      units: '144 Units',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c-1.1-.9-2-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      specializations: [
        {
          name: 'Elementary Education',
          description: 'Prepare to teach in elementary schools with comprehensive pedagogical training.',
          courses: ['Child Development', 'Elementary Curriculum', 'Teaching Methods', 'Educational Psychology']
        },
        {
          name: 'Secondary Education',
          description: 'Specialize in teaching specific subjects at the secondary level.',
          courses: ['Subject Matter Methods', 'Adolescent Psychology', 'Classroom Management', 'Assessment & Evaluation']
        },
        {
          name: 'Special Education',
          description: 'Learn to work with students who have special learning needs.',
          courses: ['Special Education Law', 'Inclusive Education', 'Behavioral Management', 'Adaptive Technology']
        },
        {
          name: 'Physical Education',
          description: 'Focus on physical fitness, sports, and health education.',
          courses: ['Physical Education Methods', 'Sports Psychology', 'Health Education', 'Coaching Principles']
        }
      ],
      careerOpportunities: [
        'Elementary Teacher',
        'Secondary Teacher',
        'Special Education Teacher',
        'Physical Education Teacher',
        'Educational Administrator',
        'Curriculum Developer',
        'Educational Consultant'
      ]
    },
    bshm: {
      name: 'Bachelor of Science in Hospitality Management',
      shortName: 'BSHM',
      description: 'Excel in the dynamic world of hospitality and tourism management.',
      duration: '4 Years',
      units: '144 Units',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      specializations: [
        {
          name: 'Hotel Operations',
          description: 'Learn hotel management, front office operations, and guest services.',
          courses: ['Hotel Management', 'Front Office Operations', 'Housekeeping Management', 'Guest Relations']
        },
        {
          name: 'Food and Beverage',
          description: 'Master culinary arts, restaurant management, and food service operations.',
          courses: ['Culinary Arts', 'Restaurant Management', 'Food Safety', 'Beverage Management']
        },
        {
          name: 'Tourism Management',
          description: 'Focus on travel planning, tour operations, and destination management.',
          courses: ['Tourism Principles', 'Travel Planning', 'Destination Management', 'Tour Operations']
        },
        {
          name: 'Event Planning',
          description: 'Learn event coordination, planning, and management.',
          courses: ['Event Planning', 'Event Marketing', 'Venue Management', 'Event Coordination']
        }
      ],
      careerOpportunities: [
        'Hotel Manager',
        'Restaurant Manager',
        'Event Planner',
        'Tour Guide',
        'Travel Agent',
        'Food Service Manager',
        'Hospitality Consultant'
      ]
    }
  };

  const currentProgram = programs[activeTab];

  const toggleProgramNav = () => {
    setIsProgramNavVisible(!isProgramNavVisible);
  };

  return (
    <div className="academic-programs-page">
      <Navbar isTopBarVisible={isTopBarVisible} />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Academic Programs</h1>
            <p>Discover our comprehensive range of academic programs designed to prepare you for success in your chosen field</p>
            <div className="breadcrumb">
              <a href="/">Home</a> / Academic Programs
            </div>
          </div>
        </div>
      </section>

      {/* Program Navigation */}
      <section className={`program-navigation ${!isProgramNavVisible ? 'nav-hidden' : ''}`}>
        <div className="container">
          <div className="nav-header">
            {/* <h3>Program Selection</h3> */}
            <button 
              className="nav-toggle-btn"
              onClick={toggleProgramNav}
              aria-label="Toggle program navigation"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          <div className="program-tabs">
            {Object.entries(programs).map(([key, program]) => (
              <button
                key={key}
                className={`program-tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <div className="tab-icon">{program.icon}</div>
                <div className="tab-content">
                  <h3>{program.shortName}</h3>
                  <p>{program.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Toggle Button (Mobile Only) */}
      {!isProgramNavVisible && (
        <button 
          className="floating-nav-toggle"
          onClick={toggleProgramNav}
          aria-label="Show program navigation"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          <span>Programs</span>
        </button>
      )}

      {/* Program Details */}
      <section className="program-details">
        <div className="container">
          <div className="program-header">
            <div className="program-info">
              <div className="program-icon">{currentProgram.icon}</div>
              <div className="program-meta">
                <h2>{currentProgram.name}</h2>
                <p className="program-description">{currentProgram.description}</p>
                <div className="program-stats">
                  <div className="stat">
                    <span className="stat-label">Duration:</span>
                    <span className="stat-value">{currentProgram.duration}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Units:</span>
                    <span className="stat-value">{currentProgram.units}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="program-content">
            {/* Specializations */}
            <div className="content-section">
              <h3>Specializations</h3>
              <div className="specializations-grid">
                {currentProgram.specializations.map((spec, index) => (
                  <div key={index} className="specialization-card">
                    <h4>{spec.name}</h4>
                    <p>{spec.description}</p>
                    <div className="courses-list">
                      <h5>Key Courses:</h5>
                      <ul>
                        {spec.courses.map((course, courseIndex) => (
                          <li key={courseIndex}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="content-section">
              <h3>Career Opportunities</h3>
              <div className="career-opportunities">
                <div className="career-grid">
                  {currentProgram.careerOpportunities.map((career, index) => (
                    <div key={index} className="career-item">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admission Requirements */}
            <div className="content-section">
              <h3>Admission Requirements</h3>
              <div className="requirements-grid">
                <div className="requirement-category">
                  <h4>General Requirements</h4>
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
                <div className="requirement-category">
                  <h4>Additional Requirements</h4>
                  <ul>
                    <li>Entrance Examination Result</li>
                    <li>Interview Clearance</li>
                    <li>Parent/Guardian Consent (if minor)</li>
                    <li>Transfer Credential (for transferees)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
              <h3>Ready to Start Your Journey?</h3>
              <p>Take the first step towards your academic and professional success</p>
              <div className="cta-buttons">
                <a href="/admissions" className="btn btn-primary">Apply Now</a>
                <a href="/contact" className="btn btn-secondary">Contact Us</a>
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
    </div>
  );
};

export default AcademicPrograms;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';

// Add: Simple, dependency-free carousel tailored for the News & Events section
const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const computeItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) return 1;
      if (width < 1024) return 2;
      return 3;
    };
    const update = () => setItemsPerView(computeItemsPerView());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // News data (more items for richer content)
  const newsItems = [
    { date: 'December 18, 2025', title: 'CCB Research Symposium 2025', desc: 'Showcasing innovative research projects across departments.' },
    { date: 'December 15, 2025', title: 'Annual Recognition Day 2025', desc: 'Celebrating the achievements of our outstanding students.' },
    { date: 'December 12, 2025', title: 'Community Outreach Program', desc: 'Volunteer activities focused on education and health awareness.' },
    { date: 'December 10, 2025', title: 'New Computer Laboratory Opening', desc: 'State-of-the-art facilities for hands-on IT learning.' },
    { date: 'December 9, 2025', title: 'Faculty Development Workshop', desc: 'Continuous upskilling for academic excellence.' },
    { date: 'December 7, 2025', title: 'Alumni Homecoming', desc: 'A night of memories and connections with our alumni.' },
    { date: 'December 5, 2025', title: 'Sports Festival 2025', desc: 'Athletic competitions and team-building activities campus-wide.' },
    { date: 'December 2, 2025', title: 'Art & Culture Week', desc: 'Exhibitions and performances celebrating local culture.' },
    { date: 'November 28, 2025', title: 'Career Fair', desc: 'Top companies on campus for internships and recruitment.' },
    { date: 'November 25, 2025', title: 'Environmental Summit', desc: 'Talks and workshops on sustainability and stewardship.' },
    { date: 'November 20, 2025', title: 'Hackathon: Code for Good', desc: '24-hour coding challenge solving real community problems.' },
    { date: 'November 15, 2025', title: 'Entrepreneurship Pitch Day', desc: 'Student startups pitch to a panel of industry mentors.' },
  ];

  const slides = newsItems.map((item, i) => (
    <article className="news-card" key={`slide-${i}`}>
      <div className="news-image">
        <div className="news-placeholder"></div>
      </div>
      <div className="news-content">
        <div className="news-date">{item.date}</div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <button className="read-more">Read More</button>
      </div>
    </article>
  ));

  const slideCount = slides.length;
  const maxIndex = Math.max(0, slideCount - itemsPerView);
  const totalPages = Math.ceil(slideCount / itemsPerView);

  const goTo = (index) => {
    if (index < 0) {
      setCurrentIndex(maxIndex);
    } else if (index > maxIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const next = () => goTo(currentIndex + itemsPerView);
  const prev = () => goTo(currentIndex - itemsPerView);

  // Autoplay per page without depending on 'next'
  useEffect(() => {
    if (isHovering) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        const candidate = prev + itemsPerView;
        return candidate > maxIndex ? 0 : candidate;
      });
    }, 5000);
    return () => clearInterval(id);
  }, [isHovering, itemsPerView, maxIndex]);

  // Touch handlers (mobile swipe)
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };
  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const delta = e.touches[0].clientX - touchStartX;
    setTouchDeltaX(delta);
  };
  const handleTouchEnd = () => {
    if (touchStartX === null) return;
    if (touchDeltaX > 60) {
      prev();
    } else if (touchDeltaX < -60) {
      next();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  // Calculate translate in percent adjusted by itemsPerView
  const translatePercent = -(currentIndex * (100 / itemsPerView));

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(calc(${translatePercent}% + ${touchDeltaX}px))`,
          }}
        >
          {slides.map((slide, idx) => (
            <div
              className="carousel-slide"
              key={idx}
              aria-hidden={!(idx >= currentIndex && idx < currentIndex + itemsPerView)}
              style={{ minWidth: `${100 / itemsPerView}%` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-arrow left" aria-label="Previous" onClick={prev}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="carousel-arrow right" aria-label="Next" onClick={next}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="carousel-dots" role="tablist" aria-label="News slides">
        {Array.from({ length: totalPages }).map((_, pageIdx) => {
          const isActive = currentIndex >= pageIdx * itemsPerView && currentIndex < (pageIdx + 1) * itemsPerView;
          return (
            <button
              key={`dot-${pageIdx}`}
              className={`carousel-dot ${isActive ? 'active' : ''}`}
              aria-label={`Go to page ${pageIdx + 1}`}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => goTo(pageIdx * itemsPerView)}
            />
          );
        })}
      </div>
    </div>
  );
};

const HomePage = () => {
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
      
      {/* Home Section */}
      <section id="home" className={`section home-section ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            {/* <h1 className="hero-title">CITY COLLEGE OF BAYAWAN</h1>
            <p className="hero-subtitle">Honor and Excellence for the Highest Good</p>
            <p className="hero-motto">Honus et Excellentia Ad Summum Bonum</p> */}
            <div className="hero-buttons">
              <a href="#academics" className="btn btn-primary">Explore Programs</a>
              <a href="#admissions" className="btn btn-primary">Apply Now</a>
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
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c-1.1-.9-2-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
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
          
          <div className="section-cta">
            <a href="/academics" className="btn btn-primary">Learn More About Academic Programs</a>
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
              <div className="requirements-grid">
                <div className="requirement-category">
                  <div className="category-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                      <path d="M14 2v6h6"/>
                      <path d="M16 13H8"/>
                      <path d="M16 17H8"/>
                      <path d="M10 9H8"/>
                    </svg>
                  </div>
                  <h4>Application Documents</h4>
                  <ul>
                    <li>Completed Application Form (2 copies)</li>
                    <li>High School Diploma or Equivalent</li>
                    <li>Official Transcript of Records</li>
                    <li>Certificate of Good Moral Character</li>
                  </ul>
                </div>
                
                <div className="requirement-category">
                  <div className="category-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4>Medical & Identification</h4>
                  <ul>
                    <li>Medical Certificate (Physical Examination)</li>
                    <li>2x2 ID Pictures (4 copies)</li>
                    <li>Birth Certificate (NSO/PSA)</li>
                    <li>Valid Government ID</li>
                  </ul>
                </div>
                
                <div className="requirement-category">
                  <div className="category-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4>Additional Requirements</h4>
                  <ul>
                    <li>Certificate of Residency</li>
                    <li>Parent/Guardian Consent Form</li>
                    <li>Application Fee Receipt</li>
                    <li>Interview Schedule Confirmation</li>
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
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="admissions-process">
              <h3>Application Process</h3>
              <div className="process-steps">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Submit Application</h4>
                    <p>Complete and submit your application form with all required documents</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Entrance Examination</h4>
                    <p>Take the college entrance examination on the scheduled date</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Interview</h4>
                    <p>Attend the scheduled interview with the admissions committee</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Enrollment</h4>
                    <p>Complete enrollment procedures and pay necessary fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-cta">
            <a href="/admissions" className="btn btn-primary">Learn More About Admissions</a>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section id="news" className="section news-section">
        <div className="container">
          <h2 className="section-title">News & Events</h2>
          <p className="section-subtitle">Stay updated with the latest happenings at City College of Bayawan</p>
          
          {/* Replaced grid with carousel */}
          <NewsCarousel />
          
          <div className="section-cta">
            <a href="/news" className="btn btn-primary">View All News & Events</a>
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
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Application Form
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Enrollment Form
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Student Handbook
                </button>
              </div>
            </div>

            <div className="download-category">
              <h3>Academic Calendar</h3>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Academic Calendar 2025-2026
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Class Schedule
                </button>
              </div>
            </div>

            <div className="download-category">
              <h3>Policies & Guidelines</h3>
              <div className="download-links">
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Student Code of Conduct
                </button>
                <button className="download-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  Academic Policies
                </button>
              </div>
            </div>
          </div>
          
          <div className="section-cta">
            <a href="/downloads" className="btn btn-primary">View All Downloads</a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section partners-section">
        <div className="container">
          <h2 className="section-title">Our Partners</h2>
          <p className="section-subtitle">Building strong partnerships for educational excellence</p>
          
          <div className="partners-grid">
            <div className="partner-category">
              <h3>Industry Partners</h3>
              <div className="partner-logos">
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span>Tech Solutions Inc.</span>
                </div>
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span>Business Partners Ltd.</span>
                </div>
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span>Innovation Hub</span>
                </div>
              </div>
            </div>

            <div className="partner-category">
              <h3>Educational Partners</h3>
              <div className="partner-logos">
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                    </svg>
                  </div>
                  <span>University of the Philippines</span>
                </div>
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                    </svg>
                  </div>
                  <span>Ateneo de Manila University</span>
                </div>
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/>
                    </svg>
                  </div>
                  <span>De La Salle University</span>
                </div>
              </div>
            </div>

            <div className="partner-category">
              <h3>Government Partners</h3>
              <div className="partner-logos">
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c-1.1-.9-2-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <span>Department of Education</span>
                </div>
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c-1.1-.9-2-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <span>Commission on Higher Education</span>
                </div>
                <div className="partner-logo">
                  <div className="logo-placeholder">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c-1.1-.9-2-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <span>City Government of Bayawan</span>
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

export default HomePage; 


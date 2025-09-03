import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import './news_events.css';

const NewsEvents = () => {
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
      
      {/* News & Events Hero Section */}
      <section className={`news-hero ${!isTopBarVisible ? 'navbar-collapsed' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">News & Events</h1>
            <p className="hero-subtitle">Stay updated with the latest happenings at City College of Bayawan</p>
            <p className="hero-motto">Discover our achievements, upcoming events, and important announcements</p>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="section news-section">
        <div className="container">
          <div className="news-content">
            
            {/* Announcements Section */}
            <div className="announcements-section">
              <h2>Announcements</h2>
              <div className="announcements-grid">
                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Enrollment for Second Semester AY 2024-2025</h4>
                    <p className="announcement-date">December 15, 2024</p>
                    <p>Early enrollment for the second semester is now open. Secure your slot and avoid the rush. Visit the Registrar's Office for more details.</p>
                    <a href="#" className="read-more">Read More</a>
                  </div>
                </div>

                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Holiday Schedule for Christmas Break</h4>
                    <p className="announcement-date">December 20, 2024</p>
                    <p>Classes will be suspended from December 23, 2024 to January 5, 2025. Regular classes resume on January 6, 2025.</p>
                    <a href="#" className="read-more">Read More</a>
                  </div>
                </div>

                <div className="announcement-item">
                  <div className="announcement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="announcement-content">
                    <h4>Library Hours Update</h4>
                    <p className="announcement-date">December 18, 2024</p>
                    <p>Extended library hours during finals week: 7:00 AM to 9:00 PM. Study rooms are available for group study sessions.</p>
                    <a href="#" className="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* School Events and Activities Section */}
            <div className="events-section">
              <h2>School Events and Activities</h2>
              <div className="events-grid">
                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">25</span>
                      <span className="month">DEC</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Christmas Celebration and Gift Giving</h4>
                    <p className="event-time">9:00 AM - 4:00 PM</p>
                    <p>Join us for our annual Christmas celebration featuring performances, games, and gift-giving to our community partners.</p>
                    <a href="#" className="event-link">Learn More</a>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">15</span>
                      <span className="month">JAN</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Academic Excellence Awards</h4>
                    <p className="event-time">2:00 PM - 5:00 PM</p>
                    <p>Recognition ceremony for students who achieved academic excellence in the first semester AY 2024-2025.</p>
                    <a href="#" className="event-link">Learn More</a>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">20</span>
                      <span className="month">JAN</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Career Fair 2025</h4>
                    <p className="event-time">9:00 AM - 6:00 PM</p>
                    <p>Connect with potential employers and explore career opportunities. Open to all graduating students and alumni.</p>
                    <a href="#" className="event-link">Learn More</a>
                  </div>
                </div>

                <div className="event-item">
                  <div className="event-image">
                    <div className="event-date">
                      <span className="day">28</span>
                      <span className="month">JAN</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h4>Sports Festival</h4>
                    <p className="event-time">8:00 AM - 6:00 PM</p>
                    <p>Annual sports competition featuring basketball, volleyball, badminton, and track and field events.</p>
                    <a href="#" className="event-link">Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements and Press Releases Section */}
            <div className="achievements-section">
              <h2>Achievements and Press Releases</h2>
              <div className="achievements-grid">
                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="achievement-content">
                    <h4>CCB Students Win Regional IT Competition</h4>
                    <p className="achievement-date">December 10, 2024</p>
                    <p>Our BS Information Technology students secured first place in the Regional IT Innovation Challenge, showcasing their programming and problem-solving skills.</p>
                    <a href="#" className="read-more">Read Full Story</a>
                  </div>
                </div>

                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="achievement-content">
                    <h4>Faculty Research Grant Awarded</h4>
                    <p className="achievement-date">December 5, 2024</p>
                    <p>Dr. Maria Santos received a research grant for her study on "Sustainable Agriculture Practices in Negros Oriental."</p>
                    <a href="#" className="read-more">Read Full Story</a>
                  </div>
                </div>

                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="achievement-content">
                    <h4>CCB Ranked Top 3 in Regional Rankings</h4>
                    <p className="achievement-date">November 30, 2024</p>
                    <p>City College of Bayawan secured the third position in the Regional Higher Education Institution Rankings for 2024.</p>
                    <a href="#" className="read-more">Read Full Story</a>
                  </div>
                </div>

                <div className="achievement-item">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="achievement-content">
                    <h4>Student Organization Recognition</h4>
                    <p className="achievement-date">November 25, 2024</p>
                    <p>The CCB Student Council received the "Outstanding Student Organization" award from the Department of Education.</p>
                    <a href="#" className="read-more">Read Full Story</a>
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

export default NewsEvents;


import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => {
  // State for responsive behavior
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // News data for carousel
  const newsData = [
    {
      id: 1,
      date: "December 2024",
      title: "Enrollment Now Open",
      description: "Registration for Academic Year 2025-2026 is now open. Apply today!",
      link: "/admissions"
    },
    {
      id: 2,
      date: "November 2024",
      title: "New Programs Available",
      description: "We're excited to announce new academic programs starting next semester.",
      link: "/academics"
    },
    {
      id: 3,
      date: "October 2024",
      title: "Student Achievements",
      description: "Congratulations to our students who excelled in recent competitions and examinations.",
      link: "/news"
    },
    {
      id: 4,
      date: "September 2024",
      title: "Campus Renovation Complete",
      description: "Our newly renovated facilities are now open for students and faculty.",
      link: "/about"
    },
    {
      id: 5,
      date: "August 2024",
      title: "Scholarship Opportunities",
      description: "New scholarship programs available for deserving students this academic year.",
      link: "/admissions"
    }
  ];

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, newsData.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="homepage"> <Navbar /> 
      <div className="homepage-content">
        <div className="hero-section">
          <div className="mayor-container">
            <img src="/images/mayor.jpg" alt="Mayor of Bayawan" className="mayor-image" />
            <div className="mayor-label">Mayor's Welcome Message</div>
            <div className="mayor-tooltip">
              <div className="tooltip-header">
                <h4>John T. Raymond Jr.</h4>
                <p>Mayor of Bayawan City</p>
              </div>
              <div className="tooltip-content">
                <p>I, <strong>John T. Raymond Jr.,</strong> Mayor of Bayawan City, extend a warm welcome to City College of Bayawan.</p>
                <p>Our beloved institution opened its doors on June 30, 2025, marking a new chapter in Bayawan's educational journey. This college represents our commitment to providing quality education and empowering our youth to become future leaders.</p>
                <p>Together, we build a brighter future for our community.</p>
                <div className="tooltip-slogan">
                  <strong>"Ibayaw ang Bayawan!<br/>Kita ang Bayawan!"</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-content" style={{
            marginLeft: isMobile ? 'auto' : 'auto',
            marginRight: isMobile ? 'auto' : '80px',
            textAlign: isMobile ? 'center' : 'right',
            maxWidth: '800px'
          }}>
            <h1 className="hero-title" style={{ textAlign: isMobile ? 'center' : 'center' }}>WELCOME TO</h1>
            <h2 className="hero-subtitle" style={{ textAlign: isMobile ? 'center' : 'center' }}>CITY COLLEGE</h2>
            <h3 className="hero-subtitle-2" style={{ textAlign: isMobile ? 'center' : 'center' }}>OF BAYAWAN</h3>
            <p className="hero-tagline" style={{ textAlign: isMobile ? 'center' : 'center' }}>Honus et Excellentia Ad Summum Bonum</p>
            <div className="hero-buttons" style={{ 
              justifyContent: isMobile ? 'center' : 'center',
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <a href="/admissions" className="btn btn-primary">Apply Now</a>
              <a href="/about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
        
        <div className="features-section">
          <div className="container">
            <h2 className="section-title">Why Choose City College of Bayawan?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Quality Education</h4>
                  <p>Committed to providing excellent education that prepares students for their future careers.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5h-.5l-1.5-1.5c-.47-.62-1.21-.99-2.01-.99H8.46a1.5 1.5 0 0 0-1.42 1.37L4.5 16H7v6h2v-6h2v6h2v-6h2v6h2z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Expert Faculty</h4>
                  <p>Learn from experienced and qualified instructors dedicated to student success.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Modern Facilities</h4>
                  <p>State-of-the-art facilities and resources to support your learning journey.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 14 17 14s11 2 11 2-1-1.5-1-3.5-1.75-3.25-1.75-3.25S19 8 17 8z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Community Focus</h4>
                  <p>Rooted in the community, serving Bayawan and the surrounding areas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news-section">
          <div className="container">
            <h2 className="section-title">Latest News & Updates</h2>
            <div 
              className="news-carousel-container"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="news-carousel">
                <div 
                  className="news-carousel-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {newsData.map((news, index) => (
                    <div key={news.id} className="news-carousel-slide">
                      <div className="news-card">
                        <div className="news-date">{news.date}</div>
                        <h3>{news.title}</h3>
                        <p>{news.description}</p>
                        <a href={news.link} className="news-link">Read More →</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation buttons */}
              <button 
                className="carousel-btn carousel-btn-prev"
                onClick={goToPrevious}
                aria-label="Previous news"
              >
                &#8249;
              </button>
              <button 
                className="carousel-btn carousel-btn-next"
                onClick={goToNext}
                aria-label="Next news"
              >
                &#8250;
              </button>
              
              {/* Dots indicator */}
              <div className="carousel-dots">
                {newsData.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="container">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join the City College of Bayawan community and pursue your educational goals.</p>
            <div className="cta-buttons">
              <a href="/admissions" className="btn btn-primary btn-large">Apply for Admission</a>
              <a href="/contact" className="btn btn-outline btn-large">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;

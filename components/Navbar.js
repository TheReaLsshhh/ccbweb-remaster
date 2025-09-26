import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBarMobileMenuOpen, setIsTopBarMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('');
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTopBarMobileMenu = () => {
    setIsTopBarMobileMenuOpen(!isTopBarMobileMenuOpen);
  };


  // Get current date
  const getCurrentDate = () => {
    const today = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return today.toLocaleDateString('en-US', options);
  };

  // Determine which navigation item should be active based on current page or section (for home page)
  const getActiveNavClass = (href) => {
    return activePage === href ? 'nav-link active-nav' : 'nav-link';
  };

  // Determine which top bar link should be active based on current page
  const getActiveTopLinkClass = (href) => {
    return activePage === href ? 'top-link active-top-link' : 'top-link';
  };

  // Set active page based on current URL and attach scroll listener for home page section tracking
  useEffect(() => {
    const handleRoute = () => {
      const currentPath = window.location.pathname;
      setActivePage(currentPath || '/');
    };

    handleRoute();

    const onPop = () => handleRoute();
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Handle scroll-based top bar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobileOrTablet = window.innerWidth <= 768;

      if (isMobileOrTablet) {
        // Mobile/Tablet behavior: only show near the very top
        setIsTopBarVisible(currentScrollY <= 10);
      } else {
        // Desktop behavior: only show at the very top
        setIsTopBarVisible(currentScrollY <= 10);
      }

      setLastScrollY(currentScrollY);
    };

    // Handle window resize to recalculate behavior
    const handleResize = () => {
      handleScroll(); // Re-evaluate scroll position on resize
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  // Close mobile menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const topBarMobileMenu = document.querySelector('.top-bar-mobile-menu');
      const topBarMobileMenuBtn = document.querySelector('.top-bar-mobile-menu-btn');
      const mainMobileMenu = document.querySelector('.nav-links');
      const mainMobileMenuBtn = document.querySelector('.mobile-menu-btn');

      // Close top bar mobile menu if clicking outside
      if (isTopBarMobileMenuOpen && 
          topBarMobileMenu && 
          !topBarMobileMenu.contains(event.target) && 
          topBarMobileMenuBtn && 
          !topBarMobileMenuBtn.contains(event.target)) {
        setIsTopBarMobileMenuOpen(false);
      }

      // Close main mobile menu if clicking outside
      if (isMobileMenuOpen && 
          mainMobileMenu && 
          !mainMobileMenu.contains(event.target) && 
          mainMobileMenuBtn && 
          !mainMobileMenuBtn.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTopBarMobileMenuOpen, isMobileMenuOpen]);

  return (
    <nav className="navbar">
      {/* Top Orange Bar - Sticky but scroll-based visibility */}
      <div className={`top-bar ${isTopBarVisible ? 'top-bar-visible' : 'top-bar-hidden'}`}>
        <div className="top-bar-container">
          {/* Left spacer (keeps center links centered) */}
          <div className="top-bar-left"></div>
          
          <div className="top-bar-center">
            <div className="top-bar-links">
              <a href="/students" className={getActiveTopLinkClass('/students')}>STUDENTS</a>
              <span className="separator">|</span>
              <a href="/faculty" className={getActiveTopLinkClass('/faculty')}>FACULTY & STAFF</a>
              <span className="separator">|</span>
              <a href="/about" className={getActiveTopLinkClass('/about')}>ABOUT US</a>
              <span className="separator">|</span>
              <a href="/contact" className={getActiveTopLinkClass('/contact')}>CONTACT US</a>
            </div>
          </div>

          <div className="top-bar-right">
            <span className="date-text">Today is {getCurrentDate()}</span>
          </div>

          {/* Mobile Menu Button for Top Bar */}
          <button className="top-bar-mobile-menu-btn" onClick={toggleTopBarMobileMenu} aria-label="Toggle top navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay for Top Bar */}
        <div className={`top-bar-mobile-menu ${isTopBarMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="top-bar-mobile-links">
            <a href="/students" className={getActiveTopLinkClass('/students')} onClick={() => setIsTopBarMobileMenuOpen(false)}>STUDENTS</a>
            <a href="/faculty" className={getActiveTopLinkClass('/faculty')} onClick={() => setIsTopBarMobileMenuOpen(false)}>FACULTY & STAFF</a>
            <a href="/about" className={getActiveTopLinkClass('/about')} onClick={() => setIsTopBarMobileMenuOpen(false)}>ABOUT US</a>
            <a href="/contact" className={getActiveTopLinkClass('/contact')} onClick={() => setIsTopBarMobileMenuOpen(false)}>CONTACT US</a>
          </div>
        </div>
      </div>

      {/* Main Green Navigation Bar */}
      <div className={`main-nav ${!isTopBarVisible ? 'expanded' : ''}`}>
        <div className="nav-container">
          {/* Logo and Brand */}
          <div className="brand">
            <div className="logo">
              <img src="/images/ccb-logo.png" alt="City College of Bayawan logo" className="brand-logo" />
            </div>
            <div className="brand-text">
              <h1>CITY COLLEGE</h1>
              <h2>OF BAYAWAN</h2>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a 
              href="/" 
              className={getActiveNavClass('/')}
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/></svg>
              </span>
              <span className="nav-label">HOME PAGE</span>
            </a>
            <a 
              href="/academics" 
              className={getActiveNavClass('/academics')}
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11 12 6.82 20.26 11 12 16z"/></svg>
              </span>
              <span className="nav-label">ACADEMIC PROGRAMS</span>
            </a>
            <a 
              href="/admissions" 
              className={getActiveNavClass('/admissions')}
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a5 5 0 015 5v2h1a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9a2 2 0 012-2h1V7a5 5 0 015-5zm3 7V7a3 3 0 10-6 0v2h6z"/></svg>
              </span>
              <span className="nav-label">ADMISSIONS</span>
            </a>
            <a 
              href="/news" 
              className={getActiveNavClass('/news')}
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 5h14a2 2 0 012 2v11a3 3 0 01-3 3H6a3 3 0 01-3-3V7a2 2 0 012-2zm2 4h10V7H6v2zm0 3h10v-2H6v2zm0 3h7v-2H6v2z"/></svg>
              </span>
              <span className="nav-label">NEWS & EVENTS</span>
            </a>
            <a 
              href="/downloads" 
              className={getActiveNavClass('/downloads')}
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 20h14v-2H5v2zM12 2v12l4-4h-3V2h-2v8H8l4 4z"/></svg>
              </span>
              <span className="nav-label">DOWNLOADS</span>
            </a>

            {/* Search icon with hover popover */}
            <div className="nav-search">
              <button className="search-btn" aria-label="Open search">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
              <div className="search-popover">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
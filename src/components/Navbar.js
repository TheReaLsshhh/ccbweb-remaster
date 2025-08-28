import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ isTopBarVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
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
    if (activePage === '/') {
      const routeToSection = {
        '/': 'home',
        '/academics': 'academics',
        '/admissions': 'admissions',
        '/news': 'news',
        '/downloads': 'downloads',
      };
      const targetSection = routeToSection[href] || '';
      return activeSection === targetSection ? 'nav-link active-nav' : 'nav-link';
    }
    return activePage === href ? 'nav-link active-nav' : 'nav-link';
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

  // Home page: track which section is in view to move the white highlight as user scrolls
  useEffect(() => {
    if (activePage !== '/') return;

    const sectionIds = ['home', 'academics', 'admissions', 'news', 'downloads'];

    const computeActiveSection = () => {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const scrollY = window.scrollY + navbarHeight + 100; // 100px threshold for earlier switch

      let current = 'home';
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (!el) continue;
        const top = el.offsetTop;
        if (scrollY >= top) current = sectionIds[i];
      }
      setActiveSection(current);
    };

    computeActiveSection();
    window.addEventListener('scroll', computeActiveSection, { passive: true });
    window.addEventListener('resize', computeActiveSection);
    return () => {
      window.removeEventListener('scroll', computeActiveSection);
      window.removeEventListener('resize', computeActiveSection);
    };
  }, [activePage]);

  return (
    <nav className="navbar">
      {/* Top Orange Bar */}
      <div className={`top-bar ${isTopBarVisible ? 'top-bar-visible' : 'top-bar-hidden'}`}>
        <div className="top-bar-container">
          {/* Left spacer (keeps center links centered) */}
          <div className="top-bar-left"></div>
          
          <div className="top-bar-center">
            <div className="top-bar-links">
              <a href="/students" className="top-link">STUDENTS</a>
              <span className="separator">|</span>
              <a href="/faculty" className="top-link">FACULTY & STAFF</a>
              <span className="separator">|</span>
                <a href="/about" className="top-link">ABOUT US</a>
              <span className="separator">|</span>
              <a href="/contact" className="top-link">CONTACT US</a>
            </div>
          </div>

          <div className="top-bar-right">
            <span className="date-text">Today is {getCurrentDate()}</span>
            <div className="login-section" onClick={toggleLoginStatus}>
              <div className="user-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <span className="login-text">
                {isLoggedIn ? 'LOG OUT' : 'LOG IN'}
              </span>
            </div>
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
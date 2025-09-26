import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import apiService from './services/api';
import './news_events.css';

const NewsEvents = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [announcements, setAnnouncements] = useState([]);
  const [annLoading, setAnnLoading] = useState(true);
  const [annError, setAnnError] = useState('');
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState('');
  const [achievements, setAchievements] = useState([]);
  const [achievementsLoading, setAchievementsLoading] = useState(true);
  const [achievementsError, setAchievementsError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAchievementModalOpen, setIsAchievementModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

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

  // Load announcements from API
  useEffect(() => {
    const load = async () => {
      try {
        setAnnLoading(true);
        const resp = await apiService.getAnnouncements();
        if (resp.status === 'success' && Array.isArray(resp.announcements)) {
          setAnnouncements(resp.announcements);
        } else {
          setAnnError('Failed to load announcements');
        }
      } catch (e) {
        setAnnError('Failed to load announcements');
      } finally {
        setAnnLoading(false);
      }
    };
    load();
  }, []);

  // Load events from API
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setEventsLoading(true);
        const resp = await apiService.getEvents();
        if (resp.status === 'success' && Array.isArray(resp.events)) {
          setEvents(resp.events);
        } else {
          setEventsError('Failed to load events');
        }
      } catch (e) {
        setEventsError('Failed to load events');
      } finally {
        setEventsLoading(false);
      }
    };
    loadEvents();
  }, []);

  // Load achievements from API
  useEffect(() => {
    const loadAchievements = async () => {
      try {
        setAchievementsLoading(true);
        const resp = await apiService.getAchievements();
        if (resp.status === 'success' && Array.isArray(resp.achievements)) {
          setAchievements(resp.achievements);
        } else {
          setAchievementsError('Failed to load achievements');
        }
      } catch (e) {
        setAchievementsError('Failed to load achievements');
      } finally {
        setAchievementsLoading(false);
      }
    };
    loadAchievements();
  }, []);

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return iso;
    }
  };

  const formatEventDate = (iso) => {
    try {
      const date = new Date(iso);
      return {
        day: date.getDate().toString(),
        month: date.toLocaleDateString(undefined, { month: 'short' }).toUpperCase()
      };
    } catch {
      return { day: '01', month: 'JAN' };
    }
  };

  const openModal = (item) => {
    setSelectedAnnouncement(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  const openEventModal = (item) => {
    setSelectedEvent(item);
    setIsEventModalOpen(true);
  };

  const closeEventModal = () => {
    setIsEventModalOpen(false);
    setSelectedEvent(null);
  };

  const openAchievementModal = (item) => {
    setSelectedAchievement(item);
    setIsAchievementModalOpen(true);
  };

  const closeAchievementModal = () => {
    setIsAchievementModalOpen(false);
    setSelectedAchievement(null);
  };

  // Improve modal UX: close on Escape, lock background scroll
  useEffect(() => {
    if (!isModalOpen && !isEventModalOpen && !isAchievementModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isModalOpen) closeModal();
        if (isEventModalOpen) closeEventModal();
        if (isAchievementModalOpen) closeAchievementModal();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen, isEventModalOpen, isAchievementModalOpen]);

  const renderDetails = (text) => {
    if (!text) return null;
    return text
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line, idx) => (
        <p key={`detail-line-${idx}`}>{line}</p>
      ));
  };

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
              {annLoading ? (
                <div className="loading-container"><div className="loading-spinner"></div><p>Loading announcements...</p></div>
              ) : annError ? (
                <div className="error-container"><p className="error-message">{annError}</p></div>
              ) : (
                <div className="announcements-grid">
                  {announcements.map(item => (
                    <div key={item.id} className="announcement-item">
                      <div className="announcement-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div className="announcement-content">
                        <h4>{item.title}</h4>
                        <p className="announcement-date">{formatDate(item.date)}</p>
                        <p>{item.body}</p>
                        <button className="read-more" onClick={() => openModal(item)}>Read More</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* School Events and Activities Section */}
            <div className="events-section">
              <h2>School Events and Activities</h2>
              {eventsLoading ? (
                <div className="loading-container"><div className="loading-spinner"></div><p>Loading events...</p></div>
              ) : eventsError ? (
                <div className="error-container"><p className="error-message">{eventsError}</p></div>
              ) : (
                <div className="events-grid">
                  {events.map(event => {
                    const eventDate = formatEventDate(event.event_date);
                    return (
                      <div key={event.id} className="event-item">
                        <div className="event-image">
                          <div className="event-date">
                            <span className="day">{eventDate.day}</span>
                            <span className="month">{eventDate.month}</span>
                          </div>
                        </div>
                        <div className="event-content">
                          <h4>{event.title}</h4>
                          <p className="event-time">{event.formatted_time}</p>
                          {event.location && <p className="event-location">📍 {event.location}</p>}
                          <p>{event.description}</p>
                          <button className="event-link" onClick={() => openEventModal(event)}>Learn More</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Achievements and Press Releases Section */}
            <div className="achievements-section">
              <h2>Achievements and Press Releases</h2>
              {achievementsLoading ? (
                <div className="loading-container"><div className="loading-spinner"></div><p>Loading achievements...</p></div>
              ) : achievementsError ? (
                <div className="error-container"><p className="error-message">{achievementsError}</p></div>
              ) : (
                <div className="achievements-grid">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="achievement-item">
                      <div className="achievement-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="achievement-content">
                        <h4>{achievement.title}</h4>
                        <p className="achievement-date">{achievement.formatted_date}</p>
                        {achievement.category && <p className="achievement-category">🏆 {achievement.category}</p>}
                        <p>{achievement.description}</p>
                        <button className="read-more" onClick={() => openAchievementModal(achievement)}>Read Full Story</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Announcement Modal */}
      {isModalOpen && selectedAnnouncement && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={closeModal}>×</button>
            <h3 className="modal-title">{selectedAnnouncement.title}</h3>
            <p className="modal-date">{formatDate(selectedAnnouncement.date)}</p>
            <div className="modal-body">
              {renderDetails(
                selectedAnnouncement.details && selectedAnnouncement.details.trim()
                  ? selectedAnnouncement.details
                  : selectedAnnouncement.body
              )}
            </div>
          </div>
        </div>
      )}

      {/* Event Modal */}
      {isEventModalOpen && selectedEvent && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeEventModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={closeEventModal}>×</button>
            <h3 className="modal-title">{selectedEvent.title}</h3>
            <p className="modal-date">{formatDate(selectedEvent.event_date)}</p>
            <p className="modal-time">{selectedEvent.formatted_time}</p>
            {selectedEvent.location && <p className="modal-location">📍 {selectedEvent.location}</p>}
            <div className="modal-body">
              {renderDetails(
                selectedEvent.details && selectedEvent.details.trim()
                  ? selectedEvent.details
                  : selectedEvent.description
              )}
            </div>
          </div>
        </div>
      )}

      {/* Achievement Modal */}
      {isAchievementModalOpen && selectedAchievement && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeAchievementModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={closeAchievementModal}>×</button>
            <h3 className="modal-title">{selectedAchievement.title}</h3>
            <p className="modal-date">{formatDate(selectedAchievement.achievement_date)}</p>
            {selectedAchievement.category && <p className="modal-category">🏆 {selectedAchievement.category}</p>}
            <div className="modal-body">
              {renderDetails(
                selectedAchievement.details && selectedAchievement.details.trim()
                  ? selectedAchievement.details
                  : selectedAchievement.description
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsEvents;


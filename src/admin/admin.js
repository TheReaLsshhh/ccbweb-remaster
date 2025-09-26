import React, { useState, useEffect } from 'react';
import './admin.css';
import apiService from '../services/api';
import AdminLogin from './login';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Viewport responsiveness
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data states
  const [academicPrograms, setAcademicPrograms] = useState([]);
  const [events, setEvents] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [admissionsDates, setAdmissionsDates] = useState([]);

  // Form states
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthentication();
  }, []);

  // Load all data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated]);

  // Determine viewport size (mobile/tablet)
  useEffect(() => {
    const evaluateViewport = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
      setIsMobile(width <= 600);
      setIsTablet(width > 600 && width <= 1024);
    };

    evaluateViewport();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', evaluateViewport);
      return () => window.removeEventListener('resize', evaluateViewport);
    }
  }, []);

  // Close mobile menu when tab changes (user clicked a nav item)
  useEffect(() => {
    if (isMobile || isTablet) {
      setIsMobileMenuOpen(false);
    }
  }, [activeTab]);

  const checkAuthentication = async () => {
    try {
      // Check localStorage first
      const storedUser = localStorage.getItem('admin_user');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
        setCheckingAuth(false);
        return;
      }

      // Check with server
      const response = await apiService.checkAuth();
      if (response.status === 'success' && response.authenticated) {
        setUser(response.user);
        setIsAuthenticated(true);
        localStorage.setItem('admin_user', JSON.stringify(response.user));
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem('admin_user');
      }
    } catch (err) {
      console.error('Auth check failed:', err);
      setIsAuthenticated(false);
      localStorage.removeItem('admin_user');
    } finally {
      setCheckingAuth(false);
    }
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setSuccess(`Welcome back, ${userData.username}!`);
    setTimeout(() => setSuccess(null), 3000);
  };

  const handleLogout = async () => {
    try {
      await apiService.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem('admin_user');
      setSuccess('Logged out successfully');
      setTimeout(() => setSuccess(null), 3000);
    }
  };

  const loadAllData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [programsRes, eventsRes, achievementsRes, announcementsRes, admissionsRes] = await Promise.all([
        apiService.getAdminAcademicPrograms(),
        apiService.getAdminEvents(),
        apiService.getAdminAchievements(),
        apiService.getAdminAnnouncements(),
        apiService.getAdminAdmissionsImportantDates()
      ]);

      setAcademicPrograms(programsRes.programs || []);
      setEvents(eventsRes.events || []);
      setAchievements(achievementsRes.achievements || []);
      setAnnouncements(announcementsRes.announcements || []);
      setAdmissionsDates(admissionsRes.dates || []);
    } catch (err) {
      setError('Failed to load data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingItem(null);
    setFormData({});
    setShowForm(true);
  };

  const handleEdit = (item) => {
    console.log('Editing item:', item);
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
  };

  const handleDelete = async (item, type) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      console.log(`Attempting to delete ${type} with ID:`, item.id);
      
      switch (type) {
        case 'academic-programs':
          await apiService.deleteAcademicProgram(item.id);
          setAcademicPrograms(prev => prev.filter(p => p.id !== item.id));
          break;
        case 'events':
          await apiService.deleteEvent(item.id);
          setEvents(prev => prev.filter(e => e.id !== item.id));
          break;
        case 'achievements':
          await apiService.deleteAchievement(item.id);
          setAchievements(prev => prev.filter(a => a.id !== item.id));
          break;
        case 'announcements':
          await apiService.deleteAnnouncement(item.id);
          setAnnouncements(prev => prev.filter(a => a.id !== item.id));
          break;
        case 'admissions-dates':
          await apiService.deleteAdmissionsImportantDate(item.id);
          setAdmissionsDates(prev => prev.filter(d => d.id !== item.id));
          break;
        default:
          throw new Error(`Unknown type: ${type}`);
      }
      
      console.log(`Successfully deleted ${type}`);
      setSuccess(`${type.replace('-', ' ')} deleted successfully!`);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error(`Delete error for ${type}:`, err);
      setError('Failed to delete: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const isEditing = !!editingItem;
      console.log('Form data being submitted:', formData);
      let result;

      switch (activeTab) {
        case 'academic-programs':
          if (isEditing) {
            result = await apiService.updateAcademicProgram(editingItem.id, formData);
            setAcademicPrograms(prev => prev.map(p => p.id === editingItem.id ? result.program : p));
          } else {
            result = await apiService.createAcademicProgram(formData);
            setAcademicPrograms(prev => [...prev, result.program]);
          }
          break;
        case 'events':
          if (isEditing) {
            result = await apiService.updateEvent(editingItem.id, formData);
            setEvents(prev => prev.map(e => e.id === editingItem.id ? result.event : e));
          } else {
            result = await apiService.createEvent(formData);
            setEvents(prev => [...prev, result.event]);
          }
          break;
        case 'achievements':
          if (isEditing) {
            result = await apiService.updateAchievement(editingItem.id, formData);
            setAchievements(prev => prev.map(a => a.id === editingItem.id ? result.achievement : a));
          } else {
            result = await apiService.createAchievement(formData);
            setAchievements(prev => [...prev, result.achievement]);
          }
          break;
        case 'announcements':
          if (isEditing) {
            result = await apiService.updateAnnouncement(editingItem.id, formData);
            setAnnouncements(prev => prev.map(a => a.id === editingItem.id ? result.announcement : a));
          } else {
            result = await apiService.createAnnouncement(formData);
            setAnnouncements(prev => [...prev, result.announcement]);
          }
          break;
        case 'admissions-dates':
          if (isEditing) {
            result = await apiService.updateAdmissionsImportantDate(editingItem.id, formData);
            setAdmissionsDates(prev => prev.map(d => d.id === editingItem.id ? result.date : d));
          } else {
            result = await apiService.createAdmissionsImportantDate(formData);
            setAdmissionsDates(prev => [...prev, result.date]);
          }
          break;
      }

      setSuccess(`${activeTab.replace('-', ' ')} ${isEditing ? 'updated' : 'created'} successfully!`);
      // Refresh data from server to ensure the page reflects persisted values
      await loadAllData();

      setShowForm(false);
      setEditingItem(null);
      setFormData({});
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Failed to save: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const renderDashboard = () => (
    <div className="admin-dashboard">
      <div className="table-header is-centered">
        <h3>Admin Dashboard</h3>
      </div>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon"><i className="fas fa-graduation-cap"></i></div>
          <div className="stat-content">
            <h3>{academicPrograms.length}</h3>
            <p>Academic Programs</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><i className="fas fa-calendar-alt"></i></div>
          <div className="stat-content">
            <h3>{events.length}</h3>
            <p>Events</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><i className="fas fa-trophy"></i></div>
          <div className="stat-content">
            <h3>{achievements.length}</h3>
            <p>Achievements</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><i className="fas fa-bullhorn"></i></div>
          <div className="stat-content">
            <h3>{announcements.length}</h3>
            <p>Announcements</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><i className="fas fa-clipboard-list"></i></div>
          <div className="stat-content">
            <h3>{admissionsDates.length}</h3>
            <p>Admissions Dates</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataTable = (data, type) => {
    const isCompact = isMobile || isTablet;
    const titleText = type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

    const headers = getTableHeaders(type);

    const renderItemCard = (item) => {
      const values = getTableCells(item, type);
      return (
        <div key={item.id} className="data-card">
          <div className="data-card-body">
            {headers.map((label, idx) => (
              <div key={label} className="data-card-row">
                <div className="data-card-label">{label}</div>
                <div className="data-card-value">{values[idx]}</div>
              </div>
            ))}
          </div>
          <div className="data-card-actions">
            <button 
              className="btn btn-sm btn-secondary" 
              onClick={() => handleEdit(item)}
            >
              Edit
            </button>
            <button 
              className="btn btn-sm btn-danger" 
              onClick={() => handleDelete(item, type)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    };

    return (
      <div className="data-table-container">
        <div className="table-header">
          <h3>{titleText}</h3>
          <button className="btn btn-primary" onClick={handleCreate}>
            <span className="btn-icon"><i className="fas fa-plus"></i></span>
            Add New
          </button>
        </div>

        {data.length === 0 ? (
          <div className="empty-state">
            <p>No {type.replace('-', ' ')} found. Click "Add New" to create one.</p>
          </div>
        ) : isCompact ? (
          <div className="card-list">
            {data.map(item => renderItemCard(item))}
          </div>
        ) : (
          <div className={`table-wrapper ${!isCompact && data.length > 4 ? 'is-scrollable' : ''}`}>
            <table className="data-table">
              <thead>
                <tr>
                  {headers.map(header => (
                    <th key={header}>{header}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    {getTableCells(item, type).map((cell, index) => (
                      <td key={index}>{cell}</td>
                    ))}
                    <td className="actions-cell">
                      <button 
                        className="btn btn-sm btn-secondary" 
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-danger" 
                        onClick={() => handleDelete(item, type)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  const getTableHeaders = (type) => {
    switch (type) {
      case 'academic-programs':
        return ['Title', 'Short Title', 'Duration', 'Units', 'Status'];
      case 'events':
        return ['Title', 'Date', 'Time', 'Location', 'Status'];
      case 'achievements':
        return ['Title', 'Date', 'Category', 'Status'];
      case 'announcements':
        return ['Title', 'Date', 'Status'];
      case 'admissions-dates':
        return ['Title', 'Start Date', 'End Date', 'Status'];
      default:
        return [];
    }
  };

  const getTableCells = (item, type) => {
    switch (type) {
      case 'academic-programs':
        return [
          item.title || 'N/A',
          item.short_title || 'N/A',
          item.duration_years ?? 'N/A',
          item.total_units ?? 'N/A',
          item.is_active ? 'Active' : 'Inactive'
        ];
      case 'events':
        return [
          item.title || 'N/A',
          item.event_date || 'N/A',
          `${item.start_time || 'N/A'} - ${item.end_time || 'N/A'}`,
          item.location || 'TBA',
          item.is_active ? 'Active' : 'Inactive'
        ];
      case 'achievements':
        return [
          item.title || 'N/A',
          item.achievement_date || 'N/A',
          item.category || 'N/A',
          item.is_active ? 'Active' : 'Inactive'
        ];
      case 'announcements':
        return [
          item.title || 'N/A',
          item.date || 'N/A',
          item.is_active ? 'Active' : 'Inactive'
        ];
      case 'admissions-dates':
        return [
          item.title || 'N/A',
          item.start_date || 'N/A',
          item.end_date || 'N/A',
          item.is_active ? 'Active' : 'Inactive'
        ];
      default:
        return [];
    }
  };

  const renderForm = () => {
    if (!showForm) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{editingItem ? 'Edit' : 'Create'} {activeTab.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
          </div>
          <form onSubmit={handleSubmit} className="admin-form">
            {renderFormFields()}
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Saving...' : (editingItem ? 'Update' : 'Create')}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderTopNav = () => (
    <div className="content-top-nav">
      <nav className="top-nav">
        <button 
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <span className="nav-icon"><i className="fas fa-chart-pie"></i></span>
          Dashboard
        </button>
        <button 
          className={`nav-item ${activeTab === 'academic-programs' ? 'active' : ''}`}
          onClick={() => setActiveTab('academic-programs')}
        >
          <span className="nav-icon"><i className="fas fa-graduation-cap"></i></span>
          Academic Programs
        </button>
        <button 
          className={`nav-item ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          <span className="nav-icon"><i className="fas fa-calendar-alt"></i></span>
          Events
        </button>
        <button 
          className={`nav-item ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <span className="nav-icon"><i className="fas fa-trophy"></i></span>
          Achievements
        </button>
        <button 
          className={`nav-item ${activeTab === 'announcements' ? 'active' : ''}`}
          onClick={() => setActiveTab('announcements')}
        >
          <span className="nav-icon"><i className="fas fa-bullhorn"></i></span>
          Announcements
        </button>
        <button 
          className={`nav-item ${activeTab === 'admissions-dates' ? 'active' : ''}`}
          onClick={() => setActiveTab('admissions-dates')}
        >
          <span className="nav-icon"><i className="fas fa-clipboard-list"></i></span>
          Admissions Dates
        </button>
      </nav>
    </div>
  );

  const renderFormFields = () => {
    switch (activeTab) {
      case 'academic-programs':
        return (
          <>
            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Short Title *</label>
              <input
                type="text"
                name="short_title"
                value={formData.short_title || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Program Type *</label>
              <select
                name="program_type"
                value={formData.program_type || 'BS'}
                onChange={handleInputChange}
                required
              >
                <option value="BS">Bachelor of Science</option>
                <option value="BA">Bachelor of Arts</option>
                <option value="MA">Master of Arts</option>
                <option value="MS">Master of Science</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleInputChange}
                required
                rows="3"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Duration (Years) *</label>
                <input
                  type="number"
                  name="duration_years"
                  value={formData.duration_years || 4}
                  onChange={handleInputChange}
                  required
                  min="1"
                />
              </div>
              <div className="form-group">
                <label>Total Units *</label>
                <input
                  type="number"
                  name="total_units"
                  value={formData.total_units || 120}
                  onChange={handleInputChange}
                  required
                  min="1"
                />
              </div>
              <div className="form-group">
                <label>Enhancements</label>
                <input
                  type="number"
                  name="with_enhancements"
                  value={formData.with_enhancements || 0}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Program Overview</label>
              <textarea
                name="program_overview"
                value={formData.program_overview || ''}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            <div className="form-group">
              <label>Core Courses (one per line)</label>
              <textarea
                name="core_courses"
                value={formData.core_courses || ''}
                onChange={handleInputChange}
                rows="6"
                placeholder="Enter each course on a new line"
              />
            </div>
            <div className="form-group">
              <label>Career Prospects</label>
              <textarea
                name="career_prospects"
                value={formData.career_prospects || ''}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            <div className="form-row-inline">
              <div className="form-group">
                <label>Display Order</label>
                <input
                  type="number"
                  name="display_order"
                  value={formData.display_order || 0}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active || false}
                    onChange={handleInputChange}
                  />
                  Active
                </label>
              </div>
            </div>
          </>
        );
      case 'events':
        return (
          <>
            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleInputChange}
                required
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Details</label>
              <textarea
                name="details"
                value={formData.details || ''}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Event Date *</label>
                <input
                  type="date"
                  name="event_date"
                  value={formData.event_date || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Start Time *</label>
                <input
                  type="time"
                  name="start_time"
                  value={formData.start_time || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>End Time *</label>
                <input
                  type="time"
                  name="end_time"
                  value={formData.end_time || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row-inline">
              <div className="form-group">
                <label>Display Order</label>
                <input
                  type="number"
                  name="display_order"
                  value={formData.display_order || 0}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active || false}
                    onChange={handleInputChange}
                  />
                  Active
                </label>
              </div>
            </div>
          </>
        );
      case 'achievements':
        return (
          <>
            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleInputChange}
                required
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Details</label>
              <textarea
                name="details"
                value={formData.details || ''}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Achievement Date *</label>
                <input
                  type="date"
                  name="achievement_date"
                  value={formData.achievement_date || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category || 'Achievement'}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row-inline">
              <div className="form-group">
                <label>Display Order</label>
                <input
                  type="number"
                  name="display_order"
                  value={formData.display_order || 0}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active || false}
                    onChange={handleInputChange}
                  />
                  Active
                </label>
              </div>
            </div>
          </>
        );
      case 'announcements':
        return (
          <>
            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Body *</label>
              <textarea
                name="body"
                value={formData.body || ''}
                onChange={handleInputChange}
                required
                rows="4"
              />
            </div>
            <div className="form-group">
              <label>Details</label>
              <textarea
                name="details"
                value={formData.details || ''}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            <div className="form-row-inline">
              <div className="form-group">
                <label>Display Order</label>
                <input
                  type="number"
                  name="display_order"
                  value={formData.display_order || 0}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active || false}
                    onChange={handleInputChange}
                  />
                  Active
                </label>
              </div>
            </div>
          </>
        );
      case 'admissions-dates':
        return (
          <>
            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date *</label>
                <input
                  type="date"
                  name="start_date"
                  value={formData.start_date || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>End Date *</label>
                <input
                  type="date"
                  name="end_date"
                  value={formData.end_date || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row-inline">
              <div className="form-group">
                <label>Display Order</label>
                <input
                  type="number"
                  name="display_order"
                  value={formData.display_order || 0}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active || false}
                    onChange={handleInputChange}
                  />
                  Active
                </label>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // Show loading while checking authentication
  if (checkingAuth) {
    return (
      <div className="admin-page">
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <div className="header-content">
            <div className="header-text">
              <h1>CCB Portal Administration</h1>
              <p>Manage your website content</p>
            </div>
            <div className="header-actions">
            {(isMobile || isTablet) && false && (
                <button
                  className={`btn btn-secondary btn-sm mobile-menu-button`}
                  onClick={() => setIsMobileMenuOpen(prev => !prev)}
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <span className="btn-icon"><i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i></span>
                  Menu
                </button>
              )}
              {user && (
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <span className="btn-icon"><i className="fas fa-sign-out-alt"></i></span>
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            {success}
          </div>
        )}

        {renderTopNav()}

        <div className={`admin-layout ${isMobile || isTablet ? 'is-compact' : ''}`}>

          <div className="admin-content">
            {loading && (
              <div className="loading-overlay">
                <div className="loading-spinner"></div>
                <p>Loading...</p>
              </div>
            )}

            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'academic-programs' && renderDataTable(academicPrograms, 'academic-programs')}
            {activeTab === 'events' && renderDataTable(events, 'events')}
            {activeTab === 'achievements' && renderDataTable(achievements, 'achievements')}
            {activeTab === 'announcements' && renderDataTable(announcements, 'announcements')}
            {activeTab === 'admissions-dates' && renderDataTable(admissionsDates, 'admissions-dates')}
          </div>
        </div>

        {renderForm()}
      </div>
    </div>
  );
};

export default AdminPage;

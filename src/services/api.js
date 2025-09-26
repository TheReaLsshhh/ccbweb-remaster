// API service for communicating with Django backend

const API_BASE_URL = '/api';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
    }

    async makeRequest(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            credentials: 'include', // Include cookies for session authentication
            ...options,
        };

        try {
            console.log(`Making ${config.method || 'GET'} request to:`, url);
            const response = await fetch(url, config);
            
            console.log(`Response status:`, response.status);
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`HTTP error response:`, errorText);
                throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
            }
            
            const data = await response.json();
            console.log(`Response data:`, data);
            return data;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // Test API connection
    async testConnection() {
        return this.makeRequest('/test/');
    }

    // Get academic programs
    async getAcademicPrograms() {
        return this.makeRequest('/academic-programs/');
    }

    // Get news and events
    async getNewsEvents() {
        return this.makeRequest('/news-events/');
    }

    // Get announcements
    async getAnnouncements() {
        return this.makeRequest('/announcements/');
    }

    // Get events
    async getEvents() {
        return this.makeRequest('/events/');
    }

    // Get achievements
    async getAchievements() {
        return this.makeRequest('/achievements/');
    }

    // Admin: Get all data (including inactive)
    async getAdminAcademicPrograms() {
        return this.makeRequest('/admin/academic-programs/all/');
    }

    async getAdminEvents() {
        return this.makeRequest('/admin/events/all/');
    }

    async getAdminAchievements() {
        return this.makeRequest('/admin/achievements/all/');
    }

    async getAdminAnnouncements() {
        return this.makeRequest('/admin/announcements/all/');
    }

    async getAdminAdmissionsImportantDates() {
        return this.makeRequest('/admin/admissions-important-dates/all/');
    }

    // Admin: Academic Programs CRUD
    async createAcademicProgram(payload) {
        console.log('Creating academic program with payload:', payload);
        return this.makeRequest('/admin/academic-programs/', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async updateAcademicProgram(programId, payload) {
        console.log('Updating academic program with ID:', programId, 'payload:', payload);
        return this.makeRequest(`/admin/academic-programs/${programId}/`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async deleteAcademicProgram(programId) {
        return this.makeRequest(`/admin/academic-programs/${programId}/delete/`, {
            method: 'DELETE',
        });
    }

    // Admin: Events CRUD
    async createEvent(payload) {
        console.log('Creating event with payload:', payload);
        return this.makeRequest('/admin/events/', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async updateEvent(eventId, payload) {
        console.log('Updating event with ID:', eventId, 'payload:', payload);
        return this.makeRequest(`/admin/events/${eventId}/`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async deleteEvent(eventId) {
        return this.makeRequest(`/admin/events/${eventId}/delete/`, {
            method: 'DELETE',
        });
    }

    // Admin: Achievements CRUD
    async createAchievement(payload) {
        console.log('Creating achievement with payload:', payload);
        return this.makeRequest('/admin/achievements/', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async updateAchievement(achievementId, payload) {
        console.log('Updating achievement with ID:', achievementId, 'payload:', payload);
        return this.makeRequest(`/admin/achievements/${achievementId}/`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async deleteAchievement(achievementId) {
        return this.makeRequest(`/admin/achievements/${achievementId}/delete/`, {
            method: 'DELETE',
        });
    }

    // Admin: Announcements CRUD
    async createAnnouncement(payload) {
        console.log('Creating announcement with payload:', payload);
        return this.makeRequest('/admin/announcements/', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async updateAnnouncement(announcementId, payload) {
        console.log('Updating announcement with ID:', announcementId, 'payload:', payload);
        return this.makeRequest(`/admin/announcements/${announcementId}/`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async deleteAnnouncement(announcementId) {
        return this.makeRequest(`/admin/announcements/${announcementId}/delete/`, {
            method: 'DELETE',
        });
    }

    // Admin: Admissions Important Dates CRUD
    async createAdmissionsImportantDate(payload) {
        console.log('Creating admissions date with payload:', payload);
        return this.makeRequest('/admin/admissions-important-dates/', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async updateAdmissionsImportantDate(dateId, payload) {
        console.log('Updating admissions date with ID:', dateId, 'payload:', payload);
        return this.makeRequest(`/admin/admissions-important-dates/${dateId}/`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async deleteAdmissionsImportantDate(dateId) {
        return this.makeRequest(`/admin/admissions-important-dates/${dateId}/delete/`, {
            method: 'DELETE',
        });
    }

    // Get admissions information
    async getAdmissionsInfo() {
        return this.makeRequest('/admissions-info/');
    }

    // Get admissions important dates
    async getAdmissionsImportantDates() {
        return this.makeRequest('/admissions-important-dates/');
    }

    // Get downloads
    async getDownloads() {
        return this.makeRequest('/downloads/');
    }

    // Submit contact form
    async submitContactForm(formData) {
        return this.makeRequest('/contact-form/', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
    }

    // Authentication methods
    async login(username, password) {
        return this.makeRequest('/auth/login/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });
    }

    async logout() {
        return this.makeRequest('/auth/logout/', {
            method: 'POST',
        });
    }

    async checkAuth() {
        return this.makeRequest('/auth/check/');
    }

    async getSuperuserCredentials() {
        return this.makeRequest('/auth/superuser-credentials/');
    }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService; 
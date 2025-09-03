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
            ...options,
        };

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
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

    // Get admissions information
    async getAdmissionsInfo() {
        return this.makeRequest('/admissions-info/');
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
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService; 
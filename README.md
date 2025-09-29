# CCB Web Portal

A modern web application for the College of Computer and Business (CCB) featuring a React frontend and Django backend.

## 🚀 Features

- **Academic Programs**: Browse and explore available academic programs
- **Admissions**: Information about admissions process and important dates
- **Faculty & Staff**: Directory of faculty and staff members
- **News & Events**: Latest announcements and upcoming events
- **Student Portal**: Student-specific features and resources
- **Downloads**: Access to important documents and forms
- **Contact Us**: Get in touch with the college
- **Admin Panel**: Administrative interface for content management

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI framework
- **CSS3** - Styling and responsive design
- **JavaScript ES6+** - Interactive functionality

### Backend
- **Django** - Python web framework
- **Django REST Framework** - API development
- **SQLite/PostgreSQL** - Database management

## 📋 Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)
- npm or yarn (Node package manager)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ccbweb-main
```

### 2. Backend Setup
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start Django server
python manage.py runserver
```

### 3. Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm start
```

### 4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Admin Panel: http://localhost:8000/admin

## 📁 Project Structure

```
ccbweb-main/
├── src/                    # React frontend source code
│   ├── components/         # Reusable React components
│   ├── services/          # API service functions
│   └── *.js               # Page components
├── portal/                # Django app for portal functionality
├── ccb_portal_backend/    # Django project settings
├── static/                # Static files
├── templates/             # Django templates
├── migrations/            # Database migrations
├── models.py              # Django models
├── views.py               # Django views
├── urls.py                # URL routing
└── requirements.txt       # Python dependencies
```

## 🔧 Development

### Running Tests
```bash
# Backend tests
python manage.py test

# Frontend tests
npm test
```

### Building for Production
```bash
# Build React app
npm run build

# Collect static files
python manage.py collectstatic
```

## 📝 API Endpoints

- `/api/programs/` - Academic programs
- `/api/admissions/` - Admissions information
- `/api/faculty/` - Faculty and staff data
- `/api/events/` - News and events
- `/api/announcements/` - College announcements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**College of Computer and Business (CCB)** - Empowering students through technology and business education.

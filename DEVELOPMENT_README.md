# CCB Portal - Development Setup

This project combines a **Django backend** with a **React frontend**.

## 🚀 Quick Start

### Option 1: Automated Startup (Recommended)
```bash
# Make sure your virtual environment is activated
.\venv\Scripts\Activate.ps1

# Start both servers automatically
python start_development.py
```

### Option 2: Manual Startup

#### Terminal 1 - Django Backend:
```bash
# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Start Django server
python manage.py runserver
```

#### Terminal 2 - React Frontend:
```bash
# Start React development server
npm start
```

## 🌐 Access Points

- **React Frontend**: http://localhost:3000
- **Django Backend**: http://127.0.0.1:8000
- **Django Admin**: http://127.0.0.1:8000/admin
- **API Test**: http://127.0.0.1:8000/api/test/

## 📁 Project Structure

```
ccb-portal/
├── ccb_portal_backend/     # Django project settings
├── portal/                 # Django app
│   ├── templates/         # Django templates (includes React build)
│   ├── views.py          # Django views
│   └── urls.py           # Django URLs
├── src/                   # React source code
├── public/               # React public files
├── build/                # React production build
├── static/               # Django static files
├── media/                # Django media files
├── manage.py             # Django management
├── package.json          # React dependencies
└── requirements.txt      # Python dependencies
```

## 🔧 Development Workflow

### Frontend Development (React)
1. Edit files in `src/` directory
2. React will hot-reload at http://localhost:3000
3. For production, run `npm run build` and Django will serve the build

### Backend Development (Django)
1. Edit files in `portal/` and `ccb_portal_backend/`
2. Django will auto-reload at http://127.0.0.1:8000
3. API endpoints are available at `/api/`

### Database Changes
```bash
# Create new migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate
```

## 🛠️ Available Commands

### Django Commands
```bash
python manage.py runserver          # Start Django server
python manage.py makemigrations     # Create migrations
python manage.py migrate            # Apply migrations
python manage.py createsuperuser    # Create admin user
python manage.py collectstatic      # Collect static files
```

### React Commands
```bash
npm start                           # Start development server
npm run build                       # Build for production
npm test                           # Run tests
npm run eject                      # Eject from Create React App
```

### Utility Scripts
```bash
python setup_database.py           # Setup MySQL database
python set_admin_password.py       # Set admin password
python start_development.py        # Start both servers
```

## 🔌 API Integration

### Frontend → Backend Communication
- React runs on port 3000
- Django runs on port 8000
- CORS is configured to allow cross-origin requests
- API endpoints are available at `http://127.0.0.1:8000/api/`

### Example API Call from React:
```javascript
fetch('http://127.0.0.1:8000/api/test/')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 🗄️ Database

- **Type**: MySQL (XAMPP)
- **Name**: `ccb_portal`
- **Admin**: http://127.0.0.1:8000/admin
  - Username: `admin`
  - Password: `admin123`

## 🚨 Troubleshooting

### Port Already in Use
- Django: Change port with `python manage.py runserver 8001`
- React: Change port with `PORT=3001 npm start`

### Database Connection Issues
1. Ensure XAMPP MySQL is running
2. Check database exists: `python setup_database.py`
3. Verify credentials in `ccb_portal_backend/settings.py`

### React Build Issues
1. Clear build: `rm -rf build/`
2. Reinstall dependencies: `npm install`
3. Rebuild: `npm run build`

### Django Static Files
1. Collect static files: `python manage.py collectstatic`
2. Check `STATICFILES_DIRS` in settings.py
3. Ensure build folder is in static directories

## 📦 Dependencies

### Python (requirements.txt)
- Django 5.2.5
- mysqlclient
- django-cors-headers
- whitenoise

### Node.js (package.json)
- React 18.2.0
- react-scripts 5.0.1
- Testing libraries

## 🎯 Production Deployment

For production, you'll want to:
1. Build React: `npm run build`
2. Configure Django for production
3. Set up a proper web server (nginx + gunicorn)
4. Configure environment variables
5. Set up SSL certificates 
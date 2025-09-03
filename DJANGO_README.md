# CCB Portal - Django Backend

This is the Django backend for the CCB Portal project.

## Setup Instructions

### 1. Virtual Environment
Make sure your virtual environment is activated:
```bash
.\venv\Scripts\Activate.ps1
```

### 2. Database Configuration
Before running migrations, you need to:

1. **Start XAMPP** and ensure MySQL service is running
2. **Create the database**:
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Create a new database named `ccb_portal`
   - Or use MySQL command line:
   ```sql
   CREATE DATABASE ccb_portal;
   ```
3. **Database credentials** are already configured in `ccb_portal_backend/settings.py`:
   - User: root
   - Password: (empty - default XAMPP setting)
   - Host: localhost
   - Port: 3306

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create Superuser
```bash
python manage.py createsuperuser
```

### 6. Run Development Server
```bash
python manage.py runserver
```

The server will be available at `http://127.0.0.1:8000/`

## Project Structure

- `ccb_portal_backend/` - Main Django project settings
- `portal/` - Main application
- `static/` - Static files (CSS, JS, images)
- `media/` - User-uploaded files
- `requirements.txt` - Python dependencies

## Database Configuration

The project is configured to use MySQL (XAMPP) with the database name `ccb_portal`. Make sure to:
1. Have XAMPP installed and MySQL service running
2. Create the database `ccb_portal` in phpMyAdmin
3. The default XAMPP MySQL settings are already configured (root user, no password)

## Next Steps

1. Create models in `portal/models.py`
2. Set up views in `portal/views.py`
3. Configure URLs in `portal/urls.py`
4. Create templates in `portal/templates/` 
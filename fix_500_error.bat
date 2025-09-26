@echo off
echo Fixing 500 HTTP Error - Database Setup
echo ======================================

echo.
echo Step 1: Activating virtual environment...
call venv\Scripts\activate

echo.
echo Step 2: Running database setup...
python setup_database_fix.py

echo.
echo Step 3: Starting Django server...
echo You can now test the admin panel at http://localhost:8000/admin/
echo Username: admin
echo Password: admin123
echo.
python manage.py runserver 0.0.0.0:8000

pause


#!/usr/bin/env python
"""
Script to fix database issues and set up the database properly
"""
import os
import sys
import subprocess
import django

# Add the project directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ccb_portal_backend.settings')
django.setup()

from django.core.management import execute_from_command_line
from django.contrib.auth.models import User

def run_command(command):
    """Run a Django management command"""
    try:
        print(f"Running: {command}")
        execute_from_command_line(command.split())
        print(f"✅ {command} completed successfully")
        return True
    except Exception as e:
        print(f"❌ {command} failed: {e}")
        return False

def setup_database():
    """Set up the database with migrations and superuser"""
    print("🔧 Setting up database...")
    print("=" * 50)
    
    # Step 1: Make migrations
    print("\n1. Creating migrations...")
    if not run_command("makemigrations"):
        return False
    
    # Step 2: Apply migrations
    print("\n2. Applying migrations...")
    if not run_command("migrate"):
        return False
    
    # Step 3: Create superuser if it doesn't exist
    print("\n3. Setting up admin user...")
    try:
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                email='admin@ccb.edu',
                password='admin123'
            )
            print("✅ Admin user created (username: admin, password: admin123)")
        else:
            print("✅ Admin user already exists")
    except Exception as e:
        print(f"❌ Failed to create admin user: {e}")
        return False
    
    # Step 4: Create some sample data
    print("\n4. Creating sample data...")
    try:
        from portal.models import AcademicProgram, Event, Achievement, Announcement, AdmissionsImportantDate
        
        # Create sample academic program
        if not AcademicProgram.objects.filter(title="Bachelor of Science in Information Technology").exists():
            AcademicProgram.objects.create(
                title="Bachelor of Science in Information Technology",
                short_title="BSIT",
                program_type="BS",
                description="A comprehensive program in Information Technology",
                duration_years=4,
                total_units=120,
                program_overview="This program provides students with a solid foundation in IT concepts and practical skills.",
                core_courses="Programming Fundamentals\nDatabase Management\nWeb Development\nNetwork Administration",
                career_prospects="Software Developer, Database Administrator, Network Engineer, IT Consultant",
                is_active=True,
                display_order=1
            )
            print("✅ Sample academic program created")
        
        # Create sample event
        if not Event.objects.filter(title="Orientation Day").exists():
            Event.objects.create(
                title="Orientation Day",
                description="Welcome new students to CCB",
                event_date="2024-08-15",
                start_time="08:00",
                end_time="17:00",
                location="Main Campus",
                is_active=True,
                display_order=1
            )
            print("✅ Sample event created")
        
        # Create sample achievement
        if not Achievement.objects.filter(title="Accreditation Achievement").exists():
            Achievement.objects.create(
                title="Accreditation Achievement",
                description="CCB receives full accreditation",
                achievement_date="2024-01-15",
                category="Accreditation",
                is_active=True,
                display_order=1
            )
            print("✅ Sample achievement created")
        
        # Create sample announcement
        if not Announcement.objects.filter(title="Welcome to New Academic Year").exists():
            Announcement.objects.create(
                title="Welcome to New Academic Year",
                date="2024-08-01",
                body="Welcome to the new academic year at CCB!",
                details="We are excited to welcome all students to the new academic year. Please check the important dates and events.",
                is_active=True,
                display_order=1
            )
            print("✅ Sample announcement created")
        
        # Create sample admissions date
        if not AdmissionsImportantDate.objects.filter(title="Application Period").exists():
            AdmissionsImportantDate.objects.create(
                title="Application Period",
                start_date="2024-06-01",
                end_date="2024-07-31",
                is_active=True,
                display_order=1
            )
            print("✅ Sample admissions date created")
            
    except Exception as e:
        print(f"❌ Failed to create sample data: {e}")
        return False
    
    print("\n🎉 Database setup completed successfully!")
    print("\n📋 Summary:")
    print("- Database: SQLite (db.sqlite3)")
    print("- Admin user: admin / admin123")
    print("- Sample data created for all models")
    print("\n🚀 You can now:")
    print("- Start the server: python manage.py runserver")
    print("- Access admin panel: http://localhost:8000/admin/")
    print("- Test the API endpoints")
    
    return True

if __name__ == "__main__":
    setup_database()


#!/usr/bin/env python
"""
Database setup script for CCB Portal Django project
This script helps create the MySQL database if it doesn't exist
"""

import mysql.connector
from mysql.connector import Error

def create_database():
    """Create the ccb_portal database if it doesn't exist"""
    try:
        # Connect to MySQL server (without specifying database)
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            port=3306
        )
        
        if connection.is_connected():
            cursor = connection.cursor()
            
            # Create database if it doesn't exist
            cursor.execute("CREATE DATABASE IF NOT EXISTS ccb_portal")
            print("✅ Database 'ccb_portal' created successfully or already exists!")
            
            # Show all databases
            cursor.execute("SHOW DATABASES")
            databases = cursor.fetchall()
            print("\n📋 Available databases:")
            for db in databases:
                print(f"   - {db[0]}")
            
    except Error as e:
        print(f"❌ Error connecting to MySQL: {e}")
        print("\n🔧 Troubleshooting:")
        print("1. Make sure XAMPP is running")
        print("2. Make sure MySQL service is started in XAMPP Control Panel")
        print("3. Check if MySQL is running on port 3306")
        
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("\n🔌 MySQL connection closed.")

if __name__ == "__main__":
    print("🚀 Setting up CCB Portal Database...")
    print("=" * 40)
    create_database()
    print("\n📝 Next steps:")
    print("1. Run: python manage.py makemigrations")
    print("2. Run: python manage.py migrate")
    print("3. Run: python manage.py createsuperuser")
    print("4. Run: python manage.py runserver") 
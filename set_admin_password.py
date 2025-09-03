#!/usr/bin/env python
"""
Set admin password for Django project
"""

import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ccb_portal_backend.settings')
django.setup()

from django.contrib.auth.models import User

# Set admin password
try:
    admin_user = User.objects.get(username='admin')
    admin_user.set_password('admin123')
    admin_user.save()
    print("✅ Admin password set successfully!")
    print("Username: admin")
    print("Password: admin123")
except User.DoesNotExist:
    print("❌ Admin user not found. Creating one...")
    admin_user = User.objects.create_superuser('admin', 'admin@ccb-portal.com', 'admin123')
    print("✅ Admin user created successfully!")
    print("Username: admin")
    print("Password: admin123") 
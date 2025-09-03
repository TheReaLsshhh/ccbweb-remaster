#!/usr/bin/env python
"""
Development startup script for CCB Portal
Starts both Django backend and React frontend
"""

import subprocess
import sys
import os
import time
import threading
from pathlib import Path

def start_django():
    """Start Django development server"""
    print("🚀 Starting Django backend server...")
    try:
        subprocess.run([sys.executable, "manage.py", "runserver"], check=True)
    except KeyboardInterrupt:
        print("\n🛑 Django server stopped")
    except Exception as e:
        print(f"❌ Error starting Django: {e}")

def start_react():
    """Start React development server"""
    print("⚛️  Starting React frontend server...")
    try:
        # Use shell=True for Windows compatibility
        subprocess.run("npm start", shell=True, check=True)
    except KeyboardInterrupt:
        print("\n🛑 React server stopped")
    except Exception as e:
        print(f"❌ Error starting React: {e}")

def main():
    print("🎯 CCB Portal Development Environment")
    print("=" * 40)
    
    # Check if we're in the right directory
    if not Path("manage.py").exists():
        print("❌ Error: manage.py not found. Please run this script from the project root.")
        return
    
    if not Path("package.json").exists():
        print("❌ Error: package.json not found. Please run this script from the project root.")
        return
    
    print("✅ Project structure verified")
    print("\n📋 Starting servers...")
    print("   Django: http://127.0.0.1:8000")
    print("   React:  http://localhost:3000")
    print("   Admin:  http://127.0.0.1:8000/admin")
    print("\nPress Ctrl+C to stop all servers")
    print("-" * 40)
    
    # Start Django in a separate thread
    django_thread = threading.Thread(target=start_django, daemon=True)
    django_thread.start()
    
    # Give Django a moment to start
    time.sleep(2)
    
    # Start React in main thread
    start_react()

if __name__ == "__main__":
    main() 
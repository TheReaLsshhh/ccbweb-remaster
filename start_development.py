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
import socket
from pathlib import Path


def get_lan_ip() -> str:
    """Best-effort to determine the host's LAN IPv4 address.
    Falls back to 127.0.0.1 if detection fails.
    """
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # Doesn't need to be reachable; used to pick a route/interface
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

def start_django(bind_ip: str):
    """Start Django development server bound to provided IP (0.0.0.0 for all)."""
    print("🚀 Starting Django backend server...")
    try:
        subprocess.run([sys.executable, "manage.py", "runserver", f"{bind_ip}:8000"], check=True)
    except KeyboardInterrupt:
        print("\n🛑 Django server stopped")
    except Exception as e:
        print(f"❌ Error starting Django: {e}")

def start_react():
    """Start React development server"""
    print("⚛️  Starting React frontend server...")
    try:
        # Use shell=True for Windows compatibility
        subprocess.run("npm start", shell=True, check=True, env=os.environ.copy())
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
    
    lan_ip = get_lan_ip()
    os.environ.setdefault("PUBLIC_BASE_URL", f"http://{lan_ip}:8000")
    os.environ.setdefault("REACT_APP_API_BASE", f"http://{lan_ip}:8000")

    print("✅ Project structure verified")
    print("\n📋 Starting servers...")
    print(f"   Django: http://{lan_ip}:8000  (bound 0.0.0.0:8000)")
    print("   React:  http://localhost:3000")
    print(f"   Verify link base (PUBLIC_BASE_URL): {os.environ['PUBLIC_BASE_URL']}")
    print("   Admin:  http://127.0.0.1:8000/admin")
    print("\nNote: If accessing from phone/tablet, ensure your device is on the same Wi‑Fi ")
    print("      and Windows Firewall allows Python on port 8000 (Private network).")
    print("\nPress Ctrl+C to stop all servers")
    print("-" * 40)
    
    # Start Django in a separate thread, bound to all interfaces
    django_thread = threading.Thread(target=start_django, args=("0.0.0.0",), daemon=True)
    django_thread.start()
    
    # Give Django a moment to start
    time.sleep(2)
    
    # Start React in main thread
    start_react()

if __name__ == "__main__":
    main()
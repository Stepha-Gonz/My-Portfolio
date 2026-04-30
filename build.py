#!/usr/bin/env python3
"""
Portfolio build script
  1. Compiles src/scss/main.scss → public/css/main.css
  2. Watches SCSS for changes and recompiles automatically
  3. Serves the site at http://localhost:3000

Usage:
  pip install -r requirements.txt
  python build.py
"""

import os
import sys
import time
import threading
import webbrowser
import http.server
import socketserver

try:
    import sass
except ImportError:
    print("✗ libsass not found. Run: pip install -r requirements.txt")
    sys.exit(1)

try:
    from watchdog.observers import Observer
    from watchdog.events import FileSystemEventHandler
    HAS_WATCHDOG = True
except ImportError:
    HAS_WATCHDOG = False

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SCSS_ENTRY = os.path.join(BASE_DIR, "src", "scss", "main.scss")
CSS_OUT_DIR = os.path.join(BASE_DIR, "public", "css")
CSS_OUT = os.path.join(CSS_OUT_DIR, "main.css")
PORT = 3000


def compile_scss():
    try:
        css = sass.compile(filename=SCSS_ENTRY, output_style="expanded")
        os.makedirs(CSS_OUT_DIR, exist_ok=True)
        with open(CSS_OUT, "w", encoding="utf-8") as f:
            f.write(css)
        print(f"  ✓ SCSS compiled → public/css/main.css")
    except sass.CompileError as e:
        print(f"  ✗ SCSS error:\n{e}")
    except Exception as e:
        print(f"  ✗ Build error: {e}")


class SCSSHandler(FileSystemEventHandler):
    _last = 0

    def on_modified(self, event):
        if not event.src_path.endswith(".scss"):
            return
        # debounce 200ms
        now = time.time()
        if now - SCSSHandler._last < 0.2:
            return
        SCSSHandler._last = now
        rel = os.path.relpath(event.src_path, BASE_DIR)
        print(f"  ~ {rel}")
        compile_scss()


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass  # suppress per-request logs


def serve():
    os.chdir(BASE_DIR)
    with socketserver.TCPServer(("", PORT), QuietHandler) as httpd:
        httpd.allow_reuse_address = True
        print(f"  🌐 http://localhost:{PORT}")
        httpd.serve_forever()


def main():
    print("\n── Portfolio Dev Server ──────────────────")
    print("  Compiling SCSS...")
    compile_scss()

    # Start file watcher
    if HAS_WATCHDOG:
        scss_dir = os.path.join(BASE_DIR, "src", "scss")
        observer = Observer()
        observer.schedule(SCSSHandler(), scss_dir, recursive=True)
        observer.start()
        print("  👀 Watching src/scss/ for changes")
    else:
        print("  ⚠  watchdog not installed — auto-reload disabled")
        observer = None

    # Start server in background thread
    t = threading.Thread(target=serve, daemon=True)
    t.start()

    time.sleep(0.4)
    webbrowser.open(f"http://localhost:{PORT}")
    print("  Press Ctrl+C to stop\n")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n  👋 Stopped.")
        if observer:
            observer.stop()
            observer.join()


if __name__ == "__main__":
    main()

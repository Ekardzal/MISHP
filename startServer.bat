@echo off
cd /d %cd%
python -m http.server 8000
start http://127.0.0.1:8000/
pause >nul
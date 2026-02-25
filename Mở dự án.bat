@echo off
echo Dang khoi dong server EduRobot...
start "" "http://localhost:8000"
python -m http.server 8000
pause

@echo off
title NovaForge Game Engine & Arcade Studio Server
echo ========================================================
echo  ?? Starting NovaForge Local Arcade Studio Server...
echo ========================================================
echo.
echo  Opening in your default browser: http://localhost:8080
echo  (Press Ctrl+C in this window to stop the server anytime)
echo.
start http://localhost:8080/index.html
python -m http.server 8080
pause

@echo off
echo ===================================================
echo   Khoi dong Server Local (PWA / test)
echo ===================================================
echo Local:  http://localhost:8080/
echo Cloud:  https://to-study-silk.vercel.app/
echo ===================================================
echo De tat server, bam Ctrl + C o cua so nay.

start http://localhost:8080/
npx -y http-server -p 8080 -c-1

pause

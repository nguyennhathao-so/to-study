@echo off
echo ===================================================
echo   Kho Khoi dong Server Local de cai dat PWA
echo ===================================================
echo Dang bat HTTP Server...
echo Mo trinh duyet cua ban va truy cap vao dia chi sau:
echo http://localhost:8080/study_plan_v2.html
echo ===================================================
echo De tat server, bam Ctrl + C o cua so nay.

start http://localhost:8080/study_plan_v2.html
npx -y http-server -p 8080 -c-1

pause

@echo off

call npm install

start "node" /min cmd /C node server.cjs

timeout /t 5 /nobreak >nul

start http://localhost:3000

echo Press any key to stop the server...
pause >nul

taskkill /IM node.exe /F

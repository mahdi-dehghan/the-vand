@echo off
title THE VAND — Local Preview
cd /d "%~dp0"
echo Starting THE VAND preview...
if exist "dist\serve.js" (
  cd dist
  node serve.js
) else (
  npm.cmd run preview
)
pause

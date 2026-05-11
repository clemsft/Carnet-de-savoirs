@echo off
REM =====================================================================
REM  Carnet de Savoirs — Snapshot Git
REM  Enregistre un point de retour avec un message court, met a jour les
REM  versions de cache (sw.js + ?v= sur les scripts d'index.html), puis
REM  push vers GitHub. Le cache busting evite davoir a faire Ctrl+F5
REM  apres chaque deploiement.
REM =====================================================================

setlocal
cd /d "%~dp0"

if not exist ".git" (
    echo Le depot Git n'est pas encore initialise.
    echo Double-clique Init-Git.bat d'abord.
    pause
    exit /b 1
)

REM ---------------------------------------------------------------------
REM  CACHE BUSTING - on bump la version dans sw.js + ?v= sur tous les
REM  scripts et styles locaux d'index.html. Le timestamp est genere AVANT
REM  de regarder les changements pour que les fichiers modifies fassent
REM  partie du commit.
REM ---------------------------------------------------------------------
for /f %%I in ('powershell -NoProfile -Command "Get-Date -Format yyyyMMddHHmm"') do set "buildts=%%I"

echo Mise a jour de la version de cache (build %buildts%)...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0Update-Cache-Version.ps1" -Version "%buildts%"
if errorlevel 1 (
    echo [ERREUR] Mise a jour du cache busting echouee.
    pause
    exit /b 1
)

REM Verifie qu'il y a quelque chose a committer (apres bump version)
git status --porcelain >"%TEMP%\cds_status.tmp"
for /f %%A in ("%TEMP%\cds_status.tmp") do set fsize=%%~zA
del "%TEMP%\cds_status.tmp" >nul 2>&1

if "%fsize%"=="0" (
    echo Aucun changement a enregistrer. Le depot est deja a jour.
    echo.
    pause
    exit /b 0
)

REM Timestamp lisible pour le message de commit
for /f %%I in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm"') do set "ts=%%I"

echo ============================================================
echo  Carnet de Savoirs - Nouveau snapshot
echo ============================================================
echo.
echo Changements detectes :
git status --short
echo.
set "msg="
set /p "msg=Message court (Entree = 'snapshot %ts%') : "
if "%msg%"=="" set "msg=snapshot %ts%"

git add .
git commit -m "%msg%"
if errorlevel 1 (
    echo [ERREUR] Commit echoue.
    pause
    exit /b 1
)

echo.
echo [OK] Snapshot enregistre localement.
echo.

REM Push automatique vers GitHub si un remote "origin" est configure.
git remote get-url origin >nul 2>nul
if errorlevel 1 (
    echo [INFO] Aucun remote GitHub configure - snapshot purement local.
    echo.
    pause
    endlocal
    exit /b 0
)

echo Deploiement vers GitHub...
git push origin main
if errorlevel 1 (
    echo.
    echo [ATTENTION] Le push a echoue. Le commit local est OK,
    echo mais le site en ligne n'est pas mis a jour.
    echo Verifie ta connexion ou execute "git push" manuellement.
    echo.
    pause
    endlocal
    exit /b 1
)

echo.
echo [OK] Site en ligne mis a jour. GitHub Pages publie en 30-60 secondes.
echo Un simple F5 sur la page suffit a voir la nouvelle version.
echo.
pause
endlocal

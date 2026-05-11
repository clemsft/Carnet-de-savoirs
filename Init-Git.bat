@echo off
REM =====================================================================
REM  Carnet de Savoirs — Initialisation du dépôt Git (à exécuter UNE fois)
REM  Crée le repo, fait le premier commit, prêt à utiliser Snapshot.bat ensuite.
REM =====================================================================

setlocal
cd /d "%~dp0"

if exist ".git" (
    echo Le depot Git est deja initialise dans ce dossier.
    echo.
    echo Pour enregistrer un nouveau snapshot : double-clique Snapshot.bat
    echo Pour voir l'historique :              double-clique Voir-Historique.bat
    echo.
    pause
    exit /b 0
)

echo ============================================================
echo  Carnet de Savoirs - Initialisation Git
echo ============================================================
echo.
echo Dossier : %CD%
echo.

git --version >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Git n'est pas accessible dans le PATH.
    echo Relance l'installeur de Git for Windows en cochant
    echo "Git from the command line and also from 3rd-party software".
    pause
    exit /b 1
)

git init -b main
if errorlevel 1 (
    echo [ERREUR] git init a echoue.
    pause
    exit /b 1
)

REM Identite locale au repo (n'affecte pas la config globale du systeme).
REM A personnaliser : nom GitHub + email noreply genere par GitHub
REM (Settings > Emails > "Keep my email addresses private").
git config user.name "anon"
git config user.email "anon@users.noreply.github.com"

git add .
git commit -m "v1 livree + correctifs initiaux + vague-1 d'ameliorations"
if errorlevel 1 (
    echo [ERREUR] Le premier commit a echoue.
    pause
    exit /b 1
)

echo.
echo ============================================================
echo  [OK] Depot Git initialise.
echo ============================================================
echo.
echo Tu peux maintenant :
echo   - Snapshot.bat        pour enregistrer un point de retour
echo   - Voir-Historique.bat pour visualiser tous les changements
echo.
pause
endlocal

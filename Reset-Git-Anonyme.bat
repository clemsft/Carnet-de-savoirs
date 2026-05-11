@echo off
chcp 65001 >nul
setlocal ENABLEDELAYEDEXPANSION

REM ============================================================
REM   Reset-Git-Anonyme — purge l'historique Git local et
REM   recommence proprement avec une identite anonyme.
REM
REM   A executer UNE FOIS, avant le premier push vers GitHub.
REM ============================================================

cd /d "%~dp0"

echo.
echo  ----------------------------------------------------
echo   Reset de l'historique Git du Carnet de Savoirs
echo  ----------------------------------------------------
echo.
echo  Ce script va :
echo    1. Supprimer le dossier .git (l'historique complet local)
echo    2. Reinitialiser un repo Git frais
echo    3. Te demander ton username GitHub et ton email noreply
echo    4. Creer un commit unique avec la nouvelle identite
echo.
echo  C'est irreversible. Tes fichiers sont preserves, seul l'historique part.
echo.
set /p CONFIRMER="Continuer ? (o/n) : "
if /i not "%CONFIRMER%"=="o" (
    echo Annule.
    pause
    exit /b 0
)

REM Verifier que Git est installe
where git >nul 2>nul
if errorlevel 1 (
    echo [ERREUR] Git n'est pas detecte dans le PATH.
    pause
    exit /b 1
)

echo.
echo  Saisie de ta nouvelle identite Git (a recuperer sur GitHub) :
echo.
echo   - Username : ton pseudo GitHub (ex: johndoe)
echo   - Email noreply : visible dans GitHub Settings ^> Emails
echo                     format : 12345+username@users.noreply.github.com
echo.
set /p GIT_USER="Username GitHub : "
set /p GIT_EMAIL="Email noreply GitHub : "

if "%GIT_USER%"=="" (
    echo [ERREUR] Username vide.
    pause
    exit /b 1
)
if "%GIT_EMAIL%"=="" (
    echo [ERREUR] Email vide.
    pause
    exit /b 1
)

echo.
echo  Recapitulatif :
echo    user.name  = %GIT_USER%
echo    user.email = %GIT_EMAIL%
echo.
set /p CONFIRMER2="Confirmer et lancer le reset ? (o/n) : "
if /i not "%CONFIRMER2%"=="o" (
    echo Annule.
    pause
    exit /b 0
)

REM Suppression du .git (force, recursif, silencieux)
if exist .git (
    echo Suppression de .git ...
    rmdir /s /q .git
)

REM Reinitialisation
git init -b main
if errorlevel 1 (
    echo [ERREUR] git init a echoue.
    pause
    exit /b 1
)

REM Identite locale au repo
git config user.name "%GIT_USER%"
git config user.email "%GIT_EMAIL%"

REM Commit initial
git add .
git commit -m "Initial commit (anonymise)"
if errorlevel 1 (
    echo [ERREUR] Le premier commit a echoue.
    pause
    exit /b 1
)

echo.
echo  ----------------------------------------------------
echo   OK. Historique Git reinitialise.
echo  ----------------------------------------------------
echo.
echo  Identite configuree :
git config user.name
git config user.email
echo.
echo  Etape suivante : creer un repo sur GitHub puis le connecter.
echo  Commandes a executer :
echo.
echo     git remote add origin https://github.com/%GIT_USER%/carnet-de-savoirs.git
echo     git push -u origin main
echo.
pause

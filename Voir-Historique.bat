@echo off
REM =====================================================================
REM  Carnet de Savoirs — Historique des snapshots
REM =====================================================================

setlocal
cd /d "%~dp0"

if not exist ".git" (
    echo Le depot Git n'est pas encore initialise.
    echo Double-clique Init-Git.bat d'abord.
    pause
    exit /b 1
)

echo ============================================================
echo  Historique des snapshots (du plus recent au plus ancien)
echo ============================================================
echo.
git log --pretty=format:"%%C(yellow)%%h%%C(reset)  %%C(green)%%ar%%C(reset)  %%s" --decorate
echo.
echo.
echo ------------------------------------------------------------
echo Pour voir le detail d'un commit precis (les fichiers modifies) :
echo   - Note l'identifiant en jaune au debut de la ligne (ex. "a1b2c3d")
echo   - Ouvre une fenetre PowerShell dans ce dossier
echo   - Tape :  git show a1b2c3d
echo ------------------------------------------------------------
echo.
pause
endlocal

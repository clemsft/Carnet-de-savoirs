@echo off
REM =====================================================================
REM  Carnet de Savoirs - Crée un raccourci sur le Bureau vers index.html
REM  Double-cliquez ce fichier UNE FOIS, c'est tout.
REM =====================================================================

setlocal

set "APP_DIR=%~dp0"
REM On retire le dernier backslash de APP_DIR pour la lisibilité du chemin
if "%APP_DIR:~-1%"=="\" set "APP_DIR=%APP_DIR:~0,-1%"

set "TARGET=%APP_DIR%\index.html"
set "DESKTOP=%USERPROFILE%\Desktop"
REM Sur Windows en français, le bureau peut s'appeler "Bureau"
if not exist "%DESKTOP%" set "DESKTOP=%USERPROFILE%\Bureau"

set "SHORTCUT=%DESKTOP%\Carnet de Savoirs.lnk"
set "ICON=%APP_DIR%\carnet.ico"
set "ICON_GEN=%APP_DIR%\Generer-Icone.ps1"

echo.
echo Carnet de Savoirs - Création du raccourci
echo ------------------------------------------
echo Cible    : %TARGET%
echo Raccourci: %SHORTCUT%
echo Icone    : %ICON%
echo.

if not exist "%TARGET%" (
    echo [ERREUR] index.html introuvable a l'emplacement attendu.
    echo Verifie que ce .bat est bien dans le dossier CarnetDeSavoirs.
    pause
    exit /b 1
)

REM ----- Génération de l'icône si elle n'existe pas encore -----
if not exist "%ICON%" (
    if exist "%ICON_GEN%" (
        echo Generation de l'icone du Carnet de Savoirs...
        powershell -NoProfile -ExecutionPolicy Bypass -File "%ICON_GEN%" -Output "%ICON%"
        if errorlevel 1 (
            echo [WARN] Generation d'icone echouee — le raccourci sera cree sans icone custom.
            set "ICON="
        )
    ) else (
        echo [WARN] Generer-Icone.ps1 introuvable, raccourci sans icone custom.
        set "ICON="
    )
)

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$ws = New-Object -ComObject WScript.Shell;" ^
    "$s = $ws.CreateShortcut('%SHORTCUT%');" ^
    "$s.TargetPath = '%TARGET%';" ^
    "$s.WorkingDirectory = '%APP_DIR%';" ^
    "$s.Description = 'Carnet de Savoirs - atelier d''apprentissage personnel';" ^
    "if ('%ICON%' -ne '' -and (Test-Path '%ICON%')) { $s.IconLocation = '%ICON%' };" ^
    "$s.Save();"

if errorlevel 1 (
    echo [ERREUR] La creation du raccourci a echoue.
    pause
    exit /b 1
)

echo.
echo [OK] Raccourci cree sur le Bureau.
echo Tu peux maintenant double-cliquer dessus pour lancer l'app.
echo.
pause
endlocal

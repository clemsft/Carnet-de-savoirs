# =====================================================================
#  Update-Cache-Version.ps1
#  Met à jour la version de cache (sw.js + ?v= dans index.html) avec un
#  timestamp passé en argument. Appelé par Snapshot.bat avant chaque
#  commit pour que les nouveaux assets soient automatiquement servis
#  sans avoir besoin de Ctrl+F5 côté navigateur.
# =====================================================================

param(
  [Parameter(Mandatory=$true)]
  [string]$Version
)

$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

# ---- 1. sw.js : VERSION constant ----
if (Test-Path 'sw.js') {
  $sw = Get-Content 'sw.js' -Raw -Encoding UTF8
  $pattern = "const VERSION = '[^']*';"
  $replacement = "const VERSION = '$Version';"
  $new = [regex]::Replace($sw, $pattern, $replacement)
  if ($new -ne $sw) {
    Set-Content 'sw.js' -Value $new -NoNewline -Encoding UTF8
    Write-Host "  [OK] sw.js -> VERSION = '$Version'"
  } else {
    Write-Host "  [SKIP] sw.js : pattern VERSION introuvable"
  }
}

# ---- 2. index.html : ?v=... sur tous les scripts/styles locaux ----
if (Test-Path 'index.html') {
  $html = Get-Content 'index.html' -Raw -Encoding UTF8
  # Match src="<chemin local>.js" (avec ou sans ?v=... déjà présent)
  # Le lookahead (?!https?:) exclut les CDN externes.
  $patternJs = '(src="(?!https?:)[^"]+\.js)(\?v=[^"]*)?"'
  $patternCss = '(href="(?!https?:)[^"]+\.css)(\?v=[^"]*)?"'
  $replacementJs = '${1}?v=' + $Version + '"'
  $replacementCss = '${1}?v=' + $Version + '"'
  $new = [regex]::Replace($html, $patternJs, $replacementJs)
  $new = [regex]::Replace($new, $patternCss, $replacementCss)
  if ($new -ne $html) {
    Set-Content 'index.html' -Value $new -NoNewline -Encoding UTF8
    $countJs = ([regex]::Matches($new, $patternJs)).Count
    $countCss = ([regex]::Matches($new, $patternCss)).Count
    Write-Host "  [OK] index.html -> $countJs script(s) + $countCss style(s) versionnes"
  } else {
    Write-Host "  [SKIP] index.html : aucun script/style local trouve"
  }
}

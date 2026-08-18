# =====================================================================
#  Update-Cache-Version.ps1
#  Met à jour la version de cache (sw.js + ?v= dans index.html) avec un
#  timestamp passé en argument, régénère la liste LOCAL_URLS du service
#  worker à partir des <script>/<link> locaux de index.html, et incrémente
#  APP_VERSION dans app.js. Appelé par Snapshot.bat avant chaque commit.
#
#  Écriture : UTF-8 SANS BOM via [IO.File]::WriteAllText — Set-Content
#  -Encoding UTF8 ajoute un BOM sous Windows PowerShell 5.1 mais pas sous
#  PowerShell 7, ce qui faisait basculer l'encodage des fichiers d'un
#  snapshot à l'autre (diffs Git parasites).
# =====================================================================

param(
  [Parameter(Mandatory=$true)]
  [string]$Version
)

$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
function Read-Utf8($path) { return [IO.File]::ReadAllText((Resolve-Path $path).Path, [Text.Encoding]::UTF8) }
function Write-Utf8($path, $content) { [IO.File]::WriteAllText((Join-Path $PSScriptRoot $path), $content, $utf8NoBom) }

# ---- 1. index.html : ?v=... sur tous les scripts/styles locaux ----
$localAssets = @()
if (Test-Path 'index.html') {
  $html = Read-Utf8 'index.html'
  # Match src="<chemin local>.js" (avec ou sans ?v=... déjà présent).
  # Le lookahead exclut les CDN (https?: et //).
  $patternJs  = '(src="(?!https?:|//)[^"]+\.js)(\?v=[^"]*)?"'
  $patternCss = '(href="(?!https?:|//)[^"]+\.css)(\?v=[^"]*)?"'
  $new = [regex]::Replace($html, $patternJs,  '${1}?v=' + $Version + '"')
  $new = [regex]::Replace($new,  $patternCss, '${1}?v=' + $Version + '"')
  if ($new -ne $html) {
    Write-Utf8 'index.html' $new
    Write-Host "  [OK] index.html -> assets versionnes ($Version)"
  } else {
    Write-Host "  [SKIP] index.html : aucun script/style local trouve"
  }
  # Liste des assets locaux (pour LOCAL_URLS du service worker)
  foreach ($m in [regex]::Matches($new, 'href="((?!https?:|//)[^"?]+\.css)')) { $localAssets += $m.Groups[1].Value }
  foreach ($m in [regex]::Matches($new, 'src="((?!https?:|//)[^"?]+\.js)'))   { $localAssets += $m.Groups[1].Value }
}

# ---- 2. sw.js : VERSION + LOCAL_URLS régénérée ----
if (Test-Path 'sw.js') {
  $sw = Read-Utf8 'sw.js'
  $orig = $sw
  $sw = [regex]::Replace($sw, "const VERSION = '[^']*';", "const VERSION = '$Version';")
  if ($localAssets.Count -gt 0) {
    $fixed = @('./', './index.html', './manifest.json', './carnet.ico', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png')
    $all = $fixed + ($localAssets | ForEach-Object { './' + $_ })
    $list = ($all | ForEach-Object { "  '" + $_ + "'" }) -join ",`n"
    $block = "// __LOCAL_URLS_START__`nconst LOCAL_URLS = [`n$list`n];`n// __LOCAL_URLS_END__"
    $sw = [regex]::Replace($sw, '// __LOCAL_URLS_START__[\s\S]*?// __LOCAL_URLS_END__', $block.Replace('$', '$$'))
  }
  if ($sw -ne $orig) {
    Write-Utf8 'sw.js' $sw
    Write-Host "  [OK] sw.js -> VERSION = '$Version', LOCAL_URLS = $($localAssets.Count + 8) entrees"
  } else {
    Write-Host "  [SKIP] sw.js : rien a changer"
  }
}

# ---- 3. app.js : APP_VERSION incrementee a chaque snapshot ----
# Le numero affiche en bas de la sidebar passe de v1.0 a v1.1 a v1.2 etc.
# Apres v1.99 le compteur bascule sur v2.0 et ainsi de suite.
if (Test-Path 'app.js') {
  $appJs = Read-Utf8 'app.js'
  $pattern = "const APP_VERSION = 'v(\d+)\.(\d+)';"
  $appMatch = [regex]::Match($appJs, $pattern)
  if ($appMatch.Success) {
    $major = [int]$appMatch.Groups[1].Value
    $minor = [int]$appMatch.Groups[2].Value + 1
    if ($minor -ge 100) { $major += 1; $minor = 0 }
    $newVer = "const APP_VERSION = 'v$major.$minor';"
    $new = [regex]::Replace($appJs, $pattern, $newVer)
    Write-Utf8 'app.js' $new
    Write-Host "  [OK] app.js -> APP_VERSION = v$major.$minor"
  } else {
    Write-Host "  [SKIP] app.js : pattern APP_VERSION introuvable"
  }
}

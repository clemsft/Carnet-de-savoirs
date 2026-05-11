# =====================================================================
#  Carnet de Savoirs - Génération de l'icône du raccourci
#  Dessine un .ico 256x256 dans le style de l'app : fond sombre,
#  bordure orange feu subtile, ✦ centrale avec aura.
#  Appelé automatiquement par Creer-Raccourci-Bureau.bat si l'icône
#  n'existe pas encore. Peut aussi être lancé seul pour régénérer.
# =====================================================================

param(
    [string]$Output = ""
)

if (-not $Output) {
    $Output = Join-Path $PSScriptRoot "carnet.ico"
}

Add-Type -AssemblyName System.Drawing

$size = 256

# --- Création du bitmap et configuration anti-alias ---
$bmp = New-Object System.Drawing.Bitmap $size, $size
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

# --- Fond sombre uni (#0e0e1a, proche de --bg-deep de l'app) ---
$bgBrush = New-Object System.Drawing.SolidBrush(
    [System.Drawing.Color]::FromArgb(255, 14, 14, 26))
$g.FillRectangle($bgBrush, 0, 0, $size, $size)
$bgBrush.Dispose()

# --- Bordure orange feu subtile, légèrement inset ---
$borderPen = New-Object System.Drawing.Pen(
    [System.Drawing.Color]::FromArgb(120, 255, 107, 53), 3)
$g.DrawRectangle($borderPen, 6, 6, $size - 13, $size - 13)
$borderPen.Dispose()

# --- Format de texte centré pour la ✦ ---
$format = New-Object System.Drawing.StringFormat
$format.Alignment     = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center
$rectF = New-Object System.Drawing.RectangleF(0, 0, $size, $size)

# --- Aura : 8 couches translucides de tailles décroissantes ---
for ($i = 8; $i -ge 1; $i--) {
    $alpha = [int]($i * 3)
    $color = [System.Drawing.Color]::FromArgb($alpha, 255, 140, 70)
    $br    = New-Object System.Drawing.SolidBrush $color
    $f     = New-Object System.Drawing.Font(
        "Segoe UI", (170 + $i * 4),
        [System.Drawing.FontStyle]::Regular)
    $g.DrawString([char]0x2726, $f, $br, $rectF, $format)
    $br.Dispose()
    $f.Dispose()
}

# --- ✦ principale en orange feu (#ff6b35, --d-astrophysique) ---
$starBrush = New-Object System.Drawing.SolidBrush(
    [System.Drawing.Color]::FromArgb(255, 255, 107, 53))
$starFont  = New-Object System.Drawing.Font(
    "Segoe UI", 170, [System.Drawing.FontStyle]::Regular)
$g.DrawString([char]0x2726, $starFont, $starBrush, $rectF, $format)
$starBrush.Dispose()
$starFont.Dispose()

$g.Dispose()

# --- Encode le bitmap en PNG (mémoire) ---
$pngMs = New-Object System.IO.MemoryStream
$bmp.Save($pngMs, [System.Drawing.Imaging.ImageFormat]::Png)
$pngBytes = $pngMs.ToArray()
$pngMs.Dispose()
$bmp.Dispose()

# --- Construit le fichier .ico (format PNG-enveloppé, single 256x256) ---
$ms = New-Object System.IO.MemoryStream
$bw = New-Object System.IO.BinaryWriter $ms

# ICONDIR
$bw.Write([UInt16]0)              # Reserved
$bw.Write([UInt16]1)              # Type 1 = ICO
$bw.Write([UInt16]1)              # Nombre d'images

# ICONDIRENTRY
$bw.Write([Byte]0)                # Width  (0 = 256)
$bw.Write([Byte]0)                # Height (0 = 256)
$bw.Write([Byte]0)                # Couleurs palette
$bw.Write([Byte]0)                # Reserved
$bw.Write([UInt16]1)              # Plans
$bw.Write([UInt16]32)             # Bits par pixel
$bw.Write([UInt32]$pngBytes.Length)
$bw.Write([UInt32]22)             # Offset des données (6 + 16 = 22)

# Données PNG
$bw.Write($pngBytes)
$bw.Flush()

[System.IO.File]::WriteAllBytes($Output, $ms.ToArray())

$bw.Dispose()
$ms.Dispose()

Write-Output ("Icone generee : " + $Output)

# Junction this design config's .cursor into a design/video project
# Usage: .\link-to-project.ps1 -Target "D:\Startups\MyDeckProject"

param(
    [Parameter(Mandatory = $true)]
    [string]$Target
)

$ErrorActionPreference = "Stop"
$configRoot = Split-Path $PSScriptRoot -Parent
$cursorSource = Join-Path $configRoot ".cursor"
$cursorTarget = Join-Path $Target ".cursor"

if (-not (Test-Path $Target)) { Write-Error "Target not found: $Target" }
if (Test-Path $cursorTarget) {
    Rename-Item $cursorTarget "$cursorTarget.backup.$(Get-Date -Format 'yyyyMMdd-HHmmss')"
}
cmd /c mklink /J "$cursorTarget" "$cursorSource"
Write-Host "Linked $cursorTarget -> $cursorSource"
Write-Host "Copy design-systems/ or outputs/ paths as needed for your project."

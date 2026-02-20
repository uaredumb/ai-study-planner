param(
  [string]$RepoName = 'ai-study-planner-backend'
)

$backendDir = Join-Path $PSScriptRoot 'backend'

if (-not (Test-Path $backendDir)) {
  Write-Error "Backend directory '$backendDir' not found."
  exit 1
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Error "gh CLI is required to create/push the remote repo. Install and authenticate: https://cli.github.com/"
  exit 1
}

Push-Location $backendDir

if (-not (Test-Path .git)) {
  git init
  git add -A
  git commit -m 'Initial backend commit'
}

# Try to create repo; if it fails because it exists, just push
$createResult = gh repo create $RepoName --public --source=. --remote=origin --push -y 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Host "gh repo create failed or repo exists; attempting to push to origin..."
  git push -u origin HEAD:main
}

Pop-Location
Write-Host "Backend deployed to GitHub repository: $RepoName"

#!/usr/bin/env pwsh

cd "e:\FYP\project portfolio"

# Array to store fixes
$commits = @()

# Get all commits
$output = git log --reverse --format="%H|%aD"
foreach ($line in $output -split "`n") {
    if (-not [string]::IsNullOrWhiteSpace($line)) {
        $parts = $line -split "\|"
        if ($parts.Length -eq 2) {
            $commits += @{ hash = $parts[0]; date = $parts[1] }
        }
    }
}

# Rewrite each commit
foreach ($commit in $commits) {
    Write-Host "Fixing commit $($commit.hash) with date $($commit.date)..."
    git filter-branch -f --env-filter `
        "if [ `\`"$GIT_COMMIT`\`" = `\`"$($commit.hash)`\`" ]; then export GIT_COMMITTER_DATE=`\`"$($commit.date)`\`"; fi" `
        -- --all
}

Write-Host "Done! Dates have been fixed."

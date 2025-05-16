#!/bin/bash

# Script to prepare portfolio for AWS Amplify deployment

echo "Preparing portfolio for AWS Amplify deployment..."

# Ensure amplify.yml exists
if [ -f "amplify.yml" ]; then
  echo "✓ amplify.yml already exists"
else
  echo "Creating amplify.yml configuration file..."
  cat > amplify.yml << EOL
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist/public
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
EOL
  echo "✓ Created amplify.yml"
fi

# Create a .gitignore file if it doesn't exist
if [ -f ".gitignore" ]; then
  echo "✓ .gitignore already exists"
else
  echo "Creating .gitignore file..."
  cat > .gitignore << EOL
# Dependencies
/node_modules

# Build outputs
/dist

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
EOL
  echo "✓ Created .gitignore"
fi

# Verify package.json exists
if [ -f "package.json" ]; then
  echo "✓ package.json exists"
else
  echo "⚠️ package.json not found. Make sure you're in the root directory of your project."
  exit 1
fi

# Check if repository is initialized
if [ -d ".git" ]; then
  echo "✓ Git repository already initialized"
else
  echo "Initializing Git repository..."
  git init
  echo "✓ Git repository initialized"
fi

echo ""
echo "Your project is ready for AWS Amplify deployment."
echo "Next steps:"
echo "1. Create a repository on GitHub, GitLab, BitBucket, or AWS CodeCommit"
echo "2. Add your remote repository:"
echo "   git remote add origin <YOUR_REPOSITORY_URL>"
echo "3. Commit and push your changes:"
echo "   git add ."
echo "   git commit -m \"Initial commit\""
echo "   git push -u origin main"
echo ""
echo "4. Follow the instructions in AWS_AMPLIFY_GUIDE.md to set up your AWS Amplify app"
echo ""
echo "Happy coding!"
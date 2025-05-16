const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the project
console.log('Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Create a .nojekyll file to prevent GitHub Pages from ignoring files that start with underscores
const outputDir = path.resolve(__dirname, 'dist/public');
fs.writeFileSync(path.join(outputDir, '.nojekyll'), '');
console.log('Created .nojekyll file');

// Copy the deployment guide to output directory for reference
try {
  const deploymentGuide = fs.readFileSync('GITHUB_DEPLOYMENT.md', 'utf8');
  fs.writeFileSync(path.join(outputDir, 'DEPLOYMENT_GUIDE.md'), deploymentGuide);
  console.log('Copied deployment guide to output directory');
} catch (error) {
  console.warn('Could not copy deployment guide:', error.message);
}

console.log('\nFiles ready for GitHub Pages deployment!');
console.log(`Copy all the files from ${outputDir} to your GitHub repository.`);
console.log('See GITHUB_DEPLOYMENT.md for detailed instructions.');
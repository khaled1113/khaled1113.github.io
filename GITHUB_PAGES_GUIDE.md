# Deploying Your Portfolio to GitHub Pages

This guide will walk you through the steps to deploy your embedded systems engineer portfolio to `khalid1113.github.io`.

## Step 1: Build Your Portfolio

First, you need to build your portfolio to generate static files:

1. In Replit, click on the Shell tab.
2. Run the build command:
   ```
   npm run build
   ```
3. This will create the built files in the `dist/public` directory.

## Step 2: Create GitHub Repository

1. Go to GitHub and sign in to your account.
2. Create a new repository named exactly `khalid1113.github.io` (using your GitHub username).
3. Make the repository public.

## Step 3: Prepare Your Files

1. Create a `.nojekyll` file in your built files to prevent GitHub's Jekyll processing:
   ```
   touch dist/public/.nojekyll
   ```

2. Your `dist/public` folder should contain:
   - index.html
   - CSS and JavaScript files (in the assets folder)
   - .nojekyll file

## Step 4: Push to GitHub

There are two main approaches to upload your files:

### Option 1: Using Git Commands

1. Clone your GitHub repository:
   ```
   git clone https://github.com/khalid1113/khalid1113.github.io.git
   ```

2. Copy your built files to the cloned repository:
   ```
   cp -r dist/public/* khalid1113.github.io/
   ```

3. Navigate to your repository folder:
   ```
   cd khalid1113.github.io
   ```

4. Add, commit, and push your files:
   ```
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

### Option 2: Manual Upload

1. Download the built files from Replit (from the `dist/public` directory).
2. Go to your GitHub repository in a web browser.
3. Click on "Add file" > "Upload files".
4. Drag and drop all files from the `dist/public` directory.
5. Commit the changes.

## Step 5: Configure GitHub Pages

1. Go to your repository settings on GitHub.
2. Scroll down to the "GitHub Pages" section.
3. Ensure the source is set to "Deploy from a branch" and the branch is set to "main" (or "master").
4. Save the settings.

## Step 6: View Your Website

After a few minutes, your portfolio should be live at `https://khalid1113.github.io`.

## Troubleshooting

If your site has styling or resource issues:

1. Make sure all resource paths are relative, not absolute.
2. Check that the case sensitivity of filenames matches the references in your code.
3. Ensure all JavaScript and CSS files were properly included in the build.

## Additional Tips for SPA React Sites

For single-page applications like React, you might need to:

1. Add a `404.html` file that redirects to your main index.html to handle client-side routing.
2. Ensure your React router is configured properly for GitHub Pages.

---

Remember to update your portfolio content regularly to reflect your latest embedded systems and PCB design projects!
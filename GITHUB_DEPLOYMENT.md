# Deploying to GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages at `khalid1113.github.io`.

## Step 1: Build your website

1. In your Replit environment, run the following command to build your website:
   ```
   npm run build
   ```
   This will create a `dist/public` folder with your static website files.

## Step 2: Create a GitHub repository

1. Create a new repository named exactly `khalid1113.github.io` on GitHub.
   - This name is critical as it follows the GitHub Pages format for user sites.
   - Make sure the repository is public.

## Step 3: Prepare your files for GitHub Pages

1. Copy all files from the `dist/public` directory.
2. Make sure your repository has an `index.html` file at the root level.
3. If you're using a SPA (Single Page Application) like React, include a simple `.nojekyll` file in the root to tell GitHub Pages not to process your files with Jekyll.

## Step 4: Push your files to GitHub

1. Clone your repository locally:
   ```
   git clone https://github.com/khalid1113/khalid1113.github.io.git
   ```

2. Copy all the files from your build into the cloned repository.

3. Add, commit, and push your files:
   ```
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub.
2. Navigate to Settings > Pages.
3. Under "Source", select "Deploy from a branch".
4. Select the branch (main or master) and save.

## Troubleshooting

If your site isn't appearing correctly:

1. Check that all relative paths are correct. For user sites (username.github.io), the base path is '/'.
2. Verify that all image and asset URLs use relative paths that will work in the GitHub Pages environment.
3. If you see 404 errors for resources, ensure file paths match exactly (case-sensitive).
4. Remember that changes to GitHub Pages might take a few minutes to propagate.

## Using a Custom Domain (Optional)

If you want to use a custom domain instead of khalid1113.github.io:

1. Add a CNAME file to your repository with your domain name.
2. Configure your domain's DNS settings to point to GitHub Pages.
3. In your repository's Settings > Pages, add your custom domain and save.
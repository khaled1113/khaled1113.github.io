# Deploying to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages.

## Step 1: Create Your Repository

1. Go to GitHub and sign in to your account
2. Create a new repository named exactly `khalid1113.github.io`
   - This naming is critical for user GitHub Pages to work correctly
   - Make sure to use your actual GitHub username in place of 'khalid1113'
3. Make the repository public

## Step 2: Upload These Files

Upload all the files in this folder to the root of your GitHub repository:
- `index.html`
- `style.css`
- `script.js`
- `.nojekyll` (prevents Jekyll processing)
- `README.md` (optional but recommended)

You can do this by:
1. Going to your repository on GitHub
2. Clicking the "Add file" button and selecting "Upload files"
3. Dragging and dropping these files from your computer
4. Clicking "Commit changes"

## Step 3: Check GitHub Pages Settings

1. Go to your repository's "Settings" tab
2. Scroll down to the "Pages" section
3. Make sure the source is set to "Deploy from a branch"
4. Select "main" branch (or "master" if that's what you're using)
5. Make sure the folder is set to "/ (root)"
6. Click "Save"

## Step 4: Wait for Deployment

GitHub Pages will automatically build and deploy your site. This usually takes a few minutes.

## Step 5: Visit Your Site

Your site should now be available at:
`https://khalid1113.github.io/`

## Troubleshooting

If you see a 404 error, check the following:
- Confirm the repository name is exactly `username.github.io`
- Verify files are in the root of the repository, not in a subfolder
- Make sure GitHub Pages is enabled in repository settings
- Check that the branch selected in GitHub Pages settings contains your files
- Remember that GitHub Pages is case-sensitive, so filenames must match exactly

## Making Changes

To update your site:
1. Make changes to the files locally
2. Upload the updated files to GitHub, or edit them directly on GitHub
3. GitHub Pages will automatically rebuild your site with the changes
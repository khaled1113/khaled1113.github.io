# Deploying Your Portfolio to AWS Amplify

This guide will help you deploy your embedded systems engineer portfolio to AWS Amplify, which provides continuous deployment, hosting, and global content delivery.

## Prerequisites

1. An AWS account
2. Your portfolio code in a Git repository (GitHub, GitLab, BitBucket, or AWS CodeCommit)

## Step 1: Set Up Your Repository

If you haven't already, push your portfolio code to a Git repository:

1. Create a repository on your preferred Git platform
2. Initialize Git in your project (if not already done):
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [YOUR_REPOSITORY_URL]
   git push -u origin main
   ```

## Step 2: Log in to AWS Amplify Console

1. Log in to the AWS Management Console
2. Search for "Amplify" in the services search bar
3. Select "AWS Amplify"

## Step 3: Create a New Amplify App

1. In the Amplify Console, click "New app" > "Host web app"
2. Choose your Git provider (GitHub, GitLab, BitBucket, or AWS CodeCommit)
3. Authorize AWS Amplify to access your repositories
4. Select the repository containing your portfolio
5. Select the branch you want to deploy (typically "main" or "master")

## Step 4: Configure Build Settings

AWS Amplify will automatically detect that your project is using React/Vite. You'll need to adjust the build settings:

1. In the "Build settings" step, make sure the following settings are in place:
   - Build command: `npm run build`
   - Output directory: `dist/public`
   
2. You can use the provided `amplify.yml` file in your repository, or paste this configuration:

```yaml
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
```

3. Click "Next"

## Step 5: Review and Deploy

1. Review your settings
2. Click "Save and deploy"

AWS Amplify will now clone your repository, build your application, and deploy it to a global content delivery network (CDN).

## Step 6: Access Your Deployed Site

Once the deployment is complete, you can access your site at the URL provided by AWS Amplify. It will look something like:
`https://main.d1a2b3c4d5.amplifyapp.com`

## Step 7: Set Up a Custom Domain (Optional)

If you want to use a custom domain instead of the default Amplify URL:

1. In the AWS Amplify Console, select your app
2. Click on "Domain management" in the left sidebar
3. Click "Add domain"
4. Enter your domain name and click "Configure domain"
5. Follow the instructions to verify domain ownership (typically involves adding DNS records)
6. Once verified, AWS Amplify will provision an SSL certificate and set up the domain

## Step 8: Set Up Continuous Deployment

AWS Amplify automatically sets up continuous deployment from your repository. Whenever you push changes to your configured branch, Amplify will automatically build and deploy your updates.

## Additional Features

AWS Amplify offers several additional features you might find useful:

- **Preview Deployments**: Create preview environments for pull requests
- **Access Control**: Password-protect your site
- **Custom Headers**: Configure security headers, caching policies, etc.
- **Environment Variables**: Set up environment variables for your application
- **Monitoring**: View deployment history, logs, and performance metrics

## Troubleshooting

If you encounter issues during deployment:

1. Check the build logs in the AWS Amplify Console
2. Ensure your build settings are correct
3. Verify that all dependencies are properly listed in your package.json
4. Test your build process locally before deploying

---

Remember to update your portfolio content regularly to showcase your latest embedded systems and PCB design projects!
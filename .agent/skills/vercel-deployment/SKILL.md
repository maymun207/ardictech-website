---
name: vercel-deployment
description: Deploying and managing project deployments on Vercel.
---
# Vercel Deployment Skill

This skill provides instructions for deploying projects to Vercel, verifying deployments, and managing Vercel configurations.

## Prerequisites
- The project should be already linked to Vercel (indicated by a `.vercel` directory containing `project.json`).
- Minimal environment setup should be present (Vercel CLI available via `npx`).

## Deployment Workflow

### 1. Verification of Linkage
Before deploying, ensure the project is linked to a Vercel project:
- Check for the existence of `.vercel/project.json`.
- Verify `projectId` and `orgId` are present.

### 2. Triggering Deployment
To trigger a production deployment, use the following command:
```bash
npx vercel --prod --yes
```
The `--yes` flag bypasses confirmation prompts.

### 3. Verification of Deployment
After deployment, the CLI provides a production URL. Use the browser tool or `read_url_content` to verify:
- The site is reachable.
- Key elements (like the title or hero text) are correctly rendered.

## Common Troubleshooting
- **Command Not Found**: If `vercel` is not found, always use `npx vercel`.
- **Authentication**: If the deployment fails due to authentication, notify the user.
- **Environment Variables**: Ensure required environment variables are set in the Vercel dashboard or via the CLI if needed.

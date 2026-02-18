---
description: How to customize NotebookLM skill settings (browser visibility, typing speed, etc.)
---
# Customizing NotebookLM Skill Settings

Follow these steps to customize the behavior of the NotebookLM automation scripts.

## 1. Locate the Skill Directory
Navigate to the NotebookLM skill folder:
`/Users/hulyakahveci/Desktop/ArdicWEB/ardictech-website/.agent/skills/notebooklm`

## 2. Manage the .env File
The skill uses a `.env` file for configuration. If it doesn't exist, create it in the root of the skill directory.

## 3. Available Settings
Add or modify the following variables in the `.env` file:

```env
# Set to 'false' to see the browser while it works
HEADLESS=true

# Show/Hide browser by default for all commands
SHOW_BROWSER=false

# Enable human-like interactions (strongly recommended)
STEALTH_ENABLED=true

# Typing speed (Words Per Minute)
TYPING_WPM_MIN=160
TYPING_WPM_MAX=240

# Set a default notebook ID for all queries
DEFAULT_NOTEBOOK_ID=armes-presentation
```

## 4. Save and Test
Once you save the `.env` file, the changes will take effect automatically the next time you ask a question or use the slide capture script.

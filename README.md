# FEINT ENGINEERING

Foundational web application for FEINT ENGINEERING, created by Quentin Warminsky of Two Taps MMA.

The project is deliberately kept small while the product direction for Identifier Q is established. It provides a dependency-free, standards-based web shell that can be developed locally or deployed behind any static host / Node process.

## Requirements

- Node.js 20 or newer

## View it on an iPhone (free GitHub Pages deployment)

This repository includes a GitHub Actions workflow that publishes the existing `public/` site to **GitHub Pages**. GitHub Pages is the simplest free option because it deploys directly from the GitHub repository; no separate hosting account, API key, or credit card is needed.

### What you need to do once

1. Sign in to GitHub or create a free GitHub account at [github.com](https://github.com).
2. Create a new GitHub repository for this project (or use the existing one) and push this branch to it. The deployment workflow runs when changes are pushed to the `main` branch.
3. In that GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source and save the setting.
5. Push the commit containing `.github/workflows/deploy-pages.yml` to `main` (or open **Actions → Deploy website to GitHub Pages → Run workflow** and select `main`).
6. Wait for the workflow to finish successfully. GitHub shows the public URL in the workflow's deployment summary and in **Settings → Pages**. It will normally be `https://<your-github-username>.github.io/<repository-name>/`.
7. Open that URL in Safari on your iPhone. You can use Safari's **Share → Add to Home Screen** if you want a home-screen shortcut.

If GitHub asks you to authorize the workflow, authorize GitHub Actions for this repository. No other authorization is required. For free GitHub Pages hosting, keep the repository public; private-repository Pages availability depends on the GitHub plan.

The site assets use relative URLs so they work at GitHub Pages' repository URL as well as at a custom domain later. The current site design and functionality are unchanged.

## Local development

```bash
npm run dev
```

Open the local address printed by the command (by default `http://localhost:3000`).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm start` | Start the server for a production environment. |
| `npm test` | Validate JavaScript syntax and project metadata. |

## Project structure

```text
public/       Static application files served to the browser
server.mjs    Minimal Node HTTP server for local and Node-based hosting
```

No product workflows, AI capabilities, or data integrations are implemented yet.

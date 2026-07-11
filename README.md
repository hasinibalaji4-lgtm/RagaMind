# Carnatic Music, Brain Health, and Healthy Aging

The production-ready project foundation for a static educational website. Built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide React. All content pages are placeholders; no research, expert quotations, or raga content has been added.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Run quality checks with:

```bash
npm run typecheck
npm run build
npm run preview
```

## Architecture

Reusable UI lives in `src/components`, page routes in `src/pages`, site shells in `src/layouts`, navigation data in `src/data`, shared hooks in `src/hooks`, shared types in `src/types`, styles in `src/styles`, and imported media in `src/assets`.

## GitHub Pages deployment

1. Replace `REPOSITORY-NAME` in `.github/workflows/deploy.yml` with the exact repository name, preserving both slashes (example: `/brain-health-project/`). `USERNAME` does not appear in source code; it is determined automatically by the repository owner and produces `https://USERNAME.github.io/REPOSITORY-NAME/`.
2. Create a GitHub repository with that name and set its default branch to `main`.
3. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Push only when ready. The workflow type-checks, builds, uploads `dist`, and deploys through the official Pages actions.

`HashRouter` keeps routes after `/#/`, so refreshes work reliably on GitHub Pages. Vite's production base path is set by `VITE_BASE_PATH` in the workflow; local development uses `/`.

The site uses `HashRouter`, so client-side routes survive GitHub Pages refreshes. Nothing publishes or pushes automatically from the local machine.

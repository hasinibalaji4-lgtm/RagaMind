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

1. Create a GitHub repository and set its default branch to `main`.
2. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Push only when ready. The workflow derives the Vite base path from the repository name, type-checks, builds, uploads `dist`, and deploys through the official Pages actions.

`HashRouter` keeps routes after `/#/`, so client-side routes survive GitHub Pages refreshes. Vite's production base path is set automatically by the workflow; local development uses `/`. Nothing publishes or pushes automatically from the local machine.

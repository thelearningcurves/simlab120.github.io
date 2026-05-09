# SIMLAB Homepage (React + Yarn + GitHub Pages)

This repository is now a static React app powered by **Vite** and **Yarn**, ready to host on GitHub Pages.

## Quick start

```bash
yarn install
yarn dev
```

## Customize content

### 1) Update Current Work carousel
- Open `/home/runner/work/simlab120.github.io/simlab120.github.io/src/App.jsx`
- Edit the `workItems` array (image path, alt text, caption)
- Add/replace image files inside `/home/runner/work/simlab120.github.io/simlab120.github.io/public/images/`

### 2) Update People section
- In `/home/runner/work/simlab120.github.io/simlab120.github.io/src/App.jsx`, edit the `people` array
  - `name`
  - `role`
  - `avatar`
  - `socials` links
- Replace avatar images in `/home/runner/work/simlab120.github.io/simlab120.github.io/public/images/`

### 3) Update social icons
- SVG icons are stored in `/home/runner/work/simlab120.github.io/simlab120.github.io/public/images/`
- Current placeholders:
  - `linkedin.svg`
  - `link.svg`

## GitHub Pages deployment

### Option A: deploy with Yarn script
```bash
yarn deploy
```
This builds the app and publishes `dist/` to `gh-pages` branch using the `gh-pages` package.

### Option B: GitHub Actions / Pages build
- Build command: `yarn build`
- Output directory: `dist`

## Notes
- The Vite config auto-selects a GitHub Pages base path:
  - `"/"` for `*.github.io` user/org sites
  - `"/<repo-name>/"` for project pages

# Sruthi Shivaramakrishnan — Systems & Learning

A lightweight academic portfolio for GitHub Pages. No build step, framework, API keys or server required.

## Pages
- `index.html` — Home, selected research, experience, education, honors & service, contact.
- `thoughts.html` — Dedicated Thoughts & Open Problems page, with filterable research questions.
- `style.css` — Layout, typography, responsive styles.
- `script.js` — Mobile navigation, and topic filters.

## GitHub Pages setup
1. Upload **all four website files** (`index.html`, `thoughts.html`, `style.css`, and `script.js`) to the **root** of your `sruShiva.github.io` repository. This means they should appear alongside this README when viewing the repository, **not nested inside a `systems-site-v2` folder**.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, use **Deploy from a branch**, `main`, `/ (root)`.
4. The site will appear at `https://srushiva.github.io/` when deployment completes.

## Customize
- Edit the content directly in `index.html` and `thoughts.html`.
- Replace or update external GitHub / LinkedIn links where needed.
- To add a CV download, upload your PDF to the root and add a link such as `<a href="cv.pdf">CV</a>` to the navigation.
- Review project details before publishing. FastSim is described as a prototype; no unverified speedup is claimed.
- Google Fonts is loaded via `<link>` tags in each page's `<head>` (not a CSS `@import`), with system font fallbacks.
- The "↗" arrow is used only on real links. Research rows and note cards aren't linked; if you add project/repo URLs later, wrap the title in an `<a>` and restore an arrow.
- Keep the Experience list in reverse-chronological order when adding roles.

## Preview locally
Double-click `index.html` in your file manager. The relative links will work if all HTML, CSS, and JS files are in the same folder.

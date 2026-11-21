# Sruthi Shivaramakrishnan: personal site

A plain static site for GitHub Pages. No build step, framework or JavaScript.

## Files
- `index.html`: about, research, experience, education, talks and awards, contact.
- `thoughts.html`: open problems. Add each question as an `<article class="entry">` block (there is a template in a comment in the file).
- `style.css`: all styling.

## GitHub Pages setup
1. Put the files in the **root** of the `sruShiva.github.io` repository (not in a subfolder).
2. Settings, Pages, Deploy from a branch, `main`, `/ (root)`.
3. The site appears at https://srushiva.github.io/.

## Notes
- If you still have `script.js` in the repo, you can delete it. Nothing uses it anymore.
- Keep Experience in reverse-chronological order when you add roles.
- Google Fonts (DM Sans) is loaded with a `<link>` in each page's head; system fonts are the fallback.

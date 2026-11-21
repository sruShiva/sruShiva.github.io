# Systems Research Portfolio — GitHub Pages

A responsive static portfolio with a terminal-style systems monitor and interactive LLM inference performance/energy model. No build tools, frameworks, API keys, or server required.

## Launch with GitHub Pages

1. Create a public GitHub repository named `YOUR_USERNAME.github.io` (replace `YOUR_USERNAME` with your real GitHub username).
2. Upload `index.html`, `style.css`, `script.js`, and `.nojekyll` to the repository root (not inside the downloaded parent folder).
3. Commit your files to the `main` branch.
4. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
5. Your site will be available at `https://YOUR_USERNAME.github.io/` when GitHub finishes deploying.

Alternatively, upload the same files to an existing project repository and use its GitHub Pages URL.

## Personalize before publishing

- In `index.html`, replace `YOUR_EMAIL@example.com`, `YOUR_USERNAME`, and `YOUR_LINKEDIN`.
- Edit your name, interests, biography, and the selected-work placeholders.
- Replace project placeholders with genuine project titles, verified findings, links, and results. They're intentionally not represented as publications.
- Add a CV by placing `cv.pdf` at the root and linking to it (optional).

## About the LLM Systems Lab

This is an *illustrative calculator*, not a live benchmark. Definitions:

- Runtime (seconds) = generated output tokens / **aggregate output throughput** (tokens/s)
- Energy (Wh) = average system power (W) × runtime (s) / 3600
- Estimated operational emissions (g CO₂) = energy (Wh) × grid carbon intensity (g CO₂/kWh) / 1000

It assumes steady throughput/power and ignores prefill, idle, networking, and any additional cooling or infrastructure power not included in the chosen power input. Energy and emissions cannot be reliably attributed to a real model without measured hardware/system metrics and carefully defined boundaries. All presets are **synthetic example scenarios**, not estimates for any named LLM.

To publish measured results instead, collect actual power and token throughput under a documented workload, capture hardware and batch size, and report your measurement methodology.

## Local preview

Open `index.html` directly in your browser or run `python3 -m http.server 8000` in this directory, then visit `http://localhost:8000`.

## Editing

Plain HTML, CSS and JavaScript. Responsive layout and reduced-motion settings are included.

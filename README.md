# Editable professional career portfolio

A fast, mobile-friendly, static portfolio intended for GitHub Pages. No framework, package manager, hosting bill, or build step.

**Important:** All example projects, experience entries, achievements, metrics, and skills are illustrative. Replace/remove anything that does not accurately describe your record before submitting job applications.

## Quick start

1. Download the ZIP, extract it, and open the `career-portfolio` folder.
2. Open **`data.js`** in VS Code or any text editor.
3. Replace `Your Name`, email, location, GitHub and LinkedIn URLs, about/bio, skills, education, etc.
4. Replace the sample objects in `projects`, `experience` and `achievements` with **real** entries. Add more entries by copying an object and giving it a **unique `id`**.
5. Put your PDF résumé at **`assets/resume.pdf`** and replace sample images with photos/screenshots of your own. Update each object's `image` field to point to the right file (e.g. `assets/robot.jpg`). Optional `gallery` is an array of image paths.
6. Preview by double-clicking **`index.html`**. Alternatively, in VS Code use the Live Server extension or run `python3 -m http.server 8000` and visit `http://localhost:8000`.
7. Verify every link and claim, then deploy.

## GitHub Pages deployment (website upload, no terminal required)

1. Log into [GitHub](https://github.com) and click **New repository**.
2. Repository name: `YOUR_USERNAME.github.io` for a personal website at `https://YOUR_USERNAME.github.io/`; **or** choose `portfolio` for `https://YOUR_USERNAME.github.io/portfolio/`.
3. Choose **Public**, create the repository, and open it.
4. Click **Add file → Upload files**. Drag in the **contents** of the extracted `career-portfolio` folder (including `index.html`, `data.js`, `script.js`, `styles.css`, and the `assets` folder). Do **not** upload only the ZIP. Keep `index.html` at the repository root.
5. Click **Commit changes**.
6. Go to **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, **Branch: main**, folder **/(root)**, then **Save**.
7. After GitHub publishes, visit the Pages URL displayed in Settings → Pages. It can take a few minutes.
8. Put that public URL on your résumé, job applications, GitHub profile, and LinkedIn.

GitHub official reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Editing after deployment

- On GitHub open `data.js` → **pencil (Edit this file)** → modify the content → **Commit changes**. Your website updates after republishing.
- Or edit locally and upload modified files via **Add file → Upload files**.
- Add a new project by copying a project object in `data.js`, giving it a new unique `id`, and filling in the content. It creates a **card automatically**, and clicking that card opens a **detailed modal**.
- Project fields: `id`, `title`, `category`, `year`, `featured`, `image`, `imageAlt`, `teaser`, `overview`, `role`, `duration`, `stack`, `highlights`, `github`, `demo`, `gallery`.
- Experience fields: `id`, `title`, `organization`, `type`, `location`, `period`, `image`, `summary`, `details`, `highlights`, `link`.
- Achievement fields: `id`, `title`, `issuer`, `date`, `image`, `summary`, `details`, `link`.
- Clicking a card opens a detail panel with its description, technology, highlights and optional links/images. Each item can also be shared with a deep link like `#project-smart-monitor` (IDs are in `data.js`).
- Images can be JPG, PNG, SVG or WebP. Put them under `assets/`. Avoid spaces in filenames.
- **Editing happens in GitHub/data.js, not by clicking directly on the public website.** Visitors can click cards to view details but cannot edit them. This is intentional and secure for a free public portfolio.
- This is a client-side static site: no database or paid backend required.

## Customize layout

- `styles.css`: colors, fonts, spacing, card design and mobile styles. Top-level CSS variables control the main palette.
- `index.html`: website structure and section names.
- `script.js`: rendering, filtering and clickable detail views; generally no need to edit.
- `data.js`: **all main content**.
- `assets/`: screenshots, profile image if you decide to extend the design, and résumé.

## Job application checklist

- [ ] Name, accurate professional headline and working email
- [ ] GitHub/LinkedIn URLs checked
- [ ] Actual résumé PDF added (`assets/resume.pdf`)
- [ ] Remove uncompleted placeholder projects or label real work-in-progress clearly
- [ ] For each project: challenge, your role, stack, implementation, evidence, outcome
- [ ] At least 2–3 strong *real* project screenshots
- [ ] Working source/demo links for published projects
- [ ] Experience bullets include scope/results when verifiable
- [ ] Achievements have dates and issuers
- [ ] No private contact details, secrets, API keys, or sensitive data in public repo
- [ ] Check site on mobile and laptop; click every card

## Next steps to stand out

Turn each significant project into a clear case study: **problem → constraints → implementation → technical decisions → testing → results → what you learned**. Prefer verifiable impact (load time, users, accuracy, cost, events facilitated) over generic claims. Tailor the headline and first 2–3 projects to each job category.

## Files

```
career-portfolio/
├── index.html
├── styles.css
├── script.js
├── data.js                  <-- easiest content editing
├── README.md                <-- this guide
└── assets/
    ├── project-iot.svg
    ├── project-algorithm.svg
    ├── project-dashboard.svg
    ├── experience.svg
    ├── achievement.svg
    ├── favicon.svg
    └── resume.pdf           <-- YOU ADD THIS FILE
```

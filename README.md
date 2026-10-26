# Abir Islam Mishad: Portfolio Website

A fast, free, no-build portfolio. All content lives in **`data.js`**. Edit that one file and the whole site updates.

```
portfolio/
├── index.html     page structure (rarely edited)
├── style.css      colors and layout
├── data.js        ✏️ YOUR CONTENT: edit this
├── script.js      builds the page from data.js
├── resume.pdf     ➕ add your resume here
└── assets/        ➕ optional: photo and project images
```

## 1. Personalize it (10 minutes)
1. Open `data.js` in any text editor (VS Code, Notepad).
2. Fill in `links.github` and `links.linkedin`.
3. Add `resume.pdf` to this folder (keep the filename, or change `resumeFile`).
4. Optional: put a photo at `assets/me.jpg` and set `photo: "assets/me.jpg"`.
5. For each project, add a GitHub `repo` link, a `demo` link, and an `image` (a photo or screenshot, ideally 1200×700).
6. To add a project, experience or award, copy an existing `{ ... },` block, paste it below, and change the text.
7. Preview: double-click `index.html`. It opens in your browser.

## 2. Publish on GitHub Pages (free)
**Option A: website only (easiest)**
1. Create a GitHub account at github.com if you don't have one.
2. Click **+ → New repository**.
3. Name it **`yourusername.github.io`** (replace with your exact GitHub username) for the URL `https://yourusername.github.io`. Any other name also works, with the URL ending in `/repo-name`.
4. Set it to **Public**, then click **Create repository**.
5. Click **uploading an existing file**, drag in **everything inside the `portfolio` folder** (not the folder itself), and click **Commit changes**.
6. Go to **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, and click **Save**.
7. Wait 1–2 minutes and refresh. Your live link appears at the top of the Pages screen.

**Option B: using Git on your computer**
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```
Then do step 6 above.

## 3. Updating later
Edit `data.js`, then on GitHub open the file → pencil icon → **Commit changes**. The site refreshes in about a minute. (Or `git add . && git commit -m "update" && git push`.)

## 4. Use it in job applications
- Put the live link in your resume header, email signature and LinkedIn **Website** field.
- Add a GitHub profile README that links to the site.
- Pin your best 2–4 repositories on your GitHub profile.
- In emails: *"Here is my portfolio: https://yourusername.github.io"*.

## Tips to get noticed
- Add a **short README with photos** to each project repo (problem → what you built → result).
- Add **numbers** where you can (accuracy of the detection model, number of nodes in the mesh, students supported per session).
- Keep the top three achievements marked `featured: true`.
- Test the link on your phone before you send it.

## Troubleshooting
- **404 after publishing:** make sure `index.html` is at the top level of the repo, not inside a subfolder.
- **Page is blank:** a comma or quote in `data.js` is probably missing. Press F12 in the browser to see the error line.
- **Images not showing:** check the file name and capitalization match exactly.

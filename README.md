# Bartolomeo Zisa Portfolio Website

A highly polished, responsive, and academic-themed portfolio built for **Bartolomeo Zisa**, Master's Student in Artificial Intelligence at the University of Pisa and hobbyist game developer.

Live at https://BartolomeoZisa.github.io/

## Key Features
- **Modern Responsive Design**: Academic-inspired warm Slate and Teal accents matching the requested aesthetic.
- **Interactive Links Grid**: Beautiful styled components with Lucide icons for GitHub, LinkedIn, Itch.io, Instagram, Newgrounds, and Email.
- **Academic Coordinates & Projects**: Detailed timeline tracking B.Sc. and M.Sc. milestones, core interests, and research directions.
- **GitHub Projects Showcase**: Filterable and searchable grid demonstrating custom C++ game engines, AI reinforcement learning agents, and TypeScript tooling.
- **Indie Games & Asset Packs**: Filterable showcase featuring custom games (*Marta*, *Inverted Merge*, *Programming Escape*, *Treant Killer*, *Brainrot Destruction*) and pixel art asset packs directly linking to Itch.io and Newgrounds.
- **Peer-Reviewed Publications**: Deep-dive card showcasing the co-authored SANER 2026 conference paper, complete with an interactive copyable BibTeX citation drawer.

---

To run locally

nvm install 22
nvm use 22

npm install
npm run dev
http://localhost:3000



## 🛠️ GitHub Pages Deployment Guide

This project is fully ready to be built and deployed directly to GitHub Pages. Follow these simple steps:

### Method 1: Using the Automated `gh-pages` Package
1. **Install the deployment package**:
   ```bash
   npm install --save-dev gh-pages
   ```
2. **Add the Homepage Field**:
   Open `package.json` and add the following top-level property (replace with your actual GitHub username):
   ```json
   "homepage": "https://BartolomeoZisa.github.io/"
   ```
3. **Configure Build Scripts**:
   Add deployment tasks to the `"scripts"` object in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. **Publish**:
   Run the deployment command:
   ```bash
   npm run deploy
   ```

### Method 2: GitHub Actions (Recommended)
You can set up a GitHub Action to rebuild and deploy automatically whenever you push code:
1. Create a file at `.github/workflows/deploy.yml` with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   permissions:
     contents: write

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout Code
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install Dependencies
           run: npm ci

         - name: Build Project
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
             branch: gh-pages
   ```
2. Push your changes to GitHub, and the action will deploy the site to `https://BartolomeoZisa.github.io/` automatically!

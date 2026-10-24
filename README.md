# Joshua Ortiz — Developer Portfolio

Modern, high-performance portfolio website for **Joshua Ortiz**, WordPress & Shopify Developer and IT Technical Support Specialist.

## Tech Stack
- **Framework**: React.js (React 18/19, Create React App architecture)
- **Styling**: Tailwind CSS + Custom Dark/Light Glassmorphism Aesthetics
- **Typography**: Inter, Plus Jakarta Sans, JetBrains Mono
- **Contact Form**: Web3Forms API integration (`7c1882c4-f28f-4db5-8349-c5f815aa27d0`)
- **Hosting**: GitHub Pages (`https://jshortiz.github.io`)

## Quick Start (Local Development)

1. Clone or extract this repository into your working directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to GitHub Pages

To build and deploy directly to your GitHub Pages branch:
```bash
npm run deploy
```

## How to Customize

- **Featured Projects**: Open `src/App.js` and edit the `projects` array around line 125.
  - The WordPress project is configured under `id: 'wp'`.
  - The Shopify project is configured under `id: 'shopify'`.
  - Drop replacement screenshots into `public/wp-showcase.jpg` and `public/shopify-showcase.jpg`.
- **Contact Form**: The contact form is wired to Web3Forms using Access Key `7c1882c4-f28f-4db5-8349-c5f815aa27d0` with clean JSON serialization. Messages are forwarded directly to `jsh.ortizxc@gmail.com`.

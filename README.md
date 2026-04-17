# Cellular Alchemy Rx

A React web application built with Vite, React Router, and Bootstrap. Currently hosted on GitHub Pages as a temporary home while a permanent hosting solution is determined.

**Live Site:** https://bkatchmar.github.io/CellularAlchemy.React.Web/

---

## Tech Stack

- [Vite](https://vite.dev/) — build tool and dev server
- [React](https://react.dev/) — UI framework
- [React Router](https://reactrouter.com/) — client-side routing
- [Bootstrap](https://getbootstrap.com/) — CSS framework
- [gh-pages](https://www.npmjs.com/package/gh-pages) — GitHub Pages deployment

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git for Windows](https://git-scm.com/download/win) (Windows users)

### Install Dependencies

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

App will be available at `http://localhost:5173`

---

## NPM Installs

```bash
# Bootstrap
npm install bootstrap

# React Router
npm install react-router-dom

# GitHub Pages deploy tool
npm install gh-pages --save-dev
```

---

## Project Structure

```
cellular-alchemy/
├── public/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Biochemistry.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Key Configuration

### `vite.config.js`
Base path is set to match the GitHub repository name for correct asset resolution on GitHub Pages:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CellularAlchemy.React.Web/',
})
```

### `main.jsx`
`HashRouter` is used instead of `BrowserRouter` for compatibility with GitHub Pages, which does not support client-side routing out of the box:

```jsx
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
```

### `main.jsx` — Bootstrap CSS Import
```jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```

---

## Deployment

This project deploys to GitHub Pages via the `gh-pages` package.

```bash
npm run deploy
```

This runs `vite build` first (predeploy), then pushes the `dist` folder to the `gh-pages` branch.

In your GitHub repo settings, ensure **Pages** is configured as:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` → `/ (root)`

---

## Notes

- This site is a temporary home while a permanent hosting solution is determined.
- The project is a rebuild of the original Cellular Alchemy WordPress site.
- URLs use hash-based routing e.g. `/#/biochemistry` due to GitHub Pages limitations.

---

&copy; 2026 Cellular Alchemy Rx

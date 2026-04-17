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
│   ├── components/
│   │   ├── Header.jsx
│   │   └── HeroVideo.jsx
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
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
```

### Bootstrap JS
Required for the mobile offcanvas navbar. Added to the bottom of `<body>` in `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

## Components

### `Header.jsx`
Located in `src/components/Header.jsx`. Contains:
- Bootstrap navbar with `navbar-expand-md` — horizontal on desktop, hamburger on mobile
- Logo centered above nav links, with two sizes for mobile (`103px`) and desktop (`127px`) via Bootstrap responsive classes
- Mobile offcanvas drawer that slides in from the right via Bootstrap's `offcanvas-end`
- `OffcanvasLink` — a custom functional component that handles closing the offcanvas and navigating via React Router's `useNavigate`
- `NavLink` used instead of `Link` for active state detection, with `({ isActive })` className function to handle `HashRouter` compatibility
- Active nav item shows white text and a red `3px` underline indicator matching the live site

### `HeroVideo.jsx`
Located in `src/components/HeroVideo.jsx`. Contains:
- Full width autoplaying, looping, muted background video
- Dark overlay (`black` at `0.4` opacity) over the video
- Poster/fallback image for when video cannot load
- `900px` tall, sits at the top of every page
- Header floats over the video via `position: absolute` on the header and `position: relative` on the wrapper div in `App.jsx`
- Video and image assets currently hotlinked from the WordPress site — move to `public/` when WordPress is decommissioned

---

## Routing

Routes are defined in `App.jsx` using React Router. Pages live in `src/pages/`.

| Path | Component |
|---|---|
| `/` | `Home.jsx` |
| `/biochemistry` | `Biochemistry.jsx` |
| `*` | 404 Not Found |

Additional pages to be added: Biophysics, Nutrition, Practitioners, Consumers, Network, Contact.

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
- Logo image is currently hotlinked from the WordPress site. When that goes away, download and store in `public/` and update the `src` accordingly.
- Font used throughout is **Montserrat** — ensure it is loaded via Google Fonts in `index.html`.
- Bootstrap's active color is overridden in `App.css` with increased specificity to match brand colors.

---

&copy; 2026 Cellular Alchemy Rx
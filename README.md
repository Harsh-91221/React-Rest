# Namaste Food 🍽️

A Swiggy-clone food delivery web application built with React, Redux Toolkit, and Firebase. Browse restaurants, view menus, search for food, and manage a shopping cart — all powered by live data from the Swiggy public API.

[![Deploy to GitHub Pages](https://github.com/Harsh-91221/React-Rest/actions/workflows/deploy.yml/badge.svg)](https://github.com/Harsh-91221/React-Rest/actions/workflows/deploy.yml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## Live Demo

- **Main Site:** <https://Harsh-91221.github.io/React-Rest>
- **Project Overview Walkthrough:** <https://Harsh-91221.github.io/React-Rest/Docs/walkthrough-react-rest-overview.html>
- **Database Schema Walkthrough:** <https://Harsh-91221.github.io/React-Rest/Docs/walkthrough-react-rest-database-schema.html>

---

## Features

- **Restaurant Listings** — Fetch and display restaurants from the Swiggy API with shimmer loading skeletons
- **Search & Filter** — Search restaurants by name and filter by cuisine type
- **Restaurant Menus** — Detailed menu pages with category toggles and item cards
- **Shopping Cart** — Add/remove items, update quantities, and view total price via Redux state
- **Responsive Design** — Clean UI built with Tailwind CSS and custom styles
- **Route-based Navigation** — Client-side routing using `react-router-dom` v6
- **Online/Offline Detection** — Real-time connection status indicator with fallback UI
- **Firebase Integration** — Authentication and data persistence via Firebase

---

## Tech Stack

| Layer          | Technology                           |
|----------------|--------------------------------------|
| UI Framework   | React 18                             |
| State Mgmt     | Redux Toolkit + react-redux          |
| Routing        | react-router-dom v6                  |
| Styling        | Tailwind CSS + Custom CSS            |
| Build Tool     | Parcel 2                             |
| Icons          | FontAwesome 6                        |
| Backend        | Firebase (Auth + Firestore)          |
| Testing        | Jest + React Testing Library         |
| CI/CD          | GitHub Actions → GitHub Pages        |

---

## Project Structure

```
React-Rest/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions CI/CD pipeline
├── Docs/                       # Static documentation & walkthroughs
│   ├── walkthrough-react-rest-overview.html
│   └── walkthrough-react-rest-database-schema.html
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── App.js                  # Root component & router config
│   ├── components/
│   │   ├── Header.js           # Logo + nav links + cart badge
│   │   ├── Body.js             # Search + restaurant grid
│   │   ├── RestaurantCard.js   # Individual restaurant card
│   │   ├── RestaurantMenu.js   # Menu page with categories
│   │   ├── RestaurantCategory.js
│   │   ├── ItemList.js         # Menu items list
│   │   ├── Cart.js             # Cart page
│   │   ├── Shimmer.js          # Loading skeleton
│   │   ├── About.js, Contact.js, Error.js
│   │   ├── User.js, UserClass.js, UserOffline.js
│   │   └── sum.js              # Utility (used in tests)
│   ├── utils/
│   │   ├── appStore.js         # Redux store setup
│   │   ├── cartSlice.js        # Cart state slice
│   │   ├── constants.js        # API URLs & config
│   │   ├── firebase.js         # Firebase initialization
│   │   ├── useResData.js       # Custom hook — fetch restaurants
│   │   ├── useRestuarantMenu.js# Custom hook — fetch menu
│   │   ├── useOnlineStatus.js  # Custom hook — network check
│   │   └── userContext.js      # User context provider
│   └── images/                 # Static assets
├── package.json
├── README.md
└── firebase.json
```

---

## Available Scripts

```bash
# Install dependencies
npm install

# Start development server (Parcel)
npm start

# Build production bundle (outputs to dist/)
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

---

## GitHub Pages Deployment

### Prerequisites

1. Create a GitHub repository named `React-Rest` under your `Harsh-91221` account (or update `homepage` in `package.json` to match).
2. Push the repository to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Harsh-91221/React-Rest.git
   git branch -M main
   git push -u origin main
   ```

### Automatic Deployment (CI/CD)

The `.github/workflows/deploy.yml` workflow automatically builds and deploys to GitHub Pages on every push to `main`:

1. Installs dependencies with `npm ci`
2. Runs `npm run build` (Parcel → `dist/`, then copies `Docs/` into `dist/Docs/`)
3. Deploys the `dist/` folder to GitHub Pages via `actions/deploy-pages`

### Manual Deployment

```bash
npm run deploy
```

This runs `parcel build` followed by `gh-pages -d dist`, pushing the build output to the `gh-pages` branch.

### Docs Accessibility

The `postbuild` script in `package.json` automatically copies all files from the `Docs/` folder into `dist/Docs/` after every Parcel build. This means the documentation HTML files are served alongside the main app at:

- `https://<username>.github.io/React-Rest/Docs/walkthrough-react-rest-overview.html`
- `https://<username>.github.io/React-Rest/Docs/walkthrough-react-rest-database-schema.html`

No separate deployment step is required for the Docs.

### GitHub Pages Settings

After the first deploy, enable GitHub Pages in your repository:

1. Go to **Settings → Pages**
2. Set **Source** to `GitHub Actions`
3. Ensure the branch is set to `main` with `/github-pages` folder (if using manual `gh-pages` branch method instead)

---

## Architecture

### Data Flow

```
Swiggy API
    │
    ▼
useResData() / useRestuarantMenu()  (custom hooks)
    │
    ▼
React Components (Body, RestaurantMenu, etc.)
    │
    ▼
Redux Store (cart state via @reduxjs/toolkit)
    │
    ▼
Cart Component → UI Update
```

### Key Hooks

| Hook                  | Purpose                                     |
|-----------------------|---------------------------------------------|
| `useResData()`        | Fetches and caches the restaurant list      |
| `useRestuarantMenu()` | Fetches and caches a single restaurant menu |
| `useOnlineStatus()`   | Tracks network connectivity in real time    |

---

## License

ISC

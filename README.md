# Noir Table 🍽️

A premium food delivery app where you can browse restaurants, view menus, and order food online. Built with React and modern web technologies.

**Live Demo:** https://Harsh-91221.github.io/React-Rest

---

## ✨ Features

- **Browse Restaurants** — See a list of restaurants with ratings, delivery time, and costs
- **Search & Filter** — Find restaurants by name or category
- **View Menus** — Click on any restaurant to see its full menu
- **Add to Cart** — Add items to your cart and manage quantities
- **Dark/Light Mode** — Toggle between themes with smooth animation
- **Login System** — Sign up / Sign in with a premium login page
- **Responsive Design** — Works on mobile, tablet, and desktop

---

## 🔗 Documentation & Walkthroughs

### Visual Guides
| Resource | Link |
|----------|------|
| **Project Overview** | [Walkthrough](https://Harsh-91221.github.io/React-Rest/Docs/walkthrough-react-rest-overview.html) |
| **Database Schema** | [Database Schema](https://Harsh-91221.github.io/React-Rest/Docs/walkthrough-react-rest-database-schema.html) |

### Design System
A complete design system with color palette, typography, and components is available in the `design-system/Noir-Table/` folder.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm start
```
Then open http://localhost:1234 in your browser

### 3. Build for Production
```bash
npm run build
```

---

## 🛠️ Tech Stack

| What | Technology |
|------|------------|
| UI Framework | React 18 |
| Styling | Tailwind CSS + Custom CSS |
| State Management | Redux Toolkit |
| Routing | react-router-dom v6 |
| Icons | FontAwesome 6 |
| Build Tool | Parcel 2 |
| API | FoodFire (Swiggy data proxy) |

---

## 📁 Project Structure

```
React-Rest/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js              # Main app component
│   ├── components/
│   │   ├── Header.js       # Navigation bar
│   │   ├── Body.js         # Restaurant listing page
│   │   ├── RestaurantCard.js # Individual restaurant card
│   │   ├── RestaurantMenu.js # Menu page for a restaurant
│   │   ├── Cart.js         # Shopping cart page
│   │   ├── Login.js        # Premium login/signup page
│   │   └── ...
│   └── utils/
│       ├── constants.js    # API URLs and config
│       └── useResData.js   # Hook to fetch restaurants
├── Docs/                   # Documentation HTML files
│   ├── walkthrough-react-rest-overview.html
│   └── walkthrough-react-rest-database-schema.html
├── design-system/          # Design system & brand assets
│   └── Noir-Table/
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## 🌐 Deployment

This app is deployed on **GitHub Pages** and automatically updates when you push to the `main` branch.

**To deploy manually:**
```bash
npm run deploy
```

---

## 📝 License

ISC

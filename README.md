# Pizzavala Restaurant Website

Fresh, production-ready, mobile-first website for **PIZZAVALA** (Pizza • Live Puff • Indian Street Food) built with modern React.js.

## Tech Stack
- **Framework**: React.js 18 with JSX
- **Build Tool**: Webpack 5 + Babel (strictly **no Vite**, **no TypeScript**)
- **Styling**: Pure CSS with responsive design system and CSS variables (no Tailwind)
- **Theme**: Light Theme with Pizzavala Orange (#f47b20), charcoal typography, and warm off-white tones
- **Dependencies**: Minimal footprint (`react`, `react-dom`, and standard Webpack/Babel toolchain)

---

## Project Structure
```
pizzavala/
├── public/
│   ├── favicon.png
│   ├── index.html
│   └── images/
│       ├── logo/
│       │   ├── pizzavala-logo.png
│       │   ├── pizzavala-logo-light.png
│       │   └── pizzavala-icon.png
│       ├── banner/
│       │   └── hero-pizza.jpg
│       ├── menu/
│       │   ├── pizzas.jpg
│       │   ├── live-puff.jpg
│       │   ├── street-food.jpg
│       │   ├── beverages.jpg
│       │   ├── menu-classics-1.jpg
│       │   ├── menu-classics-2.jpg
│       │   ├── menu-specials.jpg
│       │   └── menu-streetfood-puff.jpg
│       └── gallery/
│           ├── restaurant-1.jpg
│           ├── pizza-1.jpg
│           ├── live-puff-1.jpg
│           ├── street-food-1.jpg
│           ├── pizza-2.jpg
│           └── beverages-1.jpg
│
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Light header, logo, nav, Order Online CTA, mobile hamburger
│   │   ├── Hero.jsx         # Non-overlay hero, left text/buttons, right high-res pizza
│   │   ├── Menu.jsx         # 4 visual categories + interactive Menu modal/sheet viewer
│   │   ├── MenuModal.jsx    # Accessible modal viewer for authentic menu sheets
│   │   ├── About.jsx        # Story copy + 176 Station Rd Harrow storefront photo
│   │   ├── Gallery.jsx      # Responsive 2/3-col grid + lightbox modal
│   │   ├── Contact.jsx      # Address, phone, email, hours, validated contact form & map
│   │   └── Footer.jsx       # Logo, tagline, quick links, contact & copyright
│   │
│   ├── App.jsx              # Main App root composing all sections
│   ├── main.jsx             # React 18 createRoot entrypoint
│   └── styles/
│       └── global.css       # Design tokens, typography, resets, responsive layout
│
├── webpack.config.js        # Minimal Webpack 5 + Babel configuration
├── babel.config.json        # Babel configuration for React JSX
├── package.json             # Minimal dependencies
├── .gitignore               # node_modules, dist, build, .env
└── README.md                # Full documentation
```

---

## Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```
   Opens local development server at `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Generates an optimized, minified production build in the `dist/` directory ready for deployment on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## Features & Highlights

- **Authentic Assets**: Real Pizzavala branding, Harrow storefront photo, and genuine high-resolution menu sheets.
- **Strictly No Image Overlays**: Food imagery is bright, vibrant, and natural.
- **Mobile-First Responsive**: Precision-tested across 320px, 375px, 390px, 430px, 768px, 1024px, and 1440px+ screens.
- **Interactive Full Menu Viewer**: Modal viewer allowing customers to inspect all authentic menu items, pizzas, puffs, and street foods with tab navigation.
- **Validated Contact Form**: Real-time validation for name, email format, phone, and message, with instant success feedback.
- **Order Online Integration**: Direct links to official ordering system at `https://pizzavalaharrow.co.uk/`.
- **SEO & Accessibility**: Semantic HTML5 hierarchy, accessible ARIA attributes, meta tags, and Open Graph previews.

---

## License
© Pizzavala. All rights reserved.

# WDD 231 - Web Frontend Development I

Course portal and project repository for **WDD 231: Web Frontend Development I** at Brigham Young University–Idaho. This repository hosts course learning activities, the BYU-Idaho Software Development degree audit tracker, and the Iloilo Chamber of Commerce subproject.

---

## 🚀 Projects Overview

### 1. Root Course Portal & Degree Tracker

- **Landing Page (`/`):** Dynamic course syllabus viewer, interactive Philippine City Explorer, and live OpenWeather integration.
- **Degree Tracker (`/degree-tracker.html`):** Interactive audit dashboard mapping completed, in-progress, and planned blocks for the BYU-Idaho Software Development program. Features credit tallies, prerequisite mapping, and dynamic course filtering.

### 2. Iloilo Chamber of Commerce (`/chamber/`)

A responsive municipal portal designed for local enterprises and tourism in Iloilo City, Philippines.

- **Home (`/chamber/index.html`):** Hero section, weather forecast, community spotlights, and call-to-action cards.
- **Directory (`/chamber/directory.html`):** Business directory fetching member records from JSON, with toggleable Grid and List views and industry category filtering.
- **Discover (`/chamber/discover.html`):** Tourism showcase of local landmarks (Miag-ao Church, Molo Church, Festive Walk, Esplanade), featuring responsive image optimization and accessible native details accordions.
- **Join (`/chamber/join.html`):** Membership tier application form with structured levels (Non-Profit, Bronze, Silver, Gold).
- **Thanks (`/chamber/thanks.html`):** Confirmation landing page confirming submitted application metadata.

---

## 🛠️ Tech Stack & Build Tooling

- **Bundler & Dev Server:** [Vite](https://vitejs.dev/) (Multi-Page Application setup)
- **Build Plugins:** `vite-plugin-static-copy` (preserving nested data files and image assets)
- **Frontend:** Vanilla Semantic HTML5, Modern CSS (Grid, Flexbox, Custom Properties), and ES Modules
- **Data & APIs:** Dynamic asynchronous JSON parsing (`fetch`, async/await), OpenWeatherMap API, LocalStorage state management
- **Deployment:** [Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/)

---

## 📁 Repository Structure

```text
wdd231/
├── chamber/                   # Iloilo Chamber of Commerce subproject
│   ├── data/                  # Member datasets (members.json)
│   ├── images/                # Chamber-specific media & business logos
│   ├── scripts/               # Chamber DOM manipulation & fetch modules
│   ├── styles/                # Responsive styles (grid, list, small/large breakpoints)
│   ├── directory.html
│   ├── discover.html
│   ├── index.html
│   ├── join.html
│   └── thanks.html
├── data/                      # Course and city datasets (courses.json, cities.json)
├── images/                    # Root portal assets & city gallery media
├── scripts/                   # ES module scripts (weather, city gallery, course filter)
│   └── tracker/               # Degree tracker application scripts
├── styles/                    # Normalize and root layout styles
├── degree-tracker.html        # Interactive degree progress dashboard
├── index.html                 # Course portal entry point
├── package.json               # Scripts and build dependencies
├── vite.config.js             # Vite MPA configuration & asset routing
└── .gitignore                 # Excludes dist/, node_modules/, and cache
```

---

## 💻 Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jamesphillipdeguzman/wdd231.git
   cd wdd231
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

### Production Build & Preview

Compile the project to static assets:

```bash
npm run build
```

Test the production build locally:

```bash
npm run preview
```

The preview server will run at `http://localhost:4173`.

---

## 👤 Author

- **James Phillip De Guzman**
- Brigham Young University–Idaho
- WDD 231: Web Frontend Development I

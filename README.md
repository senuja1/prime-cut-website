# The Prime Cut | Premium Wood-Fired Steakhouse

An exquisite, highly interactive single-page restaurant web application built with **React** and **Vite**, featuring a luxury dark-themed visual design, custom-designed section layouts, a high-fidelity reservation system, and a unique **interactive chef's knife navigation bar**.

---

## Key Features

### 1. Interactive Knife Navigation
* **Engraved Overlay Mapping:** Clickable, invisible hotspots mapped directly over the engraved section names on a high-resolution chef's knife image.
* **Fluid Positioning Coordinate System:** Custom percentage-based width and placement mapping that adjusts fluidly across screens.
* **Accent Indicators:** Sleek fire-orange underline transition animations (`var(--accent-fire)`) marking the active section indicator.

### 2. Scroll-Spy Integration
* **Real-time Navigation Syncing:** The active hotspot indicator automatically updates as the page is scrolled, matching the user's focus section.
* **Smooth Offset Scrolling:** Custom-calculated scroll offsets prevent layout headers from clipping the top of active sections during quick jumps.

### 3. Signature Culinary Showcases
* **Interactive Cut Menu:** Curated menu grid showcasing Signature Cuts, Starters/Sides, and Wines with filter controls.
* **Culinary Masterclass Guide:** Step-by-step cooking guide featuring reverse-searing, hearth-searing, basting (arrosé), and resting principles.
* **Events & Tastings Showcase:** Detailed highlights for Sommelier's Wine Dinner, Chef's Table Experience, and Obsidian Lounge bookings.

### 4. High-Fidelity Booking Engine
* **Guest & Seating Options:** Interactive reservation modal supporting custom party sizes, date/time scheduling, and specific seating preferences (Main Dining, Wood-Fire Hearth, Bar Lounge).
* **Automated Confirmation:** Generates a randomized confirmation code (`PRIME-XXXXXX`) and presents a success summary upon submit.

---

## 🛠️ Technology Stack

* **Frontend Engine:** [React 18](https://react.dev/)
* **Build System & Dev Server:** [Vite 6](https://vite.dev/)
* **Styling:** Custom Vanilla CSS Design System with CSS variables for luxury typography transitions and dark-theme colors.
* **Typography:** Premium serif and clean sans-serif combinations loaded from Google Fonts.
* **Icons:** [FontAwesome 6](https://fontawesome.com/)

---

## Project Structure

```text
├── assets/                  # High-quality visual assets (Steaks, Dry-aging, Chef, Events)
│   ├── chef_about.png
│   ├── dry_age.png
│   ├── events.png
│   ├── hero_steak.png
│   ├── knife_nav.png        # Navigation knife background graphic
│   ├── logo.png             # Prime Cut emblem
│   └── steak_recipe.png
├── src/
│   ├── App.jsx              # Main React component, scroll-spy logic, Header, and Modals
│   ├── main.jsx             # React DOM root hydration
│   └── pageContent.js       # Semantic HTML sections content string
├── index.html               # Main entry HTML document (metadata, stylesheets, scripts)
├── style.css                # Global styles (reset, variables, layouts, animations)
├── package.json             # Core dependency management & script commands
└── README.md                # Project documentation
```

---

## Getting Started

Follow these instructions to set up the project locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 2. Installation
Clone the repository and install all dependencies:
```bash
# Navigate to the project directory
cd website

# Install dependencies
npm install
```

### 3. Local Development
Start the Vite local development server:
```bash
npm run dev
```
Open [http://127.0.0.1:5174/](http://127.0.0.1:5174/) or the address printed in the console.

### 4. Build for Production
Create an optimized production bundle inside the `dist` folder:
```bash
npm run build
```

---

## Navigation Customization

The knife navigation hotspots are mapped absolute to the `.knife-img-wrap` container. The hotspot locations in `src/App.jsx` are calculated as:

$$\text{Hotspot Position} = (\text{Engraving Position on Knife} \times 1.143) - 10.6\%$$

To fine-tune hotspot widths or shifting:
1. Open `src/App.jsx`.
2. Edit the percentage value in `left` and `width` properties inside the `navItems` array:
   ```javascript
   const navItems = [
     { id: 'nav-logo', label: 'Home', href: '#home', left: '5.5%', width: '9.0%', brand: true },
     { id: 'nav-menu', label: 'Menu', href: '#menu', left: '17.5%', width: '8.5%' },
     ...
   ];
   ```
3. Underline widths can be customized in `style.css` under the `.knife-hotspot.active::after` selector.

---

## 📄 License
This project is open-source and available under the MIT License.

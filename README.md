# 🟦 Shapes Grid App

A Nuxt 3 + TailwindCSS interactive filtering grid with shape & color filtering, simple authentication, and full test coverage.

This project renders a dynamic grid of items that can be filtered instantly by both shape and color.

## ✨ Project Overview

| Feature | Details |
| :--- | :--- |
| **Shapes** | 5 types: `oval`, `round`, `triangle`, `square`, `rectangle` |
| **Colors** | 6 shades: `red`, `blue`, `green`, `yellow`, `lightblue`, `gray` |
| **Filtering** | Fully dynamic multi-select logic (AND condition) |
| **Authentication** | Simple login using hardcoded credentials and Nuxt `useCookie()` |
| **Testing** | Comprehensive unit tests with **Vitest** & **Vue Testing Library** |
| **Framework** | Nuxt 3 & TailwindCSS |

<br/>

## 📸 Demo Screenshot



*(Replace this placeholder with a direct link or path to your own screenshot in GitHub)*

---

## 🚀 Key Features

### 🎚️ Advanced Filtering Logic

The filter system is designed for maximum interactivity and user control:

* **All Selected by Default:** Both shapes and colors start with all options active.
* **Multi-Select:** Users can select any combination of shapes and colors.
* **Toggle Rule:**
    * Clicking an option when "All" is active selects **only** that option.
    * Deselecting the *last* selected filter automatically **resets** the list to "All".

### 🏷️ Smart Dynamic Grid Titles

The main grid title updates in real-time based on the user's active filters, following 7 specific rules (e.g., "All red items:", "Red oval items:").

### 🎨 Visual Representation

Every shape is drawn directly using optimized **Tailwind utility classes** and pure CSS:

* **Circles/Ovals:** Achieved with `border-radius: 50%`.
* **Squares/Rectangles:** Standard `width` and `height` classes.
* **Triangles:** Pure CSS trickery using border properties.
* **Colors:** Rendered using a consistent design token system defined in Tailwind.

### 🔐 Simple Authentication

A minimal login system is implemented for access control.

| Field | Value |
| :--- | :--- |
| **Email** | `demo@shapes.com` |
| **Password** | `password123` |

Authentication state is handled via cookies (`useCookie()`) in `/composables/useAuth.ts`.

---

## 🧪 Fully Tested

The project includes comprehensive unit tests to ensure stability and deterministic results.

| Tested Area | Focus | Tools Used |
| :--- | :--- | :--- |
| **Filter Logic** | Initial state, toggle rules, reset-to-all behavior, combined filtering results. | Vitest, Vue Testing Library |
| **Grid Title Logic** | Ensures all 7 title rules are correctly applied based on active filter counts. | Vitest |
| **Composables** | `useAuth.ts` and `useFilters.ts` core behavior. | Vitest |

### Running Tests

```bash
# Run all tests once
pnpm run test

# Run tests in watch mode for development
pnpm run test:watch
```
```bash
📂 Project Structure
shapes-grid-app/
│
├── components/
│   ├── filters/
│   │   ├── ShapeFilterGroup.vue
│   │   └── ColorFilterGroup.vue
│   ├── grid/
│   │   └── ShapeCard.vue
│   └── ShapeGrid.vue
│
├── composables/
│   ├── useFilters.ts
│   └── useAuth.ts
│
├── data/
│   └── item.ts
│
├── pages/
│   ├── login.vue
│   └── index.vue
│
├── utils/
│   └── gridTitle.ts
│
├── tests/
│   ├── gridTitle.spec.ts
│   └── useFilters.spec.ts
│
├── public/
│   └── screenshot.png
│
├── nuxt.config.ts
├── tailwind.config.js
└── README.md
```

🛠️ Installation & Setup
1. Clone the repo
git clone https://github.com/yourname/shapes-grid-app.git
cd shapes-grid-app

2. Install dependencies
pnpm install

3. Run the development server
npm run dev


Visit:

http://localhost:3000

🔐 Login Credentials

To access the shapes grid:

email: demo@shapes.com  
password: password123


Auth logic is inside:

/composables/useAuth.ts

🧪 Running Tests

This project uses:

Vitest for unit testing

Vue Testing Library for component interactions

happy-dom for DOM environment

@testing-library/jest-dom for matchers

Run all tests
pnpm run test

Run tests in watch mode
pnpm run test:watch

Test Coverage (optional)

If you want coverage:

vitest --coverage

🧪 What Is Being Tested?
✔ utils/gridTitle.ts

Ensures all 7 title rules work:

All items

Multiple items

All red items

All oval items

Multiple red items

Multiple oval items

Red oval items

✔ useFilters.ts

Tests:

Initial state (all selected)

Clicking filters from “All”

Multi-select behaviour

Deselecting the last item → resets to All

Combined shape+color filtering

Filtered results match expected counts

🎨 TailwindCSS Setup

Tailwind is added manually (recommended for Nuxt 3 stability):

assets/css/tailwind.css

tailwind.config.js

postcss.config.cjs

Imported globally via:

// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
});

## 📘 Title Logic Summary (7 Rules)

| Rule | Condition                                                | Output                 |
|------|-----------------------------------------------------------|------------------------|
| 1    | All colors & all shapes                                   | **All items:**         |
| 2    | All colors + multi shapes OR all shapes + multi colors    | **Multiple items:**    |
| 3    | All shapes + one color                                    | **All red items:**     |
| 4    | All colors + one shape                                    | **All oval items:**    |
| 5    | Multi shapes + one color                                  | **Multiple red items:**|
| 6    | Multi colors + one shape                                  | **Multiple oval items:**|
| 7    | 1 color + 1 shape                                         | **Red oval items:**    |


## 🧩 Filter Logic Summary

### Toggle Rule Logic

| Case                         | Behaviour                       |
|------------------------------|----------------------------------|
| All selected → Click one     | Only that one becomes selected   |
| Multi selected → Click one   | Deselect it                      |
| Only one selected → Click it | Reset to all                    |
| Any state → Click new option | Add to selected list             |

**This applies to both shapes and colors.**


🧱 Shapes Rendering

Each shape is rendered visually via Tailwind + CSS:

round: full circle

oval: wide circle

square: equal edges

rectangle: wide box

triangle: pure CSS triangle

All 6 colors supported.


📄 License

MIT License © 2025 Victor Obije# shapes-grid-app

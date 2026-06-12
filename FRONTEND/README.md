# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

















src/
│
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   ├── banners/
│   │   ├── products/
│   │   └── categories/
│   └── icons/
│
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.css
│   │
│   ├── TopBar/
│   │   ├── TopBar.tsx
│   │   └── TopBar.css
│   │
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   │
│   ├── Sidebar/
│   │   ├── Sidebar.tsx
│   │   └── Sidebar.css
│   │
│   ├── HeroSection/
│   │   ├── HeroSection.tsx
│   │   └── HeroSection.css
│   │
│   ├── FeatureSection/
│   │   ├── FeatureSection.tsx
│   │   └── FeatureSection.css
│   │
│   ├── ProductCard/
│   │   ├── ProductCard.tsx
│   │   └── ProductCard.css
│   │
│   ├── ProductSection/
│   │   ├── ProductSection.tsx
│   │   └── ProductSection.css
│   │
│   ├── PromoBanner/
│   │   ├── PromoBanner.tsx
│   │   └── PromoBanner.css
│   │
│   ├── CategorySection/
│   │   ├── CategorySection.tsx
│   │   └── CategorySection.css
│   │
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   │
│   └── MobileMenu/
│       ├── MobileMenu.tsx
│       └── MobileMenu.css
│
├── pages/
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.css
│   │
│   ├── Products/
│   │   ├── Products.tsx
│   │   └── Products.css
│   │
│   ├── ProductDetails/
│   │   ├── ProductDetails.tsx
│   │   └── ProductDetails.css
│
├── layouts/
│   ├── MainLayout.tsx
│   └── MainLayout.css
│
├── data/
│   ├── categories.ts
│   ├── products.ts
│   └── banners.ts
│
├── styles/
│   ├── global.css
│   ├── variables.css
│   ├── reset.css
│   └── responsive.css
│
├── types/
│   ├── product.ts
│   ├── category.ts
│   └── banner.ts
│
├── utils/
│   ├── helpers.ts
│   └── constants.ts
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts












http://localhost:5000/api/categories
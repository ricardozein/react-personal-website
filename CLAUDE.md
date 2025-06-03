# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server (runs on http://localhost:3000)
yarn dev

# Build for production (outputs to build/ directory)
yarn build

# Preview production build
yarn preview

# Run tests
yarn test

# Run linting
yarn lint
```

## Architecture Overview

This is a React 18 personal website built with Vite. The application uses React Router v6 for client-side routing and employs a hybrid styling approach with both SCSS and Emotion CSS-in-JS.

### Build System

- **Vite**: Modern build tool replacing Create React App
- **React 18.3.1**: Latest React version with automatic JSX runtime
- **Node 22.x**: Required for Netlify deployment (configured in netlify.toml)

### Component Structure

- **Website.jsx**: Root component that sets up routing, Helmet provider, and loads Raleway font via WebFontLoader
- **Pages** (`/src/pages/`): Route-level components
  - Home-page.jsx: Contains Hero section and About Me content
  - About-page.jsx, Contact-page.jsx: Additional pages (routes configured but navigation not fully implemented)
- **Components** (`/src/components/`): Reusable UI components
  - Header.jsx: Top navigation bar
  - Hero.jsx: Hero section with background image and responsive design
  - Nav.jsx: Navigation component (has commented menu items)

### Routing

The app uses react-router-dom v6 with three routes:
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page

### Styling Approach

The project uses two styling methods:
1. **SCSS**: Main styles in `/src/assets/css/Website.scss`
2. **Emotion**: CSS-in-JS for component-specific styles (configured with `@emotion/react`)

Bootstrap v5 is installed but minimally used.

### Deployment

- **Netlify**: Configured via `netlify.toml`
- Build command: `yarn build`
- Publish directory: `build/`
- Node version: 22.x
- SPA redirects configured for client-side routing

## Important Notes

- **File Extensions**: All React components use `.jsx` extension
- **JSX Transform**: Uses React 18's automatic runtime (no need for React imports in JSX files)
- **Emotion Setup**: Vite is configured with `jsxImportSource: '@emotion/react'` for CSS-in-JS
- **Navigation**: The Nav component has menu items commented out - uncomment to enable full navigation
- **Service Worker**: Removed (was part of Create React App)
- **Test File**: App.test.js references Website component
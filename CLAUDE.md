# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production (outputs to build/ directory)
npm run build

# Preview production build
npm run preview
```

## Architecture Overview

This is a Vue 3 personal website built with Vite. The application is a single-page application with smooth scrolling navigation.

### Build System

- **Vite 5**: Modern build tool for fast development
- **Vue 3.4+**: Composition API and modern Vue features
- **Node 22.x**: Required for Netlify deployment (configured in netlify.toml)

### Component Structure

- **App.vue**: Root component containing all sections
  - Navigation: Fixed header with smooth scroll links
  - Hero: Professional introduction with gradient background and portrait
  - About: Personal story and professional details
  - Expertise: Core competencies grid
  - Experience: Career timeline
  - Personal: Beyond code interests
  - Contact: Professional contact information

### Styling Approach

The project uses custom CSS with a modern design system:
- **Main styles**: `/src/style.css`
- **Design tokens**: CSS custom properties (variables) for colors, spacing, and typography
- **Typography**: Inter (body) + JetBrains Mono (code)
- **Color palette**: Professional blues (#2c5aa0) with neutral grays
- **Hero background**: Layered gradients with geometric grid pattern

### Deployment

- **Netlify**: Configured via `netlify.toml`
- Build command: `npm run build`
- Publish directory: `build/`
- Node version: 22.x
- SPA redirects configured for client-side routing

## Important Notes

- **File Extensions**: Vue components use `.vue` extension
- **Package Manager**: Uses npm (not yarn)
- **Smooth Scrolling**: Navigation uses anchor links with smooth scroll behavior
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Performance**: Optimized fonts via Google Fonts preconnect

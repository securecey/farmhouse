# Serenity Farmhouse Website

A modern, immersive farmhouse website built with React and TypeScript, designed to showcase and drive bookings for luxury farm getaway destinations.

## Features

- **Cinematic Video Background** - Immersive hero section with custom video
- **Premium Design System** - Earthy colors with olive greens, terracotta, and warm creams
- **Responsive Design** - Mobile-first approach with floating CTAs
- **Interactive Components** - Gallery lightbox, testimonials slider, booking forms
- **WhatsApp Integration** - Direct customer communication
- **Smooth Animations** - Scroll-triggered reveals and parallax effects

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS with custom farmhouse theme
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Build**: Vite with ESBuild

## Deployment

### GitHub Pages Deployment

This project is optimized for GitHub Pages deployment with automated CI/CD.

1. **Push to GitHub**: Push your code to the `main` branch
2. **Enable GitHub Pages**: Go to repository Settings > Pages > Source: GitHub Actions
3. **Automatic Deployment**: The GitHub Action will automatically build and deploy

### Manual Build for GitHub Pages

```bash
npx vite build --config vite.config.github.ts
```

The built files will be in the `dist` directory, ready for static hosting.

## Development

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

## Project Structure

```
├── client/src/          # Frontend React application
├── server/              # Express backend (not used in GitHub Pages)
├── shared/              # Shared TypeScript schemas
├── attached_assets/     # Video and image assets
└── .github/workflows/   # GitHub Actions for deployment
```

## Assets

- Custom hero video (`hero-video.webm`) for immersive background
- High-quality images from Unsplash for facility showcases
- Google Fonts: Playfair Display (serif) and Poppins (sans-serif)

## Configuration

The website automatically detects the deployment environment and adjusts accordingly:
- Full-stack features for Replit development
- Static build optimization for GitHub Pages

## License

MIT License - Feel free to use this for your own farmhouse or hospitality website projects.
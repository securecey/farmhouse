# Overview

This is a modern farmhouse website application designed to showcase and drive bookings for "Serenity Farmhouse" - a luxury farm getaway destination. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed to provide an immersive, conversion-optimized experience that combines nature's tranquility with premium amenities.

The website features a sophisticated design system with earthy colors (olive greens, terracotta, warm creams), smooth animations, and interactive elements to showcase the property's unique offerings including private pools, organic farm access, event spaces, and luxury accommodations.

**Latest Update (Aug 7, 2025)**: 
- ✅ Added custom video background to hero section 
- ✅ Configured GitHub Pages deployment with automated CI/CD pipeline
- ✅ Fixed header transparency issue - now displays solid white background
- ✅ Implemented comprehensive PWA features with offline support and app installation

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with custom farmhouse theme using CSS variables for consistent branding
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui styling
- **State Management**: TanStack Query (React Query) for server state management
- **Typography**: Custom font stack using Playfair Display (serif) and Poppins (sans-serif) from Google Fonts
- **Icons**: Font Awesome for comprehensive icon coverage
- **Responsive Design**: Mobile-first approach with dedicated mobile interactions and floating CTAs

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESNext modules
- **Development**: Hot module replacement and development server integration via Vite middleware
- **Build**: ESBuild for production bundling with external package handling
- **Storage**: Modular storage interface with in-memory implementation and extensibility for database integration

## Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Database**: PostgreSQL via Neon serverless with connection pooling
- **Migrations**: Drizzle Kit for schema management and migrations
- **Session Storage**: PostgreSQL-backed session store using connect-pg-simple
- **Schema**: Shared schema definitions between frontend and backend with Zod validation

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL store for persistence
- **Validation**: Zod schemas for request/response validation with Drizzle integration
- **User Model**: Basic user entity with username/password fields and UUID primary keys
- **Security**: CORS handling and secure session configuration

## External Dependencies
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Deployment Platform**: Dual deployment support - Replit for development and GitHub Pages for production
- **Font Services**: Google Fonts API for Playfair Display and Poppins
- **Icon Library**: Font Awesome CDN for comprehensive iconography
- **Image Assets**: Unsplash for high-quality placeholder imagery
- **Video Assets**: Custom hero video (hero-video.webm) for immersive background
- **Communication**: WhatsApp Business API integration for customer inquiries
- **Development Tools**: Replit-specific plugins for development, GitHub Actions for CI/CD
- **PWA Features**: Service Worker for offline caching, Web App Manifest for installation, Background sync for offline form submissions

## Deployment Configuration
- **GitHub Pages**: Automated deployment via GitHub Actions workflow
- **Static Build**: Optimized Vite configuration for static site generation
- **Asset Optimization**: Manual chunks for vendor and UI libraries for better loading performance
- **Build Command**: `npx vite build --config vite.config.github.ts`
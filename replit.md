# Overview

This is a full-stack web application featuring an interactive astrology/zodiac experience with a celestial-themed interface. The application allows users to select zodiac signs from an animated wheel and view generated horoscopes. It's built as a modern React SPA with Express backend, featuring 3D graphics, animations, and immersive celestial visuals.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the main UI framework
- **Vite** as the build tool and development server with hot module replacement
- **Framer Motion** for smooth animations and page transitions
- **React Three Fiber** ecosystem (@react-three/fiber, @react-three/drei, @react-three/postprocessing) for 3D graphics and celestial effects
- **Radix UI** components with **Tailwind CSS** for consistent, accessible styling
- **Zustand** for lightweight state management (game state, audio controls)
- **TanStack Query** for server state management and API caching

## Component Structure
- Modular component architecture with shared UI components in `/components/ui/`
- Custom game/astrology components like `ZodiacWheel`, `HoroscopeDisplay`, `CelestialBackground`
- Responsive design with mobile-first approach using Tailwind breakpoints

## Backend Architecture  
- **Express.js** server with TypeScript
- Modular route registration system with centralized error handling
- Development-optimized setup with Vite middleware integration
- Structured storage interface with in-memory implementation (MemStorage class)
- Request/response logging with performance monitoring

## Data Layer
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- Database schema defined in shared directory for type safety across frontend/backend
- Zod integration for runtime validation and type inference
- Migration system using Drizzle Kit

## Build & Development
- **ESM modules** throughout the application
- Shared TypeScript configuration with path aliases (`@/` for client, `@shared/` for shared code)
- Production build pipeline: Vite for frontend, esbuild for backend bundling
- Asset handling for 3D models, shaders, and audio files

## Styling System
- **Tailwind CSS** with custom design tokens and CSS variables
- Dark mode support with class-based theme switching  
- Custom CSS for celestial animations and zodiac-specific effects
- Responsive typography and spacing scales

# External Dependencies

## Database
- **PostgreSQL** via Neon Database (@neondatabase/serverless)
- Connection managed through DATABASE_URL environment variable

## UI Component Library
- **Radix UI** primitives for accessible, unstyled components
- Comprehensive component coverage (dialogs, dropdowns, forms, etc.)

## Animation & Graphics
- **Framer Motion** for React animations and gestures
- **React Three Fiber** ecosystem for WebGL/Three.js integration
- **GLSL shader** support via vite-plugin-glsl

## Fonts & Typography
- **Inter font** via @fontsource/inter for consistent typography

## Utilities
- **class-variance-authority** and **clsx** for conditional CSS class management
- **date-fns** for date manipulation and formatting
- **cmdk** for command palette/search functionality

## Development Tools
- **tsx** for TypeScript execution in development
- **@replit/vite-plugin-runtime-error-modal** for enhanced error display
- **connect-pg-simple** for PostgreSQL session store integration
# Overview

This is a React-based landing page application for selling a digital parenting product combo called "Combo Noites Felizes" (Happy Nights Combo). The product consists of a screen time guide, 10 classic children's stories in PDF format, and narrated audio files to help parents reduce their children's screen time and create healthy bedtime routines. The application is built as a full-stack web application with a modern React frontend and Express.js backend, designed to be a conversion-focused sales page.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming and a Portuguese-Brazilian color palette
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Forms**: React Hook Form with Zod validation through Hookform resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: PostgreSQL session store using connect-pg-simple
- **Development**: TSX for TypeScript execution in development mode
- **Build Process**: ESBuild for production bundling with external package handling

## Database Design
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Schema Management**: Drizzle migrations in dedicated migrations folder
- **Current Schema**: Users table with UUID primary keys, username, and password fields
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation for development

## Authentication & Authorization
- **Session-based Authentication**: Using Express sessions with PostgreSQL store
- **Password Storage**: Prepared for hashed password storage (implementation pending)
- **User Management**: Basic user CRUD operations through storage interface

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migration and schema management tool

### Frontend Libraries
- **UI Framework**: Radix UI component primitives for accessibility
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image/content carousels
- **Utilities**: clsx and class-variance-authority for conditional styling

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development debugging
- **Code Quality**: TypeScript strict mode with comprehensive type checking

### Payment Integration
- Payment processing system integration is planned but not yet implemented in the current codebase

### Analytics & Tracking
- Conversion tracking and analytics integration points are prepared but not yet connected to specific services
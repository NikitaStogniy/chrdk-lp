# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 landing page for "Чердак в кармане" (Chrdk in your pocket), built with React 18, TypeScript, and Tailwind CSS. The application appears to be a Russian-language landing page for an organization/storage app.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm start build

# Start production server
npm start

# Run linting
npm run lint
```

The development server runs on http://localhost:3000.

## Architecture

### App Router Structure

The project uses Next.js App Router with the following structure:

- `app/page.tsx` - Main landing page with sections: Menu, Heading, Features, TryOwn
- `app/layout.tsx` - Root layout with Inter font and basic metadata
- `app/help/[page]/page.tsx` - Dynamic help pages with sidebar navigation
- `app/lib/` - Shared utilities (routes, types)
- `app/components/` - Reusable components
- `app/sections/` - Page sections for the main landing page

### Key Components

**Menu Component** (`app/components/Menu.tsx`):

- Responsive navigation with hamburger menu for mobile
- Uses framer-motion for animations and hamburger-react for mobile toggle
- Routes defined in `app/lib/routes.ts`

**Help System**:

- Dynamic routing for help pages: `/help/[page]`
- Sidebar navigation with `HelpControls` component
- Content rendering with `HelpContent` component
- Supports page types: faq, contacts, policy, terms

### Configuration

- **TypeScript**: Strict mode enabled with Next.js plugin
- **Tailwind CSS**: Standard configuration with custom gradient extensions
- **Next.js Config**: Custom page extensions and redirect from `/help` to `/help/faq`
- **Path Aliases**: `@/*` maps to root directory

### Dependencies

**UI/Animation**: framer-motion, hamburger-react, react-hook-form, react-toastify
**Content**: @mdx-js/loader, @mdx-js/react, react-markdown
**Utils**: react-use

### Internationalization Note

The application is in Russian language. All content, routes, and metadata use Russian text. The main brand name "chrk." is used consistently throughout.

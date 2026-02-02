# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EmberWave is a portfolio website for a software development and consulting company. Built with Next.js 15 (App Router), React 19-RC, TypeScript, and Tailwind CSS with DaisyUI components.

## Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**App Router Structure:**
- `app/` - Next.js pages using App Router (page.tsx files define routes)
- `app/layout.tsx` - Root layout with Chipp AI chatbot integration
- `components/` - Reusable React components (Navbar, Header, VisionMission)
- `types/` - Custom TypeScript type definitions for third-party libraries
- `public/images/` - Static image assets

**Routes:**
- `/` - Home page with video hero and vision/mission section
- `/about` - Founder info, company story, tech stack
- `/services` - Service offerings with icon cards
- `/clients` - Testimonials and project showcase

## Styling

**Tailwind Theme (emberwave):**
- Primary: `#f9a53f` (orange)
- Primary Focus: `#c77826`
- Secondary: `#292929` (dark background)
- Accent: `#057786` (blue-green)

**Fonts:**
- Base: "Kanit" (sans-serif)
- Headings: "Bai Jamjuree" (sans-serif)

## Key Dependencies

- **UI:** @headlessui/react, @heroicons/react, daisyui, react-icons
- **Animation:** aos (Animate on Scroll)
- **Video:** next-videos

## Third-Party Integrations

- **Chipp Chatbot:** AI chat widget loaded in layout.tsx
- **Cal.com:** Calendar booking links throughout the site

## Path Aliases

Use `@/*` for imports from the project root (configured in tsconfig.json).

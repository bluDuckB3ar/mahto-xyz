# AI Coding Agent Instructions for mahto-xyz

## Project Overview
**mahto-xyz** is a personal portfolio website built with **Next.js 14** and a custom cyberpunk "duck" theme. It features a blog engine powered by Contentlayer for MDX content management, custom Tailwind styling, and a minimalist dark UI with cyan/purple accent colors.

## Architecture

### Core Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom `duckBlue`, `duckPurple`, `duckYellow` palette
- **Content**: Contentlayer + next-mdx-remote (for `.mdx` blog posts in `src/content/blog/`)
- **UI Components**: Custom React components + Lucide React icons, react-icons
- **Forms**: Formspree integration (@formspree/react) for contact/support pages
- **Routing**: File-based routing with route groups: `(blogs)`, `(pages)`, `(error)`

### Key Directory Structure
- **`src/app/(blogs)/`** - Blog listing and individual post routes with MDX rendering
- **`src/app/(pages)/`** - Static pages (about, contact, support, rustdesk)
- **`src/components/mdx/`** - MDX component customizations (headings, callouts, cards)
- **`src/components/dodad/`** - Reusable UI primitives (Button with box-shadow effects)
- **`src/content/blog/`** - Source `.mdx` blog post files (frontmatter: title, description, published)

### Color Theme & Design System
Use custom Tailwind colors defined in `tailwind.config.ts`:
- **Primary**: `duckBlue` (#31c1fd), `duckBlue2` (#d3eef9)
- **Accent**: `duckPurple` (#cc66d6), `duckYellow` (#fbc450)
- **Neutral**: `duckBlack`, `duckGray`, `duckWhite` variants
- **Highlight**: `duckRed` (#f25f5c), `duckGreen` (#00b159)
- All text defaults to `text-duckBlue2` on `bg-background` (#000000)

## Development Workflow

### Commands
- **`yarn dev`** - Start dev server (Next.js hot reload)
- **`yarn build`** - Production build (includes Contentlayer compilation)
- **`yarn start`** - Run production server
- **`yarn lint`** - ESLint check (Next.js config)

### Contentlayer Content Pipeline
1. `.mdx` files in `src/content/blog/` are automatically scanned
2. Contentlayer compiles them to `./.contentlayer/generated/` (path alias: `contentlayer/generated`)
3. Files must include frontmatter: `title`, optional `description`, `published` (default: true)
4. Computed slug fields automatically generated: `slug` and `slugAsParams`
5. Plugins: Rehype (autolink headings, pretty code, slug), Remark (GFM)

## Critical Patterns & Conventions

### MDX Component System
- Import MDX renderer: `import { Mdx } from '@/components/mdx/mdx-comp'`
- Pass compiled MDX code: `<Mdx code={doc.body.code} />`
- Customizable heading styles (h1-h5) with `duckBlue` color and scroll-margin
- Predefined components: `<Callout>`, `<MdxCard>` for content blocks
- Example: Blog page uses `allPages` from `contentlayer/generated` to iterate all posts

### Button Component Pattern
- Located: `src/components/dodad/Button.tsx`
- Features: CSS box-shadow effects (active state translation), duckBlue border, transparent background
- Usage: Wrap with Next.js `<Link>` for navigation
- Example: Home page links styled with `w-full p-4 text-left text-4xl border-duckBlue`

### Routing with Route Groups
- Organize pages by feature: `(blogs)`, `(pages)`, `(error)` don't appear in URL structure
- Each group has independent `layout.tsx` for isolated styling/context
- Home page at `src/app/page.tsx` outside groups

### Imports & Path Aliases
- `@/*` maps to `src/*` (configured in `tsconfig.json`)
- Always use absolute imports: `import { Mdx } from '@/components/mdx/mdx-comp'`
- Content import: `import { allPages } from 'contentlayer/generated'`

### Form Integration
- Contact/support pages use Formspree: `@formspree/react` (see `src/app/(pages)/contact/page.tsx`)
- Handle form submissions server-side via Formspree endpoint

## Common Tasks

**Adding a Blog Post**
1. Create `.mdx` file in `src/content/blog/` with frontmatter (title, description, published)
2. Use Rehype/Remark plugins: auto-slugs, syntax highlighting, GFM tables
3. Reference custom MDX components: `<Callout>`, `<MdxCard>`
4. Rebuild or restart dev server (Contentlayer auto-compiles)

**Adding a Page**
1. Create folder under `src/app/(pages)/` with `page.tsx` and optional `layout.tsx`
2. Use custom Button component for navigation
3. Apply theme colors from Tailwind palette

**Styling Components**
- Prefer Tailwind utilities + custom color names (`text-duckBlue`, `bg-background`)
- Box-shadow effects use duckYellow: `[box-shadow:5px_5px_rgb(236_215_60)]`
- Font family custom: `Doto` (configured in Tailwind theme)

## Environment & Configuration
- **TypeScript**: Strict mode enabled, ESModule resolution
- **Linting**: Next.js ESLint config (`.eslintrc.json`)
- **Build Output**: `.next/` and `.contentlayer/` (auto-generated, don't commit)
- **Environment Variables**: Managed via `env.mjs` (@t3-oss/env-nextjs)

## Notes for AI Agents
- Always use `"use client"` directive when accessing browser APIs (animations, scroll, clicks)
- Prefer Contentlayer/MDX over hardcoded content for blog posts
- Maintain cyberpunk duck theme consistency: dark backgrounds, neon cyan/purple accents
- When modifying MDX components, test rendering with sample posts
- Formspree endpoints require form submission handling (check for validation/success states)

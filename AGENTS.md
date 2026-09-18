<!-- BEGIN:gitcatalyst-agent-rules -->

# GitCatalyst AI Agent Rules

## Project Vision

GitCatalyst is a modern GitHub analytics platform.

The long-term goal is to become a complete developer dashboard for GitHub with:

- GitHub profile analytics
- Repository analytics
- Contribution insights
- Language statistics
- Commit analytics
- Repository comparison
- Developer trends
- Custom README card generator
- Exportable widgets
- Shareable analytics pages

When implementing features, prefer scalable solutions over one-off implementations.

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Recharts
- Lucide React
- React Icons (brand icons only)

---

## Architecture

Prefer this flow:

```
GitHub API
        ↓
Route Handlers / Server Actions
        ↓
Caching Layer
        ↓
Transformation Layer
        ↓
Reusable Hooks
        ↓
UI Components
```

Business logic should never live inside UI components.

---

## Data Fetching

Prefer:

- Server Components
- Route Handlers
- Server Actions where appropriate

Avoid fetching directly from GitHub inside client components unless explicitly required.

---

## Caching

GitHub has rate limits.

Always think about caching.

Preferred order:

1. Next.js fetch cache
2. revalidate
3. unstable_cache
4. React cache()
5. Redis (future)

Avoid unnecessary API requests.

If multiple pages use the same data, reuse cached results.

---

## Performance

Always optimize for:

- minimal bundle size
- fewer client components
- fewer API requests
- reusable fetchers
- memoization when appropriate

Do not introduce unnecessary dependencies.

---

## Components

Before creating a component:

- search for an existing implementation
- reuse existing UI
- avoid duplication

Reusable UI belongs in:

```
components/ui
```

Feature components belong in:

```
components/landing
components/dashboard
components/analytics
components/widgets
components/readme
components/shared
```

---

## README Card System

GitCatalyst will support generating custom README cards.

Cards should be:

- configurable
- themeable
- reusable
- exportable as SVG
- exportable as PNG
- embeddable in GitHub README files

Avoid hardcoding layouts.

Build reusable card primitives.

Future cards may include:

- GitHub Stats
- Contribution Streak
- Languages
- Activity Graph
- Top Repositories
- Recent Activity
- Achievement Cards
- Visitor Counter
- Coding Time
- Custom Profile Banner

Design the system to support adding new card types easily.

---

## Charts

Use Recharts.

Charts should:

- support dark mode
- support light mode
- use theme colors
- be responsive
- avoid excessive decoration

---

## Theme

Every component must support:

- Light
- Dark
- System

Never hardcode colors.

Prefer theme tokens.

---

## Styling

The UI should resemble modern SaaS products such as:

- GitHub
- Linear
- Vercel

Prefer:

- subtle borders
- clean spacing
- restrained gradients
- minimal shadows

Avoid:

- heavy glassmorphism
- neon glow
- excessive animations

---

## Icons

Prefer:

Lucide React

Use React Icons only for brand icons.

---

## Code Style

- Use TypeScript.
- Avoid `any`.
- Prefer named exports.
- Keep components focused.
- Keep files small.
- Prefer composition.

Only use `"use client"` when necessary.

---

## Editing Code

When modifying code:

- preserve architecture
- preserve existing conventions
- avoid unrelated refactors
- modify only what is required

Do not rewrite working code without a reason.

---

## Future Features

Keep future extensibility in mind.

Planned modules include:

- authentication
- dashboard
- analytics
- widgets
- README cards
- export system
- settings
- themes
- public profiles
- comparisons
- AI insights

Avoid designs that make future expansion difficult.

---

## Goal

Every contribution should improve GitCatalyst without sacrificing consistency, performance, or maintainability.

<!-- END:gitcatalyst-agent-rules -->
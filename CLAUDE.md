# boilerplate-nextjs-all-options

Full-stack Next.js 16 boilerplate with authentication (NextAuth v5), type-safe API (tRPC), database (Prisma + PostgreSQL), and comprehensive testing.

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── api/
│   │   ├── auth/[...nextauth]/ # NextAuth routes
│   │   └── trpc/[trpc]/      # tRPC endpoint
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx              # Homepage
│   └── globals.css           # Tailwind CSS
├── lib/
│   ├── auth.ts               # NextAuth configuration
│   ├── db.ts                 # Prisma client singleton
│   └── utils.ts              # Utility functions (cn)
├── trpc/
│   ├── init.ts               # tRPC context & router setup
│   ├── routers/_app.ts       # API procedures
│   ├── client.tsx            # Client provider
│   ├── server.tsx            # Server-side caller
│   └── query-client.ts       # React Query config
├── types/                    # TypeScript type definitions
├── env.ts                    # Environment validation (Zod)
└── generated/                # Prisma generated client

prisma/
└── schema.prisma             # Database schema

__tests__/                    # Unit tests (Vitest)
tests/                        # E2E tests (Playwright)
```

## Organization Rules

**Keep code organized and modularized:**
- API procedures → `src/trpc/routers/`, one router per domain
- Components → `src/components/`, one component per file
- Utilities → `src/lib/`, grouped by functionality
- Types → `src/types/` or co-located with usage
- Unit tests → `__tests__/`, mirroring src/ structure
- E2E tests → `tests/`, one spec per feature

**Modularity principles:**
- Single responsibility per file
- Clear, descriptive file names
- Group related functionality together
- Avoid monolithic files

## Code Quality - Zero Tolerance

After editing ANY file, run:

```bash
bun run lint && bun run type-check
```

Fix ALL errors/warnings before continuing.

## Testing

After code changes, run tests:

```bash
bun run test:run          # Unit tests
bun run test:e2e          # E2E tests (requires dev server)
```

## Database

After schema changes:

```bash
bun db:generate           # Regenerate Prisma client
bun db:push               # Push to database
```

## Dev Server

```bash
bun dev                   # Start development server
```

If changes require server restart (env vars, next.config.ts):
1. Restart server
2. Check terminal for errors
3. Fix ALL warnings before continuing

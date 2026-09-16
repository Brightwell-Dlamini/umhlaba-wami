# Umhlaba Wami

Commercial property management & vacant space marketplace for shopping centres and commercial properties in Eswatini.

**Manage Better. Respond Faster. Know More.**

## Structure

```
umhlaba-wami/
├── apps/
│   └── web/                          # Next.js 15 app
├── packages/
│   ├── domain/                       # Pure business logic
│   ├── db/                           # Generated types + client
│   ├── ui/                           # Design system (Drop 2)
│   └── config/                       # Shared eslint/ts/tailwind
├── supabase/
│   ├── migrations/
│   ├── functions/
│   └── config.toml
├── .github/workflows/
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Getting Started

```bash
pnpm install
pnpm dev
```

## Stack

- **Apps**: Next.js 15 (App Router)
- **Monorepo**: pnpm + Turborepo
- **Backend**: Supabase (Postgres, Auth, RLS, Edge Functions)
- **Domain**: Pure TypeScript business logic packages

## License

Private — All rights reserved.

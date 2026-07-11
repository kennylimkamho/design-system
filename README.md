# Design System

A personal, brand-generic design system. Built as a public documentation site
that visualizes foundations, tokens, components, patterns, and content
guidelines — and explains the design principles behind them.

> **Phase 1 (current):** the documentation site itself — read-only, deployed on Vercel.
> **Phase 2 (planned):** CLI + MCP tooling around the same system.

## Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router) + MDX
- **Deploy:** [Vercel](https://vercel.com) (preview per PR, production on `main`)
- **Repo:** pnpm workspaces + [Turborepo](https://turborepo.com) monorepo
- **License:** MIT

## Structure

```
apps/
  docs/        # The deployed documentation site
packages/
  react/       # Interactive component library
  tokens/      # Design tokens (DTCG JSON → CSS / TS)
content/       # All MDX docs copy lives here (editable without touching code)
guidelines/    # Accessibility, voice & tone (referenced from content/)
assets/        # Illustrations, logos, fonts
```

## Local development

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). All content edits go through MDX
files in `content/` — no app code changes required for copy updates.

## License

MIT. See [LICENSE](./LICENSE).
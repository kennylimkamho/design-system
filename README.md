# Kenny’s Product Design Systems

**How product judgment becomes consistent software.**

A public design portfolio and working documentation site covering foundations, tokens, components, patterns and content guidelines. Explore selected **ChatDaddy and BobWork** design decisions alongside the reusable system.

[Open the design portfolio](https://kennylimkamho.github.io/design-system/work/) · [Read the product case studies](content/case-studies/README.md) · [Explore Kenny’s work](https://github.com/kennylimkamho)

The brand case studies explain the problem, the design response and the implementation boundary. Their fictional interactive specimens illustrate the rules without publishing internal customer data. The existing generic component system remains the foundation; the brand examples do not imply a complete production migration.

> **Phase 1 (current):** the documentation site itself — documentation and interactive specimens, published on GitHub Pages.
> **Phase 2 (planned):** CLI + MCP tooling around the same system.

## Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router) + MDX
- **Deploy:** GitHub Pages (production from `main`); the standard Next.js build remains available for other hosts.
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
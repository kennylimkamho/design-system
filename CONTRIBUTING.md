# Contributing

Thanks for your interest in this design system. Most contributions will be
content edits — copy in the MDX files under `content/`.

## Quick start

```bash
# Install dependencies
pnpm install

# Run the docs site locally
pnpm dev          # → http://localhost:3000

# Verify before pushing
pnpm build
pnpm lint
pnpm typecheck
```

## Editing content

All user-facing copy lives in MDX files under `content/`:

```
content/
  foundations/   # Color, typography, spacing, etc.
  principles/    # The six design principles
  components/    # One folder per component
  tokens/        # Token reference
  patterns/      # Multi-component solutions
  content/       # Voice & tone, UX writing
  showcase/      # Demo product surfaces
```

Each page is a `.mdx` file. Frontmatter is validated at build time — keep
required fields populated.

## Editing tokens

Tokens live in `packages/tokens/src/` as DTCG-style JSON. The build step
emits CSS variables (`tokens.css`) and a typed TS export.

```bash
pnpm --filter @design-system/tokens build
```

## Adding a component

1. Add the React component in `packages/react/src/<Name>.tsx`
2. Export it from `packages/react/src/index.ts`
3. Create `content/components/<name>.mdx` using `_template.mdx`
4. Open a PR — Vercel will spin up a preview URL

## Branch & PR conventions

- One logical change per PR.
- PR title follows Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).
- Vercel auto-deploys a preview URL on every PR — share it in the PR
  description for visual review.
- Merging to `main` deploys to production.

## Versioning

Semantic Versioning. Each milestone in the Phase 1 plan earns a version
bump; see the [project plan][plan] for the full schedule.

[plan]: /Users/limkamho/.claude/plans/design-system-visualize-specialize-depl-sprightly-giraffe.md
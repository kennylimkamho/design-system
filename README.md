# Product Design System

**Product judgment, made reusable.** By Kenny Lim.

A brand-independent working system for designers, engineers and AI agents: foundations, components, complete user journeys, case studies and purposeful motion.

[Open the website](https://kennylimkamho.github.io/design-system/) · [Read the complete handbook](https://kennylimkamho.github.io/design-system/handbook/) · [Try the component lab](https://kennylimkamho.github.io/design-system/lab/)

**Handbook:** `1.4.0-draft.9` · **Updated:** 2026-11-04 14:22:33 HKT (UTC+08:00).

## What is here

- **75 handbook chapters:** foundations, principles, key modules, flow design, a case-study library, Motion Lab, AI guidance and industry references. All existing chapter IDs remain searchable and linkable.
- **Working examples:** local handbook interactions and the imported React component lab, including navigation, Inbox filters, selectors, confirmation dialogs and tables.
- **Reusable source:** tokens, module/utility icons, component packages, Markdown chapters and a machine-readable index.
- **Generic documentation site:** its existing tokens, React primitives, playgrounds and fictional CRM remain available.

The handbook records both implemented components and proposed design rules. A demo is not evidence of completed App adoption. The imported library and the existing documentation site's tokens remain separate, versioned implementations; this migration does not silently unify their values or APIs.

## Structure

```text
apps/docs/          Documentation website (Next.js + MDX)
packages/          Generic React primitives and tokens
content/           Generic documentation and example notes
library/
  handbook/src/    Complete handbook source and interactions
  handbook/pages/  Generated Markdown chapters
  packages/        Imported React 18 / MUI component source
  apps/storybook/  Package-backed interactive examples
  spec/           Design contracts and decisions
  assets/         Curated icons, fonts and redacted case assets
scripts/           Build, verification and deployment assembly
```

## Local development

```bash
pnpm install --frozen-lockfile
pnpm library:install
pnpm library:lab
pnpm dev
```

Open <http://localhost:3000>. The complete handbook is at `/handbook/index.html`; the component lab is at `/lab/index.html`.

```bash
pnpm handbook:build
pnpm handbook:test
PAGES_DEPLOY=true pnpm build
```

GitHub Pages publishes from `main`. The complete library uses its own npm lockfile to preserve its React 18/MUI dependencies alongside the documentation site's React 19 workspace.

## Source and versions

[Import provenance](library/README.md) · [Changelog](CHANGELOG.md) · [AI-readable index](library/handbook/agent-index.json) · [Contribution guide](CONTRIBUTING.md)

Historical product names remain only where they identify the actual source of a case, implementation or asset. The current system has an independent name and identity.

## License

MIT for this repository's authored software. Preserve the imported [third-party notices](library/THIRD_PARTY_NOTICES.md), [font license](library/assets/fonts/sora/OFL.txt) and [channel-asset provenance](library/assets/brand/channels/README.md). Third-party marks are not licensed as this system's own branding.

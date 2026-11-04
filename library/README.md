# Product Design System — Handbook library

The complete working handbook: 75 chapters, interactive examples, authored module icons, tokens, component source, motion studies and an AI-readable index.

**Edition:** `1.4.0-draft.9` · **Updated:** 2026-11-04 14:22:33 HKT (UTC+08:00).

This edition adopts a neutral site identity. ChatDaddy remains identified where it is the actual source of a case study, component or asset. It is not the name of this independent system. The original package namespaces remain compatible with the source examples.

## Read and run

- [Handbook](https://kennylimkamho.github.io/design-system/handbook/)
- [Component lab](https://kennylimkamho.github.io/design-system/lab/)
- [Machine-readable chapter index](handbook/agent-index.json)
- [Markdown chapters](handbook/pages/README.md)

From the repository root, `pnpm handbook:build` regenerates the standalone handbook and public copy. `pnpm library:install` and `pnpm library:lab` build the package-backed React examples. The library uses an isolated npm workspace because its MUI/React 18 components are not interchangeable with the documentation site's React 19 primitives.

## Source record

Imported from the latest local `chatdaddy/design-system` working copy: base commit `7fa4a1d67828f4866fe9cc75ca4bc11f225bc101`, plus its uncommitted `1.4.0-draft.8` industry-reference chapter, citations and navigation updates. This import does not claim those local changes were merged upstream.

The previous edition's fixed revision time is 2026-10-01 14:49:55 HKT. Earlier immutable HTML snapshots and Git history remain in the original checkout/repository; they were not rewritten. This repository starts its own import/version record in [CHANGELOG.md](../CHANGELOG.md). Source links in the current handbook resolve to this repository; historical App evidence keeps its original commit URL.

Only curated handbook source, specifications, reusable code and published/redacted assets were imported. Raw research screenshots, local archives, credentials, environment files and application/customer data are excluded.

## Adoption and rights

Handbook examples are illustrative. An existing component is not proof of full App adoption or completion of every specification. The generic site's token set and this imported library's token set retain their own namespaces until an explicit token migration is reviewed.

Preserve [third-party notices](THIRD_PARTY_NOTICES.md), font licenses and the [channel-asset manifest](assets/brand/channels/manifest.json). Third-party marks remain their owners' property; the repository's MIT license does not grant rights to those trademarks.

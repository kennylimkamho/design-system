# Governance and decisions

## Authority

`spec/decisions.json` records request constraints and user-selected design directions pending PR review. Existing package code is the implementation truth; the spec describes the target. A preview radio selection never silently overrides either.

`spec/module-icon-decisions.json` records the separately pasted Integration B / AI A / CRM B selections. These authorize Design System artwork and spec updates, not an automatic App rollout or an assertion that a design/engineering reviewer accepted the final SVGs.

Decision states: `accepted-request` (explicit user direction), `proposed` (needs review), `user-selected` (explicit selection supplied in conversation; PR/engineering review pending), `accepted` (named approver + PR record), `superseded` (replacement linked). No engineering approver is assigned on someone's behalf.

## How to change the system

1. Open a scoped branch and describe the user task, audit evidence and proposed rule.
2. Update the spec, tokens/assets and example together; add tests and a changelog entry.
3. For breaking changes, list affected packages/consumers and migration path; show before/after and responsive states.
4. Product/design owner confirms experience; frontend maintainer confirms feasibility, accessibility and data contracts. Owners are **not yet assigned**; maintainers should assign them on this PR.
5. Record the accepted decision with approver/date/PR; do not infer approval from a preselected recommendation or an exported JSON file.
6. Implement in existing packages, then pilot in frontend-dashboard through separate PRs. Publish a version only after package-level validation.

## Versioning

- Draft design version `0.2.0-draft.2` is independent of the existing workspace package `0.1.0`.
- Patch: clarification or compatible asset correction. Minor: additive pattern/token. Major: incompatible names/semantics/layout contracts. Pre-release decisions may still change; call that out.
- Deprecate rather than silently repurpose a token or icon name. Each exception names a scope, reason, owner-to-assign and removal condition.
- Do not change multiple products' brand systems together. White-label and platform branding are explicit variants.

## Tomorrow's workflow

Use the agreed hierarchy and evidence now; use the draft for design/prototyping with its version label. Do not claim a production screen is compliant until its behavior and acceptance states have been checked. Pending choices can be explored in a feature branch; they do not authorize a global migration.

## Changes requiring explicit review

Action-color mapping; new core glyph; density default; route hierarchy; data selection/export scope; modal priority; component API; font redistribution; public hosting of screenshots. Internal copy and one-off spacing patches still need the relevant spec/test update, but not a full-system redesign.

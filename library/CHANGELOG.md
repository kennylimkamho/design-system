# Design specification changelog

This tracks design decisions, not package releases. Existing workspace package versions remain unchanged.

Entries record the state when each draft was created. Current review and deployment status is tracked in the handbook README and GitHub PR.

## 1.4.0-draft.8 — 2026-10-01 14:49:55 HKT (UTC+08:00)

- Add Others → Industry Info → WhatsApp Flows / IAB: nine sections covering platform vs hosted web, triggers, eligibility, UI/version limits, submissions/identity, privacy, pricing, publishing and selection. Includes a local-only visual comparison and task selector.
- Record 14 source-qualified claims with a fixed HKT verification time. Distinguish readable Meta product pages, provider-specific documentation, unverified developer-doc claims and conflicting service-message pricing. No universal entitlement or fee promises.
- Clarify provider-specific re-publishing behavior, Flow JSON definition vs endpoint payload size, messaging capacity vs daily usage, and that IAB does not automatically provide HIPAA/PCI compliance or user identity.
- Index reference-only status, claims and sources for AI Agents; preserve draft 7. 75 chapters / 287 sections. No App rollout or external messaging.

## 1.4.0-draft.7 — 2026-10-01 14:42:16 HKT (UTC+08:00)

- Add eight top-level destinations: Background, Principles, Key Modules, Flow Design, Case Study, Motion Lab, AI Infra and Others. Scope desktop/mobile chapter menus to the active destination; retain all chapter hashes and full-handbook search.
- Background contains founder context, brand, tokens and components; AI Infra contains agent guidance, engineering adoption and governance. Remember the last chapter in each destination during the session.
- Semantic navigation links styled as tabs, arrow/Home/End focus navigation, visible selected state, horizontally scrollable narrow-screen navigation and reduced-motion support. Preserve immutable draft 6; no App changes.

## 1.4.0-draft.6 — 2026-10-01 14:22:14 HKT (UTC+08:00)

- Motion Library: all six examples preview once on mouse hover or keyboard focus, cancel on exit, and retain manual play/reset for touch. Focused revealed links remain accessible; no data action is triggered by hover.
- Motion Lab skeletons start paused, play on hover/focus or explicit Loading, and stop on exit/navigation. Legacy recipe spinners are hover/focus-gated; controls keep explicit state changes.
- Respect system/manual reduced motion and interrupt old animations. Preserve immutable draft 5; no App change.

## 1.4.0-draft.5 — 2026-10-01 12:09:44 HKT (UTC+08:00)

- Refresh the editorial shell: larger titles, calmer surfaces, simpler reading hierarchy and expandable navigation groups. Preserve all prior chapter hashes, search, source details and working component examples.
- Add Motion Library with six independently authored, manually controlled recipes: view change, badge response, panel disclosure, outcome feedback, error shake and detail reveal. Include purpose, duration, actual keyframes, reset, category filters, keyboard controls and reduced-motion cancellation.
- Record transitions.dev and its GitHub/license as external inspiration. No upstream site design, snippets, Pro library or agent tooling is copied or installed. No App changes or production success/analytics claims.
- 74 chapters / 278 rule sections; preserve the draft-4 immutable snapshots.

## 1.4.0-draft.4 — 2026-09-30 19:02:39 HKT (UTC+08:00)

- Adopt the supplied draft-3 reading direction as nine indexed, source-owned chapters: opening, reading guide, content matrix, P1–P4, motion strategy, quote archive, verified version history, rule index and candidate principles. 73 chapters / 275 rule sections; all 248 prior rules and 198 meaningful visuals remain.
- Add functioning, persisted brief/full reading modes; keyboard-accessible controls, expanded detailed rules, nested disclosure deep links and compatibility with supplied page-prefixed hashes. Search and machine-readable indexing cover every new chapter and stable rule code.
- Preserve existing icon identity controls, case evidence, real examples, source mappings and Broadcast learnings instead of importing blank after iframes or mislabelled generic SVGs as App evidence. Replace invented historical dates and claims with Git-backed history; separate supplied editorial phrases and candidate ideas from verified facts.
- This is a Handbook-only change, not an App rollout. Prior draft-3 snapshots remain immutable. Source input SHA-256: `df3f7abc49bd43bab40cf2912ebe9004998f1e6043924044a9d21cd22b9ec8b5`.

## 1.4.0-draft.3 — 2026-09-30 13:12:46 HKT (UTC+08:00)

- Add a visible Broadcast learning record to Case Study Library, preserving the latest 1.4 reading hierarchy and all prior snapshots. Publish only anonymous, explicitly labelled before/after reconstructions; original campaign screenshots remain private and excluded from Pages.
- Record the user correction: borrow the supplied prototype's product ideas, not its Visual Language. Document the frontend's Audience → Message → Delivery → Review structure, persistent summary, original validation/tour integration, genuine failure follow-up and count denominator correction. No invented backend capabilities or unmeasured conversion claims.
- Expand to 64 chapters / 248 rule sections / 198 substantive visuals. Require timestamped before/after evidence for every UI change. Frontend implementation and documentation publication remain separate statuses.

## 1.4.0-draft.2 — 2026-09-30 12:43:52 HKT (UTC+08:00)

- Review the shared reading structure across all 63 chapters. Remove repeated specimen labels, numbered specification kickers, nested editorial frames and scattered adoption disclaimers. Keep real component boundaries and contextual risks intact; consolidate version/time/scope and source details into disclosures.
- Remove 50 decorative duplicate section previews. All 244 rule sections and legacy anchors remain; 194 substantive visuals and all chapter-level interactions remain. Prose-only specifications are directly readable instead of hidden behind fake diagrams.
- Simplify the content-timing flow to one workspace, one task title and moment-specific content. Record “frames need a purpose” as part of the content economy rule.
- Add header search (⌘/Ctrl K or /) across every chapter, rule, table, example and source mapping. Results link to exact sections and reveal matching detailed rules; support keyboard navigation, focus return, empty results and literal safe text rendering. No external search service or runtime network dependency.
- Preserve the immutable draft-1 HTML copies. Add archive, reading hierarchy and search regression checks. No App or runtime package changes.

## 1.4.0-draft.1 — 2026-09-30 12:12:41 HKT (UTC+08:00)

- Reorganize the 63-chapter handbook into Founder’s Note, Foundations, Design Principles, Key Modules, Flow Design, Case Study Library, Motion Lab and AI/Version Governance. Preserve all existing chapter IDs and immutable older snapshots.
- Record Kenny Lim’s founder direction as an editorial paraphrase; add the durable-job principle, activation journey, role-specific Aha moments, motion guidance and an AI Agent reading contract.
- Add five source-mapped, detailed before/after case studies: Broadcasting, Contacts, Inbox, Automation and Integration. Broadcasting covers setup/review, live state, history table, analytics and recovery; the other four have explicitly labelled source-based reconstruction screens. Each case distinguishes App evidence from Design System proposals.
- Add an offline, keyboard-operable comparison UI and privacy-safe AI-redrawn Broadcast reference. The original user screenshot is not shipped. Generate a machine-readable `handbook/agent-index.json` and package it with the site. Documentation only; no App/API/runtime migration.
- Add an Analytics loading-pattern learning in Motion Lab: only chart and table placeholders, real-request lifecycle, reduced-motion and offscreen pause. Export package-backed React skeletons and a source-linked Storybook state demo; no fabricated metrics, timer or App import migration.
## Broadcast UI evidence rule — 2026-09-30 11:50 HKT (UTC+08:00)

- Require timestamped, same-state before/after screenshots and a reusable decision or explicit page-specific note for every UI change and browser annotation. Keep real App screenshots inside private research, excluded from Pages.
- Add seven Broadcasts observations and before/after evidence. Generalize table-title icon, status/filter parity, honest count presentation, hover/focus/touch action reachability and breadcrumb/nav identity. This does not claim backend or whole-App changes.

## 1.3.0-draft.1 — 2026-09-30 00:53:33 HKT (UTC+08:00)

- Add a content layer to the designer handbook: five user moments (Decide, Act, Recover, Use safely, Reference), seven authoring principles, three disclosure layers and default editorial budgets. It complements task-first page structure rather than replacing it.
- Add an interactive, offline QR connection specimen and seven section-level visuals comparing overloaded setup copy with moment-specific disclosure. Verified fees, permissions and irreversible effects stay visible before commitment; no invented product fact or real scannable QR is shipped.
- Add P1–P4 structural-reference crosswalk, source-backed review template, generated chapter Markdown, content-placement spec and regression coverage. Preserve the 1.2.0-draft.2 snapshot unchanged. This is documentation only; no App, API or runtime package behavior changes.

## 1.2.0-draft.2 — 2026-09-29 23:40:00 HKT (UTC+08:00)

- Make the GitHub Pages root the designer handbook, retaining `/handbook/` as an alias and moving the existing Storybook gallery to `/storybook/`. Redirect historic root `?path=` deep links without changing the immutable standalone handbook file.
- Add four curated package-backed component families (primary rail, secondary menu, Inbox filters, module icons) with exact source, import example and live-story links inside the relevant chapters. Mark older Storybook stories as reference-only, never as canonical standards or evidence of App adoption.
- Correct navigation dimensions to current package tokens, update source mapping and preserve the 1.2.0-draft.1 HTML snapshot unchanged. No App/backend behavior is changed.

## Runtime extraction batch 1 — 2026-09-29 21:36 HKT (UTC+08:00)

- Copy the product's twelve approved module glyphs and ChatDaddy brand mark into importable `@chatdaddy/icons` components. Add current cool-grey navigation tokens alongside, not over, the old white shell tokens.
- Replace the package/Storybook's stale visual-only sidebar with App-derived primary hover/pin rail, grouped navigation and 232/76px secondary route menu. Export controlled Inbox conversation, channel and assignee filter primitives with real hover/focus/touch and count states. Storybook now renders package components rather than a parallel mock sidebar.
- Add a source-to-package inventory for all major modules and clarify that App routing, auth, backend data, OAuth and mutations have **not** migrated. The versioned 1.2.0-draft.1 handbook snapshot is unchanged; this is a separate runtime-code batch.

## 1.2.0-draft.1 — 2026-09-29 20:35:05 HKT (UTC+08:00)

- Add a visual-first, five-section live-state design concerns chapter and matching specification, distilled from read-only inspection of the actively changing App working tree. Separate connected channel from a verified first conversation; distinguish settled first-use empty from filtered no-match, loading, error and permission states.
- Define exact versus lower-bound unread badges, persistent task-critical cues versus hover/focus/touch-accessible secondary actions, contextual help recovery with one overlay owner, and evidence requirements for connector availability and analytics.
- Add five section specimens, a chapter-level before/after task demo, regression assertions, immutable standalone HTML and an annotation copy. Retain 1.1 drafts and Version 1 unchanged. This is documentation only: no App, backend or runtime package is changed.

## 1.1.0-draft.7 — 2026-09-25 14:15:34 HKT (UTC+08:00)

- Record the product owner's pasted choices: Integration B (Connected apps), AI A (Brain), CRM B (Opportunity card). The choices are selected for the authored Design System assets and specification; design/engineering review and App rollout are distinct steps.
- Add Integration and CRM module SVGs, replace the previous AI chat/spark glyph with the selected brain geometry, and show all three at navigation size on light and dark surfaces in the icon chapter. Keep the 24px / 2.25px handbook presentation, 1.75px base SVGs, one local blue accent and existing one-shot gallery motion with reduced-motion support.
- Pin the original 0.2 studio to its archived icon map as well as its archived glyph geometry. Keep draft 6 and all earlier versioned snapshots unchanged. No App code or runtime package changed in this Design System branch.

## 1.1.0-draft.6 — 2026-09-25 13:07:37 HKT (UTC+08:00)

- Add three visual-first chapters: task-first view selection, first-use/role-based onboarding, and Integration discovery-to-connection. The role recommendation model explicitly traces Role → Responsibility → Capability → Customer value; placement of role guidance and primary-menu taxonomy remain open.
- Reconcile cross-task feedback into Contacts, Inbox, Channels, Settings, navigation and hover guidance. Keep essential identity/status/actions visible, progressively reveal lower-frequency controls with keyboard/touch equivalents, and do not invent backend counts or capabilities.
- Replace the AI module glyph with an intelligence mark inside the conversation outline. Give all module and utility glyphs in the handbook gallery one subtle, non-fading hover/focus shake, with reduced-motion fallback; no idle motion or App runtime migration is implied. Pin the 0.2 direction studio to its original glyph source so the historical preview remains unchanged.
- Add a status-labelled cross-task audit, 12 new section specimens, new regression checks and immutable draft-5 verification. Draft 5 and the user-confirmed Version 1 stay unchanged. This is a documentation proposal for the existing draft PR; no App/backend change or deployment.

## 1.1.0-draft.5 — 2026-09-25 12:36:03 HKT (UTC+08:00)

- Make the handbook visual-first: all 170 numbered sections across 46 chapters now lead with a tailored UI specimen; keep the full detailed specification in an expandable disclosure and add exact specimen links to the generated Markdown.
- Add real mini-screen and state-comparison examples for foundations, navigation, principles, components, product patterns, channel identity and engineering handoff. Expand the top-level states demo to eight distinct conditions.
- Add structural coverage for every numbered section and a qualitative visual-review contract. These checks do not certify that every specimen is explanatory or that native viewport/accessibility QA passed.
- Preserve Draft 4, earlier drafts and user-confirmed Version 1 unchanged. This is a local documentation proposal only; no App/backend change, GitHub push or deployment.

## 1.1.0-draft.4 — 2026-09-25 11:41:22 HKT (UTC+08:00)

- Add a goal-first Integration / App card contract: persistent primary connect/retry, contextual tutorial after intent or error, and secondary Settings revealed on desktop hover/focus with a touch-equivalent entry.
- Define concise CTA language (`連結` in an established integration catalog; `設定連結` only where context would otherwise be ambiguous) and four states: disconnected, connecting, connected and error.
- Add optical app-icon sizing guidance and a local interactive PayFlow specimen with a 56px slot / 44px artwork candidate. Hover only reveals affordance; no demo interaction calls an API.
- Extend the hover chapter, specification, acceptance checks and automated DOM coverage. Save a new draft-4 preview while preserving drafts 1–3 and Version 1 unchanged.
- No App/backend change, GitHub push, merge or deployment.

## 1.1.0-draft.3 — 2026-09-25 11:28:49 HKT (UTC+08:00)

- Remove the fixed white identity wrapper. Distinguish artwork's intrinsic background, optional UI backing and the actual local surface.
- Add nine channels × five surface examples: white, subtle, dark, brand color and simulated complex/image background. Compare transparent versus compatible backing without recoloring artwork.
- Include unmodified official-pack white WhatsApp / Messenger / Instagram SVGs. Preserve Business App / TikTok reference artwork and the custom API illustration with review labels.
- Show positive/negative own App marks, channel variants, accented module icons and monochrome utilities on light and dark surfaces; not a full App dark-theme implementation.
- Save a new draft-3 preview; preserve drafts 1/2 and Version 1. No App/backend change, GitHub push or deployment.

## 1.1.0-draft.2 — 2026-09-25 11:18:50 HKT (UTC+08:00)

- Respond to the Cloud API card annotation with a scalable speech-bubble/cog illustration based on the user's green app-icon reference; explicitly mark it as custom, pending review, not an official Meta logo.
- Add a worked phone / B / cog comparison, the original supplied graphic and rules distinguishing product/mode symbols from platform branding, runtime state and Settings actions. Visible Cloud API and Coexistence labels remain mandatory.
- Record exact hashes and provenance for the original reference and authored derivative. Allow only internal SVG paint/mask references; no external runtime asset loads.
- Save a new draft-2 standalone preview, preserve draft 1 and the approved Version 1 snapshot. No App/API change, GitHub push, merge or deployment.

## 1.1.0-draft.1 — 2026-09-25 11:05:27 HKT (UTC+08:00)

- Add a detailed 46th chapter, Logo 與 Icon 分層: app, channel and module identity plus utility actions; nine channel specimens and four distinct WhatsApp contexts.
- Propose a 24px / 2.25-stroke navigation variant with restrained blue accent, retaining 1.75 monochrome utilities. Base assets and runtime packages are untouched.
- Separate vendor identity, connection mode, provider, capability and health. WABA means WhatsApp Business Account; QR alone cannot identify mobile app variant.
- Embed hash-verified WhatsApp / Messenger / Instagram official-pack assets; label Business App / TikTok legacy specimens reference-only. Calling is provisional pending clarification of “Callong”.
- Add catalog/list, example health and missing-logo interactions; preserve names/modes in fallback. No API requests, account changes or inferred backend mappings.
- Create new standalone and annotation copies; preserve Version 1 / 0.3 / 0.2 snapshots. This revision is a local draft, not pushed or deployed; native browser checks and production asset review remain pending.

## Version 1 / 1.0.0 — 2026-09-25 00:39:03 HKT (UTC+08:00)

- User confirmed the detailed handbook as Version 1. This is a documentation baseline, not a runtime package release.
- Enlarge all eight navigation group headings from 11px to 15px, with stronger weight/contrast and more separation; shared by the desktop sidebar and mobile contents menu.
- Add a fixed, explicit Hong Kong update date and time to every HTML chapter, its footer, generated Markdown and the Storybook entry. Metadata remains visible in narrow layouts.
- Save a new `chatdaddy-design-system-v1-annotatable.html` snapshot and annotation copy; preserve the previous 0.3 and 0.2 previews unchanged.
- Point handbook entry links, CI preview artifacts and future Pages packaging to Version 1. PR/engineering review and native browser QA remain pending; no merge, deployment or App change.

## 0.3.0-draft.1 — 2026-09-25

- Replace the short direction studio as the main entry with a searchable 45-chapter designer handbook, grouped navigation, section links and GitHub-readable generated Markdown.
- Restore nine detailed principles: smart defaults, goal gradient, reciprocity, ownership, loss aversion/status quo, contrast, visual compression, visual path and logical flow. Each has ChatDaddy examples, safe boundaries and acceptance checks; no invented progress, misleading defaults or coercive choices.
- Make hover/progressive disclosure a first-class chapter: row actions, tooltip/preview, panel hover, focus retention, explicit pin, Escape, touch alternatives.
- Expand typography, CJK fallbacks, role scales, spacing, density, elevation, responsive app shell, navigation and component state contracts.
- Embed unmodified official OFL Sora variable font and full license for accurate offline Latin specimens. CJK remains documented system fallback.
- Add interactive validation, selectors, six-row scoped table with paging/search/sort/states, icon copy/download, dialog, preference, progress, handoff and motion examples; seven full-layout product schematics.
- Map every chapter to verified existing repository sources. No parallel runtime component library, no new Figma library claim, no App/API changes.
- Add build/test scripts, PR preview artifact, Storybook entry and narrowly allowlisted future Pages `/handbook/` packaging; private audit assets excluded. No merge or deployment performed.
- Retain 0.2 studio and package APIs untouched. Native browser visual/keyboard/touch checks remain explicitly pending in the QA ledger.

## 0.2.0-draft.2 — 2026-09-24

- Establish the next ChatDaddy design direction in the existing independent repository.
- Reconcile user-provided reference exports with the App audit and existing packages.
- Define navigation, data display, components, content, accessibility and migration contracts.
- Propose a new ten-glyph module icon set and one licensed utility vocabulary.
- Add machine-readable draft tokens, decision register, offline review studio and checks.
- Preserve written and screenshot audit evidence, including privacy masks and reproduction limits.
- No runtime package exports, API behavior, production theme or application navigation changed.
- User selected authored module icons + Lucide, blue primary and Standard 52px density; PR/engineering review is still pending.
- Add rich event-driven micro-animation rules and a live motion playground, including a reduced-motion override.
- Use ChatDaddy-only design-system copy; reference archives remain local and published provenance uses neutral source IDs.
- Owner assignments and font-distribution rights still need team confirmation.

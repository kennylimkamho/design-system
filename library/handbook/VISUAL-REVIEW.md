# Visual-first handbook · authoring and review contract

This is the acceptance bar for `1.4.0-draft.3`, not a claim that every illustration has been approved. Use a visual when it makes an interface decision easier to understand; a prose-only principle does not need an extra decorative frame. Full text remains available for accessibility, edge cases, implementation and machine use.
## Mandatory change evidence · 2026-09-30 11:50 HKT

Every user-requested UI change, browser annotation and design decision must be recorded in the Design System before it is called complete. This is a release gate, including small visual fixes that may generalize to other surfaces.

For each change, retain a **before screenshot and after screenshot at the same viewport and UI state**, plus capture timestamps with timezone, route, affected component, the user's observed problem, the design decision, implementation status, validation result and reusable rule (or an explicit “page-specific” note). Link the source change/PR and use versioned filenames; a later state must never overwrite earlier evidence. Label a mockup as a proposal, never as a shipped after screenshot. If the after state cannot be captured, record the blocker and leave the entry incomplete.

Keep real customer/business data in the repository's private `research/` evidence only. Do not embed App screenshots in the public Pages artifact or generated handbook. Mask or replace sensitive data before sharing evidence beyond the private review audience. The written handbook/spec must contain the generalized rule and a fictional specimen where a visual example is needed. Verify desktop and narrow layout, hover, keyboard focus, touch/no-hover and reduced-motion implications where relevant.

Acceptance question: can a reviewer open both timestamped screenshots, tell exactly what changed, verify that the proposed rule matches the implemented UI, and identify where else the rule applies? If not, the evidence handoff is unfinished.


## What each section-level specimen must explain

1. **The decision:** show the actual interface choice or two credible alternatives. A decorative icon, title strip, or unlabeled empty rectangle does not count.
2. **The context:** use a plausible ChatDaddy workflow and sample data, while avoiding real customer content. Preserve distinctions such as channel identity versus connection mode, persistent primary action versus hover-revealed secondary action, and saved view versus temporary filter.
3. **The state and consequence:** where the rule concerns interaction, show before/after, success/error, enabled/disabled, or desktop/touch variants. A static frame may illustrate a state; never imply that a sample button executes a real product action.
4. **The visual hierarchy:** typography, spacing, alignment, contrast and icon role must reflect the rule being documented. Labels explain *why* a choice is correct, not merely name the example.
5. **Reachability:** if a specimen has a usable interaction, it must work with keyboard and pointer; hover-only disclosure needs focus and coarse-pointer equivalents. Respect reduced motion.

For the review, hide the prose disclosure and ask: “Could a new designer choose the appropriate pattern, place it correctly, and recognize its relevant states from this UI?” If not, revise the specimen or mark the rule as primarily textual (for example, governance or source mapping). Structural coverage alone is not acceptance.

## Current structural coverage

- 64 chapters have chapter-level examples.
- 194 sections have unique `data-section-visual` examples before detailed rules; 50 prose-only sections display rules directly. All 244 section anchors remain usable.
- The section visuals span foundations, navigation, nine original principles plus task-first, twelve component chapters, nine product families, identity and technical handoff. Generated Markdown links to each matching HTML section.
- Automated tests check mapping, archive preservation, script compilation and isolated DOM behavior. They do not inspect pixels, native focus behavior, mobile overflow or whether the explanatory example is semantically convincing.

## Review rounds

- **Round 1 · Draft 4 gap audit:** chapter-level demos did not provide enough section-by-section explanation. The states gallery was narrower than its specification; contact and broadcast flows were largely text strips; some source CSS had not been embedded. These led to the Draft 5 section-visual pass, eight-state gallery and UI-screen flow replacements.
- **Round 2 · Draft 5 quality audit:** three agents reviewed disjoint principle, component, and product/foundation/identity/technical slices. They corrected examples that looked persuasive but contradicted their own rules: false progress, incomplete pricing comparisons, a hidden mobile action, static controls implying real writes, vague chart data, and missing interaction states.
- **Round 3 · cross-review:** agents reviewed slices they had not authored. Corrections include preference fallback precedence, honest static table selection, sensitive-copy recovery, touch target size, broadcast Review versus Confirm and separate delivered/failed/unknown results, full-datetime mobile table actions, separately labelled phone fields, read-only login fields with secondary auth/language paths, pending identity artwork labels, unapproved dark-color exploration and live-only focus rings. Rebuilt tests pass. These reviews establish source consistency, not native visual certification.
- **Round 4 · cross-task design feedback:** add visual decisions for task-first page selection, first-use/role-guided recommendations and Integration discovery; keep undecided onboarding placement and navigation taxonomy labelled as open. The icon gallery receives a one-shot hover/focus shake, not a global animation requirement for brand artwork.
- **Round 5 · App-derived live-state concerns:** compare verified first-outcome states, settled first-use versus filtered no-match, exact versus lower-bound badge semantics, hover/focus/touch reachability, help recovery, and the evidence threshold for availability and metrics. These are design contracts distilled from a changing local working tree, not proof of production adoption.
- **Round 6 · Content timing layer:** add a five-moment interactive QR flow, seven content principles, disclosure tiers, editorial budgets and a before/after overload comparison. The example blocks commitment when its fee/permission evidence is missing and does not supply a scannable QR or fake backend outcome. Desktop 1440px and narrow 500px headless captures were inspected; full native, keyboard, screen-reader, 390px and zoom review remain open.
- **Round 7 · Reading economy:** audit the shared templates for every chapter. Remove labels repeated by headings, decorative preview duplicates and redundant outer frames. Keep component, interaction and warning boundaries. Consolidate document scope/source details, preserve exact deep links and index closed rules in global search. See [reading audit](READING-AUDIT.md).

## Native review still required

Open the standalone HTML in an approved browser, then inspect each chapter and a section sample at 390, 768, 850, 1280 and 1440px plus 200% zoom. Check real font rendering, crowded labels, table scroll affordance, static versus functioning example actions, keyboard focus, pointer hover, coarse pointer, no-hover, dark/busy icon surfaces and reduced motion. The Codex in-app Browser rejected the current local-file URL under its security policy; no alternate browser action is attempted after that rejection. Previously captured headless desktop/narrow screenshots and JSDOM checks do not replace this gate. The draft may be shared for review, but must not be described as visually certified or production-ready.

## Ownership of future changes

Change the authored `handbook/src/*section-visuals.mjs` and matching CSS, then rebuild. Keep chapter prose and specimen in sync. A new rule needs a corresponding example and an acceptance question; if the UI cannot honestly demonstrate it, give a reason instead of inventing a decorative preview. Preserve prior versioned HTML snapshots, and record new decisions in `CHANGELOG.md` and the relevant spec.

# Feature workspace decisions · page-by-page contract

**Status:** the review order and three-phase boundary below are user-directed, 2026-09-25; the individual page patterns remain proposals for review. This records interaction logic for incremental frontend work. It does not approve a global visual replacement or change product navigation, backend behavior, permissions, or data contracts. Apply and review one page at a time.

## Review from a first-time user's point of view

When someone opens Away reply or Keyword replies without prior knowledge, assess the experience in this order:

1. **What is this for?** Can they explain, in their own words, what the feature does, when it runs, and the customer outcome? If not, fix the visible purpose and example before polishing controls.
2. **What do I do next?** Can they identify the first, second, and third meaningful setup decisions, including prerequisites and what happens after save? Do the actual controls follow that order without requiring a tour?
3. **Does the interface fit that job?** Only then judge visual hierarchy, density, table vs cards vs settings, labels, spacing, motion, responsive behavior, and accessibility.

This order prevents an attractive screen from disguising a confused mental model. Run the same questions on the first visit, with existing data, and after a failed or incomplete attempt. The answer to question 1 must be on the page, not hidden in documentation; question 2 must map to existing product behavior, not invented buttons.

## Three-phase improvement programme

| Phase | Aim | In scope | Explicitly deferred |
| --- | --- | --- | --- |
| **1 — Frontend clarity** (current) | Correct basic comprehension and presentation faults | Purpose/copy, first-next-last setup hierarchy, suitable page pattern, empty/filter/error states, accessible interaction, restrained motion; reuse existing actions and data | Backend/API changes, new product capability, navigation reclassification, industry-specific logic |
| **2 — Goal-oriented V1 refinement** | After the first design-system version is coherent, optimize around real use cases and user goals | Validate user journeys, task success, cross-page continuity and whether shared patterns actually help | Pretending the current UI-only pass has already solved task outcomes |
| **3 — Industry and ICP adaptation** | Tailor the proven system to different customer contexts | Research-backed differences in vocabulary, defaults, examples, density and recommended paths by industry / ideal customer profile | Guessing segments or hard-coding stereotypes before evidence and product support exist |

Each phase has its own decision gate. Phase 1 is complete only when a novice can explain the feature and take the existing next step, with no regression in permissions, save behavior or accessibility. Phase 2 requires a refined V1 baseline and validated goals; Phase 3 requires evidence that the differences matter for each segment. Do not use a Phase 2 or 3 aspiration as a reason to expand a Phase 1 PR.

## Start with a user job, not a component

For each page, write one sentence for each of these before drawing UI:

1. **Entry intent:** What is the person trying to decide or complete *now*?
2. **Available evidence:** What real data, permissions, and existing actions can the frontend show?
3. **First useful action:** What single action moves the person toward an observable result?
4. **Return visit:** What changes after the first object exists, and what context must persist?

Do not choose a table, hero, tutorial, or wizard until those four answers exist. A page can have different surfaces for first use and subsequent management; that is not inconsistency if the task has changed. Keep the app shell and established module navigation stable while redesigning a feature workspace.

## Choose the surface by task

| Task / state | Preferred surface | Avoid |
| --- | --- | --- |
| Understand a capability before any object exists | Compact purpose statement, concrete outcome/example, one primary CTA, short setup path | Empty data grid with a giant decorative illustration or two duplicate Create buttons |
| Choose among genuinely different starting methods | Choice cards or short comparison with explicit consequences | A table of unlike options, or a forced multi-step tour |
| Configure one object | Visible, task-ordered sections with existing fields, inline dependencies, persistent save feedback | A form chopped into steps solely to create movement |
| Work on a spatial flow | Canvas plus contextual inspector and clear add/preview/save controls | Replacing the editor with a generic table or hiding essential controls in hover |
| Compare, scan, sort, or batch-manage *homogeneous records* | Data list/table with meaningful columns and query/filter scope | Table for a one-off setting, instructions, or dissimilar setup choices |
| Review an outcome | Status summary and drill-down to real records | Invented completion, performance, or progress metrics |

The table test is practical: do rows share a schema, do two or more columns help a real decision, and is there a legitimate scan/sort/batch job? If not, use a setup, catalog, detail, or workspace surface. A table may still be the right **return-visit** view once records exist.

## State model before styling

Use distinct surfaces for **loading**, **first-use empty after a successful unfiltered fetch**, **filtered no-match**, **retryable error**, **no permission**, **populated**, and **pending/saved**. Never infer “new user” from a temporarily empty array or a request failure. Preserve filters and query when there is no match; offer a clear-filter action only when filters are active. Keep an existing list accessible when records exist.

Explain capability in the page itself at the point of need: what it does, one concrete example, what the user must provide, and what will happen after save. An optional “How it works” dialog may go deeper, but it cannot be the only explanation or interrupt every return visit. Its completion means “guide viewed,” not “feature configured.”

## Five page pilots in the current scope

| Page | First useful decision | Workspace pattern | Return-visit view |
| --- | --- | --- | --- |
| 訊息流 / Message flows | Start from blank, existing template, or supported AI path; state the difference | Creation choices lead to the **same existing editor**; canvas retains contextual inspector and unsaved state | List of flows with relevant state/last edit and existing actions |
| 群發 / Broadcasts | Identify recipient scope and intended message before scheduling | Brief purpose-led entry; setup follows audience → content/channel → schedule/review using real controls | Campaign list/table for status, timing, and actual results |
| 離線機器人 / Offline bot | Which flow should answer outside which business hours? | One task-ordered settings surface: flow, channel, weekday/time, frequency, advanced rules; preview selected hours | The same settings surface showing saved configuration, not a fake records list |
| 關鍵字回覆 / Keyword replies | Which incoming words/conditions should start which existing flow? | Conditions → response flow → scope/frequency, with concise examples and visible consequence of “all messages” | Rule list/table only when rules exist and comparison/editing is useful |
| Forms | What information needs to be collected in a conversation? | First-use explanation and Build → Ask → Review path; existing form editor keeps its field types and save semantics | Forms list with access to submissions and existing import/create actions |

These are **pilot intentions**, not a command to make all five pages visually identical. Shared primitives (small intro, setup path, guide, state gate) should keep spacing, focus, and language consistent while the page anatomy follows its job.

## Frontend-only boundaries

- Reuse the existing create/import/save/preview/send operations. Explanatory UI must not add a new business action, modify API payloads, imply an unsupported preview, or silently enable a feature.
- Keep current permissions, plan/channel gates, validation and deep links. Explain a disabled action; do not replace it with an apparently working button.
- One primary action per task surface. A list toolbar and first-use panel should not both compete with “Create” at the same time.
- Use live status/counts only where the existing data contract supplies them. Avoid sample metrics that look real.
- Preserve input and scroll/focus through disclosures. An inspector closed visually leaves the keyboard order. Every icon-only control has a name; selected state is not color-only.
- Motion acknowledges a user action (selection, disclosure, view change, save result), lasts about 150–250ms for direct feedback, and respects reduced motion. No perpetual “AI” glow or animation that delays the task.
- Check English and Chinese copy, narrow and wide viewports, touch, keyboard, light/dark/white-label where supported. Contextual help is supplementary, never a substitute for visible labels.

## Review one page at a time

Each pilot PR should contain: the four-sentence task contract, its first-use and return-visit states, the existing-action map, and the exact files it changes. Test loading/empty/filtered/error/populated states where applicable, at least one keyboard path, and the unchanged save or navigation behavior. Prefer a small page-specific PR over a broad “replace every table” rollout. Record any cross-page primitive separately so future pages can adopt it deliberately.

Related rules: [task-first handbook](../handbook/pages/task-first.md), [live-state design concerns](live-state-design-concerns.md), [data display](data-display.md), [components and states](components.md), [motion](motion.md), and [adoption checklist](adoption.md).

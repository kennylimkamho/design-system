# Cross-task design audit · 2026-09-25

This is a design rationale and review boundary, not a claim that the current app already implements these patterns. The six reviewed work areas were App Integration Page, AI Page, Inbox Optimise, Bugs Fix, Home and Other parts. Repeated comments shared between work areas count as one observation. Screenshots and implementation replies were not treated as user approval.

## Evidence status

| Status | Meaning | Direction |
| --- | --- | --- |
| Confirmed direction | Explicit positive feedback or an unambiguous correction | Integration starts with discovery rather than a records table; active secondary navigation uses restrained weight/tint, not a saturated blue block. |
| Repeated preference | Requested across surfaces, but individual implementations still need review | Define the user's job first; keep identity, status and the primary action visible; reveal secondary controls progressively, with keyboard and touch equivalents. |
| Contextual candidate | A request for one surface, not a global token or layout | Compact one-entity-per-row channel/assignee lists; a three-line conversation row with visible phone; setting-change preview; a small-list view without search. |
| Open decision | The user asked to investigate, or later feedback paused the proposal | Role guidance on Home versus post-login onboarding; primary-navigation taxonomy; the precise sequence after the first connected channel. |
| Superseded | Later feedback corrected or narrowed an earlier request | “One column” was corrected to “one row” for channel/assignee items; an earlier Academy-under-Help idea shifted toward Home; broad menu regrouping was paused. |

## Rules to apply now

1. **Task before layout.** State the user's goal, primary next action and useful result before choosing a table, card catalog, setup flow, dashboard or workspace. A table is for comparing or acting on records; it is not a default homepage or universal empty state.
2. **Action hierarchy.** Keep the primary action, identity, phone where operationally essential, status and relevant counts visible. Hover may expose lower-frequency actions. Focus and touch must expose equivalent controls; hover does not execute a destructive or state-changing action.
3. **Truthful capability and data.** Show a count, popular tag, progress or success only when the existing product/backend can supply it. Distinguish unknown, zero, loading, error and permission. Do not make a UI-only redesign imply a new backend capability.
4. **Purpose before controls.** A setup surface first explains what a feature does and what outcome it offers, then guides configuration. A helpful preview can show a concrete conversation, message or widget instead of relying on abstract copy alone.
5. **Specific entity presentation.** Channel and assignee items in operational filters are rows, not a cloud of tags. Show each entity's identity and applicable status/count. A campaign grid or a comparison table can legitimately use a different layout.
6. **Subtle navigation state.** The active secondary item should be recognizable through type weight, a light tint and position; avoid a large saturated block. This does not settle which product categories belong in the primary rail.

## Decisions intentionally left open

- Do not freeze a new primary-menu taxonomy from historical comments. The later scope explicitly paused category changes.
- Do not present the location of role-based guidance as approved. Compare Home, post-login onboarding and contextual help against real user journeys.
- Do not prescribe one universal empty-state or table treatment. First-use, filtered-empty and no-data states have different jobs.
- Treat density targets, hover delays and the exact placement of controls as candidates to validate in the corresponding product surface.

## Design review checklist

- Can a designer write **Role → Responsibility → Capability → Customer value** for a personalized recommendation, without using role labels alone as a shortcut?
- Does the first-use screen have one meaningful next step, and is completion tied to a real event?
- Is the page's chosen view justified by discovery, comparison, configuration or operational work?
- Are all essential values visible without hover, and all secondary actions reachable without a mouse?
- Are counts, source channel, timestamps, status and selection scope reliable and useful for the decision being made?
- Is an open IA or onboarding placement question visibly marked for review rather than silently turned into a permanent rule?

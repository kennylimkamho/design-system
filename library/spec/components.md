# Components, states and feedback

| Component / pattern | Contract | Required states |
|---|---|---|
| Button | Action verb, one primary per task, readable contrast; prevent duplicate submissions in pending state | Default/hover/focus/pressed/disabled/pending |
| IconButton | Meaningful accessible name, tooltip on focus/hover, target independent of glyph | Named/default/focus/disabled with reason |
| Field / PhoneField | Visible associated label, helper/error below, correct input/autocomplete, no nested interactive controls | Empty/filled/focus/invalid/disabled/read-only |
| Tabs / SectionNav | Use the right semantics and preserve state | Active/inactive/focus/loading panel |
| StateBadge | Domain-specific dictionary; shape + text + color | Known/unknown/unavailable, not invented state |
| Selector | Search, keyboard navigation, selection, clear, loading and permission-aware data | Empty/search/no match/loading/error/multi-select |
| EmptyState | Explain why there is no data and what can happen next | First use/filtered/error/no permission |
| Dialog / Drawer | Correct role, focus management, Escape policy, focus return; retain context | Open/close/pending/error/unsaved |
| Toast / Banner | Proportional interruption; readable text; meaningful recovery | Success/info/error/dismiss/retry |

## Form validation

- A person's name is not an ASCII identifier. Permit the supported Unicode writing systems according to a documented business contract; do not require `[A-Za-z0-9]` for display names.
- Trimming/required/length policy belongs to field semantics and backend contract. Never silently normalize personal names destructively.
- Error text appears below the full-width input, associated through `aria-describedby`; invalid controls set `aria-invalid`.
- On submit, focus the first invalid field or a linked error summary. Validate politely, not a red error before the user has had a chance to type.
- Passwords, phone numbers and verification codes retain their existing auth/security contracts. Visual work must not weaken validation or expose account existence.

## State dictionary

Keep separate domains: connection (connected/disconnected/connecting/unknown), execution (queued/running/completed/failed/paused), resource (draft/active/archived), approval (pending/approved/rejected), permission (available/restricted). Use real API state; a blank field cannot be labelled connected.

## Overlay priority

1. User-requested destructive confirmation or blocking task error.
2. Required connection/session recovery.
3. Optional onboarding / What's New.

Only one modal owns focus at a time. Queue/defer optional prompts, deduplicate repeated events, restore focus to the invoker. A failure toast is not allowed to cover the recovery action. The audit's double-modal finding was not reproduced in its later capture pass; this rule is a design safeguard, not a claim that every session currently stacks dialogs.

## Honest behavioral design

Use helpful defaults, scannability, clear sequence, real progress and useful previews. Do **not** use fake “already completed” progress, shame-based decline copy (such as “I'll risk it”), forced cost anchors, invented urgency or forced-choice upgrades. Defaults affecting permissions, cost, export scope or destructive actions require explicit user intent.

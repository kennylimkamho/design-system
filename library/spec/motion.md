# Micro-animation system

**User direction: rich micro animations throughout the experience.** Motion is part of the interface language, not an occasional flourish. Every interactive primitive should have a considered response. Richness comes from many small, coordinated responses to real input/state—not permanent movement everywhere.

## Vocabulary

| Interaction | Motion | Timing / limit |
|---|---|---|
| Button hover / focus | 1px lift + icon response + border/shadow refinement | 180ms; keyboard equivalent |
| Button press | Compress to 0.98 then return | 100–140ms; never move the hit area out from under the pointer |
| Primary navigation | Accent glyph settles; selected surface appears | 220–320ms; once per change |
| Secondary navigation | Label/icon shifts 2px; selected tint | 180ms; no width changes |
| Tab selection | Underline reveals, panel fades/translates 4px | 220ms; no loading delay added |
| Field focus | Border + restrained focus halo | 180ms; real focus outline remains |
| Checkbox / choice card | Check/tint appears; small bounded selection pop | 140–180ms; row position stays fixed |
| Switch | Thumb glides and state label changes | 180ms; `aria-checked` changes immediately |
| Pending → success | Real pending indicator → drawn check | Pending only while work is pending; one 320ms check |
| Copy feedback | Copy glyph changes to check after actual success | One 220ms response; failures are not success |
| Progress | Bar grows from actual completed steps; number settles | 280ms; no invented head start |
| Accordion | Chevron rotates; newly disclosed content fades in | 220ms; closed content leaves focus order |
| Toast | 6px rise + opacity; dismiss fades out | 220ms in / 160ms out; never blocks work |
| Dialog | Small scale/opacity entrance | 200ms; focus management is not delayed |
| Module and utility icon gallery | One tiny shake on hover or focus; no fade | 420ms, about 1px / 3°; no idle looping; reduced-motion static |
| Analytics chart / table loading | Abstract bars and rows breathe in a restrained stagger | Only while the real request is pending; pause offscreen or when tab is hidden; no artificial completion timer |

## Analytics skeleton learning

The richer Analytics prototype helped establish a useful rhythm, but numbers, navigation, brand marks and campaign-like rows made a loading state look like loaded content. Production skeletons must stay unmistakably provisional. Show only the chart and table shapes needed to preserve layout; do not put labels, counts, customer data or decorative dashboard chrome inside them. Loading controls and actual ready/error/cancelled states belong to the consuming page, outside the skeleton.

Use the package-backed `ChartLoadingSkeleton` and `TableLoadingSkeleton` for chart/table placeholders. Their `active` prop must follow the actual request lifecycle, not a timer. Unmount on success, error or cancellation; the caller then renders a verified result or an actionable state. Honor `prefers-reduced-motion`, pause motion when offscreen or the tab is hidden, and retain a text status for assistive technology. The offline Motion Lab specimen demonstrates the visual language only; it makes no API call and contains no sample KPI.

## Implementation rules

- Use shared durations/easing tokens. Transform and opacity do most of the work; avoid animating huge surfaces, blur or every table row.
- Input state, permission checks and button-disabled state update synchronously. Animation must not become an artificial wait, extra click or delayed accessible announcement.
- Repeated activation cancels/replaces transient feedback rather than queuing a backlog. Pending buttons prevent duplicate requests; toast announcements are debounced.
- Meaningful loaders can rotate only while pending. Decorative/idle loops are reserved for opt-in marketing contexts with pause; none are added to the workspace shell.
- Never auto-scroll the user to “show” an animation. Keep reading position and focus stable.
- Active, disabled, error and success states remain understandable in a screenshot; motion cannot be the only explanation.
- Canvas drag/drop, huge virtual lists and rich inbox messages get scoped performance profiling before animation is added.

## Reduced-motion contract

Honor `prefers-reduced-motion: reduce`. The studio additionally offers an in-page “reduce motion” switch; it may reduce motion further, never override an OS request for less. CSS transitions/animations and Web Animations respond to the same preference. Cancelling motion does not cancel the task or hide feedback.

## Studio coverage

Navigation, tabs, controls, fields, table selection, choice cards and dialog have micro feedback. The live playground adds a switch, a **clearly labelled simulated** pending→success button, real user-advanced three-step progress, toast and disclosure. Simulation does not call the App, claim a real save, or create customer data.

## Before production

Test all states with keyboard/touch/mouse, OS reduced motion, 200% zoom and actual low-powered devices. Check animation cancellation, fast repeated clicks, screen-reader timing, no layout shift, no flashing, and that the backend result—not a timer—drives success. The studio's simulated delay must never become production save logic.

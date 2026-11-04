# Live-state design concerns · app-derived patterns

**Status:** Design System proposal, 2026-09-29. These rules generalise observations from the local frontend working tree; that tree is uncommitted and changing. They are not evidence that the App, backend, or analytics already satisfy every rule. Existing API, permissions, navigation, and release decisions remain authoritative until separately reviewed.

## 1. One first outcome, verified in stages

The first-use Home experiment makes the primary action depend on the real WhatsApp connection state: checking → view channels; disconnected → connect; connected → open Inbox and send a real message. This is a useful pattern, not a mandate that every organisation must use WhatsApp first. The relevant promise is **a first useful conversation**, not completion of a tour or an animated progress card.

| Evidence | Interface response | Completion boundary |
| --- | --- | --- |
| Connection state not yet known | Say “checking”; offer a safe way to view channels | No completed step |
| No connected channel | Show one primary connect action and the relevant prerequisites | Only the service-confirmed connection milestone may complete |
| Channel connected, no observed conversation | Show the connected identity and a specific send-and-check instruction | Do not mark the conversation milestone complete |
| Conversation observed in Inbox | Show the resulting conversation and a relevant next task | Complete only from the real event; do not infer it from a click |

Keep later setup, role recommendations, team invitations, and education available but secondary until the immediate outcome is understandable. Do not hard-code a recommended channel or next step when account, role, permissions, or connected channels differ. If the frontend does not have evidence of a conversation, say what the user can do next; do not fake confirmation.

## 2. Resolve collection state before choosing the surface

An empty array is not a first-use state. The Knowledge Base and AI agent working screens distinguish a successful, settled, unfiltered empty response from a search with no matches. The same distinction applies to Message flows, Broadcasts, and other record workspaces. Use a single state decision order:

1. Loading or pagination pending: retain the previous stable view if possible; do not announce zero.
2. Fetch error: show retry and preserve query, selection, and context.
3. Permission/plan/channel gate: explain the actual blocker and permitted next action.
4. Successful unfiltered empty result: show capability, one concrete example, and one real Create/Connect action.
5. Successful filtered no-match: keep the query/filter visible and offer a precise clear or edit action; never replace it with a first-use tutorial.
6. Populated result: show the management surface best suited to the job, with a single primary action.

No duplicate “Create” action in the global header and first-use panel at the same time. Search results and first-use are different information states, not just different illustration choices. A count may say zero only after an authoritative settled response for the same scope.

## 3. Keep task evidence visible; disclose low-frequency controls

In navigation and workspaces, identity, active location, unread state, connection status, and the next essential action remain visible. Low-frequency settings, disclosure chevrons, edit affordances, and row actions may appear on hover **and** `:focus-within`; on touch/no-hover they need an always-reachable equivalent. The hover transition may be subtle, but it must not move surrounding content or hide a control as focus enters it. Reduced motion removes ornamental transforms without hiding content.

Unread badges carry data certainty. An exact 6 is “6 unread”; a partial count of 6 with more pages is “6+” visually and “at least 6” for assistive technology. A cap such as 99+ cannot silently become the exact value 99. Use tabular numerals and a badge border/background that remains stable across hover and selected rows. Status is not color alone.

## 4. Help is task recovery, not a compulsory tour

Open relevant help in the context of the current feature, while keeping the task recognisable. On narrow viewports an anchored popover may become a full-screen dialog, but there must be one clear overlay owner: opening support from help closes or replaces help before the next dialog takes focus. Manage focus entry, Escape/Back, and return focus. Offer a named close control.

If embedded help is slow or fails, show the state and an explicit Retry plus an external article fallback where an approved article URL exists. A loading spinner alone is not a recovery path. Tutorial links can be contextual after intent, confusion, or error; they do not displace the primary task action. Avoid claiming support availability or response time without service evidence.

## 5. Availability and metrics must be earned

A capability page can introduce prerequisites, available actions, approval boundaries, safety notes, and a next step; it cannot declare a connector “available”, claim an approval policy, or promise an API scope solely because the UI exists. Tie availability to shipped feature flags, permissions, backend contracts, and documentation. Distinguish proposed copy and local UI experiments from verified product behavior.

Operational overview and analytics detail answer different questions. Overview can summarise real active/scheduled items and take the user to the correct task. Analytics must show metric definition, denominator, period, timezone, coverage, data freshness, and drill-down. Unknown, partial, empty, and error are not zero. A chart or rate is withheld when its denominator or coverage cannot support it; do not fill the space with invented progress or a flattering estimate.

## Evidence and acceptance

Read-only observation of the App working tree on 2026-09-29 (local paths in `frontend-dashboard-kenny-working-20260928`):

| Concern | App evidence | Design System conclusion |
| --- | --- | --- |
| First real win | `src/GettingStarted/HomePage.tsx` | State-dependent CTA; connection and conversation are separate milestones |
| Collection states | `src/AI/KnowledgeBase/List.tsx`, `src/AiChatbot/List.tsx` | Settled empty ≠ filtered no-match; error/loading are separate |
| Progressive disclosure | `src/Router/DesktopSidebar.tsx`, `src/Components/WorkspaceNavigation.tsx` | Essential cues stay visible; secondary controls work on hover/focus/touch |
| Count certainty | `src/Router/DesktopSidebar.tsx` | Exact and lower-bound badges have matching visual and spoken semantics |
| Contextual recovery | `src/Components/HelpCenterPopover/HelpCenterPopoverContext.tsx` | One overlay owner; slow embedded help offers retry and safe fallback |
| Product claims and data | `src/Integrations/McpComingSoon.tsx`, `src/Broadcasts/OverviewDashboard/index.tsx` | Verify capability claims and metric definitions before standardising copy |

Before adopting a pattern, review each relevant state at desktop and mobile widths, with mouse, keyboard, touch, English and Chinese copy, reduced motion, and the existing permissions. Record the backend event or data source supporting each completion, count, capability claim, and metric. If evidence is missing, label the design decision open rather than presenting a sample as production truth.

Related: [feature workspaces](feature-workspaces.md), [navigation](navigation.md), [data display](data-display.md), [components and states](components.md), [accessibility/content](accessibility-content.md), [motion](motion.md).

# App → Design System runtime extraction map

This is a staged code map, **not** a claim that every module has already migrated. The App checkout inspected on 2026-09-29 is actively changing; re-check a module's source and behavior immediately before each extraction. Package examples use callback-supplied data, never live account data. Keep the product's router, API clients, auth/plan gates, mutations and persistence in the App.

| Product area | Observed App source / first reusable seam | Design System status |
|---|---|---|
| App shell / primary menu | `src/Router/DesktopNavigationShell.tsx`, `DesktopSidebar.tsx`, `src/Components/NavigationPageIcon.tsx` | **Extracted now:** `NavigationRailShell`, `Sidebar`, `ModuleIcon`, `ChatDaddyMark`, `navigationShell` tokens; real Storybook interactions. App import migration pending. |
| Contextual secondary menus | `src/Components/WorkspaceNavigation.tsx` | **Extracted now:** `WorkspaceNavigation` with route-link semantics and collapsed labels; App import migration pending. |
| Inbox views / channel / assignee filters | `src/InboxV2/FilterPanel/ConversationFilters.tsx`, `FilterIdentityRows.tsx` | **Extracted now:** controlled `ConversationFilterList`, `InboxChannelFilterRow`, `InboxAssigneeFilterRow`; query and reconnect callbacks stay in App. Conversation row actions, composer and saved filters still pending. |
| Home / Getting Started | `src/GettingStarted/HomePage.tsx`, `Sections/StatsCards.tsx` | Candidate: task-first activation card and honest metric-state primitives. Validate connected-vs-verified-first-outcome logic before port. |
| Channels / Integration | `src/ManageChannels/ChannelPickerCard.tsx`, `src/AppStore/AppStoreFilters.tsx` | Candidate: connect/reconnect cards, channel identity and capability filters. Keep OAuth, account health and permission checks in App; no simulated success. |
| Contacts / CRM | `src/CRM/CRMHeader.tsx`, `TicketList.tsx`, `FilterSelectors/` | Candidate: workspace header, view controls, filter chips and list/board cards. Preserve real search, sort, permissions and selection scope. |
| Automation / Flow Builder | `src/FlowBuilder/MessageFlowWorkspaceHeader.tsx`, `FolderSidebar.tsx`, `Nodes/NodeEditorSidebar.tsx` | Candidate: workflow sidebar, editor toolbar and node property fields. Graph state, draft safety and publish mutation stay in App. |
| Broadcasts | `src/Broadcasts/List.tsx`, `ContactHealthFilterSection.tsx` | Candidate: campaign list/status, audience filter and scheduling controls. Reach/health estimates need verified backend evidence. |
| AI | `src/AiChatbot/List.tsx`, `TestYourAIAgentPanel.tsx` | Candidate: agent card, testing panel and knowledge-state feedback. Model calls and capability gates stay in App. |
| Calls | `src/Calls/CallsList.tsx`, `CallsFiltersControl.tsx`, `CallsMobileFilter.tsx` | Candidate: call list, temporal filters and compact/mobile variant. Live call state and telephony API remain external. |
| Analytics | `src/Dashboard/AnalyticV2/AnalyticHeader.tsx`, `AnalyticListLayoutViewer.tsx` | **Extracted DS pattern:** `ChartLoadingSkeleton` and `TableLoadingSkeleton` with real-request-state lifecycle, reduced-motion and visibility pause; App import migration pending. Scoped date/filter bar, KPI card and table/list view remain candidates. Never hard-code a total from paged data. |
| Shop / products | `src/Shop/`, `src/Products/` | Candidate: product card, inventory status and commerce action patterns. Check price, inventory and payment contracts first. |
| Settings / Billing / Team | `src/Settings/`, `src/Subscriptions/`, `src/Team/` | Candidate: settings sections, preference row, destructive confirmation and invite states. Security/billing mutations remain in App. |
| Login / Onboarding | `src/Loginv2/`, `src/Onboardingv2/`, `src/AuthOnboarding/` | Candidate: responsive auth shell, stepper and recoverable validation. Keep authentication providers, redirects and verification in App. |

## Definition of a genuine extraction

1. Identify a production source file, its active route and every external dependency. Copy the interaction contract and visual structure, not the store/API implementation. Record the source mapping in the component docs.
2. Export a typed component from a workspace package. Put real states and callbacks in Storybook, importing **that package**, with keyboard, focus-visible, touch and reduced-motion equivalents.
3. Validate package build, Storybook build, counts/permissions/empty/loading/error states, narrow layouts and long labels. Only after these checks may a separate App change replace the local implementation.
4. If App behavior and an older handbook proposal conflict, label the current observed behavior and decision status; do not silently change either system or imply that a DS export is already deployed in the App.

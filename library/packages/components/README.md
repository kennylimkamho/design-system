# @chatdaddy/components

Shared UI components for ChatDaddy. Query-agnostic — components accept data as props rather than fetching internally.

## Categories

### Inputs
- `SearchField` — TextField with search icon, clear button, and built-in debounce
- `PhoneNumberInput` — International phone input with country code dropdown and flag
- `CopyButton` — Icon button that copies text to clipboard with "Copied!" feedback
- `FileUploadDropzone` — Drag-and-drop file upload area with paste support and previews

### Selectors
- `SelectorPopover` — Generic search + virtualized list in a Popover (base for all selectors)
- `TagSelectorDropdown` — Tag multi-select with color dots. Accepts `tags` prop (query-agnostic).
- `ChannelSelector` — Channel picker with platform icons. Accepts `channels` prop (query-agnostic).
- `ContactSelector` — Searchable contact picker with avatars. Accepts `contacts` prop + infinite scroll callbacks.
- `TeamMemberSelector` — Team member picker with avatars. Accepts `teamMembers` prop.

### Display
- `TagChip` — Small chip with colored dot. Deterministic color from tag name hash.
- `VirtualScrollList` — Generic virtualized scroll list (TanStack Virtual). Auto-switches to plain list for <50 items.
- `PaginatedDataGrid` — MUI DataGrid with auto-fetch on page navigation. Works with useInfiniteQuery pattern.

### Feedback
- `ConfirmDialog` — Generic confirmation dialog (delete, archive, assign, etc.)
- `DeleteConfirmDialog` — Specialized delete confirmation dialog

### Layout
- `PageWrapper` — Unified page wrapper with consistent border-radius, shadow, and background
- `NavigationRailShell` — App-derived 56/230px hover/focus overlay with persistent pin and Escape behavior
- `Sidebar` — App-derived primary menu with grouped routes, module glyphs and honest unread badges
- `WorkspaceNavigation` — 232/76px contextual route menu (not tabs)

### Inbox
- `ConversationFilterList` — Exclusive, controlled view filters with counts
- `InboxChannelFilterRow` — Channel identity/health, unread state and optional permission-gated reconnect callback
- `InboxAssigneeFilterRow` — Compact assignee selection and scoped count/loading state

These components are importable and demonstrated with real interactions in Storybook under **Organisms/App-derived navigation** and **Organisms/App-derived Inbox filters**. The App still supplies routing, permissions, data, localization and API mutations; exporting here does not migrate the product. See the [all-module extraction map](../../spec/module-code-extraction.md).

## Usage

```tsx
import {
  SearchField,
  TagChip,
  ConfirmDialog,
  VirtualScrollList,
  PageWrapper,
} from '@chatdaddy/components'
```

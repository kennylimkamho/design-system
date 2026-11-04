// ─── Inputs ──────────────────────────────────────────────────────────────────

export { SearchField } from './inputs/SearchField'
export type { SearchFieldProps } from './inputs/SearchField'

export { PhoneNumberInput } from './inputs/PhoneNumberInput'
export type { PhoneNumberInputProps } from './inputs/PhoneNumberInput'

export { CopyButton } from './inputs/CopyButton'
export type { CopyButtonProps } from './inputs/CopyButton'

export { FileUploadDropzone } from './inputs/FileUploadDropzone'
export type { FileUploadDropzoneProps } from './inputs/FileUploadDropzone'

// ─── Selectors ────────────────────────────────────────────────────────────────

export { SelectorPopover } from './selectors/SelectorPopover'
export type { SelectorPopoverProps } from './selectors/SelectorPopover'

export { TagSelectorDropdown } from './selectors/TagSelectorDropdown'
export type { TagSelectorDropdownProps, Tag } from './selectors/TagSelectorDropdown'

export { ChannelSelector } from './selectors/ChannelSelector'
export type { ChannelSelectorProps, Channel } from './selectors/ChannelSelector'

export { ContactSelector } from './selectors/ContactSelector'
export type { ContactSelectorProps, Contact } from './selectors/ContactSelector'

export { TeamMemberSelector, NOBODY_ID } from './selectors/TeamMemberSelector'
export type { TeamMemberSelectorProps, TeamMember } from './selectors/TeamMemberSelector'

// ─── Display ─────────────────────────────────────────────────────────────────

export { TagChip } from './display/TagChip'
export type { TagChipProps } from './display/TagChip'

export { VirtualScrollList } from './display/VirtualScrollList'
export type { VirtualScrollListProps } from './display/VirtualScrollList'

export { PaginatedDataGrid } from './display/PaginatedDataGrid'
export type { PaginatedDataGridProps } from './display/PaginatedDataGrid'
export { ChartLoadingSkeleton, TableLoadingSkeleton } from './display/AnalyticsLoadingSkeletons'
export type { AnalyticsLoadingSkeletonProps, TableLoadingSkeletonProps } from './display/AnalyticsLoadingSkeletons'

// ─── Feedback ────────────────────────────────────────────────────────────────

export { ConfirmDialog } from './feedback/ConfirmDialog'
export type { ConfirmDialogProps } from './feedback/ConfirmDialog'

export { DeleteConfirmDialog } from './feedback/DeleteConfirmDialog'
export type { DeleteConfirmDialogProps } from './feedback/DeleteConfirmDialog'

// ─── Layout ──────────────────────────────────────────────────────────────────

export { PageWrapper } from './layout/PageWrapper'
export type { PageWrapperProps } from './layout/PageWrapper'

export { AppShell } from './layout/AppShell'
export type { AppShellProps } from './layout/AppShell'

export { Sidebar } from './layout/Sidebar'
export { formatNavigationBadge } from './layout/navigationBadge'
export type { NavigationBadgeValue } from './layout/navigationBadge'
export type { SidebarProps, SidebarNavItem } from './layout/Sidebar'

export { NavigationRailShell } from './layout/NavigationRailShell'
export type { NavigationRailShellProps, NavigationRailState } from './layout/NavigationRailShell'

export { WorkspaceNavigation } from './layout/WorkspaceNavigation'
export type { WorkspaceNavigationProps, WorkspaceNavigationItem } from './layout/WorkspaceNavigation'

// ─── Inbox ───────────────────────────────────────────────────────────────────
export { ConversationFilterList, InboxChannelFilterRow, InboxAssigneeFilterRow } from './inbox/InboxFilters'
export type { ConversationFilterItem, ConversationFilterListProps, InboxChannelFilterRowProps, InboxAssigneeFilterRowProps } from './inbox/InboxFilters'
export { formatScopedCount } from './inbox/inboxCount'
export type { ScopedCount } from './inbox/inboxCount'

export { Navbar } from './layout/Navbar'
export type { NavbarProps } from './layout/Navbar'

export { TeamSwitcher } from './layout/TeamSwitcher'
export type { TeamSwitcherProps, Team } from './layout/TeamSwitcher'

export { ToastStack } from './layout/ToastStack'
export type { ToastStackProps, Toast } from './layout/ToastStack'

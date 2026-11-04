// Curated package-backed examples only. Older Storybook stories are not
// evidence that a pattern is current or approved for App rollout.
export const runtimePatterns = [
  {
    id: "primary-rail",
    title: "Primary navigation · hover / pin rail",
    chapters: ["start", "navigation", "implementation"],
    description: "已抽出 App 導覽行為：hover / focus 展開、pin 保留空間、Escape 關閉。路由、權限及資料仍由 App 提供。",
    source: "packages/components/src/layout/NavigationRailShell.tsx",
    story: "organisms-app-derived-navigation--primary-rail",
    code: `import { NavigationRailShell, Sidebar } from '@chatdaddy/components'

<NavigationRailShell routeKey={activeId} contentId="app-main">
  {({ expanded, pinned, onTogglePin }) => (
    <Sidebar items={items} activeId={activeId}
      open={expanded} pinned={pinned}
      onTogglePin={onTogglePin} onToggle={onTogglePin} />
  )}
</NavigationRailShell>`,
  },
  {
    id: "secondary-menu",
    title: "Secondary menu · route destinations",
    chapters: ["navigation", "implementation"],
    description: "同一模組內嘅長期目的地，用真正連結；唔係 tabs 或篩選。已抽出展開／收起與鍵盤可達狀態。",
    source: "packages/components/src/layout/WorkspaceNavigation.tsx",
    story: "organisms-app-derived-navigation--secondary-menu",
    code: `import { WorkspaceNavigation } from '@chatdaddy/components'

<WorkspaceNavigation title="Inbox" items={routes}
  activeId={activeRoute} onSelect={setActiveRoute}>
  <InboxPage />
</WorkspaceNavigation>`,
  },
  {
    id: "inbox-filters",
    title: "Inbox · views, channel & assignee filters",
    chapters: ["start", "inbox", "implementation"],
    description: "受控篩選、單列身份及 scoped count；連線重試只喺可達嘅次要操作出現。數量、健康狀態及 reconnect 由 App 負責。",
    source: "packages/components/src/inbox/InboxFilters.tsx",
    story: "organisms-app-derived-inbox-filters--controlled-filters-and-actions",
    code: `import { ConversationFilterList } from '@chatdaddy/components'

<ConversationFilterList items={views}
  activeId={activeView} onChange={setActiveView} />`,
  },
  {
    id: "module-icons",
    title: "Module icons · approved glyph set",
    chapters: ["start", "icons", "icon-identity", "implementation"],
    description: "12 款 ChatDaddy module glyph 已有 package export；只代表模組識別，唔可以代替品牌／渠道 logo。",
    source: "packages/icons/src/ModuleIcon.tsx",
    story: "icons-moduleicon--all-approved-modules",
    code: `import { ModuleIcon } from '@chatdaddy/icons'

<ModuleIcon name="inbox" size={24} />`,
  },
  {
    id: "analytics-loading-skeletons",
    title: "Analytics · chart / table loading skeletons",
    chapters: ["motion-lab", "analytics", "states", "implementation"],
    description: "兩款 package-backed 骨架只顯示抽象形狀；載入由 App 真實 request state 控制。離開視野／隱藏 tab 停動效，OS reduced motion 保持靜態。",
    source: "packages/components/src/display/AnalyticsLoadingSkeletons.tsx",
    story: "organisms-analytics-loading-skeletons--chart-and-table",
    code: `import { ChartLoadingSkeleton, TableLoadingSkeleton } from '@chatdaddy/components'

<section aria-busy={loading}>
  {loading ? <><ChartLoadingSkeleton /><TableLoadingSkeleton /></>
    : error ? <RetryState error={error} />
    : <VerifiedAnalytics data={data} />}
</section>`,
  },
];

export const storybookUrl = (story) =>
  `https://kennylimkamho.github.io/design-system/lab/?path=/story/${story}`;

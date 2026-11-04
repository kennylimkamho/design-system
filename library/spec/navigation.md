# Navigation contract

## The hierarchy

**Primary menu → contextual secondary menu → page/task → tabs if the same task has peer panels.** This is a decision rule, not a requirement to display three bars on every page.

| Pattern | Use when | ChatDaddy example | Semantics |
|---|---|---|---|
| Primary menu | Switching product areas | Inbox, Contacts, Automation, Settings | Named `nav` + route links; current page identified |
| Secondary menu | Switching durable workflows inside an area | Automation: Flows / Keyword replies / Run history | Contextual `nav` + links; deep link and Back work |
| Tabs | Showing peer panels of the same object/task | Contact: Overview / Activity | `tablist`, linked `tab`/`tabpanel`; arrow keys; one tab stop |
| Segmented control | Changing representation of the same data | List / Board | Labelled single-choice group; preserve scope |
| Filter / saved view | Narrowing the same dataset | All / Unread / Mine; status; dates | Selected state + count/scope; not a product-level menu |
| Page anchors | Jumping within a document | Billing Plan / PAYG / Add-ons | Anchors with meaningful headings |
| Action menu | Choosing a command | Export / Duplicate / Archive | Button + popup; not a navigation sidebar |

Do not apply `role="menubar"` just because the product calls it a menu bar. Ordinary route links in a named navigation landmark are usually correct. True application menus have a different keyboard contract.

## Current App-derived desktop shell

- Light cool-grey primary rail: **56px** collapsed, **230px** expanded; hover/focus previews an overlay, while pinning alone reserves 230px. The pin preference persists locally; Escape dismisses an unpinned preview and restores main-content focus. These dimensions come from `DesktopNavigationShell.tsx`, not the older 64/224 proposal.
- Secondary panel: **232px** expanded, **76px** icon-only, contextual route links with readable labels. In constrained editors it may become a horizontal section bar or explicit disclosure. These dimensions come from `WorkspaceNavigation.tsx`.
- Main area: `min-width: 0`; page title and primary action above content. Avoid duplicated breadcrumb/page titles and multiple competing primary CTAs.
- Breadcrumbs use the destination's module icon and one name per hierarchy level. If a sole child repeats its parent label, collapse the duplicate rather than rendering “Broadcasts › Broadcasts”. A parent rail item stays visibly active while a descendant is current, without falsely declaring the parent itself as `aria-current="page"`.
- Active primary: tinted surface + indicator/shape + label. Active secondary: tint + weight. Active tab: underline + text weight. Do not use identical pills for all three levels.
- Hover preview is optional; click/focus/touch must work. Leaving a panel must not close it while focus or its popup remains inside. Pinning is a persistent preference; hover is temporary state.
- Counts belong to their data scope and permission context. Do not invent totals if only one page is loaded.

### Live code and ownership

The importable equivalents are `NavigationRailShell`, `Sidebar` and `WorkspaceNavigation` in `@chatdaddy/components`, plus the twelve canonical `ModuleIcon` glyphs in `@chatdaddy/icons`. Storybook's **Organisms/App-derived navigation** stories render those exact components and demonstrate hover/pin, grouped destinations, lower-bound unread counts, keyboard focus and collapsed secondary navigation. Their source was the actively changing frontend working checkout observed on 2026-09-29; the App has **not** been migrated to these package imports by this extraction.

The App still owns React Router links, route/plan/permission gates, localization, badge query data, profile actions and mobile navigation. The shared shell never fetches counts or reads auth state. The icon package contains the twelve approved canonical module glyphs; additional App-local menu glyphs remain candidates, not silently promoted to approved assets. See [module extraction map](module-code-extraction.md).

## Responsive behavior

- Below available width, use an explicit primary-navigation drawer; secondary navigation becomes a labelled disclosure/list. Do not stack three scrollable horizontal strips.
- Keep the current page label visible when a rail collapses. Icon-only collapsed items still need names and tooltips.
- Detail on a narrow screen becomes a dedicated view with a Back control that restores list position, filters and selection.
- 390/768/850/1280/1440px and 200% zoom are test points, not universal device categories. Container space and task determine the transition; do not replace existing breakpoints globally.

## Interaction acceptance

- Refresh/deep link/Back restore the intended area, subsection and object.
- Unsaved edits are handled by existing guards, not discarded by new navigation.
- Tabs use manual activation when panel loading is expensive; automatic activation only for immediate content. Focus order remains predictable.
- Horizontal tabs support Left/Right; Home/End are supported by the example. Every tab has a real ID and a panel relation. Inactive panels are not focusable.
- Secondary selection never clears unrelated data filters without a defined reason.

Reference: [WAI-ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). The archive's Navigation Shell is visual input, not an accessibility-ready implementation; its status/date examples are reclassified here as filters.

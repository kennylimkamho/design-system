# Menu、secondary menu 與 tabs

每一層都回答不同問題；不要因為看起來相似就用同一種控件。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#navigation) · [目錄](README.md)

## 選用決策表



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#navigation--section-1)

| 問題 | 應用模式 | ChatDaddy 例子 |
| --- | --- | --- |
| 切換工作領域？ | Primary navigation（route links） | Inbox / Contacts / Automation |
| 領域內另一個長期功能？ | Secondary navigation（route links） | Flows / Keyword replies / Run history |
| 同一物件另一個內容面？ | Tabs | Contact：Overview / Activity |
| 同一資料不同展示？ | Segmented control | List / Board |
| 縮窄同一資料集？ | Filters / saved views | Unread / Mine / date range |
| 執行一次指令？ | Action menu | Duplicate / Export / Archive |

## 互動契約

- Route links 支援開新分頁、deep link、refresh、Back；不能只改 active 外觀而頁面內容不變。
- Primary current 有 indicator、label、tint；secondary current 用字重與輕背景色差，避免大片深藍搶過內容；tabs 用 underline。三層不要都做一排 pills。Focus ring 仍須清楚可見。
- Collapsed rail 提供 tooltip；hover 展開可用，但 focus / touch 亦可開，且 panel 內有焦點時不收起。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#navigation--section-2)

## Tab keyboard 與狀態

- Tab 進入 tablist 時只落在 active tab；左右鍵移動，Home/End 到兩端。內容即時可顯示才自動 activation。
- 慢速載入的 panel 用 manual activation：箭頭只移焦點，Enter/Space 才載入；切換時不要丟失表單草稿。
- 真 tabs 使用 tablist/tab/tabpanel 關係；一般 route navigation 不加 role=menubar 假扮 application menu。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#navigation--section-3)

## 何時不需要 secondary menu

- 模組只有一個任務時，直接顯示 page；不要造一個只有一項的 second bar。
- 跨模組通知、team switcher 屬全域 shell；object detail 操作屬頁面，不混進 primary rail。
- 目前 primary category 重組未獲最終確認。歷史頁面設想只作研究，不據此即時搬 route 或改 sidebar taxonomy。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#navigation--section-4)

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Primary navigation · hover / pin rail — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-app-derived-navigation--primary-rail) · [原始碼](../../packages/components/src/layout/NavigationRailShell.tsx)
- Secondary menu · route destinations — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-app-derived-navigation--secondary-menu) · [原始碼](../../packages/components/src/layout/WorkspaceNavigation.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/navigation.md](../../spec/navigation.md)
- [packages/components/src/layout/NavigationRailShell.tsx](../../packages/components/src/layout/NavigationRailShell.tsx)
- [packages/components/src/layout/WorkspaceNavigation.tsx](../../packages/components/src/layout/WorkspaceNavigation.tsx)
- [apps/storybook/src/molecules/Tabs.stories.tsx](../../apps/storybook/src/molecules/Tabs.stories.tsx)

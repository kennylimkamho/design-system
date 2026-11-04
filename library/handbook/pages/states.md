# Loading、empty、error 與權限

一個頁面不是只有「有資料」這個狀態。每種狀態都要解釋原因與下一步。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#states) · [目錄](README.md)

## 必交付的 state matrix



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#states--section-1)

| 狀態 | 內容 | 下一步 |
| --- | --- | --- |
| Initial loading | 保留頁面骨架；skeleton或文字 | 不誤顯示0筆或No data |
| First-use empty | 解釋資料用途 | 建立／匯入，依權限顯示 |
| Filtered empty | 目前條件找不到資料 | 清除query／filters |
| Retryable error | 失敗位置及原因（不露敏感資料） | Retry；保留原條件 |
| No permission | 需要的權限及找誰協助 | 返回／聯絡管理員 |
| Read-only | 資料可讀但不能修改 | 清楚原因，不偽裝disabled整頁 |
| Partial / stale | 已載入部分或上次資料時間 | 繼續載入／重新整理 |
| Disconnected | channel/session 連線狀態 | 明確reconnect而非廣泛刷新 |

## Skeleton 與 spinner

- 已知布局用 skeleton；未知短操作用 spinner + text。首屏 skeleton 不包含假的客戶姓名。
- 避免整頁閃爍；refresh 可保留舊資料並顯示更新中。spinner 只在等待真實結果時動，reduced motion 改靜態progress text。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#states--section-2)

## Error recovery

- 重新整理／retry 不丟失 filter、表單草稿或 scroll context。部分批次失敗要列出成功／失敗数量及可重試部分。
- No permission 不以404或空白掩蓋；但登入與帳戶查詢仍須遵循安全政策，不能洩露帳戶是否存在。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#states--section-3)

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Analytics · chart / table loading skeletons — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-analytics-loading-skeletons--chart-and-table) · [原始碼](../../packages/components/src/display/AnalyticsLoadingSkeletons.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/components.md](../../spec/components.md)
- [packages/components/src/display/PaginatedDataGrid.tsx](../../packages/components/src/display/PaginatedDataGrid.tsx)

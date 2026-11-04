# Analytics · 指標與圖表

先說明數字代表什麼、對比什麼，才決定用哪一種圖。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#analytics) · [目錄](README.md)

## 閱讀順序

- PageHeader＋date range/timezone → KPI summary → trend/comparison → detail table。
- 每個KPI帶定義、期間、單位與必要的comparison；例如平均首次回覆時間不等於所有對話回覆時間。
- Summary card可drill down時使用具名link；不是整張無label的clickable div。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#analytics--section-1)

## 選圖規則



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#analytics--section-2)

| 目的 | 圖形 | 必備 |
| --- | --- | --- |
| 時間趨勢 | Line | 時間軸、刻度、缺失點處理 |
| 類別比較 | Bar | 一致baseline、單位、排序 |
| 占比 | Stacked bar / 少量segments | 分母、legend、exact value |
| 精確值 | Table | 數字對齊、日期、排序 |
| 單一概況 | KPI | 定義、期間、相對基準 |

## 顏色與可達性

- 不只靠紅／綠表示好壞：等待時間下降通常是好事；volume下降未必是。配direction與文字說明。
- 提供文字摘要／table替代；tooltip內exact values keyboard也可取得，不只滑鼠pointer。
- Loading、no data、partial data、tracking unavailable分開。未知值不是0。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#analytics--section-3)

## Responsive

- KPI從3–4欄降2／1欄，標題不裁切。Chart寬度改變時減少ticks但保留起止時間；不移除legend意義。
- 下方數字為虛構展示，不代表ChatDaddy實際performance。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#analytics--section-4)

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Analytics · chart / table loading skeletons — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-analytics-loading-skeletons--chart-and-table) · [原始碼](../../packages/components/src/display/AnalyticsLoadingSkeletons.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [apps/storybook/src/templates/DashboardLayout.stories.tsx](../../apps/storybook/src/templates/DashboardLayout.stories.tsx)
- [spec/README.md](../../spec/README.md)

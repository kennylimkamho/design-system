# Motion Lab · 有用嘅微動畫

動畫解釋狀態與因果；視覺驚喜可以有，但唔可以拖慢工作或遮住風險。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#motion-lab) · [目錄](README.md)

## 先講清楚動畫幫緊邊個任務

- 選中、展開、切換工作階段、儲存結果、列表更新都可以有細微動作；動畫應幫用戶知道剛剛發生咩，而非令每件物件一直郁。
- 案例庫每個 before/after 可標示 motion rationale。Broadcast 由 Review 去 Sending 時，位置與狀態連續；失敗需要清楚文字與下一步，唔以震動代替錯誤解釋。

## 互動預設與 reduced motion



| 事件 | 建議時間 | 降動效版本 |
| --- | --- | --- |
| 直接按壓、選取、hover/focus | 150–250ms；transform/opacity 優先 | 即時改變外觀，焦點及文字不消失。 |
| 局部 panel／案例視角切換 | 250–400ms；保持閱讀錨點 | 即時切換，保留同一內容順序。 |
| 成功／錯誤結果 | 服務狀態到達先回饋；不循環慶祝 | 同一文字、圖標及可達操作。 |

## 工具與版權界線

- 動畫規格以 CSS／互動契約描述；Anime.js 可作可選示例而唔成為 App 必須依賴。參考外部社群動畫時要重新設計幾何、授權與可達性，唔直接複製陌生元件。
- 驗收 desktop、touch、鍵盤、prefers-reduced-motion、手冊內『減少動效』開關；動畫不得阻止閱讀、改變 tab order 或延遲完成操作。

## Analytics loading skeleton · 有節奏但仍然係 dummy

- 2026-09-30 嘅檢討：前一個 prototype 嘅圖表柱微跳、呼吸、表格逐行節奏受到肯定，但畫面加入真實感數字、品牌、導航、圖像、campaign 名稱及 timer 後，已經唔似暫時 placeholder。今版只保留 chart 同 table 兩款低資訊密度骨架。
- 灰色短條、少量低飽和青綠、穩定容器尺寸；不顯示數值、日期、可讀名稱、業務狀態或 icon。動效於區塊進入 viewport 才運行，離開視野／tab 隱藏／loading 結束即暫停或卸載；OS 或手動 reduced motion 顯示同一靜態形狀。
- Ready、error、cancelled 由真正 request state 決定，唔靠 timer 切去假數據。載入容器提供 aria-busy 與簡短 status；真正圖表／表格由 App 擁有來源、分母、期間、錯誤及補救。

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Analytics · chart / table loading skeletons — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-analytics-loading-skeletons--chart-and-table) · [原始碼](../../packages/components/src/display/AnalyticsLoadingSkeletons.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/motion.md](../../spec/motion.md)
- [spec/accessibility-content.md](../../spec/accessibility-content.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)

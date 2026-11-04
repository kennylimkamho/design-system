# Motion strategy · 回應、轉場、表現

動畫解釋因果與状态，唔阻住工作；三層動效共用既有規格同 reduced-motion 合約。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#motion-strategy) · [目錄](README.md)

## 三層用途



| 層 | 用途 | 既有規格例子 |
| --- | --- | --- |
| 回應 | 按壓、選取、focus | 按壓 100–140ms；focus 180ms |
| 轉場 | 揭露、切換、dialog | accordion 220ms；dialog 200ms |
| 表現 | 一次狀態回饋或示範 | 已核實成功 check 320ms；icon shake 420ms |

## 狀態先於動畫

- disabled、權限、aria 狀態同輸入回應即時更新。pending 只喺真實工作未完成時存在；唔用計時器冒充成功。
- 草稿嘅時間區間唔取代現有 tokens。實作引用 spec/motion.md，同時顯示文字狀態、來源及可操作下一步。

## 降動效同中斷

- 系統 reduced motion 同手冊開關都可減少動作；焦點、訊息與功能保留。快撳多次要取消／替換回饋，唔排隊播放。
- 流程轉場唔自动捲動；大型 canvas、虛擬列表先作性能驗證，再決定動效範圍。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/src/draft3-adoption.mjs](../../handbook/src/draft3-adoption.mjs)
- [spec/motion.md](../../spec/motion.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)

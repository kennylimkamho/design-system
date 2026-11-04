# Motion language 與 micro animations

豐富的手感來自每一次操作都有合適回應，不是全頁一直動。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#motion) · [目錄](README.md)

## Motion tokens



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#motion--section-1)

| 事件 | 時間 | 方式 |
| --- | --- | --- |
| Press | 140ms | 小幅scale；不移動周圍layout |
| Hover / focus / selected | 180ms | 顏色、border、細微indicator |
| Dialog enter | 200ms | opacity + 少量translate |
| Disclosure / toast | 220ms | 內容/狀態進出；不延遲操作 |
| Panel / tab | 280ms | 局部交接，保留閱讀錨點 |
| Success settle | 320ms | check stroke／短回饋 |
| Exit | 160ms | 快於進場；立即釋放互動限制 |

## Easing 與幅度

- 預設cubic-bezier(.2,.8,.2,1)。控制動效集中在2–6px displacement及0.98–1 scale；不讓table row到處飄。
- 布局先穩定再加動效：保持button寬度、固定icon slot、不讓spinner出現時推開文字。
- Keyboard與pointer都得到selected/focus回饋，但focus不需要先hover才能看見。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#motion--section-2)

## 狀態序列與真實結果

- Press → pending → success/error。API完成前不得顯示成功；錯誤回到可重試狀態。示例明確標為模擬。
- 切換panel時資訊即刻可讀，不等動畫完才啟用controls。快速連按／切換要取消舊timer，不能讓舊結果覆蓋新狀態。
- 離開頁面停止可有的demo工作；長時間busy需可讀文字、timeout/retry策略。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#motion--section-3)

## Performance / reduced motion

- 優先transform與opacity；不對大面積blur、height或box-shadow連續動畫。
- 系統prefers-reduced-motion與頁內開關都能關閉非必要motion；系統reduce不能被頁內full覆蓋。
- Reduced motion仍保留成功／錯誤／selected資訊，僅換成即時或淡入回饋。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#motion--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/motion.md](../../spec/motion.md)
- [packages/tokens/src/motion.ts](../../packages/tokens/src/motion.ts)

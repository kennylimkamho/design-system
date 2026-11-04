# Motion Library · 場景到動效

先試互動，再決定適用場景。參考 transitions.dev 嘅示例導向思路，實作使用 ChatDaddy 規則、色彩與動效時間。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#transitions-reference) · [目錄](README.md)

## 借鑑啲乜，唔借鑑啲乜

- 借鑑：清晰分類、示例先行、可重播、用途同 code 放喺同一位置。手冊閱讀仍然以可搜尋章節為主，唔將每段內容變成卡片。
- 以下六個示例係 ChatDaddy 自行實作，唔係上游程式碼移植、官方合作或 App 已上線功能。唔安裝 agent／付費庫，亦冇外部 runtime。

## 採用對照



| 示例 | ChatDaddy 場景 | 驗收 |
| --- | --- | --- |
| 切換工作視角 | Inbox：待處理／已完成。選中狀態即時改變，唔等動畫。 | 220ms；鍵盤操作、即時文字、可重設、reduced motion |
| 新增訊息提示 | 只喺已收到新事件時更新；以下數字係本地示例，唔係真實 unread。 | 180ms；鍵盤操作、即時文字、可重設、reduced motion |
| 篩選面板揭露 | Inbox 篩選：保留列表位置，展開內容可由鍵盤到達。 | 280ms；鍵盤操作、即時文字、可重設、reduced motion |
| 操作結果回饋 | Contacts 儲存：真正結果到達才可顯示完成。此示例由你手動切換，冇 API。 | 320ms；鍵盤操作、即時文字、可重設、reduced motion |
| 欄位錯誤提醒 | Integration：錯誤文字同補救必須存在；細微 shake 唔可以代替說明。 | 180ms；鍵盤操作、即時文字、可重設、reduced motion |
| 詳情原位展開 | Broadcast 歷史：原位揭露詳情，唔做無關嘅全頁 zoom 或模糊。 | 220ms；鍵盤操作、即時文字、可重設、reduced motion |

## 採用護欄與來源

- Hover 或鍵盤 focus 預覽一次，離開即停止；手機保留播放／重設按鈕。每個動效都有觸發、狀態及取消條件。真實 API 回應唔可以由播放按鈕或計時器假扮；示例只在手冊切換。
- reduced motion 停止現有播放並保留最終文字；連續操作取消上一段。上游網站／品牌保留其權利；唔重新包裝或發布其動畫集合。正式採用前核對實際装置、權限與資料來源。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/src/transitions-reference.mjs](../../handbook/src/transitions-reference.mjs)
- [handbook/src/motion-library.js](../../handbook/src/motion-library.js)
- [handbook/src/library-ui.css](../../handbook/src/library-ui.css)
- [spec/motion.md](../../spec/motion.md)

## 來源與案例證據

- [設計與互動參考 · transitions.dev](https://transitions.dev/)
- [上游 repository（參考，未移植）](https://github.com/Jakubantalik/transitions.dev)
- [上游授權界線](https://github.com/Jakubantalik/transitions.dev/blob/main/LICENSE)

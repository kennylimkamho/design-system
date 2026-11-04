# Hover 與漸進披露

善用hover保持頁面簡潔，讓次要操作在需要時出現；重要功能不能只能靠滑鼠發現。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#hover) · [目錄](README.md)

## 適合hover的情境



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#hover--section-1)

| 情境 | Hover feedback | 等效入口 |
| --- | --- | --- |
| Conversation/table row | 顯示Assign、Add tag、More | focus-within亦顯示；touch常駐overflow |
| Collapsed side panel | 暫時展開label／filters | click/focus可開；pin決定持久狀態 |
| Icon-only utility | tooltip顯示名稱 | focus顯示；accessible label常在 |
| 可點card | border/tint/lift暗示可操作 | focus ring；click才真正執行 |
| Integration / App card | 顯示次要 Settings | 主要「連結」常駐；focus-within 顯示；touch 常駐 Settings / More |
| Compact channel row | 顯示低頻 reconnect / 設定 | 連線狀態及必要身份常駐；focus-within／touch 可達 |
| 內容preview | 輕量補充不改route | 明確preview button，click/touch可打開 |

## Hover 不應做什麼

- 不發送、不刪除、不扣款、不自動改篩選或切換客戶；hover只提供資訊／affordance。
- 主要操作、阻斷任務時唯一的 error recovery、身份、電話（若為工作判斷必要）、狀態及必填說明常駐。Compact row 中已有清楚錯誤狀態與其他恢復路徑時，低頻 reconnect 控件可逐步顯示；不可把恢復能力本身藏掉。
- 教程係內容，不係裝飾 icon；開始連結或遇到錯誤先 contextual reveal，唔好用永久 book icon 搶主要動作。
- Hover preview不能遮住正在閱讀的主要內容，移入preview本身時保持開啟，不要在trigger到panel之間閃退。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#hover--section-2)

## 開關、延遲與focus

- 簡單按鈕hover即時回應；tooltip或大preview可採約150–250ms開啟、100–200ms關閉的候選delay，實測避免晃過誤觸。
- Pointer leave只有在focus也不在panel／其popup內時才hide。Escape可dismiss；click pin後不受pointer leave影響。
- Touch / coarse pointer沒有hover；CSS @media(hover:none)顯示secondary actions或永遠可達的More。Tab focus用focus-within揭示。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#hover--section-3)

## 實際驗收

- 移入row→移到action→移到popup→返回row→離開；途中不能丟失popup。
- Tab進row action、Shift+Tab、Escape、touch、200% zoom；功能一致。
- 狀態點／未讀數留在原位；hover 只換出次要工具，不令電話、名稱或主要 CTA 消失。若 pin 已處理常駐，先確認獨立 collapse 按鈕是否重複。
- 下方示例可hover/focus顯示次要操作，並可pin panel；沒有連接真實conversation。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#hover--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/navigation.md](../../spec/navigation.md)
- [spec/data-display.md](../../spec/data-display.md)
- [spec/icon-identity.md](../../spec/icon-identity.md)

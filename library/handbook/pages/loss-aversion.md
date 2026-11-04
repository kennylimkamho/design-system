# 05 · Loss aversion & status quo

清楚交代變更會失去什麼，以及保留現狀的後果，協助知情決定。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#loss-aversion) · [目錄](README.md)

## 使用場合

- 刪除、取消排程、離開未儲存編輯、停用channel、降級plan等確有損失的動作。
- 列出具體影響：3個排程將停止／未儲存草稿將丟失；unknown dependencies就說未能確認，不編造數量。
- 有undo／復原期間就交代；不可逆才清楚說明不可復原。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#loss-aversion--section-1)

## 尊重使用者的表達

- Do：「離開並放棄未儲存變更？」按鈕「繼續編輯／放棄變更」。
- Avoid：羞辱式「我願意冒險」、假deadline、阻止取消、用含糊confirm取得升級授權。
- 現狀不是永遠最好：若目前連線已失效，應清楚說明現狀問題與恢復路徑，不只強調切換風險。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#loss-aversion--section-2)

## 驗收

- 影響對象與count從真實scope取得；若scope改變要重新確認。
- Cancel預設安全，keyboard初始focus合理。避免重覆兩三次confirmation造成機械式確認。
- 高影響操作既要易理解，也要能明確拒絕；不以提高conversion為由隱藏代價。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#loss-aversion--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)

# 設計交付與版本治理

交付的不只是一張畫面，而是一份工程師能實作、測試者能驗收的契約。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#handoff) · [目錄](README.md)

## 每個feature的設計包



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#handoff--section-1)

| 交付項 | 至少包含 |
| --- | --- |
| Context | 使用者任務、page family、permission與入口 |
| Layout | desktop/narrow、scroll owner、primary/secondary navigation |
| Components | 使用本手冊哪個元件/variant/token；例外理由 |
| States | default/hover/focus/pending/success/error/empty/no permission |
| Data | query/sort/selection/export scope、timezone、missing/long values |
| Interaction | keyboard、touch、Back、unsaved、reduced motion |
| Engineering | source mapping、未有元件、backend dependencies |
| Review | 版本、decision IDs、screenshots、驗收結果及未決事項 |

## 變更流程

- 先改handbook/src及相關spec，再生成HTML/Markdown與tests；有runtime變更同步packages/theme/Storybook。
- PR說清breaking change、影響頁面、migration。Design/product與frontend各自review，選了視覺方向不等於已批production rollout。
- 只有實際完成對應測試才能勾選驗收；未測mobile、screen-reader或backend不寫「全部通過」。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#handoff--section-2)

## 版本策略

- Docs 1.4.0-draft.1 與 runtime 0.1.0 分開；1.0.0 是已確認基準。ModuleIcon 已有 runtime export，新增案例庫與持久工作循環屬文件提案；App 採用仍待 review。文件定版不等於 App 發布。新章節／pattern 是 minor；修字／小規則 patch；breaking token/API 需獨立版本決策。
- 舊0.2 direction studio保留為歷史，不覆寫成新版。Annotations針對新handbook，修改後更新同一editable source再生成新snapshot。
- 原始ZIP留在本機；發布文字只用ChatDaddy品牌，授權notices依法保留。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#handoff--section-3)

## 新設計師的完成標準

- 拿一個未設計過的Contacts或Settings需求，應可從這裡選layout、字級、spacing、元件及全部主要狀態，不需猜尺寸。
- 遇到本手冊未覆蓋的pattern，開具體issue附場景及建議；不要各自悄悄新增一套樣式。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#handoff--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/governance.md](../../spec/governance.md)
- [CHANGELOG.md](../../CHANGELOG.md)

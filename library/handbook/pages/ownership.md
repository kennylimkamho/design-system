# 04 · IKEA effect & ownership

讓使用者命名、配置、試驗自己的工作成果，再決定儲存或發布。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#ownership) · [目錄](README.md)

## 讓成果可見且可恢復

- 流程模板可以rename、調整nodes、看preview，最後另行publish。
- Saved view可先組filter、density、columns，再決定是否存成個人或team view。
- 自訂成果應可undo、reset、export；不要利用投入時間迫人付費才能取回原本輸入。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#ownership--section-1)

## ChatDaddy 例子

- 使用者先組好「未分配的WhatsApp對話」view，再填名字與可見範圍。Save按钮明確說明是個人還是team。
- Broadcast先寫draft與preview；send是獨立確認，不因編輯完成便默默執行。
- Editor有unsaved indicator，離開時可以保存／放棄／取消。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#ownership--section-2)

## 驗收

- 測rename、多次修改、reset、離開返回、權限變化；不破壞之前已存內容。
- CTA要說實際動作。「Continue」可以用於流程下一步，不能用來掩蓋sign-up、付款或發送。
- 下方命名示例僅存於此頁記憶體，reload會重置；不能冒充持久儲存。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#ownership--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)

# Icons 與品牌資產

模組有 ChatDaddy 個性；一般操作使用清晰、熟悉的共通語言。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#icons) · [目錄](README.md)

## 三種身份，加一種操作

- 詳細平台矩陣、WhatsApp 模式及資產來源見下一章『Logo 與 Icon 分層』。本版新提案不代表 runtime 已遷移。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icons--section-1)

| 集合 | 用途 | 規範 |
| --- | --- | --- |
| App icons | 產品與整合 App 身份 | 原裝品牌 mark；32 / 40 / 48px slot |
| Channel icons | 對話來源平台與連接模式 | 平台 logo／獨立審核的模式圖；名稱與運行狀態另列 |
| Module icons | Inbox / Contacts / Automation 等領域 | 12 個 authored SVG；24px grid、2.25 stroke、blue accent（本版提案） |
| Utility icons | search / add / close / filter / delete | Lucide subset；1.75 stroke、單色；不要用 emoji 代替 |

## 尺寸與搭配

- Inline 16px、control 20px、module 24px；不要隨每個 feature 任意選 17/19/23px。
- Icon-only action 必須有 accessible name，hover 及 focus 可見 tooltip；touch 有文字或清晰 context。
- 同一個意思固定一個 glyph。刪除用 trash、關閉用 x、移除 filter 用 x + label；不能用 x 做不可逆刪除。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icons--section-2)

## 狀態與動畫

- Inactive 以中性色；current module 加 tint、文字與 indicator，不單靠變藍。
- Icon gallery 的 module 與 utility 圖示在 hover / keyboard focus 輕搖一次（約 420ms、最大約 3°／1px）；不使用 fade、不持續晃動。正式 App 是否採用要按可點擊語意與效能驗證，不能令純資訊看似可按。
- Utility 不常駐旋轉。Pending spinner 只跟真實 pending；reduced-motion 改為靜態狀態，唔失去 selected 或 feedback。
- RTL 可鏡像方向性箭頭，不鏡像品牌、數字或所有 glyph。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icons--section-3)

## 下載與使用

- 下方可搜尋本版實際 SVG、複製 SVG 或下載單個檔案。這些是設計資產，不代表 runtime AppIcon 已替換。
- 本版確認方向：Integration 採 Connected apps（兩個 App 方塊與定向連接）；AI 採 Brain（腦葉與中央神經軸）；CRM 採 Opportunity card（客戶卡與跟進標記）。三者是主導航 module，不是第三方 App／Channel logo。
- CRM 的卡片圖形表達客戶與跟進結果，不以 Kanban 欄位代表整個 CRM；Integration 的兩個節點要與 Channels 對話來源、Automation 流程節點保持語意區分。
- Utility notices 保留在 repo 及 HTML 中。新品牌資產加入時記錄來源、版本、授權與 fallback。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icons--section-4)

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Module icons · approved glyph set — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/icons-moduleicon--all-approved-modules) · [原始碼](../../packages/icons/src/ModuleIcon.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/icon-map.json](../../spec/icon-map.json)
- [spec/icons.md](../../spec/icons.md)
- [spec/module-icon-decisions.json](../../spec/module-icon-decisions.json)
- [assets/icons/modules/source.json](../../assets/icons/modules/source.json)
- [packages/icons/src/AppIcon.tsx](../../packages/icons/src/AppIcon.tsx)
- [packages/icons/src/PlatformIcon.tsx](../../packages/icons/src/PlatformIcon.tsx)

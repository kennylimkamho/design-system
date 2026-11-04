# Kenny Lim · 點解要有呢套系統

一套設計系統唔止統一畫面，仲要保存產品判斷：用戶點完成工作、點建立信任、點持續進步。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#founder-note) · [目錄](README.md)

## Founder’s Note · 編者按

- Kenny Lim 提出嘅方向係：由用戶真正在做嘅工作出發，而唔係先選一個好睇嘅元件。呢段係設計方向整理，並非 Kenny 嘅逐字引述或公司對外聲明。
- ChatDaddy 嘅設計必須同時回答三個問題：用戶而家做緊咩、下一個有意義嘅行動係咩、完成後可否從真實結果學到嘢。視覺風格、動效、文件、元件都要服務呢條路。
- 同一個產品可以有豐富動畫同鮮明性格，但唔可以用動畫掩蓋錯誤、用空白指標假扮成功，亦唔可以令下一步變得更難搵。

## 設計系統係一份持續更新嘅產品契約

- 基礎元素定義點樣畫；原則定義點樣取捨；模組規格定義領域規則；Flow Design 定義點樣幫用戶達到價值；案例庫記錄每次決策喺現實畫面入面點運作。
- 設計師可以由案例返回規則；工程師可以查狀態同來源；AI Agent 必須讀清楚規範、示例同待驗證假設，唔可以將 draft specimen 誤寫為已部署功能。
- 當 App 同文件唔一致時，先記錄證據同版本，再作新決策；唔靠靜默覆寫令歷史推理消失。

## 成功標準

- 一位新設計師應可指出目標用戶、工作循環、主要動作、風險護欄、必要狀態及驗收條件；單憑相似色彩唔算成功。
- 每個重大模式有來源、負責 review 嘅邊界同採用狀態。Case Study 會講清楚 before/after 點得出，唔把視覺示意當成客戶成效。
- 設計系統要令每次改動更容易解釋、實作同質疑；唔係阻止產品持續演進。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)

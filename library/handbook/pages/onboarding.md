# First-use 與角色導向 onboarding

由第一個成功時刻開始，以角色的職責與客戶價值決定引導內容；Home 或獨立 onboarding 的位置仍待驗證。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#onboarding) · [目錄](README.md)

## 四因子推薦矩陣

- 任何角色化推薦都要能追溯 Role → Responsibility → Capability → Customer value；角色名稱本身不是推薦理由。下表為設計推演示例，不是已驗證的客戶分群。
- 如已有可靠團隊資料，先利用已知上下文；不知道時才問。允許略過、稍後更改，以及一人兼多職責。不要靠一個頭銜決定整個產品路徑。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#onboarding--section-1)

| 示例角色 | 職責 / job | 可探索能力 | 希望產生的客戶價值 |
| --- | --- | --- | --- |
| 業主／負責人 | 知道渠道有否接妥、服務有否漏接 | 連結渠道、待處理概覽 | 客人找到團隊，重要對話有人跟進 |
| Marketing | 讓合適客群收到相關資訊 | 分眾、廣播草稿與預覽 | 減少無關訊息，提升資訊相關性 |
| 客服主管 | 分配工作及維持回覆品質 | Inbox 分配、未讀／未分配 view | 更快發現並處理未回覆對話 |

## 先到第一個真實成功時刻

- 對尚未連接渠道的新團隊，第一個明顯步驟通常是「連結第一個渠道」。顯示能否連結、需要的授權與失敗恢復；成功只在服務確認後標示。
- 邀請團隊、建立自動化或查看指標可以係下一步，但排序依角色職責與已有設定而變；不要把示例順序硬編成所有組織的共同流程。
- Progress 反映真實完成事件，不用假百分比。可暫停並返回，保留已選渠道、授權結果與未完成設定。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#onboarding--section-2)

## 引導只問必要問題，位置仍待驗證

- 先說明功能用途、預期結果及一個具體例子，再邀請使用者設定。對角色、責任或目標的提問須直接改變下一步內容，否則不要增加問卷。
- Home、登入後 onboarding、功能內 contextual help 各有不同成本；角色引導放邊個位置尚未拍板。設計稿需比較返回／略過、跨角色、已有渠道、權限不足及深連結情況。
- 對話中提到的 CEO、Marketing、客服主管係研究情境，不代表已批准的角色選單或文案；要用客戶研究及產品能力再核實。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#onboarding--section-3)

## 交付與驗收

- 交付 Role → Responsibility → Capability → Value 矩陣、主要旅程、分支、空／錯／成功狀態，以及每一步由哪個真實事件完成。
- 測試全新帳戶、已有渠道但未邀請團隊、單人兼多職責、授權失敗、無權限、返回後續做。主要 CTA 必須清楚且可恢復。
- 量度第一個可用渠道成功連接與後續有效使用，而不是只量度點擊 onboarding、看完卡片或接受推薦。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#onboarding--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
- [spec/adoption.md](../../spec/adoption.md)
- [spec/components.md](../../spec/components.md)

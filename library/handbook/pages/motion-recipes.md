# 動效 recipes 與禁忌

把動效落在具體元件上，明確 trigger、完成、打斷與靜態替代。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#motion-recipes) · [目錄](README.md)

## 逐元件 recipes



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#motion-recipes--section-1)

| 元件 | Trigger → feedback | Reduced / interruption |
| --- | --- | --- |
| Button | hover tint → press → pending spinner → check | 文字及busy state保留；不強制最少等待 |
| Tabs | active underline移動＋新panel淡入 | 立即切換；rapid keys不排隊 |
| Switch | thumb滑動＋label狀態更新 | 立即轉位；server失敗rollback |
| Accordion | chevron轉90/180°＋content reveal | 即時展開；關閉後hidden content不可focus |
| Table selection | checkbox/check＋row tint＋bulk bar | 不移動row位置 |
| Navigation | active mark交接＋label emphasis | current route文字與indicator保留 |
| Icon gallery | hover／focus 一次輕搖；無 fade | 約420ms、1px／3°；reduced motion 靜態 |
| App module icon | 按真正可互動狀態局部回應 | 靜態SVG；不永久旋轉sidebar 或品牌 logo |
| Toast | 短上移＋opacity；close退場 | 立即顯示／關閉；不搶focus |
| Drawer | 邊緣少量進場＋scrim | 立即完成layout；focus仍管理 |

## 何時不要動畫

- 輸入游標、連續大量資料更新、錯誤訊息位置、長表格排序、使用者已要求reduce。
- 不要每次scroll進viewport都重新播放整頁動畫；不要讓導航等待動效才能啟動。
- 永久marketing loop需可pause並限於裝飾区域；高頻工作區不用ambient motion。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#motion-recipes--section-2)

## 驗收

- Mouse、Tab、rapid repeated clicks、切頁中途、OS reduce、頁內reduce、慢API／error；視覺效果不能改變business state。
- 下方checkbox／disclosure／switch均可操作；這是示例，不是production動畫已全部遷移。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#motion-recipes--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/motion.md](../../spec/motion.md)

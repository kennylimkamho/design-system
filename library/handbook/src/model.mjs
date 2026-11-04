export const version = "1.4.0-draft.9";
export const releaseLabel = "Version 1.4 · Generic edition";
// Fixed document revision time; rebuilding must not change the published timestamp.
export const updatedAt = "2026-11-04T14:22:33+08:00";
export const updatedAtLabel = "2026-11-04 14:22:33 HKT (UTC+08:00)";
export const groups = [
  "開場",
  "Founder’s Note",
  "基礎元素",
  "Design Principles",
  "Key Modules",
  "業務致勝與 Flow Design",
  "Case Study Library",
  "Motion Lab",
  "AI Agent 使用與版本治理",
  "Industry Info · 行業資訊",
  "檔案庫",
];
export const section = (title, paragraphs = [], table = null) => ({
  title,
  paragraphs,
  table,
});
export const table = (head, rows) => ({ head, rows });
export const page = (
  id,
  group,
  title,
  summary,
  demo,
  sections,
  sources = [],
) => ({ id, group, title, summary, demo, sections, sources });
export const typeRoles = [
  ["Display", "40 / 48", "700", "品牌故事／登入介紹；不要放進資料表"],
  ["Page title", "28 / 36", "600", "每頁唯一主標題"],
  ["Section title", "20 / 28", "600", "頁面主要區段"],
  ["Panel title", "18 / 28", "600", "側欄、卡片群組、dialog 標題"],
  ["Body large", "16 / 26", "400", "引導說明、長段落、手機表單"],
  ["Body / control", "14 / 22", "400 / 500", "桌面正文、欄位、按鈕"],
  ["Supporting", "13 / 20", "400", "列表次要資料、補充說明"],
  ["Caption", "12 / 18", "400 / 500", "非關鍵 metadata；不放主要操作"],
  ["Data / code", "14 / 22", "400", "數字用 tabular-nums；ID 用 monospace"],
];
export const layoutRoles = [
  ["Primary rail", "56px collapsed / 230px expanded", "現有 package 導覽規格；切換產品領域"],
  ["Secondary panel", "232px expanded / 76px collapsed", "現有 package 導覽規格；同一模組內的功能入口"],
  ["Top bar", "56px candidate", "團隊／頁面上下文；現有 runtime 為 54px"],
  ["Content gutters", "24px desktop / 16px narrow", "內容與容器邊界"],
  ["Reading / form width", "640–720px", "長文及單欄設定表單，不拉到全屏"],
  [
    "Data workspace",
    "Fill available width",
    "表格、Inbox、editor 不設閱讀欄上限",
  ],
  ["Detail panel", "320–400px", "保留列表上下文；空間不足改獨立頁"],
  [
    "Grid",
    "12 columns / 24px gap; narrow 4 / 16px",
    "依容器切換，不以手機型號判斷",
  ],
];

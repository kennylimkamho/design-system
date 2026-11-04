import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography, Link, Stack } from "@mui/material";

function DesignerHandbook() {
  return (
    <Box sx={{ maxWidth: 760, p: 3 }}>
      <Typography variant="h1" gutterBottom>
        Product Design System 手冊
      </Typography>
      <Typography sx={{ mb: 3 }}>
        51 章詳細設計規格、任務優先、內容跟住時刻走、角色導向 onboarding、Integration、live-state concerns、九個原則、hover、字體、layout、元件狀態與工程對應。
        本版 1.3.0-draft.1 將 content layer 加入 Handbook，並只為已抽出的 navigation、Inbox filters 和 module icons 提供精準互動示例。Version 1 是已確認的設計基準；其餘舊 Storybook stories 只作參考，唔代表 App 已採用。
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        更新：
        <time dateTime="2026-09-30T00:53:33+08:00">
          2026-09-30 00:53:33 HKT (UTC+08:00)
        </time>
      </Typography>
      <Stack spacing={2}>
        <Link href="https://kennylimkamho.github.io/design-system/handbook/#start" target="_blank" rel="noopener">
          開啟完整手冊（網站主要入口）
        </Link>
        <Link
          href="https://github.com/chatdaddy/design-system/blob/main/handbook/pages/README.md"
          target="_blank"
          rel="noopener"
        >
          GitHub：逐章規格與來源
        </Link>
        <Link
          href="https://github.com/chatdaddy/design-system/pulls"
          target="_blank"
          rel="noopener"
        >
          設計規格 review
        </Link>
      </Stack>
      <Typography variant="body2" sx={{ mt: 3 }}>
        本地開發：執行 npm run build:handbook，再直接開啟 handbook/ 內的
        standalone HTML。dev Storybook 只作元件實驗室；Figma library 及 App
        全量採用不包含在本次交付。
      </Typography>
    </Box>
  );
}

const meta: Meta<typeof DesignerHandbook> = {
  title: "Start here/Designer handbook",
  component: DesignerHandbook,
};
export default meta;
type Story = StoryObj<typeof DesignerHandbook>;
export const Guide: Story = {};

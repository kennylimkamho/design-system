import type { Metadata } from 'next';
import './globals.css';
import './layout.css';
import '@design-system/tokens/dist/tokens.css';

export const metadata: Metadata = {
  title: 'Design System',
  description:
    'A brand-generic design system: foundations, tokens, components, patterns, and the design principles behind them.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
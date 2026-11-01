import type { Metadata } from 'next';
import './globals.css';
import './layout.css';
import './principles/principles.css';
import '@design-system/tokens/dist/tokens.css';

export const metadata: Metadata = {
  title: 'Kenny — Product Design Systems',
  description:
    'ChatDaddy and BobWork design case studies, reusable foundations, components and the product decisions behind them.',
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
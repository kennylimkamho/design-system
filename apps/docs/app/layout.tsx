import type { Metadata } from 'next';
import './globals.css';
import './layout.css';
import './principles/principles.css';
import '@design-system/tokens/dist/tokens.css';

export const metadata: Metadata = {
  title: 'Product Design System — Kenny Lim',
  description:
    'A practical handbook of foundations, components, user journeys, case studies and motion. Designed for people and AI agents.',
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

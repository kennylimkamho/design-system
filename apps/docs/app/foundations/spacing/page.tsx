import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { TokenTable } from '../../../components/TokenTable';

export const metadata = { title: 'Spacing — Foundations' };

const SPACING = [
  { name: '--space-1',  value: '4px',  usage: 'Inline label gaps, icon margins' },
  { name: '--space-2',  value: '8px',  usage: 'Tight vertical rhythm' },
  { name: '--space-3',  value: '12px', usage: 'Default form field gap' },
  { name: '--space-4',  value: '16px', usage: 'Default component padding' },
  { name: '--space-5',  value: '20px', usage: 'Card padding (compact)' },
  { name: '--space-6',  value: '24px', usage: 'Card padding (default)' },
  { name: '--space-8',  value: '32px', usage: 'Section separation' },
  { name: '--space-10', value: '40px', usage: 'Page rhythm' },
  { name: '--space-12', value: '48px', usage: 'Page rhythm (large)' },
  { name: '--space-16', value: '64px', usage: 'Hero / closing section' },
];

export default function SpacingPage() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Foundations / Spacing</p>
          <h1>Spacing</h1>
          <p>
            A 4px base scale. Every margin, padding, and gap in the system
            resolves to one of these steps. Never use raw px values in shipped
            code — pull from this table.
          </p>
          <TokenTable rows={SPACING} />
        </article>
      </main>
      <Footer />
    </>
  );
}
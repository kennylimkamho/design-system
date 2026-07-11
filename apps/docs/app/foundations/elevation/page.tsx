import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { TokenTable } from '../../../components/TokenTable';

export const metadata = { title: 'Elevation — Foundations' };

const SHADOWS = [
  { name: '--shadow-none', value: 'none',                                   usage: 'Flat surfaces' },
  { name: '--shadow-sm',   value: '0 1px 2px 0 rgba(0,0,0,0.04)',           usage: 'Cards at rest' },
  { name: '--shadow-md',   value: '0 4px 12px -2px rgba(0,0,0,0.08)',       usage: 'Cards on hover, dropdowns' },
  { name: '--shadow-lg',   value: '0 12px 32px -4px rgba(0,0,0,0.12)',      usage: 'Modals, popovers' },
];

export default function ElevationPage() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Foundations / Elevation</p>
          <h1>Elevation</h1>
          <p>Four steps of shadow. Lower = at rest, higher = raised.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-5)', margin: 'var(--space-6) 0' }}>
            {SHADOWS.slice(1).map((s) => (
              <div key={s.name} style={{ background: 'var(--color-bg-raised)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: s.value, textAlign: 'center' }}>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>{s.name}</code>
                <p style={{ margin: 'var(--space-2) 0 0', fontSize: '0.875rem' }}>{s.usage}</p>
              </div>
            ))}
          </div>
          <TokenTable rows={SHADOWS} />
        </article>
      </main>
      <Footer />
    </>
  );
}
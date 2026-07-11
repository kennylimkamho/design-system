import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

const PATTERNS = [
  {
    slug: 'empty-states',
    title: 'Empty states',
    principle: 'reciprocity',
    blurb: 'Never leave the user staring at whitespace. Show what will live here, and the smallest step to populate it.',
  },
  {
    slug: 'forms-multi-step',
    title: 'Multi-step forms',
    principle: 'smart-defaults',
    blurb: 'One decision per step. Pre-fill from context. Always show the path so users know what they have left.',
  },
  {
    slug: 'lists-and-tables',
    title: 'Lists & tables',
    principle: 'goal-gradient',
    blurb: 'Count what the user has. Allow bulk actions without confusion. Sort by what they came for.',
  },
  {
    slug: 'errors-and-validation',
    title: 'Errors & validation',
    principle: 'loss-aversion',
    blurb: 'Name what failed. Name the next action. Never block without an exit.',
  },
];

export default function PatternsIndex() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Patterns</p>
          <h1>Patterns</h1>
          <p>
            Compositions of components that solve recurring UX problems. Each
            pattern cross-links back to the principle it embodies — when a
            pattern drifts from its principle, the principle loses its grip.
          </p>
          <ul>
            {PATTERNS.map((p) => (
              <li key={p.slug} style={{ margin: 'var(--space-4) 0' }}>
                <a href={`/patterns/${p.slug}`}><strong>{p.title}</strong></a>
                {' — '}
                <code
                  data-principle={p.principle}
                  style={{
                    fontSize: '0.6875rem',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--color-accent-principlessoft)',
                    color: 'var(--color-accent-principles)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {p.principle}
                </code>
                <p style={{ margin: 'var(--space-1) 0 0', color: 'var(--color-text-secondary)' }}>{p.blurb}</p>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
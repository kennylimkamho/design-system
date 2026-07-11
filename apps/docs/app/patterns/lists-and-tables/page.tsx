import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';

export const metadata = { title: 'Lists & tables — Patterns' };

export default function ListsAndTables() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Patterns / Lists &amp; tables</p>
          <code
            data-principle="goal-gradient"
            style={{ fontSize: '0.6875rem', padding: '2px 6px', borderRadius: 'var(--radius-sm)', background: 'var(--color-accent-principlessoft)', color: 'var(--color-accent-principles)' }}
          >
            Goal Gradient
          </code>
          <h1>Lists &amp; tables</h1>

          <h2>Rules</h2>
          <ul>
            <li>Count what the user has. <code>42 contacts · 8 selected</code> is better than <code>Showing 1–20 of 42</code>.</li>
            <li>Default sort is what the user came for — most-recent for activity, alphabetical for names.</li>
            <li>Bulk actions live in a sticky footer that appears when ≥1 row is selected.</li>
            <li>Row hover reveals contextual actions (edit, archive). Don&apos;t crowd every row with permanent icons.</li>
            <li>Empty state follows the empty-states pattern, scoped to the filtered view.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
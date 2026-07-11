import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { DoDont } from '../../../components/DoDont';

export const metadata = { title: 'Empty states — Patterns' };

export default function EmptyStates() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Patterns / Empty states</p>
          <code
            data-principle="reciprocity"
            style={{ fontSize: '0.6875rem', padding: '2px 6px', borderRadius: 'var(--radius-sm)', background: 'var(--color-accent-principlessoft)', color: 'var(--color-accent-principles)' }}
          >
            Reciprocity
          </code>
          <h1>Empty states</h1>
          <p>An empty list is a contract with the user: name what should be here, and the smallest step to put the first item in.</p>

          <DoDont
            good={<>An empty inbox with one line: "No messages yet — when teammates send you work, it will appear here." Plus a primary CTA to invite a teammate.</>}
            bad={<>A blank page with no copy and no CTA. The user assumes the product is broken.</>}
          />

          <h2>Structure</h2>
          <ol>
            <li><strong>Name the state.</strong> Don&apos;t say &quot;Nothing here&quot; — say what would be here.</li>
            <li><strong>Show value.</strong> An example row, a screenshot, a sample — give the user a sense of what success looks like.</li>
            <li><strong>Offer one action.</strong> The smallest step that produces the first item. One.</li>
          </ol>
        </article>
      </main>
      <Footer />
    </>
  );
}
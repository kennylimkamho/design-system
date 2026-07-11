import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';

export const metadata = { title: 'Multi-step forms — Patterns' };

export default function MultiStepForms() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Patterns / Multi-step forms</p>
          <code
            data-principle="smart-defaults"
            style={{ fontSize: '0.6875rem', padding: '2px 6px', borderRadius: 'var(--radius-sm)', background: 'var(--color-accent-principlessoft)', color: 'var(--color-accent-principles)' }}
          >
            Smart Defaults
          </code>
          <h1>Multi-step forms</h1>

          <h2>Rules</h2>
          <ul>
            <li>One decision per step. If a step has more than one big choice, split it.</li>
            <li>Pre-fill from context (locale, plan, role) — confirm, don&apos;t decide.</li>
            <li>Always show the path: <code>Step 2 of 4 · Account</code>.</li>
            <li>Back is always available. Forward validates before allowing it.</li>
            <li>Save state on every step transition. A refresh returns the user where they left.</li>
          </ul>

          <h2>Anatomy</h2>
          <ol>
            <li>Header: progress + step name.</li>
            <li>Body: one focused question or set of fields.</li>
            <li>Footer: Back / Continue. Right-aligned primary action.</li>
          </ol>
        </article>
      </main>
      <Footer />
    </>
  );
}
import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';

export const metadata = { title: 'Errors & validation — Patterns' };

export default function ErrorsAndValidation() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Patterns / Errors &amp; validation</p>
          <code
            data-principle="loss-aversion"
            style={{ fontSize: '0.6875rem', padding: '2px 6px', borderRadius: 'var(--radius-sm)', background: 'var(--color-accent-principlessoft)', color: 'var(--color-accent-principles)' }}
          >
            Loss Aversion
          </code>
          <h1>Errors &amp; validation</h1>

          <h2>Rules</h2>
          <ul>
            <li>Validate as the user moves — on blur, not on submit. Surprises at submit feel punitive.</li>
            <li>Name what failed and what to do. <em>Never</em> an error code without context.</li>
            <li>Inline errors attach to the field. Form-level errors live above the submit.</li>
            <li>Always offer an exit. A destructive error should still let the user save their work.</li>
            <li>Loss framing is allowed in errors (you&apos;ll lose X if you don&apos;t) — it&apos;s the only context where urgency is honest.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
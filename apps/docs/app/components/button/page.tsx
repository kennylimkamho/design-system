import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { Button } from '@design-system/react';
import { ButtonPlayground } from '../../../components/ButtonPlayground';

export const metadata = { title: 'Button — Components' };

export default function ButtonPage() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Components / Button</p>
          <h1>Button</h1>
          <p>
            Triggers an action. Three variants (primary, secondary, ghost) and three
            sizes (sm 32px, md 40px, lg 48px). Sourced from{' '}
            <code>@design-system/react</code>.
          </p>

          <h2>Specimens</h2>
          <p>Static preview of every variant and size.</p>
          <div
            style={{
              display: 'grid',
              gap: 'var(--space-4)',
              padding: 'var(--space-6)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-bg-sunken)',
              margin: 'var(--space-4) 0',
            }}
          >
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          <h2>Playground</h2>
          <ButtonPlayground />

          <h2>When to use</h2>
          <ul>
            <li>For actions that change state — submit, save, delete, publish.</li>
            <li>One primary button per view. Multiple secondary or ghost.</li>
          </ul>
          <h2>When not to use</h2>
          <ul>
            <li>For navigation — use a <code>&lt;a&gt;</code> or Next <code>&lt;Link&gt;</code>.</li>
            <li>Inside a sentence — use a link styled as a button, but the underlying element stays an anchor.</li>
          </ul>

          <h2>Props</h2>
          <pre style={{ background: 'var(--color-bg-sunken)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', overflow: 'auto', fontSize: '0.8125rem' }}>
{`interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'; // default: 'primary'
  size?: 'sm' | 'md' | 'lg';                    // default: 'md'
  children: ReactNode;
}`}
          </pre>
        </article>
      </main>
      <Footer />
    </>
  );
}
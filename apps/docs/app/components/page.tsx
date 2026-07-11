import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

type Status = 'shipped' | 'in-progress' | 'planned';

const COMPONENTS: Array<{ slug: string; name: string; status: Status; note?: string }> = [
  { slug: 'button',          name: 'Button',          status: 'shipped' },
  { slug: 'badge',           name: 'Badge',           status: 'in-progress' },
  { slug: 'input',           name: 'Input',           status: 'in-progress' },
  { slug: 'icon-button',     name: 'IconButton',      status: 'planned' },
  { slug: 'select',          name: 'Select',          status: 'planned' },
  { slug: 'checkbox',        name: 'Checkbox',        status: 'planned' },
  { slug: 'radio',           name: 'Radio',           status: 'planned' },
  { slug: 'switch',          name: 'Switch',          status: 'planned' },
  { slug: 'tabs',            name: 'Tabs',            status: 'planned' },
  { slug: 'avatar',          name: 'Avatar',          status: 'planned' },
  { slug: 'tooltip',         name: 'Tooltip',         status: 'planned' },
  { slug: 'toast',           name: 'Toast',           status: 'planned' },
];

const STATUS_LABEL: Record<Status, string> = {
  shipped: 'shipped',
  'in-progress': 'in progress',
  planned: 'planned',
};

export default function ComponentsIndex() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Components</p>
          <h1>Components</h1>
          <p>
            Tokens-backed primitives from <code>@design-system/react</code>. Each
            page shows a static specimen and an interactive playground where you
            can switch variants and sizes.
          </p>

          <h2>First wave</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-3)',
              margin: 'var(--space-4) 0',
            }}
          >
            {COMPONENTS.map((c) => (
              <a
                key={c.slug}
                href={`/components/${c.slug}`}
                style={{
                  padding: 'var(--space-4)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-bg-raised)',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>{c.name}</span>
                  <code
                    style={{
                      fontSize: '0.625rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color:
                        c.status === 'shipped'
                          ? 'var(--color-state-success)'
                          : c.status === 'in-progress'
                          ? 'var(--color-state-warning)'
                          : 'var(--color-text-tertiary)',
                    }}
                  >
                    {STATUS_LABEL[c.status]}
                  </code>
                </div>
              </a>
            ))}
          </div>

          <p style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem' }}>
            <em>
              M6 ships Button fully. The other 11 follow incrementally — each is a
              standalone component in <code>packages/react/src/</code> plus an MDX
              page using the same specimen + playground template.
            </em>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
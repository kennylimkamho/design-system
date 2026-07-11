export function TypeScale() {
  const sizes = [
    { name: 'xs',   size: '12px', sample: 'The quick brown fox' },
    { name: 'sm',   size: '14px', sample: 'The quick brown fox' },
    { name: 'base', size: '16px', sample: 'The quick brown fox' },
    { name: 'lg',   size: '18px', sample: 'The quick brown fox' },
    { name: 'xl',   size: '20px', sample: 'The quick brown fox' },
    { name: '2xl',  size: '24px', sample: 'The quick brown fox' },
    { name: '3xl',  size: '32px', sample: 'The quick brown fox' },
    { name: '4xl',  size: '40px', sample: 'The quick brown fox' },
    { name: '5xl',  size: '56px', sample: 'The quick brown fox' },
  ];

  return (
    <div style={{ margin: 'var(--space-6) 0' }}>
      {sizes.map((s) => (
        <div
          key={s.name}
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 80px 1fr',
            gap: 'var(--space-4)',
            alignItems: 'baseline',
            padding: 'var(--space-3) 0',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
            {s.name}
          </code>
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
            {s.size}
          </code>
          <span style={{ fontSize: s.size, lineHeight: 1.2 }}>{s.sample}</span>
        </div>
      ))}
    </div>
  );
}

export function TypeRoles() {
  return (
    <div style={{ margin: 'var(--space-6) 0', display: 'grid', gap: 'var(--space-4)' }}>
      <div style={{ borderLeft: '3px solid var(--color-accent-principles)', paddingLeft: 'var(--space-4)' }}>
        <p style={{ margin: 0, fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.02em' }}>Display</p>
        <p style={{ margin: 'var(--space-1) 0 0', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
          Inter 600 · 32–56px · letter-spacing -0.02em
        </p>
      </div>
      <div style={{ borderLeft: '3px solid var(--color-state-info)', paddingLeft: 'var(--space-4)' }}>
        <p style={{ margin: 0, fontSize: '1rem', fontWeight: 400 }}>Body — The comfortable default for reading copy.</p>
        <p style={{ margin: 'var(--space-1) 0 0', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
          Inter 400 · 16px · line-height 1.5
        </p>
      </div>
      <div style={{ borderLeft: '3px solid var(--color-state-success)', paddingLeft: 'var(--space-4)' }}>
        <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>Label / UI</p>
        <p style={{ margin: 'var(--space-1) 0 0', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
          Inter 500 · 14px
        </p>
      </div>
      <div style={{ borderLeft: '3px solid var(--color-state-warning)', paddingLeft: 'var(--space-4)' }}>
        <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
          code · label · price — 0x4F3B8B
        </p>
        <p style={{ margin: 'var(--space-1) 0 0', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
          IBM Plex Mono · 13px · all caps tracked +0.08em for labels
        </p>
      </div>
    </div>
  );
}
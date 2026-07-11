type Tone = 'light' | 'dark';

function textColorFor(hex: string): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luma = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luma > 0.6 ? '#1C1917' : '#FAFAFA';
}

export function ColorSwatch({
  name,
  hex,
  tokenVar,
  description,
}: {
  name: string;
  hex: string;
  tokenVar: string;
  description?: string;
}) {
  const fg = textColorFor(hex);
  return (
    <div
      style={{
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: 'var(--color-bg-raised)',
      }}
    >
      <div
        style={{
          background: hex,
          color: fg,
          padding: 'var(--space-5)',
          minHeight: '96px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {name}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>{hex}</span>
      </div>
      <div style={{ padding: 'var(--space-3) var(--space-4)', borderTop: '1px solid var(--color-border-subtle)' }}>
        <code style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>{tokenVar}</code>
        {description && (
          <p style={{ margin: 'var(--space-2) 0 0', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export function ColorSwatchGrid({
  children,
  cols = 3,
}: {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: 'var(--space-4)',
        margin: 'var(--space-6) 0',
      }}
    >
      {children}
    </div>
  );
}
export function TokenTable({
  rows,
}: {
  rows: Array<{ name: string; value: string; usage?: string }>;
}) {
  return (
    <div
      style={{
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        margin: 'var(--space-6) 0',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ background: 'var(--color-bg-sunken)' }}>
            <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', fontWeight: 500, borderBottom: '1px solid var(--color-border-subtle)' }}>
              Token
            </th>
            <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', fontWeight: 500, borderBottom: '1px solid var(--color-border-subtle)' }}>
              Value
            </th>
            <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', fontWeight: 500, borderBottom: '1px solid var(--color-border-subtle)' }}>
              Usage
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td style={{ padding: 'var(--space-3) var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', borderBottom: '1px solid var(--color-border-subtle)' }}>
                {r.name}
              </td>
              <td style={{ padding: 'var(--space-3) var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border-subtle)' }}>
                {r.value}
              </td>
              <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-tertiary)', borderBottom: '1px solid var(--color-border-subtle)' }}>
                {r.usage ?? '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '40rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            margin: 0,
          }}
        >
          v0.1.0 — Monorepo deployed
        </p>
        <h1 style={{ margin: '1rem 0', fontSize: '2rem', lineHeight: 1.2 }}>
          Design system documentation
        </h1>
        <p style={{ margin: 0, opacity: 0.7 }}>
          Foundations, tokens, components, patterns, and the design principles
          behind them. Coming together milestone by milestone.
        </p>
      </div>
    </main>
  );
}
import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '32rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-tertiary)' }}>
          404
        </p>
        <h1 style={{ margin: '1rem 0' }}>Page not found</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The link is broken or the page moved. Try the <Link href="/">homepage</Link> or
          the <Link href="/components">components</Link> index.
        </p>
      </div>
    </main>
  );
}
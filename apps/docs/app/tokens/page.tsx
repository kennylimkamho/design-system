import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { TokenExplorer } from '../../components/TokenExplorer';

export const metadata = { title: 'Tokens — Design System' };

export default async function TokensPage() {
  // Read tokens.json from the workspace package at build time.
  // This is RSC — no client JS shipped for the data layer.
  const tokensPath = join(process.cwd(), '..', '..', 'packages', 'tokens', 'dist', 'tokens.json');
  const raw = await readFile(tokensPath, 'utf8');
  const tokens = JSON.parse(raw);

  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Tokens</p>
          <h1>Tokens</h1>
          <p>
            The machine-readable bridge between design and code. Search, filter by
            role, copy any <code>var(--…)</code> reference. Built from{' '}
            <code>packages/tokens/dist/tokens.json</code> at compile time.
          </p>
          <TokenExplorer tokens={tokens} />
        </article>
      </main>
      <Footer />
    </>
  );
}
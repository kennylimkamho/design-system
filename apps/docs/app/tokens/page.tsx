import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

export default function TokensIndex() {
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
            role, toggle light/dark, copy CSS variable names directly.
          </p>
          <p><em>Interactive explorer ships in M5.</em></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
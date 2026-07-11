import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

export default function PatternsIndex() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Patterns</p>
          <h1>Patterns</h1>
          <p>
            Compositions of components that solve recurring UX problems: empty
            states, multi-step forms, lists &amp; tables, errors &amp; validation.
          </p>
          <p><em>Coming in M7.</em></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
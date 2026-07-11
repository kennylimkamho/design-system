import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

export default function ContentIndex() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Content</p>
          <h1>Content</h1>
          <p>
            Voice &amp; tone, UX writing rules, and the do/don’t pairs that keep
            product copy calm, specific, and plain.
          </p>
          <p><em>Coming in M7.</em></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
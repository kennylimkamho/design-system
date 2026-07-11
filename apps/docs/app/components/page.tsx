import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

const COMPONENTS = [
  'button', 'icon-button', 'input', 'select', 'checkbox', 'radio',
  'switch', 'tabs', 'badge', 'avatar', 'tooltip', 'toast',
];

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
            Tokens-backed primitives. Each component page shows a static specimen
            and an interactive playground where you can switch variants.
          </p>
          <h2>First wave</h2>
          <ul>
            {COMPONENTS.map((c) => (
              <li key={c}><code>{c}</code></li>
            ))}
          </ul>
          <p><em>Coming in M6.</em></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
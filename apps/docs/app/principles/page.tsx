import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

const PRINCIPLES = [
  { slug: 'smart-defaults', title: 'Smart Defaults', desc: 'Never show a blank form. Pre-select the most common choice.' },
  { slug: 'goal-gradient', title: 'Goal Gradient', desc: "Don't start users at 0%. Count what they've already done." },
  { slug: 'reciprocity', title: 'Reciprocity', desc: 'Give real value before asking for sign-up.' },
  { slug: 'ikea-effect', title: 'IKEA Effect', desc: 'Let users build before they commit.' },
  { slug: 'loss-aversion', title: 'Loss Aversion', desc: "Frame prompts around what they lose, not what they gain." },
  { slug: 'contrast-effect', title: 'Contrast Effect', desc: "Never show a cost in isolation. Control the anchor." },
];

export default function PrinciplesIndex() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Principles</p>
          <h1>Design principles</h1>
          <p>
            Six psychology-driven rules that shape every decision in this system.
            Each is illustrated with do/don’t pairs and code so the principle is
            concrete, not aspirational.
          </p>
          <h2>The six principles</h2>
          <ul>
            {PRINCIPLES.map((p) => (
              <li key={p.slug}>
                <a href={`/principles/${p.slug}`}><strong>{p.title}</strong></a> — {p.desc}
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
import { TopNav } from '../components/TopNav';
import { Footer } from '../components/Footer';

const AXIS_TILES = [
  { href: '/handbook/index.html', label: 'Start here / Complete handbook', title: 'The working handbook', desc: '75 chapters. Foundations, product workflows, case studies, Motion Lab and guidance for AI agents.' },
  { href: '/work', label: 'Examples / Product thinking', title: 'Decisions in context', desc: 'Messaging and offer-building examples. See the rule, try the interaction and inspect its boundaries.' },
  {
    href: '/foundations',
    label: '01 / Foundations',
    title: 'Foundations',
    desc: 'Color, type, spacing, radius, elevation, motion.',
  },
  {
    href: '/principles',
    label: '02 / Principles',
    title: 'Design principles',
    desc: 'Six psychology-driven rules that shape every choice.',
  },
  {
    href: '/components',
    label: '03 / Components',
    title: 'Components',
    desc: 'Tokens-backed primitives with specimens and playgrounds.',
  },
  {
    href: '/tokens',
    label: '04 / Tokens',
    title: 'Tokens',
    desc: 'The machine-readable bridge between design and code.',
  },
  {
    href: '/patterns',
    label: '05 / Patterns',
    title: 'Patterns',
    desc: 'Multi-component solutions for recurring UX problems.',
  },
  {
    href: '/content',
    label: '06 / Content',
    title: 'Content',
    desc: 'Voice & tone, UX writing rules, do/don’t pairs.',
  },
  {
    href: '/showcase',
    label: '07 / Showcase',
    title: 'In the wild',
    desc: 'A fictional CRM showing the shared foundations in context.',
  },
];

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <section className="container hero">
          <p className="hero-eyebrow">Product Design System · by Kenny Lim</p>
          <h1 className="hero-title">Product judgment, made reusable.</h1>
          <p className="hero-subtitle">
            A shared language for useful products. Explore the foundations, working components and complete user journeys — with the reasoning behind each decision.
          </p>
          <p className="hero-actions"><a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/handbook/index.html#cover`}>Open the complete handbook →</a></p>
        </section>

        <section className="container" aria-label="Site sections">
          <div className="axis-grid">
            {AXIS_TILES.map((t) => (
              <a key={t.href} href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${t.href}`} className="axis-tile">
                <p className="axis-tile-label">{t.label}</p>
                <h3 className="axis-tile-title">{t.title}</h3>
                <p className="axis-tile-desc">{t.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

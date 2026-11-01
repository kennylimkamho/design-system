import Link from 'next/link';
import { TopNav } from '../components/TopNav';
import { Footer } from '../components/Footer';

const AXIS_TILES = [
  { href: '/work', label: 'Selected work / Product thinking', title: 'ChatDaddy + BobWork', desc: 'Two product contexts. Design decisions, interactive specimens and implementation boundaries.' },
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
          <p className="hero-eyebrow">Kenny / Product design portfolio</p>
          <h1 className="hero-title">Product judgment, made reusable.</h1>
          <p className="hero-subtitle">
            Design systems turn a product direction into decisions a team can use. Explore ChatDaddy and BobWork case studies, then the foundations, tokens and interaction patterns behind consistent software.
          </p>
        </section>

        <section className="container" aria-label="Site sections">
          <div className="axis-grid">
            {AXIS_TILES.map((t) => (
              <Link key={t.href} href={t.href} className="axis-tile">
                <p className="axis-tile-label">{t.label}</p>
                <h3 className="axis-tile-title">{t.title}</h3>
                <p className="axis-tile-desc">{t.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { ColorSwatch, ColorSwatchGrid } from '../../../components/ColorSwatch';

export const metadata = { title: 'Color — Foundations' };

const NEUTRALS = [
  { name: '25',  hex: '#FDFDFD', tokenVar: '--color-neutral-25',  usage: 'Page surface' },
  { name: '50',  hex: '#FAFAFA', tokenVar: '--color-neutral-50',  usage: 'Canvas background' },
  { name: '100', hex: '#F5F5F4', tokenVar: '--color-neutral-100', usage: 'Sunken background' },
  { name: '200', hex: '#E7E5E4', tokenVar: '--color-neutral-200', usage: 'Subtle border' },
  { name: '300', hex: '#D6D3D1', tokenVar: '--color-neutral-300', usage: 'Default border' },
  { name: '400', hex: '#A8A29E', tokenVar: '--color-neutral-400', usage: 'Placeholder' },
  { name: '500', hex: '#78716C', tokenVar: '--color-neutral-500', usage: 'Tertiary text' },
  { name: '600', hex: '#57534E', tokenVar: '--color-neutral-600', usage: '—' },
  { name: '700', hex: '#44403C', tokenVar: '--color-neutral-700', usage: 'Secondary text' },
  { name: '800', hex: '#292524', tokenVar: '--color-neutral-800', usage: '—' },
  { name: '900', hex: '#1C1917', tokenVar: '--color-neutral-900', usage: 'Primary text' },
  { name: '950', hex: '#0C0A09', tokenVar: '--color-neutral-950', usage: 'Dark canvas' },
];

const SEMANTICS = [
  { name: 'success-600', hex: '#13AE5C', tokenVar: '--color-state-success' },
  { name: 'warning-600', hex: '#FFCD29', tokenVar: '--color-state-warning' },
  { name: 'critical-600', hex: '#F34822', tokenVar: '--color-state-critical' },
  { name: 'info-600', hex: '#2F6BFF', tokenVar: '--color-state-info' },
];

export default function ColorPage() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Foundations / Color</p>
          <h1>Color</h1>
          <p>
            A 12-step warm-neutral scale plus four semantic colors and one scoped
            accent. Every role-based token (background, text, border) resolves to
            one of these primitives — change the primitive, the system follows.
          </p>

          <h2>Neutrals</h2>
          <ColorSwatchGrid cols={3}>
            {NEUTRALS.map((n) => (
              <ColorSwatch key={n.name} {...n} />
            ))}
          </ColorSwatchGrid>

          <h2>Semantic</h2>
          <p>Reserved for status communication only. Never decorative.</p>
          <ColorSwatchGrid cols={4}>
            {SEMANTICS.map((s) => (
              <ColorSwatch key={s.name} {...s} />
            ))}
          </ColorSwatchGrid>

          <h2>Accent — principles only</h2>
          <ColorSwatchGrid cols={2}>
            <ColorSwatch
              name="accent.principles"
              hex="#4F3B8B"
              tokenVar="--color-accent-principles"
              description="Scoped to the principles section. Do not use elsewhere."
            />
            <ColorSwatch
              name="accent.principlesSoft"
              hex="#EFEAFB"
              tokenVar="--color-accent-principlessoft"
              description="Tinted background for hero cards in the principles section."
            />
          </ColorSwatchGrid>

          <h2>Roles</h2>
          <p>
            Roles are semantic — they describe <em>what the color is for</em>,
            not what it looks like. Roles map to primitives above.
          </p>
          <ul>
            <li><strong>Background</strong>: canvas, surface, raised, sunken, inverse</li>
            <li><strong>Text</strong>: primary, secondary, tertiary, onAccent, onInverse, link</li>
            <li><strong>Border</strong>: subtle, default, strong, focus</li>
            <li><strong>State</strong>: success, warning, critical, info (+ matching Bg)</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
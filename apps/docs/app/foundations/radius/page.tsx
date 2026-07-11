import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { TokenTable } from '../../../components/TokenTable';

export const metadata = { title: 'Radius — Foundations' };

const RADIUS = [
  { name: '--radius-none', value: '0',     usage: 'Hard edges only' },
  { name: '--radius-sm',   value: '4px',   usage: 'Tags, chips' },
  { name: '--radius-md',   value: '8px',   usage: 'Buttons, inputs' },
  { name: '--radius-lg',   value: '12px',  usage: 'Cards' },
  { name: '--radius-xl',   value: '16px',  usage: 'Modals, large surfaces' },
  { name: '--radius-full', value: '9999px', usage: 'Pills, avatars' },
];

export default function RadiusPage() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Foundations / Radius</p>
          <h1>Radius</h1>
          <p>Six steps. Match the radius to the size of the surface.</p>
          <TokenTable rows={RADIUS} />
        </article>
      </main>
      <Footer />
    </>
  );
}
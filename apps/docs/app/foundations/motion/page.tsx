import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';

export const metadata = { title: 'Motion — Foundations' };

export default function MotionPage() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Foundations / Motion</p>
          <h1>Motion</h1>
          <p>
            Three durations, one easing. Short transitions for state changes;
            longer only for entry / exit of significant surfaces.
          </p>
          <ul>
            <li><strong>fast</strong> 120ms — hover, focus, color changes</li>
            <li><strong>medium</strong> 220ms — card lift, drawer slide</li>
            <li><strong>slow</strong> 360ms — modal open, page transition</li>
          </ul>
          <p>
            All transitions use <code>cubic-bezier(0.2, 0.8, 0.2, 1)</code> —
            accelerate out, decelerate in. Never linear.
          </p>
          <p><em>Concrete motion tokens land in a follow-up. The principles above are binding.</em></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
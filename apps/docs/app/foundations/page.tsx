import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

export default function FoundationsIndex() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Foundations</p>
          <h1>Foundations</h1>
          <p>
            The visual primitives: color, typography, spacing, radius, elevation,
            and motion. These tokens underpin every component and pattern — when
            a foundation shifts, the whole system shifts with it.
          </p>
          <h2>Sections</h2>
          <ul>
            <li><a href="/foundations/color">Color</a> — 12-step neutrals + semantic roles</li>
            <li><a href="/foundations/typography">Typography</a> — Inter + IBM Plex Mono</li>
            <li><a href="/foundations/spacing">Spacing</a> — 4px base scale</li>
            <li><a href="/foundations/radius">Radius</a></li>
            <li><a href="/foundations/elevation">Elevation</a></li>
            <li><a href="/foundations/motion">Motion</a></li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
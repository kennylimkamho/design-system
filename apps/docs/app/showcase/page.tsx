import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

export default function ShowcaseIndex() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Showcase</p>
          <h1>In the wild</h1>
          <p>
            Two fictional products — a CRM and a pricing configurator — built on
            this system. They demonstrate that the same tokens and components
            hold up on real-feeling surfaces.
          </p>
          <ul>
            <li><a href="/showcase/crm">A CRM dashboard</a></li>
            <li><a href="/showcase/pricing">A pricing configurator</a></li>
          </ul>
          <p><em>Coming in M8.</em></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
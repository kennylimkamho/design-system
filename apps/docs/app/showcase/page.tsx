import Link from 'next/link';
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
            Fictional products built on this system. They prove that the same
            tokens and components hold up on real-feeling surfaces — and they
            show how the principles express in UI.
          </p>

          <h2>Available now</h2>
          <ul>
            <li>
              <Link href="/showcase/crm"><strong>A CRM dashboard</strong></Link>
              {' — '}
              Contact table, owner filters, deal-stage badges, KPI tiles.
            </li>
          </ul>

          <h2>Coming next</h2>
          <ul>
            <li>
              <em>A pricing configurator</em>
              {' — '}
              Multi-step form, monthly/annual toggle, comparison table. (Deferred from M8; see plan.)
            </li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
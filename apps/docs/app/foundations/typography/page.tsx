import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { TypeScale, TypeRoles } from '../../../components/TypeScale';

export const metadata = { title: 'Typography — Foundations' };

export default function TypographyPage() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Foundations / Typography</p>
          <h1>Typography</h1>
          <p>
            Two faces, four roles. <strong>Inter</strong> for display, body, and
            labels. <strong>IBM Plex Mono</strong> for code, prices, and any
            inline data.
          </p>

          <h2>Roles</h2>
          <TypeRoles />

          <h2>Scale</h2>
          <p>9-step type scale. Body sits at <code>base</code> (16px).</p>
          <TypeScale />

          <h2>Weights</h2>
          <ul>
            <li><code>regular</code> 400 — body copy, default</li>
            <li><code>medium</code> 500 — labels, table headers</li>
            <li><code>semibold</code> 600 — display, headings</li>
            <li><code>bold</code> 700 — emphasis inside running text</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
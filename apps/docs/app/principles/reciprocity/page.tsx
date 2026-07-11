import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { PrincipleHero } from '../../../components/PrincipleHero';
import { DoDont } from '../../../components/DoDont';

export const metadata = { title: 'Reciprocity — Design Principles' };

export default function Reciprocity() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <PrincipleHero
            number="03"
            title="Reciprocity"
            description="Give real value before asking for sign-up. A free preview, a useful template, or a non-trivial answer earns the next ask."
            illustration={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M48 80 l24 -16 l16 0 l16 16 l0 16 l-16 16 l-16 0 l-24 -16" />
                <path d="M56 96 l24 0" />
                <path d="M192 80 l-24 -16 l-16 0 l-16 16 l0 16 l16 16 l16 0 l24 -16" />
                <path d="M184 96 l-24 0" />
                <path d="M120 50 l0 8" strokeDasharray="3 3" />
                <path d="M116 54 l4 4 l4 -4" />
                <text x="120" y="40" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">give → get</text>
              </svg>
            }
          />

          <DoDont
            good="A template gallery that lets a visitor preview, copy, and export a full project — then asks for an account to save."
            goodCode={`<TemplatePreview allowCopy={true} gateOn="save" />`}
            bad="A template gallery that requires sign-up before showing the first preview."
            badCode={`<TemplatePreview gateOn="view" />`}
          />

          <h2>Why it works</h2>
          <p>
            Reciprocity is a social norm so strong it overrides most friction.
            When a product gives something useful first, the user feels a small
            debt — and the next ask lands lighter.
          </p>

          <h2>How to apply</h2>
          <ul>
            <li>Make the free thing genuinely useful, not a teaser.</li>
            <li>Ask for the smallest possible thing next (email, not card).</li>
            <li>Never bait-and-switch — what you gave must remain free.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
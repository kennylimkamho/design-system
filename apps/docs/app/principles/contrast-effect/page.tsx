import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { PrincipleHero } from '../../../components/PrincipleHero';
import { DoDont } from '../../../components/DoDont';

export const metadata = { title: 'Contrast Effect — Design Principles' };

export default function ContrastEffect() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <PrincipleHero
            number="06"
            title="Contrast Effect"
            description="Never show a cost in isolation. The same price feels cheap next to an expensive anchor and extravagant next to a cheap one. Control the anchor."
            illustration={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <text x="120" y="20" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">same dot — different anchor</text>
                <circle cx="60" cy="80" r="10" fill="currentColor" />
                <circle cx="60" cy="80" r="30" />
                <circle cx="60" cy="80" r="50" />
                <circle cx="180" cy="80" r="10" fill="currentColor" />
                <circle cx="180" cy="80" r="20" />
                <text x="60" y="148" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">big context</text>
                <text x="180" y="148" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">isolated</text>
              </svg>
            }
          />

          <DoDont
            good="A pricing table that shows all three tiers together so the middle tier reads as the natural choice."
            goodCode={`<PriceTable tiers={[basic, pro, enterprise]} />`}
            bad="A pricing page that sends the user to a dedicated page per tier, hiding the comparison."
            badCode={`<PriceCard tier="pro" /> // no context`}
          />

          <h2>Why it works</h2>
          <p>
            Perception is comparative, not absolute. The same number can feel
            like a bargain or a rip-off depending on what sits next to it. When
            you control the anchor, you control the verdict.
          </p>

          <h2>How to apply</h2>
          <ul>
            <li>Always render comparison in context — never isolate a price.</li>
            <li>For upgrades, anchor against the higher tier.</li>
            <li>For downgrades, anchor against the lost capability, not the new price.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { PrincipleHero } from '../../../components/PrincipleHero';
import { DoDont } from '../../../components/DoDont';

export const metadata = { title: 'Loss Aversion — Design Principles' };

export default function LossAversion() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <PrincipleHero
            number="05"
            title="Loss Aversion"
            description="Frame prompts around what the user loses, not what they gain. Losses feel roughly twice as painful as equivalent gains feel good."
            illustration={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="120" y1="30" x2="120" y2="130" />
                <line x1="60" y1="50" x2="180" y2="80" />
                <line x1="50" y1="46" x2="80" y2="42" />
                <path d="M50 46 l30 -4 l0 8 l-30 4 z" />
                <line x1="160" y1="84" x2="200" y2="80" />
                <path d="M160 84 l40 -4 l0 8 l-40 4 z" />
                <text x="32" y="68" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none">LOSS</text>
                <text x="208" y="78" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none" textAnchor="end">GAIN</text>
                <circle cx="64" cy="22" r="8" />
                <line x1="64" y1="18" x2="64" y2="24" />
              </svg>
            }
          />

          <DoDont
            good='"Your saved searches will be deleted in 7 days. Re-verify your email to keep them."'
            goodCode={`<Banner tone="warning"> 7 days until saved searches are removed. </Banner>`}
            bad='"Verify your email to unlock saved searches!"'
            badCode={`<Banner tone="info"> Verify your email for a better experience. </Banner>`}
          />

          <h2>Why it works</h2>
          <p>
            People overweight losses against equivalent gains. The same dollar
            feels bigger when framed as &quot;you&apos;re losing it&quot; than as
            &quot;you could have it&quot;. Use this sparingly — overuse breeds
            distrust.
          </p>

          <h2>How to apply</h2>
          <ul>
            <li>For churn and re-engagement, lead with what&apos;s at risk.</li>
            <li>Pair every loss frame with a concrete, single-step remedy.</li>
            <li>Never invent losses that don&apos;t exist (dark patterns).</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
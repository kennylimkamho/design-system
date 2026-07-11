import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { PrincipleHero } from '../../../components/PrincipleHero';
import { DoDont } from '../../../components/DoDont';

export const metadata = { title: 'Goal Gradient — Design Principles' };

export default function GoalGradient() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <PrincipleHero
            number="02"
            title="Goal Gradient"
            description="Don't start users at 0%. Count what they have already done — the closer they feel to the goal, the harder they work."
            illustration={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="32" y="68" width="176" height="14" rx="7" />
                <rect x="32" y="68" width="123" height="14" rx="7" fill="currentColor" fillOpacity="0.2" stroke="none" />
                <line x1="76" y1="60" x2="76" y2="90" />
                <line x1="120" y1="56" x2="120" y2="94" />
                <line x1="164" y1="60" x2="164" y2="90" />
                <circle cx="155" cy="75" r="6" fill="currentColor" />
                <text x="32" y="50" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none">step 1</text>
                <text x="120" y="50" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">step 2</text>
                <text x="164" y="50" fontFamily="ui-monospace, monospace" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">step 3</text>
                <text x="208" y="78" fontFamily="ui-monospace, monospace" fontSize="11" fill="currentColor" stroke="none">70%</text>
              </svg>
            }
          />

          <DoDont
            good={'An onboarding flow that opens with "You\'re 30% set up — 2 of 5 steps done."'}
            goodCode={`<Progress value={2} max={5} />`}
            bad='An onboarding flow that shows a blank screen or "0 of 5 steps complete".'
            badCode={`<Progress value={0} max={5} />`}
          />

          <h2>Why it works</h2>
          <p>
            People accelerate as they approach a goal. Showing partial progress
            reframes the remaining work as &quot;almost there&quot; rather than
            &quot;not started&quot;. The effect compounds with streaks, badges,
            and saved state.
          </p>

          <h2>How to apply</h2>
          <ul>
            <li>On returning, restore and surface previous progress.</li>
            <li>Use concrete counts (&quot;3 of 5&quot;) — abstract percentages feel less earned.</li>
            <li>Show progress for sub-tasks, not only the top-level goal.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
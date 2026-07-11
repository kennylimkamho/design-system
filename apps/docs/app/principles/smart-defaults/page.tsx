import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { PrincipleHero } from '../../../components/PrincipleHero';
import { DoDont } from '../../../components/DoDont';

export const metadata = { title: 'Smart Defaults — Design Principles' };

export default function SmartDefaults() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <PrincipleHero
            number="01"
            title="Smart Defaults"
            description="Never show a blank form. Pre-select the most common choice so users can confirm rather than decide."
            illustration={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="32" y="24" width="176" height="112" rx="8" />
                <line x1="48" y1="48" x2="120" y2="48" />
                <rect x="48" y="64" width="144" height="20" rx="4" fill="currentColor" fillOpacity="0.12" />
                <circle cx="60" cy="74" r="4" fill="currentColor" />
                <line x1="72" y1="74" x2="180" y2="74" />
                <rect x="48" y="92" width="144" height="20" rx="4" />
                <circle cx="60" cy="102" r="4" />
                <line x1="72" y1="102" x2="180" y2="102" />
                <circle cx="200" cy="38" r="12" fill="currentColor" />
                <path d="M194 38 l4 4 l8 -8" stroke="var(--color-bg-canvas, #FAFAFA)" strokeWidth="2.5" />
              </svg>
            }
          />

          <DoDont
            good="A pricing configurator that opens with the most common plan already selected. Users confirm, not decide."
            goodCode={`<PlanPicker defaultPlan="team" />`}
            bad="The same configurator that opens blank, forcing every user to read the matrix and pick from scratch."
            badCode={`<PlanPicker /> // ← no default`}
          />

          <h2>Why it works</h2>
          <p>
            Defaults are a polite recommendation. They reduce cognitive load for
            the 80% who would have picked the same option, and the 20% who want
            something else can still override — usually in one click.
          </p>

          <h2>How to apply</h2>
          <ul>
            <li>Pre-select the option you would choose for a new user.</li>
            <li>Pre-fill country, currency, timezone, and units from the user&apos;s locale.</li>
            <li>For destructive or irreversible choices, do <em>not</em> use a default — make the user confirm.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
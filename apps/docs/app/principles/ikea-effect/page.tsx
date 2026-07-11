import { TopNav } from '../../../components/TopNav';
import { Footer } from '../../../components/Footer';
import { Sidebar } from '../../../components/Sidebar';
import { PrincipleHero } from '../../../components/PrincipleHero';
import { DoDont } from '../../../components/DoDont';

export const metadata = { title: 'IKEA Effect — Design Principles' };

export default function IkeaEffect() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <PrincipleHero
            number="04"
            title="IKEA Effect"
            description="Let users build before they commit. Effort increases valuation — what people assemble, they value."
            illustration={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="32" y="60" width="40" height="40" rx="4" />
                <rect x="100" y="60" width="40" height="40" rx="4" />
                <rect x="168" y="60" width="40" height="40" rx="4" />
                <path d="M120 30 l0 14" strokeDasharray="3 3" />
                <path d="M116 40 l4 4 l4 -4" />
                <rect x="60" y="116" width="120" height="28" rx="4" fill="currentColor" fillOpacity="0.15" />
                <line x1="100" y1="116" x2="100" y2="144" />
                <line x1="140" y1="116" x2="140" y2="144" />
              </svg>
            }
          />

          <DoDont
            good="A dashboard where the user customizes their widgets, layout, and shortcuts in a sandbox before being asked to publish."
            goodCode={`<Sandbox mode="edit" onPublish={...} />`}
            bad="A dashboard where the user picks a fixed template from a dropdown and the choice is final."
            badCode={`<TemplatePicker templates={...} onChoose={...} />`}
          />

          <h2>Why it works</h2>
          <p>
            When users invest effort, they value the outcome more — even when
            the result is objectively identical to a preset they could have
            chosen. Effort creates attachment.
          </p>

          <h2>How to apply</h2>
          <ul>
            <li>Provide a sandbox where experimentation has no cost.</li>
            <li>Let users name, reorder, and customize before commit.</li>
            <li>Surface their handiwork back to them (&quot;Your dashboard&quot;).</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
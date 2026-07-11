import { TopNav } from '../../components/TopNav';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { DoDont } from '../../components/DoDont';

export const metadata = { title: 'Content — Design System' };

export default function ContentIndex() {
  return (
    <>
      <TopNav />
      <main className="container doc">
        <Sidebar />
        <article className="doc-content">
          <p className="doc-eyebrow">Content</p>
          <h1>Content</h1>
          <p>
            Voice &amp; tone, UX writing rules, and the do/don’t pairs that keep
            product copy calm, specific, and plain. Rooted in the principles —
            Smart Defaults and Reciprocity show up most often here.
          </p>

          <h2>The three rules</h2>
          <ul>
            <li><strong>Calm</strong> — never urgent where the situation isn’t.</li>
            <li><strong>Specific</strong> — name the thing, count the things.</li>
            <li><strong>Plain</strong> — short words, short sentences, active voice.</li>
          </ul>

          <h2>Empty states</h2>
          <DoDont
            good={<>You have no saved searches yet. Create one to get alerts when new matches appear.</>}
            bad={<>Oops! Nothing here :( Why not try creating a search?</>}
          />

          <h2>Errors</h2>
          <DoDont
            good={<>We couldn’t save your changes. Check your connection and try again.</>}
            bad={<>Error 500: Internal server error. Something went wrong on our end.</>}
          />

          <h2>CTAs</h2>
          <DoDont
            good={<>Save and continue</>}
            bad={<>Click here to save your precious progress and move forward!</>}
          />

          <h2>Confirmations</h2>
          <DoDont
            good={<>Your report is ready. We’ll email you when it’s done.</>}
            bad={<>Success! 🎉 Your amazing report has been successfully generated!</>}
          />

          <h2>Numbers</h2>
          <DoDont
            good={<>3 of 5 steps complete</>}
            bad={<>You have completed sixty percent of your onboarding journey</>}
          />

          <h2>Banned words</h2>
          <p>The CI copy-linter blocks these at PR time:</p>
          <ul>
            <li><code>revolutionize</code></li>
            <li><code>unleash</code></li>
            <li><code>game-changing</code></li>
            <li><code>cutting-edge</code></li>
            <li><code>10x</code> (as a vague intensifier)</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
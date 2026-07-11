import Link from 'next/link';

const SECTIONS: Array<{
  href: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
}> = [
  {
    href: '/foundations',
    label: 'Foundations',
    children: [
      { href: '/foundations/color', label: 'Color' },
      { href: '/foundations/typography', label: 'Typography' },
      { href: '/foundations/spacing', label: 'Spacing' },
      { href: '/foundations/radius', label: 'Radius' },
      { href: '/foundations/elevation', label: 'Elevation' },
      { href: '/foundations/motion', label: 'Motion' },
    ],
  },
  {
    href: '/principles',
    label: 'Principles',
    children: [
      { href: '/principles/smart-defaults', label: 'Smart Defaults' },
      { href: '/principles/goal-gradient', label: 'Goal Gradient' },
      { href: '/principles/reciprocity', label: 'Reciprocity' },
      { href: '/principles/ikea-effect', label: 'IKEA Effect' },
      { href: '/principles/loss-aversion', label: 'Loss Aversion' },
      { href: '/principles/contrast-effect', label: 'Contrast Effect' },
    ],
  },
  { href: '/components', label: 'Components' },
  { href: '/tokens', label: 'Tokens' },
  { href: '/patterns', label: 'Patterns' },
  { href: '/content', label: 'Content' },
  { href: '/showcase', label: 'Showcase' },
];

export function Sidebar() {
  return (
    <aside className="doc-sidebar" aria-label="Section navigation">
      {SECTIONS.map((s) => (
        <div key={s.href} className="doc-sidebar-group">
          <Link href={s.href} className="doc-sidebar-label" style={{ display: 'block' }}>
            {s.label}
          </Link>
          {s.children?.map((c) => (
            <Link key={c.href} href={c.href} className="doc-sidebar-link">
              {c.label}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
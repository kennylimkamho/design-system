import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const LEFT_AXIS = [
  { href: '/foundations', label: 'Foundations' },
  { href: '/principles', label: 'Principles' },
  { href: '/components', label: 'Components' },
  { href: '/tokens', label: 'Tokens' },
  { href: '/patterns', label: 'Patterns' },
  { href: '/content', label: 'Content' },
];

const RIGHT_AXIS = [{ href: '/showcase', label: 'Showcase' }];

export function TopNav() {
  return (
    <header className="topnav">
      <div className="container">
        <div className="topnav-inner">
          <Link href="/" className="topnav-brand">
            Design System
          </Link>
          <nav className="topnav-links" aria-label="Primary">
            <div className="topnav-group">
              {LEFT_AXIS.map((l) => (
                <Link key={l.href} href={l.href} className="topnav-link">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="topnav-divider" aria-hidden="true" />
            <div className="topnav-group">
              {RIGHT_AXIS.map((l) => (
                <Link key={l.href} href={l.href} className="topnav-link">
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="topnav-spacer" />
          <div className="topnav-meta">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
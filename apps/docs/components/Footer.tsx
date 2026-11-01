export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-meta">
            MIT licensed · v0.2.0 ·{' '}
            <a
              href="https://github.com/kennylimkamho/design-system/commits/main/"
              rel="noopener noreferrer"
              target="_blank"
            >
              changelog
            </a>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/kennylimkamho/design-system"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://github.com/kennylimkamho/design-system/blob/main/LICENSE"
              rel="noopener noreferrer"
              target="_blank"
            >
              License
            </a>
            <a
              href="https://github.com/kennylimkamho/design-system/blob/main/CONTRIBUTING.md"
              rel="noopener noreferrer"
              target="_blank"
            >
              Contributing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
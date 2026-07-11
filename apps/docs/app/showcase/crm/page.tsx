import Link from 'next/link';
import { Badge, Button } from '@design-system/react';
import '../showcase.css';

const CONTACTS = [
  { initials: 'AM', name: 'Avery Martinez', email: 'avery@acme.co',     company: 'Acme Co',        status: 'active',   stage: 'Qualified',  amount: '$12,400', color: 1 },
  { initials: 'JL', name: 'Jordan Lee',     email: 'jordan@bright.io',   company: 'Bright',         status: 'active',   stage: 'Proposal',   amount: '$48,000', color: 2 },
  { initials: 'SK', name: 'Sasha Khan',     email: 'sasha@delta.dev',    company: 'Delta',          status: 'active',   stage: 'Negotiation', amount: '$96,200', color: 3 },
  { initials: 'RP', name: 'Riley Park',     email: 'riley@echo.studio',  company: 'Echo Studio',    status: 'paused',   stage: 'Discovery',  amount: '$3,800',  color: 4 },
  { initials: 'MO', name: 'Morgan O\'Brien',email: 'morgan@foxtrot.app', company: 'Foxtrot',        status: 'active',   stage: 'Closed Won', amount: '$124,000', color: 5 },
  { initials: 'TN', name: 'Taylor Nguyen',  email: 'taylor@golf.holdings', company: 'Golf Holdings', status: 'active',   stage: 'Qualified',  amount: '$18,750', color: 1 },
  { initials: 'CD', name: 'Casey Diaz',     email: 'casey@hotel.cloud',  company: 'Hotel Cloud',    status: 'lost',     stage: 'Closed Lost', amount: '$0',     color: 2 },
];

const STATUS_TONE: Record<string, 'success' | 'warning' | 'critical' | 'neutral'> = {
  active: 'success',
  paused: 'warning',
  lost: 'critical',
};

const STAGE_TONE: Record<string, 'info' | 'accent' | 'neutral' | 'success'> = {
  Qualified: 'info',
  Proposal: 'accent',
  Negotiation: 'accent',
  Discovery: 'neutral',
  'Closed Won': 'success',
  'Closed Lost': 'neutral',
};

function colorFor(stage: string): number {
  // deterministic avatar color by stage
  return ({ Qualified: 1, Proposal: 2, Negotiation: 3, Discovery: 4, 'Closed Won': 3, 'Closed Lost': 5 } as Record<string, number>)[stage] ?? 1;
}

export default function CrmShowcase() {
  return (
    <div className="showcase-shell">
      <header className="showcase-topbar">
        <Link href="/" className="showcase-brand">A CRM</Link>
        <nav className="showcase-topbar-nav">
          <Link href="/showcase/crm">Contacts</Link>
          <a href="#">Pipeline</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>
        <div className="showcase-topbar-spacer" />
        <div className="showcase-topbar-meta">
          <span>42 contacts · 3 selected</span>
          <span className="showcase-avatar" aria-label="User">KL</span>
        </div>
      </header>

      <main className="crm-page">
        <div className="crm-page-header">
          <div>
            <h1 className="crm-page-title">Contacts</h1>
            <p className="crm-page-subtitle">Every conversation, deal, and follow-up in one place.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Button variant="secondary">Import</Button>
            <Button variant="primary">+ New contact</Button>
          </div>
        </div>

        <div className="crm-stats">
          <div className="crm-stat">
            <p className="crm-stat-label">Active deals</p>
            <p className="crm-stat-value">12</p>
            <p className="crm-stat-trend up">+3 this week</p>
          </div>
          <div className="crm-stat">
            <p className="crm-stat-label">Pipeline value</p>
            <p className="crm-stat-value">$303,150</p>
            <p className="crm-stat-trend up">+$48k vs last week</p>
          </div>
          <div className="crm-stat">
            <p className="crm-stat-label">Win rate (30d)</p>
            <p className="crm-stat-value">68%</p>
            <p className="crm-stat-trend down">-4 pts</p>
          </div>
          <div className="crm-stat">
            <p className="crm-stat-label">Avg. time to close</p>
            <p className="crm-stat-value">14d</p>
            <p className="crm-stat-trend up">-2 days</p>
          </div>
        </div>

        <div className="crm-layout">
          <aside className="crm-filter" aria-label="Filters">
            <div className="crm-filter-group">
              <p className="crm-filter-label">Stage</p>
              <div className="crm-filter-row"><span>Qualified</span><span className="crm-filter-count">8</span></div>
              <div className="crm-filter-row"><span>Proposal</span><span className="crm-filter-count">4</span></div>
              <div className="crm-filter-row"><span>Negotiation</span><span className="crm-filter-count">2</span></div>
              <div className="crm-filter-row"><span>Closed Won</span><span className="crm-filter-count">11</span></div>
            </div>
            <div className="crm-filter-group">
              <p className="crm-filter-label">Owner</p>
              <div className="crm-filter-row"><span>Kenny Lim</span><span className="crm-filter-count">18</span></div>
              <div className="crm-filter-row"><span>Unassigned</span><span className="crm-filter-count">3</span></div>
            </div>
          </aside>

          <div className="crm-table-card">
            <div className="crm-table-toolbar">
              <div>
                <span className="crm-table-title">All contacts</span>
                <span className="crm-table-count">{CONTACTS.length} shown</span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <Button variant="ghost" size="sm">Filter</Button>
                <Button variant="ghost" size="sm">Sort: Recent</Button>
              </div>
            </div>
            <table className="crm-table">
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Company</th>
                  <th>Stage</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {CONTACTS.map((c) => (
                  <tr key={c.email}>
                    <td>
                      <div className="crm-contact-name">
                        <span className={`crm-avatar color-${colorFor(c.stage)}`}>{c.initials}</span>
                        <div>
                          <div>{c.name}</div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>{c.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{c.company}</td>
                    <td><Badge tone={STAGE_TONE[c.stage] ?? 'neutral'}>{c.stage}</Badge></td>
                    <td><Badge tone={STATUS_TONE[c.status] ?? 'neutral'}>{c.status}</Badge></td>
                    <td className="crm-amount" style={{ textAlign: 'right' }}>{c.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
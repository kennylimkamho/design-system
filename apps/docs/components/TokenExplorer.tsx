'use client';

import { useDeferredValue, useMemo, useState } from 'react';

type TokenLeaf = { path: string; value: string };
type TokenGroup = {
  role: string;
  tokens: TokenLeaf[];
};

function groupTokens(tokens: Record<string, unknown>): TokenGroup[] {
  const groups: Record<string, TokenLeaf[]> = {};
  function walk(node: unknown, parts: string[]) {
    if (typeof node === 'string') {
      const role = parts[1] ?? 'other';
      groups[role] ??= [];
      groups[role].push({ path: parts.join('.'), value: node });
      return;
    }
    if (node && typeof node === 'object') {
      for (const [k, v] of Object.entries(node)) walk(v, [...parts, k]);
    }
  }
  walk(tokens, []);
  return Object.entries(groups).map(([role, tokens]) => ({ role, tokens }));
}

export function TokenExplorer({ tokens }: { tokens: Record<string, unknown> }) {
  const groups = useMemo(() => groupTokens(tokens), [tokens]);
  const [query, setQuery] = useState('');
  const [activeRoles, setActiveRoles] = useState<Set<string>>(
    () => new Set(groups.map((g) => g.role)),
  );
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const deferredQuery = useDeferredValue(query);
  const visible = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return groups
      .filter((g) => activeRoles.has(g.role))
      .map((g) => ({
        ...g,
        tokens: g.tokens.filter(
          (t) => !q || t.path.toLowerCase().includes(q) || t.value.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.tokens.length > 0);
  }, [groups, deferredQuery, activeRoles]);

  const copy = async (path: string) => {
    const cssVar = '--' + path.replace(/\./g, '-').toLowerCase();
    try {
      await navigator.clipboard.writeText(`var(${cssVar})`);
      setCopiedPath(path);
      setTimeout(() => setCopiedPath(null), 1200);
    } catch {
      // ignore
    }
  };

  const toggleRole = (role: string) => {
    setActiveRoles((prev) => {
      const next = new Set(prev);
      if (next.has(role)) next.delete(role);
      else next.add(role);
      return next;
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap', margin: 'var(--space-4) 0' }}>
        <input
          type="search"
          placeholder="Search tokens…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: '1 1 240px',
            padding: 'var(--space-2) var(--space-3)',
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-bg-raised)',
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
          }}
        />
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          {groups.map((g) => {
            const active = activeRoles.has(g.role);
            return (
              <button
                key={g.role}
                onClick={() => toggleRole(g.role)}
                aria-pressed={active}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: 'var(--space-1) var(--space-3)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 'var(--radius-full)',
                  background: active ? 'var(--color-text-primary)' : 'transparent',
                  color: active ? 'var(--color-bg-canvas)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                }}
              >
                {g.role} ({g.tokens.length})
              </button>
            );
          })}
        </div>
      </div>

      {visible.length === 0 && (
        <p style={{ color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
          No tokens match your search.
        </p>
      )}

      {visible.map((g) => (
        <section key={g.role} style={{ margin: 'var(--space-6) 0' }}>
          <h2 style={{ fontSize: '1rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-tertiary)', margin: '0 0 var(--space-3)' }}>
            {g.role}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-3)' }}>
            {g.tokens.map((t) => {
              const isColor = /^#[0-9A-Fa-f]{3,8}$/.test(t.value);
              return (
                <div
                  key={t.path}
                  id={t.path.replace(/\./g, '-')}
                  style={{
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-raised)',
                    overflow: 'hidden',
                  }}
                >
                  {isColor && (
                    <div style={{ background: t.value, height: '64px' }} aria-hidden="true" />
                  )}
                  <div style={{ padding: 'var(--space-3)' }}>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {t.path}
                    </code>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                      {t.value}
                    </code>
                    <button
                      onClick={() => copy(t.path)}
                      style={{
                        marginTop: 'var(--space-2)',
                        width: '100%',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        padding: 'var(--space-1) var(--space-2)',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'transparent',
                        color: 'var(--color-text-secondary)',
                        cursor: 'pointer',
                      }}
                    >
                      {copiedPath === t.path ? '✓ copied' : 'copy var()'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
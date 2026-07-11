'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

export type Control =
  | { kind: 'select'; label: string; value: string; options: string[]; onChange: (v: string) => void }
  | { kind: 'toggle'; label: string; value: boolean; onChange: (v: boolean) => void }
  | { kind: 'text'; label: string; value: string; onChange: (v: string) => void };

export function Playground({
  preview,
  controls,
}: {
  preview: (state: Record<string, string | boolean>) => ReactNode;
  controls: Control[];
}) {
  const [state, setState] = useState<Record<string, string | boolean>>(
    () => Object.fromEntries(controls.map((c) => [c.label, c.value])),
  );

  const set = (label: string, v: string | boolean) =>
    setState((s) => ({ ...s, [label]: v }));

  return (
    <div
      style={{
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        margin: 'var(--space-6) 0',
      }}
    >
      <div
        style={{
          padding: 'var(--space-8)',
          background: 'var(--color-bg-sunken)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '120px',
        }}
      >
        {preview(state)}
      </div>
      <div
        style={{
          borderTop: '1px solid var(--color-border-subtle)',
          padding: 'var(--space-4)',
          display: 'flex',
          gap: 'var(--space-4)',
          flexWrap: 'wrap',
        }}
      >
        {controls.map((c) => (
          <div key={c.label} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-tertiary)' }}>
              {c.label}
            </label>
            {c.kind === 'select' && (
              <select
                value={c.value}
                onChange={(e) => {
                  c.onChange(e.target.value);
                  set(c.label, e.target.value);
                }}
                style={{
                  padding: 'var(--space-1) var(--space-2)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-bg-raised)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                }}
              >
                {c.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            )}
            {c.kind === 'toggle' && (
              <button
                onClick={() => {
                  const next = !c.value;
                  c.onChange(next);
                  set(c.label, next);
                }}
                aria-pressed={c.value}
                style={{
                  padding: 'var(--space-1) var(--space-3)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 'var(--radius-sm)',
                  background: c.value ? 'var(--color-text-primary)' : 'transparent',
                  color: c.value ? 'var(--color-bg-canvas)' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                }}
              >
                {String(c.value)}
              </button>
            )}
            {c.kind === 'text' && (
              <input
                type="text"
                value={c.value}
                onChange={(e) => {
                  c.onChange(e.target.value);
                  set(c.label, e.target.value);
                }}
                style={{
                  padding: 'var(--space-1) var(--space-2)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-bg-raised)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  minWidth: '160px',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
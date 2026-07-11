import type { HTMLAttributes, ReactNode } from 'react';

type Tone = 'neutral' | 'success' | 'warning' | 'critical' | 'info' | 'accent';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  children: ReactNode;
}

const toneStyles: Record<Tone, React.CSSProperties> = {
  neutral: { background: 'var(--color-bg-sunken, #F5F5F4)', color: 'var(--color-text-secondary, #44403C)' },
  success: { background: 'var(--color-state-successBg, #F9FFFA)', color: 'var(--color-state-success, #13AE5C)' },
  warning: { background: 'var(--color-state-warningBg, #FFFDF5)', color: 'var(--color-state-warning, #FFCD29)' },
  critical: { background: 'var(--color-state-criticalBg, #FFFCFC)', color: 'var(--color-state-critical, #F34822)' },
  info: { background: 'var(--color-state-infoBg, #F4F8FF)', color: 'var(--color-state-info, #2F6BFF)' },
  accent: { background: 'var(--color-accent-principlessoft, #EFEAFB)', color: 'var(--color-accent-principles, #4F3B8B)' },
};

export function Badge({ tone = 'neutral', children, style, ...rest }: BadgeProps) {
  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        padding: '2px 8px',
        borderRadius: 'var(--radius-full, 9999px)',
        fontWeight: 500,
        ...toneStyles[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
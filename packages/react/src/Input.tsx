import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ invalid, style, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      style={{
        height: '40px',
        padding: '0 12px',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        background: 'var(--color-bg-raised, #FFFFFF)',
        color: 'var(--color-text-primary, #1C1917)',
        border: `1px solid ${invalid ? 'var(--color-state-critical, #F34822)' : 'var(--color-border-default, #D6D3D1)'}`,
        borderRadius: 'var(--radius-md, 8px)',
        outline: 'none',
        width: '100%',
        ...style,
      }}
    />
  );
}
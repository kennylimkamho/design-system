import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const sizeStyles: Record<Size, { padding: string; fontSize: string; height: string }> = {
  sm: { padding: '0 12px', fontSize: '13px', height: '32px' },
  md: { padding: '0 16px', fontSize: '14px', height: '40px' },
  lg: { padding: '0 20px', fontSize: '16px', height: '48px' },
};

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: 'var(--color-text-primary, #1C1917)',
    color: 'var(--color-bg-canvas, #FAFAFA)',
    border: '1px solid var(--color-text-primary, #1C1917)',
  },
  secondary: {
    background: 'var(--color-bg-raised, #FFFFFF)',
    color: 'var(--color-text-primary, #1C1917)',
    border: '1px solid var(--color-border-default, #D6D3D1)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-primary, #1C1917)',
    border: '1px solid transparent',
  },
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...rest
}: ButtonProps) {
  const s = sizeStyles[size];
  return (
    <button
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        lineHeight: 1,
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        transition: 'background 120ms, border-color 120ms, color 120ms',
        ...variantStyles[variant],
        height: s.height,
        padding: s.padding,
        fontSize: s.fontSize,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
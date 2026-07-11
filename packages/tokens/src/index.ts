// Re-export the resolved token JSON so consumers (apps/docs RSC, future MCP server)
// can import the same data the CSS variables were generated from.
import tokens from '../dist/tokens.json' with { type: 'json' };

export type ColorRole = 'bg' | 'text' | 'border' | 'state';
export type ColorGroup =
  | 'neutral'
  | 'success'
  | 'warning'
  | 'critical'
  | 'info'
  | 'accent';

export const tokens = tokens as Tokens;

export interface Tokens {
  color: {
    neutral: Record<string, string>;
    success: Record<string, string>;
    warning: Record<string, string>;
    critical: Record<string, string>;
    info: Record<string, string>;
    accent: {
      principles: string;
      principlesSoft: string;
    };
    bg: Record<string, string>;
    text: Record<string, string>;
    border: Record<string, string>;
    state: Record<string, string>;
  };
  space: Record<string, string>;
  radius: Record<string, string>;
  size: Record<string, string>;
  shadow: Record<string, string>;
  font: {
    family: { body: string; mono: string };
    weight: Record<string, string>;
    size: Record<string, string>;
    lineHeight: Record<string, string>;
  };
}

export default tokens;
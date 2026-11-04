export function resolveToken(tokens, key, chain = []) {
  if (chain.includes(key)) throw new Error(`Token cycle: ${[...chain, key].join(' -> ')}`);
  const value = key.split('.').reduce((o, k) => o?.[k], tokens);
  if (typeof value !== 'string') throw new Error(`Missing string token: ${key}`);
  const match = value.match(/^\{([\w.-]+)\}$/);
  return match ? resolveToken(tokens, match[1], [...chain, key]) : value;
}

export function compileTokens(tokens) {
  const lines = ['/* Handbook design tokens. Runtime adoption is versioned separately. */', ':root {'];
  for (const group of ['primitive', 'semantic', 'component', 'space', 'type', 'motion']) {
    for (const name of Object.keys(tokens[group])) lines.push(`  --cd-${group}-${name}: ${resolveToken(tokens, `${group}.${name}`)};`);
  }
  return lines.join('\n') + '\n}\n';
}

export function compileModuleIcons(source) {
  return Object.fromEntries(Object.entries(source).map(([name, body]) => {
    if (!/^[a-z-]+$/.test(name) || /<\/?(?:script|foreignObject|style)|\bon\w+\s*=|(?:href|src)\s*=/i.test(body)) throw new Error(`Unsafe glyph ${name}`);
    return [name, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body.replaceAll('data-accent="true"', 'data-accent="true" stroke="var(--cd-icon-accent, #0F5BFF)"')}</svg>`];
  }));
}

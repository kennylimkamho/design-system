export const dynamic = 'force-static';

const BASE = 'https://kennylimkamho.github.io/design-system';

function urlEntry(path: string): string {
  return `  <url><loc>${BASE}${path}</loc></url>`;
}

export function GET(): Response {
  const sections = ['', 'foundations', 'principles', 'components', 'tokens', 'patterns', 'content', 'showcase', 'work'];
  const principleSlugs = ['smart-defaults', 'goal-gradient', 'reciprocity', 'ikea-effect', 'loss-aversion', 'contrast-effect'];
  const foundationSlugs = ['color', 'typography', 'spacing', 'radius', 'elevation', 'motion'];
  const patternSlugs = ['empty-states', 'forms-multi-step', 'lists-and-tables', 'errors-and-validation'];

  const allPaths = [
    ...sections.map((s) => `/${s}`),
    ...principleSlugs.map((s) => `/principles/${s}`),
    ...foundationSlugs.map((s) => `/foundations/${s}`),
    ...patternSlugs.map((s) => `/patterns/${s}`),
    '/showcase/crm',
    '/handbook/index.html',
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map(urlEntry).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
}

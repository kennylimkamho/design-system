export const dynamic = 'force-static';

export function GET(): Response {
  const body = `User-agent: *
Allow: /

Sitemap: https://design-system.example.com/sitemap.xml
`;
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}